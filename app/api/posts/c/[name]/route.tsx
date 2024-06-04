import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import prisma from "../../../../../prisma/prisma";
import {Prisma} from "@prisma/client";

export const dynamic = 'force-dynamic'

export async function GET(req: Request, context: { params: Params}) {
    try {
        const communityName = context.params.name
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '5', 10);
        const sortOption = searchParams.get('sort') || 'newest';

        const sortOptions = {
            newest: { createdAt: Prisma.SortOrder.desc },
            oldest: { createdAt: Prisma.SortOrder.asc },
            likes: { likes: { _count: Prisma.SortOrder.desc}},
        };

        const posts = await prisma.post.findMany({
            where: { community : {name: communityName}, communityId: { not: 7 }},
            orderBy: sortOptions[sortOption as keyof typeof sortOptions],
            skip: (page - 1) * limit,
            take: limit,
            include: {
                author: {
                    include: {
                        user: true
                    }
                },
                images: true,
                community: true,
                _count: {
                    select: { comments: true, likes: true },
                },
            },
        });

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