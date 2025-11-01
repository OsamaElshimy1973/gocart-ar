import { Inngest, inngest } from './clint';
import prisma from '@/lib/prisma';

//Inngest function to save user data to database
export const syncUserCreation=inngest.createFunction(
    {id:'sync-user-create'},
    {event:'clerk/user.created'},
    async ({Event})=>{
        const {data}=Event
        await prisma.user.create({
            data:{
                id: data.id,
                email: data.email_addresses[0].email_address,
                name: '${data.first_name} ${data.last_name}',
                image: data.image_urs,
            }
        })

    }
)

//Inngest function to update user data in database
export const syncUserUpdation=inngest.createFunction(
    {id:'sync-user-update'},
    {event:'clerk/user.update'},
    async ({Event})=>{
        const {data}=Event
        await prisma.user.update({
            where: {id: data.id,},
            data:{
                email: data.email_addresses[0].email_address,
                name: '${data.first_name} ${data.last_name}',
                image: data.image_urs,
            }
        })

    }
)

export const syncUserDeletion=inngest.createFunction(
    {id:'sync-user-delete'},
    {event:'clerk/user.deleted'},
    async ({Event})=>{
        const {data}=Event
        await prisma.user.delete({
            where: {id: data.id,}
        })

    }   
)