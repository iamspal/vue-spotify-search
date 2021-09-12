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

### Run E2E tests
```
npm run test:e2e
```

## Project setup with Docker
```
cd docker
docker-compose up
docker exec -it vue /bin/sh
cd /app/docker && bash install.sh && cd .. && npm run serve
```
Once container is running go to http://localhost:8080

### Run unit tests
```
docker exec -it vue /bin/sh
cd /app
npm run test:unit
```

### Run e2e tests
```
docker exec -it vue /bin/sh
cd /app
npm run serve
```

Open new terminal and run: 
```
docker exec -it vue /bin/sh
cd /app
npm run test:e2e
```
