// 1. 전역 스타일 및 필요한 라이브러리 import
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // 메인 컴포넌트
import "./index.css"; // 기본 스타일

// 2. HTML의 'root' 엘리먼트 찾기
const container = document.getElementById("root");

// 3. React 루트 생성
const root = ReactDOM.createRoot(container);

// 4. 애플리케이션 렌더링 (StrictMode로 감싸서 개발 모드에서 잠재적 문제점 확인)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
