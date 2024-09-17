import app from "./app"
import editUser from './endpoints/editUser'
import createUserAtividade from "./endpoints/creteUserAtividade"
import login from "./endpoints/login";
import getUser from "./endpoints/getUser";

// app.post('/user/signup', createUser)
app.get('/user/profile', getUser)
app.post('/user/signup', createUserAtividade);
app.post('/user/login', login);
app.put('/user/edit/:id', editUser)