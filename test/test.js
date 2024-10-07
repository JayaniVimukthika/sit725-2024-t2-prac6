var expect  = require("chai").expect;
var request = require("request");

describe("Add Two Numbers", function() {
    var url = "http://localhost:3040/addTwoNumbers/4/2";
    it("returns status 200 to check if api works", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api give right result should be 200", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done()
          });
    });
    it("returns the result as number", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done()
          });
    });
    it("returns the result equal to 6", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body)
          expect(body.result).to.equal(6);
          done()
        });
  });
  it("returns the result not equal to 16", function(done) {
    request(url, function(error, response, body) {
        body = JSON.parse(body);
        expect(body.result).to.not.equal(16);
        done()
      });
});
  });

  describe("Add Two strings", function() {
    var url = "http://localhost:3040/addTwoNumbers/num1/bnum2";
    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
           // resp = JSON.parse(response);
           // console.log(response);
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(400);
            done()
          });
    });
    it("returns the result as null", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('null');
            done()
          });
    });
  });

//substraction
  describe("Substract Two Numbers", function() {
    var url = "http://localhost:3040/subsTwoNumbers/4/2";
    it("returns status 200 to check if api works", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api give right result should be 200", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done()
          });
    });
    it("returns the result as number", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done()
          });
    });
    it("returns the result equal to 2", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body)
          expect(body.result).to.equal(2);
          done()
        });
  });
  it("returns the result not equal to 16", function(done) {
    request(url, function(error, response, body) {
        body = JSON.parse(body);
        expect(body.result).to.not.equal(16);
        done()
      });
});
  });

  describe("Add Two strings", function() {
    var url = "http://localhost:3040/subsTwoNumbers/num1/bnum2";
    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
           // resp = JSON.parse(response);
           // console.log(response);
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(400);
            done()
          });
    });
    it("returns the result as null", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('null');
            done()
          });
    });
  });


