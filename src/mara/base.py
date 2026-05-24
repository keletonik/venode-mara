"""
Base classes for MARA CLI commands and security utilities
"""

import json
import yaml
from datetime import datetime
from typing import Dict, Any, Optional
import logging


class BaseCommand:
    """Base class for all MARA CLI commands"""
    
    def __init__(self, context: Dict[str, Any]):
        self.context = context
        self.logger = logging.getLogger(f"mara.command.{self.__class__.__name__}")
        self.start_time = datetime.now()
    
    def validate_input(self) -> bool:
        """Validate command input parameters"""
        raise NotImplementedError("Subclasses must implement validate_input")
    
    def execute(self) -> Any:
        """Execute the command"""
        raise NotImplementedError("Subclasses must implement execute")
    
    def handle_error(self, error: Exception) -> None:
        """Handle errors during command execution"""
        self.logger.error(f"Command execution failed: {error}", exc_info=True)
        raise error
    
    def get_timestamp(self) -> str:
        """Get current timestamp in ISO format"""
        return datetime.now().isoformat()
    
    def format_output(self, data: Dict[str, Any], format_type: str = "json") -> str:
        """Format output data based on format type"""
        if format_type == "json":
            return json.dumps(data, indent=2)
        elif format_type == "yaml":
            return yaml.dump(data, default_flow_style=False)
        elif format_type == "text":
            return str(data)
        else:
            raise ValueError(f"Unsupported format: {format_type}")
    
    def log_execution(self, result: Any) -> None:
        """Log command execution details"""
        execution_time = (datetime.now() - self.start_time).total_seconds()
        self.logger.info(f"Command executed in {execution_time:.2f}s")
        self.logger.debug(f"Command result: {result}")
    
    def process_result(self, result: Any) -> Dict[str, Any]:
        """Process raw result into standardized format"""
        if isinstance(result, dict):
            processed = result
        else:
            processed = {
                "result": result,
                "processed": True,
                "timestamp": self.get_timestamp(),
            }
        
        # Add execution metadata
        processed.update({
            "execution_time": (datetime.now() - self.start_time).total_seconds(),
            "command": self.__class__.__name__,
        })
        
        return processed
    
    def process_result(self, result: Any) -> Dict[str, Any]:
        """Process raw result into standardized format"""
        if isinstance(result, dict):
            processed = result
        else:
            processed = {
                "result": result,
                "processed": True,
                "timestamp": self.get_timestamp(),
            }
        
        # Add execution metadata
        processed.update({
            "execution_time": (datetime.now() - self.start_time).total_seconds(),
            "command": self.__class__.__name__,
        })
        
        return processed
    
    def generate_id(self) -> str:
        """Generate unique ID for analysis or operation"""
        from hashlib import sha256
        import time
        import random
        
        data = f"{self.get_timestamp()}{random.randint(0, 10000)}"
        return sha256(data.encode()).hexdigest()[:16]


class SecurityBase:
    """Base class for security-related utilities"""
    
    def __init__(self):
        self.logger = logging.getLogger(f"mara.security.{self.__class__.__name__}")
    
    def sanitize_input(self, input_data: str) -> str:
        """Sanitize user input to prevent injection attacks"""
        # Basic sanitization - replace dangerous characters
        dangerous_chars = ['<', '>', '"', "'", ';', '&', '|', '$', '`']
        sanitized = input_data
        for char in dangerous_chars:
            sanitized = sanitized.replace(char, f'\\{char}')
        return sanitized
    
    def validate_hash(self, hash_value: str, hash_type: str = "md5") -> bool:
        """Validate hash format"""
        hash_patterns = {
            "md5": r'^[a-fA-F0-9]{32}$',
            "sha1": r'^[a-fA-F0-9]{40}$',
            "sha256": r'^[a-fA-F0-9]{64}$',
            "sha512": r'^[a-fA-F0-9]{128}$',
        }
        
        import re
        pattern = hash_patterns.get(hash_type)
        if not pattern:
            raise ValueError(f"Unsupported hash type: {hash_type}")
        
        return bool(re.match(pattern, hash_value))
    
    def check_malicious_patterns(self, content: str) -> Dict[str, Any]:
        """Check for malicious patterns in content"""
        patterns = {
            "sql_injection": [r'(?i)select.*from', r'(?i)insert.*into', r'(?i)delete.*from'],
            "xss": [r'<script.*>', r'onerror=', r'onload='],
            "command_injection": [r';.*ls', r'\|.*cat', r'`.*`'],
            "path_traversal": [r'\.\./', r'\.\.\\'],
        }
        
        results = {}
        import re
        for pattern_type, pattern_list in patterns.items():
            matches = []
            for pattern in pattern_list:
                if re.search(pattern, content):
                    matches.append(pattern)
            results[pattern_type] = {
                "found": len(matches) > 0,
                "matches": matches,
                "count": len(matches),
            }
        
        return results
    
    def log_security_event(self, event_type: str, details: Dict[str, Any]) -> None:
        """Log security event for auditing"""
        event_data = {
            "timestamp": datetime.now().isoformat(),
            "event_type": event_type,
            "details": details,
        }
        self.logger.warning(f"Security event: {json.dumps(event_data)}")