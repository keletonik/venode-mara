"""
Error classes for MARA CLI
"""

class MaraError(Exception):
    """Base exception for MARA CLI errors"""
    pass


class ConfigurationError(MaraError):
    """Configuration-related errors"""
    pass


class CommandError(MaraError):
    """Command execution errors"""
    pass


class AIError(MaraError):
    """AI integration errors"""
    pass


class SecurityError(MaraError):
    """Security-related errors"""
    pass


class DatabaseError(MaraError):
    """Database operation errors"""
    pass


class ReportingError(MaraError):
    """Reporting generation errors"""
    pass


class VenodeError(MaraError):
    """Venode integration errors"""
    pass