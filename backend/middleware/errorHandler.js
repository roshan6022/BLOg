// middleware/errorHandler.js

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode);
  res.json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
