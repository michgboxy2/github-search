FROM node:12.16.2

WORKDIR /usr/src/githubSearch

COPY ./ ./

RUN npm install

RUN npm build

CMD ["/bin/bash"]