import { Request, Response } from "express";
import { SettingsService } from '../services/SettingsService'


class SettingsController{
    async create(req: Request,res: Response){
        const {chat ,username} = req.body 
        
        const settingsService = new SettingsService()
        
        try{
            const settings = await settingsService.create({chat,username})
            return res.json(settings)
        }
        catch(error){
            res.status(400).json({
                message: error.message
            })
        }
    }
    async findByUserName(req: Request,res: Response){
        const {username} = req.params
        const settingService = new SettingsService()
        const settings = await settingService.findByUserName(username)
        
        return res.json(settings)
    }

    async update(req: Request,res: Response){
        const {username} = req.params
        const {chat} = req.body
        const settingService = new SettingsService()
        const settings = await settingService.update(username,chat)
        
        return res.json(settings)
    }
}

export {SettingsController}