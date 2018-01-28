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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtc2VhcmNoLnZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQ0ksd0JBQ1csYUFBa0M7b0JBQWxDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtnQkFDM0MsQ0FBQztnQkFmUDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFVBQVUsRUFBQyxDQUFDLGlDQUFjLEVBQUUsNkNBQWUsQ0FBQzt3QkFDNUMsUUFBUSxFQUFFLDRTQU9UO3FCQUNKLENBQUM7O2tDQUFBO2dCQUtGLHFCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCwyQ0FJQyxDQUFBIiwiZmlsZSI6ImRldi9ncmlkLXNlYXJjaC52aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtOYXZiYXJGb3JtfSBmcm9tICcuL25hdmJhci1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge0dyaWRTZWFyY2hEZXNjfSBmcm9tICcuL2dyaWQtc2VhcmNoLWRlc2MnO1xuaW1wb3J0IHtHcmlkU2VhcmNoSW1hZ2V9IGZyb20gJy4vZ3JpZC1zZWFyY2gtaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoTW9kZWwsIFBlcmZvcm1TZWFyY2hTZXJ2aWNlfSBmcm9tICcuL3BlcmZvcm0tc2VhcmNoLnNlcnZpY2UnXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dyaWQtc2VhcmNoLXZpZXcnLFxuICAgIGRpcmVjdGl2ZXM6W0dyaWRTZWFyY2hEZXNjLCBHcmlkU2VhcmNoSW1hZ2VdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8ZGl2ICpuZ0Zvcj1cIiNkYXRhT2JqIG9mIHNlYXJjaFNlcnZpY2UuU2VhcmNoTW9kZWxPYmplY3Quc2VhcmNoRGF0YVVwZGF0ZWRcIiBjbGFzcz1cImNvbC1zbS0xMiBjb2wtbWQtOFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInRodW1ibmFpbFwiPlxuXHRcdFx0XHQ8Z3JpZC1zZWFyY2gtaW1hZ2U+PC9ncmlkLXNlYXJjaC1pbWFnZT5cblx0XHRcdFx0PGdyaWQtc2VhcmNoLWRlc2MgW2RldGFpbHNdPVwiZGF0YU9ialwiPjwvZ3JpZC1zZWFyY2gtZGVzYz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRTZWFyY2hWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHNlYXJjaFNlcnZpY2U6UGVyZm9ybVNlYXJjaFNlcnZpY2VcbiAgICApe31cbn0iXX0=
