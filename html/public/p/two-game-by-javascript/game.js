const map=document.querySelector("#map");
var is_begin=false;
var time = 30;
var score = 0;
var hole_array=document.getElementsByClassName("hole");

function creat_map(){
	for (var i = 0; i < 60; i++) {
			const hole=document.createElement("input");
			hole.type="radio";
			hole.classList.add("hole");
			hole.addEventListener("click",hit_mouse(i));
			map.appendChild(hole);
	}
}

function time_counter(){
	document.getElementById("time").value = time;
	if (!time) {
		start_stop();
	}else{
		time-=1;
		set_time=setTimeout("time_counter()",1000);
	}
}

function start_stop(){
	if(is_begin){
		clearTimeout(set_time);
		clear_hole();
		document.getElementById("message").value="Game Over!";
		is_begin=false;
		score=0;
		time=30;
	}else{
		is_begin=true;
		creat_mouse();
		document.getElementById("score").value=score;
		document.getElementById("message").value="Game Start!";
		time_counter();
	}
}

function creat_mouse(){
	if (is_begin) {
		var index = Math.floor(Math.random()*60);
		hole_array[index].value = 1;
		hole_array[index].checked = true;
	}
}

function hit_mouse(index){
	return () => {
	if (is_begin) {
		if (hole_array[index].value == 1) {
			score+=1;
			document.getElementById("score").value = score;
			hole_array[index].value = "";
			creat_mouse();
		}
		hole_array[index].checked = false;
	}else{
		hole_array[index].checked = false;
	}};
}

function clear_hole(){
	for (var i = 0; i < 60; i++) {
		hole_array[i].classList.remove("mouse");
		hole_array[i].checked = false;
	}
}

creat_map();

