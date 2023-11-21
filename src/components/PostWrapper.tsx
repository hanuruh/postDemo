import {Post} from "../types/Post";
import {Row} from "react-bootstrap";
import React from "react";

interface PostWrapperProps extends Post {
    username: string;
    isSelected: boolean;
}

const PostWrapper = ({title, body, username, isSelected}: PostWrapperProps) => {
    return(
        <Row className={`post-wrapper ${isSelected ? "selected-post-color" : ""}`}>
            <p>{username}</p>
            <h3>{title}</h3>
            <p>{body}</p>
        </Row>
    )
}

export default PostWrapper;
