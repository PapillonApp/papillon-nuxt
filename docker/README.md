# Déployer le site de papillon sur Docker

## Avec l'image Docker officielle
Pour déployer le site de papillon avec l'image disponible sur Docker Hub :

```bash
docker run -d -p 3000:3000 --name papillon-site vilerio/papillon-site:latest
```

Pour déployer le site de papillon au sein d'un cluster swarm avec l'image disponible sur Docker Hub :

```bash
docker stack deploy -c docker-compose-dockerhub.yml papillon-site
```
## Avec l'image Docker locale
Pour construire l'image Docker locale :

```bash
docker build -t papillon-site .
```
Pour déployer le site de papillon avec l'image locale :

```bash
docker run -d -p 3000:3000 --name papillon-site papillon-site
```

Pour déployer le site de papillon au sein d'un cluster swarm avec l'image locale :

```bash
docker stack deploy -c docker-compose.yml papillon-site
```
