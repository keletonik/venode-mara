#!/usr/bin/env python3
"""Simple test Python file for MARA CLI"""

def insecure_function(password):
    """Function with security issues"""
    # Hardcoded password - security vulnerability
    hardcoded_pass = "admin123"
    
    # No input validation
    if password == hardcoded_pass:
        return True
    
    # SQL injection vulnerability example
    sql_query = f"SELECT * FROM users WHERE password = '{password}'"
    
    return False

class TestClass:
    """Test class with potential issues"""
    
    def __init__(self):
        self.secret_key = "very_secret_key_123"
        
    def unsafe_method(self):
        """Method with potential issues"""
        # Using eval - dangerous!
        result = eval("1 + 2")
        return result