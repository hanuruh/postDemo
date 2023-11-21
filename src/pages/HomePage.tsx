import React, {useEffect, useState} from "react";
import {Post} from "../types/Post";
import {Comment} from "../types/Comment";
import {Col, Container, Row} from "react-bootstrap";
import {getAllPosts, getAllUsers, getCommentsFromPost} from "../api/client";
import {useAppDispatch, useAppSelector} from "../store/store";
import {saveAllPosts} from "../store/postStore";
import PostWrapper from "../components/PostWrapper";
import {saveCommentFromPost} from "../store/commentStore";
import CommentWrapper from "../components/Comment";
import Filter, {filters} from "../components/Filter";
import {saveAllUsers} from "../store/userStore";


const HomePage = () => {
    const [selectedPost, setSelectedPost] = useState<null|number>(null);
    const [filterValue, setFilterValue] = useState<string>("");
    const [filterType, setFilterType] = useState<filters>(filters.NONE);
    const [commentsFromSelectedPost, setCommentsFromSelectedPost] =
        useState<Comment[]>([]);

    const posts = useAppSelector(state => state.post).posts;
    const comments = useAppSelector(state => state.comment).comments;
    const users = useAppSelector(state => state.user).users;
    const dispatch = useAppDispatch();

    const fetchPostsAndUsers = async (): Promise<void> => {
        const posts = await getAllPosts();
        const users = await getAllUsers();
        dispatch(saveAllPosts(posts));
        dispatch(saveAllUsers(users));
    }

    const selectPost = async (postId?: number): Promise<void> => {
        setSelectedPost(postId);
        if(!comments[postId]){
            const newComments = await getCommentsFromPost(postId);
            console.log(newComments)
            dispatch(saveCommentFromPost([newComments, postId]));
        }else{
            setCommentsFromSelectedPost(comments[postId])
        }
    }

    const handleFilterValueChange = (value: string) => {
        setFilterValue(value);
    }

    const handleFilterTypeChange = (filter: filters) => {
        setFilterType(filter);
    }

    const filterPosts = (): Post[] => {
        if(filterValue.length > 0){
            switch (filterType) {
                case filters.USERNAME:
                    return posts.filter((p: Post) => users[p.userId - 1].includes(filterValue));
                case filters.TEXT_BODY:
                    return posts.filter((p: Post) => p.body.includes(filterValue));
                case filters.USER_ID:
                    return posts.filter((p: Post) => p.userId == Number(filterValue));
                case filters.NONE:
                default:
                    return posts;
            }
        }else{
            return posts;
        }
    }

    useEffect(() => {
        if(selectedPost){
            setCommentsFromSelectedPost(comments[selectedPost]);
        }
    }, [comments])

    useEffect(() => {
        fetchPostsAndUsers()
            .catch(e => console.log("Failed to fetch posts and comments: ", e))
    }, []);


    return(
        <Container>
            <Row>
                <Col className={"viewWrapper"}>
                    <Filter
                        filterValue={filterValue}
                        filterType={filterType}
                        handleFilterValueChange={handleFilterValueChange}
                        handleFilterTypeChange={handleFilterTypeChange}
                    />
                    {users.length > 0 && filterPosts().map((p: Post, index: number) => {
                        return (
                            <div key={index} onClick={() => selectPost(p.id)}>
                                <PostWrapper username={users[p.userId - 1]} {...p}/>
                            </div>
                        )
                    })}
                </Col>
                <Col className={"viewWrapper"}>
                    {commentsFromSelectedPost.map((c: Comment, index: number) => {
                        return (
                            <div key={index} onClick={() => selectPost(c.id)}>
                                <CommentWrapper {...c}/>
                            </div>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;
