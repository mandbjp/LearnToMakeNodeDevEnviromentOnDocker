# Learn To Make Node Dev Enviroment On Docker

## reference
[開発環境をDockerに乗せる方法とメリットを3ステップで学ぶチュートリアル](https://qiita.com/KeitaMoromizato/items/ae1a57fc62b41b942d71) 

### step1
1. write `app.js` and `Dockerfile`
2. build `Dockerfile` with specify tag
```
docker build -t docker-sample:1.0 .
```

3. run docker app
```
docker run docker-sample:1.0
```
