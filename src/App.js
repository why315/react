import './App.css';
import React from 'react'
import { Button, Space } from 'antd-mobile'


function App() {
  return (
    <div className="App">
      <header className="App-header">
         reactreact
      </header>
        <Space wrap>
          <Button color='primary' fill='solid'>
            Solid
          </Button>
          <Button color='primary' fill='outline'>
            Outline
          </Button>
          <Button color='primary' fill='none'>
            None
          </Button>
        </Space>
    </div>
  );
}

export default App;
