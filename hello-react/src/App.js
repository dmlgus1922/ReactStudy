import { Component } from 'react';

import Test from './component/Test';
import Counter from './component/Counter';
import Say from './component/Say';
import EventPractice from './component/EventPractice';
import EventPractice2 from './component/EventPractice2';
import ValidationSample from './component/ValidationSample';
import ScrollBox from './component/ScrollBox';
import Iteration from './component/Iteration';
import LifeCycleSample from './component/LifeCycleSample';
import ErrorBoundary from './component/ErrorBoundary';

import './css/App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <Header></Header>
//       <Main></Main>
//       <Footer></Footer> */}
//       <ValidationSample></ValidationSample>
//       <EventPractice2></EventPractice2>
//       <EventPractice></EventPractice>
//       <Say></Say>
//       <Counter></Counter>
//       <Test name={'이름'} favoriteNumber={1}>
//         리액트
//         <div>
//           djdasd
//         </div>
//       </Test>
//     </div>
//   );
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <ValidationSample></ValidationSample> */}
//         <LifeCycleSample></LifeCycleSample>
//         <Iteration></Iteration>
//         {/* <ScrollBox ref={(ref) => this.scrollBox = ref}></ScrollBox>
//         <button onClick={() => {this.scrollBox.scrollToBottom()}}>맨밑으로 이동</button> */}
//       </div>
//     );
//   }
// }

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {

  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;
