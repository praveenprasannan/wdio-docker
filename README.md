# WebdriverIO tests inside docker

Using `wdio-video-reporter` and has a `docker-compose.yml` ready to spawn a selenium grid.

## Setup docker container

### 1. Install dependencies

```sh
yarn install
```

### 2. Start docker hub with the command

```sh
docker-compose up -d
```

### 3. Check and wait for chrome to register by opening the below command on your browser

```sh
http://localhost:4444/grid/console
```

The Selenium grid should look like below with both Chrome & Firefox to proceed further.

![alt text](https://user-images.githubusercontent.com/8067357/59013000-4c5d0e80-887c-11e9-8adf-6c6600b3cb42.png)

## Running tests

### 1. To run tests, enter

```sh
yarn docker
```

### 2. To see whats going on in the browser during the test, you can run the below commands:

For Chrome:

```sh
open vnc://user:secret@localhost:5901
```

For Firefox:

```sh
open vnc://user:secret@localhost:5902
```

## Reports

### To generate report, run

```sh
yarn report
```

* Using [WDIO Allure report](https://webdriver.io/docs/allure-reporter.html)

* The report will open on `http://localhost:8081` and will look like this

![alt text](https://user-images.githubusercontent.com/8067357/59013086-79a9bc80-887c-11e9-89f3-d32d126ffab0.png)

* Please refresh the browser in case if the report is not loaded properly

## Clean up

### To shut down the docker grid, enter

```sh
docker-compose down
```
