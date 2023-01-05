import Main from "./components/Main";

function App() {
  return (
    <>
      <h3>취업 전까지 내 일상 시간표를 만들 것이다!</h3>
      <p>내 역량이 너무 허접하다! 고로 분 단위는 못 한다!</p>
      <p>분 단위로 저장하는 건 추후에 하도록 하자.</p>
      <p>생각해보니 리액트는 저장을 못 한다. 시간표 적어봤자 새로고침하면 사라짐;</p>
      <Main />
    </>    
  );
}

export default App;
