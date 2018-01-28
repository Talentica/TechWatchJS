System.register(['angular2/core', './grid-search-desc', './grid-search-image.component', './perform-search.service'], function(exports_1, context_1) {
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
    var core_1, grid_search_desc_1, grid_search_image_component_1, perform_search_service_1;
    var GridSearchView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grid_search_desc_1_1) {
                grid_search_desc_1 = grid_search_desc_1_1;
            },
            function (grid_search_image_component_1_1) {
                grid_search_image_component_1 = grid_search_image_component_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            }],
        execute: function() {
            GridSearchView = (function () {
                function GridSearchView(searchService) {
                    this.searchService = searchService;
                }
                GridSearchView = __decorate([
                    core_1.Component({
                        selector: 'grid-search-view',
                        directives: [grid_search_desc_1.GridSearchDesc, grid_search_image_component_1.GridSearchImage],
                        template: "\n    \t<div *ngFor=\"#dataObj of searchService.SearchModelObject.searchDataUpdated\" class=\"col-sm-12 col-md-8\">\n\t\t\t<div class=\"thumbnail\">\n\t\t\t\t<grid-search-image></grid-search-image>\n\t\t\t\t<grid-search-desc [details]=\"dataObj\"></grid-search-desc>\n\t\t\t</div>\n\t\t</div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [perform_search_service_1.PerformSearchService])
                ], GridSearchView);
                return GridSearchView;
            }());
            exports_1("GridSearchView", GridSearchView);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtc2VhcmNoLnZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQ0ksd0JBQ1csYUFBa0M7b0JBQWxDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtnQkFDM0MsQ0FBQztnQkFmUDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFVBQVUsRUFBQyxDQUFDLGlDQUFjLEVBQUUsNkNBQWUsQ0FBQzt3QkFDNUMsUUFBUSxFQUFFLDRTQU9UO3FCQUNKLENBQUM7O2tDQUFBO2dCQUtGLHFCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCwyQ0FJQyxDQUFBIiwiZmlsZSI6ImdyaWQtc2VhcmNoLnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05hdmJhckZvcm19IGZyb20gJy4vbmF2YmFyLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7R3JpZFNlYXJjaERlc2N9IGZyb20gJy4vZ3JpZC1zZWFyY2gtZGVzYyc7XG5pbXBvcnQge0dyaWRTZWFyY2hJbWFnZX0gZnJvbSAnLi9ncmlkLXNlYXJjaC1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hNb2RlbCwgUGVyZm9ybVNlYXJjaFNlcnZpY2V9IGZyb20gJy4vcGVyZm9ybS1zZWFyY2guc2VydmljZSdcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ3JpZC1zZWFyY2gtdmlldycsXG4gICAgZGlyZWN0aXZlczpbR3JpZFNlYXJjaERlc2MsIEdyaWRTZWFyY2hJbWFnZV0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxkaXYgKm5nRm9yPVwiI2RhdGFPYmogb2Ygc2VhcmNoU2VydmljZS5TZWFyY2hNb2RlbE9iamVjdC5zZWFyY2hEYXRhVXBkYXRlZFwiIGNsYXNzPVwiY29sLXNtLTEyIGNvbC1tZC04XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGh1bWJuYWlsXCI+XG5cdFx0XHRcdDxncmlkLXNlYXJjaC1pbWFnZT48L2dyaWQtc2VhcmNoLWltYWdlPlxuXHRcdFx0XHQ8Z3JpZC1zZWFyY2gtZGVzYyBbZGV0YWlsc109XCJkYXRhT2JqXCI+PC9ncmlkLXNlYXJjaC1kZXNjPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZFNlYXJjaFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgc2VhcmNoU2VydmljZTpQZXJmb3JtU2VhcmNoU2VydmljZVxuICAgICl7fVxufSJdfQ==
