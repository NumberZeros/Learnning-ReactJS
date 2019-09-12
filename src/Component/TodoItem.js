import React from 'react'
import './TodoItem.css'
import ImgCheck from '../img/check.svg';
import ImgUnCheck from '../img/UnCheck.svg';


class TodoItem extends React.Component {

    render() {
        let classnames = 'TodoItem';
        const { item, onclick } = this.props;
        let url = ImgUnCheck;
        if (item.iscomplete) {
            classnames += ' Todo-Complete';
            url = ImgCheck;
        }
        return (
            <div className={classnames}>
                <div className="icon">
                    <img onClick={onclick} src={url}></img>
                </div>
                <p>{
                    this.props.item.title
                }</p>
            </div>
        )
    }
}

export default TodoItem;