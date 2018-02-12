export class SearchModel{
		dataQuantity:number = 200;
		searchData:Array<any>;
        searchDataComplete:Array<any> = searchDummyData;
        searchDataUpdated:Array<any> =searchDummyData.slice(0, 10);
        gridView:boolean = true;
        listView:boolean = false;
        imageVisibility:boolean = false;
        toggleView(value){
        	console.log(value);
        	if(value === 'grid'){
        		this.gridView = true;
        		this.listView = false;
        	}else if(value === 'list'){
        		this.gridView = false;
        		this.listView = true;
        	}
		}
}
export class PerformSearchService{
	searchQuery: string = '';
	constructor(){
		this.searchQuery = '';
	}
	SearchModelObject = new SearchModel();
	filterData(query){
		let newSearchData = [];
		this.SearchModelObject.searchDataComplete.map(obj => {
			if(obj.email.indexOf(query) > -1){
				newSearchData.push(obj);
			}
		})
		this.SearchModelObject.searchDataUpdated = newSearchData;
	}
	changeDataQuantity(value){
		value = parseInt(value);
		this.SearchModelObject.searchDataUpdated = this.SearchModelObject.searchDataComplete.slice(0, value -1);
	}
	toggleImage(value){
		this.SearchModelObject.imageVisibility = value;
	}

}