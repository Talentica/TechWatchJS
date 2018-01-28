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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtc2VhcmNoLWRlc2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBQUE7b0JBQ0MsZUFBVSxHQUFHLFFBQVEsQ0FBQztnQkFJdkIsQ0FBQztnQkFIQSx5Q0FBZ0IsR0FBaEI7b0JBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsR0FBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO2dCQUNyRSxDQUFDO2dCQTFCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLE1BQU0sRUFBQyxDQUFDLFNBQVMsQ0FBQzt3QkFDbEIsUUFBUSxFQUFFLGl2QkFpQlQ7cUJBQ0osQ0FBQzs7a0NBQUE7Z0JBTUYscUJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELDJDQUtDLENBQUEiLCJmaWxlIjoiZGV2L2dyaWQtc2VhcmNoLWRlc2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ3JpZC1zZWFyY2gtZGVzYycsXG4gICAgaW5wdXRzOlsnZGV0YWlscyddLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXB0aW9uXCI+XG5cdCAgICAgICAgICAgICAgICA8aDM+e3tkZXRhaWxzLmVtYWlsfX08L2gzPlxuXHQgICAgICAgICAgICAgICAgPGRpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8cD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiAoY2xpY2spPVwidG9nZ2xlU2hvd0ZpbHRlcigpXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3JlXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblx0ICAgICAgICAgICAgICAgICAgICA8L3A+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7c2hvd0ZpbHRlcn19XCIgPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8cD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZGV0YWlscy5kZXRhaWxzfX1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXY+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHJvbGU9XCJidXR0b25cIj5CdXR0b248L2E+IDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiByb2xlPVwiYnV0dG9uXCI+QnV0dG9uPC9hPjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9kaXY+XG5cdCAgICAgICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRTZWFyY2hEZXNjIHtcblx0c2hvd0ZpbHRlciA9ICdoaWRkZW4nO1xuXHR0b2dnbGVTaG93RmlsdGVyKCl7XG5cdFx0dGhpcy5zaG93RmlsdGVyID0gdGhpcy5zaG93RmlsdGVyID09PSAnaGlkZGVuJyA/ICAnc2hvdycgOiAnaGlkZGVuJztcblx0fVxufVxuIl19
