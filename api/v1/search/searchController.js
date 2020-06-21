require('dotenv').config();

const {
  BASE_URL,
  TOKEN
} = require('../../config');
const axios = require('axios');


exports.searchUser = async (req, res, next) => {
  try {
    const {
      username,
      page = 1
    } = req.query;
    if (!username) {
      return res.status(403).send({
        message: "please enter your username",
        status: "failed"
      });
    }

    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'token ' + TOKEN
      },
      url: `${BASE_URL}/search/users?q=${username}&page=${page}`
    };

    let data = await axios(options);

    res.send(data.data);

  } catch (e) {
    return res.status(422).send({
      message: e,
      status: "failed"
    });
  }

}

exports.getProfileDetails = async (req, res, next) => {
  const { username } = req.params;
    if(!username){ return res.status(403).send({message: "please enter the usename", status: "failed"});}

  try{
    var options = {
      method: 'GET',
      url: `${BASE_URL}/users/${username}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'token ' + TOKEN
      },
    };

    let {data} = await axios(options);

    res.status(200).send(data);

  }catch(e){
    return res.status(422).send({
      message: e,
      status: "failed"
    });
  }
}