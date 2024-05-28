import {Prisma} from "@prisma/client";

const userSocialWithRelations = Prisma.validator<Prisma.UserSocialDefaultArgs>()({
    include: {
        user: true
    },
})

const postWithRelations = Prisma.validator<Prisma.PostDefaultArgs>()({
    include: {
        community: true,
        author: {
            include : {
                user: true
            }
        }
    },
})

const commentWithRelations = Prisma.validator<Prisma.CommentDefaultArgs>()({
    include: {
        replies : true,
        author: {
            include : {
                user: true
            }
        }
    },
})

export type PostWithRelations = Prisma.PostGetPayload<typeof postWithRelations>

export type CommentWithRelations = Prisma.CommentGetPayload<typeof commentWithRelations>

export type UserWithRelations = Prisma.UserSocialGetPayload<typeof userSocialWithRelations>