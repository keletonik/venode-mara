"""
Context management for MARA CLI
"""

from typing import Dict, Any, Optional
import threading


class ExecutionContext:
    """Context for command execution with shared state"""
    
    def __init__(self):
        self._state = {}
        self._lock = threading.Lock()
    
    def set(self, key: str, value: Any) -> None:
        """Set value in context"""
        with self._lock:
            self._state[key] = value
    
    def get(self, key: str, default: Optional[Any] = None) -> Any:
        """Get value from context"""
        with self._lock:
            return self._state.get(key, default)
    
    def clear(self) -> None:
        """Clear context state"""
        with self._lock:
            self._state.clear()


# Global execution context
context = ExecutionContext()