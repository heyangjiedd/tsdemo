import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Button type='primary'>按钮</Button>
        </header>
      </div>
    );
  }
}

export default App;
