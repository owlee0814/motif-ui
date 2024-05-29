import prisma from "../../../../prisma/prisma";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

export async function GET(req: Request, context: { params: Params}) {
    const id = context.params.id

    if (!id || isNaN(Number(id))) {
        return new Response("Invalid ID", { status: 400 });
    }

    try {
        const post = await prisma.post.findUnique({
            where: { id: Number(id) },
            include: {
                author: {
                    include: {
                        user: true
                    }
                },
                images: true,
                community: true,
                _count: {
                    select: { likes: true, comments: true },
                },
            },
        });

        if (!post) {
            return new Response("Post not found", { status: 404 });
        }
        return new Response(JSON.stringify(post), { status: 200 });
    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}