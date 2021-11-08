# Vue Runtime Environment Variables

## Reference
This project is based on this article about [Vue.js runtime environment variables](https://medium.com/js-dojo/vue-js-runtime-environment-variables-807fa8f68665)
  

### Important files to review
* /public/index.html
* /src/config/index.js
* /src/App.vue
* entrypoint.sh
* Dockerfile

git remote add origin https://YovelBeckerMB:$AUTH_GITHUB_TOKEN@github.com/YovelBeckerMB/vue-runtime-envs.git

## Usage
To run and check this image use these commands:

Build the image
```sh
docker build -t vue-runtime-envs .
```

Run the image with the runtime environment variable you want to use
```sh
# for using the staging environment variables
docker run -it -p 8080:80 --env-file=.env.staging --rm vuejs-runtime-environment-variables
```
```sh
# for using the staging environment variables
docker run -it -p 8080:80 --env-file=.env.production --rm vuejs-runtime-environment-variables
```