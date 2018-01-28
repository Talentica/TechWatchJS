System.register(['angular2/core', './form-toggle-button.component', './form-search.component', './form-select.component'], function(exports_1, context_1) {
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
    var core_1, form_toggle_button_component_1, form_search_component_1, form_select_component_1;
    var NavbarForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (form_toggle_button_component_1_1) {
                form_toggle_button_component_1 = form_toggle_button_component_1_1;
            },
            function (form_search_component_1_1) {
                form_search_component_1 = form_search_component_1_1;
            },
            function (form_select_component_1_1) {
                form_select_component_1 = form_select_component_1_1;
            }],
        execute: function() {
            NavbarForm = (function () {
                function NavbarForm() {
                }
                NavbarForm = __decorate([
                    core_1.Component({
                        selector: 'navbar-form',
                        directives: [form_toggle_button_component_1.FormToggleButton, form_search_component_1.FormSearchComponent, form_select_component_1.FormSelectComponent],
                        inputs: ['buttonModel'],
                        template: "\n    \t<div class=\"navbar-form\">\n\t\t\t<form-select></form-select>\n        \t<form-search placeholderText=\"search\"></form-search>\n\t    \t<form-toggle-button [buttonModel]=\"buttonModel\"></form-toggle-button>\t\n\t\t</div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavbarForm);
                return NavbarForm;
            }());
            exports_1("NavbarForm", NavbarForm);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFBQTtnQkFDQSxDQUFDO2dCQWJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFVBQVUsRUFBQyxDQUFDLCtDQUFnQixFQUFFLDJDQUFtQixFQUFFLDJDQUFtQixDQUFDO3dCQUN2RSxNQUFNLEVBQUMsQ0FBQyxhQUFhLENBQUM7d0JBQ3RCLFFBQVEsRUFBRSwrT0FNVDtxQkFDSixDQUFDOzs4QkFBQTtnQkFFRixpQkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsbUNBQ0MsQ0FBQSIsImZpbGUiOiJkZXYvbmF2YmFyLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtGb3JtVG9nZ2xlQnV0dG9ufSBmcm9tICcuL2Zvcm0tdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3JtU2VhcmNoQ29tcG9uZW50fSBmcm9tICcuL2Zvcm0tc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1TZWxlY3RDb21wb25lbnR9IGZyb20gJy4vZm9ybS1zZWxlY3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYXZiYXItZm9ybScsXG4gICAgZGlyZWN0aXZlczpbRm9ybVRvZ2dsZUJ1dHRvbiwgRm9ybVNlYXJjaENvbXBvbmVudCwgRm9ybVNlbGVjdENvbXBvbmVudF0sXG4gICAgaW5wdXRzOlsnYnV0dG9uTW9kZWwnXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGRpdiBjbGFzcz1cIm5hdmJhci1mb3JtXCI+XG5cdFx0XHQ8Zm9ybS1zZWxlY3Q+PC9mb3JtLXNlbGVjdD5cbiAgICAgICAgXHQ8Zm9ybS1zZWFyY2ggcGxhY2Vob2xkZXJUZXh0PVwic2VhcmNoXCI+PC9mb3JtLXNlYXJjaD5cblx0ICAgIFx0PGZvcm0tdG9nZ2xlLWJ1dHRvbiBbYnV0dG9uTW9kZWxdPVwiYnV0dG9uTW9kZWxcIj48L2Zvcm0tdG9nZ2xlLWJ1dHRvbj5cdFxuXHRcdDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckZvcm0ge1xufSJdfQ==
