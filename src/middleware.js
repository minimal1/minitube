/** @format */

export const localMiddleware = (req, res, next) => {
  res.locals.siteTitle = "MINI-TUBE";
  next();
};
