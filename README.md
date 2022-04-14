# Jest tutorial

## installation
```angular2html
npm install --save-dev jest
```

## Usage

jest 명령어를 실행하면 `*.test.{js,ts}` 의 이름을 가지는 파일 또는 `__tests__` 폴더 안에 있는 파일들을 전부 실행한다.
만약 특정 파일이나 폴더만 실행하고 싶다면 명령어 뒤에 파일명 또는 경로를 넣으면 된다.

expect 에 결과값, toBe 에 기댓값을 넣는다.

## Matcher
expect 뒤에 나오는 함수를 matcher 라고 한다. toBe 는 숫자나 문자 등 기본값을 비교하는데 사용한다.
