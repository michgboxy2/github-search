const express = require('express'),
      cors    = require('cors'),
      bps     = require('body-parser'),
      morgan  = require('morgan'),
      app     = express();

const api     = require('../api');


      app.use(bps.json());
      app.use(bps.urlencoded({extended: true}));

      app.use(cors());
      app.use(morgan("dev"));

      app.use("/", api);

      app.use((err, req, res, next) => {
          return res.status(500).json(err);
      });


      module.exports = app;

      