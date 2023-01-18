#!/bin/bash

npm install
npm run build
pm2 start
systemctl restart nginx
