#nginx
FROM nginx:latest
#创建人
MAINTAINER huangyf
#开启端口 80
EXPOSE 80

#复制项目文件到镜像中
COPY /bundle  /var/www/html/child
COPY nginx.conf /etc/nginx/nginx.conf
COPY start.sh /start.sh
RUN chmod 777 /start.sh
#当启动容器时执

