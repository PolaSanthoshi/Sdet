"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    const users = [\n        {\n            id: 1000,\n            role: \"employee\"\n        },\n        {\n            id: 1001,\n            role: \"employee\"\n        },\n        {\n            id: 1002,\n            role: \"employee\"\n        },\n        {\n            id: 1003,\n            role: \"employee\"\n        },\n        {\n            id: 1004,\n            role: \"admin\"\n        },\n        {\n            id: 1005,\n            role: \"admin\"\n        }\n    ];\n    const { id, role } = req.body;\n    const validUser = users.find((each)=>id == each.id && each.role === role);\n    if (validUser) {\n        // const cookie_options={\n        //     httpOnly:true,\n        //     path:'/'\n        // }\n        // const isLoggedInCookie = serialize('isLoggedIn', 'true', cookie_options);\n        // const idCookie = serialize('id', id, cookie_options);\n        // const combinedCookies = [idCookie, isLoggedInCookie].join('; ');\n        // res.setHeader('Set-Cookie', combinedCookies );\n        (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)({\n            res\n        }, \"isLoggedIn\", true, {\n            path: \"/\",\n            httpOnly: true\n        });\n        (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)({\n            res\n        }, \"id\", id, {\n            path: \"/\",\n            httpOnly: true\n        });\n        (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)({\n            res\n        }, \"role\", role, {\n            httpOnly: true,\n            path: \"/\"\n        });\n        res.status(200).json({\n            valid: true,\n            isLoggedIn: true\n        });\n    } else {\n        res.status(200).json({\n            valid: false,\n            isLoggedIn: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUM7QUFDZTtBQUNuQyxTQUFTRyxRQUFRQyxHQUFHLEVBQUNDLEdBQUc7SUFDbkMsTUFBTUMsUUFBTTtRQUFDO1lBQUNDLElBQUc7WUFBS0MsTUFBSztRQUFVO1FBQUU7WUFBQ0QsSUFBRztZQUFLQyxNQUFLO1FBQVU7UUFDckM7WUFBQ0QsSUFBRztZQUFLQyxNQUFLO1FBQVU7UUFBRTtZQUFDRCxJQUFHO1lBQUtDLE1BQUs7UUFBVTtRQUFFO1lBQUNELElBQUc7WUFBS0MsTUFBSztRQUFPO1FBQUU7WUFBQ0QsSUFBRztZQUFLQyxNQUFLO1FBQU87S0FBRTtJQUM1SCxNQUFNLEVBQUNELEVBQUUsRUFBQ0MsSUFBSSxFQUFDLEdBQUNKLElBQUlLLElBQUk7SUFHeEIsTUFBTUMsWUFBVUosTUFBTUssSUFBSSxDQUFDLENBQUNDLE9BQU9MLE1BQUlLLEtBQUtMLEVBQUUsSUFBRUssS0FBS0osSUFBSSxLQUFHQTtJQUM1RCxJQUFHRSxXQUFVO1FBQ1QseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsSUFBSTtRQUNKLDRFQUE0RTtRQUM1RSx3REFBd0Q7UUFDeEQsbUVBQW1FO1FBRW5FLGlEQUFpRDtRQUNqRFIsa0RBQVNBLENBQUM7WUFBQ0c7UUFBRyxHQUFFLGNBQWEsTUFBSztZQUM5QlEsTUFBSztZQUNMQyxVQUFTO1FBQ2I7UUFDQVosa0RBQVNBLENBQUM7WUFBQ0c7UUFBRyxHQUFFLE1BQUtFLElBQUc7WUFDcEJNLE1BQUs7WUFDTEMsVUFBUztRQUNiO1FBQ0FaLGtEQUFTQSxDQUFDO1lBQUNHO1FBQUcsR0FBRSxRQUFPRyxNQUFLO1lBQ3hCTSxVQUFTO1lBQ1RELE1BQUs7UUFDVDtRQUNIUixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLE9BQU07WUFBS0MsWUFBVztRQUFJO0lBRWpELE9BQUs7UUFDRGIsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDQyxPQUFNO1lBQU1DLFlBQVc7UUFBSztJQUN0RDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcImNvb2tpZVwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMsIHNldENvb2tpZSB9ICBmcm9tICdub29raWVzJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpe1xyXG4gICAgY29uc3QgdXNlcnM9W3tpZDoxMDAwLHJvbGU6J2VtcGxveWVlJ30se2lkOjEwMDEscm9sZTonZW1wbG95ZWUnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkOjEwMDIscm9sZTonZW1wbG95ZWUnfSx7aWQ6MTAwMyxyb2xlOidlbXBsb3llZSd9LHtpZDoxMDA0LHJvbGU6J2FkbWluJ30se2lkOjEwMDUscm9sZTonYWRtaW4nfV1cclxuICAgIGNvbnN0IHtpZCxyb2xlfT1yZXEuYm9keTtcclxuICAgXHJcbiAgXHJcbiAgICBjb25zdCB2YWxpZFVzZXI9dXNlcnMuZmluZCgoZWFjaCk9PmlkPT1lYWNoLmlkJiZlYWNoLnJvbGU9PT1yb2xlKVxyXG4gICAgaWYodmFsaWRVc2VyKXtcclxuICAgICAgICAvLyBjb25zdCBjb29raWVfb3B0aW9ucz17XHJcbiAgICAgICAgLy8gICAgIGh0dHBPbmx5OnRydWUsXHJcbiAgICAgICAgLy8gICAgIHBhdGg6Jy8nXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnN0IGlzTG9nZ2VkSW5Db29raWUgPSBzZXJpYWxpemUoJ2lzTG9nZ2VkSW4nLCAndHJ1ZScsIGNvb2tpZV9vcHRpb25zKTtcclxuICAgICAgICAvLyBjb25zdCBpZENvb2tpZSA9IHNlcmlhbGl6ZSgnaWQnLCBpZCwgY29va2llX29wdGlvbnMpO1xyXG4gICAgICAgIC8vIGNvbnN0IGNvbWJpbmVkQ29va2llcyA9IFtpZENvb2tpZSwgaXNMb2dnZWRJbkNvb2tpZV0uam9pbignOyAnKTtcclxuICAgIFxyXG4gICAgICAgIC8vIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb21iaW5lZENvb2tpZXMgKTtcclxuICAgICAgICBzZXRDb29raWUoe3Jlc30sJ2lzTG9nZ2VkSW4nLHRydWUse1xyXG4gICAgICAgICAgICBwYXRoOicvJyxcclxuICAgICAgICAgICAgaHR0cE9ubHk6dHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0Q29va2llKHtyZXN9LCdpZCcsaWQse1xyXG4gICAgICAgICAgICBwYXRoOicvJyxcclxuICAgICAgICAgICAgaHR0cE9ubHk6dHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0Q29va2llKHtyZXN9LCdyb2xlJyxyb2xlLHtcclxuICAgICAgICAgICAgaHR0cE9ubHk6dHJ1ZSxcclxuICAgICAgICAgICAgcGF0aDonLydcclxuICAgICAgICB9KVxyXG4gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt2YWxpZDp0cnVlLGlzTG9nZ2VkSW46dHJ1ZX0pXHJcbiAgICAgIFxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3ZhbGlkOmZhbHNlLGlzTG9nZ2VkSW46ZmFsc2V9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiBcclxuXHJcblxyXG4gICJdLCJuYW1lcyI6WyJzZXJpYWxpemUiLCJwYXJzZUNvb2tpZXMiLCJzZXRDb29raWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlcnMiLCJpZCIsInJvbGUiLCJib2R5IiwidmFsaWRVc2VyIiwiZmluZCIsImVhY2giLCJwYXRoIiwiaHR0cE9ubHkiLCJzdGF0dXMiLCJqc29uIiwidmFsaWQiLCJpc0xvZ2dlZEluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();