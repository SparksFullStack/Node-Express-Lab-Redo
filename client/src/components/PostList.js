import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
    mapPosts = () => {
        return this.props.posts.map(post => <Post key={`${post.title}_${post.id}`} post={post}/>)
    }

    render(){
        console.log(this.props.posts)
        return(
            <div>
                {this.mapPosts()}
            </div>
        )
    }
}

export default PostList;