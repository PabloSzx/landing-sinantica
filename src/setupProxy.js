const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  console.log("proxy called");
  app.use(
    proxy("/blog", {
      target: "http://localhost/",
    })
  );
};
