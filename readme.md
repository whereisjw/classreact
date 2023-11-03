# 1. why react?

- 리액트는user interface를 만들기위한 자바스크릡트 라이브러리이다.
- 2013년도 오픈소스 공개 2015년 reactnavtive공개 그후 계속적인 성능개선 진행
- 2019년 함수형 컴포넌트 출시 그전까지는 클래스 기반으로 생성
- 2022년도 서버사이트 렌더링 출시
- 리액트 개발 방식 두가지 : SPA/CSR
- SPA는 Single Page Application의 약자이다
- CSR로 client side rendering 이다.

# 2. 프레임워크와 라이브러리 차이

1. 프레임워크
   - 통상적으로 프레임워크라고 하면, 무엇인가를 만드는데 필요한 모든 것들이 다 갖춰진 제공되는 것이라고 보면 된다.
   - 웹 프레임워크는 ui+routing+http clients + state management에 관한 모든 것들이 다 포함되어 있다.
   - 대표적인 것이 angular js
   - VueJS : state management가 지원 되지 않아 완벽한 프레임워크는 아님
   - 장점 : 정해진 틀을 사용하므로 편리하다.
   - 단점 : 정해진 틀을 사용하므로 수정을 할 수 없는 제한점이 있다.
2. 라이브러리
   - 라이브러리는 규칙이나 골격이 정해져 있지 않고, 단 한가지 조금 더 작은
     문제를 해결하기 위해서 작은 솔루션 단위를 라이브러라고 한다. 그 중에서는 대표적인 것이 리액트이다
   - 리액트는 웹 프레임워크 중 ui에 대한 부분을 지원한다.
   - 장점 : 필요에 따라 골라서 사용할 수 있는 개발자의 자율성이 보장됨
   - 단점 : 다양한 라이브러리의 사용으로 관리와 협업의 어려움 발생

# 3. 리액트 애플리케이션구조

- HTML에서의 박스 레이아웃과 같은 형식으로 큰 박스 생성 > 작은 박스 생성(가장 큰 박스는 root)
- 리액트를 이용해서 UI를 만들어 나간다는 것은 바로 컴포넌트들을 만들어 나간다는 것과 같다

# 4. 컴포넌트를 생성하는 기준은?

- 1.  재사용성(DRY: Don't Repeat Yourself)
- 2.  SR(Single Responsibility): 단일책임

# 5. 리액트 동작 원리

- 1. 리액트를 랜더링(표기)하는 방법
- 2. 사용자 이벤트 처리 리액팅 방법

# 6. 리액트 프로젝트 생성

- 기본툴 : VSCODE , intelliJ,...
- 서버 : NodeJS + npm 또는 yarn(메타(페이스북))
- yarn 추가 설치

```
https://yarnpkg.com/getting-started/install
```

# 용어정리

- 리액트를 사용하며 .. 하나의 언어로 클라이언트와 서버를 동시에 개발을 할 수 있음
- babel: 브라우저의 자바스크립트 엔진 버전에 맞춰 자동으로 변환(브라우저마다 다른 엔진버전이 다르기때문에 최신 리액트 자바스크립트 코드를 낮은 버전의 자바스크립트 버전을 바꿔주는 기능을 함)
- webpack : 프로젝트 코드를 배포시 번들(포장)하는 작업(번들링)을 해주는 툴
- ESLint : 작성하는 코드를 체크해주는 기능을 가진 툴
- jest : 유닛테스트 , 기능 체크등 테스트를 진행하는 프레임워크
- 기타 다른 툴들도 create-react-app 으로 프로젝트 생성 시함께 설치

  5)브라우저 및 익스텐션

- 크롬 브라우저 확장 프로그램(react develop tools)
  https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko
