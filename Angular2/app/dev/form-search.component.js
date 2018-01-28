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
    var FormSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            }],
        execute: function() {
            FormSearchComponent = (function () {
                function FormSearchComponent(performSearch) {
                    this.performSearch = performSearch;
                }
                FormSearchComponent.prototype.handleChange = function (event) {
                    console.log(event.target.value);
                    this.performSearch.filterData(event.target.value);
                };
                FormSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'form-search',
                        template: "\n        <div class=\"form-group\">\n\t\t<input type=\"search\" ref=\"searchField\" (keyup)=\"handleChange($event)\" class=\"search form-control\"/>\n\t\t</div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [perform_search_service_1.PerformSearchService])
                ], FormSearchComponent);
                return FormSearchComponent;
            }());
            exports_1("FormSearchComponent", FormSearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUNDLDZCQUNRLGFBQW1DO29CQUFuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7Z0JBQ3ZDLENBQUM7Z0JBQ0wsMENBQVksR0FBWixVQUFhLEtBQUs7b0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFmRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUseUtBSU47cUJBQ0osQ0FBQzs7dUNBQUE7Z0JBU0YsMEJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHFEQVFDLENBQUEiLCJmaWxlIjoiZGV2L2Zvcm0tc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoTW9kZWwsIFBlcmZvcm1TZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9wZXJmb3JtLXNlYXJjaC5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdmb3JtLXNlYXJjaCcsXG5cdHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJzZWFyY2hcIiByZWY9XCJzZWFyY2hGaWVsZFwiIChrZXl1cCk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiIGNsYXNzPVwic2VhcmNoIGZvcm0tY29udHJvbFwiLz5cblx0XHQ8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtU2VhcmNoQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIHBlcmZvcm1TZWFyY2g6IFBlcmZvcm1TZWFyY2hTZXJ2aWNlXG5cdCkgeyB9XG5cdGhhbmRsZUNoYW5nZShldmVudCkge1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0dGhpcy5wZXJmb3JtU2VhcmNoLmZpbHRlckRhdGEoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0fVxufVxuIl19
