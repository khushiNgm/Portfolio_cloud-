#!/bin/bash
# Stop the running React app if it's running
pkill node || echo "No node process found to kill"
