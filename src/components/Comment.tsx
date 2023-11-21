import {Comment} from "../types/Comment";
import {Row, Stack} from "react-bootstrap";
import React, {useState} from "react";
import {useAppDispatch} from "../store/store";
import {addReply, addTag} from "../store/commentStore";
import Reply from "./Reply";
import Input from "./Input";
import Tag from "./Tag";
import SuggestedTags from "./SuggestedTags";

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

    console.log(tags)

    return(
        <Row className={"commentWrapper"}>
            <Stack direction="horizontal" gap={2}>
                {tags.map((t: string, index: number) => {
                    return <Tag key={index} value={t}/>
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
            <Row>
                {replies.map((r: string, index: number) => {
                    return <Reply key={index} value={r}/>
                })}
            </Row>
        </Row>
    )
}

export default CommentWrapper;
