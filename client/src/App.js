import React, { Component } from 'react';
import PostList from './components/PostList';
import axios from 'axios';

class App extends Component {
  state = {
    posts: undefined
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/posts')
      .then(response => this.setState({ posts: response.data }))
      .catch(err => console.log(`There was an error getting the post data: \n${err}`));
  }

  waitForPosts = () => {
    if (!this.state.posts){
      return (
        <h1>
          Now Loading Posts..
        </h1>
      )
    } else {
      return (
        <PostList posts={this.state.posts} />
      )
    }
  }

  render() {
    return (
      <div className="App">
        {this.waitForPosts()}
      </div>
    );
  }
}

export default App;
