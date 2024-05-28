import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import prisma from "../../../../../../prisma/prisma";

export async function GET(req: Request, context: { params: Params }) {
    const userId = context.params.id;

    try {
        const likedPosts = await prisma.post.findMany({
            where: {
                likes: {
                    some: {
                        userId: userId
                    }
                }
            },
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                author: {
                    include: {
                        user: true
                    }
                },
                community: true,
                _count: {
                    select: { comments: true, likes: true },
                },
            },
        });

        return new Response(JSON.stringify(likedPosts), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
