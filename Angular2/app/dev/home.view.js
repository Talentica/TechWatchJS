System.register(['angular2/core', 'angular2/router', './app.component', './home.component'], function(exports_1, context_1) {
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
    var core_1, router_1, app_component_1, home_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [app_component_1.AppDataComponent, router_1.ROUTER_DIRECTIVES],
                        template: "\n        <nav class=\"navbar navbar-inverse\">\n    \t    <div class=\"container\">\n    \t        <div class=\"navbar-header\">\n    \t        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n    \t            <ul class=\"nav navbar-nav\">\n    \t\t\t\t    <li class=\"active\">\n    \t\t\t\t    \t<a [routerLink]=\"['HomeComponent']\">Home</a>\n    \t\t\t\t    </li>\n    \t\t\t\t    <li><a [routerLink]=\"['AppDataComponent/GridSearchView']\">Data</a></li>\n    \t            </ul>\n    \t        </div>\n    \t        </div>\n    \t    </div>\n    \t</nav>\n\t\t<router-outlet></router-outlet>  \t \n    ",
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'HomeComponent', component: home_component_1.HomeComponent },
                        { path: '/', name: 'HomeComponent', component: home_component_1.HomeComponent },
                        { path: '/data/...', name: 'AppDataComponent', component: app_component_1.AppDataComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUudmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdDQTtnQkFBQTtnQkFDQSxDQUFDO2dCQTNCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixVQUFVLEVBQUMsQ0FBQyxnQ0FBZ0IsRUFBRSwwQkFBaUIsQ0FBQzt3QkFDaEQsUUFBUSxFQUFFLDBtQkFnQlQ7cUJBQ0osQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNaLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFDO3dCQUMvRCxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQzt3QkFDM0QsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsZ0NBQWdCLEVBQUM7cUJBQ3pFLENBQUM7O2dDQUFBO2dCQUVGLG1CQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCx1Q0FDQyxDQUFBIiwiZmlsZSI6ImRldi9ob21lLnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7QXBwRGF0YUNvbXBvbmVudH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaE1vZGVsLCBQZXJmb3JtU2VhcmNoU2VydmljZX0gZnJvbSAnLi9wZXJmb3JtLXNlYXJjaC5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgZGlyZWN0aXZlczpbQXBwRGF0YUNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2VcIj5cbiAgICBcdCAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgXHQgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzcz1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxuICAgIFx0ICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cbiAgICBcdFx0XHRcdCAgICA8bGkgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICBcdFx0XHRcdCAgICBcdDxhIFtyb3V0ZXJMaW5rXT1cIlsnSG9tZUNvbXBvbmVudCddXCI+SG9tZTwvYT5cbiAgICBcdFx0XHRcdCAgICA8L2xpPlxuICAgIFx0XHRcdFx0ICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0FwcERhdGFDb21wb25lbnQvR3JpZFNlYXJjaFZpZXcnXVwiPkRhdGE8L2E+PC9saT5cbiAgICBcdCAgICAgICAgICAgIDwvdWw+XG4gICAgXHQgICAgICAgIDwvZGl2PlxuICAgIFx0ICAgICAgICA8L2Rpdj5cbiAgICBcdCAgICA8L2Rpdj5cbiAgICBcdDwvbmF2PlxuXHRcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gIFx0IFxuICAgIGAsXG59KVxuQFJvdXRlQ29uZmlnKFtcblx0e3BhdGg6Jy9ob21lJywgbmFtZTogJ0hvbWVDb21wb25lbnQnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxuXHR7cGF0aDonLycsIG5hbWU6ICdIb21lQ29tcG9uZW50JywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50fSxcblx0e3BhdGg6Jy9kYXRhLy4uLicsIG5hbWU6ICdBcHBEYXRhQ29tcG9uZW50JywgY29tcG9uZW50OiBBcHBEYXRhQ29tcG9uZW50fVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufSJdfQ==
