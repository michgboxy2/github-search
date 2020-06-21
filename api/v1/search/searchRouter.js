const { post } = require('request-promise');

const express = require('express'),
      router  = express.Router(),
      { searchUser, getProfileDetails }      = require('./searchController');

      router.route('/')
      .get(searchUser);

      router.route('/:username')
      .get(getProfileDetails);

      module.exports = router;