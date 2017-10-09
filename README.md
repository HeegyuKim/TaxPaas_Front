프로젝트 구조
=============

* config/
* scripts/
Node.js, React와 관련된 설정들이 있습니다.

- node_modules/
- .package.json
- .package-lock.json
관련 모듈들이 설치되어 있는 곳입니다.

- public/
HTML 소스와 이미지 등의 정적 리소스들이 있습니다.

- src/
Javascript 소스와 CSS 파일등이 있습니다.

### src/ 구조
* components/
	* client/
CPA가 보는 ClientProfile, Mail List, Client List 등의 컴포넌트들이 있음
	* dashboard/
Dashboard관련 컴포넌트들이 있음
	* header/
모든 페이지에 들어가는 기본 헤더를 구현함
	* taxorg/
Tax Organizer 컴포넌트들이 있음

* stylesheets/
나중에 components/ 로 옮길 스타일시트들을 갖고 있습니다.

* App.css
* App.js
* index.js
* index.css
react-create-app 이 생성한 기본 index 파일들

* registerServiceWorker.js
??

실행방법
=================
https://www.npmjs.com
npm설치하시고

프로젝트 디렉토리로 이동 후
```sh
$ npm start
```

하면 웹 localhost:3000 에서 실행
### URL
* /
대시보드
* /taxorg/:clientId
Tax Organizer 페이지
* /ocr/:clientId
OCR결과를 보는 페이지
* /client/:clientId
클라이언트 프로필 페이지
