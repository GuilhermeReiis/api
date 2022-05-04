const { Router } = require('express');

const AuthMidleware = require('./app/Midlewares/AuthMidleware');
const LoginController = require('./app/Controllers/LoginController');
const UserController = require('./app/Controllers/UserController');
const CursoController = require('./app/Controllers/CursoController');
const AlunosController = require('./app/Controllers/AlunoController');
const VendasController = require('./app/Controllers/VendasController');

const routes = new Router();

routes.post("/user", UserController.store);
routes.get("/user", AuthMidleware, UserController.show);

routes.post("/login", LoginController.index);


routes.post("/curso", CursoController.index);
routes.get("/cursos", CursoController.searchCurso);
routes.delete("/curso/:id",CursoController.deleteCurso);
routes.put("/curso/:id",CursoController.alterarCurso);
    

routes.get("/users", UserController.searchUser);

routes.post("/aluno", AlunosController.addAluno);
routes.get("/aluno", AlunosController.searchAluno);
routes.delete("/aluno/:id", AlunosController.deleteAluno);
routes.put("/aluno/:id", AlunosController.alterarAluno);

// routes.post("/venda",VendasController.addVenda);
routes.post("/venda",VendasController.addVenda);
routes.get("/venda",VendasController.searchVenda);
routes.delete("/venda/:id",VendasController.deleteVenda);
routes.put("/venda/:id",VendasController.alterarVenda);


module.exports = routes;