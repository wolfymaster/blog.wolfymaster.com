# specify the node base image with your desired version node:<version>
FROM node:6.11.0

WORKDIR '/home/node/app'

COPY './package.json' '/home/node/app/'

RUN ["npm", "install"]

VOLUME ["/home/node/app/"]

# replace this with your application's default port
EXPOSE 8080

ENTRYPOINT ["npm", "start"]

# To Run :
# docker run --name blog_volume4 -it -p 8080:8080 -e HOST=0.0.0.0 -e PORT=8080 --mount type=volume,target=/home/node/app/node_modules --mount type=bind,source="$(pwd)",target=/home/node/app/  blog_mount