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
exports.id = "pages/api/menu";
exports.ids = ["pages/api/menu"];
exports.modules = {

/***/ "(api)/./pages/api/menu.js":
/*!***************************!*\
  !*** ./pages/api/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// import {menuData} from \"../menuData\";\nconst menuData = [];\nfunction handler(req, res) {\n    switch(req.method){\n        case \"POST\":\n            menuData.length = 0;\n            const { menu } = req.body;\n            menu.forEach((element)=>menuData.push(element));\n            res.status(200).json(menu);\n            break;\n        default:\n            res.status(200).json(menuData);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsd0NBQXdDO0FBQ3hDLE1BQU1BLFdBQVMsRUFBRTtBQUNGLFNBQVNDLFFBQVFDLEdBQUcsRUFBQ0MsR0FBRztJQUVuQyxPQUFRRCxJQUFJRSxNQUFNO1FBQ2QsS0FBSztZQUNESixTQUFTSyxNQUFNLEdBQUM7WUFDaEIsTUFBTSxFQUFDQyxJQUFJLEVBQUMsR0FBQ0osSUFBSUssSUFBSTtZQUNyQkQsS0FBS0UsT0FBTyxDQUFDLENBQUNDLFVBQVVULFNBQVNVLElBQUksQ0FBQ0Q7WUFDdENOLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNOO1lBQ3JCO1FBQ0o7WUFFSUgsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1o7SUFDN0I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9tZW51LmpzPzNmYjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHttZW51RGF0YX0gZnJvbSBcIi4uL21lbnVEYXRhXCI7XHJcbmNvbnN0IG1lbnVEYXRhPVtdO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpe1xyXG4gICAgXHJcbiAgICBzd2l0Y2ggKHJlcS5tZXRob2Qpe1xyXG4gICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICBtZW51RGF0YS5sZW5ndGg9MFxyXG4gICAgICAgICAgICBjb25zdCB7bWVudX09cmVxLmJvZHlcclxuICAgICAgICAgICAgbWVudS5mb3JFYWNoKChlbGVtZW50KT0+bWVudURhdGEucHVzaChlbGVtZW50KSlcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obWVudSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obWVudURhdGEpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsibWVudURhdGEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibGVuZ3RoIiwibWVudSIsImJvZHkiLCJmb3JFYWNoIiwiZWxlbWVudCIsInB1c2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/menu.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/menu.js"));
module.exports = __webpack_exports__;

})();