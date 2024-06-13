import { PrismaClient } from "@prisma/client" 

const db = new PrismaClient()

const main = async() => {
    const query = await db.users.create({
        data:{UserName:"John", Student: false, Age:30}
    })
}

const search = async () =>{
    const query = await db.users.findFirst({where: {Id:1}})
    console.log(query)
}
main()