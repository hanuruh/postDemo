import React from "react";
import {Badge} from "react-bootstrap";

type TagProps = {
    value: string;
    pointer?: boolean;
}

const Tag = ({value, pointer = true}:TagProps) => {

    return(
        <Badge className={pointer ? "cursor-pointer" : ""} bg="secondary">{value}</Badge>
    )
};

export default Tag;
