const express = require('express'),
      api     = express.Router(),
      searchRouter = require('./v1/search/searchRouter');

      api.use('/search', searchRouter);

      module.exports = api;