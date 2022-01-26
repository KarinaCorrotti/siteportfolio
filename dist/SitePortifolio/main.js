(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/TwB":
/*!**************************************************************!*\
  !*** ./src/shared/components/projects/projects.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ProjectsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.description);
} }
class ProjectsComponent {
    constructor() {
        this.projectList = [];
        this.projectNumber = 3;
    }
    ngOnInit() {
        console.log(this.projectList);
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], inputs: { projectList: "projectList", projectNumber: "projectNumber" }, decls: 2, vars: 1, consts: [[1, "app-projects"], [4, "ngFor", "ngForOf"], [1, "projectCards-container"], [1, "title-container"], [1, "image-container"], ["target", "_blank", 3, "href"], [3, "src"], [1, "description-container"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_1_Template, 10, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".app-projects[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.app-projects[_ngcontent-%COMP%]   .projectCards-container[_ngcontent-%COMP%] {\n  width: 25vw;\n  background: rgba(255, 255, 255, 0.411);\n  height: 55vh;\n  border-radius: 3%;\n  padding: 1vw;\n  border-color: rgba(0, 0, 0, 0.123);\n  border-style: solid;\n}\n.app-projects[_ngcontent-%COMP%]   .projectCards-container[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.app-projects[_ngcontent-%COMP%]   .projectCards-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  color: #132f7a;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1.5vw;\n  font-weight: bold;\n  height: 10%;\n}\n.app-projects[_ngcontent-%COMP%]   .projectCards-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 2%;\n  cursor: pointer;\n  transition: opacity 1s;\n}\n.app-projects[_ngcontent-%COMP%]   .projectCards-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n  transition: opacity 1s;\n}\n.app-projects[_ngcontent-%COMP%]   .projectCards-container[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%] {\n  font-family: \"Karla\", sans-serif;\n  font-size: 1vw;\n  height: 30%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDSCxtQkFBQTtBQUNEO0FBQUk7RUFDSSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDSCxtQkFBQTtBQUdUO0FBRFE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFHWjtBQUZZO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FBSWhCO0FBRFE7RUFDSSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0gsbUJBQUE7QUFHVCIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtcHJvamVjdHN7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5wcm9qZWN0Q2FyZHMtY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTEpO1xyXG4gICAgICAgIGhlaWdodDogNTV2aDsgICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMyU7XHJcbiAgICAgICAgcGFkZGluZzogMXZ3O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyMyk7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAucHJvamVjdC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUtY29udGFpbmVye1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE5LCA0NywgMTIyKTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiS2FybGFcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkthcmxhXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projetos\siteportfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "HOoN":
/*!**************************************************************!*\
  !*** ./src/shared/components/computer/computer.component.ts ***!
  \**************************************************************/
/*! exports provided: ComputerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputerComponent", function() { return ComputerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ComputerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComputerComponent.ɵfac = function ComputerComponent_Factory(t) { return new (t || ComputerComponent)(); };
ComputerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComputerComponent, selectors: [["app-computer"]], decls: 1, vars: 0, consts: [[1, "masterContainer"]], template: function ComputerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wdXRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "KZX/":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _components_computer_computer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/computer/computer.component */ "HOoN");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/projects/projects.component */ "/TwB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_computer_computer_component__WEBPACK_IMPORTED_MODULE_1__["ComputerComponent"],
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]], exports: [_components_computer_computer_component__WEBPACK_IMPORTED_MODULE_1__["ComputerComponent"],
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]] }); })();


/***/ }),

/***/ "Mmsy":
/*!******************************************************!*\
  !*** ./src/app/pages/mainpage/mainpage.component.ts ***!
  \******************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/projects/projects.component */ "/TwB");



class MainpageComponent {
    constructor(router) {
        this.router = router;
        this.number = 2;
        this.projectList = __webpack_require__(/*! ../../listProjects.json */ "orXk");
    }
    ngOnInit() {
        window.onscroll = () => { this.scrollFunction(); };
    }
    anchor(id) {
        this.router.navigate(['/'], { fragment: id });
    }
    scrollFunction() {
        // const screenHeight = document.documentElement.scrollHeight;
        // const contact = document.getElementById("contact").offsetTop;
        // const portfolio = document.getElementById("portfolio").offsetTop;
        const element = document.getElementById("about");
        const elementPositions = element.getBoundingClientRect();
        const aboutBottom = elementPositions.height + elementPositions.top - 350;
        if (document.documentElement.scrollTop > aboutBottom && document.documentElement.scrollTop < 1000) {
            document.getElementById("skillsContainer").className = "skillAnimation";
        }
        else {
            document.getElementById("skillsContainer").className = " ";
        }
    }
    increaseValue(value) {
        this.number = this.number + value.number;
    }
    submitForm() {
        if (this.name === undefined || this.email === undefined || this.text === undefined) {
            this.message = 'Prencha todos os dados';
            setTimeout(() => {
                this.cleanForm();
            }, 3000);
        }
    }
    cleanForm() {
        this.message = '';
    }
}
MainpageComponent.ɵfac = function MainpageComponent_Factory(t) { return new (t || MainpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MainpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainpageComponent, selectors: [["app-mainpage"]], decls: 76, vars: 1, consts: [["id", "home"], [1, "colorBack"], [1, "menuContainer"], ["href", "#about"], ["href", "#portfolio"], ["href", "#contact"], [1, "name"], [1, "nav-screen"], ["href", "#home", 1, "button"], [1, "ho"], [1, "ball"], ["href", "#about", 1, "button"], [1, "ab"], ["href", "#portfolio", 1, "button"], [1, "port"], ["href", "#contact", 1, "button"], [1, "cont"], ["id", "about"], [1, "aboutContainer"], [1, "informationContainer"], [1, "title"], [1, "traits"], [1, "informationAbout"], [1, "photoContainer"], ["id", "skillsContainer"], [1, "skillBall", "big", "b1"], [1, "skillBall", "big", "b2"], [1, "skillBall", "big", "b3"], [1, "skillBall", "big", "b4"], [1, "skillBall", "big", "b5"], [1, "skillBall", "meddium", "m1"], [1, "skillBall", "meddium", "m2"], [1, "skillBall", "meddium", "m3"], [1, "skillBall", "small", "s1"], [1, "skillBall", "small", "s2"], [1, "skillBall", "small", "s3"], [1, "photo"], ["id", "portfolio"], [3, "projectList"], ["id", "contact"], [1, "contactContainer"], [1, "socialMedia"], [1, "textSimple"], [1, "linksConection"], ["target", "_blank", "href", "https://www.linkedin.com/in/dev-karinacorrotti"], [1, "linkContainer", "likedin"], ["target", "_blank", "href", "https://github.com/KarinaCorrotti"], [1, "linkContainer", "gitHub"], [1, "textSimple", "min"]], template: function MainpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sobre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Portif\u00F3lio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Karina Corrotti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Desenvolvedora Front-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sobre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Portif\u00F3lio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ol\u00E1, eu sou Karina Corrotti...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sou desenhista e desenvolvedora Web. Possuo conhecimento em: JavaScript, HTML, SCSS, Angular e NodeJS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-projects", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Conecte-se Comigo...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "karina.corrotti@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectList", ctx.projectList);
    } }, directives: [_shared_components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]], styles: ["#home[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff9f1;\n  display: flex;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%] {\n  background: url('imgbackground.jpg') no-repeat center center fixed;\n  background-size: cover;\n  width: 100%;\n  height: calc(100vh - 65px);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .menuContainer[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 50vw;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center;\n  align-content: stretch;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .menuContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1.3vw;\n  color: white;\n  text-decoration: none;\n  font-family: \"Recursive\", sans-serif;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .menuContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .menuContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #fccfcf;\n  text-decoration: none;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-bottom: 30vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5vw;\n  color: burlywood;\n  font-family: \"Karla\", sans-serif;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 2vw;\n  color: burlywood;\n  font-family: \"Recursive\", sans-serif;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .nav-screen[_ngcontent-%COMP%] {\n  width: 15px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  position: fixed;\n  right: 13px;\n  top: 50%;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .nav-screen[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 10px 0;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .nav-screen[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .ball[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  background-color: #a8a8a8;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .nav-screen[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a8a8a8;\n  font-size: 10px;\n  font-family: \"Recursive\", sans-serif;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 1s;\n  position: absolute;\n  margin-right: 53px;\n  width: 0%;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .nav-screen[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a.port[_ngcontent-%COMP%] {\n  margin-right: 90px;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .nav-screen[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a.cont[_ngcontent-%COMP%] {\n  margin-right: 72px;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .nav-screen[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .nav-screen[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover   .ball[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #fccfcf;\n}\n#home[_ngcontent-%COMP%]   .colorBack[_ngcontent-%COMP%]   .nav-screen[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  width: 20px;\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 1s;\n  position: absolute;\n}\n#about[_ngcontent-%COMP%] {\n  background-color: #fff9f1;\n  width: 100%;\n  height: calc(100vh - 65px);\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .informationContainer[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .informationContainer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 68%;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .informationContainer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3vw;\n  margin: 0;\n  color: #272727;\n  font-family: \"Karla\", sans-serif;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .informationContainer[_ngcontent-%COMP%]   .traits[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .informationContainer[_ngcontent-%COMP%]   .traits[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 3vw;\n  color: #a8a8a8;\n  font-weight: 600;\n  font-family: \"Recursive\", sans-serif;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .informationContainer[_ngcontent-%COMP%]   .informationAbout[_ngcontent-%COMP%] {\n  width: 40vw;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .informationContainer[_ngcontent-%COMP%]   .informationAbout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1vw;\n  text-align: center;\n  font-family: \"Recursive\", sans-serif;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  border-radius: 100%;\n  background: url('photo.jpg') no-repeat center center;\n  background-size: cover;\n  position: absolute;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  position: absolute;\n  animation-duration: 1s;\n  animation-iteration-count: 1;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.big[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background-color: lightblue;\n  animation-timing-function: linear;\n  animation-fill-mode: both;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.big.b1[_ngcontent-%COMP%] {\n  animation-name: b1;\n  background: url('css.png') no-repeat center center;\n  background-size: 4vw;\n  background-color: white;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.big.b2[_ngcontent-%COMP%] {\n  animation-name: b2;\n  background: url('html.png') no-repeat center center;\n  background-size: 5vw;\n  background-color: white;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.big.b3[_ngcontent-%COMP%] {\n  animation-name: b3;\n  background: url('js.png') no-repeat center center;\n  background-size: 5vw;\n  background-color: white;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.big.b4[_ngcontent-%COMP%] {\n  animation-name: b4;\n  background: url('sass.png') no-repeat center center;\n  background-size: 5vw;\n  background-color: white;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.big.b5[_ngcontent-%COMP%] {\n  animation-name: b5;\n  background: url('angular.png') no-repeat center center;\n  background-size: 5vw;\n  background-color: white;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.meddium[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background-color: #b3ade6;\n  animation-timing-function: linear;\n  animation-fill-mode: both;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.meddium.m1[_ngcontent-%COMP%] {\n  animation-name: m1;\n  background: url('nodejs.png') no-repeat center center;\n  background-size: 4vw;\n  background-color: white;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.meddium.m2[_ngcontent-%COMP%] {\n  animation-name: m2;\n  background: url('mysql.png') no-repeat center center;\n  background-size: 5vw;\n  background-color: white;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.meddium.m3[_ngcontent-%COMP%] {\n  animation-name: m3;\n  background: url('git.png') no-repeat center center;\n  background-size: 4vw;\n  background-color: white;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.small[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #d0e6ad;\n  animation-name: small;\n  animation-timing-function: linear;\n  animation-fill-mode: both;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.small.s1[_ngcontent-%COMP%] {\n  animation-name: s1;\n  background: url('mongodb.png') no-repeat center center;\n  background-size: 3vw;\n  background-color: white;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.small.s2[_ngcontent-%COMP%] {\n  animation-name: s2;\n  background: url('c++.png') no-repeat center center;\n  background-size: 3vw;\n  background-color: white;\n}\n#about[_ngcontent-%COMP%]   .aboutContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   #skillsContainer.skillAnimation[_ngcontent-%COMP%]   .skillBall.small.s3[_ngcontent-%COMP%] {\n  animation-name: s3;\n  background: url('java.png') no-repeat center center;\n  background-size: 3vw;\n  background-color: white;\n}\n@keyframes b1 {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-164px) translateX(73px);\n  }\n}\n@keyframes b2 {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(194px) translateX(-77px);\n  }\n}\n@keyframes b3 {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(14px) translateX(239px);\n  }\n}\n@keyframes b4 {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-185px) translateX(-110px);\n  }\n}\n@keyframes b5 {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(141px) translateX(177px);\n  }\n}\n@keyframes m1 {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(153px) translateX(19px);\n  }\n}\n@keyframes m2 {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-66px) translateX(155px);\n  }\n}\n@keyframes m3 {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-148px) translateX(-31px);\n  }\n}\n@keyframes s1 {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-86px) translateX(88px);\n  }\n}\n@keyframes s2 {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(68px) translateX(110px);\n  }\n}\n@keyframes s3 {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-89px) translateX(-92px);\n  }\n}\n#portfolio[_ngcontent-%COMP%] {\n  background-color: #ffecd4;\n  width: 100%;\n  height: calc(100vh - 65px);\n}\n#contact[_ngcontent-%COMP%] {\n  background-color: #fff9f1;\n  width: 100%;\n}\n#contact[_ngcontent-%COMP%]   .contactContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url('imgbackground.jpg') no-repeat center center fixed;\n}\n#contact[_ngcontent-%COMP%]   .contactContainer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20vh;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n#contact[_ngcontent-%COMP%]   .contactContainer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   .textSimple[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#contact[_ngcontent-%COMP%]   .contactContainer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   .textSimple[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: blanchedalmond;\n  font-family: \"Karla\", sans-serif;\n  font-size: 3vw;\n}\n#contact[_ngcontent-%COMP%]   .contactContainer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   .textSimple.min[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1vw;\n}\n#contact[_ngcontent-%COMP%]   .contactContainer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   .traits[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n#contact[_ngcontent-%COMP%]   .contactContainer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   .traits[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 3vw;\n  color: #a8a8a8;\n  font-weight: 600;\n  font-family: \"Recursive\", sans-serif;\n}\n#contact[_ngcontent-%COMP%]   .contactContainer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   .linksConection[_ngcontent-%COMP%] {\n  width: 150px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-bottom: 18px;\n}\n#contact[_ngcontent-%COMP%]   .contactContainer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   .linksConection[_ngcontent-%COMP%]   .linkContainer[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .contactContainer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   .linksConection[_ngcontent-%COMP%]   .linkContainer[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n  transition: opacity 1s;\n}\n#contact[_ngcontent-%COMP%]   .contactContainer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   .linksConection[_ngcontent-%COMP%]   .linkContainer.likedin[_ngcontent-%COMP%] {\n  background: url('linkedin.png') no-repeat center center;\n  background-size: 3vw;\n  background-size: cover;\n}\n#contact[_ngcontent-%COMP%]   .contactContainer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   .linksConection[_ngcontent-%COMP%]   .linkContainer.gitHub[_ngcontent-%COMP%] {\n  background: url('github.png') no-repeat center center;\n  background-size: 3vw;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWlucGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFFQSx5QkFBQTtFQUNBLGFBQUE7QUFBSjtBQUNJO0VBQ0ksa0VBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQVE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUVaO0FBRFk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FBR2hCO0FBRFk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFHaEI7QUFBUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUVaO0FBRFk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUdoQjtBQURZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUFHaEI7QUFBUTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBRVo7QUFEWTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdoQjtBQUZnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUlwQjtBQUZnQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBSXBCO0FBSG9CO0VBQ0ksa0JBQUE7QUFLeEI7QUFIb0I7RUFDSSxrQkFBQTtBQUt4QjtBQUZnQjtFQUNJLGVBQUE7QUFJcEI7QUFIb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBS3hCO0FBSG9CO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFLeEI7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0gsaUJBQUE7RUFDQSx1QkFBQTtBQUNEO0FBQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFUjtBQURRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBR1o7QUFGWTtFQUNJLFVBQUE7QUFJaEI7QUFIZ0I7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQUtwQjtBQUZZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFJaEI7QUFIZ0I7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBS3BCO0FBRlk7RUFDSSxXQUFBO0FBSWhCO0FBSGdCO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUFLcEI7QUFEUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBR1o7QUFGWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJaEI7QUFIZ0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0RBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBS3BCO0FBRm9CO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFJeEI7QUFId0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQUs1QjtBQUo0QjtFQUNJLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBTWhDO0FBSjRCO0VBQ0ksa0JBQUE7RUFDQSxtREFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFNaEM7QUFKNEI7RUFDSSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQU1oQztBQUo0QjtFQUNJLGtCQUFBO0VBQ0EsbURBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBTWhDO0FBSjRCO0VBQ0ksa0JBQUE7RUFDQSxzREFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFNaEM7QUFId0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQUs1QjtBQUo0QjtFQUNJLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBTWhDO0FBSjRCO0VBQ0ksa0JBQUE7RUFDQSxvREFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFNaEM7QUFKNEI7RUFDSSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQU1oQztBQUh3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUFLNUI7QUFKNEI7RUFDSSxrQkFBQTtFQUNBLHNEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQU1oQztBQUo0QjtFQUNJLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBTWhDO0FBSjRCO0VBQ0ksa0JBQUE7RUFDQSxtREFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFNaEM7QUFId0I7RUFDSTtJQUFPLHdCQUFBO0VBTWpDO0VBTDBCO0lBQU8sOENBQUE7RUFRakM7QUFDRjtBQVB3QjtFQUNJO0lBQU8sd0JBQUE7RUFVakM7RUFUMEI7SUFBTyw4Q0FBQTtFQVlqQztBQUNGO0FBWHdCO0VBQ0k7SUFBTyx3QkFBQTtFQWNqQztFQWIwQjtJQUFPLDZDQUFBO0VBZ0JqQztBQUNGO0FBZndCO0VBQ0k7SUFBTyx3QkFBQTtFQWtCakM7RUFqQjBCO0lBQU8sZ0RBQUE7RUFvQmpDO0FBQ0Y7QUFuQndCO0VBQ0k7SUFBTyx3QkFBQTtFQXNCakM7RUFyQjBCO0lBQU8sOENBQUE7RUF3QmpDO0FBQ0Y7QUF2QndCO0VBQ0k7SUFBTyx3QkFBQTtFQTBCakM7RUF6QjBCO0lBQU8sNkNBQUE7RUE0QmpDO0FBQ0Y7QUEzQndCO0VBQ0k7SUFBTyx3QkFBQTtFQThCakM7RUE3QjBCO0lBQU8sOENBQUE7RUFnQ2pDO0FBQ0Y7QUEvQndCO0VBQ0k7SUFBTyx3QkFBQTtFQWtDakM7RUFqQzBCO0lBQU8sK0NBQUE7RUFvQ2pDO0FBQ0Y7QUFuQ3dCO0VBQ0k7SUFBTyx3QkFBQTtFQXNDakM7RUFyQzBCO0lBQU8sNkNBQUE7RUF3Q2pDO0FBQ0Y7QUF2Q3dCO0VBQ0k7SUFBTyx3QkFBQTtFQTBDakM7RUF6QzBCO0lBQU8sNkNBQUE7RUE0Q2pDO0FBQ0Y7QUEzQ3dCO0VBQ0k7SUFBTyx3QkFBQTtFQThDakM7RUE3QzBCO0lBQU8sOENBQUE7RUFnRGpDO0FBQ0Y7QUF6Q0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQTRDSjtBQTFDQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQTZDSjtBQTVDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0gsbUJBQUE7RUFDRyxrRUFBQTtBQThDUjtBQTdDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBK0NaO0FBOUNZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFnRGhCO0FBL0NnQjtFQUNJLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBaURwQjtBQTlDb0I7RUFDSSxjQUFBO0FBZ0R4QjtBQTVDWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBOENoQjtBQTdDZ0I7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBK0NwQjtBQTVDWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBOENoQjtBQTdDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUErQ3BCO0FBOUNvQjtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQWdEeEI7QUE5Q29CO0VBQ0ksdURBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBZ0R4QjtBQTlDb0I7RUFDSSxxREFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFnRHhCIiwiZmlsZSI6Im1haW5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUgeyAgICAgICAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiA5MHZoOyAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDksIDI0MSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmNvbG9yQmFjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ2JhY2tncm91bmQuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgICAubWVudUNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwdnc7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3RyZXRjaDsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zdnc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JlY3Vyc2l2ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgICBhOmhvdmVyLCBhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjUyLCAyMDcsIDIwNyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWUgeyAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzB2aDsgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBidXJseXdvb2Q7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0thcmxhJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYnVybHl3b29kO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSZWN1cnNpdmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICAubmF2LXNjcmVlbiB7ICAgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4OyAgXHJcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgXHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgIFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxM3B4OyAgXHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgICAgIC5iYWxse1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JlY3Vyc2l2ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1M3B4OyAgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAlOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICYucG9ydCB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLmNvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDcycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXIgeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC5iYWxseyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIwNywgMjA3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG4gICAgfSAgICAgICBcclxufVxyXG4jYWJvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQ5LCAyNDEpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtd3JhcDogbm93cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmFib3V0Q29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDsgICAgICAgIFxyXG4gICAgICAgIC5pbmZvcm1hdGlvbkNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTsgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgICAgICAgIFxyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLnRpdGxlIHsgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjglOyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICByZ2IoMzksIDM5LCAzOSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLYXJsYScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRyYWl0cyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSZWN1cnNpdmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbmZvcm1hdGlvbkFib3V0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JlY3Vyc2l2ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLnBob3RvQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAjc2tpbGxzQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAucGhvdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3Bob3RvLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5za2lsbEFuaW1hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnNraWxsQmFsbCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuYmlnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4OyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYjEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBiMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY3NzLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDR2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYjIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBiMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaHRtbC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmIzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2pzLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDV2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYjQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBiNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmI1IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2FuZ3VsYXIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYubWVkZGl1bSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCAxNzMsIDIzMCk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5tMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IG0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ub2RlanMucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5tMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IG0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9teXNxbC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLm0zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogbTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2dpdC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMjMwLCAxNzMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNtYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuczEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbW9uZ29kYi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnMyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogczI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jKysucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogM3Z3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5zMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHMzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9qYXZhLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDN2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGIxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTY0cHgpIHRyYW5zbGF0ZVgoNzNweCk7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYjIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE5NHB4KSB0cmFuc2xhdGVYKC03N3B4KTt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBiMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTRweCkgdHJhbnNsYXRlWCgyMzlweCk7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYjQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xODVweCkgdHJhbnNsYXRlWCgtMTEwcHgpO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGI1IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNDFweCkgdHJhbnNsYXRlWCgxNzdweCk7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1M3B4KSB0cmFuc2xhdGVYKDE5cHgpO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIG0yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjZweCkgdHJhbnNsYXRlWCgxNTVweCk7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbTMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNDhweCkgdHJhbnNsYXRlWCgtMzFweCk7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgczEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODZweCkgdHJhbnNsYXRlWCg4OHB4KTt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDY4cHgpIHRyYW5zbGF0ZVgoMTEwcHgpO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHMzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTg5cHgpIHRyYW5zbGF0ZVgoLTkycHgpO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0gICAgICBcclxuICAgIH1cclxufVxyXG4jcG9ydGZvbGlvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjM2LCAyMTIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTsgICAgXHJcbn1cclxuI2NvbnRhY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQ5LCAyNDEpO1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgICBcclxuICAgIC5jb250YWN0Q29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDgwdmg7IFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nYmFja2dyb3VuZC5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgICAgICAgLnNvY2lhbE1lZGlhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjB2aDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLnRleHRTaW1wbGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJLYXJsYVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5taW57XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudHJhaXRzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICByZ2IoMTY4LCAxNjgsIDE2OCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JlY3Vyc2l2ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtzQ29uZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgLmxpbmtDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4OyBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICYubGlrZWRpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9saW5rZWRpbi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzdnc7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuZ2l0SHViIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2dpdGh1Yi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzdnc7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICBcclxuICAgIH0gICAgXHJcbn1cclxuICAiXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'SitePortifolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "XEn3":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 2, vars: 0, template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/shared.module */ "KZX/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/mainpage/mainpage.component */ "Mmsy");
/* harmony import */ var _pages_numbers_numbers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/numbers/numbers.component */ "egUf");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_balls_skills_balls_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/balls-skills/balls-skills.component */ "wqAh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const appRoutes = [
    { path: '', component: _pages_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__["MainpageComponent"] },
    { path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes),
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__["MainpageComponent"],
        _pages_numbers_numbers_component__WEBPACK_IMPORTED_MODULE_6__["NumbersComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _pages_balls_skills_balls_skills_component__WEBPACK_IMPORTED_MODULE_8__["BallsSkillsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], src_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();


/***/ }),

/***/ "egUf":
/*!****************************************************!*\
  !*** ./src/app/pages/numbers/numbers.component.ts ***!
  \****************************************************/
/*! exports provided: NumbersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbersComponent", function() { return NumbersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NumbersComponent {
    constructor() {
        this.number = Math.random();
        this.onclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    numberClick() {
        this.onclick.emit({
            number: this.number,
        });
    }
}
NumbersComponent.ɵfac = function NumbersComponent_Factory(t) { return new (t || NumbersComponent)(); };
NumbersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumbersComponent, selectors: [["app-numbers"]], inputs: { number: "number" }, outputs: { onclick: "onclick" }, decls: 2, vars: 1, consts: [[1, "numberClick", 3, "click"]], template: function NumbersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumbersComponent_Template_span_click_0_listener() { return ctx.numberClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.number, "\n");
    } }, styles: [".numberClick[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWJlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoibnVtYmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm51bWJlckNsaWNrIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "orXk":
/*!***********************************!*\
  !*** ./src/app/listProjects.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Pokédex Pokemon Front-end\",\"description\":\"Pokédex Pokemon é um projeto que foi desenvolvido para o meu crescimento de conhecimento em Angular.\",\"image\":\"../assets/projetoPokedex.png\",\"url\":\"https://github.com/KarinaCorrotti/projetoPokemonFront\"},{\"title\":\"Cantinho das Unhas - Server\",\"description\":\"Cantinho das Unhas Server é um projeto que eu desenvolvi para um trabalho acadêmico, utilizando as tecnologias NodeJs, Express e MongoDB.\",\"image\":\"../assets/projetoCantinho.jpg\",\"url\":\"https://github.com/KarinaCorrotti/cantinho-unhas-server\"},{\"title\":\"Jogo da Memoria Pokemon\",\"description\":\"Jogo da Memoria Pokemon é um projeto que foi desenvolvido para o meu crescimento de conhecimento em Front-end, focado em HTML e CSS.\",\"image\":\"../assets/projetoJogoDaMemoria.png\",\"url\":\"https://github.com/KarinaCorrotti/Jogodamem-riaPokemon\"}]");

/***/ }),

/***/ "wqAh":
/*!**************************************************************!*\
  !*** ./src/app/pages/balls-skills/balls-skills.component.ts ***!
  \**************************************************************/
/*! exports provided: BallsSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallsSkillsComponent", function() { return BallsSkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BallsSkillsComponent {
    constructor() {
        this.type = 'big';
    }
    ngOnInit() {
    }
}
BallsSkillsComponent.ɵfac = function BallsSkillsComponent_Factory(t) { return new (t || BallsSkillsComponent)(); };
BallsSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BallsSkillsComponent, selectors: [["app-balls-skills"]], inputs: { type: "type" }, decls: 1, vars: 0, consts: [[1, "skillBall"]], template: function BallsSkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".skillBall[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  position: absolute;\n  animation-duration: 1s;\n  animation-iteration-count: 1;\n}\n.skillBall.big[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background-color: white;\n  animation-timing-function: linear;\n  animation-fill-mode: both;\n}\n.skillBall.big.b1[_ngcontent-%COMP%] {\n  animation-name: b1;\n  background: url('css.png') no-repeat center center;\n  background-size: 4vw;\n}\n.skillBall.big.b2[_ngcontent-%COMP%] {\n  animation-name: b2;\n  background: url('html.png') no-repeat center center;\n  background-size: 5vw;\n}\n.skillBall.big.b3[_ngcontent-%COMP%] {\n  animation-name: b3;\n  background: url('js.png') no-repeat center center;\n  background-size: 5vw;\n}\n.skillBall.big.b4[_ngcontent-%COMP%] {\n  animation-name: b4;\n  background: url('sass.png') no-repeat center center;\n  background-size: 5vw;\n}\n.skillBall.big.b5[_ngcontent-%COMP%] {\n  animation-name: b5;\n  background: url('angular.png') no-repeat center center;\n  background-size: 5vw;\n}\n.skillBall.meddium[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background-color: white;\n  animation-timing-function: linear;\n  animation-fill-mode: both;\n}\n.skillBall.meddium.m1[_ngcontent-%COMP%] {\n  animation-name: m1;\n  background: url('nodejs.png') no-repeat center center;\n  background-size: 4vw;\n}\n.skillBall.meddium.m2[_ngcontent-%COMP%] {\n  animation-name: m2;\n  background: url('mysql.png') no-repeat center center;\n  background-size: 5vw;\n}\n.skillBall.meddium.m3[_ngcontent-%COMP%] {\n  animation-name: m3;\n  background: url('git.png') no-repeat center center;\n  background-size: 4vw;\n}\n.skillBall.small[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: white;\n  animation-name: small;\n  animation-timing-function: linear;\n  animation-fill-mode: both;\n}\n.skillBall.small.s1[_ngcontent-%COMP%] {\n  animation-name: s1;\n  background: url('mongodb.png') no-repeat center center;\n  background-size: 3vw;\n}\n.skillBall.small.s2[_ngcontent-%COMP%] {\n  animation-name: s2;\n  background: url('c++.png') no-repeat center center;\n  background-size: 3vw;\n}\n.skillBall.small.s3[_ngcontent-%COMP%] {\n  animation-name: s3;\n  background: url('java.png') no-repeat center center;\n  background-size: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiYWxscy1za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0Esb0JBQUE7QUFHWjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxtREFBQTtFQUNBLG9CQUFBO0FBR1o7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxvQkFBQTtBQUdaO0FBRFE7RUFDSSxrQkFBQTtFQUNBLG1EQUFBO0VBQ0Esb0JBQUE7QUFHWjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxzREFBQTtFQUNBLG9CQUFBO0FBR1o7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FBRVI7QUFEUTtFQUNJLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxvQkFBQTtBQUdaO0FBRFE7RUFDSSxrQkFBQTtFQUNBLG9EQUFBO0VBQ0Esb0JBQUE7QUFHWjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxrREFBQTtFQUNBLG9CQUFBO0FBR1o7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUFFUjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxzREFBQTtFQUNBLG9CQUFBO0FBR1o7QUFEUTtFQUNJLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxvQkFBQTtBQUdaO0FBRFE7RUFDSSxrQkFBQTtFQUNBLG1EQUFBO0VBQ0Esb0JBQUE7QUFHWiIsImZpbGUiOiJiYWxscy1za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxCYWxsIHsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlOyAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgIFxyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsgICAgICAgICAgICAgICAgXHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOyAgICBcclxuICAgICYuYmlnIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICYuYjEge1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYjE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jc3MucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDR2dzsgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmIyIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGIyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaHRtbC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNXZ3OyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmIzIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGIzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvanMucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDV2dzsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5iNCB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBiNDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDV2dzsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5iNSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBiNTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2FuZ3VsYXIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDV2dzsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLm1lZGRpdW0ge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICYubTEge1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogbTE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ub2RlanMucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDR2dzsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5tMiB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBtMjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL215c3FsLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1dnc7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubTMge1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogbTM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9naXQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDR2dzsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLnNtYWxsIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBhbmltYXRpb24tbmFtZTogc21hbGw7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgJi5zMSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21vbmdvZGIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDN2dzsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5zMiB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzMjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jKysucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDN2dzsgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmLnMzIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHMzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvamF2YS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogM3Z3OyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map