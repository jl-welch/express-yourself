const path         = require("path");
const logger       = require("morgan");
const express      = require("express");
const createError  = require("http-errors");
const cookieParser = require("cookie-parser");

const indexRouter  = require("../app/routes/dashboard");
const usersRouter  = require("../app/routes/users");

const app = express();

app.set("views", path.join(__dirname, "../app/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
