import React from 'react';
import Input from '../containers/input';
import TodoList from '../containers/todoList';


const Body = () => {
    return (
        <div className="container">
            <Input/>
            <TodoList/>
        </div>
    );
};

export default Body;