# Set the working directory
WORKDIR /Hangman

# Copy the file from your host to your current location
COPY package.json .

# Run the command inside your image filesystem
RUN npm install

# RUN sudo npm install -g serve
# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 5000

# Run the specified command within the container.
CMD [ "serve", "-s", "build" ]
# CMD ["apt-get", "install", "nano"]

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .