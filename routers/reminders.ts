import {Router} from 'express'
import { CreateRemainder } from '../dtos/create-remindes'
import Reminder from '../models/reminder'


const router = Router();
const reminders : Reminder[] = []

router.get("/",(req,res)=>{
  res.json(reminders)
})


router.post("/",(req,res)=>{
 const {title } = (req.body) as CreateRemainder
 const reminder =   new Reminder(title)
 reminders.push(reminder)
 res.status(201).json(reminder)
})

export default router