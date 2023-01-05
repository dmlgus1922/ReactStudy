import React from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';

const Main = () => {
    const [todo, setTodo] = useState('');
    const [timeLine, setTimeLine] = useState([]);

    useEffect(() => {
        const temp = [...Array(16).keys()].map(key => key + 8);
        const tableRow = temp.map((time) => {
            return (
                <tr key={time}>
                    <td>{time}</td>
                    <td id={time}></td>
                </tr>
            )
        })
        setTimeLine(tableRow)
    }, []);

    const timeInput = useRef();
   
    const addTodo = () => {
        const time = timeInput.current.value.split(':')[0];
        const tableTime = document.getElementById('' + parseInt(time));
        tableTime.innerText = todo;
    }
    return (
        <div>
            <input type="time" ref={timeInput} />&nbsp;
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} 
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    addTodo()
                }
            }}/>
            <button onClick={addTodo}>추가</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>시간</th>
                        <th>할일</th>
                    </tr>
                </thead>
                <tbody>
                    {timeLine}
                </tbody>
            </table>
        </div>
    )
}

export default Main;