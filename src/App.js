import './App.css';
import React, { useState } from 'react';
import NavBar from './NavBar';
import Counters from './Counters';

function App() {
    const [count,setCount] = useState(0);

    const getCounterCount = (count) => {
        setCount(count);
    };

    return (
        <React.Fragment>
            <NavBar totalCount = {count}/>
            <Counters setCounterCount={getCounterCount}/>
        </React.Fragment>
    );
}

export default App;
