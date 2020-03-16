import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


function Month(props) {
    const monthNames = [
        "Январь", 
        "Февраль", 
        "Март", 
        "Апрель", 
        "Май", 
        "Июнь", 
        "Июль", 
        "Август", 
        "Сентябрь", 
        "Октябрь", 
        "Ноябрь", 
        "Декабрь"];
    
    
    let year = props.year;
    let month = props.month;
    //let {year,month} = props;
    let current = new Date(year, month);
    let next = new Date(year, month+1);
    let diff = (next - current)/(1000 * 3600 * 24);
    
    let index = (current.getDay() + 6) % 7;
    
    const ROWS = Math.ceil((index + diff)/7);
    const COLS = 7;
    
    let table = [], 
        tr,
        k = 1 - index;
    for(let i = 0; i < ROWS; i++){
        tr = [];
        for(let j = 0; j < COLS; j++){
        tr.push(<td>{k > 0 && k <= diff ? k : ''}</td>);
        k++;
        } 
        table.push(<tr>{tr}</tr>);    
    }
    
    return (
    <table border="1">
        <caption>{monthNames[month] + " "}
        {year}
        </caption>
        {table}
    </table>
    );    
}

function App() {
    let date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    
    return (
        <div className="App">
            <h1>React календарь на месяц</h1>
            <Month year={year} month={month} />
            <Month year={year} month={month+1} />
            <Month year={year} month={month+2} />
            <Month year={year} month={month+3} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
