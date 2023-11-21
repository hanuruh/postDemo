import {Post} from "../types/Post";
import {Row} from "react-bootstrap";
import React from "react";

interface PostWrapperProps extends Post {
    username: string;
}

const PostWrapper = ({title, body, username}: PostWrapperProps) => {

    return(
        <Row className={"postWrapper"}>
            <p>{username}</p>
            <h3>{title}</h3>
            <p>{body}</p>
        </Row>
    )
}

export default PostWrapper;
