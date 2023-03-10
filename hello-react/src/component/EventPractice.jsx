import {Component} from 'react';

class EventPractice extends Component {
    state = {
        userName: '',
        message: ''
    };

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     });
    // }

    // handleClick() {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //     });
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = (e) => {
        alert(this.state.userName + ': ' + this.state.message);
        this.setState({
            userName:'',
            message:''
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="userName"
                    placeholder='유저 이름'
                    value={this.state.userName}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='아무거나 입력해 보세요'
                    value={this.state.message}
                    onChange={
                        this.handleChange
                    }
                    onKeyPress={this.handleKeyPress}
                >
                </input>
                <button onClick={
                    this.handleClick
                }>
                    확인
                </button>
            </div>
        );
    }
}

export default EventPractice;

