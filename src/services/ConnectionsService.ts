import { getCustomRepository, Repository } from "typeorm"
import { Connection } from "../entities/Connection"
import { ConnectionsRepository } from "../repositories/ConnectionsRepository"

interface IConnectionCreate{
    socket_id: string,
    user_id: string,
    admin_id?: string,
    id?: string,
}

class ConnectionsService {
    private connectionRepository: Repository<Connection>

    constructor(){
        this.connectionRepository = getCustomRepository(ConnectionsRepository)
    }

    async create({socket_id,user_id,admin_id,id}: IConnectionCreate){
        const connection = this.connectionRepository.create({
            admin_id,
            id,
            user_id,
            socket_id
        })

        this.connectionRepository.save(connection)

        return connection
    }
    async findByUserId(user_id:string){
        const connection = await this.connectionRepository.findOne({
            user_id
        })
        return connection
    }
}

export {ConnectionsService}