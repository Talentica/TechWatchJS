System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SearchModel, PerformSearchService;
    return {
        setters:[],
        execute: function() {
            SearchModel = (function () {
                function SearchModel() {
                    this.dataQuantity = 200;
                    this.searchDataComplete = searchDummyData;
                    this.searchDataUpdated = searchDummyData.slice(0, 10);
                    this.gridView = true;
                    this.listView = false;
                    this.imageVisibility = false;
                }
                SearchModel.prototype.toggleView = function (value) {
                    console.log(value);
                    if (value === 'grid') {
                        this.gridView = true;
                        this.listView = false;
                    }
                    else if (value === 'list') {
                        this.gridView = false;
                        this.listView = true;
                    }
                };
                return SearchModel;
            }());
            exports_1("SearchModel", SearchModel);
            PerformSearchService = (function () {
                function PerformSearchService() {
                    this.searchQuery = '';
                    this.SearchModelObject = new SearchModel();
                    this.searchQuery = '';
                }
                PerformSearchService.prototype.filterData = function (query) {
                    var newSearchData = [];
                    this.SearchModelObject.searchDataComplete.map(function (obj) {
                        if (obj.email.indexOf(query) > -1) {
                            newSearchData.push(obj);
                        }
                    });
                    this.SearchModelObject.searchDataUpdated = newSearchData;
                };
                PerformSearchService.prototype.changeDataQuantity = function (value) {
                    value = parseInt(value);
                    this.SearchModelObject.searchDataUpdated = this.SearchModelObject.searchDataComplete.slice(0, value - 1);
                };
                PerformSearchService.prototype.toggleImage = function (value) {
                    this.SearchModelObject.imageVisibility = value;
                };
                return PerformSearchService;
            }());
            exports_1("PerformSearchService", PerformSearchService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZvcm0tc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUFBO29CQUNFLGlCQUFZLEdBQVUsR0FBRyxDQUFDO29CQUVwQix1QkFBa0IsR0FBYyxlQUFlLENBQUM7b0JBQ2hELHNCQUFpQixHQUFhLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUMzRCxhQUFRLEdBQVcsSUFBSSxDQUFDO29CQUN4QixhQUFRLEdBQVcsS0FBSyxDQUFDO29CQUN6QixvQkFBZSxHQUFXLEtBQUssQ0FBQztnQkFXeEMsQ0FBQztnQkFWTyxnQ0FBVSxHQUFWLFVBQVcsS0FBSztvQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixFQUFFLENBQUEsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUEsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN2QixDQUFDO29CQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUEsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN0QixDQUFDO2dCQUNSLENBQUM7Z0JBQ0gsa0JBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELHFDQWtCQyxDQUFBO1lBQ0Q7Z0JBRUM7b0JBREEsZ0JBQVcsR0FBVyxFQUFFLENBQUM7b0JBSXpCLHNCQUFpQixHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7b0JBRnJDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELHlDQUFVLEdBQVYsVUFBVyxLQUFLO29CQUNmLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7d0JBQ2hELEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQzs0QkFDakMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDekIsQ0FBQztvQkFDRixDQUFDLENBQUMsQ0FBQTtvQkFDRixJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDO2dCQUMxRCxDQUFDO2dCQUNELGlEQUFrQixHQUFsQixVQUFtQixLQUFLO29CQUN2QixLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6RyxDQUFDO2dCQUNELDBDQUFXLEdBQVgsVUFBWSxLQUFLO29CQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDaEQsQ0FBQztnQkFFRiwyQkFBQztZQUFELENBdkJBLEFBdUJDLElBQUE7WUF2QkQsdURBdUJDLENBQUEiLCJmaWxlIjoicGVyZm9ybS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTZWFyY2hNb2RlbHtcblx0XHRkYXRhUXVhbnRpdHk6bnVtYmVyID0gMjAwO1xuXHRcdHNlYXJjaERhdGE6QXJyYXk8YW55PjtcbiAgICAgICAgc2VhcmNoRGF0YUNvbXBsZXRlOkFycmF5PGFueT4gPSBzZWFyY2hEdW1teURhdGE7XG4gICAgICAgIHNlYXJjaERhdGFVcGRhdGVkOkFycmF5PGFueT4gPXNlYXJjaER1bW15RGF0YS5zbGljZSgwLCAxMCk7XG4gICAgICAgIGdyaWRWaWV3OmJvb2xlYW4gPSB0cnVlO1xuICAgICAgICBsaXN0Vmlldzpib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGltYWdlVmlzaWJpbGl0eTpib29sZWFuID0gZmFsc2U7XG4gICAgICAgIHRvZ2dsZVZpZXcodmFsdWUpe1xuICAgICAgICBcdGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgXHRpZih2YWx1ZSA9PT0gJ2dyaWQnKXtcbiAgICAgICAgXHRcdHRoaXMuZ3JpZFZpZXcgPSB0cnVlO1xuICAgICAgICBcdFx0dGhpcy5saXN0VmlldyA9IGZhbHNlO1xuICAgICAgICBcdH1lbHNlIGlmKHZhbHVlID09PSAnbGlzdCcpe1xuICAgICAgICBcdFx0dGhpcy5ncmlkVmlldyA9IGZhbHNlO1xuICAgICAgICBcdFx0dGhpcy5saXN0VmlldyA9IHRydWU7XG4gICAgICAgIFx0fVxuXHRcdH1cbn1cbmV4cG9ydCBjbGFzcyBQZXJmb3JtU2VhcmNoU2VydmljZXtcblx0c2VhcmNoUXVlcnk6IHN0cmluZyA9ICcnO1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHRoaXMuc2VhcmNoUXVlcnkgPSAnJztcblx0fVxuXHRTZWFyY2hNb2RlbE9iamVjdCA9IG5ldyBTZWFyY2hNb2RlbCgpO1xuXHRmaWx0ZXJEYXRhKHF1ZXJ5KXtcblx0XHRsZXQgbmV3U2VhcmNoRGF0YSA9IFtdO1xuXHRcdHRoaXMuU2VhcmNoTW9kZWxPYmplY3Quc2VhcmNoRGF0YUNvbXBsZXRlLm1hcChvYmogPT4ge1xuXHRcdFx0aWYob2JqLmVtYWlsLmluZGV4T2YocXVlcnkpID4gLTEpe1xuXHRcdFx0XHRuZXdTZWFyY2hEYXRhLnB1c2gob2JqKTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuU2VhcmNoTW9kZWxPYmplY3Quc2VhcmNoRGF0YVVwZGF0ZWQgPSBuZXdTZWFyY2hEYXRhO1xuXHR9XG5cdGNoYW5nZURhdGFRdWFudGl0eSh2YWx1ZSl7XG5cdFx0dmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG5cdFx0dGhpcy5TZWFyY2hNb2RlbE9iamVjdC5zZWFyY2hEYXRhVXBkYXRlZCA9IHRoaXMuU2VhcmNoTW9kZWxPYmplY3Quc2VhcmNoRGF0YUNvbXBsZXRlLnNsaWNlKDAsIHZhbHVlIC0xKTtcblx0fVxuXHR0b2dnbGVJbWFnZSh2YWx1ZSl7XG5cdFx0dGhpcy5TZWFyY2hNb2RlbE9iamVjdC5pbWFnZVZpc2liaWxpdHkgPSB2YWx1ZTtcblx0fVxuXG59Il19
