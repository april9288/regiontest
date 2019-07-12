const express = require('express')
const cors = require('cors')
const photos_json = require('./photos.json')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/small_json', (req,res)=> {
	let user = {
		name: 'James Kim',
		email: 'april9288@gmail.com'
	}
	res.send({msg: "Success", data: user})
})

app.get('/big_json', (req,res)=> {
	res.send(photos_json)
})

app.get('/cpu/:loop_param', async (req,res)=> {
	let result = await computation()
	function computation(){
		let num = 1
		let loop = req.params.loop_param
		for (let i =1; i < loop; i++) {
			for (let j =1; j < loop; j++) {
				for (let z =1; z< loop; z++) {
					num = num + i + j + z
				}
			}
		}
		return num
	}
	
	res.status(200).send(String(result))
})

app.get('/loaderio-754efa29e2ece30f7eefaec21a52d0db', (req,res)=> {
	res.send('loaderio-754efa29e2ece30f7eefaec21a52d0db')
})

//listening on 3000
app.listen(3000, ()=> console.log("Server is up and running on ", 3000))