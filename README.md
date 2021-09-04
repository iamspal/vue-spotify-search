# Spotify Search App

## Project setup
```
npm install -g @vue/cli
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
Once development server is running go to: http://localhost:8080
### Compiles and minifies for production
```
npm run build
```

### Run unit tests
```
npm run test:unit
```

## Project setup with Docker
```
docker-compose up
```
Once container is running go to http://localhost:8080

### Run tests
```
docker exec -it vue /bin/sh
cd /app
npm run test:unit
npm run test:e2e
```
