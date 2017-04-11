/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzNjNjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIj81ZTk5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb21cIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIj9lZTE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Home = __webpack_require__(12);\n\nObject.defineProperty(exports, 'default', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Home).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcz9iNDM0Il0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O3lDQUFTQSxPIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ib21lJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Routes = __webpack_require__(13);\n\nObject.defineProperty(exports, 'default', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Routes).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcm91dGVzL2luZGV4LmpzPzg1YTMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7MkNBQVNBLE8iLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1JvdXRlcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3JvdXRlcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/ZDJkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCI/NDFiZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(1);\n\nvar _reactRouter = __webpack_require__(2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar About = function (_React$Component) {\n    _inherits(About, _React$Component);\n\n    function About() {\n        _classCallCheck(this, About);\n\n        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));\n    }\n\n    _createClass(About, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'This is About Component'\n                ),\n                _react2.default.createElement(\n                    _reactRouter.Link,\n                    { to: '/' },\n                    'Dashboard'\n                )\n            );\n        }\n    }]);\n\n    return About;\n}(_react2.default.Component);\n\nexports.default = About;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvQWJvdXQuanM/M2Q5OCJdLCJuYW1lcyI6WyJBYm91dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7OztpQ0FDVjtBQUNQLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQU0sSUFBRyxHQUFUO0FBQUE7QUFBQTtBQUZKLGFBREo7QUFNRDs7OztFQVJnQyxnQkFBTUMsUzs7a0JBQXBCRCxLIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+VGhpcyBpcyBBYm91dCBDb21wb25lbnQ8L2gxPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _About = __webpack_require__(8);\n\nObject.defineProperty(exports, 'default', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_About).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvaW5kZXguanM/YTdiNSJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzswQ0FBU0EsTyIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQWJvdXQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(1);\n\nvar _reactRouter = __webpack_require__(2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dashboard = function (_React$Component) {\n    _inherits(Dashboard, _React$Component);\n\n    function Dashboard() {\n        _classCallCheck(this, Dashboard);\n\n        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));\n    }\n\n    _createClass(Dashboard, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'This is Dashboard Component'\n                ),\n                _react2.default.createElement(\n                    _reactRouter.Link,\n                    { to: '/about' },\n                    'About'\n                )\n            );\n        }\n    }]);\n\n    return Dashboard;\n}(_react2.default.Component);\n\nexports.default = Dashboard;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZC5qcz9hNmI5Il0sIm5hbWVzIjpbIkRhc2hib2FyZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBR3FCQSxTOzs7Ozs7Ozs7OztpQ0FDVjtBQUNQLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQU0sSUFBRyxRQUFUO0FBQUE7QUFBQTtBQUZKLGFBREo7QUFNRDs7OztFQVJvQyxnQkFBTUMsUzs7a0JBQXhCRCxTIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5UaGlzIGlzIERhc2hib2FyZCBDb21wb25lbnQ8L2gxPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Dashboard = __webpack_require__(10);\n\nObject.defineProperty(exports, 'default', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Dashboard).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2luZGV4LmpzP2E1OTYiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OENBQVNBLE8iLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9EYXNoYm9hcmQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'article',\n          null,\n          _react2.default.createElement(\n            'p',\n            null,\n            'This starter kit contains all the build tooling and configuration you need to kick off your next universal React project, whilst containing a minimal project set up allowing you to make your own architecture decisions (Redux/Mobx etc).'\n          )\n        ),\n        this.props.children\n      );\n    }\n  }]);\n\n  return Home;\n}(_react2.default.Component);\n\nexports.default = Home;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9Ib21lLmpzP2NhZTEiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQURGO0FBU0csYUFBS0MsS0FBTCxDQUFXQztBQVRkLE9BREY7QUFhRDs7OztFQWYrQixnQkFBTUMsUzs7a0JBQW5CSCxJIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGlzIHN0YXJ0ZXIga2l0IGNvbnRhaW5zIGFsbCB0aGUgYnVpbGQgdG9vbGluZyBhbmQgY29uZmlndXJhdGlvbiB5b3VcbiAgICAgICAgICAgIG5lZWQgdG8ga2ljayBvZmYgeW91ciBuZXh0IHVuaXZlcnNhbCBSZWFjdCBwcm9qZWN0LCB3aGlsc3QgY29udGFpbmluZyBhXG4gICAgICAgICAgICBtaW5pbWFsIHByb2plY3Qgc2V0IHVwIGFsbG93aW5nIHlvdSB0byBtYWtlIHlvdXIgb3duIGFyY2hpdGVjdHVyZVxuICAgICAgICAgICAgZGVjaXNpb25zIChSZWR1eC9Nb2J4IGV0YykuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL0hvbWUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(1);\n\nvar _reactRouter = __webpack_require__(2);\n\nvar _home = __webpack_require__(3);\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _dashboard = __webpack_require__(11);\n\nvar _dashboard2 = _interopRequireDefault(_dashboard);\n\nvar _about = __webpack_require__(9);\n\nvar _about2 = _interopRequireDefault(_about);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* export default class Routes extends React.Component {\n  render() {\n    return (\n        <Route path=\"/\" component={Home}>\n            <IndexRoute component={Dashboard} />\n            <Route path=\"about\" component={About} />\n        </Route>\n    );\n  }\n} */\n\nvar Routes = _react2.default.createElement(\n  _reactRouter.Route,\n  { path: '/' },\n  _react2.default.createElement(_reactRouter.IndexRoute, { component: _dashboard2.default }),\n  _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _about2.default })\n);\n\nexports.default = Routes;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcm91dGVzL1JvdXRlcy5qcz9jNjVkIl0sIm5hbWVzIjpbIlJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7OztBQVdBLElBQU1BLFNBQ0o7QUFBQTtBQUFBLElBQU8sTUFBSyxHQUFaO0FBQ0UsMkRBQVksOEJBQVosR0FERjtBQUVFLHNEQUFPLE1BQUssT0FBWixFQUFvQiwwQkFBcEI7QUFGRixDQURGOztrQkFPZUEsTSIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFJvdXRlLEluZGV4Um91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgSG9tZSBmcm9tICcuLy4uL2hvbWUnXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vLi4vZGFzaGJvYXJkJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vLi4vYWJvdXQnXG5cblxuLyogZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0+XG4gICAgICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYWJvdXRcIiBjb21wb25lbnQ9e0Fib3V0fSAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICk7XG4gIH1cbn0gKi9cblxuY29uc3QgUm91dGVzID0gKFxuICA8Um91dGUgcGF0aD1cIi9cIj5cbiAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cbiAgICA8Um91dGUgcGF0aD1cImFib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgPC9Sb3V0ZT5cbilcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3JvdXRlcy9Sb3V0ZXMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _express = __webpack_require__(5);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(1);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _server = __webpack_require__(7);\n\nvar _home = __webpack_require__(3);\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _reactRouter = __webpack_require__(2);\n\nvar _path = __webpack_require__(6);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _routes = __webpack_require__(4);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar port = 3000;\napp.set('view engine', 'ejs');\napp.set('views', _path2.default.join(__dirname, \"views\"));\napp.use(function (req, res) {\n\n  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {\n    if (error) {\n      console.log('error');\n      res.status(500).send(error.message);\n    } else if (redirectLocation) {\n      console.log('Redirect Case');\n      res.redirect(302, redirectLocation.pathname + redirectLocation.search);\n    } else if (renderProps) {\n      console.log('Normal Render');\n      // You can also check renderProps.components or renderProps.routes for\n      // your \"not found\" component or route respectively, and send a 404 as\n      // below, if you're using a catch-all route.\n      var html = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));\n      res.status(200).render('index.ejs', { result: html });\n      //res.status(200).send(renderToString(<RouterContext {...renderProps} />))\n    } else {\n      res.status(404).send('Not found');\n    }\n  });\n});\napp.listen(port, function () {\n  console.log('Example app listening on port 3000!');\n});\n/* WEBPACK VAR INJECTION */}.call(exports, \"src/server\"))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzP2Q5YzIiXSwibmFtZXMiOlsiYXBwIiwicG9ydCIsInNldCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJ1c2UiLCJyZXEiLCJyZXMiLCJyb3V0ZXMiLCJsb2NhdGlvbiIsInVybCIsImVycm9yIiwicmVkaXJlY3RMb2NhdGlvbiIsInJlbmRlclByb3BzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwicmVkaXJlY3QiLCJwYXRobmFtZSIsInNlYXJjaCIsImh0bWwiLCJyZW5kZXIiLCJyZXN1bHQiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNLHdCQUFaO0FBQ0EsSUFBTUMsT0FBTyxJQUFiO0FBQ0FELElBQUlFLEdBQUosQ0FBUSxhQUFSLEVBQXVCLEtBQXZCO0FBQ0FGLElBQUlFLEdBQUosQ0FBUSxPQUFSLEVBQWlCLGVBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFvQixPQUFwQixDQUFqQjtBQUNBSixJQUFJSyxHQUFKLENBQVEsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9COztBQUUxQiwwQkFBTSxFQUFFQyx3QkFBRixFQUFpQkMsVUFBVUgsSUFBSUksR0FBL0IsRUFBTixFQUE0QyxVQUFDQyxLQUFELEVBQVFDLGdCQUFSLEVBQTBCQyxXQUExQixFQUEwQztBQUNwRixRQUFJRixLQUFKLEVBQVc7QUFDVEcsY0FBUUMsR0FBUixDQUFZLE9BQVo7QUFDQVIsVUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCTixNQUFNTyxPQUEzQjtBQUNELEtBSEQsTUFHTyxJQUFJTixnQkFBSixFQUFzQjtBQUMzQkUsY0FBUUMsR0FBUixDQUFZLGVBQVo7QUFDQVIsVUFBSVksUUFBSixDQUFhLEdBQWIsRUFBa0JQLGlCQUFpQlEsUUFBakIsR0FBNEJSLGlCQUFpQlMsTUFBL0Q7QUFDRCxLQUhNLE1BR0EsSUFBSVIsV0FBSixFQUFpQjtBQUN0QkMsY0FBUUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFNTyxPQUFPLDRCQUFlLDBEQUFtQlQsV0FBbkIsQ0FBZixDQUFiO0FBQ0FOLFVBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxNQUFoQixDQUF1QixXQUF2QixFQUFvQyxFQUFDQyxRQUFRRixJQUFULEVBQXBDO0FBQ0E7QUFDRCxLQVJNLE1BUUE7QUFDTGYsVUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLFdBQXJCO0FBQ0Q7QUFDRixHQWxCRDtBQW1CRCxDQXJCRDtBQXNCQWpCLElBQUl5QixNQUFKLENBQVd4QixJQUFYLEVBQWlCLFlBQVk7QUFDM0JhLFVBQVFDLEdBQVIsQ0FBWSxxQ0FBWjtBQUNELENBRkQsRSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi8uLi9hcHAvY29tcG9uZW50cy9ob21lJ1xuaW1wb3J0IHsgbWF0Y2gsIFJvdXRlckNvbnRleHQgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuLy4uL2FwcC9jb21wb25lbnRzL3JvdXRlcydcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcG9ydCA9IDMwMDA7XG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdlanMnKVxuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oX19kaXJuYW1lLFwidmlld3NcIikpXG5hcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBcbiAgbWF0Y2goeyByb3V0ZXM6Um91dGVzLCBsb2NhdGlvbjogcmVxLnVybCB9LCAoZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzKSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxuICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IubWVzc2FnZSlcbiAgICB9IGVsc2UgaWYgKHJlZGlyZWN0TG9jYXRpb24pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdSZWRpcmVjdCBDYXNlJylcbiAgICAgIHJlcy5yZWRpcmVjdCgzMDIsIHJlZGlyZWN0TG9jYXRpb24ucGF0aG5hbWUgKyByZWRpcmVjdExvY2F0aW9uLnNlYXJjaClcbiAgICB9IGVsc2UgaWYgKHJlbmRlclByb3BzKSB7XG4gICAgICBjb25zb2xlLmxvZygnTm9ybWFsIFJlbmRlcicpXG4gICAgICAvLyBZb3UgY2FuIGFsc28gY2hlY2sgcmVuZGVyUHJvcHMuY29tcG9uZW50cyBvciByZW5kZXJQcm9wcy5yb3V0ZXMgZm9yXG4gICAgICAvLyB5b3VyIFwibm90IGZvdW5kXCIgY29tcG9uZW50IG9yIHJvdXRlIHJlc3BlY3RpdmVseSwgYW5kIHNlbmQgYSA0MDQgYXNcbiAgICAgIC8vIGJlbG93LCBpZiB5b3UncmUgdXNpbmcgYSBjYXRjaC1hbGwgcm91dGUuXG4gICAgICBjb25zdCBodG1sID0gcmVuZGVyVG9TdHJpbmcoPFJvdXRlckNvbnRleHQgey4uLnJlbmRlclByb3BzfSAvPilcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5yZW5kZXIoJ2luZGV4LmVqcycsIHtyZXN1bHQ6IGh0bWx9KVxuICAgICAgLy9yZXMuc3RhdHVzKDIwMCkuc2VuZChyZW5kZXJUb1N0cmluZyg8Um91dGVyQ29udGV4dCB7Li4ucmVuZGVyUHJvcHN9IC8+KSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoJ05vdCBmb3VuZCcpXG4gICAgfVxuICB9KVxufSk7XG5hcHAubGlzdGVuKHBvcnQsIGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJ0V4YW1wbGUgYXBwIGxpc3RlbmluZyBvbiBwb3J0IDMwMDAhJylcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);