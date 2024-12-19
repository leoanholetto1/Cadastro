import { FastifyRequest, FastifyReply } from "fastify";
import {DeleteCustomerService} from '../services/DeleteCustomerService'

class DeleteCustomersController{
    async handle(request:FastifyRequest ,reply:FastifyReply ){
        const custstomerService = new DeleteCustomerService();
        const {id} =  request.query as {id: string};
        const customer = await custstomerService.execute({id});
        reply.send(customer);
    }
}

export {DeleteCustomersController};