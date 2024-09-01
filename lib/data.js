import { Users } from "@/lib//models"
import { connectToDB } from "@/lib/utils";

export const fetchUsers = async() => {
    try{
        connectToDB();
        const users = await Users.find();
        return users
    }catch(error){
        console.log(error)
        throw new Error("Failed to fetch users.");
    }
}