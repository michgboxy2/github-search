const { post } = require('request-promise');

const express = require('express'),
      router  = express.Router(),
      { searchUser, getNoOfFollowers, getProfileDetails }      = require('./searchController');

      router.route('/')
      .get(searchUser)
       .post(getNoOfFollowers);

      router.route('/:username')
      .get(getProfileDetails);

      module.exports = router;