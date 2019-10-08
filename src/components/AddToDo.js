import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const propTypes = {
    onSubmit: PropTypes.func
}
const defaultProps = {
    onSubmit: () => { }
}


class AddToDo extends Component {
    constructor() {
        super()
        this.state = {
            inputText: "",
        }
    }
    handleChange = (e) => {
        this.setState({ inputText: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.inputText === "") {
            return;
        }
        // if (this.state.inputText != '') {
        this.props.onSubmit(this.state.inputText)
        this.setState({ inputText: '' })

        // }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField onChange={this.handleChange} value={this.state.inputText} margin="normal" />
                    <Button variant="contained" color="secondary" type="submit"> Add </Button>
                </form>
            </div>
        );
    }
}
AddToDo.propTypes = propTypes;
AddToDo.defaultProps = defaultProps;

export default AddToDo;