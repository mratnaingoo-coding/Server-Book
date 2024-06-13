import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

const main = async () => {
    const query = await db.users.create({
        data: { UserName: "John", Student: false, Age: 30 }
    })
}

const item = async () => {
    const query = await db.users.findFirst({ where: { Id: 1 }, include: { post: true } })
    console.log(query)
}

const lst = async () => {
    const query = await db.post.findMany({ include: { likeonpost: { include: { like: true } } } })
    console.log(query[1].likeonpost)
}
// main()
// item()
lst()
//01:48:54