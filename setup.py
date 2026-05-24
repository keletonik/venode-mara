#!/usr/bin/env python

import os
from setuptools import setup, find_packages

# Read the README file for the long description
with open('README.md', encoding='utf-8') as f:
    long_description = f.read()

setup(
    name="mara-cli",
    version="0.1.0",
    description="MARA CLI - Cyber security coding threat intelligence analysis AI tool",
    long_description=long_description,
    long_description_content_type="text/markdown",
    author="Venode.ai",
    author_email="support@venode.ai",
    url="https://venode.ai",
    packages=find_packages(where='src'),
    package_dir={'': 'src'},
    entry_points={
        'console_scripts': [
            'mara=mara.__main__:main',
        ],
    },
    install_requires=[
        'click>=8.1.0',
        'python-dotenv>=1.0.0',
        'requests>=2.31.0',
        'pyyaml>=6.0',
    ],
    extras_require={
        'dev': [
            'pytest>=7.0.0',
            'pytest-cov>=4.0.0',
            'flake8>=6.0.0',
            'black>=23.0.0',
        ],
        'venode': [
            'venode-client>=1.0.0',
        ],
    },
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'Intended Audience :: System Administrators',
        'Intended Audience :: Information Technology',
        'Topic :: Security',
        'Topic :: Software Development',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.10',
        'Programming Language :: Python :: 3.11',
        'Programming Language :: Python :: 3.12',
    ],
    python_requires='>=3.10',
    keywords=['security', 'threat intelligence', 'ai', 'cli', 'cybersecurity', 'analysis'],
    project_urls={
        'Documentation': 'https://github.com/keletonik/venode-mara/docs',
        'Source': 'https://github.com/keletonik/venode-mara',
        'Tracker': 'https://github.com/keletonik/venode-mara/issues',
    },
)