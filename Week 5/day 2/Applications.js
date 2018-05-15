function App(name, licence, stars) {
    this.name = name;
    this.licence = licence.toUpperCase();
    this.stars = parseInt(stars);
}

App.prototype.isCCLicence = function () {
    if (this.licence.indexOf('CC') > - 1) {
        console.log("We using CC licence");
    } else {
        console.log('We dont use CC licence')
    }
}

App.prototype.like = function () {

    this.stars += 1;
}

App.prototype.showStars = function () {

    console.log(this.stars);
}


function WebbApp(name, url, technlogies, licence, stars) {
    App.call(this, name, licence, stars)
    this.url = url;
    this.technlogies = technlogies.toUpperCase();
}

WebbApp.prototype = Object.create(App.prototype);
WebbApp.prototype.constructor = WebbApp;

WebbApp.prototype.getData = function () {
    console.log(this.name + " " + this.url + " " + this.technlogies + " " + this.licence + " " + this.stars);
}

WebbApp.prototype.reactBased = function () {

    var technlogies = this.technlogies.split(',');

    for (var i = 0; i < technlogies.length; i++) {
        if (technlogies[i] == 'REACT') {
            console.log("React is used");

        } else {
            console.log("React inst used");
        }

    }
}

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars)
    this.platforms = platforms.toUpperCase();
}

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function () {

    console.log(this.name + " " + this.platforms + " " + this.licence + " " + this.stars);
}
MobileApp.prototype.forAndroid = function () {

    if (this.platforms.indexOf('ANDROID') > -1) {
        console.log("We use Android");
    } else {

        console.log("We do not use Android")
    }
}

var aplikacija = new App('Instagram', 'CC licence', 6);
var mobapplikacija = new MobileApp('WhatsApp', 'android', "cc", 4);
var webAplikacija = new WebbApp('FB', "http://..", 'Angular, css, html', 'nekaLicenca', 25);
// mobapplikacija.getData();
// webAplikacija.isCCLicence();
// mobapplikacija.isCCLicence();
mobapplikacija.forAndroid();
