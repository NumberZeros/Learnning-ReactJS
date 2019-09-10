import React from 'react'
import './TodoItem.css'

class TodoItem extends React.Component{
    render(){
        let classnames='TodoItem';
        const {value}=this.props;
        if(value.iscomplete){
            classnames +=' Todo-Complete';
        }
        return(
            <div className={classnames}>
                <p>{
                    this.props.value.title
                }</p>
            </div>
        )
    }
}

export default TodoItem;