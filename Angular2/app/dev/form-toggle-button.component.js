System.register(['angular2/core', './perform-search.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, perform_search_service_1, router_1;
    var FormToggleButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FormToggleButton = (function () {
                function FormToggleButton(performSearch, _router) {
                    this.performSearch = performSearch;
                    this._router = _router;
                }
                FormToggleButton.prototype.changeView = function (event) {
                    var currentElem = event.target.id;
                    if (currentElem === 'grid') {
                        this._router.navigate(['./GridSearchView']);
                    }
                    else if (currentElem === 'list') {
                        this._router.navigate(['./ListSearchView']);
                    }
                };
                FormToggleButton.prototype.toggleImages = function (event) {
                    var value = event.target.getAttribute('data-image') === 'true';
                    //console.log( event.target.getAttribute('data-image'));
                    this.performSearch.toggleImage(value);
                };
                FormToggleButton = __decorate([
                    core_1.Component({
                        selector: 'form-toggle-button',
                        inputs: ['buttonModel'],
                        template: "\n    <div class=\"btn-group\" data-toggle=\"buttons\">\n        <label *ngFor=\"#button of buttonModel\" class=\"btn btn-primary  {{button.activeClass}}\" id=\"{{button.uid}}\">\n                    <input type=\"radio\" name=\"{{button.buttonName}}\"  autoComplete=\"off\" id=\"{{button.labelName}}\" (click)=\"changeView($event)\" />\n                    {{button.labelName}}\n                </label>\n    </div>\n    <div class=\"btn-group toggle-images\" data-toggle=\"buttons\">\n        <label  class=\"btn btn-primary\">\n            <input type=\"radio\" data-image=\"true\" name=\"image-visibility\" id=\"option3\" autocomplete=\"off\" checked (click)=\"toggleImages($event)\">\n            Show Images\n        </label>\n        <label  class=\"btn btn-primary active\">\n            <input type=\"radio\" data-image=\"false\" name=\"image-visibility\" id=\"option4\" autocomplete=\"off\" (click)=\"toggleImages($event)\"> \n            Hide Images\n        </label>\n    </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [perform_search_service_1.PerformSearchService, router_1.Router])
                ], FormToggleButton);
                return FormToggleButton;
            }());
            exports_1("FormToggleButton", FormToggleButton);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQ0MsMEJBQ1EsYUFBa0MsRUFDM0IsT0FBZTtvQkFEdEIsa0JBQWEsR0FBYixhQUFhLENBQXFCO29CQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUM1QixDQUFDO2dCQUNILHFDQUFVLEdBQVYsVUFBVyxLQUFLO29CQUNmLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO29CQUM1QixFQUFFLENBQUEsQ0FBQyxXQUFXLEtBQUcsTUFBTSxDQUFDLENBQUEsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELENBQUM7b0JBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLFdBQVcsS0FBSyxNQUFNLENBQUMsQ0FBQSxDQUFDO3dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztvQkFDakQsQ0FBQztnQkFFUixDQUFDO2dCQUNFLHVDQUFZLEdBQVosVUFBYSxLQUFLO29CQUNkLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLE1BQU0sQ0FBQztvQkFDL0Qsd0RBQXdEO29CQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkF4Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUM7d0JBQ3ZCLFFBQVEsRUFBRSxzK0JBaUJUO3FCQUNKLENBQUM7O29DQUFBO2dCQW9CRix1QkFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQsK0NBbUJDLENBQUEiLCJmaWxlIjoiZGV2L2Zvcm0tdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NlYXJjaE1vZGVsLCBQZXJmb3JtU2VhcmNoU2VydmljZX0gZnJvbSAnLi9wZXJmb3JtLXNlYXJjaC5zZXJ2aWNlJ1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9ybS10b2dnbGUtYnV0dG9uJyxcbiAgICBpbnB1dHMgOlsnYnV0dG9uTW9kZWwnXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgPGxhYmVsICpuZ0Zvcj1cIiNidXR0b24gb2YgYnV0dG9uTW9kZWxcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSAge3tidXR0b24uYWN0aXZlQ2xhc3N9fVwiIGlkPVwie3tidXR0b24udWlkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ7e2J1dHRvbi5idXR0b25OYW1lfX1cIiAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgaWQ9XCJ7e2J1dHRvbi5sYWJlbE5hbWV9fVwiIChjbGljayk9XCJjaGFuZ2VWaWV3KCRldmVudClcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7e2J1dHRvbi5sYWJlbE5hbWV9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCB0b2dnbGUtaW1hZ2VzXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XG4gICAgICAgIDxsYWJlbCAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBkYXRhLWltYWdlPVwidHJ1ZVwiIG5hbWU9XCJpbWFnZS12aXNpYmlsaXR5XCIgaWQ9XCJvcHRpb24zXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZCAoY2xpY2spPVwidG9nZ2xlSW1hZ2VzKCRldmVudClcIj5cbiAgICAgICAgICAgIFNob3cgSW1hZ2VzXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYWN0aXZlXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgZGF0YS1pbWFnZT1cImZhbHNlXCIgbmFtZT1cImltYWdlLXZpc2liaWxpdHlcIiBpZD1cIm9wdGlvbjRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAoY2xpY2spPVwidG9nZ2xlSW1hZ2VzKCRldmVudClcIj4gXG4gICAgICAgICAgICBIaWRlIEltYWdlc1xuICAgICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Ub2dnbGVCdXR0b24ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcGVyZm9ybVNlYXJjaDpQZXJmb3JtU2VhcmNoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcblx0KXt9XG5cdGNoYW5nZVZpZXcoZXZlbnQpe1xuXHRcdGxldCBjdXJyZW50RWxlbSA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgaWYoY3VycmVudEVsZW09PT0nZ3JpZCcpe1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKCBbJy4vR3JpZFNlYXJjaFZpZXcnXSk7ICAgIFxuICAgICAgICB9ZWxzZSBpZihjdXJyZW50RWxlbSA9PT0gJ2xpc3QnKXtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZSggWycuL0xpc3RTZWFyY2hWaWV3J10pO1xuICAgICAgICB9XG4gICAgICAgIFxuXHR9XG4gICAgdG9nZ2xlSW1hZ2VzKGV2ZW50KXtcbiAgICAgICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZScpID09PSAndHJ1ZSc7XG4gICAgICAgIC8vY29uc29sZS5sb2coIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UnKSk7XG4gICAgICAgIHRoaXMucGVyZm9ybVNlYXJjaC50b2dnbGVJbWFnZSh2YWx1ZSk7XG4gICAgfVxufVxuIl19
