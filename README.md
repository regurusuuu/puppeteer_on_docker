# Puppeteer on Docker

This is docker environment which works [puppeteer/puppeteer: Headless Chrome Node.js API](https://github.com/puppeteer/puppeteer).

## Description

- Need environment can run `docker` and `docker-compose` commands.
- Change docker network settings accordingly on `docker-compose.yml`.
- The `src/` directory is mounted on the volume.

## Usage

Launch a container with `docker-compose up` and run scripts which are mounted the volume.  
If you want to run other puppeteer scripts, you can place them under `src/` directory.

```bash
# clone repository
git clone https://github.com/regurusuuu/puppeteer_on_docker.git
cd puppeteer_on_docker

# build and start up the application
docker-compose up -d

# run sample script
docker-compose exec puppeteer node sample.js
[ 'Example Domain' ]
```
