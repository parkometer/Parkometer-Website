function toggleModal() {
    document.onkeydown = (e) => {
        if (e.code === 'Escape' && !document.querySelector('.modal').classList.contains('hidden')) {
            document.querySelector('.modal').classList.toggle('hidden');
        }
    };
    document.querySelector('.modal').classList.toggle('hidden');
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function denyConsent() {
    setCookie('hc','false', 365);
    toggleModal();
}

function acceptConsent() {
    setCookie('hc', 'true',-1);
    toggleModal();
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



