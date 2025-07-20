#!/bin/bash
cd /home/ubuntu/my-app
npm install -g serve
serve -s build -l 3000 > /dev/null 2>&1 &
