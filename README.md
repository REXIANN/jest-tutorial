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

## helper functions
테스트 전 후에 필요한 사전작업들이 생길 수 있다. 제스트는 그러한 작업들을 위한 헬퍼 함수를 제공한다.

### beforeEach, afterEach

말그대로 각 테스트를 진행하기 전의 사전작업, 사후작업을 해주는 역할을 한다.

만약 선행 작업이 오래걸리거나 비동기 작업이라면(예시: db에 접속해서 유저 정보를 가져와야 함)

### beforeAll, afterAll

말그대로 모든 테스트 전에 해야할 작업, 모든 테스트가 끝난 후 할 작업이다. 
딱 한번만 실행된다.

## describe
describe 를 사용하여 비슷한 기능끼리 묶을 수 있다.
fn5.test.js 의 실행 순서에 유념하자

## 선택과 집중
`test.only` 를 사용하면 해당 테스트만 돌려볼 수 있다. 많은 테스트가 있는 경우 해당 테스트만 검사할 때 유용하다.
`test.skyp` 을 사용하면 해당 부분을 건너뛰고 실행한다.

## mock
mock 은 말 그대로 테스트를 하기 위해 흉내만 내는 함수이다. 

예를 들어 userDB에 접속해서 유저의 정보를 가져온다면 다음과 같은 문제가 발생할 수 있다.

1. 상황에 따라 DB 에 접속하고 정보를 가져오는 코드를 짜는데 상당한 시간이 걸릴 수 있다.(인증 등)
2. 네트워크 환경, DB의 상태 등 외부 요인의 영향을 받을 수 있다.

테스트는 동일한 코드가 동일한 결과를 내는것이 상당히 중요하므로 이러한 요인은 테스트를 불안정하게 만들 수 있다.

mock 함수에는 mock 이라는 프로퍼티가 있는데, 이 프로퍼티 안에는 calls 라는 배열이 있다. calls 안에는 해당 함수가 몇번 실행되었는지,
실행될 때 마다 인자는 어떤 것이 들어왔는지 확인할 수 있다.

### jest.fn() - calls
몇번 실행되었는지, 실행시 전달인자는 어떤 것이었는지 들어있다.

### jest.fn() - results
type 과 value 가 있으며, 리턴값에 대한 정보들을 배열로 저장한다.

### jest.fn() - mockReturnValueOnce
실행시마다 반환할 값들을 저장한다.

### jest.fn() - mockResolvedValue
비동기 함수를 흉내낼 수 있다. `mockRejectedValue` 도 마찬가지로 사용할 수 있다.

### jest.mock
`jest.mock` 을 사용해서 어떠한 모듈을 모킹 모듈로 만들어 줄 수 있다.

```js
const fn = require("./fn");

jest.mock("./fn");
fn.createUser.mockReturnValue({ name: "rexian" });
```
이렇게 만들면 `fn.createUser` 는 실제로는 호출되지 않는다. 다만 해당 객체를 반환해주는 목 함수가 될 뿐이다.

### toBeCalled
* `toBeCalled`: 한 번 이상 호출되면 통과
* `toBeCalledTimes`: 정확한 호출 횟수를 확인한다.
* `toBeCalledWith`: 인수로 어떤 값들을 받았었는지 확인한다.
* `lastCalledWith`: 마지막으로 실행된 함수의 인수를 확인한다.


## jest with react

### installation

리액트 설치하느라 추가적인 작업을 함
```shell
npm install react react-dom react-scripts
npm @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

추가적으로 `public/index.html` 생성 후 `src/index.js`, `src/App.js` 생성 후 `index.js` 에서 `index.html` 을 연결
package.json 의 `test` 명령어를 `test: react-scripts test` 로 변경 - 테스트 실행 시 watch 모드로 사용 가능함

## Usage
render 를 통해 렌더링하고 screen 을 통해 렌더링 된 페이지에 접근.

## snapshot
렌더링 된 페이지의 스냅샷을 찍어서 비교를 할 수 있다.
```angular2html
  const el = render(<Hello user={user} />);
  expect(el).toMatchSnapshot();
```

이렇게 적으면 `__snapshots__` 라는 폴더가 생성된 것을 볼 수 있다. 
안에는 `*.test.js.snap` 형태의 파일이 있으며 열어보면 각 스냅샷의 상태가 저장되어 있는 모습을 볼 수 있다.
웹스톰을 사용한다면 왼쪽에 카메라 아이콘도 생긴다.

스냅샷이 생성되었다면 해당 테스트에서 조금만 달라져도 실패하게 된다(예시: 유저의 이름이 달라짐).
이전 상태를 스냅샷으로 찍어놓았기 때문이다.

스냅샷을 업데이트 하려면 다시 커맨드창을 보자. u 를 눌러서 실패한 스냅샷을 업데이트 할 수 있다. (press u to update failing snapshots)

## snapshot with mock
하지만 시간에 따라 업데이트 되는 페이지의 스냅샷이 있다면 어떻게 해야할까? 
이전에 배웠던 mock 펑션을 사용하면 된다.

```js
test("present seconds", () => {
  Date.now = jest.fn(() => 12345);
  const el = render(<Timer />);
  expect(el).toMatchSnapshot();
});
```
이제 Timer 컴포넌트 안에서의 Date.now 함수는 mock 함수로 대체되었으며, 항상 12345 를 반환한다.
이렇게 시간에 따라 값이 변하는 함수가 있다면 mock 함수로 고정시켜놓을 수 있다.

## Conclusion

복잡한 디자인이 있을 때 코드를 일일히 대조해가면서 비교하는 건 상당히 힘들다.
스타일링, 문구의 변경을 찾아내기 보다는 이전의 스냅샷과 비교하는 것이 훨씬 편하다.

하지만 불필요한 테스트가 더 많아질 수도 있다.
또한 기획에 따라 UI가 계속 바뀌는 경우라면 테스트는 거의 항상 실패할 것이고, 스냅샷 업데이트만이 유일한 작업이 될 것이므로 하지 않는것이 좋다. 
