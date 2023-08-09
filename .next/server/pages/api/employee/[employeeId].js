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
exports.id = "pages/api/employee/[employeeId]";
exports.ids = ["pages/api/employee/[employeeId]"];
exports.modules = {

/***/ "(api)/./pages/api/employee/[employeeId].js":
/*!********************************************!*\
  !*** ./pages/api/employee/[employeeId].js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ employeeData),\n/* harmony export */   userData: () => (/* binding */ userData)\n/* harmony export */ });\nconst userData = [];\nfunction employeeData(req, res) {\n    const id = req.query.employeeId;\n    const val = req.body.val;\n    switch(req.method){\n        case \"POST\":\n            {\n                //    !userData.id?userData.id=id:''\n                //     userData.haveLunch=val;\n                const x = userData.findIndex((element)=>element.id == id);\n                if (x == -1) {\n                    userData.push({\n                        id,\n                        haveLunch: val\n                    });\n                } else {\n                    userData[x].haveLunch = val;\n                }\n                res.status(200).json(userData);\n            }\n        default:\n            const data = userData.find((element)=>element.id == id);\n            // console.log(data,'employeeDataOfAPi',userData)\n            // console.log(userData.find((element)=>element.id==id),'find')\n            data ? res.status(200).json(data) : res.status(200).json(\"not found\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1wbG95ZWUvW2VtcGxveWVlSWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsV0FBUyxFQUFFLENBQUM7QUFDVixTQUFTQyxhQUFhQyxHQUFHLEVBQUNDLEdBQUc7SUFDeEMsTUFBTUMsS0FBR0YsSUFBSUcsS0FBSyxDQUFDQyxVQUFVO0lBQzdCLE1BQU1DLE1BQUlMLElBQUlNLElBQUksQ0FBQ0QsR0FBRztJQUNsQixPQUFPTCxJQUFJTyxNQUFNO1FBQ2IsS0FBSztZQUFPO2dCQUNaLG9DQUFvQztnQkFDcEMsOEJBQThCO2dCQUMxQixNQUFNQyxJQUFFVixTQUFTVyxTQUFTLENBQUMsQ0FBQ0MsVUFBVUEsUUFBUVIsRUFBRSxJQUFFQTtnQkFDbEQsSUFBR00sS0FBRyxDQUFDLEdBQUU7b0JBQ0xWLFNBQVNhLElBQUksQ0FBQzt3QkFBQ1Q7d0JBQUdVLFdBQVVQO29CQUFHO2dCQUVuQyxPQUFLO29CQUNEUCxRQUFRLENBQUNVLEVBQUUsQ0FBQ0ksU0FBUyxHQUFDUDtnQkFDMUI7Z0JBRUFKLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNoQjtZQUM3QjtRQUNJO1lBRUksTUFBTWlCLE9BQUtqQixTQUFTa0IsSUFBSSxDQUFDLENBQUNOLFVBQVVBLFFBQVFSLEVBQUUsSUFBRUE7WUFDaEQsaURBQWlEO1lBQ2pELCtEQUErRDtZQUMvRGEsT0FBS2QsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0MsUUFBTWQsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztJQUNqRTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL2VtcGxveWVlL1tlbXBsb3llZUlkXS5qcz9kNmYxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1c2VyRGF0YT1bXTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW1wbG95ZWVEYXRhKHJlcSxyZXMpe1xyXG4gICAgY29uc3QgaWQ9cmVxLnF1ZXJ5LmVtcGxveWVlSWQ7XHJcbiAgICBjb25zdCB2YWw9cmVxLmJvZHkudmFsO1xyXG4gICAgICAgIHN3aXRjaChyZXEubWV0aG9kKXtcclxuICAgICAgICAgICAgY2FzZSAnUE9TVCc6e1xyXG4gICAgICAgICAgICAvLyAgICAhdXNlckRhdGEuaWQ/dXNlckRhdGEuaWQ9aWQ6JydcclxuICAgICAgICAgICAgLy8gICAgIHVzZXJEYXRhLmhhdmVMdW5jaD12YWw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4PXVzZXJEYXRhLmZpbmRJbmRleCgoZWxlbWVudCk9PmVsZW1lbnQuaWQ9PWlkKTtcclxuICAgICAgICAgICAgICAgIGlmKHg9PS0xKXtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YS5wdXNoKHtpZCxoYXZlTHVuY2g6dmFsfSkgXHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGFbeF0uaGF2ZUx1bmNoPXZhbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXJEYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhPXVzZXJEYXRhLmZpbmQoKGVsZW1lbnQpPT5lbGVtZW50LmlkPT1pZClcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsJ2VtcGxveWVlRGF0YU9mQVBpJyx1c2VyRGF0YSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhLmZpbmQoKGVsZW1lbnQpPT5lbGVtZW50LmlkPT1pZCksJ2ZpbmQnKVxyXG4gICAgICAgICAgICAgICAgZGF0YT9yZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTpyZXMuc3RhdHVzKDIwMCkuanNvbignbm90IGZvdW5kJykgICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VyRGF0YSIsImVtcGxveWVlRGF0YSIsInJlcSIsInJlcyIsImlkIiwicXVlcnkiLCJlbXBsb3llZUlkIiwidmFsIiwiYm9keSIsIm1ldGhvZCIsIngiLCJmaW5kSW5kZXgiLCJlbGVtZW50IiwicHVzaCIsImhhdmVMdW5jaCIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiZmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/employee/[employeeId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/employee/[employeeId].js"));
module.exports = __webpack_exports__;

})();