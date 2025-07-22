#!/bin/bash

echo "Navigating to project directory..."
cd /home/ubuntu/PORTFOLIO || {
  echo "Directory not found! Exiting..."
  exit 1
}

echo "Installing dependencies..."
npm install >> install.log 2>&1

echo "Dependencies installed successfully."
