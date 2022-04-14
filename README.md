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

`toBeNull`, `toBeUndefined`, `toBeDefined` 는 말 그대로 null 또는 undefined 값을 체크하는데 사용한다.

`toBeTruthy`, `toBeFalsy` 는 불리언 값을 판별해준다.

정규표현식은 toMatch 로 가능. 대소문자 구분 뺴려면 i 를 `/` 뒤에 추가하자

## asynchronous

### callback

제스트는 함수의 끝에 도달하면 끝난다. 그래서 비동기 작업의 경우 그냥 테스트 함수의 끝에 도달해버리면 끝내버린다.
비동기 작업이 제대로 작동하게 하기 위해서는 `test` 함수에 `done` 이라는 전달인자를 넣어주어야 한다. 
그러면 제스트는 `done` 이 실행되기 전까지 테스트를 끝내지 않고 기다린다.

`done` 의 기본적인 타임아웃은 5초이다. 만약 api 작업의 실패를 원한다면 try catch 로 감싸주고 try와 catch 둘 다에 done 을 넣어주어야 한다.

### Promise

promise 를 사용한다면 (반환 값이 promise 라면), `done` 을 넘겨주지 않아도 제스트는 기다린다.
