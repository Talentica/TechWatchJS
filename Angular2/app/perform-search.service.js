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
                    this.searchDataUpdated = searchDummyData.slice(0, 199);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZvcm0tc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUFBO29CQUNFLGlCQUFZLEdBQVUsR0FBRyxDQUFDO29CQUVwQix1QkFBa0IsR0FBYyxlQUFlLENBQUM7b0JBQ2hELHNCQUFpQixHQUFhLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUM1RCxhQUFRLEdBQVcsSUFBSSxDQUFDO29CQUN4QixhQUFRLEdBQVcsS0FBSyxDQUFDO29CQUN6QixvQkFBZSxHQUFXLEtBQUssQ0FBQztnQkFXeEMsQ0FBQztnQkFWTyxnQ0FBVSxHQUFWLFVBQVcsS0FBSztvQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixFQUFFLENBQUEsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUEsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN2QixDQUFDO29CQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUEsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN0QixDQUFDO2dCQUNSLENBQUM7Z0JBQ0gsa0JBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELHFDQWtCQyxDQUFBO1lBQ0Q7Z0JBRUM7b0JBREEsZ0JBQVcsR0FBVyxFQUFFLENBQUM7b0JBSXpCLHNCQUFpQixHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7b0JBRnJDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELHlDQUFVLEdBQVYsVUFBVyxLQUFLO29CQUNmLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7d0JBQ2hELEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQzs0QkFDakMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDekIsQ0FBQztvQkFDRixDQUFDLENBQUMsQ0FBQTtvQkFDRixJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDO2dCQUMxRCxDQUFDO2dCQUNELGlEQUFrQixHQUFsQixVQUFtQixLQUFLO29CQUN2QixLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6RyxDQUFDO2dCQUNELDBDQUFXLEdBQVgsVUFBWSxLQUFLO29CQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDaEQsQ0FBQztnQkFFRiwyQkFBQztZQUFELENBdkJBLEFBdUJDLElBQUE7WUF2QkQsdURBdUJDLENBQUEiLCJmaWxlIjoicGVyZm9ybS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTZWFyY2hNb2RlbHtcblx0XHRkYXRhUXVhbnRpdHk6bnVtYmVyID0gMjAwO1xuXHRcdHNlYXJjaERhdGE6QXJyYXk8YW55PjtcbiAgICAgICAgc2VhcmNoRGF0YUNvbXBsZXRlOkFycmF5PGFueT4gPSBzZWFyY2hEdW1teURhdGE7XG4gICAgICAgIHNlYXJjaERhdGFVcGRhdGVkOkFycmF5PGFueT4gPXNlYXJjaER1bW15RGF0YS5zbGljZSgwLCAxOTkpO1xuICAgICAgICBncmlkVmlldzpib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgbGlzdFZpZXc6Ym9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBpbWFnZVZpc2liaWxpdHk6Ym9vbGVhbiA9IGZhbHNlO1xuICAgICAgICB0b2dnbGVWaWV3KHZhbHVlKXtcbiAgICAgICAgXHRjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIFx0aWYodmFsdWUgPT09ICdncmlkJyl7XG4gICAgICAgIFx0XHR0aGlzLmdyaWRWaWV3ID0gdHJ1ZTtcbiAgICAgICAgXHRcdHRoaXMubGlzdFZpZXcgPSBmYWxzZTtcbiAgICAgICAgXHR9ZWxzZSBpZih2YWx1ZSA9PT0gJ2xpc3QnKXtcbiAgICAgICAgXHRcdHRoaXMuZ3JpZFZpZXcgPSBmYWxzZTtcbiAgICAgICAgXHRcdHRoaXMubGlzdFZpZXcgPSB0cnVlO1xuICAgICAgICBcdH1cblx0XHR9XG59XG5leHBvcnQgY2xhc3MgUGVyZm9ybVNlYXJjaFNlcnZpY2V7XG5cdHNlYXJjaFF1ZXJ5OiBzdHJpbmcgPSAnJztcblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLnNlYXJjaFF1ZXJ5ID0gJyc7XG5cdH1cblx0U2VhcmNoTW9kZWxPYmplY3QgPSBuZXcgU2VhcmNoTW9kZWwoKTtcblx0ZmlsdGVyRGF0YShxdWVyeSl7XG5cdFx0bGV0IG5ld1NlYXJjaERhdGEgPSBbXTtcblx0XHR0aGlzLlNlYXJjaE1vZGVsT2JqZWN0LnNlYXJjaERhdGFDb21wbGV0ZS5tYXAob2JqID0+IHtcblx0XHRcdGlmKG9iai5lbWFpbC5pbmRleE9mKHF1ZXJ5KSA+IC0xKXtcblx0XHRcdFx0bmV3U2VhcmNoRGF0YS5wdXNoKG9iaik7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLlNlYXJjaE1vZGVsT2JqZWN0LnNlYXJjaERhdGFVcGRhdGVkID0gbmV3U2VhcmNoRGF0YTtcblx0fVxuXHRjaGFuZ2VEYXRhUXVhbnRpdHkodmFsdWUpe1xuXHRcdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXHRcdHRoaXMuU2VhcmNoTW9kZWxPYmplY3Quc2VhcmNoRGF0YVVwZGF0ZWQgPSB0aGlzLlNlYXJjaE1vZGVsT2JqZWN0LnNlYXJjaERhdGFDb21wbGV0ZS5zbGljZSgwLCB2YWx1ZSAtMSk7XG5cdH1cblx0dG9nZ2xlSW1hZ2UodmFsdWUpe1xuXHRcdHRoaXMuU2VhcmNoTW9kZWxPYmplY3QuaW1hZ2VWaXNpYmlsaXR5ID0gdmFsdWU7XG5cdH1cblxufSJdfQ==
