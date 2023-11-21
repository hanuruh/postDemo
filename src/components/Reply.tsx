import React from "react";

type ReplyProps = {
    value: string;
}

const Reply = ({value}:ReplyProps) => {

    return(
        <div>
            <b><small>Your reply</small></b>
            <div className={"reply"}>
                <p >{value}</p>
            </div>
        </div>
    )
};

export default Reply;
