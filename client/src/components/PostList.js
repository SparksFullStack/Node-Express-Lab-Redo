import React, { Component } from 'react';
import Post from './Post';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    cardStyles: {
        width: "30%",
        marginTop: 20
    }
}

class PostList extends Component {
    mapPosts = () => {
        return this.props.posts.map(post => <Post key={`${post.title}_${post.id}`} cardStyles={styles.cardStyles} post={post}/>)
    }

    render(){
        return(
            <div style={styles.container}>
                {this.mapPosts()}
            </div>
        )
    }
}

export default PostList;