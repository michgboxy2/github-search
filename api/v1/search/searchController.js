const rp = require('request-promise');
const {BASE_URL} = process.env;
const axios = require('axios');



exports.searchUser = async (req, res, next) => {
    try {
        const { username } = req.query;
        // if(!username){
        //     return res.status(403).send({message: "please enter your username", status: "failed"});
        // }


        // var options = {
        //     'method': 'GET',
        //     'url': `${BASE_URL}/search/users?q=${username}`,
        //     'headers': {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Authorization': 'token cc6cce2aee1c45e57f3e9f13e93b0355538a9fbd',
        //         'User-Agent': 'PostmanRuntime/7.18.0'
        //     }
        // };

        // let data = await rp(options);

        // res.status(200).send(data);


    }catch(e){
        return res.status(422).send({message : e, status: "failed"});
    }

}

exports.getNoOfFollowers = async (req, res, next) => {
    var request = require('request');
var options = {
  method: 'GET',
  uri: 'https://api.github.com/users/michg/followers',
  headers: {
    Authorization: 'token cc6cce2aee1c45e57f3e9f13e93b0355538a9fbd'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
        res.send(response.body);
});
    
    

}