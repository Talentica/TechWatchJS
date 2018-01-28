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
    var GridSearchImage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            }],
        execute: function() {
            GridSearchImage = (function () {
                function GridSearchImage(performSearch) {
                    this.performSearch = performSearch;
                    this.imageURL = "http://lorempixel.com/300/200/?random" + Math.random();
                }
                GridSearchImage = __decorate([
                    core_1.Component({
                        selector: 'grid-search-image',
                        template: "\n    \t<img *ngIf=\"performSearch.SearchModelObject.imageVisibility\" alt=\"100%x200\" src={{imageURL}} data-holder-rendered=\"true\" style=\"height: '200px'; width: '100%'; display: 'block'\"/>\n    ",
                    }), 
                    __metadata('design:paramtypes', [perform_search_service_1.PerformSearchService])
                ], GridSearchImage);
                return GridSearchImage;
            }());
            exports_1("GridSearchImage", GridSearchImage);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtc2VhcmNoLWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUNDLHlCQUNRLGFBQWtDO29CQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7b0JBRTFDLGFBQVEsR0FBRyx1Q0FBdUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRGpFLENBQUM7Z0JBVEo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixRQUFRLEVBQUUsMk1BRVQ7cUJBQ0osQ0FBQzs7bUNBQUE7Z0JBTUYsc0JBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELDZDQUtDLENBQUEiLCJmaWxlIjoiZ3JpZC1zZWFyY2gtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTZWFyY2hNb2RlbCwgUGVyZm9ybVNlYXJjaFNlcnZpY2V9IGZyb20gJy4vcGVyZm9ybS1zZWFyY2guc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdncmlkLXNlYXJjaC1pbWFnZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxpbWcgKm5nSWY9XCJwZXJmb3JtU2VhcmNoLlNlYXJjaE1vZGVsT2JqZWN0LmltYWdlVmlzaWJpbGl0eVwiIGFsdD1cIjEwMCV4MjAwXCIgc3JjPXt7aW1hZ2VVUkx9fSBkYXRhLWhvbGRlci1yZW5kZXJlZD1cInRydWVcIiBzdHlsZT1cImhlaWdodDogJzIwMHB4Jzsgd2lkdGg6ICcxMDAlJzsgZGlzcGxheTogJ2Jsb2NrJ1wiLz5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkU2VhcmNoSW1hZ2Uge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcGVyZm9ybVNlYXJjaDpQZXJmb3JtU2VhcmNoU2VydmljZVxuXHQpe31cblx0aW1hZ2VVUkwgPSBcImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS8zMDAvMjAwLz9yYW5kb21cIiArIE1hdGgucmFuZG9tKCk7XG59XG4iXX0=
