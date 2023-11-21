import React from "react";
import {Badge} from "react-bootstrap";

type TagProps = {
    value: string;
}

const Tag = ({value}:TagProps) => {

    return(
        <Badge bg="secondary">{value}</Badge>
    )
};

export default Tag;
