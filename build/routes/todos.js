"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _settings = require("../settings.js");

var todoRouter = _express.default.Router();

todoRouter.get('/todos', function (req, res) {
  return res.status(200).json({
    message: 'Todo Router',
    env: _settings.testEnvironmentVariable
  });
});
var _default = todoRouter;
exports.default = _default;