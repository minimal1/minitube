/** @format */

export const home = (req, res) => {
  console.log(req);
  res.render("index", { pageTitle: "Home" });
};
