(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apiservice.service.ts":
/*!***************************************!*\
  !*** ./src/app/apiservice.service.ts ***!
  \***************************************/
/*! exports provided: ApiserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiserviceService", function() { return ApiserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ApiserviceService {
    constructor(Http) {
        this.Http = Http;
        this.baseUrl = "hello.com";
    }
    get(endpoint) {
        return this.Http.get(endpoint);
    }
    post(endpoint, body) {
        console.log(body);
        return this.Http.post(endpoint, body);
    }
}
ApiserviceService.ɵfac = function ApiserviceService_Factory(t) { return new (t || ApiserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiserviceService, factory: ApiserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-signup/login-signup.component */ "./src/app/login-signup/login-signup.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");






const routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: _login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_2__["LoginSignupComponent"] },
    { path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'gocarshare';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-signup/login-signup.component */ "./src/app/login-signup/login-signup.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apiservice.service */ "./src/app/apiservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_apiservice_service__WEBPACK_IMPORTED_MODULE_6__["ApiserviceService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_4__["LoginSignupComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_4__["LoginSignupComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                ],
                providers: [_apiservice_service__WEBPACK_IMPORTED_MODULE_6__["ApiserviceService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = "body[_ngcontent-%COMP%]{\r\n display:flex;\r\n width: 100%;\r\n height: 100vh;\r\n flex-direction : column;\r\n justify-content: center;\r\n align-items: center;\r\n background: -webkit-linear-gradient(left, #7579ff, #b224ef);\r\n\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    width: 40%;\r\n    border-radius: 5px;\r\n    margin: 0 auto; \r\n    float: none; \r\n    flex: 0 1 24%;\r\n  \r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  }\r\nimg[_ngcontent-%COMP%]{\r\n    border-radius: 5px 5px 0 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 2px 16px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQiwyREFBMkQ7O0FBRTVEO0FBQ0E7SUFDSSx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYyxFQUFFLFVBQVU7SUFDMUIsV0FBVyxFQUFFLFVBQVU7SUFDdkIsYUFBYTs7QUFFakI7QUFDQTtJQUNJLHdDQUF3QztFQUMxQztBQUVGO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEI7O0VBRWhDIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5e1xyXG4gZGlzcGxheTpmbGV4O1xyXG4gd2lkdGg6IDEwMCU7XHJcbiBoZWlnaHQ6IDEwMHZoO1xyXG4gZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjNzU3OWZmLCAjYjIyNGVmKTtcclxuXHJcbn1cclxuLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bzsgLyogQWRkZWQgKi9cclxuICAgIGZsb2F0OiBub25lOyAvKiBBZGRlZCAqL1xyXG4gICAgZmxleDogMCAxIDI0JTtcclxuICBcclxufVxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbn1cclxuICBcclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxuICB9XHJcbiAgIl19 */";
class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 32, vars: 0, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width,\n\t\tinitial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.4.1/css/all.css", "integrity", "sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz", "crossorigin", "anonymous"], [1, "card-group"], [1, "container"], [1, "row"], [1, "col-lg-6", "mb-4"], [1, "card", "mx-auto"], [1, "card", 2, "width", "220%"], ["src", "https://www.shutterstock.com/image-vector/carpool-service-weekend-journey-young-260nw-1351060844.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], ["href", "#", 1, "btn", "btn-primary"], ["src", "https://static.vecteezy.com/system/resources/thumbnails/010/167/831/small/car-rental-booking-reservation-and-sharing-using-service-mobile-application-with-route-or-points-location-in-hand-drawn-cartoon-flat-illustration-vector.jpg", "alt", "Card image cap", 1, "card-img-top"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "WHAT DO YOU WANT TO CHOOSE?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CAR POOL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Go To Car Pool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "CAR RENTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Go To Car Rental");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c0, _c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login-signup/login-signup.component.ts":
/*!********************************************************!*\
  !*** ./src/app/login-signup/login-signup.component.ts ***!
  \********************************************************/
/*! exports provided: LoginSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignupComponent", function() { return LoginSignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");




const _c0 = "*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Nunito', sans-serif;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: -webkit-linear-gradient(left, #7579ff, #b224ef);\r\n    font-family: 'Nunito', sans-serif;\r\n  }\r\n  \r\n  .form.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{\r\n    border:none;\r\n    outline: none;\r\n    background: none;\r\n  }\r\n  \r\n  .cont[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 56.25rem;\r\n    height: 34.375rem;\r\n    background: #fff;\r\n    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\r\n  }\r\n  \r\n  .form[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 40rem;\r\n    height: 100%;\r\n    padding: 3.125rem 1.875rem;\r\n    transition: transform 1.2s ease-in-out;\r\n  }\r\n  \r\n  h2[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    font-size: 1.875rem;\r\n    text-align: center;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 16.573rem;\r\n    margin: 1.563rem auto 0;\r\n    text-align: center;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    color: #505f75;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    margin-top: 5px;\r\n    font-size: 16px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px solid rgba(109, 93, 93, 0.4);\r\n    text-align: center;\r\n    font-family: 'Nunito', sans-serif; \r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 260px;\r\n    height: 36px;\r\n    border-radius: 30px;\r\n    color: #fff;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .submit[_ngcontent-%COMP%]{\r\n    margin-top: 40px;\r\n    margin-bottom: 30px;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    font-family: 'Nunito', sans-serif;\r\n    background: -webkit-linear-gradient(left, #7579ff, #b224ef);\r\n  }\r\n  \r\n  .submit[_ngcontent-%COMP%]:hover{\r\n    background: -webkit-linear-gradient(left, #b224ef, #7579ff);\r\n  }\r\n  \r\n  .forgot-pass[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    color: #0c0101;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .forgot-pass[_ngcontent-%COMP%]:hover{\r\n    color: red;\r\n  }\r\n  \r\n  .social-media[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .social-media[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n  }\r\n  \r\n  .social-media[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    margin: 25px 15px;\r\n  }\r\n  \r\n  .social-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n  \r\n  .sub-cont[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    position: absolute;\r\n    left: 640px;\r\n    top: 0;\r\n    width: 900px;\r\n    height: 100%;\r\n    padding-left: 260px;\r\n    background: #fff;\r\n    transition: transform 1.2s ease-in-out;\r\n  }\r\n  \r\n  .cont.s-signup[_ngcontent-%COMP%]   .sub-cont[_ngcontent-%COMP%]{\r\n    transform:translate3d(-640px, 0, 0);\r\n  }\r\n  \r\n  .img[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 260px;\r\n    height: 100%;\r\n    padding-top: 360px;\r\n  }\r\n  \r\n  .img[_ngcontent-%COMP%]:before{\r\n    content: '';\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 900px;\r\n    height: 100%;\r\n    background-image: url('bg.jpg');\r\n    background-size: cover;\r\n    transition: transform 1.2s ease-in-out;\r\n  }\r\n  \r\n  .img[_ngcontent-%COMP%]:after{\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0.3);\r\n  }\r\n  \r\n  .cont.s-signup[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]:before{\r\n    transform:translate3d(640px, 0, 0);\r\n  }\r\n  \r\n  .img-text[_ngcontent-%COMP%]{\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 50px;\r\n    width: 100%;\r\n    padding: 0 20px;\r\n    text-align: center;\r\n    color: #fff;\r\n    transition: transform 1.2s ease-in-out;\r\n  }\r\n  \r\n  .img-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  .img-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .cont.s-signup[_ngcontent-%COMP%]   .img-text.m-up[_ngcontent-%COMP%]{\r\n    transform:translateX(520px);\r\n  }\r\n  \r\n  .img-text.m-in[_ngcontent-%COMP%]{\r\n    transform:translateX(-520px);\r\n  }\r\n  \r\n  .cont.s-signup[_ngcontent-%COMP%]   .img-text.m-in[_ngcontent-%COMP%]{\r\n    transform:translateX(0);\r\n  }\r\n  \r\n  .sign-in[_ngcontent-%COMP%]{\r\n    padding-top: 65px;\r\n    transition-timing-function:ease-out;\r\n  }\r\n  \r\n  .cont.s-signup[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%]{\r\n    transition-timing-function:ease-in-out;\r\n    transition-duration:1.2s;\r\n    transform:translate3d(640px, 0, 0);\r\n  }\r\n  \r\n  .img-btn[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    position: relative;\r\n    width: 100px;\r\n    height: 36px;\r\n    margin: 0 auto;\r\n    background: transparent;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .img-btn[_ngcontent-%COMP%]:after{\r\n    content: '';\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #fff;\r\n    border-radius: 30px;\r\n  }\r\n  \r\n  .img-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: transform 1.2s;;\r\n  }\r\n  \r\n  .img-btn[_ngcontent-%COMP%]   span.m-in[_ngcontent-%COMP%]{\r\n    transform:translateY(-72px);\r\n  }\r\n  \r\n  .cont.s-signup[_ngcontent-%COMP%]   .img-btn[_ngcontent-%COMP%]   span.m-in[_ngcontent-%COMP%]{\r\n    transform:translateY(0);\r\n  }\r\n  \r\n  .cont.s-signup[_ngcontent-%COMP%]   .img-btn[_ngcontent-%COMP%]   span.m-up[_ngcontent-%COMP%]{\r\n    transform:translateY(72px);\r\n  }\r\n  \r\n  .sign-up[_ngcontent-%COMP%]{\r\n    transform:translate3d(-900px, 0, 0);\r\n  }\r\n  \r\n  .cont.s-signup[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]{\r\n    transform:translate3d(0, 0, 0);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tc2lnbnVwL2xvZ2luLXNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyREFBMkQ7SUFDM0QsaUNBQWlDO0VBQ25DOztFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDRFQUE0RTtFQUM5RTs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLDBCQUEwQjtJQUcxQixzQ0FBc0M7RUFFeEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsK0NBQStDO0lBQy9DLGtCQUFrQjtJQUNsQixpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsMkRBQTJEO0VBQzdEOztFQUVBO0lBQ0UsMkRBQTJEO0VBQzdEOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBR2hCLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUVVLG1DQUFtQztFQUM3Qzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sWUFBWTtJQUNaLFlBQVk7SUFDWiwrQkFBb0M7SUFDcEMsc0JBQXNCO0lBRXRCLHNDQUEwRTtFQUM1RTs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUVVLGtDQUFrQztFQUM1Qzs7RUFFQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBR1gsc0NBQTBFO0VBQzVFOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFFVSwyQkFBMkI7RUFDckM7O0VBRUE7SUFFVSw0QkFBNEI7RUFDdEM7O0VBRUE7SUFFVSx1QkFBdUI7RUFDakM7O0VBR0E7SUFDRSxpQkFBaUI7SUFFVCxtQ0FBbUM7RUFDN0M7O0VBRUE7SUFFVSxzQ0FBc0M7SUFFdEMsd0JBQXdCO0lBRXhCLGtDQUFrQztFQUM1Qzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFFTixhQUFhO0lBRWIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUdaLDBCQUEwQjtFQUU1Qjs7RUFFQTtJQUVVLDJCQUEyQjtFQUNyQzs7RUFFQTtJQUVVLHVCQUF1QjtFQUNqQzs7RUFFQTtJQUVVLDBCQUEwQjtFQUNwQzs7RUFFQTtJQUVVLG1DQUFtQztFQUM3Qzs7RUFFQTtJQUVVLDhCQUE4QjtFQUN4QyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXNpZ251cC9sb2dpbi1zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiosICo6YmVmb3JlLCAqOmFmdGVye1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzc1NzlmZiwgI2IyMjRlZik7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5mb3JtLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBpbnB1dCwgYnV0dG9ue1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnR7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDU2LjI1cmVtO1xyXG4gICAgaGVpZ2h0OiAzNC4zNzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDByZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzLjEyNXJlbSAxLjg3NXJlbTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGgye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEuODc1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBsYWJlbHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE2LjU3M3JlbTtcclxuICAgIG1hcmdpbjogMS41NjNyZW0gYXV0byAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBsYWJlbCBzcGFue1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzUwNWY3NTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMDksIDkzLCA5MywgMC40KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjsgXHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJtaXR7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzc1NzlmZiwgI2IyMjRlZik7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJtaXQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYjIyNGVmLCAjNzU3OWZmKTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcmdvdC1wYXNze1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzBjMDEwMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcmdvdC1wYXNzOmhvdmVye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLnNvY2lhbC1tZWRpYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNvY2lhbC1tZWRpYSB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zb2NpYWwtbWVkaWEgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDI1cHggMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnNvY2lhbC1tZWRpYSBpbWd7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnN1Yi1jb250e1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDY0MHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250LnMtc2lnbnVwIC5zdWItY29udHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC02NDBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNjQwcHgsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAuaW1ne1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDM2MHB4O1xyXG4gIH1cclxuICBcclxuICAuaW1nOmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2JnLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuaW1nOmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250LnMtc2lnbnVwIC5pbWc6YmVmb3Jle1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoNjQwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNjQwcHgsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAuaW1nLXRleHR7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmltZy10ZXh0IGgye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWctdGV4dCBwe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnQucy1zaWdudXAgLmltZy10ZXh0Lm0tdXB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDUyMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoNTIwcHgpO1xyXG4gIH1cclxuICBcclxuICAuaW1nLXRleHQubS1pbntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUyMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUyMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnQucy1zaWdudXAgLmltZy10ZXh0Lm0taW57XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnNpZ24taW57XHJcbiAgICBwYWRkaW5nLXRvcDogNjVweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICAuY29udC5zLXNpZ251cCAuc2lnbi1pbntcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjEuMnM7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246MS4yczsgXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg2NDBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUzZCg2NDBweCwgMCwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWctYnRue1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuaW1nLWJ0bjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW1nLWJ0biBzcGFue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6Y2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMS4ycztcclxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDEuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4ycztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjJzLCAtd2Via2l0LXRyYW5zZm9ybSAxLjJzOztcclxuICB9XHJcbiAgXHJcbiAgLmltZy1idG4gc3Bhbi5tLWlue1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNzJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC03MnB4KTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnQucy1zaWdudXAgLmltZy1idG4gc3Bhbi5tLWlue1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250LnMtc2lnbnVwIC5pbWctYnRuIHNwYW4ubS11cHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNzJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDcycHgpO1xyXG4gIH1cclxuICBcclxuICAuc2lnbi11cHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC05MDBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtOTAwcHgsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAuY29udC5zLXNpZ251cCAuc2lnbi11cHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfSJdfQ== */";
class LoginSignupComponent {
    constructor(router, Apiservice) {
        this.router = router;
        this.Apiservice = Apiservice;
    }
    ngOnInit() {
        var _a;
        (_a = document.querySelector('.img-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            var _a;
            (_a = document.querySelector('.cont')) === null || _a === void 0 ? void 0 : _a.classList.toggle('s-signup');
        });
    }
    geturl() {
        return `https://authserver-z742wpzi3q-ue.a.run.app/auth/signUp`;
    }
    onKeyEmail($event) {
        this.email = $event.target.value;
        console.log(this.email);
    }
    onKeyName($event) {
        this.name = $event.target.value;
        console.log(this.name);
    }
    onKeyPassword($event) {
        this.password = $event.target.value;
    }
    submit() {
        console.log(this.name + " " + this.email + " " + this.password);
        var body = {
            "name": this.name,
            "emailId": this.email,
            "password": this.password
        };
        this.Apiservice.post(this.geturl(), body).subscribe(data => {
            console.log(data);
        });
        this.router.navigate(["homepage"]);
    }
    signup() {
        var body = {
            "emailId": this.email,
            "password": this.password,
            "name": this.name,
        };
        this.Apiservice.post(this.geturl(), body).subscribe(data => {
            alert(data);
        });
    }
}
LoginSignupComponent.ɵfac = function LoginSignupComponent_Factory(t) { return new (t || LoginSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"])); };
LoginSignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginSignupComponent, selectors: [["app-login-signup"]], decls: 69, vars: 0, consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "apple-touch-icon", "sizes", "180x180", "href", "/images/apple-touch-icon.png"], ["rel", "icon", "type", "image/png", "sizes", "32x32", "href", "/images/favicon-32x32.png"], ["rel", "icon", "type", "image/png", "sizes", "16x16", "href", "/images/favicon-16x16.png"], ["rel", "manifest", "href", "/images/site.webmanifest"], ["href", "https://fonts.googleapis.com/css?family=Nunito:400,600,700,800&display=swap", "rel", "stylesheet"], [1, "cont"], ["type", "text", "name", "", "id", ""], [1, "form", "sign-in"], ["type", "email", "id", "email-id"], ["type", "password", "id", "password-id"], ["type", "submit", 1, "submit", 3, "click"], [1, "forgot-pass"], [1, "social-media"], [1, "sub-cont"], [1, "img"], [1, "img-text", "m-up"], [1, "img-text", "m-in"], [1, "img-btn"], [1, "m-up"], [1, "m-in"], ["id", "sign-up-form", 1, "form", "sign-up"], ["type", "text", 3, "keyup"], ["type", "email", 3, "keyup"], ["type", "password", 3, "keyup"], ["type", "password"], ["type", "button", 1, "submit", 3, "click"]], template: function LoginSignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GoCarShare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_Template_button_click_26_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Forgot Password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "New here?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "One of us?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "If you already has an account, just sign in. We've missed you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LoginSignupComponent_Template_input_keyup_54_listener($event) { return ctx.onKeyName($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LoginSignupComponent_Template_input_keyup_58_listener($event) { return ctx.onKeyEmail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LoginSignupComponent_Template_input_keyup_62_listener($event) { return ctx.onKeyPassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_Template_button_click_67_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Sign Up Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c0, _c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginSignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-signup',
                templateUrl: './login-signup.component.html',
                styleUrls: ['./login-signup.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\saisree\Desktop\gocarshare\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map