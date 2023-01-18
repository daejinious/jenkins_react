#!/bin/bash

npm install
npm run build
pm2 restart
systemctl restart nginx
