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
                    this.optionList = [200, 10, 50, 100, 200, 500, 1000, 2500];
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUNDLDZCQUNRLGFBQWtDO29CQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7b0JBRXpDLGVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFEckQsQ0FBQztnQkFFRixrREFBb0IsR0FBcEIsVUFBcUIsS0FBSztvQkFDekIsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3JELENBQUM7Z0JBbEJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSx3T0FNVDtxQkFDSixDQUFDOzt1Q0FBQTtnQkFVRiwwQkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQscURBU0MsQ0FBQSIsImZpbGUiOiJkZXYvZm9ybS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQZXJmb3JtU2VhcmNoU2VydmljZX0gZnJvbSAnLi9wZXJmb3JtLXNlYXJjaC5zZXJ2aWNlJ1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmb3JtLXNlbGVjdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIChjaGFuZ2UpPVwiaGFuZGxlUXVhbnRpdHlDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cIiNvcHRpb24gb2Ygb3B0aW9uTGlzdFwiPnt7b3B0aW9ufX08L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1TZWxlY3RDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcGVyZm9ybVNlYXJjaDpQZXJmb3JtU2VhcmNoU2VydmljZVxuXHQpe31cblx0IG9wdGlvbkxpc3QgPSBbMjAwLDEwLCA1MCAsIDEwMCwgMjAwLCA1MDAsIDEwMDAsIDI1MDBdO1xuXHQgaGFuZGxlUXVhbnRpdHlDaGFuZ2UoZXZlbnQpe1xuXHQgXHRsZXQgY3VycmVudFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHQgXHR0aGlzLnBlcmZvcm1TZWFyY2guY2hhbmdlRGF0YVF1YW50aXR5KGN1cnJlbnRWYWx1ZSk7XG5cdCB9XG59XG4iXX0=
