import React from "react";

type ReplyProps = {
    value: string;
}

const Reply = ({value}:ReplyProps) => {

    return(
        <p>{value}</p>
    )
};

export default Reply;
