import {Comment} from "../types/Comment";
import {Row, Stack} from "react-bootstrap";
import React, {useState} from "react";
import {useAppDispatch} from "../store/store";
import {addReply, addTag} from "../store/commentStore";
import Input from "./Input";
import Tag from "./Tag";
import SuggestedTags from "./SuggestedTags";
import ReplyWrapper from "./ReplyWrapper";

const CommentWrapper = ({body, postId, id, replies, tags}: Comment) => {
    const [reply, setReply] = useState<string>("");
    const [tag, setTag] = useState<string>("");
    const dispatch = useAppDispatch();

    const addNewReply = () => {
        dispatch(addReply([postId, id, reply]));
        setReply("");
    }

    const addNewTag = (predefinedTag?: string) => {
        dispatch(addTag([postId, id, predefinedTag ?? tag]));
        setTag("");
    }

    return(
        <Row className={"comment-wrapper"}>
            <Stack direction="horizontal" gap={2}>
                {tags.map((t: string, index: number) => {
                    return <Tag pointer={false} key={index} value={t}/>
                })}
            </Stack>
            <p>{body}</p>
            <Input
                btnText={"Add reply"}
                value={reply}
                onChange={(value: string) => setReply(value)}
                onPressBtn={addNewReply}
            />
            <Input
                value={tag}
                btnText={"Add tag"}
                btnSmall={true}
                padding={2}
                colWidth={5}
                onChange={(value: string) => setTag(value)}
                onPressBtn={() => addNewTag()}
            />
            <SuggestedTags customTag={tag} addNewTag={addNewTag}/>
            {replies.length > 0 &&
                <ReplyWrapper replies={replies}/>
            }
        </Row>
    )
}

export default CommentWrapper;
