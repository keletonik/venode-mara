"""
Scan command module for MARA CLI - Security scanning functionality
"""

import click
import os
import subprocess
from typing import Dict, Any
from mara.base import BaseCommand
from mara.cli.utils import load_configuration
from mara.cli.validation import validate_file_path, validate_directory_path, validate_url
from mara.cli.context import context


@click.group(name="scan")
def scan_group():
    """Scan network, web, code for security issues"""
    pass


@scan_group.command()
@click.argument("target", type=str)
@click.option("--ports", default="1-1000", help="Port range to scan (e.g., 1-1000)")
@click.option("--timeout", default=2.0, help="Timeout for each port (seconds)")
@click.option("--format", default="json", help="Output format (json, yaml, text)")
@click.option("--verbose", is_flag=True, help="Enable verbose output")
def network(target: str, ports: str, timeout: float, format: str, verbose: bool):
    """Scan network for open ports and services"""
    
    # Create command context
    cmd_context = {
        "command": "scan network",
        "target": target,
        "ports": ports,
        "timeout": timeout,
        "format": format,
        "verbose": verbose,
    }
    
    # Execute scan
    scanner = NetworkScanner(cmd_context)
    result = scanner.execute()
    
    # Output result
    click.echo(result)


@scan_group.command()
@click.argument("url", type=str)
@click.option("--depth", default=1, help="Crawl depth (1-5)")
@click.option("--format", default="json", help="Output format (json, yaml, text)")
@click.option("--verbose", is_flag=True, help="Enable verbose output")
def web(url: str, depth: int, format: str, verbose: bool):
    """Scan website for security vulnerabilities"""
    
    # Create command context
    cmd_context = {
        "command": "scan web",
        "url": url,
        "depth": depth,
        "format": format,
        "verbose": verbose,
    }
    
    # Execute scan
    scanner = WebScanner(cmd_context)
    result = scanner.execute()
    
    # Output result
    click.echo(result)


@scan_group.command()
@click.argument("code_path", type=click.Path(exists=True))
@click.option("--language", default="auto", help="Programming language to scan")
@click.option("--format", default="json", help="Output format (json, yaml, text)")
@click.option("--verbose", is_flag=True, help="Enable verbose output")
def code(code_path: str, language: str, format: str, verbose: bool):
    """Scan code for security vulnerabilities"""
    
    # Create command context
    cmd_context = {
        "command": "scan code",
        "code_path": code_path,
        "language": language,
        "format": format,
        "verbose": verbose,
    }
    
    # Execute scan
    scanner = CodeScanner(cmd_context)
    result = scanner.execute()
    
    # Output result
    click.echo(result)


class NetworkScanner(BaseCommand):
    """Scan network for security issues"""
    
    def __init__(self, context: Dict[str, Any]):
        super().__init__(context)
        self.target = context.get("target")
        self.ports = context.get("ports", "1-1000")
        self.timeout = context.get("timeout", 2.0)
        self.format = context.get("format", "json")
        self.verbose = context.get("verbose", False)
    
    def validate_input(self) -> bool:
        """Validate input parameters"""
        # Validate target (IP or hostname)
        import re
        ip_pattern = r'^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$'
        hostname_pattern = r'^[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?)*$'
        
        if not (re.match(ip_pattern, self.target) or re.match(hostname_pattern, self.target)):
            raise ValueError(f"Invalid target format: {self.target}")
        
        # Validate port range
        port_pattern = r'^\d+(-\d+)?$'
        if not re.match(port_pattern, self.ports):
            raise ValueError(f"Invalid port range: {self.ports}")
        
        # Validate timeout
        if self.timeout <= 0:
            raise ValueError("Timeout must be positive")
        
        return True
    
    def execute(self) -> Dict[str, Any]:
        """Execute network scan"""
        try:
            # Validate input
            self.validate_input()
            
            # Load configuration
            config = load_configuration()
            
            # Perform network scan
            scan_result = self.perform_scan(config)
            
            # Process scan result
            processed_result = self.process_result(scan_result)
            
            # Store in context
            context.set("last_network_scan", processed_result)
            
            return processed_result
            
        except Exception as e:
            self.handle_error(e)
            raise
    
    def perform_scan(self, config: Dict[str, Any]) -> Dict[str, Any]:
        """Perform network port scan"""
        # Mock scan for demonstration
        # In production, this would use nmap or similar
        
        scan_data = {
            "target": self.target,
            "ports_scanned": self.ports,
            "open_ports": [
                {"port": 22, "service": "ssh", "state": "open"},
                {"port": 80, "service": "http", "state": "open"},
                {"port": 443, "service": "https", "state": "open"},
                {"port": 3306, "service": "mysql", "state": "open"},
            ],
            "security_issues": [
                {"port": 22, "issue": "weak_ssh_config", "severity": "medium"},
                {"port": 80, "issue": "no_https_redirect", "severity": "low"},
                {"port": 3306, "issue": "mysql_exposed", "severity": "high"},
            ],
            "scan_summary": {
                "total_ports": 1000,
                "open_ports": 4,
                "filtered_ports": 12,
                "closed_ports": 984,
                "scan_duration": "45.2s",
            },
        }
        
        return scan_data
    
    def process_scan(self, scan_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process scan results"""
        # Add metadata
        processed = {
            "command": "scan network",
            "target": self.target,
            "timestamp": self.get_timestamp(),
            "scan": scan_data,
            "summary": self.generate_summary(scan_data),
        }
        
        # Format output
        return self.format_output(processed, self.format)


class WebScanner(BaseCommand):
    """Scan website for security vulnerabilities"""
    
    def __init__(self, context: Dict[str, Any]):
        super().__init__(context)
        self.url = context.get("url")
        self.depth = context.get("depth", 1)
        self.format = context.get("format", "json")
        self.verbose = context.get("verbose", False)
    
    def validate_input(self) -> bool:
        """Validate input parameters"""
        # Validate URL
        validate_url(self.url)
        
        # Validate depth
        if not 1 <= self.depth <= 5:
            raise ValueError("Depth must be between 1 and 5")
        
        return True
    
    def execute(self) -> Dict[str, Any]:
        """Execute web scan"""
        try:
            # Validate input
            self.validate_input()
            
            # Load configuration
            config = load_configuration()
            
            # Perform web scan
            scan_result = self.perform_web_scan(config)
            
            # Process scan result
            processed_result = self.process_result(scan_result)
            
            # Store in context
            context.set("last_web_scan", processed_result)
            
            return processed_result
            
        except Exception as e:
            self.handle_error(e)
            raise
    
    def perform_web_scan(self, config: Dict[str, Any]) -> Dict[str, Any]:
        """Perform web security scan"""
        # Mock scan for demonstration
        
        scan_data = {
            "url": self.url,
            "scan_depth": self.depth,
            "pages_scanned": 15,
            "vulnerabilities_found": [
                {"type": "xss", "severity": "high", "page": "/contact", "description": "Reflected XSS in contact form"},
                {"type": "csrf", "severity": "medium", "page": "/login", "description": "Missing CSRF token"},
                {"type": "insecure_cookies", "severity": "low", "page": "/", "description": "Cookies without secure flag"},
            ],
            "security_headers": {
                "present": ["Content-Security-Policy", "X-Frame-Options"],
                "missing": ["Strict-Transport-Security", "X-Content-Type-Options"],
            },
            "ssl_analysis": {
                "certificate_valid": True,
                "expiration_days": 45,
                "protocols": ["TLSv1.2", "TLSv1.3"],
                "weak_ciphers": False,
            },
        }
        
        return scan_data


class CodeScanner(BaseCommand):
    """Scan code for security vulnerabilities"""
    
    def __init__(self, context: Dict[str, Any]):
        super().__init__(context)
        self.code_path = context.get("code_path")
        self.language = context.get("language", "auto")
        self.format = context.get("format", "json")
        self.verbose = context.get("verbose", False)
    
    def validate_input(self) -> bool:
        """Validate input parameters"""
        # Validate path exists
        # Validate code path
        if not os.path.exists(self.code_path):
            raise ValueError(f"Path does not exist: {self.code_path}")
        
        # Validate language
        valid_languages = ["auto", "python", "javascript", "java", "cpp", "go", "rust"]
        if self.language not in valid_languages:
            raise ValueError(f"Invalid language. Must be one of: {', '.join(valid_languages)}")
        
        return True
    
    def execute(self) -> Dict[str, Any]:
        """Execute code scan"""
        try:
            # Validate input
            self.validate_input()
            
            # Load configuration
            config = load_configuration()
            
            # Perform code scan
            scan_result = self.perform_code_scan(config)
            
            # Process scan result
            processed_result = self.process_result(scan_result)
            
            # Store in context
            context.set("last_code_scan", processed_result)
            
            return processed_result
            
        except Exception as e:
            self.handle_error(e)
            raise
    
    def perform_code_scan(self, config: Dict[str, Any]) -> Dict[str, Any]:
        """Perform code security scan"""
        # Mock scan for demonstration
        
        scan_data = {
            "code_path": self.code_path,
            "language": self.detect_language(),
            "files_scanned": 42,
            "lines_of_code": 12500,
            "vulnerabilities": [
                {"type": "sql_injection", "severity": "critical", "file": "database.py", "line": 127},
                {"type": "hardcoded_secret", "severity": "high", "file": "config.py", "line": 45},
                {"type": "xss", "severity": "medium", "file": "views.py", "line": 89},
                {"type": "insecure_random", "severity": "low", "file": "auth.py", "line": 33},
            ],
            "code_quality": {
                "complexity_score": 7.2,
                "maintainability_index": 68,
                "duplication_percentage": 12.5,
            },
            "dependencies": {
                "total": 15,
                "vulnerable": 2,
                "outdated": 3,
            },
        }
        
        return scan_data
    
    def detect_language(self) -> str:
        """Detect programming language from files"""
        if self.language != "auto":
            return self.language
        
        # Simple detection based on file extensions
        extensions = {}
        for root, dirs, files in os.walk(self.code_path):
            for file in files:
                ext = os.path.splitext(file)[1].lower()
                extensions[ext] = extensions.get(ext, 0) + 1
        
        # Map extensions to languages
        language_map = {
            ".py": "python",
            ".js": "javascript",
            ".java": "java",
            ".cpp": "cpp",
            ".go": "go",
            ".rs": "rust",
            ".c": "c",
            ".php": "php",
            ".rb": "ruby",
        }
        
        # Find most common language
        for ext in sorted(extensions, key=extensions.get, reverse=True):
            if ext in language_map:
                return language_map[ext]
        
        return "unknown"