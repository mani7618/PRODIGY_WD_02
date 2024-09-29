let starttime, updatedTime, difference, tInterval;
let running = false;
let laps = [];
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapList = document.getElementById('laps');
startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', recordLap);
function start() {
	if (!running) {
		startTime = new Date().getTime();
		tInterval = setInterval(updateTime, 1);
		running = true;
		startButton.style.display = 'none';
		pauseButton.style.display = 'inline-block';
	}
}
function pause() {
	if (running) {
		clearInterval(tInterval);
		running = false;
		startButton.style.display = 'inline-block';
		pauseButton.style.display = 'none';
	}
}
function reset() {
	clearInterval(tInterval);
	running = false;
	display.innerHTML = '00:00:00';
	laps = [];
	lapsList.innerHTML = '';
	startButton.style.display = 'inline-block';
	pauseButton.style.display = 'none';
}
function updateTime() {
	updatedTime = new Date().getTime();
	difference = updatedTime - startTime;
	let hours = Math.floor(difference / (1000 * 60 * 60));
	let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((difference % (1000 * 60)) / 1000);
	let milliseconds = Math.floor((difference % 1000) / 10);
	hours = (hours < 10) ? '0' + hours : hours;
	minutes = (minutes < 10) ? '0' + minutes : minutes;
	seconds = (seconds < 10) ? '0' + seconds : seconds;
	milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;
	display.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}
function recordLap () {
	if (running) {
		let lapTime = display.innerHTML;
		laps.push(lapTime);
		let lapItem = document.createElement('li');
		lapItem.innerText = lapTime;
		lapList.appendChild(lapItem);
	}
}
