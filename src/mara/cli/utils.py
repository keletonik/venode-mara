"""
Utility functions for MARA CLI
"""

import os
import yaml
import json
from typing import Dict, Any, Optional


def load_configuration(config_path: Optional[str] = None) -> Dict[str, Any]:
    """Load configuration from file or environment"""
    config = {}
    
    # Load from environment variables
    env_config = {
        "QWEN_API_KEY": os.getenv("QWEN_API_KEY"),
        "QWEN_API_URL": os.getenv("QWEN_API_URL", "https://api.qwen.ai/v1"),
        "QWEN_MODEL": os.getenv("QWEN_MODEL", "qwen2.5-coder"),
        "DATABASE_URL": os.getenv("DATABASE_URL", "sqlite:///mara_intelligence.db"),
        "DATABASE_TYPE": os.getenv("DATABASE_TYPE", "sqlite"),
        "VENODE_API_KEY": os.getenv("VENODE_API_KEY"),
        "VENODE_API_URL": os.getenv("VENODE_API_URL", "https://api.venode.ai/v1"),
        "SECURITY_SANDBOX_ENABLED": os.getenv("SECURITY_SANDBOX_ENABLED", "true").lower() == "true",
        "SECURITY_DATA_ENCRYPTION": os.getenv("SECURITY_DATA_ENCRYPTION", "true").lower() == "true",
        "CACHE_ENABLED": os.getenv("CACHE_ENABLED", "true").lower() == "true",
        "PARALLEL_PROCESSING_ENABLED": os.getenv("PARALLEL_PROCESSING_ENABLED", "true").lower() == "true",
    }
    
    # Load from configuration file if provided
    if config_path and os.path.exists(config_path):
        with open(config_path, 'r') as f:
            if config_path.endswith(('.yaml', '.yml')):
                file_config = yaml.safe_load(f)
            elif config_path.endswith('.json'):
                file_config = json.load(f)
            else:
                # Try both formats
                content = f.read()
                try:
                    file_config = yaml.safe_load(content)
                except yaml.YAMLError:
                    try:
                        file_config = json.loads(content)
                    except json.JSONDecodeError:
                        raise ValueError(f"Unsupported configuration format: {config_path}")
            
            config.update(file_config)
    
    # Also check for .env file if no config_path provided
    elif os.path.exists(".env"):
        from dotenv import load_dotenv
        load_dotenv()
        # Reload environment variables after loading .env
        env_config = {
            "QWEN_API_KEY": os.getenv("QWEN_API_KEY"),
            "QWEN_API_URL": os.getenv("QWEN_API_URL", "https://api.qwen.ai/v1"),
            "QWEN_MODEL": os.getenv("QWEN_MODEL", "qwen2.5-coder"),
            "DATABASE_URL": os.getenv("DATABASE_URL", "sqlite:///mara_intelligence.db"),
            "DATABASE_TYPE": os.getenv("DATABASE_TYPE", "sqlite"),
            "VENODE_API_KEY": os.getenv("VENODE_API_KEY"),
            "VENODE_API_URL": os.getenv("VENODE_API_URL", "https://api.venode.ai/v1"),
            "SECURITY_SANDBOX_ENABLED": os.getenv("SECURITY_SANDBOX_ENABLED", "true").lower() == "true",
            "SECURITY_DATA_ENCRYPTION": os.getenv("SECURITY_DATA_ENCRYPTION", "true").lower() == "true",
            "CACHE_ENABLED": os.getenv("CACHE_ENABLED", "true").lower() == "true",
            "PARALLEL_PROCESSING_ENABLED": os.getenv("PARALLEL_PROCESSING_ENABLED", "true").lower() == "true",
        }
    
    # Update with environment variables (environment overrides file)
    config.update(env_config)
    
    return config


def validate_configuration(config: Dict[str, Any]) -> bool:
    """Validate configuration completeness"""
    required_keys = [
        "QWEN_API_KEY",
        "QWEN_API_URL",
        "DATABASE_URL",
        "VENODE_API_KEY",
    ]
    
    for key in required_keys:
        if not config.get(key):
            raise ValueError(f"Missing required configuration: {key}")
    
    return True


def format_output(data: Any, format_type: str = "json") -> str:
    """Format output data based on format type"""
    if format_type == "json":
        return json.dumps(data, indent=2)
    elif format_type == "yaml":
        return yaml.dump(data, default_flow_style=False)
    elif format_type == "text":
        return str(data)
    else:
        raise ValueError(f"Unsupported format: {format_type}")