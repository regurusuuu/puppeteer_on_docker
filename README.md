# Puppeteer on Docker

[puppeteer/puppeteer: Headless Chrome Node.js API](https://github.com/puppeteer/puppeteer) が動作する Docker 環境です。

## Description

- Dcoker 上で puppeteer の実行環境を提供します
- `docker`, `docker-compose` コマンドが実行できる環境が必要です
- src ディレクトリ配下がマウントされています

## Usase

`docker-compose` でコンテナを起動して、ボリュームにマウントされたスクリプトを実行する、という流れになります。

```bash
# リポジトリのクローン
git clone https://atlassian.nifty.com/stash/scm/~sci01708/puppeteer_on_docker.git
cd puppeteer_on_docker

# おもむろに docker-compose
docker-compose up -d

# コンテナに接続
dokcer exec -it puppeteer bash

# サンプルスクリプトの実行
puppeteer@ba0547223609:/workspace$ node sample.js
[ 'Example Domain' ]

# 切断
puppeteer@ba0547223609:/workspace$ exit

# コンテナの削除
docker-compose down
```
