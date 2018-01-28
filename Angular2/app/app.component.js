System.register(['angular2/core', 'angular2/router', './panel-heading.view', './grid-search.view', './list-search.view', './perform-search.service'], function(exports_1, context_1) {
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
    var core_1, router_1, panel_heading_view_1, grid_search_view_1, list_search_view_1, perform_search_service_1;
    var AppDataComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (panel_heading_view_1_1) {
                panel_heading_view_1 = panel_heading_view_1_1;
            },
            function (grid_search_view_1_1) {
                grid_search_view_1 = grid_search_view_1_1;
            },
            function (list_search_view_1_1) {
                list_search_view_1 = list_search_view_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            }],
        execute: function() {
            AppDataComponent = (function () {
                function AppDataComponent(searchService) {
                    this.searchService = searchService;
                    this.toggleButtonModel = [
                        { "activeClass": "active", "buttonName": "options", "uid": "option1", "labelName": "grid" },
                        { "activeClass": "", "buttonName": "options", "uid": "option2", "labelName": "list" }
                    ];
                    console.log(searchService.SearchModelObject.searchDataUpdated);
                }
                AppDataComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app-data',
                        directives: [panel_heading_view_1.PanelHeadingView, grid_search_view_1.GridSearchView, list_search_view_1.ListSearchView, router_1.ROUTER_DIRECTIVES],
                        template: "\n\t\t    <div class=\"myApp\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"dashboard\">\n\t\t\t\t    <div class=\"row\">\n\t\t\t\t        <div class=\"col-sm-24\">\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<panel-heading [buttonModel]=\"toggleButtonModel\"></panel-heading>\n\t\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n    ",
                    }),
                    router_1.RouteConfig([
                        { path: '/grid-search/', as: 'GridSearchView', component: grid_search_view_1.GridSearchView },
                        { path: '/list-search/', as: 'ListSearchView', component: list_search_view_1.ListSearchView }
                    ]), 
                    __metadata('design:paramtypes', [perform_search_service_1.PerformSearchService])
                ], AppDataComponent);
                return AppDataComponent;
            }());
            exports_1("AppDataComponent", AppDataComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBQ0MsMEJBQ2MsYUFBa0M7b0JBQWxDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtvQkFJaEQsc0JBQWlCLEdBQUc7d0JBQ25CLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUcsU0FBUyxFQUFFLEtBQUssRUFBRyxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBQzt3QkFDMUYsRUFBQyxhQUFhLEVBQUMsRUFBRSxFQUFFLFlBQVksRUFBRyxTQUFTLEVBQUUsS0FBSyxFQUFHLFNBQVMsRUFBRSxXQUFXLEVBQUcsTUFBTSxFQUFDO3FCQUNyRixDQUFDO29CQUxELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUE7Z0JBQzVELENBQUM7Z0JBN0JMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFVBQVUsRUFBQyxDQUFDLHFDQUFnQixFQUFFLGlDQUFjLEVBQUUsaUNBQWMsRUFBRSwwQkFBaUIsQ0FBQzt3QkFDaEYsUUFBUSxFQUFFLGdkQWVUO3FCQUNKLENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDWCxFQUFDLElBQUksRUFBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxpQ0FBYyxFQUFDO3dCQUN2RSxFQUFDLElBQUksRUFBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxpQ0FBYyxFQUFDO3FCQUN4RSxDQUFDOztvQ0FBQTtnQkFXRix1QkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsK0NBVUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1BhbmVsSGVhZGluZ1ZpZXd9IGZyb20gJy4vcGFuZWwtaGVhZGluZy52aWV3JztcbmltcG9ydCB7R3JpZFNlYXJjaFZpZXd9IGZyb20gJy4vZ3JpZC1zZWFyY2gudmlldyc7XG5pbXBvcnQge0xpc3RTZWFyY2hWaWV3fSBmcm9tICcuL2xpc3Qtc2VhcmNoLnZpZXcnO1xuaW1wb3J0IHtTZWFyY2hNb2RlbCwgUGVyZm9ybVNlYXJjaFNlcnZpY2V9IGZyb20gJy4vcGVyZm9ybS1zZWFyY2guc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAtZGF0YScsXG4gICAgZGlyZWN0aXZlczpbUGFuZWxIZWFkaW5nVmlldywgR3JpZFNlYXJjaFZpZXcsIExpc3RTZWFyY2hWaWV3LCBST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6IGBcblx0XHQgICAgPGRpdiBjbGFzcz1cIm15QXBwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImRhc2hib2FyZFwiPlxuXHRcdFx0XHQgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMjRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdDxwYW5lbC1oZWFkaW5nIFtidXR0b25Nb2RlbF09XCJ0b2dnbGVCdXR0b25Nb2RlbFwiPjwvcGFuZWwtaGVhZGluZz5cblx0XHRcdFx0XHRcdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cbiAgICBgLFxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHtwYXRoOicvZ3JpZC1zZWFyY2gvJywgYXM6ICdHcmlkU2VhcmNoVmlldycsIGNvbXBvbmVudDogR3JpZFNlYXJjaFZpZXd9LFxuICB7cGF0aDonL2xpc3Qtc2VhcmNoLycsIGFzOiAnTGlzdFNlYXJjaFZpZXcnLCBjb21wb25lbnQ6IExpc3RTZWFyY2hWaWV3fVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBEYXRhQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOlBlcmZvcm1TZWFyY2hTZXJ2aWNlXG4gICAgKXtcblx0XHRjb25zb2xlLmxvZyhzZWFyY2hTZXJ2aWNlLlNlYXJjaE1vZGVsT2JqZWN0LnNlYXJjaERhdGFVcGRhdGVkKVxuICAgIH1cblx0dG9nZ2xlQnV0dG9uTW9kZWwgPSBbXG5cdFx0e1wiYWN0aXZlQ2xhc3NcIjpcImFjdGl2ZVwiLCBcImJ1dHRvbk5hbWVcIiA6IFwib3B0aW9uc1wiLCBcInVpZFwiIDogXCJvcHRpb24xXCIsIFwibGFiZWxOYW1lXCIgOlwiZ3JpZFwifSxcblx0XHR7XCJhY3RpdmVDbGFzc1wiOlwiXCIsIFwiYnV0dG9uTmFtZVwiIDogXCJvcHRpb25zXCIsIFwidWlkXCIgOiBcIm9wdGlvbjJcIiwgXCJsYWJlbE5hbWVcIiA6IFwibGlzdFwifVxuXHRdO1xufVxuIl19
