import React from 'react'

class TodoItem extends React.Component{
    render(){
        return(
            <div className="TodoItem">
                <p>{
                    this.props.value.title
                }</p>
            </div>
        )
    }
}

export default TodoItem;