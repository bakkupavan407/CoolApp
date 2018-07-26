(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-panel {\r\n    margin-right: -2px;\r\n}\r\n\r\n.navbar {\r\n    background: #fff !important;\r\n}"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper \">\r\n  <div class=\"sidebar\" data-color=\"purple\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\r\n    <!--\r\n            Tip 1: You can change the color of the sidebar using: data-color=\"purple | azure | green | orange | danger\"\r\n    \r\n            Tip 2: you can also add an image using data-image tag\r\n        -->\r\n    <div class=\"logo\">\r\n      <a href=\"http://www.gampagoverdhan.com\" class=\"simple-text logo-normal\">\r\n        Gampa Goverdhansss\r\n      </a>\r\n    </div>\r\n    <div class=\"sidebar-wrapper\">\r\n      <ul class=\"nav\">\r\n        <li class=\"nav-item active  \">\r\n          <a class=\"nav-link\" href=\"/dashboard\">\r\n            <i class=\"material-icons\">dashboard</i>\r\n            <p>Dashboard</p>\r\n          </a>\r\n        </li>\r\n        <!-- <li class=\"nav-item \">\r\n          <a class=\"nav-link\" href=\"./user.html\">\r\n            <i class=\"material-icons\">person</i>\r\n            <p>User Profile</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" href=\"./tables.html\">\r\n            <i class=\"material-icons\">content_paste</i>\r\n            <p>Table List</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" href=\"./typography.html\">\r\n            <i class=\"material-icons\">library_books</i>\r\n            <p>Typography</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" href=\"./icons.html\">\r\n            <i class=\"material-icons\">bubble_chart</i>\r\n            <p>Icons</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" href=\"./map.html\">\r\n            <i class=\"material-icons\">location_ons</i>\r\n            <p>Maps</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" href=\"./notifications.html\">\r\n            <i class=\"material-icons\">notifications</i>\r\n            <p>Notifications</p>\r\n          </a>\r\n        </li> -->\r\n        <!-- <li class=\"nav-item active-pro \">\r\n                    <a class=\"nav-link\" href=\"./upgrade.html\">\r\n                        <i class=\"material-icons\">unarchive</i>\r\n                        <p>Upgrade to PRO</p>\r\n                    </a>\r\n                </li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"main-panel\">\r\n    <!-- Navbar -->\r\n    <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-wrapper\">\r\n          <a class=\"navbar-brand\" href=\"#pablo\">Dashboard</a>\r\n        </div>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\r\n          aria-label=\"Toggle navigation\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n          <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n          <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse justify-content-end\">\r\n          <!-- <form class=\"navbar-form\">\r\n            <div class=\"input-group no-border\">\r\n              <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n              <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                <i class=\"material-icons\">search</i>\r\n                <div class=\"ripple-container\"></div>\r\n              </button>\r\n            </div>\r\n          </form> -->\r\n          <ul class=\"navbar-nav\">\r\n            <!-- <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#pablo\">\r\n                <i class=\"material-icons\">dashboard</i>\r\n                <p class=\"d-lg-none d-md-block\">\r\n                  Stats\r\n                </p>\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n              <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons\">notifications</i>\r\n                <span class=\"notification\">5</span>\r\n                <p class=\"d-lg-none d-md-block\">\r\n                  Some Actions\r\n                </p>\r\n              </a>\r\n              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n              </div>\r\n            </li> -->\r\n            <li class=\"nav-item\">\r\n              <i class=\"material-icons\">person</i>\r\n              <span (click)=\"logout($event)\">Logout</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    <!-- End Navbar -->\r\n    <div class=\"content\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n            <div class=\"card card-stats\">\r\n              <div class=\"card-header card-header-success card-header-icon\">\r\n                <div class=\"card-icon\">\r\n                  <i class=\"material-icons\">store</i>\r\n                </div>\r\n                <p class=\"card-category\">Total Complaints</p>\r\n                <h3 class=\"card-title\">{{totalComplaints}}</h3>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <div class=\"stats\" (click)=\"viewComplaints('all')\">\r\n                  <i class=\"material-icons\">date_range</i> Click to view All\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n            <div class=\"card card-stats\">\r\n              <div class=\"card-header card-header-danger card-header-icon\">\r\n                <div class=\"card-icon\">\r\n                  <i class=\"material-icons\">info_outline</i>\r\n                </div>\r\n                <p class=\"card-category\">Inprogress</p>\r\n                <h3 class=\"card-title\">{{inProgressComplaints}}</h3>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <div class=\"stats\" (click)=\"viewComplaints('InPending')\">\r\n                  <i class=\"material-icons\">local_offer</i> Click to view In Progress\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n            <div class=\"card card-stats\">\r\n              <div class=\"card-header card-header-info card-header-icon\">\r\n                <div class=\"card-icon\">\r\n                  <i class=\"material-icons\">thumb_up</i>\r\n                </div>\r\n                <p class=\"card-category\">Completed</p>\r\n                <h3 class=\"card-title\">{{completedComplaints}}</h3>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <div class=\"stats\" (click)=\"viewComplaints('completed')\">\r\n                  <i class=\"material-icons\">update</i> Click to view completed\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header card-header-primary\">\r\n                <h4 class=\"card-title \">All Complaints</h4>\r\n                <p class=\"card-category\"> Clicking on each section will display below</p>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead class=\" text-primary\">\r\n                      <tr>\r\n                        <th>\r\n                          ID\r\n                        </th>\r\n                        <th>\r\n                          Name\r\n                        </th>\r\n                        <th>\r\n                          Mobile\r\n                        </th>\r\n                        <th>\r\n                          Req Subject\r\n                        </th>\r\n                        <th>\r\n                          Message\r\n                        </th>\r\n                        <th>\r\n                          Action\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let complaint of complaintsData;  let i = index\" [attr.data-index]=\"i\">\r\n                        <td>\r\n                          {{i + 1}}\r\n                        </td>\r\n                        <td>\r\n                          {{complaint.name}}\r\n                        </td>\r\n                        <td>\r\n                          {{complaint.mobile}}\r\n                        </td>\r\n                        <td>\r\n                          {{complaint.reqsub}}\r\n                        </td>\r\n                        <td>\r\n                          {{complaint.reqmessage}}\r\n                        </td>\r\n                        <td>\r\n                          <button type=\"button\" class=\"btn btn-primary\"\r\n                          [hidden]=\"complaint.reqstatus === 'completed'\" \r\n                          (click)=\"editComplaints(complaint)\">Edit</button>\r\n                          <button type=\"button\" class=\"btn btn-primary\" \r\n                          [hidden]=\"complaint.reqstatus === 'InPending'\"\r\n                          (click)=\"viewComplaint(complaint)\">View</button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <!-- <div *ngIf=\"!complaintsData.length\" class=\"no-data\">No data to display</div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- \r\n        <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"comment\">Admin Comment:</label>\r\n                  <textarea class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\r\n                </div>\r\n                <div>\r\n                  <p class=\"complaints-date\">Updated Date: {{currentDate}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <footer class=\"footer\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"copyright float-right\">\r\n          &copy;\r\n          <script>\r\n            document.write(new Date().getFullYear())\r\n          </script>, made with\r\n          <i class=\"material-icons\">favorite</i> by\r\n          <a href=\"https://www.anehtech.com\" target=\"_blank\">Aneh Technologies</a> for a better web.\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _complaints_complaint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../complaints/complaint.service */ "./src/app/complaints/complaint.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog-body/dialog-body.component */ "./src/app/dialog-body/dialog-body.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(breakpointObserver, complaintService, dialog, router) {
        this.breakpointObserver = breakpointObserver;
        this.complaintService = complaintService;
        this.dialog = dialog;
        this.router = router;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.getComps();
        var isLoggedIn = localStorage.getItem("admin");
        if (!isLoggedIn) {
            this.router.navigate(['/admin']);
        }
    };
    AdminDashboardComponent.prototype.getComps = function () {
        var _this = this;
        this.complaintService.getHeroes()
            .subscribe(function (complaints) {
            console.log("&&&&&&& ", complaints);
            _this.complaintsData = complaints;
            _this.complaints = complaints;
            _this.totalComplaints = complaints.length;
            _this.completedComplaints = lodash__WEBPACK_IMPORTED_MODULE_4__["values"](lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](_this.complaints, { "reqstatus": "completed" })).length;
            _this.inProgressComplaints = lodash__WEBPACK_IMPORTED_MODULE_4__["values"](lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](_this.complaints, { "reqstatus": "InPending" })).length;
        });
    };
    AdminDashboardComponent.prototype.viewComplaints = function (type) {
        if (!this.complaints.length)
            return;
        if (type === "all") {
            this.complaintsData = this.complaints;
        }
        else if (type === "completed") {
            this.complaintsData = lodash__WEBPACK_IMPORTED_MODULE_4__["values"](lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.complaints, { "reqstatus": "completed" }));
        }
        else {
            this.complaintsData = lodash__WEBPACK_IMPORTED_MODULE_4__["values"](lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.complaints, { "reqstatus": "InPending" }));
        }
    };
    AdminDashboardComponent.prototype.editComplaints = function (selectedComplaint) {
        var _this = this;
        console.log("omg", selectedComplaint);
        // this.manageComplaints = data;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = selectedComplaint;
        dialogConfig.width = '600px';
        dialogConfig.height = '500px';
        var dialogRef = this.dialog.open(_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_6__["DialogBodyComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) {
            var ccupdatedata = {
                id: data.ccdata.id,
                name: '',
                email: '',
                mobile: 0,
                reqsub: '',
                reqmessage: '',
                reqstatus: "",
                date: "",
                admincoms: data.admincomments,
                updatedat: ""
            };
            _this.complaintService.updateComplaint(ccupdatedata).subscribe(function (hero) { });
        });
    };
    AdminDashboardComponent.prototype.logout = function (e) {
        e.preventDefault();
        localStorage.removeItem("admin");
        this.router.navigate(['/']);
    };
    AdminDashboardComponent.prototype.viewComplaint = function (selectedComplaint) {
        // console.log("$$$ ", selectedComplaint);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = selectedComplaint;
        dialogConfig.width = '600px';
        dialogConfig.height = '500px';
        var dialogRef = this.dialog.open(_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_6__["DialogBodyComponent"], dialogConfig);
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin-dashboard/admin-dashboard.component.html"),
            providers: [_complaints_complaint_service__WEBPACK_IMPORTED_MODULE_3__["ComplaintService"]],
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _complaints_complaint_service__WEBPACK_IMPORTED_MODULE_3__["ComplaintService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/angmaterial.ts":
/*!********************************!*\
  !*** ./src/app/angmaterial.ts ***!
  \********************************/
/*! exports provided: AngMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngMaterialModule", function() { return AngMaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AngMaterialModule = /** @class */ (function () {
    function AngMaterialModule() {
    }
    AngMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSelectModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSelectModule"]
            ]
        })
    ], AngMaterialModule);
    return AngMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
        this.title = "Blog, Complaints and More....";
    }
    AppComponent.prototype.ngOnInit = function () {
        // this._httpService.get('/api/complaint/getall').subscribe(values => {
        //     // this.apiValues = values.json() as string[];
        //     console.log(values);
        // });
        // this.add();
        // this._httpService.post('', {
        //     name: "Rakesh",
        //     email: "rakesh10@gmail.com",
        //     mobile: 77777777,
        //     reqsub: "No Foot Paths",
        //     reqmessage: "No Foot Paths near bus stop in kukatpally."
        // }).subscribe(values => {
        //     // this.apiValues = values.json() as string[];
        //     console.log(values);
        // });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _complaints_complaint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./complaints/complaint.component */ "./src/app/complaints/complaint.component.ts");
/* harmony import */ var _complaints_complaint_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./complaints/complaint.service */ "./src/app/complaints/complaint.service.ts");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _angmaterial__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./angmaterial */ "./src/app/angmaterial.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _site_nav_site_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./site-nav/site-nav.component */ "./src/app/site-nav/site-nav.component.ts");
/* harmony import */ var _dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog-body/dialog-body.component */ "./src/app/dialog-body/dialog-body.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"] },
    { path: 'complaints', component: _complaints_complaint_component__WEBPACK_IMPORTED_MODULE_8__["ComplaintComponent"] },
    { path: 'dashboard', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["AdminDashboardComponent"] },
    { path: 'admin', component: _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _complaints_complaint_component__WEBPACK_IMPORTED_MODULE_8__["ComplaintComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"],
                _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["AdminDashboardComponent"],
                _site_nav_site_nav_component__WEBPACK_IMPORTED_MODULE_17__["SiteNavComponent"],
                _dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_18__["DialogBodyComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angmaterial__WEBPACK_IMPORTED_MODULE_14__["AngMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [
                _complaints_complaint_service__WEBPACK_IMPORTED_MODULE_9__["ComplaintService"],
                _http_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["HttpErrorHandler"],
                _message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_18__["DialogBodyComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/complaints/complaint.component.css":
/*!****************************************************!*\
  !*** ./src/app/complaints/complaint.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#complaintForm input {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/complaints/complaint.component.html":
/*!*****************************************************!*\
  !*** ./src/app/complaints/complaint.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"/\">Home\r\n                    <span class=\"sr-only\">(current)</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"/complaints\">Complaints</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                    aria-expanded=\"false\">\r\n                    Dropdown\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n            </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n    </div>\r\n</nav>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-6 col-sm-6\">\r\n            <div class=\"row\" id=\"complaintForm\">\r\n                <!-- style=\"border: 5px solid green; padding: 10px;\" -->\r\n                <div class=\"col-lg-8 offset-lg-2\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-md-6 col-sm-6\">\r\n                            <h3>Raise a Request</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-md-6 col-sm-6\" *ngIf=\"isReqSaved\">\r\n                            <div class=\"alert alert-success\" role=\"alert\">\r\n                                Your complaint has been saved and will get back to you shortly.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12 col-md-6 col-sm-6\" *ngIf=\"isReqFailed\">\r\n                            <div class=\"alert alert-danger\" role=\"alert\">\r\n                                Servers not responding, try again later.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <mat-dialog-content>\r\n                        <form name=\"form\" class=\"example-form\" [formGroup]=\"form\" novalidate (ngSubmit)=\"saveComplaint()\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                        <input matInput placeholder=\"Name\" formControlName=\"username\" name=\"username\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                        <input matInput placeholder=\"Mobile\" formControlName=\"usermobile\" name=\"usermobile\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                        <input matInput placeholder=\"Email\" formControlName=\"useremail\" name=\"useremail\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12 col-md-6 col-sm-6\">\r\n                                    <mat-form-field class=\"example-full-width\" style=\"display: block\">\r\n                                        <input matInput placeholder=\"Request Title\" item-height=\"100px\" formControlName=\"reqtitle\" name=\"reqtitle\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12 col-md-6 col-sm-6\">\r\n                                    <mat-form-field class=\"example-full-width\" style=\"display: block\">\r\n                                        <textarea matInput placeholder=\"Complaint Message\" item-height=\"100px\" formControlName=\"reqmessage\" name=\"reqmessage\"></textarea>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                                    <button type=\"submit\" mat-raised-button color=\"accent\" [disabled]=\"!form.valid\">Post Complaint</button>\r\n                                </div>\r\n                                <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n                                    <button mat-raised-button color=\"warn\" (click)=\"complaintFormCancel($event)\">Cancel</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </mat-dialog-content>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/complaints/complaint.component.ts":
/*!***************************************************!*\
  !*** ./src/app/complaints/complaint.component.ts ***!
  \***************************************************/
/*! exports provided: ComplaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintComponent", function() { return ComplaintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _complaint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaint.service */ "./src/app/complaints/complaint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComplaintComponent = /** @class */ (function () {
    function ComplaintComponent(_httpService, complaintservice) {
        this._httpService = _httpService;
        this.complaintservice = complaintservice;
        this.isReqSaved = false;
        this.isReqFailed = false;
        this.apiValues = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            usermobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            useremail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            reqtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            reqmessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ComplaintComponent.prototype.ngOnInit = function () {
        var comp = {
            id: 1,
            name: '',
            email: '',
            mobile: 0,
            reqsub: '',
            reqmessage: '',
            reqstatus: "",
            date: "",
            admincoms: null,
            updatedat: ""
        };
        this.getComplaintById(comp);
        this.getAllComplaints();
        //this.saveComplaint();
    };
    ComplaintComponent.prototype.saveComplaint = function () {
        var _this = this;
        console.log("$$$$", this.form.value);
        var name = this.form.value.username;
        var email = this.form.value.useremail;
        var mobile = this.form.value.usermobile;
        var reqsub = this.form.value.reqtitle;
        var reqmessage = this.form.value.reqmessage;
        var comp = {
            id: 0,
            name: name,
            email: email,
            mobile: mobile,
            reqsub: reqsub,
            reqmessage: reqmessage,
            reqstatus: "",
            date: "",
            admincoms: null,
            updatedat: ""
        };
        console.log("heelo there ", comp);
        this.complaintservice.addComplaint(comp)
            .subscribe(function (result) {
            console.log(result);
            if (result === 1) {
                _this.isReqSaved = true;
            }
            else {
                _this.isReqFailed = false;
            }
        });
    };
    ComplaintComponent.prototype.getAllComplaints = function () {
        this.complaintservice.getAllComplaints()
            .subscribe(function (complaints) {
            console.log("all requests " + complaints);
        });
    };
    ComplaintComponent.prototype.getComplaintById = function (complaint) {
        this.complaintservice.getComplaintById(complaint)
            .subscribe(function (complaint) {
            console.log("complaint by id: " + complaint);
        });
    };
    ComplaintComponent.prototype.complaintFormCancel = function (e) {
        if (e)
            e.preventDefault();
        this.form.reset();
    };
    ComplaintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            providers: [_complaint_service__WEBPACK_IMPORTED_MODULE_3__["ComplaintService"]],
            template: __webpack_require__(/*! ./complaint.component.html */ "./src/app/complaints/complaint.component.html"),
            styles: [__webpack_require__(/*! ./complaint.component.css */ "./src/app/complaints/complaint.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _complaint_service__WEBPACK_IMPORTED_MODULE_3__["ComplaintService"]])
    ], ComplaintComponent);
    return ComplaintComponent;
}());



/***/ }),

/***/ "./src/app/complaints/complaint.service.ts":
/*!*************************************************!*\
  !*** ./src/app/complaints/complaint.service.ts ***!
  \*************************************************/
/*! exports provided: ComplaintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintService", function() { return ComplaintService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var ComplaintService = /** @class */ (function () {
    function ComplaintService(http, httpErrorHandler) {
        this.http = http;
        this.handleError = httpErrorHandler.createHandleError('HeroesService');
    }
    ComplaintService.prototype.addComplaint = function (complaint) {
        console.log("service --> ", complaint);
        return this.http.post('api/complaint/Post01', complaint, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addComplaint', complaint)));
    };
    ComplaintService.prototype.getAllComplaints = function () {
        return this.http.get('api/complaint/GetAllComplaints', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log("$$$$$ ", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getAllComplaints', '')));
    };
    ComplaintService.prototype.getHeroes = function () {
        return this.http.get('api/complaint/GetAllComplaints', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getHeroes', [])));
    };
    ComplaintService.prototype.getComplaintById = function (complaint) {
        return this.http.post('api/complaint/GetComplaintById', complaint, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log("$$$$$ ", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getComplaintById', '')));
    };
    ComplaintService.prototype.updateComplaint = function (complaint) {
        return this.http.post('api/complaint/UpdateComplaint', complaint, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log("$$$$$ ", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateComplaint', '')));
    };
    ComplaintService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorHandler"]])
    ], ComplaintService);
    return ComplaintService;
}());



/***/ }),

/***/ "./src/app/dialog-body/dialog-body.component.html":
/*!********************************************************!*\
  !*** ./src/app/dialog-body/dialog-body.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-6 col-sm-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h2 matDialogTitle>\r\n                    Title: {{data.reqsub}}</h2>\r\n            </div>\r\n            <div class=\"col-lg-12\">\r\n                <mat-dialog-content>\r\n                    <form name=\"form\" class=\"example-form\" [formGroup]=\"form\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Name\" value=\"{{data.name}}\" disabled>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Mobile\" value=\"{{data.mobile}}\" disabled>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Email\" value=\"{{data.email}}\" disabled>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-md-6 col-sm-6\">\r\n                                <mat-form-field class=\"example-full-width\" style=\"display: block\">\r\n                                    <textarea matInput placeholder=\"Complaint Message\" value=\"{{data.reqmessage}}\" item-height=\"100px\" disabled></textarea>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-md-6 col-sm-6\">\r\n                                <mat-form-field class=\"example-full-width\" style=\"display: block\">\r\n                                    <textarea matInput placeholder=\"Admin Comments\" value=\"{{data.admincoms}}\" item-height=\"100px\" [disabled]=\"data.reqstatus === 'completed'\"\r\n                                    formControlName=\"admincomments\" name=\"admincomments\"></textarea>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </mat-dialog-content>\r\n            </div>\r\n            <div class=\"col-lg-12\">\r\n                <mat-dialog-actions>\r\n                    <!-- <button type=\"button\" class=\"btn btn-primary\" [hidden]=\"data.reqstatus === 'completed' ? 'none' : ''\" (click)=\"updateComplaint(data)\">Update</button> -->\r\n                    <!-- <button mat-raised-button color=\"warn\" matDialogClose>Close</button> -->\r\n                    <!-- <button type=\"button\" mat-raised-button color=\"warn\" matDialogClose>Close</button> -->\r\n                    <button mat-button color=\"accent\" type=\"button\" class=\"btn btn-primary\"\r\n                        [hidden]=\"data.reqstatus === 'completed' ? 'none' : ''\" (click)=\"updateComplaint(data)\">Update</button>\r\n                    <button mat-button color=\"warn\" matDialogClose (click)=\"close()\">Close</button>\r\n                </mat-dialog-actions>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dialog-body/dialog-body.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dialog-body/dialog-body.component.ts ***!
  \******************************************************/
/*! exports provided: DialogBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBodyComponent", function() { return DialogBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DialogBodyComponent = /** @class */ (function () {
    function DialogBodyComponent(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(this.data);
        if (this.data.reqstatus === "InPending") {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                admincomments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: false })
            });
        }
        else {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                admincomments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true })
            });
        }
    }
    DialogBodyComponent.prototype.updateComplaint = function () {
        this.form.value.ccdata = this.data;
        this.dialogRef.close(this.form.value);
    };
    DialogBodyComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DialogBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-body-component',
            template: __webpack_require__(/*! ./dialog-body.component.html */ "./src/app/dialog-body/dialog-body.component.html")
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogBodyComponent);
    return DialogBodyComponent;
}());



/***/ }),

/***/ "./src/app/http-error-handler.service.ts":
/*!***********************************************!*\
  !*** ./src/app/http-error-handler.service.ts ***!
  \***********************************************/
/*! exports provided: HttpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler() {
        var _this = this;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            //   this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);
            // Let the app keep running by returning a safe result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    HttpErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"/\">Home\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"/complaints\">Complaints</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">\r\n          Dropdown\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n<h1>\r\n    This is landing page\r\n</h1>\r\n\r\n<!-- <h1>Application says what is??</h1>\r\n<ul>\r\n  <li *ngFor=\"let value of apiValues\">{{value}}</li>\r\n</ul>\r\n -->\r\n <h1>{{title}}</h1>\r\n <!-- <ul>\r\n   <li>\r\n     <a href=\"/\">Home</a>\r\n   </li>\r\n   <li>\r\n    <a href=\"/complaints\">Complaints</a>\r\n  </li>\r\n </ul> -->\r\n <div>\r\n    <form>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Favorite food\">\r\n        </mat-form-field>\r\n      \r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Leave a comment\"></textarea>\r\n        </mat-form-field>\r\n      </form>\r\n <button mat-raised-button color=\"warn\">Warn</button>\r\n  <br />\r\n    <div class=\"mat-app-background\">\r\n      <mat-slider></mat-slider>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    width: 500px;\r\n    height: 400px;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    padding: 55px 55px 37px 55px;\r\n    /* background: #9152f8; */\r\n    /* background: -webkit-linear-gradient(top, #7579ff, #e9dfec); */\r\n}\r\n\r\n.mat-card {\r\n    background: transparent;\r\n}\r\n\r\n.mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.align-btns {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loginwrapper\">\r\n    <div class=\"wrapper col-sm-4 offset-sm-4 col-md-4 offset-md-4 col-lg-4 offset-lg-4\">\r\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\" novalidate>\r\n            <mat-card class=\"example-card\">\r\n                <mat-card-header>\r\n                    <h2 class=\"login-header\">Login</h2>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Username\" name=\"username\" ngModel required #username=\"ngModel\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Password\" name=\"password\" type=\"password\" ngModel required #password=\"ngModel\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    <div class=\"button-row align-btns\">\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">Login</button>\r\n                        <button mat-raised-button color=\"warn\" (click)=\"reset(loginForm)\">Cancel</button>\r\n                    </div>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.admin = {};
    }
    LoginComponent.prototype.login = function (f) {
        var formData = f.value;
        var username = formData.username;
        var password = formData.password;
        if (username !== null && password !== null) {
            localStorage.setItem("admin", "admin");
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.reset = function (f) {
        f.reset();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\r\n    <h3>Messages</h3>\r\n    <button class=\"clear\" (click)=\"messageService.clear()\">clear</button>\r\n    <br>\r\n    <ol>\r\n      <li *ngFor='let message of messageService.messages'> {{message}} </li>\r\n    </ol>\r\n  </div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html")
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/site-nav/site-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/site-nav/site-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n"

/***/ }),

/***/ "./src/app/site-nav/site-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/site-nav/site-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"#\">Link 1</a>\n      <a mat-list-item href=\"#\">Link 2</a>\n      <a mat-list-item href=\"#\">Link 3</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>cool-app</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/site-nav/site-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/site-nav/site-nav.component.ts ***!
  \************************************************/
/*! exports provided: SiteNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteNavComponent", function() { return SiteNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteNavComponent = /** @class */ (function () {
    function SiteNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    SiteNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-nav',
            template: __webpack_require__(/*! ./site-nav.component.html */ "./src/app/site-nav/site-nav.component.html"),
            styles: [__webpack_require__(/*! ./site-nav.component.css */ "./src/app/site-nav/site-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], SiteNavComponent);
    return SiteNavComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\BaksApps\CoolApp\CoolApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map