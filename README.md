<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=150&section=header" />

## 🐋 Welcome

**본 레포지토리는 원티드 프리온보딩 프론트엔드 과정 선발 과제를 위한 기록들을 남긴 곳입니다.**

## 목차

1. [Intro](#intro)
2. [배포 링크](#배포-링크)
3. [실행 방법](#실행-방법)
4. [사용 스택](#사용-스택)
5. [과제 수행](#과제-수행)
6. [Commit Convention](#commit-convention)

## Intro

**프리온보딩 프론트엔드 선발 과제 링크**

[https://github.com/walking-sunset/selection-task](https://github.com/walking-sunset/selection-task)

## 배포 링크

[https://todoify.pages.dev](https://todoify.pages.dev)

## 실행 방법

1. 설치 명령어

```bash
$ npm install
```

2. 실행 명령어

```bash
$ npm start
```

## 사용 스택

<div align=left>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
</div>

## 과제 수행

:: 1. 로그인 / 회원가입

<img src="https://user-images.githubusercontent.com/92367032/230540517-56c44ed3-323c-4fbb-a070-4f89a21741c0.gif" />

1-1. 회원가입 및 로그인 페이지 추가

1-2. 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현

    1-2-1. 이메일 조건: @ 포함

    1-2-2. 비밀번호 조건: 8자 이상

    1-2-3. 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행

1-3. 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여

1-4. 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동

1-5. 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동

    1-5-1. 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답

    1-5-2. 응답받은 JWT는 로컬 스토리지에 저장

1-6. 로그인 여부에 따른 리다이렉트 처리를 구현

    1-6-1. 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 /todo 경로로 리다이렉트

    1-6-2. 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin `경로로 리다이렉트

---

:: 2. TODO LIST

<img src="https://user-images.githubusercontent.com/92367032/230540510-465c8f59-d314-41e0-ab47-03da18548450.gif" />

2-1. TODO 목록 페이지 추가

2-2. `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 함

2-3. 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.

2-4. TODO의 완료 여부는 `<input type="checkbox" />` 를 통해 표현해주세요

2-5. TODO는 `<li>` tag를 이용해 감싸주세요

2-6. 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 추가해주세요

2-7. 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가

2-8. TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.

2-9. TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

2-10. TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

2-11. 투두 리스트의 삭제 기능을 구현

2-12. 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제

2-13. 투두 리스트의 수정 기능을 구현

    2-13-1. TODO 우측의 수정 버튼을 누르면 수정모드가 활성화

    2-13-2. 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.

    2-13-3. 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요

    2-13-4. 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요

    2-13-5. 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요

    2-13-6. 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

---

## Commit Convention

- init : 초기화
- feat : 새로운 기능 추가
- update: 기능 수정
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
- design: 레이아웃 수정
- refactor : 코드 리팩터링
- test : 테스트 코드, 리팩터링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋

<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=150&section=footer" />
