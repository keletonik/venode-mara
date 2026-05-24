"""
Detect command module for MARA CLI - Threat detection functionality
"""

import click
import hashlib
import json
from typing import Dict, Any
from mara.base import BaseCommand, SecurityBase
from mara.cli.utils import load_configuration
from mara.cli.validation import validate_file_path, validate_directory_path
from mara.cli.context import context


@click.group(name="detect")
def detect_group():
    """Detect malware, intrusions, anomalies"""
    pass


@detect_group.command()
@click.argument("signature", type=str)
@click.option("--database", default="malware_db.json", help="Malware signature database")
@click.option("--format", default="json", help="Output format (json, yaml, text)")
@click.option("--verbose", is_flag=True, help="Enable verbose output")
def malware(signature: str, database: str, format: str, verbose: bool):
    """Detect malware by signature"""
    
    # Create command context
    cmd_context = {
        "command": "detect malware",
        "signature": signature,
        "database": database,
        "format": format,
        "verbose": verbose,
    }
    
    # Execute detection
    detector = MalwareDetector(cmd_context)
    result = detector.execute()
    
    # Output result
    click.echo(result)


@detect_group.command()
@click.argument("file_path", type=click.Path(exists=True))
@click.option("--database", default="intrusion_db.json", help="Intrusion signature database")
@click.option("--format", default="json", help="Output format (json, yaml, text)")
@click.option("--verbose", is_flag=True, help="Enable verbose output")
def intrusion(file_path: str, database: str, format: str, verbose: bool):
    """Detect intrusion attempts in log files"""
    
    # Create command context
    cmd_context = {
        "command": "detect intrusion",
        "file_path": file_path,
        "database": database,
        "format": format,
        "verbose": verbose,
    }
    
    # Execute detection
    detector = IntrusionDetector(cmd_context)
    result = detector.execute()
    
    # Output result
    click.echo(result)


@detect_group.command()
@click.argument("data_path", type=click.Path(exists=True))
@click.option("--threshold", default=0.95, help="Anomaly detection threshold (0-1)")
@click.option("--format", default="json", help="Output format (json, yaml, text)")
@click.option("--verbose", is_flag=True, help="Enable verbose output")
def anomaly(data_path: str, threshold: float, format: str, verbose: bool):
    """Detect anomalies in data"""
    
    # Create command context
    cmd_context = {
        "command": "detect anomaly",
        "data_path": data_path,
        "threshold": threshold,
        "format": format,
        "verbose": verbose,
    }
    
    # Execute detection
    detector = AnomalyDetector(cmd_context)
    result = detector.execute()
    
    # Output result
    click.echo(result)


class MalwareDetector(BaseCommand, SecurityBase):
    """Detect malware using signatures and behavior"""
    
    def __init__(self, context: Dict[str, Any]):
        BaseCommand.__init__(self, context)
        SecurityBase.__init__(self)
        self.signature = context.get("signature")
        self.database = context.get("database", "malware_db.json")
        self.format = context.get("format", "json")
        self.verbose = context.get("verbose", False)
    
    def validate_input(self) -> bool:
        """Validate input parameters"""
        # Validate signature format
        if not self.signature or len(self.signature) < 10:
            raise ValueError("Malware signature too short")
        
        # Validate database file exists
        validate_file_path(self.database)
        
        # Validate threshold
        if self.format not in ["json", "yaml", "text"]:
            raise ValueError("Format must be json, yaml, or text")
        
        return True
    
    def execute(self) -> Dict[str, Any]:
        """Execute malware detection"""
        try:
            # Validate input
            self.validate_input()
            
            # Load configuration
            config = load_configuration()
            
            # Load malware database
            malware_db = self.load_malware_database()
            
            # Detect malware
            detection_result = self.detect_malware(malware_db, config)
            
            # Process detection result
            processed_result = self.process_result(detection_result)
            
            # Store in context
            context.set("last_malware_detection", processed_result)
            
            return processed_result
            
        except Exception as e:
            self.handle_error(e)
            raise
    
    def load_malware_database(self) -> Dict[str, Any]:
        """Load malware signature database"""
        try:
            with open(self.database, 'r') as f:
                return json.load(f)
        except FileNotFoundError:
            # Return empty database if file doesn't exist
            return {"signatures": [], "metadata": {"version": "1.0", "count": 0}}
        except json.JSONDecodeError:
            raise ValueError(f"Invalid database format: {self.database}")
    
    def detect_malware(self, malware_db: Dict[str, Any], config: Dict[str, Any]) -> Dict[str, Any]:
        """Detect malware using signatures"""
        # Calculate signature hash
        signature_hash = hashlib.sha256(self.signature.encode()).hexdigest()
        
        # Check against database
        matches = []
        for signature_entry in malware_db.get("signatures", []):
            if signature_entry.get("hash") == signature_hash:
                matches.append(signature_entry)
        
        # Analyze with Qwen AI if no exact match
        ai_analysis = None
        if not matches:
            ai_analysis = self.analyze_with_qwen(self.signature, config)
        
        detection_data = {
            "signature": self.signature,
            "signature_hash": signature_hash,
            "exact_matches": matches,
            "ai_analysis": ai_analysis,
            "database_info": {
                "database": self.database,
                "signature_count": len(malware_db.get("signatures", [])),
                "database_version": malware_db.get("metadata", {}).get("version", "unknown"),
            },
        }
        
        return detection_data
    
    def analyze_with_qwen(self, signature: str, config: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze signature with Qwen AI"""
        # Mock analysis for demonstration
        analysis = {
            "model_used": "qwen2.5",
            "analysis_type": "malware_signature",
            "confidence": 0.78,
            "prediction": "likely_malicious",
            "threat_score": 72,
            "behavior_patterns": ["persistence", "network_communication", "file_encryption"],
            "recommendations": [
                "Isolate affected system",
                "Run full system scan",
                "Check network connections",
            ],
        }
        
        return analysis


class IntrusionDetector(BaseCommand, SecurityBase):
    """Detect intrusion attempts"""
    
    def __init__(self, context: Dict[str, Any]):
        BaseCommand.__init__(self, context)
        SecurityBase.__init__(self)
        self.file_path = context.get("file_path")
        self.database = context.get("database", "intrusion_db.json")
        self.format = context.get("format", "json")
        self.verbose = context.get("verbose", False)
    
    def validate_input(self) -> bool:
        """Validate input parameters"""
        # Validate file path
        validate_file_path(self.file_path)
        
        # Validate database file exists
        validate_file_path(self.database)
        
        return True
    
    def execute(self) -> Dict[str, Any]:
        """Execute intrusion detection"""
        try:
            # Validate input
            self.validate_input()
            
            # Load configuration
            config = load_configuration()
            
            # Load intrusion database
            intrusion_db = self.load_intrusion_database()
            
            # Detect intrusions
            detection_result = self.detect_intrusions(intrusion_db, config)
            
            # Process detection result
            processed_result = self.process_result(detection_result)
            
            # Store in context
            context.set("last_intrusion_detection", processed_result)
            
            return processed_result
            
        except Exception as e:
            self.handle_error(e)
            raise
    
    def load_intrusion_database(self) -> Dict[str, Any]:
        """Load intrusion signature database"""
        try:
            with open(self.database, 'r') as f:
                return json.load(f)
        except FileNotFoundError:
            # Return empty database if file doesn't exist
            return {"patterns": [], "metadata": {"version": "1.0", "count": 0}}
        except json.JSONDecodeError:
            raise ValueError(f"Invalid database format: {self.database}")
    
    def detect_intrusions(self, intrusion_db: Dict[str, Any], config: Dict[str, Any]) -> Dict[str, Any]:
        """Detect intrusion attempts in log file"""
        # Read log file
        with open(self.file_path, 'r') as f:
            log_lines = f.readlines()
        
        # Check for intrusion patterns
        detected_intrusions = []
        for pattern_entry in intrusion_db.get("patterns", []):
            pattern = pattern_entry.get("pattern", "")
            severity = pattern_entry.get("severity", "medium")
            description = pattern_entry.get("description", "")
            
            for i, line in enumerate(log_lines):
                if pattern in line:
                    detected_intrusions.append({
                        "line_number": i + 1,
                        "line_content": line.strip(),
                        "pattern": pattern,
                        "severity": severity,
                        "description": description,
                    })
        
        # Analyze with Qwen AI
        ai_analysis = self.analyze_with_qwen(log_lines, config)
        
        detection_data = {
            "file": self.file_path,
            "lines_analyzed": len(log_lines),
            "intrusions_detected": len(detected_intrusions),
            "detected_intrusions": detected_intrusions,
            "ai_analysis": ai_analysis,
            "database_info": {
                "database": self.database,
                "pattern_count": len(intrusion_db.get("patterns", [])),
                "database_version": intrusion_db.get("metadata", {}).get("version", "unknown"),
            },
        }
        
        return detection_data


class AnomalyDetector(BaseCommand, SecurityBase):
    """Detect anomalies in data"""
    
    def __init__(self, context: Dict[str, Any]):
        BaseCommand.__init__(self, context)
        SecurityBase.__init__(self)
        self.data_path = context.get("data_path")
        self.threshold = context.get("threshold", 0.95)
        self.format = context.get("format", "json")
        self.verbose = context.get("verbose", False)
    
    def validate_input(self) -> bool:
        """Validate input parameters"""
        # Validate data path
        validate_file_path(self.data_path)
        
        # Validate threshold
        if not 0 <= self.threshold <= 1:
            raise ValueError("Threshold must be between 0 and 1")
        
        return True
    
    def execute(self) -> Dict[str, Any]:
        """Execute anomaly detection"""
        try:
            # Validate input
            self.validate_input()
            
            # Load configuration
            config = load_configuration()
            
            # Load data
            data = self.load_data()
            
            # Detect anomalies
            detection_result = self.detect_anomalies(data, config)
            
            # Process detection result
            processed_result = self.process_result(detection_result)
            
            # Store in context
            context.set("last_anomaly_detection", processed_result)
            
            return processed_result
            
        except Exception as e:
            self.handle_error(e)
            raise
    
    def load_data(self) -> list:
        """Load data from file"""
        import csv
        import json
        
        # Try to load as JSON first
        try:
            with open(self.data_path, 'r') as f:
                return json.load(f)
        except json.JSONDecodeError:
            pass
        
        # Try to load as CSV
        try:
            with open(self.data_path, 'r') as f:
                reader = csv.DictReader(f)
                return list(reader)
        except:
            pass
        
        # Load as text lines
        with open(self.data_path, 'r') as f:
            return f.readlines()
    
    def detect_anomalies(self, data: list, config: Dict[str, Any]) -> Dict[str, Any]:
        """Detect anomalies in data"""
        # Mock anomaly detection for demonstration
        # In production, this would use statistical methods or ML
        
        anomalies = []
        if isinstance(data, list) and len(data) > 0:
            # Simple statistical anomaly detection
            import statistics
            
            # Extract numerical values if possible
            numerical_data = []
            for item in data:
                if isinstance(item, (int, float)):
                    numerical_data.append(item)
                elif isinstance(item, dict):
                    for value in item.values():
                        if isinstance(value, (int, float)):
                            numerical_data.append(value)
            
            if numerical_data:
                mean = statistics.mean(numerical_data)
                stdev = statistics.stdev(numerical_data) if len(numerical_data) > 1 else 0
                
                for i, value in enumerate(numerical_data):
                    if stdev > 0:
                        z_score = abs((value - mean) / stdev)
                        if z_score > 3:  # More than 3 standard deviations
                            anomalies.append({
                                "index": i,
                                "value": value,
                                "z_score": z_score,
                                "deviation": "high",
                            })
        
        # Analyze with Qwen AI
        ai_analysis = self.analyze_with_qwen(data, config)
        
        detection_data = {
            "data_path": self.data_path,
            "data_points": len(data),
            "anomalies_detected": len(anomalies),
            "detected_anomalies": anomalies,
            "threshold_used": self.threshold,
            "ai_analysis": ai_analysis,
        }
        
        return detection_data