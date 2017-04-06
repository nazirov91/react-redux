import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {deleteItem} from '../actions/deleteItem'
import {crossSelected} from '../actions/crossSelected'

class TodoList extends Component {

    checkIfDone(item){
        if(item.done === true){
            return (
                <strike>{item.name}</strike>
            );
        } else {
            return (
                <span>{item.name}</span>
            );
        }
    }

    renderList(){
        const style = {
            textAlign: 'right'
        };

        return this.props.list.map((item, i) => {
            item.id = i;
            return (
                <TableRow key={i} selectable={false} >
                    <TableRowColumn className='checkboxColumn'>
                        <Checkbox onCheck={() => this.props.crossSelected(item)}/>
                    </TableRowColumn>
                    <TableRowColumn>{this.checkIfDone(item)}</TableRowColumn>
                    <TableRowColumn style={style}>
                        <RaisedButton
                            secondary={true} label='Delete'
                            onClick={() => this.props.deleteItem(item)}
                        />
                    </TableRowColumn>
                </TableRow>
            );
        });
    }


    render(){

        if(this.props.list.length === 0){
            return(<div></div>);
        }

        return(
            <div>

                <Table showCheckboxes={false}>
                    <TableBody displayRowCheckbox={false} showRowHover={true}>
                        {this.renderList()}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        list: state.list
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteItem: deleteItem,
        crossSelected: crossSelected
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TodoList);