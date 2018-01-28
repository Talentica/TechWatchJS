System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var GridSearchDesc;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GridSearchDesc = (function () {
                function GridSearchDesc() {
                    this.showFilter = 'hidden';
                }
                GridSearchDesc.prototype.toggleShowFilter = function () {
                    this.showFilter = this.showFilter === 'hidden' ? 'show' : 'hidden';
                };
                GridSearchDesc = __decorate([
                    core_1.Component({
                        selector: 'grid-search-desc',
                        inputs: ['details'],
                        template: "\n        <div class=\"caption\">\n\t                <h3>{{details.email}}</h3>\n\t                <div>\n\t                    <p>\n\t                        <a role=\"button\" data-toggle=\"collapse\" (click)=\"toggleShowFilter()\">\n\t                            More\n\t                        </a>\n\t                    </p>\n\t                    <div class=\"{{showFilter}}\" >\n\t                        <p>\n\t                            {{details.details}}\n\t                        </p>\n\t                    </div>\n\t                    <div><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></div>\n\t                </div>\n\t            </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], GridSearchDesc);
                return GridSearchDesc;
            }());
            exports_1("GridSearchDesc", GridSearchDesc);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtc2VhcmNoLWRlc2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBQUE7b0JBQ0MsZUFBVSxHQUFHLFFBQVEsQ0FBQztnQkFJdkIsQ0FBQztnQkFIQSx5Q0FBZ0IsR0FBaEI7b0JBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsR0FBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO2dCQUNyRSxDQUFDO2dCQTFCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLE1BQU0sRUFBQyxDQUFDLFNBQVMsQ0FBQzt3QkFDbEIsUUFBUSxFQUFFLGl2QkFpQlQ7cUJBQ0osQ0FBQzs7a0NBQUE7Z0JBTUYscUJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELDJDQUtDLENBQUEiLCJmaWxlIjoiZ3JpZC1zZWFyY2gtZGVzYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdncmlkLXNlYXJjaC1kZXNjJyxcbiAgICBpbnB1dHM6WydkZXRhaWxzJ10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcHRpb25cIj5cblx0ICAgICAgICAgICAgICAgIDxoMz57e2RldGFpbHMuZW1haWx9fTwvaDM+XG5cdCAgICAgICAgICAgICAgICA8ZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxwPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIChjbGljayk9XCJ0b2dnbGVTaG93RmlsdGVyKClcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmVcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvcD5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3tzaG93RmlsdGVyfX1cIiA+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tkZXRhaWxzLmRldGFpbHN9fVxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdj48YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgcm9sZT1cImJ1dHRvblwiPkJ1dHRvbjwvYT4gPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIHJvbGU9XCJidXR0b25cIj5CdXR0b248L2E+PC9kaXY+XG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cblx0ICAgICAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZFNlYXJjaERlc2Mge1xuXHRzaG93RmlsdGVyID0gJ2hpZGRlbic7XG5cdHRvZ2dsZVNob3dGaWx0ZXIoKXtcblx0XHR0aGlzLnNob3dGaWx0ZXIgPSB0aGlzLnNob3dGaWx0ZXIgPT09ICdoaWRkZW4nID8gICdzaG93JyA6ICdoaWRkZW4nO1xuXHR9XG59XG4iXX0=
