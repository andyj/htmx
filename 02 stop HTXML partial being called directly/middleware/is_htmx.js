/**
 * Middleware to determine if the request is an HTMX request.
 * Sets `res.locals.isHTMX` to `true` if 'hx-request' header is present and non-empty,
 * otherwise sets it to `false`.
 *
 * @param {import('express').Request} req - Express.js request object.
 * @param {import('express').Response} res - Express.js response object.
 * @param {import('express').NextFunction} next - A callback to signal the completion of the middleware.
 */
function isHTMX(req, res, next) {
  res.locals.isHTMX = Boolean(req.headers['hx-request']);
  next();
}

module.exports = {
  isHTMX,
};
