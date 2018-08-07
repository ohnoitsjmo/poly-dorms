function copy(text){
    if (text == "yakʔitʸutʸu") {
        document.getElementById("textyak").select();
        document.execCommand("Copy", false, null);
    }
    if (text == "elewexe") {
        document.getElementById("textelewexe").select();
        document.execCommand("Copy", false, null);
    }
    else if (text == "nipumūʔ") {
        document.getElementById("textnip").select();
        document.execCommand("Copy", false, null);
    }
    else if (text == "tiłhini") {
        document.getElementById("textti").select();
        document.execCommand("Copy", false, null);
    }
    else if (text == "tsʰɨtqawɨ") {
        document.getElementById("textts").select();
        document.execCommand("Copy", false, null);
    }
    else if (text == "tšɨłkukunɨtš") {
        document.getElementById("textt").select();
        document.execCommand("Copy", false, null);
    }
    else if (text == "tsɨpxatu") {
        document.getElementById("texttsp").select();
        document.execCommand("Copy", false, null);
    }
    else if (text == "tsɨtkawayu") {
        document.getElementById("texttst").select();
        document.execCommand("Copy", false, null);
    }
}

//Add Event Listeners to Button Click
document.addEventListener("DOMContentLoaded", function () {
    var copyyak = document.getElementById('copyyak');
    var copyelewexe = document.getElementById('copyelewexe');
    var copynip = document.getElementById('copynip');
    var copyti = document.getElementById('copyti');
    var copyts = document.getElementById('copyts');
    var copyt = document.getElementById('copyt');
    var copytsp = document.getElementById('copytsp');
    var copytst = document.getElementById('copytst');

    copyyak.addEventListener('click', function() {
        copy('yakʔitʸutʸu');
    });
    copyelewexe.addEventListener('click', function() {
        copy('elewexe');
    });
    copynip.addEventListener('click', function() {
        copy('nipumūʔ');
    });
    copyti.addEventListener('click', function() {
        copy('tiłhini');
    });
    copyts.addEventListener('click', function() {
        copy('tsʰɨtqawɨ');
    });
    copyt.addEventListener('click', function() {
        copy('tšɨłkukunɨtš');
    });
    copytsp.addEventListener('click', function() {
        copy('tsɨpxatu');
    });
    copytst.addEventListener('click', function() {
        copy('tsɨtkawayu');
    });
});