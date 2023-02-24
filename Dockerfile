# Use Node.js LTS version
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
# RUN npm install --production
RUN npm install

# Copy application files
COPY . .

# Expose application port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
