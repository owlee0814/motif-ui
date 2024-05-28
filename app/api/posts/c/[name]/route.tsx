import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import prisma from "../../../../../prisma/prisma";

export async function GET(req: Request, context: { params: Params}) {
    try {
        const communityName = context.params.name
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '5', 10);

        const posts = await prisma.post.findMany({
            where: { community : {name: communityName}},
            orderBy: {
                createdAt: 'desc',
            },
            skip: (page - 1) * limit,
            take: limit,
            include: {
                author: {
                    include: {
                        user: true
                    }
                },
                community: true,
                _count: {
                    select: { comments: true },
                },
            },
        });

        console.log(posts)

        if (!posts) {
            return new Response("Posts not found", { status: 404 });
        }
        return new Response(JSON.stringify(posts), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59"
            }
        });
    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}