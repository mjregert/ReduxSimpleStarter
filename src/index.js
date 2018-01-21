import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


// AIzaSyB76BXijqIl4Xo88TBW7zaXfas7THDEmHI

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
