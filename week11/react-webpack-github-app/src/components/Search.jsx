import React, { Component } from 'react';

export class Search extends Component {

  state = {
    username: ''
  }

  handleChange = e => {
    // console.log(e.target.value);
    this.setState({username: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.username);
    this.props.history.push(`/profile/${this.state.username}`);

  }

  render() {
    return (
      <div>
        <h2>Serach GitHub by Username</h2>
        <hr />

        <form onSubmit={ this.handleSubmit }>
          <input type="text" placeholder="Username" onChange={ this.handleChange }/>
          &nbsp;
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  } // render()
}

// export default Search;
