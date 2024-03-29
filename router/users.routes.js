const { Router } = require("express")
const auth = require("../controller/users.js")
const img  = require('../middleware/upload.js')
const app = Router()
app.post('/users/register', img.FILE, auth.REGISTER)
app.post('/users/login', auth.LOGIN)
app.get("/check", auth.CHECK)
app.post('/file', auth.FILE)
app.put('/users', auth.UPDATE_USERS)
app.get('/check_token', auth.CHECK_TOKEN)
module.exports = app