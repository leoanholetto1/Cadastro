import { FastifyRequest, FastifyReply } from "fastify";
import {CreateCustomersService} from '../services/CreateCustomersService'
import { request } from "http";

class CreateCustomersController{
    async handle(request:FastifyRequest ,reply: FastifyReply){
        const {name, email} = request.body as {name: string , email: string};
        const custstomerService = new CreateCustomersService();
        const customer = await custstomerService.execute({name,email});
        reply.send(customer);
    }
}

export {CreateCustomersController};