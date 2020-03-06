FROM node AS builder
# Set the working directory
WORKDIR /Hangman
COPY . .
RUN npm install react-scripts -g --silent
RUN npm install
RUN npm run build

FROM node
RUN npm install -g serve
WORKDIR /Hangman
COPY --from=builder /Hangman/build .
CMD ["serve", "-p", "80", "-s", "."]doc

# COPY package.json .

# RUN npm install
# COPY . .
# RUN npm run build

# EXPOSE 3000

# CMD ['server', '-s', 'build']