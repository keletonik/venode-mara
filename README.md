# MARA CLI

**MARA CLI** is a cyber security coding threat intelligence analysis AI tool built by Venode.ai. It leverages Qwen AI models to provide comprehensive threat analysis, malware detection, vulnerability scanning, and security reporting capabilities.

## Features

- **AI-powered Threat Analysis**: Uses Qwen AI models for intelligent threat detection and analysis
- **Malware Scanning**: Scan files and code repositories for malware signatures
- **Vulnerability Detection**: Identify security vulnerabilities in code and systems
- **Intelligence Database**: Manage threat intelligence data with SQLite/PostgreSQL
- **Report Generation**: Generate comprehensive security reports in multiple formats
- **Venode.ai Integration**: Deploy and manage via Venode.ai platform
- **Command Line Interface**: Easy-to-use CLI with comprehensive command structure

## Installation

### From Source

```bash
git clone https://github.com/keletonik/venode-mara
cd venode-mara
pip install -e .
```

### From Package

```bash
pip install mara-cli
```

## Quick Start

1. Set up your environment:

```bash
export QWEN_API_KEY="your-qwen-api-key"
export VENODE_API_KEY="your-venode-api-key"
```

2. Run MARA CLI:

```bash
mara --help
```

## Usage Examples

### Analyze a File for Threats

```bash
mara analyze file /path/to/file --ai-model qwen-max
```

### Scan a Directory for Vulnerabilities

```bash
mara scan directory /path/to/code --vulnerabilities
```

### Detect Malware Patterns

```bash
mara detect malware /path/to/binary --hash-analysis
```

### Query Threat Intelligence Database

```bash
mara database query --type malware --severity critical
```

### Generate Security Report

```bash
mara report generate analysis_id --format pdf --output report.pdf
```

### Deploy via Venode.ai

```bash
mara venode deploy config.yaml --environment production
```

## Command Structure

The MARA CLI has 6 main command groups:

1. **analyze** - Threat analysis functionality
2. **scan** - Security scanning functionality
3. **detect** - Threat detection functionality
4. **database** - Threat intelligence database management
5. **report** - Report generation functionality
6. **venode** - Venode.ai integration functionality

## Configuration

Create a `.env` file or set environment variables:

```
QWEN_API_KEY=your_api_key
QWEN_API_URL=https://api.qwen.ai
VENODE_API_KEY=your_venode_api_key
VENODE_API_URL=https://api.venode.ai
DATABASE_URL=sqlite:///mara_intelligence.db
```

## Development

### Project Structure

```
src/mara/
├── __main__.py          # CLI entry point
├── base.py              # Base classes
├── cli/
│   ├── utils.py         # Utilities
│   ├── errors.py        # Error classes
│   ├── validation.py    # Validation functions
│   ├── context.py       # Context management
├── analyze.py           # Analysis commands
├── scan.py              # Scanning commands
├── detect.py            # Detection commands
├── database.py          # Database commands
├── report.py            # Report commands
├── venode.py            # Venode integration
```

## License

MIT License

## Contributing

Contributions are welcome! Please see the [Contribution Guidelines](CONTRIBUTING.md) for details.

## Support

- Documentation: https://github.com/keletonik/venode-mara/docs
- Issues: https://github.com/keletonik/venode-mara/issues
- Support: support@venode.ai