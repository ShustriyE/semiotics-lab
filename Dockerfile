FROM node:16


RUN apt -y update
RUN apt install xsel


ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

RUN npm install -g npm@8.11.0


RUN yarn install

WORKDIR lending_app
ADD . .
RUN npm run build
RUN npm install -g serve

EXPOSE 3000

CMD  serve -s build

# docker build -t react_lending ./
# docker build -t react_lending_dev ./

# docker run -it -d  -p 0.0.0.0:3001:3000 --name  lnd_r_d react_lending_dev
# docker run -it -d  -p 0.0.0.0:8765:3000 --name  lnd_r react_lending

# docker volume create --name lending_volume --opt type=none --opt device=/mnt/data/lending_static --opt o=bind

# docker run -it -d --mount source=lending_volume,target=/lending_app/build -p 0.0.0.0:3000:3000  --name lnd_r react_lending
#--mount source=lending_volume,target=/lending_app/build
