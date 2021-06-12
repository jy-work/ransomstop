# RansomStop

## 폴더구조
```
src ─┳─ html
     ┣─ css 
     ┣─ scss
     ┣─ img
     ┣─ js
     └─ video
```

## 개발환경
### 퍼블리싱
* 스타일은 `.scss`로 작성하였습니다.

#### sass 설치하기

1. node.js 설치
https://nodejs.org/ko/

2. `node -v`, `npm -v`로 설치 확인

3. `npm install -g sass`로 sass 설치

4. `sass --version`로 sass 설치 확인

#### sass 실행하기
`\ransomstop` 로 위치한 후
```
$ sass --watch src/scss/:src/css/
```