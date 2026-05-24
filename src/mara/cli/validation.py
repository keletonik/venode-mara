"""
Validation functions for MARA CLI
"""

import os
import re
from typing import Dict, Any


def validate_file_path(path: str) -> bool:
    """Validate file path exists and is accessible"""
    if not os.path.exists(path):
        raise ValueError(f"File path does not exist: {path}")
    
    if not os.access(path, os.R_OK):
        raise ValueError(f"File path not readable: {path}")
    
    return True


def validate_url(url: str) -> bool:
    """Validate URL format"""
    url_pattern = re.compile(
        r'^https?://'  # http or https
        r'(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,6}\.?|'  # domain
        r'localhost|'  # localhost
        r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})'  # IP address
        r'(?::\d+)?'  # port
        r'(?:/?|[/?]\S+)$', re.IGNORECASE
    )
    
    if not url_pattern.match(url):
        raise ValueError(f"Invalid URL format: {url}")
    
    return True


def validate_directory_path(path: str) -> bool:
    """Validate directory path exists and is accessible"""
    if not os.path.exists(path):
        raise ValueError(f"Directory path does not exist: {path}")
    
    if not os.path.isdir(path):
        raise ValueError(f"Path is not a directory: {path}")
    
    if not os.access(path, os.R_OK):
        raise ValueError(f"Directory path not readable: {path}")
    
    return True


def validate_api_key(key: str) -> bool:
    """Validate API key format (basic validation)"""
    if not key or len(key) < 10:
        raise ValueError(f"Invalid API key format: {key}")
    
    return True


def validate_configuration_key(key: str, config: Dict[str, Any]) -> bool:
    """Validate configuration key exists"""
    if key not in config:
        raise ValueError(f"Configuration key not found: {key}")
    
    if not config[key]:
        raise ValueError(f"Configuration key empty: {key}")
    
    return True


def validate_command_args(args: Dict[str, Any], required: list) -> bool:
    """Validate command arguments"""
    for arg in required:
        if arg not in args:
            raise ValueError(f"Missing required argument: {arg}")
        
        if not args[arg]:
            raise ValueError(f"Required argument empty: {arg}")
    
    return True