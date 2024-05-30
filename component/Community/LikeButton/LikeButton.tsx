import {Button} from "@mantine/core";
import {IconHeart} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";
import {PostWithRelations} from "../../../entities/Types";
import {Post} from "@prisma/client";
import {Session} from "next-auth";

interface LikeButtonInterface {
    session: Session,
    post: PostWithRelations
    likedPosts?: Post[]
}

export function LikeButton(props: LikeButtonInterface) {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(props.post._count.likes);// Add state for like status

    useEffect(() => {
        if (props.session && props.likedPosts) {
            props.likedPosts.map((likedPost) => {
                if (likedPost.id === props.post.id)
                    setIsLiked(true);
            })
        }
    }, [props.likedPosts, props.post.id, props.session]);

    const handleLikeClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (props.session) {
             // Prevent the default link behavior
            const postId = props.post.id;
            const userId = props.session.user.id

            isLiked ? setLikes(likes - 1) : setLikes(likes + 1);

            try {
                const response = await fetch(`/api/post/${postId}/like/${isLiked ? 'remove' : 'create'}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ postId, userId })
                });

                if (response.ok) {
                    setIsLiked(!isLiked); // Toggle the like status
                } else {
                    console.error('Failed to toggle like');
                }
            } catch (error) {
                console.error('Error toggling like:', error);
            }
        }
    };

    return (
        <Button
            variant="subtle"
            c={isLiked ? 'pink' : 'gray'}
            onClick={handleLikeClick}
            leftSection={<IconHeart size={16} color={isLiked ? 'pink' : 'gray'} />}
        >
            {likes}
        </Button>
    );
}