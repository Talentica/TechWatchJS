System.register(['angular2/platform/browser', "./home.view", "./perform-search.service", 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, home_view_1, perform_search_service_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (home_view_1_1) {
                home_view_1 = home_view_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(home_view_1.AppComponent, [perform_search_service_1.PerformSearchService, router_1.ROUTER_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBLG1CQUFTLENBQUMsd0JBQVksRUFBRSxDQUFDLDZDQUFvQixFQUFFLHlCQUFnQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2hvbWUudmlld1wiO1xuaW1wb3J0IHtQZXJmb3JtU2VhcmNoU2VydmljZX0gZnJvbSBcIi4vcGVyZm9ybS1zZWFyY2guc2VydmljZVwiXG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbUGVyZm9ybVNlYXJjaFNlcnZpY2UsIFJPVVRFUl9QUk9WSURFUlNdKTtcbiJdfQ==
