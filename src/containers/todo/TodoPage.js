import React, { Component } from 'react';
import {connect} from 'react-redux'
import './TodoPage.css';
import AddToDo from 'src/components/AddToDo'
import ListToDo, { SORT_TYPES } from 'src/components/ListToDo'
import Search from 'src/components/Search'
import UserLog from 'src/components/UserLog';

class TodoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allText: [],
      word: "",
      log: []
    }
  }

  handleSubmit = (inputText) => {
    const { allText } = this.state;
    const checkinput = allText.find((val) => val === inputText)
    if (checkinput === inputText) {
      alert("duplicate")
      return;
    }

    this.setState({ allText: [...allText, inputText], log: [...this.state.log, this.logFormatter(inputText, "Added")] })

  }

  handleDelete = (text) => {
    this.setState({
      allText: this.state.allText.filter((val) => val !== text),
      log: [...this.state.log, this.logFormatter(text, "Deleted")]
    });
  }

  handleChange = (word) => {
    this.setState({ word })
  }

  filter = (allText, word) => {
    return allText.filter((val) => val.includes(word));
  }

  logFormatter = (text, action) => {
    return {
      time: new Date().toLocaleTimeString(),
      text,
      action
    }
  }

  render() {
    const { allText, word, log } = this.state;
    return (
      <div className="TodoPage">
        <Search allText={allText} onChange={this.handleChange} />
        <AddToDo onSubmit={this.handleSubmit} />
        <ListToDo allText={this.filter(allText, word)} onDelete={this.handleDelete} sortType={SORT_TYPES.DEFAULT} />

        <hr />
        {/* <div>
          <ListToDo allText={this.filter(allText, word)} onDelete={this.handleDelete} />
        </div> */}

        <UserLog allLogs={log} />

      </div>
    );
  }
}

export default TodoPage;

