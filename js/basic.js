"use strict";

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener("click", showHideSearchBar);







function showHideSearchBar(){
	const searchBar = document.getElementById('searchBar');
	if(searchBar.style.display === 'none'){
		searchBar.style.display = 'flex'
	}else{searchBar.style.display = 'none'};
}