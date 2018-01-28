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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFBQTtnQkFDQSxDQUFDO2dCQWJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFVBQVUsRUFBQyxDQUFDLCtDQUFnQixFQUFFLDJDQUFtQixFQUFFLDJDQUFtQixDQUFDO3dCQUN2RSxNQUFNLEVBQUMsQ0FBQyxhQUFhLENBQUM7d0JBQ3RCLFFBQVEsRUFBRSwrT0FNVDtxQkFDSixDQUFDOzs4QkFBQTtnQkFFRixpQkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsbUNBQ0MsQ0FBQSIsImZpbGUiOiJuYXZiYXItZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Zvcm1Ub2dnbGVCdXR0b259IGZyb20gJy4vZm9ybS10b2dnbGUtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1TZWFyY2hDb21wb25lbnR9IGZyb20gJy4vZm9ybS1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybVNlbGVjdENvbXBvbmVudH0gZnJvbSAnLi9mb3JtLXNlbGVjdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdmJhci1mb3JtJyxcbiAgICBkaXJlY3RpdmVzOltGb3JtVG9nZ2xlQnV0dG9uLCBGb3JtU2VhcmNoQ29tcG9uZW50LCBGb3JtU2VsZWN0Q29tcG9uZW50XSxcbiAgICBpbnB1dHM6WydidXR0b25Nb2RlbCddLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8ZGl2IGNsYXNzPVwibmF2YmFyLWZvcm1cIj5cblx0XHRcdDxmb3JtLXNlbGVjdD48L2Zvcm0tc2VsZWN0PlxuICAgICAgICBcdDxmb3JtLXNlYXJjaCBwbGFjZWhvbGRlclRleHQ9XCJzZWFyY2hcIj48L2Zvcm0tc2VhcmNoPlxuXHQgICAgXHQ8Zm9ybS10b2dnbGUtYnV0dG9uIFtidXR0b25Nb2RlbF09XCJidXR0b25Nb2RlbFwiPjwvZm9ybS10b2dnbGUtYnV0dG9uPlx0XG5cdFx0PC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyRm9ybSB7XG59Il19
