#!/bin/sh
   nginx -c /etc/nginx/nginx.conf
   nginx -s reload   #启动服务
   /bin/bash             #保留一个终端，防止容器自动退出

