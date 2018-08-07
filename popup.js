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
        copyyak.firstChild.data = "Copied!";
        setTimeout(function(){ copyyak.firstChild.data = "yakʔitʸutʸu"; }, 1500);
    });
    copyelewexe.addEventListener('click', function() {
        copy('elewexe');
        copyelewexe.firstChild.data = "Copied!";
        setTimeout(function(){ copyelewexe.firstChild.data = "elewexe"; }, 1500);
    });
    copynip.addEventListener('click', function() {
        copy('nipumūʔ');
        copynip.firstChild.data = "Copied!";
        setTimeout(function(){ copynip.firstChild.data = "nipumūʔ"; }, 1500);
    });
    copyti.addEventListener('click', function() {
        copy('tiłhini');
        copyti.firstChild.data = "Copied!";
        setTimeout(function(){ copyti.firstChild.data = "tiłhini"; }, 1500);
    });
    copyts.addEventListener('click', function() {
        copy('tsʰɨtqawɨ');
        copyts.firstChild.data = "Copied!";
        setTimeout(function(){ copyts.firstChild.data = "tsʰɨtqawɨ"; }, 1500);
    });
    copyt.addEventListener('click', function() {
        copy('tšɨłkukunɨtš');
        copyt.firstChild.data = "Copied!";
        setTimeout(function(){ copyt.firstChild.data = "tšɨłkukunɨtš"; }, 1500);
    });
    copytsp.addEventListener('click', function() {
        copy('tsɨpxatu');
        copytsp.firstChild.data = "Copied!";
        setTimeout(function(){ copytsp.firstChild.data = "tsɨpxatu"; }, 1500);
    });
    copytst.addEventListener('click', function() {
        copy('tsɨtkawayu');
        copytst.firstChild.data = "Copied!";
        setTimeout(function(){ copytst.firstChild.data = "tsɨtkawayu"; }, 1500);
    });
});