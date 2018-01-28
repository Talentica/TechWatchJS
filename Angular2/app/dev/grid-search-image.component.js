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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtc2VhcmNoLWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUNDLHlCQUNRLGFBQWtDO29CQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7b0JBRTFDLGFBQVEsR0FBRyx1Q0FBdUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRGpFLENBQUM7Z0JBVEo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixRQUFRLEVBQUUsMk1BRVQ7cUJBQ0osQ0FBQzs7bUNBQUE7Z0JBTUYsc0JBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELDZDQUtDLENBQUEiLCJmaWxlIjoiZGV2L2dyaWQtc2VhcmNoLWltYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2VhcmNoTW9kZWwsIFBlcmZvcm1TZWFyY2hTZXJ2aWNlfSBmcm9tICcuL3BlcmZvcm0tc2VhcmNoLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ3JpZC1zZWFyY2gtaW1hZ2UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8aW1nICpuZ0lmPVwicGVyZm9ybVNlYXJjaC5TZWFyY2hNb2RlbE9iamVjdC5pbWFnZVZpc2liaWxpdHlcIiBhbHQ9XCIxMDAleDIwMFwiIHNyYz17e2ltYWdlVVJMfX0gZGF0YS1ob2xkZXItcmVuZGVyZWQ9XCJ0cnVlXCIgc3R5bGU9XCJoZWlnaHQ6ICcyMDBweCc7IHdpZHRoOiAnMTAwJSc7IGRpc3BsYXk6ICdibG9jaydcIi8+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZFNlYXJjaEltYWdlIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIHBlcmZvcm1TZWFyY2g6UGVyZm9ybVNlYXJjaFNlcnZpY2Vcblx0KXt9XG5cdGltYWdlVVJMID0gXCJodHRwOi8vbG9yZW1waXhlbC5jb20vMzAwLzIwMC8/cmFuZG9tXCIgKyBNYXRoLnJhbmRvbSgpO1xufVxuIl19
