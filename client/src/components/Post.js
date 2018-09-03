import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';

const Post = (props) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>

                </CardTitle>
                <CardText>

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
    })
}

export default Post;