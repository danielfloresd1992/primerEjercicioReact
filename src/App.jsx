import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { User, userLength } from './components/Users.jsx'


const  userAlert = (element) => {
    return Math.floor(Math.random() * element);
}


function App() {
    
    let [count, setCount] = useState(userAlert(userLength));

    const changeBody = () => {
        let color = `rgb(${userAlert(255)},${userAlert(255)},${userAlert(255)})`;
        document.body.style.backgroundColor = color;
    }

    const changeUser = () => {
        changeBody();
        setCount(userAlert(userLength));
    }
    
    
    return (
        <div className="App">
            <User user={count}/>
            <button onClick={changeUser}>change user</button>
        </div>
    );
}



export default App;
