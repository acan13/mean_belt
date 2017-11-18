path = require('path')
// add required models here

module.exports = (app) => {
  // add routes here


  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
  });
}
