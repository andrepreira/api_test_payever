# Define variables
DOCKER_COMPOSE=docker-compose.yaml
DOCKER_BUILD_CONTEXT=.

# Build the application Docker image
build:
	docker build -t myapp .

# Start the Docker Compose setup
up:
	docker-compose -f $(DOCKER_COMPOSE) up -d

# Stop the Docker Compose setup
down:
	docker-compose -f $(DOCKER_COMPOSE) down

# Restart the Docker Compose setup
restart: down up

# Initialize the MongoDB database
init-db:
	docker-compose -f $(DOCKER_COMPOSE) run --rm mongodb mongo -u root -p root --authenticationDatabase development /docker-entrypoint-initdb.d/init-mongo.js

# Seed the MongoDB database
seed-db:
	docker-compose -f $(DOCKER_COMPOSE) run --rm app npm run seed-db

# Run the application tests
test:
	docker-compose -f $(DOCKER_COMPOSE) run --rm app npm test

# Start the application in development mode
dev:
	npm run start:dev

# Start the application in production mode
start:
	npm start
