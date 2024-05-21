import "reflect-metadata";
import express, {Request,Response} from 'express';
import dataSource from "./datasource/datasource";
import { User } from "./entities/User.entity";
const PORT = 3000; 
const app = express()

dataSource.initialize().then(()=>{
    console.log("DataSource successfully connected with the database!!!")
}).catch((err)=>{
    console.log("DataSource connection failed", err)
})

app.get("/", async(req:Request,res:Response)=>{
    let userRepo = dataSource.getRepository(User)

    const user1 = new User();
    user1.firstName = 'bhavani';
    user1.lastName = 'yasarla';

    const user2 = new User();
    user2.firstName = 'latha';
    user2.lastName = 'yasarla';

    res.json(await userRepo.save([user1,user2]))
})

app.listen(PORT, ()=>{
    console.log("Server running on http://localhost:3000/");
})