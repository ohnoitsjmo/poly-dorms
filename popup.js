/* polyDorms: A Chrome Extension for managing Cal Poly's new dorm names...
 * Developed by Justin Mo & Josiah Pang, Summer 2018
 * Source: https://github.com/ohnoitsjmo/polyDorms
 * Copyright (C) 2018-present
 * 
 * Note: We are in no way affiliated with Cal Poly University Housing
 * 
 * A: yakʔitʸutʸu
 * B: elewexe
 * C: nipumūʔ
 * D: tiłhini
 * E: tsʰɨtqawɨ
 * F: tšɨłkukunɨtš
 * G: tsɨpxatu
 * H: tsɨtkawayu
 */

// Copies the correct text
function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            // This can happen if the user denies clipboard permissions:
            console.error('Could not copy text: ', err);
        });
}

document.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('Text', event.target.innerHTML);
  });

  
//Add Event Listeners to Button Click
document.addEventListener("DOMContentLoaded", function () {
    var playArray = [0, 0, 0, 0, 0, 0, 0, 0];

    // Text
    var eventA = document.getElementById('copy-a');
    var eventB = document.getElementById('copy-b');
    var eventC = document.getElementById('copy-c');
    var eventD = document.getElementById('copy-d');
    var eventE = document.getElementById('copy-e');
    var eventF = document.getElementById('copy-f');
    var eventG = document.getElementById('copy-g');
    var eventH = document.getElementById('copy-h');
    // Audio
    var playA = document.getElementById('play-a');
    var playB = document.getElementById('play-b');
    var playC = document.getElementById('play-c');
    var playD = document.getElementById('play-d');
    var playE = document.getElementById('play-e');
    var playF = document.getElementById('play-f');
    var playG = document.getElementById('play-g');
    var playH = document.getElementById('play-h');
    // Misc
    var aboutLink = document.getElementById('about-link');


    eventA.addEventListener('click', function() {
        copyText('yakʔitʸutʸu');
        eventA.firstChild.data = "Copied!";
        setTimeout(function(){ eventA.firstChild.data = "yakʔitʸutʸu"; }, 1500);
    });
    eventB.addEventListener('click', function() {
        copyText('elewexe');
        eventB.firstChild.data = "Copied!";
        setTimeout(function(){ eventB.firstChild.data = "elewexe"; }, 1500);
    });
    eventC.addEventListener('click', function() {
        copyText('nipumūʔ');
        eventC.firstChild.data = "Copied!";
        setTimeout(function(){ eventC.firstChild.data = "nipumūʔ"; }, 1500);
    });
    eventD.addEventListener('click', function() {
        copyText('tiłhini');
        eventD.firstChild.data = "Copied!";
        setTimeout(function(){ eventD.firstChild.data = "tiłhini"; }, 1500);
    });
    eventE.addEventListener('click', function() {
        copyText('tsʰɨtqawɨ');
        eventE.firstChild.data = "Copied!";
        setTimeout(function(){ eventE.firstChild.data = "tsʰɨtqawɨ"; }, 1500);
    });
    eventF.addEventListener('click', function() {
        copyText('tšɨłkukunɨtš');
        eventF.firstChild.data = "Copied!";
        setTimeout(function(){ eventF.firstChild.data = "tšɨłkukunɨtš"; }, 1500);
    });
    eventG.addEventListener('click', function() {
        copyText('tsɨpxatu');
        eventG.firstChild.data = "Copied!";
        setTimeout(function(){ eventG.firstChild.data = "tsɨpxatu"; }, 1500);
    });
    eventH.addEventListener('click', function() {
        copyText('tsɨtkawayu');
        eventH.firstChild.data = "Copied!";
        setTimeout(function(){ eventH.firstChild.data = "tsɨtkawayu"; }, 1500);
    });

    playA.addEventListener('click', function() {
        var myAudio = new Audio();
        myAudio.src = "assets/a.mp3"
        myAudio.play();
        playArray[0] = 1;
    });
    playB.addEventListener('click', function() {
        var myAudio = new Audio();
        myAudio.src = "assets/b.mp3"
        myAudio.play();
        playArray[1] = 1;
    });
    playC.addEventListener('click', function() {
        var myAudio = new Audio();
        myAudio.src = "assets/c.mp3"
        myAudio.play();
        playArray[2] = 1;
    });
    playD.addEventListener('click', function() {
        var myAudio = new Audio();
        myAudio.src = "assets/d.mp3"
        myAudio.play();
        playArray[3] = 1;
    });
    playE.addEventListener('click', function() {
        var myAudio = new Audio();
        myAudio.src = "assets/e.mp3"
        myAudio.play();
        playArray[4] = 1;
    });
    playF.addEventListener('click', function() {
        var myAudio = new Audio();
        myAudio.src = "assets/f.mp3"
        myAudio.play();
        playArray[5] = 1;
    });
    playG.addEventListener('click', function() {
        var myAudio = new Audio();
        myAudio.src = "assets/g.mp3"
        myAudio.play();
        playArray[6] = 1;
    });
    playH.addEventListener('click', function() {
        var myAudio = new Audio();
        myAudio.src = "assets/h.mp3"
        myAudio.play();
        playArray[7] = 1;
        for (var i=0; i<playArray.length; i++) {
            if (playArray[i] == 0) {
                return;
            }
        }
        myAudio.src = "assets/meme.mp3"
        myAudio.play();
        playArray = [0, 0, 0, 0, 0, 0, 0, 0];
        var sheet = document.createElement('style');
        var element = document.getElementById("stars");
        element.classList.remove("hidden");    
        sheet.innerHTML = ".stars {display:block;}";
        document.body.appendChild(sheet);
        setTimeout(easterEgg, 600);
    });

    function easterEgg() {
        var sheet = document.createElement('style');
        sheet.innerHTML = ".btn-primary {background-color:#b4a76c;}";
        document.body.appendChild(sheet);
        setTimeout(function(){ document.body.removeChild(sheet); }, 500);
        setTimeout(easterEgg2, 900);
    }

    function easterEgg2() {
        var sheet = document.createElement('style');
        sheet.innerHTML = ".btn-primary {background-color:#b4a76c;}";
        document.body.appendChild(sheet);
        setTimeout(function(){ document.body.removeChild(sheet); }, 500);
        setTimeout(easterEgg3, 900);
    }

    function easterEgg3() {
        var sheet = document.createElement('style');
        sheet.innerHTML = ".btn-primary {background-color:#b4a76c;}";
        document.body.appendChild(sheet);
        setTimeout(function(){ document.body.removeChild(sheet); }, 700);
        setTimeout(easterEgg4, 900);
    }

    function easterEgg4() {
        var sheet = document.createElement('style');
        sheet.innerHTML = ".btn-primary {background-color:#b4a76c;}";
        document.body.appendChild(sheet);
        setTimeout(function(){ document.body.removeChild(sheet); }, 500);
        setTimeout(easterEgg5, 900);
    }

    function easterEgg5() {
        var sheet = document.createElement('style');
        sheet.innerHTML = ".btn-primary {background-color:#b4a76c;}";
        document.body.appendChild(sheet);
        setTimeout(function(){ document.body.removeChild(sheet); }, 500);
        var element = document.getElementById("stars");
        element.classList.add("hidden");    
    }

    aboutLink.onclick = function() {
        chrome.tabs.create({active: true, url: "https://github.com/ohnoitsjmo/polyDorms"})
    }
});