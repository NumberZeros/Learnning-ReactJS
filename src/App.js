import React from 'react';
// import React , { Component } from 'react';
import './App.css';
import TodoItem from './Component/TodoItem';

class App extends React.Component {
  constructor() {
    super();
    this.todoItems =[
      { title: 'Mua Cải', iscomplete: true },
      { title: 'Mua Hành' },
      { title: 'Mua Hẹ' }
    ]
  }

  render() {
    return (
      <div className="TodoItem">
        {
          this.todoItems.map((item,index)=><TodoItem key={index} value={item} />)
        }
      </div>
    );

  }
}


export default App;
