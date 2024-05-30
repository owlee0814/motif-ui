import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import prisma from "../../../../../prisma/prisma";

export async function GET(req: Request, context: { params: { id: string } }) {
    try {
        const id = context.params.id;

        if (!id || isNaN(Number(id))) {
            return new Response("Invalid ID", { status: 400 });
        }

        // Fetch all comments for the given post
        const comments = await prisma.comment.findMany({
            where: { postId: Number(id) },
            include: {
                author: {
                    include: {
                        user: true
                    }
                }
            }
        });

        if (!comments) {
            return new Response("Comments not found", { status: 404 });
        }

        // Function to build the nested structure
        // @ts-ignore
        const buildNestedComments = (comments, parentId = null) => {
            return comments
                // @ts-ignore
                .filter(comment => comment.parentId === parentId)
                // @ts-ignore
                .map(comment => ({
                    ...comment,
                    replies: buildNestedComments(comments, comment.id)
                }));
        };

        const nestedComments = buildNestedComments(comments);

        return new Response(JSON.stringify(nestedComments), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59"
            }
        });
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { postId, authorId, content } = await req.json();

        if (!postId || !authorId || !content) {
            return new Response("Missing required fields", { status: 400 });
        }

        const comment = await prisma.comment.create({
            data: {
                content,
                authorId,
                postId
            },
            include : {
                author: {
                    include : {
                        user: true
                    }
                }
            }
        });

        return new Response(JSON.stringify(comment), {
            status: 201,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}