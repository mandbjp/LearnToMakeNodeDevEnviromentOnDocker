# Learn To Make Node Dev Enviroment On Docker

## reference
[開発環境をDockerに乗せる方法とメリットを3ステップで学ぶチュートリアル](https://qiita.com/KeitaMoromizato/items/ae1a57fc62b41b942d71) 

### step1 Dockerfile
1. write `app.js` and `Dockerfile`
2. build `Dockerfile` with specify tag
```
docker build -t docker-sample:1.0 .
```

3. run docker app
```
docker run docker-sample:1.0
```

### step2 docker-compose
1. create files `nginx/conf/default.conf` and `nginx/www/index.html`
2. update `app.js`
3. write `docker-compose.yml`
4. run `docker-compose build` and `docker-compose up`
5. open `http://localhost:8080/` and you should get:
```
- hoge
- fuga
- piyo-2
- piyo-3
- ...
```

