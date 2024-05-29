import prisma from "../../../prisma/prisma";

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '5', 10);

        const posts = await prisma.post.findMany({
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