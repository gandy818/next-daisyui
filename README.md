## 시작하기

1. 필요한 패키지를 설치합니다.

```
npm install
```

2. 프로젝트를 실행합니다.

```
npm run dev
```

3. 프로젝트가 정상적으로 클론 되었다면 기존 깃 저장소 연결을 끊습니다.

```
git remote remove origin
```

4. 새로 연결할 저장소에 레포지토리를 연결합니다.

```
git remote add origin 새 저장소
```

**브라우저에서 http://localhost:3000로 접속하여 확인할 수 있습니다.**

<br />

## 프로젝트 설명

next14 + dasisyui 기반으로 이루어져 있습니다.  
초기 기본적인 세팅을 마친 코어 파일로, 새 프로젝트를 시작할 때 클론하여 사용하면 됩니다.

<br />

## 포함되어 있는 라이브러리

- React
- Next.js14
- Typescript
- Tailwindcss
- Daisyui
- Font 파일 (Montserrat, Pretendard)
- axios
- zustand
- react-hook-form
- prettier-plugin-tailwindcss

## 컴포넌트

- Toast
- Modal

## 유틸함수 & hook

- Number
  - 세자리마다 콤마 찍어주는 함수 (numberWithComma)
  - 휴대폰 형식으로 하이픈 추가하는 함수 (usePhoneNumber)
