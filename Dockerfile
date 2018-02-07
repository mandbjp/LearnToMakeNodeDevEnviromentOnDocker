FROM node:9.5.0

ENV HOME=/home/app

COPY app.js $HOME/
WORKDIR $HOME

CMD ["node", "app.js"]
