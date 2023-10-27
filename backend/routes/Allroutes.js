const express = require('express');
const Router = express.Router();
const actions = require("../controller/Actions");
const Login = require('../controller/LoginActions');
const Register = require("../controller/RegisterActions");
const AllUser = require("../controller/AllUserActions");
const Protect = require('../middleware/AuthMiddelware');
const AccessChat = require('../controller/AccessChat');
const FetchChat = require('../controller/FetchChat');
Router.post('/hiring',actions.PostJob);
Router.get("/job",actions.ShowAll_job);
Router.get('/search',actions.Searching_system);
Router.post("/login",Login);
Router.post("/register",Register);
Router.get("/alluser",Protect,AllUser);
Router.post('/chat',Protect,AccessChat);
Router.get("/chat",FetchChat)
module.exports = Router