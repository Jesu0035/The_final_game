//sounds 
let pointFX = document.querySelector("#pointFX");
let pointFX2 = document.querySelector("#pointFX2");
let BgMusic = document.querySelector("#BgMusic");

let gamePaused = false;
let gameEnded = false;

let start_button = document.querySelector(".start_button");

let fxIsMuted = false;


window.addEventListener("load", userStart);

let points = 0;
let lives = 3;


function userStart() {
	console.log("userStart");

	document.querySelector("#settings_screen").classList.add("hide");
	document.querySelector(".start_button").addEventListener("click", startScreen);

	document.querySelector("#gameover_screen").classList.add("hide");
	document.querySelector("#level_complete").classList.add("hide");
	

}

function startScreen() {
console.log("startScreen");
	document.querySelector("#start_screen").addEventListener("click", hideStartScreen);

	document.querySelector("#start").addEventListener("click", start);

	
	
	document.querySelector(".start_button").removeEventListener("click", hideStartScreen);
}

function hideStartScreen() {
	console.log("hideStartScreen")

	document.querySelector("#start_screen").classList.add("hide");


	document.querySelector("#start").addEventListener("click", start);
	document.querySelector("#settings_button").addEventListener("click", settings);



}
//settings music/sounds control//
function settings() {
	console.log("Settings");

	document.querySelector("#scoop_container1").classList.add("pause");
	document.querySelector("#scoop_container2").classList.add("pause");
	document.querySelector("#scoop_container3").classList.add("pause");
	document.querySelector("#scoop_container4").classList.add("pause");
	document.querySelector("#scoop_container5").classList.add("pause");
	document.querySelector("#scoop_container6").classList.add("pause");
	document.querySelector("#scoop_container7").classList.add("pause");
	document.querySelector("#heart_container").classList.add("pause");
	document.querySelector("#bomb_container").classList.add("pause");




	document.querySelector("#time_sprite").classList.add("pause");

	document.querySelector("#settings_screen").classList.remove("hide");
	document.querySelector("#muteMusic_button").addEventListener("click", toggleMuteMusic);
	document.querySelector("#muteFX_button").addEventListener("click", toggleMuteFX);
	document.querySelector("#closeSettings_button").addEventListener("click", closeSettings);

}

function toggleMuteMusic() {
	console.log("toggleMuteMusic");
	if (BgMusic.muted == false) {
		BgMusic.muted = true;
		document.querySelector("#muteMusic_button").classList.add("muted");
	} else {
		BgMusic.muted = false;
		document.querySelector("#muteMusic_button").classList.remove("muted");
	}

}

/* pointFX.muted = fxIsMuted;
    loseFX.muted = fxIsMuted;
	
	*/ //////

/* if (bgMusic.muted == true) {
    bgMusic.muted = false;
} else {
    bgMusic.muted = true; }*/


function toggleMuteFX() {
	console.log("toggleMuteFX");
	if (fxIsMuted == false) {
		fxIsMuted = true;
		document.querySelector("#muteFX_button").classList.add("muted");
	} else {
		fxIsMuted = false;
		document.querySelector("#muteFX_button").classList.remove("muted");
	}
	pointFX.muted = fxIsMuted;
	pointFX2.muted = fxIsMuted;
}

function closeSettings() {
	console.log("closeSettings");

	document.querySelector("#time_sprite").classList.remove("pause");

	document.querySelector("#scoop_container1").classList.remove("pause");
	document.querySelector("#scoop_container2").classList.remove("pause");
	document.querySelector("#scoop_container3").classList.remove("pause");
	document.querySelector("#scoop_container4").classList.remove("pause");
	document.querySelector("#scoop_container5").classList.remove("pause");
	document.querySelector("#scoop_container6").classList.remove("pause");
	document.querySelector("#scoop_container7").classList.remove("pause");
	document.querySelector("#heart_container").classList.remove("pause");
	document.querySelector("#bomb_container").classList.remove("pause");
	document.querySelector("#time_sprite").classList.remove("pause");


	document.querySelector("#settings_screen").classList.add("hide");

	document.querySelector("#muteMusic_button").removeEventListener("click", toggleMuteMusic);
	document.querySelector("#muteFX_button").removeEventListener("click", toggleMuteFX);
	document.querySelector("#closeSettings_button").removeEventListener("click", closeSettings);

}



function start() {

	console.log("start");

	heartLives();
	startScoops();

	BgMusic.play();


	document.querySelector("#gameover_screen").classList.add("hide");
	document.querySelector("#level_complete").classList.add("hide");
	startScoops();

}




function startScoops() {
	console.log("startScoops");

	document.querySelector("#scoop_container1").classList.add("falling", "speed2");
	document.querySelector("#scoop_container2").classList.add("falling", "speed3");
	document.querySelector("#scoop_container3").classList.add("falling", "speed4");
	document.querySelector("#scoop_container4").classList.add("falling", "speed2");
	document.querySelector("#scoop_container5").classList.add("falling", "speed1");
	document.querySelector("#scoop_container6").classList.add("falling", "speed3");
	document.querySelector("#scoop_container7").classList.add("falling", "speed1");
	document.querySelector("#heart_container").classList.add("falling", "speed4");

	document.querySelector("#bomb_container").classList.add("falling");

	document.querySelector("#pause_button").addEventListener("click", pauseGame);

	document.querySelector("#scoop_container1").addEventListener("click", stopScoop1);
	document.querySelector("#scoop_container2").addEventListener("click", stopScoop2);
	document.querySelector("#scoop_container3").addEventListener("click", stopScoop3);
	document.querySelector("#scoop_container4").addEventListener("click", stopScoop4);
	document.querySelector("#scoop_container5").addEventListener("click", stopScoop5);
	document.querySelector("#scoop_container6").addEventListener("click", stopScoop6);
	document.querySelector("#scoop_container7").addEventListener("click", stopScoop7);
	document.querySelector("#heart_container").addEventListener("click", heartLives);

	document.querySelector("#bomb_container").addEventListener("click", bombClicked);
	startTimer();


}

function pauseGame() {
	console.log("pause");

	//is the game paused?
	if (gamePaused == true) {
		console.log("the game is paused");
		//unpause it

		document.querySelector("#scoop_container1").classList.remove("pause");
		document.querySelector("#scoop_container2").classList.remove("pause");
		document.querySelector("#scoop_container3").classList.remove("pause");
		document.querySelector("#scoop_container4").classList.remove("pause");
		document.querySelector("#scoop_container5").classList.remove("pause");
		document.querySelector("#scoop_container6").classList.remove("pause");
		document.querySelector("#scoop_container7").classList.remove("pause");
		document.querySelector("#heart_container").classList.remove("pause");
		document.querySelector("#bomb_container").classList.remove("pause");
		document.querySelector("#time_sprite").classList.remove("pause");


		gamePaused = false;


	} else {
		console.log("the game is unpaused");
		//pause it!

		document.querySelector("#scoop_container1").classList.add("pause");
		document.querySelector("#scoop_container2").classList.add("pause");
		document.querySelector("#scoop_container3").classList.add("pause");
		document.querySelector("#scoop_container4").classList.add("pause");
		document.querySelector("#scoop_container5").classList.add("pause");
		document.querySelector("#scoop_container6").classList.add("pause");
		document.querySelector("#scoop_container7").classList.add("pause");
		document.querySelector("#heart_container").classList.add("pause");
		document.querySelector("#bomb_container").classList.add("pause");
		document.querySelector("#time_sprite").classList.add("pause");

		gamePaused = true;
	}
}


function startTimer() {
	console.log("startTimer");
	document.querySelector("#time_sprite").classList.add("time");
	document.querySelector("#time_sprite").addEventListener("animationend", gameOver);

	setTimeout(gameOver, 90000);

}



function bombClicked() {
	console.log("bombClicked");
	document.querySelector("#bomb_container").removeEventListener("click", bombClicked);
	document.querySelector("#bomb_container").classList.add("pause");
	document.querySelector("#bomb_container .sprite").classList.add("explode");
	document.querySelector("#game").classList.remove("shake");

	document.querySelector("#bomb_container .sprite").addEventListener("animationend", explosion);



}

function explosion() {
	console.log("explosion");
	document.querySelector("#bomb_container .sprite").removeEventListener("animationend", explosion);

	document.querySelector("#game").classList.add("shake");

	document.querySelector("#game").addEventListener("animationend", bombRestart);


}



function bombRestart() {
	console.log("bombRestart");

	document.querySelector("#game").removeEventListener("animationend", bombRestart);

	document.querySelector("#bomb_container").classList.remove("falling");
	document.querySelector("#bomb_container").offsetHeight;
	document.querySelector("#bomb_container").classList.add("falling");
	document.querySelector("#bomb_container").classList.remove("pause");
	document.querySelector("#bomb_container .sprite").classList.remove("explode");
	document.querySelector("#bomb_container").addEventListener("click", bombClicked);

	lives--;
	console.log("you have" + lives + "lives left");

	document.querySelector("#heart .life").classList = lives;

	if (lives == 0) {
		gameOver();
	}

}




function stopScoop1() {
	console.log("stopScoop1");

	document.querySelector("#scoop_container1").removeEventListener("click", stopScoop1);
	document.querySelector("#scoop_container1").classList.add("pause");
	document.querySelector("#scoop_container1 .sprite").classList.add("disappear");
	document.querySelector("#scoop_container1").addEventListener("animationend", restartScoop1);





}

function restartScoop1() {
	console.log("restartScoops");
	document.querySelector("#scoop_container1").classList.remove("pause");
	document.querySelector("#scoop_container1").classList.remove("falling");
	document.querySelector("#scoop_container1").offsetHeight;

	document.querySelector("#scoop_container1").classList.add("falling");

	document.querySelector("#scoop_container1 .sprite").classList.remove("disappear");

	document.querySelector("#scoop_container1").addEventListener("click", stopScoop1);

	points++;
	pointFX.play();

	console.log("Score" + points + " Points");

	document.querySelector("#progress").classList.add("progress_at_" + points);

	document.querySelector("#current_points").textContent = points;


	if (points == 10) {
		levelComplete();
	}



}
//everything abouth functions scoops2//
function stopScoop2() {
	console.log("stopScoop2");

	document.querySelector("#scoop_container2").removeEventListener("click", stopScoop2);
	document.querySelector("#scoop_container2").classList.add("pause");
	document.querySelector("#scoop_container2 .sprite").classList.add("disappear");
	document.querySelector("#scoop_container2").addEventListener("animationend", restartScoop2);
}

function restartScoop2() {
	console.log("restartScoop2");
	document.querySelector("#scoop_container2").classList.remove("pause");
	document.querySelector("#scoop_container2").classList.remove("falling");
	document.querySelector("#scoop_container2").offsetHeight;

	document.querySelector("#scoop_container2").classList.add("falling");

	document.querySelector("#scoop_container2 .sprite").classList.remove("disappear");

	document.querySelector("#scoop_container2").addEventListener("click", stopScoop2);


	points++;
	pointFX.play();

	console.log("Score" + points + " Points");

	document.querySelector("#progress").classList.add("progress_at_" + points);

	document.querySelector("#current_points").textContent = points;

	if (points == 10) {
		levelComplete();
	}


}




/* Scoops3 functions- reestart  and stop*/
function stopScoop3() {
	console.log("stopScoop3");

	document.querySelector("#scoop_container3").removeEventListener("click", stopScoop3);
	document.querySelector("#scoop_container3").classList.add("pause");
	document.querySelector("#scoop_container3 .sprite").classList.add("disappear");
	document.querySelector("#scoop_container3").addEventListener("animationend", restartScoop3);
}

function restartScoop3() {
	console.log("restartScoop3");
	document.querySelector("#scoop_container3").classList.remove("pause");
	document.querySelector("#scoop_container3").classList.remove("falling");
	document.querySelector("#scoop_container3").offsetHeight;

	document.querySelector("#scoop_container3").classList.add("falling");

	document.querySelector("#scoop_container3 .sprite").classList.remove("disappear");

	document.querySelector("#scoop_container3").addEventListener("click", stopScoop3);


	points++;

	pointFX.play();

	console.log("Score" + points + " Points");

	document.querySelector("#progress").classList.add("progress_at_" + points);

	document.querySelector("#current_points").textContent = points;


	if (points == 10) {
		levelComplete();
	}

}
/*Scoops4 all funtions*/
function stopScoop4() {
	console.log("stopScoop4");

	document.querySelector("#scoop_container4").removeEventListener("click", stopScoop4);
	document.querySelector("#scoop_container4").classList.add("pause");
	document.querySelector("#scoop_container4 .sprite").classList.add("disappear");
	document.querySelector("#scoop_container4").addEventListener("animationend", restartScoop4);

	points++;
	pointFX.play();

	console.log("Score" + points + " Points");

	document.querySelector("#progress").classList.add("progress_at_" + points);

	document.querySelector("#current_points").textContent = points;


	if (points == 10) {
		levelComplete();
	}
}

function restartScoop4() {
	console.log("restartScoop4");
	document.querySelector("#scoop_container4").classList.remove("pause");
	document.querySelector("#scoop_container4").classList.remove("falling");
	document.querySelector("#scoop_container4").offsetHeight;

	document.querySelector("#scoop_container4").classList.add("falling");

	document.querySelector("#scoop_container4 .sprite").classList.remove("disappear");

	document.querySelector("#scoop_container4").addEventListener("click", stopScoop4);




}
/*Scoops5 all funtions*/
function stopScoop5() {
	console.log("stopScoop5");

	document.querySelector("#scoop_container5").removeEventListener("click", stopScoop5);
	document.querySelector("#scoop_container5").classList.add("pause");
	document.querySelector("#scoop_container5 .sprite").classList.add("disappear");
	document.querySelector("#scoop_container5").addEventListener("animationend", restartScoop5);
}

function restartScoop5() {
	console.log("restartScoop5");
	document.querySelector("#scoop_container5").classList.remove("pause");
	document.querySelector("#scoop_container5").classList.remove("falling");
	document.querySelector("#scoop_container5").offsetHeight;

	document.querySelector("#scoop_container5").classList.add("falling");

	document.querySelector("#scoop_container5 .sprite").classList.remove("disappear");

	document.querySelector("#scoop_container5").addEventListener("click", stopScoop5);


	points++;
	pointFX.play();

	console.log("Score" + points + " Points");

	document.querySelector("#progress").classList.add("progress_at_" + points);

	document.querySelector("#current_points").textContent = points;

	if (points == 10) {
		levelComplete();
	}

}
/*Scoops6 all funtions*/
function stopScoop6() {
	console.log("stopScoop6");

	document.querySelector("#scoop_container6").removeEventListener("click", stopScoop6);
	document.querySelector("#scoop_container6").classList.add("pause");
	document.querySelector("#scoop_container6 .sprite").classList.add("disappear");
	document.querySelector("#scoop_container6").addEventListener("animationend", restartScoop6);
}

function restartScoop6() {
	console.log("restartScoop6");
	document.querySelector("#scoop_container6").classList.remove("pause");
	document.querySelector("#scoop_container6").classList.remove("falling");
	document.querySelector("#scoop_container6").offsetHeight;

	document.querySelector("#scoop_container6").classList.add("falling");

	document.querySelector("#scoop_container6 .sprite").classList.remove("disappear");

	document.querySelector("#scoop_container6").addEventListener("click", stopScoop6);


	points++;
	pointFX.play();

	console.log("Score" + points + " Points");

	document.querySelector("#progress").classList.add("progress_at_" + points);

	document.querySelector("#current_points").textContent = points;

	if (points == 10) {
		levelComplete();
	}

}


/*sol_7 all funtions*/
function stopScoop7() {
	console.log("stopScoop7");

	document.querySelector("#scoop_container7").removeEventListener("click", stopScoop7);
	document.querySelector("#scoop_container7").classList.add("pause");
	document.querySelector("#scoop_container7 .sprite").classList.add("disappear");
	document.querySelector("#scoop_container7").addEventListener("animationend", restartScoop7);
}

function restartScoop7() {
	console.log("restartScoop7");
	document.querySelector("#scoop_container7").classList.remove("pause");
	document.querySelector("#scoop_container7").classList.remove("falling");
	document.querySelector("#scoop_container7").offsetHeight;

	document.querySelector("#scoop_container7").classList.add("falling");

	document.querySelector("#scoop_container7 .sprite").classList.remove("disappear");

	document.querySelector("#scoop_container7").addEventListener("click", stopScoop7);


	points--;
	pointFX2.play();

	console.log("Score" + points + " Points");

	document.querySelector("#progress").classList.add("progress_at_" + points);

	document.querySelector("#current_points").textContent = points;

	document.querySelector("#progress").classList.remove("progress_at_0");
	document.querySelector("#progress").classList.remove("progress_at_1");
	document.querySelector("#progress").classList.remove("progress_at_2");
	document.querySelector("#progress").classList.remove("progress_at_3");
	document.querySelector("#progress").classList.remove("progress_at_4");
	document.querySelector("#progress").classList.remove("progress_at_5");
	document.querySelector("#progress").classList.remove("progress_at_6");
	document.querySelector("#progress").classList.remove("progress_at_7");
	document.querySelector("#progress").classList.remove("progress_at_8");
	document.querySelector("#progress").classList.remove("progress_at_9");
	document.querySelector("#progress").classList.remove("progress_at_10");

	document.querySelector("#progress").classList.add("progress_at_" + points);

	if (points == 10) {
		levelComplete();
	}

}


/*Heart falling 8 scoop8*/
function heartLives() {
	console.log("heartLives");

	document.querySelector("#heart_container").removeEventListener("click", heartLives);
	document.querySelector("#heart_container").classList.add("pause");
	document.querySelector("#heart_container .sprite").classList.add("disappear");
	document.querySelector("#heart_container").addEventListener("animationend", restartheartLives);


}

function restartheartLives() {
	console.log("restartheartLives");
	document.querySelector("#heart_container").classList.remove("pause");
	document.querySelector("#heart_container").classList.remove("falling");
	document.querySelector("#heart_container").offsetHeight;

	document.querySelector("#heart_container").classList.add("falling");

	document.querySelector("#heart_container .sprite").classList.remove("disappear");

	document.querySelector("#heart_container").addEventListener("click", heartLives);

	points++;
	pointFX.play();

	console.log("Score" + points + " Points");

	document.querySelector("#progress").classList.add("progress_at_" + points);

	document.querySelector("#current_points").textContent = points;

	if (points == 10) {
		levelComplete();
	}


}

function gameOver() {
	console.log("gameOver");
	if (gameEnded == true) {
		clearTimeout();
		if (gameEnded == true) {
			pauseGame();
		}

	} else {
		gameEnded = true;
		clearTimeout();

		console.log("the game is really ended");

		document.querySelector("#game").classList.add("hide");
		document.querySelector("#start").classList.add("hide");
		document.querySelector("#level_complete").classList.add("hide");
		document.querySelector("#gameover_screen").classList.remove("hide");

		document.querySelector("#time_sprite").classList.remove("time");

		document.querySelector("#tryagain").addEventListener("click", restartGame);
	}
}



function levelComplete() {
	console.log("level complete");

	if (gameEnded == true) {
		clearTimeout();
		if (gameEnded == true) {
			pauseGame();

		}

	} else {
		gameEnded = true;
		clearTimeout();
		console.log("the game is really ended");

		document.querySelector("#game").classList.add("hide");
		document.querySelector("#playagain").addEventListener("click", restartGame);

		document.querySelector("#level_complete").classList.remove("hide");
		document.querySelector("#time_sprite").classList.remove("time");


	}

}

function restartGame() {
	console.log("Restart");

	document.querySelector("#playagain").addEventListener("click", restartGame);
	document.querySelector("#tryagain").removeEventListener("click", restartGame);
	document.querySelector("#tryagain").removeEventListener("click", restartGame);
	window.location.reload();
}
