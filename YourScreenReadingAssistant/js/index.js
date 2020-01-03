console.log(
	"%cFigure out the mystery and stop looking at the source, you nerd.",
	"border: 3px solid black; padding: 10px; background: #a11; color: white; font-size: x-large;"
);

var isMobile = false; //initiate as false
// device detection
if (
	/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
		navigator.userAgent
	) ||
	/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
		navigator.userAgent.substr(0, 4)
	)
) {
	isMobile = true;
}
if (isMobile) {
	document.querySelector("#SCP").className += " mobile";
	document.querySelector("#SCP").className = document
		.querySelector("#SCP")
		.className.trim();
	let staticOverlay = document.querySelector("#static");
	staticOverlay.style.opacity = 0.05;
}

document.querySelector("#startup").remove();

var static = new Audio("./audio/static.wav");
static.loop = true;
static.addEventListener("timeupdate", loop, false);
if (!isMobile) {
	static.volume = 0.25;
}
static.play();

var clicked = false;
var fullscreened = false;
fullscreen();
if (
	window.fullScreen ||
	(window.innerWidth == screen.width && window.innerHeight == screen.height)
) {
	fullscreened = true;
}
document.onclick = () => {
	if (!clicked) {
		if (!fullscreened) {
			fullscreen();
		}
		static.play();
	}
	clicked = true;
};

function popup(title, text) {
	let popups = document.querySelector("#popups");
	let popup = document.createElement("div");
	popup.textContent = title + " " + text;
	popups.appendChild(popup);
}

var startup = document.querySelector("#startup");
window.onload = () => {
	let addLine = () => {
		startup.innerHTML += randString(randNumber(80, 160)) + "<br>";
		startup.scrollTo(0, startup.scrollHeight);
	};
	let sayLine = (line) => {
		startup.innerHTML += line + "<br>";
		startup.scrollTo(0, startup.scrollHeight);
	};
	let lineAmount = randNumber(50, 125);
	sayLine("<b>Establishing Mainframe</b>");
	for (let i = 0; i < lineAmount; i++) {
		let time = randNumber(5, 50) * i;
		setTimeout(addLine, time);
	}
	setTimeout(() => {
		new Audio("./audio/beep1.wav").play();
		sayLine(
			`<br><b><u style='color: #aa1;'>[Warning] Forbidden Error ID-${Math.floor(
				randNumber(0, 4999.99)
			)}</u></b>`
		);
		sayLine(
			"<b><u style='color: #aa1;'>[Warning] Internet Access Forbidden</u></b>"
		);
		setTimeout(() => {
			sayLine(
				"<b><u style='color: #a11; cursor: pointer;'>[Danger] Click To Establish P2P Connection</u></b>"
			);

			let onclickContinue = () => {
				startup.removeEventListener("click", onclickContinue);
				new Audio("./audio/beep2.wav").play();
				sayLine("<b>Connecting...</b>");
				sayLine("<b>Sound Feed Connected</b>");
				sayLine("<b>Inputting 05-4 Credentials...</b>");
				setTimeout(() => {
					for (let i = 0; i < 200; i++) {
						setTimeout(addLine, 5 * i);
					}
				}, 3000);
				setTimeout(() => {
					sayLine("<br><b>Success</b>");
					sayLine("<b>Downloading Article...</b>");
				}, 6000);
				setTimeout(() => {
					for (let i = 0; i <= 46; i++) {
						setTimeout(() => {
							sayLine(`Progress ${i}%`);
						}, 5 * i);
					}
				}, 10000);
				setTimeout(() => {
					sayLine("Progress 47%");
				}, 12000);
				setTimeout(() => {
					sayLine("Progress 48%");
				}, 13000);
				setTimeout(() => {
					sayLine("Progress 47%");
				}, 13500);
				setTimeout(() => {
					for (let i = 48; i <= 96; i++) {
						setTimeout(() => {
							sayLine(`Progress ${i}%`);
						}, 5 * (i - 48));
					}
				}, 15000);
				setTimeout(() => {
					for (let i = 97; i <= 100; i++) {
						setTimeout(() => {
							sayLine(`Progress ${i}%`);
						}, 5 * (i - 97));
					}
					setTimeout(() => {
						sayLine("<b>Connection Established</b>");
					}, 25);
				}, 21000);
				setTimeout(() => {
					sayLine("<b>Rendering Document</b>");
				}, 22000);
				setTimeout(() => {
					new Audio("./audio/beep3.wav").play();
					startup.style = `opacity: 0; pointer-events: none; background-color: #a11;`;
				}, 23000);
			};
			startup.addEventListener("click", onclickContinue);
		}, 2000);
	}, lineAmount * 50);
};

function randString(length) {
	var result = "";
	var characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:"<>?[]\;',./'\`~`;
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

function loop() {
	var buffer = 0.7;
	if (this.currentTime > this.duration - buffer) {
		this.currentTime = 0;
		this.play();
	}
}

function fullscreen() {
	var html = document.querySelector("html");
	if (html.requestFullscreen) {
		html.requestFullscreen();
	} else if (html.msRequestFullscreen) {
		html.msRequestFullscreen();
	} else if (html.mozRequestFullScreen) {
		html.mozRequestFullScreen();
	} else if (html.webkitRequestFullscreen) {
		html.webkitRequestFullscreen();
	}
}

var audio = new Audio("");
var selectedAssistant = 1;

document.querySelector("#select-sam").onclick = () => {
	selectedAssistant = 1;
	audio.pause();
	audio.removeEventListener("timeupdate", loop);
};

document.querySelector("#select-adam").onclick = () => {
	selectedAssistant = 2;
	audio.pause();
	audio.removeEventListener("timeupdate", loop);
};

document.querySelector("#select-matt").onclick = () => {
	selectedAssistant = 3;
	audio.pause();
	audio = new Audio("./audio/matt.wav");
	try {
		audio.removeEventListener("timeupdate", loop);
	} catch (e) {}
	audio.addEventListener("timeupdate", loop, false);
	audio.play();
};

var shownRedacted = false;

var commands = {
	"make me a sandwich": function() {
		audio = new Audio(`./audio/makemeasandwich${selectedAssistant}.wav`);
		audio.play();
	},
	"what are you": function() {
		audio = new Audio(`./audio/whatareyou${selectedAssistant}.wav`);
		audio.play();
	},
	"can you hear me": function() {
		audio = new Audio(`./audio/canyouhearme${selectedAssistant}.wav`);
		audio.play();
	},
	"tell me a joke": function() {
		audio = new Audio(`./audio/tellmeajoke${selectedAssistant}.wav`);
		audio.play();
	},
	"where are you": function() {
		audio = new Audio(`./audio/whereareyou${selectedAssistant}.wav`);
		audio.play();
	},
	"can you play an instrument": function() {
		audio = new Audio(`./audio/canyouplayaninstrument${selectedAssistant}.wav`);
		audio.play();
	},
	"what happened to matt": function() {
		audio = new Audio(`./audio/whathappenedtomatt${selectedAssistant}.wav`);
		audio.play();
	},
	"help": function() {
		if (shownRedacted && selectedAssistant == 2) {
			try {
				audio = new Audio(`./audio/showedredacted${selectedAssistant}.wav`);
				audio.play();
			} catch (e) {}
		} else {
			try {
				audio = new Audio(`./audio/showredacted${selectedAssistant}.wav`);
				audio.play();
			} catch (e) {}
			if (selectedAssistant == 2) {
				showRedactedParagraphs();
			}
		}
	},
	"can you help me": function() {
		if (shownRedacted && selectedAssistant == 2) {
			try {
				audio = new Audio(`./audio/showedredacted${selectedAssistant}.wav`);
				audio.play();
			} catch (e) {}
		} else {
			try {
				audio = new Audio(`./audio/showredacted${selectedAssistant}.wav`);
				audio.play();
      } catch (e) {}
			if (selectedAssistant == 2) {
				showRedactedParagraphs();
			}
		}
	}
};

function showRedactedParagraphs() {
	let redactedParagraphs = document.querySelectorAll(".hidden-paragraph");
	for (let i = 0; i < redactedParagraphs.length; i++) {
		redactedParagraphs[i].className += " access-granted";
  }
  shownRedacted = true;
}

if (annyang) {
	annyang.addCommands(commands);

	annyang.debug(true);

	annyang.addCallback("error", (e) => {
		console.error(e);
	});

	annyang.start({ continuous: true });
}

var askBox = document.querySelector("#ask-box");
askBox.addEventListener("input", () => {
	if (commands[askBox.value.toLowerCase()]) {
		commands[askBox.value.toLowerCase()]();
	}
});

function randNumber(min, max) {
	return Math.random() * (max - min) + min;
}

function glitch() {
	// console.log("Glitch.");
	setTimeout(glitch, randNumber(5000, 10000));
}
glitch();
