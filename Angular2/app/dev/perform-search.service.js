System.register(['../searchdata'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var searchdata_1;
    var SearchModel, PerformSearchService;
    return {
        setters:[
            function (searchdata_1_1) {
                searchdata_1 = searchdata_1_1;
            }],
        execute: function() {
            SearchModel = (function () {
                function SearchModel() {
                    this.dataQuantity = 200;
                    this.searchDataComplete = searchdata_1.searchDummyData;
                    this.searchDataUpdated = searchdata_1.searchDummyData.slice(0, 199);
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
                function PerformSearchService(searchQuery) {
                    this.searchQuery = searchQuery;
                    this.SearchModelObject = new SearchModel();
                    searchQuery = '';
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZvcm0tc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFDQTtnQkFBQTtvQkFDQyxpQkFBWSxHQUFXLEdBQUcsQ0FBQztvQkFFM0IsdUJBQWtCLEdBQWUsNEJBQWUsQ0FBQztvQkFDakQsc0JBQWlCLEdBQWUsNEJBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUM5RCxhQUFRLEdBQVksSUFBSSxDQUFDO29CQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO29CQUMxQixvQkFBZSxHQUFZLEtBQUssQ0FBQztnQkFXbEMsQ0FBQztnQkFWQSxnQ0FBVSxHQUFWLFVBQVcsS0FBSztvQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN2QixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN0QixDQUFDO2dCQUNGLENBQUM7Z0JBQ0Ysa0JBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELHFDQWtCQyxDQUFBO1lBQ0Q7Z0JBQ0MsOEJBQW1CLFdBQW1CO29CQUFuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtvQkFHdEMsc0JBQWlCLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztvQkFGckMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQztnQkFFRCx5Q0FBVSxHQUFWLFVBQVcsS0FBSztvQkFDZixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO3dCQUNoRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ25DLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pCLENBQUM7b0JBQ0YsQ0FBQyxDQUFDLENBQUE7b0JBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQztnQkFDMUQsQ0FBQztnQkFDRCxpREFBa0IsR0FBbEIsVUFBbUIsS0FBSztvQkFDdkIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUcsQ0FBQztnQkFDRCwwQ0FBVyxHQUFYLFVBQVksS0FBSztvQkFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQ2hELENBQUM7Z0JBRUYsMkJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELHVEQXNCQyxDQUFBIiwiZmlsZSI6ImRldi9wZXJmb3JtLXNlYXJjaC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VhcmNoRHVtbXlEYXRhIH0gZnJvbSAnLi4vc2VhcmNoZGF0YSc7XG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kZWwge1xuXHRkYXRhUXVhbnRpdHk6IG51bWJlciA9IDIwMDtcblx0c2VhcmNoRGF0YTogQXJyYXk8YW55Pjtcblx0c2VhcmNoRGF0YUNvbXBsZXRlOiBBcnJheTxhbnk+ID0gc2VhcmNoRHVtbXlEYXRhO1xuXHRzZWFyY2hEYXRhVXBkYXRlZDogQXJyYXk8YW55PiA9IHNlYXJjaER1bW15RGF0YS5zbGljZSgwLCAxOTkpO1xuXHRncmlkVmlldzogYm9vbGVhbiA9IHRydWU7XG5cdGxpc3RWaWV3OiBib29sZWFuID0gZmFsc2U7XG5cdGltYWdlVmlzaWJpbGl0eTogYm9vbGVhbiA9IGZhbHNlO1xuXHR0b2dnbGVWaWV3KHZhbHVlKSB7XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdGlmICh2YWx1ZSA9PT0gJ2dyaWQnKSB7XG5cdFx0XHR0aGlzLmdyaWRWaWV3ID0gdHJ1ZTtcblx0XHRcdHRoaXMubGlzdFZpZXcgPSBmYWxzZTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSAnbGlzdCcpIHtcblx0XHRcdHRoaXMuZ3JpZFZpZXcgPSBmYWxzZTtcblx0XHRcdHRoaXMubGlzdFZpZXcgPSB0cnVlO1xuXHRcdH1cblx0fVxufVxuZXhwb3J0IGNsYXNzIFBlcmZvcm1TZWFyY2hTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IocHVibGljIHNlYXJjaFF1ZXJ5OiBzdHJpbmcpIHtcblx0XHRzZWFyY2hRdWVyeSA9ICcnO1xuXHR9XG5cdFNlYXJjaE1vZGVsT2JqZWN0ID0gbmV3IFNlYXJjaE1vZGVsKCk7XG5cdGZpbHRlckRhdGEocXVlcnkpIHtcblx0XHRsZXQgbmV3U2VhcmNoRGF0YSA9IFtdO1xuXHRcdHRoaXMuU2VhcmNoTW9kZWxPYmplY3Quc2VhcmNoRGF0YUNvbXBsZXRlLm1hcChvYmogPT4ge1xuXHRcdFx0aWYgKG9iai5lbWFpbC5pbmRleE9mKHF1ZXJ5KSA+IC0xKSB7XG5cdFx0XHRcdG5ld1NlYXJjaERhdGEucHVzaChvYmopO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5TZWFyY2hNb2RlbE9iamVjdC5zZWFyY2hEYXRhVXBkYXRlZCA9IG5ld1NlYXJjaERhdGE7XG5cdH1cblx0Y2hhbmdlRGF0YVF1YW50aXR5KHZhbHVlKSB7XG5cdFx0dmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG5cdFx0dGhpcy5TZWFyY2hNb2RlbE9iamVjdC5zZWFyY2hEYXRhVXBkYXRlZCA9IHRoaXMuU2VhcmNoTW9kZWxPYmplY3Quc2VhcmNoRGF0YUNvbXBsZXRlLnNsaWNlKDAsIHZhbHVlIC0gMSk7XG5cdH1cblx0dG9nZ2xlSW1hZ2UodmFsdWUpIHtcblx0XHR0aGlzLlNlYXJjaE1vZGVsT2JqZWN0LmltYWdlVmlzaWJpbGl0eSA9IHZhbHVlO1xuXHR9XG5cbn0iXX0=
