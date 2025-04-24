//your code here!
const olist = document.getElementById("infi-list");
let itemCount = 0;

function addListItem(count) {
	for (let i = 0; i < count; i++) {
		itemCount++;
		const li = document.createElement('li');
		li.textContent = `Item ${itemCount}`
		olist.appendChild(li);		
	}	
}
//add initial 10 item
addListItem(10);
// addListItem(10);



function handleScroll() {
	const{scrollTop, scrollHeight, clientHeight} = document.documentElement;
	if(scrollTop + clientHeight >= scrollHeight - 5 ){
		console.log("scroll");
		addListItem(2);
	}
	
}
window.addEventListener('scroll',handleScroll);