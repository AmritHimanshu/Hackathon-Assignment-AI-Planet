FROM node:22

WORKDIR /AI_Planet_assignment

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# EXPOSE 3000

CMD ["npm","start"]