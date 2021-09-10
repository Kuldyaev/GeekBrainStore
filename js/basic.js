"use strict";

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener("click", showHideSearchBar);
searchBtn.addEventListener('mouseover', changeSvgPink, {once: true});
const cabinetBtn = document.getElementById('cabinetBtn');
cabinetBtn.addEventListener('mouseover', changeSvgPink1, {once: true});
const cartBtn00 = document.getElementById('cartPoint');
cartBtn00.addEventListener('mouseover', changeSvgPink2, {once: true});
const menuBtn00 = document.getElementById('menuBtn00');
menuBtn00.addEventListener('mouseover', changeSvgPink3, {once: true});

function changeSvgPink(){
	document.getElementById('searchImg').src = "img/iconSearchPink.svg" ;
	searchBtn.addEventListener('mouseout', changeSvgWhite, {once: true}); 
}
function changeSvgPink1(){
	document.getElementById('cabinetImg').src = "img/iconUserLKPink.svg" ;
	cabinetBtn.addEventListener('mouseout', changeSvgWhite1, {once: true}); 
}
function changeSvgPink2(){
	document.getElementById('cartImg00').src = "img/iconCartPink.svg" ;
	cartBtn00.addEventListener('mouseout', changeSvgWhite2, {once: true}); 
}
function changeSvgPink3(){
	document.getElementById('menuImg00').src = "img/iconMenuPink.svg" ;
	menuBtn00.addEventListener('mouseout', changeSvgWhite3, {once: true}); 
}
function changeSvgWhite(){
	document.getElementById('searchImg').src = "img/iconSearch.svg" ;
	searchBtn.addEventListener('mouseover', changeSvgPink, {once: true}); 
}
function changeSvgWhite1(){
	document.getElementById('cabinetImg').src = "img/iconUserLK.svg" ;
	cabinetBtn.addEventListener('mouseover', changeSvgPink1, {once: true}); 
}	
function changeSvgWhite2(){
	document.getElementById('cartImg00').src = "img/iconCart.svg" ;
	cartBtn00.addEventListener('mouseover', changeSvgPink2, {once: true}); 
}
function changeSvgWhite3(){
	document.getElementById('menuImg00').src = "img/iconMenu.svg" ;
	menuBtn00.addEventListener('mouseover', changeSvgPink3, {once: true}); 
}	
function showHideSearchBar(){
	const searchBar = document.getElementById('searchBar');
	if(searchBar.style.display === 'none'){
		searchBar.style.display = 'flex'
	}else{searchBar.style.display = 'none'};
}