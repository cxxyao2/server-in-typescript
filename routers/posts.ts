import { Router } from 'express'

const POSTS = [
	{
		id: 1,
		title: 'Post 1',
		body: 'Good writer is not a good teacher',
		userId: 1
	},
	{
		id: 2,
		title: 'Post 2',
		body: 'Good student must live a good life',
		userId: 2
	},
	{
		id: 3,
		title: 'Post 3',
		body: 'Good teacher perhaps is a good tutor',
		userId: 1
	},
	{ id: 4, title: 'Post 4', body: 'Good tutor must be a good teacher' }
]

const router = Router()

router.get('/', (req, res) => {
	res.json(POSTS)
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

	const post = POSTS.find((p) => p.id === id)

	if (!post)
		return res.status(404).send('The Post with the given ID was not found.')

	res.send(post)
})

router.post('/', (req, res) => {
	const { title, body } = req.body
	const id = POSTS.length + 1
	POSTS.push({ id, title, body })
	res.status(201).json({ id, title, body })
})

export default router
