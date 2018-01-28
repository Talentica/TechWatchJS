System.register(['angular2/core', './navbar-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navbar_form_component_1;
    var PanelHeadingView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_form_component_1_1) {
                navbar_form_component_1 = navbar_form_component_1_1;
            }],
        execute: function() {
            PanelHeadingView = (function () {
                function PanelHeadingView() {
                }
                PanelHeadingView = __decorate([
                    core_1.Component({
                        selector: 'panel-heading',
                        directives: [navbar_form_component_1.NavbarForm],
                        inputs: ['buttonModel'],
                        template: "\n    \t<div class=\"panel-heading\">\n            <ul class=\"list-inline clearfix\">\n            <li>\n            <navbar-form [buttonModel]=\"buttonModel\"></navbar-form>\n            </li>\n            </ul>\n        </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PanelHeadingView);
                return PanelHeadingView;
            }());
            exports_1("PanelHeadingView", PanelHeadingView);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLWhlYWRpbmcudmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFBQTtnQkFDQSxDQUFDO2dCQWZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFVBQVUsRUFBQyxDQUFDLGtDQUFVLENBQUM7d0JBQ3ZCLE1BQU0sRUFBQyxDQUFDLGFBQWEsQ0FBQzt3QkFDdEIsUUFBUSxFQUFFLDZPQVFUO3FCQUNKLENBQUM7O29DQUFBO2dCQUVGLHVCQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCwrQ0FDQyxDQUFBIiwiZmlsZSI6InBhbmVsLWhlYWRpbmcudmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TmF2YmFyRm9ybX0gZnJvbSAnLi9uYXZiYXItZm9ybS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BhbmVsLWhlYWRpbmcnLFxuICAgIGRpcmVjdGl2ZXM6W05hdmJhckZvcm1dLFxuICAgIGlucHV0czpbJ2J1dHRvbk1vZGVsJ10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZSBjbGVhcmZpeFwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPG5hdmJhci1mb3JtIFtidXR0b25Nb2RlbF09XCJidXR0b25Nb2RlbFwiPjwvbmF2YmFyLWZvcm0+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUGFuZWxIZWFkaW5nVmlldyB7XG59Il19
