import {Prisma} from "@prisma/client";

const userSocialWithRelations = Prisma.validator<Prisma.UserSocialDefaultArgs>()({
    include: { user: true },
})

const postWithRelations = Prisma.validator<Prisma.PostDefaultArgs>()({
    include: { community: true, author: true },
})

export type PostWithRelations = Prisma.PostGetPayload<typeof postWithRelations>

export type UserWithRelations = Prisma.UserSocialGetPayload<typeof userSocialWithRelations>