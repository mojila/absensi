import React from 'react';
import ReactDOM from 'react-dom';

// import css
import './assets/css/main.css';

// import component
import Background from './components/backgound';

// import  other

function App() {
    return <Background>
        <div className="p-2">
            
        </div>
    </Background>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
    );