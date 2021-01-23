const Controller = {
  name: "Dashboard",
};

const Data = {
  title: "Test title",
  stylesheets: ["/stylesheets/style.css"],
};

Controller.index = (req, res) => {
  res.render(`${Controller.name}/index`, Data);
};

module.exports = Controller;
