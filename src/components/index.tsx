import * as React from 'react';
import './index.css';

import List from './List/';
import Footer from './Footer/';

function App(){
    return (
      <div className="App">
        <div>
          <List />
        </div>
        
        <div>
          <Footer />
        </div>

      </div>
    );
}

export default App;
