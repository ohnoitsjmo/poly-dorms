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
function copy(text){
    if (text == "yakʔitʸutʸu") {
        document.getElementById("text-a").select();
    }
    else if (text == "elewexe") {
        document.getElementById("text-b").select();
    }
    else if (text == "nipumūʔ") {
        document.getElementById("text-c").select();
    }
    else if (text == "tiłhini") {
        document.getElementById("text-d").select();
    }
    else if (text == "tsʰɨtqawɨ") {
        document.getElementById("text-e").select();
    }
    else if (text == "tšɨłkukunɨtš") {
        document.getElementById("text-f").select();
    }
    else if (text == "tsɨpxatu") {
        document.getElementById("text-g").select();
    }
    else if (text == "tsɨtkawayu") {
        document.getElementById("text-h").select();
    }
    document.execCommand("Copy", false, null);
}

//Add Event Listeners to Button Click
document.addEventListener("DOMContentLoaded", function () {
    var eventA = document.getElementById('copy-a');
    var eventB = document.getElementById('copy-b');
    var eventC = document.getElementById('copy-c');
    var eventD = document.getElementById('copy-d');
    var eventE = document.getElementById('copy-e');
    var eventF = document.getElementById('copy-f');
    var eventG = document.getElementById('copy-g');
    var eventH = document.getElementById('copy-h');

    var playA = document.getElementById('play-a');

    eventA.addEventListener('click', function() {
        copy('yakʔitʸutʸu');
        eventA.firstChild.data = "Copied!";
        setTimeout(function(){ eventA.firstChild.data = "yakʔitʸutʸu"; }, 1500);
    });
    eventB.addEventListener('click', function() {
        copy('elewexe');
        eventB.firstChild.data = "Copied!";
        setTimeout(function(){ eventB.firstChild.data = "elewexe"; }, 1500);
    });
    eventC.addEventListener('click', function() {
        copy('nipumūʔ');
        eventC.firstChild.data = "Copied!";
        setTimeout(function(){ eventC.firstChild.data = "nipumūʔ"; }, 1500);
    });
    eventD.addEventListener('click', function() {
        copy('tiłhini');
        eventD.firstChild.data = "Copied!";
        setTimeout(function(){ eventD.firstChild.data = "tiłhini"; }, 1500);
    });
    eventE.addEventListener('click', function() {
        copy('tsʰɨtqawɨ');
        eventE.firstChild.data = "Copied!";
        setTimeout(function(){ eventE.firstChild.data = "tsʰɨtqawɨ"; }, 1500);
    });
    eventF.addEventListener('click', function() {
        copy('tšɨłkukunɨtš');
        eventF.firstChild.data = "Copied!";
        setTimeout(function(){ eventF.firstChild.data = "tšɨłkukunɨtš"; }, 1500);
    });
    eventG.addEventListener('click', function() {
        copy('tsɨpxatu');
        eventG.firstChild.data = "Copied!";
        setTimeout(function(){ eventG.firstChild.data = "tsɨpxatu"; }, 1500);
    });
    eventH.addEventListener('click', function() {
        copy('tsɨtkawayu');
        eventH.firstChild.data = "Copied!";
        setTimeout(function(){ eventH.firstChild.data = "tsɨtkawayu"; }, 1500);
    });

    playA.addEventListener('click', function() {
        var myAudio = new Audio();
        myAudio.src = ""
        myAudio.play();
    });
});