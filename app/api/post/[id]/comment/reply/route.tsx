import prisma from "../../../../../../prisma/prisma";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

export async function POST(req: Request) {
    try {
        const { postId, authorId, content, parentId } = await req.json();

        if (!postId || !authorId || !content || !parentId) {
            return new Response("Missing required fields", { status: 400 });
        }

        const reply = await prisma.comment.create({
            data: {
                content,
                authorId,
                postId,
                parentId
            }
        });

        return new Response(JSON.stringify(reply), {
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