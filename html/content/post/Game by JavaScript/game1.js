const block_name=["road","wall","s_block","e_block"];
const maze_map=[
 [1,1,1,1,1,1,1,1,1,1],
 [1,1,1,0,0,0,0,1,1,1],
 [1,1,1,0,1,1,0,1,1,1],
 [1,1,1,0,1,1,0,1,1,1],
 [2,0,0,0,1,1,0,0,0,3],
 [1,1,1,1,1,1,1,1,1,1],
];
const map = document.querySelector("#map");
const sign = document.querySelector("#sign");
var is_begin = false;
var state = [];

function maze(){
	for (var i = 0; i < maze_map.length; i++) {
		for (var j = 0; j < maze_map[i].length; j++) {
			const block=document.createElement("div");
			block.classList.add(block_name[maze_map[i][j]]);
			if (i==4&&j==0) {
				block.classList.add("line_all");
				block.addEventListener("mouseenter", block_S_listener());
			}
			if (i==4&&j==9) {
				block.classList.add("line_all");
				block.addEventListener("mouseenter", block_E_listener());
			}
			if (maze_map[i][j]==1)
			{
				block.addEventListener("mouseenter", Wall_listener());
				if (i==0||i==2&&(j==4||j==5)||i==5&&!(j==4||j==5)) {
					block.classList.add("line_top");
				}
				if (i==0&&j>=3&&j<=6||i==3&&(j<=2||j>=7)||i==5) {
					block.classList.add("line_bottom");
				}
				if (i!=4&&j==0||i>=2&&i<=4&&j==4||i>=1&&i<=3&&j==7) {
					block.classList.add("line_left");
				}
				if (i!=4&&j==9||i>=2&&i<=4&&j==5||i>=1&&i<=3&&j==2) {
					block.classList.add("line_right");
				}
				state.push((green, red) => {
          			block.classList.remove("wall_green");
          			block.classList.remove("wall_red");
          			if (green) {
          			  	block.classList.add("wall_green");
         			}
         			if (red) {
            			block.classList.add("wall_red");
         			}
        		});
			}
			map.appendChild(block);
		}
	}	
	map.addEventListener("mouseleave", leave_map());
}

function block_S_listener(){
	return () => {
        if (is_begin==false) {
            is_begin=true;
            state.forEach((flag) => flag(false, false));
            sign.textContent = "Game Start!";
        }
    };
}

function block_E_listener(){
	return () => {
        if (is_begin==true) {
            is_begin=false;
            state.forEach((flag) => flag(true, false));
            sign.textContent = "You Win!";
        }
    };
}

function Wall_listener(){
	return () => {
		if (is_begin==true) {
			is_begin=false;
			state.forEach((flag) => flag(false, true));
			sign.textContent = "You Lose!";
		}
	}
}

function leave_map(){
	return () => {
		if (is_begin==true) {
			is_begin=false;
			state.forEach((flag) => flag(false, true));
			sign.textContent = "Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!"
		}
	}
}


maze();