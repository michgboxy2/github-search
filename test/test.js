
const request = require("supertest"),
      chai    = require('chai'),
      expect  = chai.expect,
      app     = require('../api/server/server');


describe("Github user endpoint", function() {
    
    it("should return status 403 if username is not passed", (done) => {
        const page = 1;

        request(app)
        .get(`/search?&page=${page}`)
        .end(function (err, res) {
            if (err) done(err);
            expect(res.status).to.equal(403);
            expect(JSON.parse(res.text)).to.be.an("object");
            expect(JSON.parse(res.text)).to.have.own.property('message');
            expect(JSON.parse(res.text).status).to.be.equal('failed');
            done()
        })
    });

    it("should fetch a list github of users", (done) => {
        const username = "michgboxy";
        const page = 1;
        
        request(app)
        .get('/search')
        .query({username, page})
        .end(function (err, res) {
            if (err) done(err);
            expect(res.status).to.equal(200);
            expect(JSON.parse(res.text)).to.have.own.property('total_count');
            expect(JSON.parse(res.text).items).to.be.an("array");
            
            done()
        })
            
    });

    

    it("should return status 403 if username is not passed to get user profile", (done) => {
        request(app)
        .get(`/search/`)
        .end(function (err, res) {
            if (err) done(err);
            expect(res.status).to.equal(403);
            expect(JSON.parse(res.text)).to.be.an("object");
            expect(JSON.parse(res.text)).to.have.own.property('message');
            expect(JSON.parse(res.text).status).to.be.equal('failed');
            done()
        })

        
    });

    it("should fetch user profile details", (done) => {
        const username = "michgboxy";

            request(app)
            .get(`/search/${username.trim()}`)
            .end(function (err, res) {
                if (err) done(err);
                expect(res.status).to.equal(200);
                expect(JSON.parse(res.text)).to.be.an("object");
                expect(JSON.parse(res.text)).to.have.own.property('login');
                expect(JSON.parse(res.text)).to.have.own.property('avatar_url');
                expect(JSON.parse(res.text)).to.have.own.property('followers');
                expect(JSON.parse(res.text)).to.have.own.property('following');
                expect(JSON.parse(res.text)).to.have.own.property('email');
                expect(JSON.parse(res.text)).to.have.own.property('name');
                done();
            })
        

    });
})

