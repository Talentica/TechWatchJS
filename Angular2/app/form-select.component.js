System.register(['angular2/core', './perform-search.service'], function(exports_1, context_1) {
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
    var core_1, perform_search_service_1;
    var FormSelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            }],
        execute: function() {
            FormSelectComponent = (function () {
                function FormSelectComponent(performSearch) {
                    this.performSearch = performSearch;
                    this.optionList = [10, 50, 100, 200, 500, 1000, 2500];
                }
                FormSelectComponent.prototype.handleQuantityChange = function (event) {
                    var currentValue = event.target.value;
                    this.performSearch.changeDataQuantity(currentValue);
                };
                FormSelectComponent = __decorate([
                    core_1.Component({
                        selector: 'form-select',
                        template: "\n        <div class=\"form-group\">\n        <select class=\"form-control\" (change)=\"handleQuantityChange($event)\">\n        <option *ngFor=\"#option of optionList\">{{option}}</option>\n        </select>\n        </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [perform_search_service_1.PerformSearchService])
                ], FormSelectComponent);
                return FormSelectComponent;
            }());
            exports_1("FormSelectComponent", FormSelectComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUNDLDZCQUNRLGFBQWtDO29CQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7b0JBRXpDLGVBQVUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQURqRCxDQUFDO2dCQUVGLGtEQUFvQixHQUFwQixVQUFxQixLQUFLO29CQUN6QixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDckQsQ0FBQztnQkFsQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLHdPQU1UO3FCQUNKLENBQUM7O3VDQUFBO2dCQVVGLDBCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCxxREFTQyxDQUFBIiwiZmlsZSI6ImZvcm0tc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UGVyZm9ybVNlYXJjaFNlcnZpY2V9IGZyb20gJy4vcGVyZm9ybS1zZWFyY2guc2VydmljZSdcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9ybS1zZWxlY3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAoY2hhbmdlKT1cImhhbmRsZVF1YW50aXR5Q2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCIjb3B0aW9uIG9mIG9wdGlvbkxpc3RcIj57e29wdGlvbn19PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtU2VsZWN0Q29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIHBlcmZvcm1TZWFyY2g6UGVyZm9ybVNlYXJjaFNlcnZpY2Vcblx0KXt9XG5cdCBvcHRpb25MaXN0ID0gWzEwLCA1MCAsIDEwMCwgMjAwLCA1MDAsIDEwMDAsIDI1MDBdO1xuXHQgaGFuZGxlUXVhbnRpdHlDaGFuZ2UoZXZlbnQpe1xuXHQgXHRsZXQgY3VycmVudFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHQgXHR0aGlzLnBlcmZvcm1TZWFyY2guY2hhbmdlRGF0YVF1YW50aXR5KGN1cnJlbnRWYWx1ZSk7XG5cdCB9XG59XG4iXX0=
