#!/usr/bin/env python3
"""
Main CLI entry point for MARA CLI
"""

import click
import sys
import os

# Add src directory to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'src'))

from mara.analyze import analyze_group
from mara.scan import scan_group
from mara.detect import detect_group
from mara.database import database_group
from mara.report import report_group
from mara.venode import venode_group


@click.group()
@click.version_option(version="0.1.0")
@click.option(
    "--config",
    type=click.Path(exists=True),
    help="Configuration file path",
)
@click.option(
    "--verbose",
    is_flag=True,
    help="Enable verbose logging",
)
def main(config=None, verbose=False):
    """MARA CLI - Cyber security coding threat intelligence analysis AI tool
    
    A comprehensive threat intelligence analysis tool that leverages Qwen AI models
    for malware analysis, vulnerability scanning, threat detection, and security reporting.
    """
    # Setup logging based on verbose flag
    import logging
    level = logging.DEBUG if verbose else logging.INFO
    logging.basicConfig(
        level=level,
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )
    
    # Load configuration from file or environment
    from mara.cli.utils import load_configuration
    try:
        config_data = load_configuration(config)
        from mara.cli.utils import validate_configuration
        validate_configuration(config_data)
    except Exception as e:
        click.secho(f"Configuration error: {e}", fg="red")
        sys.exit(1)


# Add command groups to main CLI
main.add_command(analyze_group)
main.add_command(scan_group)
main.add_command(detect_group)
main.add_command(database_group)
main.add_command(report_group)
main.add_command(venode_group)


if __name__ == "__main__":
    # Error handling wrapper
    try:
        main()
    except Exception as e:
        click.secho(f"Error: {e}", fg="red")
        sys.exit(1)