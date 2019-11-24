import React from "react";
import "./styles.css";
//JSX : javascript XML
//역활 : javascript 가 html을 제어해요.
// 1. js에서 html을 생성하고
// 2. js가 html을 제어해요.

// 한계점 => jsx는 하나의 component만 리턴할 수 있다.
// 2개의 컴포넌트를 리턴하는 방법. => fragment
function App() {
  return (
    <>
      <h2>hello world!</h2>
      <p>react</p>
      <button>블루</button>
    </>
  );
}

// 백앤드 영역
// 데이터베이스 연동
// 인터넷 네트워크 연결
//
export default App;
