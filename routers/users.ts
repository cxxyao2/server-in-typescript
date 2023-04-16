import { Router } from 'express'

const USERS = [
	{ id: 1, name: 'JK Rowling', series: 'Harry Porter' },
	{ id: 2, name: 'JRR Tolkien', series: 'Lord of the Rings' },
	{ id: 3, name: 'George RR Martin', series: 'Game of Thrones' }
]

const router = Router()

router.get('/', (req, res) => {
	res.json(USERS)
	//  if (!req.query.startdate && !req.query.enddate && !req.query.createuser) {
})

router.get('/:id', (req, res) => {
	const str = req.params.id
	let id = 0
	if (str && str.trim()) {
		id = parseInt(str)
	} else {
		id = 0 // or any other default value you want to assign
	}

	const user = USERS.find((p) => p.id === id)

	if (!user)
		return res.status(404).send('The Post with the given ID was not found.')

	res.send(user)
})

export default router
