import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';

const Post = ({ post, cardStyles }) => {
    const { title, contents } = post;
    return (
        <Card style={cardStyles}> 
            <CardBody>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardText>
                    {contents}
                </CardText>
            </CardBody>
        </Card>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        contents: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    }),
    cardStyles: PropTypes.shape({
        width: PropTypes.string.isRequired,
        marginTop: PropTypes.number.isRequired
    })
}

export default Post;