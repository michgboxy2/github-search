const { post } = require('request-promise');

const express = require('express'),
      router  = express.Router(),
      {searchUser, getNoOfFollowers}      = require('./searchController');

      router.route('/')
      .get(searchUser)
       .post(getNoOfFollowers);

      router.route('/count')
      .get(getNoOfFollowers);

      module.exports = router;