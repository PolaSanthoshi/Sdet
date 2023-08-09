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
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
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

/***/ "(api)/./pages/api/logout.js":
/*!*****************************!*\
  !*** ./pages/api/logout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    // const cookie_options = {\n    //     httpOnly: true,\n    //     maxAge: -1,\n    //   };\n    //   res.setHeader('Set-Cookie', serialize('isLoggedIn', 'false', cookie_options));\n    //   res.setHeader('Set-Cookie', 'isLoggedIn=true; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');   \n    //   res.setHeader('Set-Cookie', 'id=1003; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');   \n    //   res.setHeader('Set-Cookie', [\n    //     'isLoggedIn=true; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',\n    //     'id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'\n    //   ]);\n    (0,nookies__WEBPACK_IMPORTED_MODULE_1__.destroyCookie)({\n        res\n    }, \"isLoggedIn\", {\n        path: \"/\",\n        maxAge: -1\n    });\n    (0,nookies__WEBPACK_IMPORTED_MODULE_1__.destroyCookie)({\n        res\n    }, \"id\", {\n        path: \"/\",\n        maxAge: -1\n    });\n    (0,nookies__WEBPACK_IMPORTED_MODULE_1__.destroyCookie)({\n        res\n    }, \"role\", {\n        path: \"/\",\n        maxAge: -1\n    });\n    return res.status(200).json(\"You have been Logged Out\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9nb3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDeEIsU0FBU0UsUUFBUUMsR0FBRyxFQUFDQyxHQUFHO0lBQ25DLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFFUCxtRkFBbUY7SUFDbkYsc0dBQXNHO0lBQ3RHLDhGQUE4RjtJQUM5RixrQ0FBa0M7SUFDbEMsd0VBQXdFO0lBQ3hFLDJEQUEyRDtJQUMzRCxRQUFRO0lBRVJILHNEQUFhQSxDQUFDO1FBQUNHO0lBQUcsR0FBRSxjQUFhO1FBQzlCQyxNQUFLO1FBQ0xDLFFBQU8sQ0FBQztJQUNYO0lBQ0FMLHNEQUFhQSxDQUFDO1FBQUNHO0lBQUcsR0FBRSxNQUFLO1FBQ3JCQyxNQUFLO1FBQ0xDLFFBQU8sQ0FBQztJQUNaO0lBQ0FMLHNEQUFhQSxDQUFDO1FBQUNHO0lBQUcsR0FBRSxRQUFPO1FBQ3ZCQyxNQUFLO1FBQ0xDLFFBQU8sQ0FBQztJQUNaO0lBQ0EsT0FBT0YsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztBQUNoQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9sb2dvdXQuanM/MzY0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwiY29va2llXCJcclxuaW1wb3J0IHsgZGVzdHJveUNvb2tpZSB9IGZyb20gXCJub29raWVzXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcclxuICAgIC8vIGNvbnN0IGNvb2tpZV9vcHRpb25zID0ge1xyXG4gICAgLy8gICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgLy8gICAgIG1heEFnZTogLTEsXHJcbiAgICAvLyAgIH07XHJcbiAgICBcclxuICAgIC8vICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIHNlcmlhbGl6ZSgnaXNMb2dnZWRJbicsICdmYWxzZScsIGNvb2tpZV9vcHRpb25zKSk7XHJcbiAgICAvLyAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCAnaXNMb2dnZWRJbj10cnVlOyBwYXRoPS87IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVQnKTsgICBcclxuICAgIC8vICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsICdpZD0xMDAzOyBwYXRoPS87IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVQnKTsgICBcclxuICAgIC8vICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIFtcclxuICAgIC8vICAgICAnaXNMb2dnZWRJbj10cnVlOyBwYXRoPS87IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVQnLFxyXG4gICAgLy8gICAgICdpZD07IHBhdGg9LzsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVCdcclxuICAgIC8vICAgXSk7XHJcbiAgICAgIFxyXG4gICAgZGVzdHJveUNvb2tpZSh7cmVzfSwnaXNMb2dnZWRJbicse1xyXG4gICAgICAgcGF0aDonLycsXHJcbiAgICAgICBtYXhBZ2U6LTFcclxuICAgIH0pXHJcbiAgICBkZXN0cm95Q29va2llKHtyZXN9LCdpZCcse1xyXG4gICAgICAgIHBhdGg6Jy8nLFxyXG4gICAgICAgIG1heEFnZTotMVxyXG4gICAgfSlcclxuICAgIGRlc3Ryb3lDb29raWUoe3Jlc30sJ3JvbGUnLHtcclxuICAgICAgICBwYXRoOicvJyxcclxuICAgICAgICBtYXhBZ2U6LTFcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oJ1lvdSBoYXZlIGJlZW4gTG9nZ2VkIE91dCcpXHJcbn1cclxuIl0sIm5hbWVzIjpbInNlcmlhbGl6ZSIsImRlc3Ryb3lDb29raWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicGF0aCIsIm1heEFnZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/logout.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/logout.js"));
module.exports = __webpack_exports__;

})();