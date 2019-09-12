/* eslint-disable no-unused-vars */
import React from 'react';
// import React , { Component } from 'react';
import './App.css';
import TodoItem from './Component/TodoItem';
import CheckList from './img/CheckList.svg';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newitem: '',
      todoItems: [
        { title: 'Mua Cải', iscomplete: false },
        { title: 'Mua Hành', iscomplete: false },
        { title: 'Mua ớt', iscomplete: false },
        { title: 'Mua Hẹ', iscomplete: false }
      ]
    }
    this.TextChange = this.TextChange.bind(this);
    this.onChange=this.onChange.bind(this);
    // this.SelectAll = this.SelectAll.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      // console.log('da click', item);  // trả về 1 object truyển vào bằng event click
      const iscomplete = item.iscomplete;
      console.log(iscomplete);
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item); // kiểm tra vị trí của item trong arr
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index), // mảng trãi dài từ vị trí bắt đầu đến vị trí dừng lại

          {
            ...item,
            iscomplete: !iscomplete   // mở item ở vị trí đó và thay đổi thuộc tính của nó
          },

          ...todoItems.slice(index + 1) // tiếp tục với vị trí tiếp theo

        ]
      })
    }

  }

  TextChange(event) {
    if (event.keyCode === 13) { //khi ấn phím enter thì keyCode sẽ là 13
      let text = event.target.value;
      text = text.trim();
      if (!text) {
        return;
      }

      this.setState({
        newitem: '',
        todoItems: [{
          title: text, iscomplete: false
        },
        ...this.state.todoItems
        ]
      })
    }

  }

  onChange(event){
    this.setState({
      newitem: event.target.value
    })
  }

  // SelectAll(){
  //   const {todoItems, newitem} =this.state;
  //   for(let item in todoItems){
  //     const iscomplete = todoItems[i].iscomplete;
  //     this.setState({

  //   }

  // }

  render() {
    const { todoItems, newitem } = this.state;

    console.log(todoItems)
    if (todoItems.length > 0) {
      return (
        <div className="App">
          <div className="header">
            <img onClick={this.SelectAll} src={CheckList} className="icon"></img>
            <input className="into" type="text" onKeyUp={this.TextChange} value={newitem} onChange={this.onChange}
            >
            </input>
          </div>
          {
            todoItems.map((item, index) =>
              <TodoItem
                key={index}
                item={item}
                onclick={this.onItemClicked(item)} />   //function()->sẽ trả về giá trị, nếu không có () thì chỉ đơn giản là gọi hàm 
            )
          }
        </div>
      );
    }
    else {
      return (
        <div> Nothing Item</div>
      )
    }

  }

  // return(<h1></h1>)
}


export default App;
