const express = require('express');
const Router = express.Router();
const actions = require("../controller/Actions")
Router.post('/hiring',actions.PostJob);
Router.get("/job",actions.ShowAll_job);
Router.get('/search',actions.Searching_system)
module.exports = Router