const { Router } = require('express');

const AuthMidleware = require('./app/Midlewares/AuthMidleware');
const LoginController = require('./app/Controllers/LoginController');
const UserController = require('./app/Controllers/UserController');
const CursoController = require('./app/Controllers/CursoController');

const routes = new Router();

routes.post("/user", UserController.store);
routes.get("/user", AuthMidleware, UserController.show);

routes.post("/login", LoginController.index);
routes.post("/curso", CursoController.index);
routes.get("/cursos", CursoController.searchCurso);
routes.get("/users", UserController.searchUser);
routes.delete("/curso/:id",CursoController.deleteCurso);
routes.put("/curso/:id",CursoController.alterarCurso);
    


module.exports = routes;