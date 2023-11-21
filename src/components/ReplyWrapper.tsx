import {Accordion, Row} from "react-bootstrap";
import Reply from "./Reply";
import React from "react";

type replyWrapperProps = {
    replies: string[];
}

const replyWrapper = ({replies}: replyWrapperProps) => {
    return(
        <Row>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Replies</Accordion.Header>
                    <Accordion.Body>
                        {replies.map((r: string, index: number) => {
                            return <Reply key={index} value={r}/>
                        })}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Row>
    )
}

export default replyWrapper;
