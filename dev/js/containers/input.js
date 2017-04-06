import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {addItem} from '../actions/addItem';

const buttonStyle = {
    margin: 12
};

class Input extends Component {

    handleSubmit(item){
        if(item.length > 0){
            this.props.addItem(item);
        }
    }

    render(){
        return(
            <div className="inputField">
                <form
                    onSubmit={e => {
                        let input = document.getElementById('todoInput');
                        e.preventDefault();
                        this.handleSubmit(input.value);
                        input.value = ''; // Clear the input field
                    }}
                >
                    <TextField id="todoInput" hintText='Enter To do'/>
                    <RaisedButton
                        primary={true} label='Add'
                        style={buttonStyle}
                        type="submit"
                    />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        list: state.list
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        addItem: addItem
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Input);