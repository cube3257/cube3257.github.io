window.onscroll = function () { scrollFunction() };

var allRotations = ["L", "F", "R", "B", "U", "D", "L'", "F'", "R'", "B'", "U'", "D'", "L2", "F2", "R2", "B2", "U2", "D2"];

var algorithm = document.getElementById("algorithm");

var isPlaying = false;

var isSecretHidden = true;
var secretNumber = 1;
var secretMaxNumber = 14;


var l1 = document.getElementById("l1")
var l2 = document.getElementById("l2")
var l3 = document.getElementById("l3")
var l4 = document.getElementById("l4")
var l5 = document.getElementById("l5")
var l6 = document.getElementById("l6")
var l7 = document.getElementById("l7")
var l8 = document.getElementById("l8")
var l9 = document.getElementById("l9")

var f1 = document.getElementById("f1")
var f2 = document.getElementById("f2")
var f3 = document.getElementById("f3")
var f4 = document.getElementById("f4")
var f5 = document.getElementById("f5")
var f6 = document.getElementById("f6")
var f7 = document.getElementById("f7")
var f8 = document.getElementById("f8")
var f9 = document.getElementById("f9")

var r1 = document.getElementById("r1")
var r2 = document.getElementById("r2")
var r3 = document.getElementById("r3")
var r4 = document.getElementById("r4")
var r5 = document.getElementById("r5")
var r6 = document.getElementById("r6")
var r7 = document.getElementById("r7")
var r8 = document.getElementById("r8")
var r9 = document.getElementById("r9")

var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var b4 = document.getElementById("b4")
var b5 = document.getElementById("b5")
var b6 = document.getElementById("b6")
var b7 = document.getElementById("b7")
var b8 = document.getElementById("b8")
var b9 = document.getElementById("b9")

var u1 = document.getElementById("u1")
var u2 = document.getElementById("u2")
var u3 = document.getElementById("u3")
var u4 = document.getElementById("u4")
var u5 = document.getElementById("u5")
var u6 = document.getElementById("u6")
var u7 = document.getElementById("u7")
var u8 = document.getElementById("u8")
var u9 = document.getElementById("u9")

var d1 = document.getElementById("d1")
var d2 = document.getElementById("d2")
var d3 = document.getElementById("d3")
var d4 = document.getElementById("d4")
var d5 = document.getElementById("d5")
var d6 = document.getElementById("d6")
var d7 = document.getElementById("d7")
var d8 = document.getElementById("d8")
var d9 = document.getElementById("d9")

var getColor = function (element) {
    return window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue("background-color") : element.style[property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })];
};

function scrollFunction() {
    /*if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }*/
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    //$("html, body").animate({ scrollTop: "0px" }); // Chrome, Firefox etc.   uncomment this only
    //document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    //document.documentElement.scrollTop = 0; // For IE and Firefox
}


function lClicked() {
    var l1color = getColor(l1);
    var l2color = getColor(l2);
    var l3color = getColor(l3);
    var l4color = getColor(l4);
    var l6color = getColor(l6);
    var l7color = getColor(l7);
    var l8color = getColor(l8);
    var l9color = getColor(l9);

    var f1color = getColor(f1);
    var f4color = getColor(f4);
    var f7color = getColor(f7);

    var u1color = getColor(u1);
    var u4color = getColor(u4);
    var u7color = getColor(u7);

    var b3color = getColor(b3);
    var b6color = getColor(b6);
    var b9color = getColor(b9);

    var d7color = getColor(d7);
    var d4color = getColor(d4);
    var d1color = getColor(d1);


    l1.style.backgroundColor = l7color;
    l2.style.backgroundColor = l4color;
    l3.style.backgroundColor = l1color;
    l4.style.backgroundColor = l8color;
    l6.style.backgroundColor = l2color;
    l7.style.backgroundColor = l9color;
    l8.style.backgroundColor = l6color;
    l9.style.backgroundColor = l3color;

    d1.style.backgroundColor = f1color;
    d4.style.backgroundColor = f4color;
    d7.style.backgroundColor = f7color;

    f1.style.backgroundColor = u1color;
    f4.style.backgroundColor = u4color;
    f7.style.backgroundColor = u7color;

    u1.style.backgroundColor = b9color;
    u4.style.backgroundColor = b6color;
    u7.style.backgroundColor = b3color;

    b3.style.backgroundColor = d7color;
    b6.style.backgroundColor = d4color;
    b9.style.backgroundColor = d1color;



    checkResult();
}

function lReverseClicked() {
    var l1color = getColor(l1);
    var l2color = getColor(l2);
    var l3color = getColor(l3);
    var l4color = getColor(l4);
    var l6color = getColor(l6);
    var l7color = getColor(l7);
    var l8color = getColor(l8);
    var l9color = getColor(l9);

    var f1color = getColor(f1);
    var f4color = getColor(f4);
    var f7color = getColor(f7);

    var u1color = getColor(u1);
    var u4color = getColor(u4);
    var u7color = getColor(u7);

    var b3color = getColor(b3);
    var b6color = getColor(b6);
    var b9color = getColor(b9);

    var d7color = getColor(d7);
    var d4color = getColor(d4);
    var d1color = getColor(d1);

    l7.style.backgroundColor = l1color;
    l4.style.backgroundColor = l2color;
    l1.style.backgroundColor = l3color;
    l8.style.backgroundColor = l4color;
    l2.style.backgroundColor = l6color;
    l9.style.backgroundColor = l7color;
    l6.style.backgroundColor = l8color;
    l3.style.backgroundColor = l9color;

    f1.style.backgroundColor = d1color;
    f4.style.backgroundColor = d4color;
    f7.style.backgroundColor = d7color;

    u1.style.backgroundColor = f1color;
    u4.style.backgroundColor = f4color;
    u7.style.backgroundColor = f7color;

    b9.style.backgroundColor = u1color;
    b6.style.backgroundColor = u4color;
    b3.style.backgroundColor = u7color;

    d7.style.backgroundColor = b3color;
    d4.style.backgroundColor = b6color;
    d1.style.backgroundColor = b9color;
    checkResult();
}

function uClicked() {
    var u1color = getColor(u1);
    var u2color = getColor(u2);
    var u3color = getColor(u3);
    var u4color = getColor(u4);
    var u6color = getColor(u6);
    var u7color = getColor(u7);
    var u8color = getColor(u8);
    var u9color = getColor(u9);

    var l1color = getColor(l1);
    var l2color = getColor(l2);
    var l3color = getColor(l3);

    var f1color = getColor(f1);
    var f2color = getColor(f2);
    var f3color = getColor(f3);

    var r1color = getColor(r1);
    var r2color = getColor(r2);
    var r3color = getColor(r3);

    var b1color = getColor(b1);
    var b2color = getColor(b2);
    var b3color = getColor(b3);


    u1.style.backgroundColor = u7color;
    u2.style.backgroundColor = u4color;
    u3.style.backgroundColor = u1color;
    u4.style.backgroundColor = u8color;
    u6.style.backgroundColor = u2color;
    u7.style.backgroundColor = u9color;
    u8.style.backgroundColor = u6color;
    u9.style.backgroundColor = u3color;

    l1.style.backgroundColor = f1color;
    l2.style.backgroundColor = f2color;
    l3.style.backgroundColor = f3color;

    f1.style.backgroundColor = r1color;
    f2.style.backgroundColor = r2color;
    f3.style.backgroundColor = r3color;

    r1.style.backgroundColor = b1color;
    r2.style.backgroundColor = b2color;
    r3.style.backgroundColor = b3color;

    b1.style.backgroundColor = l1color;
    b2.style.backgroundColor = l2color;
    b3.style.backgroundColor = l3color;
    checkResult();
}

function uReverseClicked() {
    var u1color = getColor(u1);
    var u2color = getColor(u2);
    var u3color = getColor(u3);
    var u4color = getColor(u4);
    var u6color = getColor(u6);
    var u7color = getColor(u7);
    var u8color = getColor(u8);
    var u9color = getColor(u9);

    var l1color = getColor(l1);
    var l2color = getColor(l2);
    var l3color = getColor(l3);

    var f1color = getColor(f1);
    var f2color = getColor(f2);
    var f3color = getColor(f3);

    var r1color = getColor(r1);
    var r2color = getColor(r2);
    var r3color = getColor(r3);

    var b1color = getColor(b1);
    var b2color = getColor(b2);
    var b3color = getColor(b3);


    u7.style.backgroundColor = u1color;
    u4.style.backgroundColor = u2color;
    u1.style.backgroundColor = u3color;
    u8.style.backgroundColor = u4color;
    u2.style.backgroundColor = u6color;
    u9.style.backgroundColor = u7color;
    u6.style.backgroundColor = u8color;
    u3.style.backgroundColor = u9color;

    f1.style.backgroundColor = l1color;
    f2.style.backgroundColor = l2color;
    f3.style.backgroundColor = l3color;

    r1.style.backgroundColor = f1color;
    r2.style.backgroundColor = f2color;
    r3.style.backgroundColor = f3color;

    b1.style.backgroundColor = r1color;
    b2.style.backgroundColor = r2color;
    b3.style.backgroundColor = r3color;

    l1.style.backgroundColor = b1color;
    l2.style.backgroundColor = b2color;
    l3.style.backgroundColor = b3color;
    checkResult();
}

function fClicked() {
    var f1color = getColor(f1);
    var f2color = getColor(f2);
    var f3color = getColor(f3);
    var f4color = getColor(f4);
    var f6color = getColor(f6);
    var f7color = getColor(f7);
    var f8color = getColor(f8);
    var f9color = getColor(f9);

    var u7color = getColor(u7);
    var u8color = getColor(u8);
    var u9color = getColor(u9);

    var r1color = getColor(r1);
    var r4color = getColor(r4);
    var r7color = getColor(r7);

    var d1color = getColor(d1);
    var d2color = getColor(d2);
    var d3color = getColor(d3);

    var l3color = getColor(l3);
    var l6color = getColor(l6);
    var l9color = getColor(l9);


    f1.style.backgroundColor = f7color;
    f2.style.backgroundColor = f4color;
    f3.style.backgroundColor = f1color;
    f4.style.backgroundColor = f8color;
    f6.style.backgroundColor = f2color;
    f7.style.backgroundColor = f9color;
    f8.style.backgroundColor = f6color;
    f9.style.backgroundColor = f3color;

    r1.style.backgroundColor = u7color;
    r4.style.backgroundColor = u8color;
    r7.style.backgroundColor = u9color;

    u7.style.backgroundColor = l9color;
    u8.style.backgroundColor = l6color;
    u9.style.backgroundColor = l3color;

    l3.style.backgroundColor = d1color;
    l6.style.backgroundColor = d2color;
    l9.style.backgroundColor = d3color;

    d1.style.backgroundColor = r7color;
    d2.style.backgroundColor = r4color;
    d3.style.backgroundColor = r1color;
    checkResult();
}


function fReverseClicked() {
    var f1color = getColor(f1);
    var f2color = getColor(f2);
    var f3color = getColor(f3);
    var f4color = getColor(f4);
    var f6color = getColor(f6);
    var f7color = getColor(f7);
    var f8color = getColor(f8);
    var f9color = getColor(f9);

    var u7color = getColor(u7);
    var u8color = getColor(u8);
    var u9color = getColor(u9);

    var r1color = getColor(r1);
    var r4color = getColor(r4);
    var r7color = getColor(r7);

    var d1color = getColor(d1);
    var d2color = getColor(d2);
    var d3color = getColor(d3);

    var l3color = getColor(l3);
    var l6color = getColor(l6);
    var l9color = getColor(l9);


    f7.style.backgroundColor = f1color;
    f4.style.backgroundColor = f2color;
    f1.style.backgroundColor = f3color;
    f8.style.backgroundColor = f4color;
    f2.style.backgroundColor = f6color;
    f9.style.backgroundColor = f7color;
    f6.style.backgroundColor = f8color;
    f3.style.backgroundColor = f9color;

    u7.style.backgroundColor = r1color;
    u8.style.backgroundColor = r4color;
    u9.style.backgroundColor = r7color;

    l9.style.backgroundColor = u7color;
    l6.style.backgroundColor = u8color;
    l3.style.backgroundColor = u9color;

    d1.style.backgroundColor = l3color;
    d2.style.backgroundColor = l6color;
    d3.style.backgroundColor = l9color;

    r7.style.backgroundColor = d1color;
    r4.style.backgroundColor = d2color;
    r1.style.backgroundColor = d3color;
    checkResult();
}


function rClicked() {
    var r1color = getColor(r1);
    var r2color = getColor(r2);
    var r3color = getColor(r3);
    var r4color = getColor(r4);
    var r6color = getColor(r6);
    var r7color = getColor(r7);
    var r8color = getColor(r8);
    var r9color = getColor(r9);

    var u3color = getColor(u3);
    var u6color = getColor(u6);
    var u9color = getColor(u9);

    var f3color = getColor(f3);
    var f6color = getColor(f6);
    var f9color = getColor(f9);

    var d3color = getColor(d3);
    var d6color = getColor(d6);
    var d9color = getColor(d9);

    var b1color = getColor(b1);
    var b4color = getColor(b4);
    var b7color = getColor(b7);


    r1.style.backgroundColor = r7color;
    r2.style.backgroundColor = r4color;
    r3.style.backgroundColor = r1color;
    r4.style.backgroundColor = r8color;
    r6.style.backgroundColor = r2color;
    r7.style.backgroundColor = r9color;
    r8.style.backgroundColor = r6color;
    r9.style.backgroundColor = r3color;

    u3.style.backgroundColor = f3color;
    u6.style.backgroundColor = f6color;
    u9.style.backgroundColor = f9color;

    f3.style.backgroundColor = d3color;
    f6.style.backgroundColor = d6color;
    f9.style.backgroundColor = d9color;

    d3.style.backgroundColor = b7color;
    d6.style.backgroundColor = b4color;
    d9.style.backgroundColor = b1color;

    b1.style.backgroundColor = u9color;
    b4.style.backgroundColor = u6color;
    b7.style.backgroundColor = u3color;
    checkResult();
}


function rReverseClicked() {
    var r1color = getColor(r1);
    var r2color = getColor(r2);
    var r3color = getColor(r3);
    var r4color = getColor(r4);
    var r6color = getColor(r6);
    var r7color = getColor(r7);
    var r8color = getColor(r8);
    var r9color = getColor(r9);

    var u3color = getColor(u3);
    var u6color = getColor(u6);
    var u9color = getColor(u9);

    var f3color = getColor(f3);
    var f6color = getColor(f6);
    var f9color = getColor(f9);

    var d3color = getColor(d3);
    var d6color = getColor(d6);
    var d9color = getColor(d9);

    var b1color = getColor(b1);
    var b4color = getColor(b4);
    var b7color = getColor(b7);


    r7.style.backgroundColor = r1color;
    r4.style.backgroundColor = r2color;
    r1.style.backgroundColor = r3color;
    r8.style.backgroundColor = r4color;
    r2.style.backgroundColor = r6color;
    r9.style.backgroundColor = r7color;
    r6.style.backgroundColor = r8color;
    r3.style.backgroundColor = r9color;

    f3.style.backgroundColor = u3color;
    f6.style.backgroundColor = u6color;
    f9.style.backgroundColor = u9color;

    d3.style.backgroundColor = f3color;
    d6.style.backgroundColor = f6color;
    d9.style.backgroundColor = f9color;

    b7.style.backgroundColor = d3color;
    b4.style.backgroundColor = d6color;
    b1.style.backgroundColor = d9color;


    u9.style.backgroundColor = b1color;
    u6.style.backgroundColor = b4color;
    u3.style.backgroundColor = b7color;
    checkResult();
}


function bClicked() {
    var b1color = getColor(b1);
    var b2color = getColor(b2);
    var b3color = getColor(b3);
    var b4color = getColor(b4);
    var b6color = getColor(b6);
    var b7color = getColor(b7);
    var b8color = getColor(b8);
    var b9color = getColor(b9);

    var u1color = getColor(u1);
    var u2color = getColor(u2);
    var u3color = getColor(u3);

    var r3color = getColor(r3);
    var r6color = getColor(r6);
    var r9color = getColor(r9);

    var d7color = getColor(d7);
    var d8color = getColor(d8);
    var d9color = getColor(d9);

    var l1color = getColor(l1);
    var l4color = getColor(l4);
    var l7color = getColor(l7);


    b1.style.backgroundColor = b7color;
    b2.style.backgroundColor = b4color;
    b3.style.backgroundColor = b1color;
    b4.style.backgroundColor = b8color;
    b6.style.backgroundColor = b2color;
    b7.style.backgroundColor = b9color;
    b8.style.backgroundColor = b6color;
    b9.style.backgroundColor = b3color;

    u1.style.backgroundColor = r3color;
    u2.style.backgroundColor = r6color;
    u3.style.backgroundColor = r9color;

    r3.style.backgroundColor = d9color;
    r6.style.backgroundColor = d8color;
    r9.style.backgroundColor = d7color;

    d7.style.backgroundColor = l1color;
    d8.style.backgroundColor = l4color;
    d9.style.backgroundColor = l7color;

    l1.style.backgroundColor = u3color;
    l4.style.backgroundColor = u2color;
    l7.style.backgroundColor = u1color;
    checkResult();
}


function bReverseClicked() {
    var b1color = getColor(b1);
    var b2color = getColor(b2);
    var b3color = getColor(b3);
    var b4color = getColor(b4);
    var b6color = getColor(b6);
    var b7color = getColor(b7);
    var b8color = getColor(b8);
    var b9color = getColor(b9);

    var u1color = getColor(u1);
    var u2color = getColor(u2);
    var u3color = getColor(u3);

    var r3color = getColor(r3);
    var r6color = getColor(r6);
    var r9color = getColor(r9);

    var d7color = getColor(d7);
    var d8color = getColor(d8);
    var d9color = getColor(d9);

    var l1color = getColor(l1);
    var l4color = getColor(l4);
    var l7color = getColor(l7);


    b7.style.backgroundColor = b1color;
    b4.style.backgroundColor = b2color;
    b1.style.backgroundColor = b3color;
    b8.style.backgroundColor = b4color;
    b2.style.backgroundColor = b6color;
    b9.style.backgroundColor = b7color;
    b6.style.backgroundColor = b8color;
    b3.style.backgroundColor = b9color;

    r3.style.backgroundColor = u1color;
    r6.style.backgroundColor = u2color;
    r9.style.backgroundColor = u3color;

    d9.style.backgroundColor = r3color;
    d8.style.backgroundColor = r6color;
    d7.style.backgroundColor = r9color;

    l1.style.backgroundColor = d7color;
    l4.style.backgroundColor = d8color;
    l7.style.backgroundColor = d9color;

    u3.style.backgroundColor = l1color;
    u2.style.backgroundColor = l4color;
    u1.style.backgroundColor = l7color;
    checkResult();
}


function dClicked() {
    var d1color = getColor(d1);
    var d2color = getColor(d2);
    var d3color = getColor(d3);
    var d4color = getColor(d4);
    var d6color = getColor(d6);
    var d7color = getColor(d7);
    var d8color = getColor(d8);
    var d9color = getColor(d9);

    var f7color = getColor(f7);
    var f8color = getColor(f8);
    var f9color = getColor(f9);

    var r7color = getColor(r7);
    var r8color = getColor(r8);
    var r9color = getColor(r9);

    var b7color = getColor(b7);
    var b8color = getColor(b8);
    var b9color = getColor(b9);

    var l7color = getColor(l7);
    var l8color = getColor(l8);
    var l9color = getColor(l9);


    d1.style.backgroundColor = d7color;
    d2.style.backgroundColor = d4color;
    d3.style.backgroundColor = d1color;
    d4.style.backgroundColor = d8color;
    d6.style.backgroundColor = d2color;
    d7.style.backgroundColor = d9color;
    d8.style.backgroundColor = d6color;
    d9.style.backgroundColor = d3color;

    f7.style.backgroundColor = l7color;
    f8.style.backgroundColor = l8color;
    f9.style.backgroundColor = l9color;

    r7.style.backgroundColor = f7color;
    r8.style.backgroundColor = f8color;
    r9.style.backgroundColor = f9color;

    b7.style.backgroundColor = r7color;
    b8.style.backgroundColor = r8color;
    b9.style.backgroundColor = r9color;

    l7.style.backgroundColor = b7color;
    l8.style.backgroundColor = b8color;
    l9.style.backgroundColor = b9color;
    checkResult();
}


function dReverseClicked() {
    var d1color = getColor(d1);
    var d2color = getColor(d2);
    var d3color = getColor(d3);
    var d4color = getColor(d4);
    var d6color = getColor(d6);
    var d7color = getColor(d7);
    var d8color = getColor(d8);
    var d9color = getColor(d9);

    var f7color = getColor(f7);
    var f8color = getColor(f8);
    var f9color = getColor(f9);

    var r7color = getColor(r7);
    var r8color = getColor(r8);
    var r9color = getColor(r9);

    var b7color = getColor(b7);
    var b8color = getColor(b8);
    var b9color = getColor(b9);

    var l7color = getColor(l7);
    var l8color = getColor(l8);
    var l9color = getColor(l9);

    d7.style.backgroundColor = d1color;
    d4.style.backgroundColor = d2color;
    d1.style.backgroundColor = d3color;
    d8.style.backgroundColor = d4color;
    d2.style.backgroundColor = d6color;
    d9.style.backgroundColor = d7color;
    d6.style.backgroundColor = d8color;
    d3.style.backgroundColor = d9color;

    l7.style.backgroundColor = f7color;
    l8.style.backgroundColor = f8color;
    l9.style.backgroundColor = f9color;

    f7.style.backgroundColor = r7color;
    f8.style.backgroundColor = r8color;
    f9.style.backgroundColor = r9color;

    r7.style.backgroundColor = b7color;
    r8.style.backgroundColor = b8color;
    r9.style.backgroundColor = b9color;

    b7.style.backgroundColor = l7color;
    b8.style.backgroundColor = l8color;
    b9.style.backgroundColor = l9color;
    checkResult();
}

function l2Clicked() {
    lClicked()
    lClicked()
}

function f2Clicked() {
    fClicked()
    fClicked()
}

function r2Clicked() {
    rClicked()
    rClicked()
}

function b2Clicked() {
    bClicked()
    bClicked()
}

function d2Clicked() {
    dClicked()
    dClicked()
}

function u2Clicked() {
    uClicked()
    uClicked()
}

function rotateLeftClicked() {
    uClicked();
    dReverseClicked();

    var l4color = getColor(l4);
    var l5color = getColor(l5);
    var l6color = getColor(l6);

    var f4color = getColor(f4);
    var f5color = getColor(f5);
    var f6color = getColor(f6);

    var r4color = getColor(r4);
    var r5color = getColor(r5);
    var r6color = getColor(r6);

    var b4color = getColor(b4);
    var b5color = getColor(b5);
    var b6color = getColor(b6);

    l4.style.backgroundColor = f4color;
    l5.style.backgroundColor = f5color;
    l6.style.backgroundColor = f6color;

    f4.style.backgroundColor = r4color;
    f5.style.backgroundColor = r5color;
    f6.style.backgroundColor = r6color;

    r4.style.backgroundColor = b4color;
    r5.style.backgroundColor = b5color;
    r6.style.backgroundColor = b6color;

    b4.style.backgroundColor = l4color;
    b5.style.backgroundColor = l5color;
    b6.style.backgroundColor = l6color;
}


function rotateRightClicked() {
    uReverseClicked();
    dClicked();

    var l4color = getColor(l4);
    var l5color = getColor(l5);
    var l6color = getColor(l6);

    var f4color = getColor(f4);
    var f5color = getColor(f5);
    var f6color = getColor(f6);

    var r4color = getColor(r4);
    var r5color = getColor(r5);
    var r6color = getColor(r6);

    var b4color = getColor(b4);
    var b5color = getColor(b5);
    var b6color = getColor(b6);

    f4.style.backgroundColor = l4color;
    f5.style.backgroundColor = l5color;
    f6.style.backgroundColor = l6color;

    r4.style.backgroundColor = f4color;
    r5.style.backgroundColor = f5color;
    r6.style.backgroundColor = f6color;

    b4.style.backgroundColor = r4color;
    b5.style.backgroundColor = r5color;
    b6.style.backgroundColor = r6color;

    l4.style.backgroundColor = b4color;
    l5.style.backgroundColor = b5color;
    l6.style.backgroundColor = b6color;
}

function rotateUpClicked() {
    lReverseClicked();
    rClicked();

    var u2color = getColor(u2);
    var u5color = getColor(u5);
    var u8color = getColor(u8);

    var f2color = getColor(f2);
    var f5color = getColor(f5);
    var f8color = getColor(f8);

    var d2color = getColor(d2);
    var d5color = getColor(d5);
    var d8color = getColor(d8);

    var b2color = getColor(b2);
    var b5color = getColor(b5);
    var b8color = getColor(b8);

    u2.style.backgroundColor = f2color;
    u5.style.backgroundColor = f5color;
    u8.style.backgroundColor = f8color;

    f2.style.backgroundColor = d2color;
    f5.style.backgroundColor = d5color;
    f8.style.backgroundColor = d8color;

    d2.style.backgroundColor = b8color;
    d5.style.backgroundColor = b5color;
    d8.style.backgroundColor = b2color;

    b2.style.backgroundColor = u8color;
    b5.style.backgroundColor = u5color;
    b8.style.backgroundColor = u2color;
}

function rotateDownClicked() {
    lClicked();
    rReverseClicked();

    var u2color = getColor(u2);
    var u5color = getColor(u5);
    var u8color = getColor(u8);

    var f2color = getColor(f2);
    var f5color = getColor(f5);
    var f8color = getColor(f8);

    var d2color = getColor(d2);
    var d5color = getColor(d5);
    var d8color = getColor(d8);

    var b2color = getColor(b2);
    var b5color = getColor(b5);
    var b8color = getColor(b8);

    f2.style.backgroundColor = u2color;
    f5.style.backgroundColor = u5color;
    f8.style.backgroundColor = u8color;

    d2.style.backgroundColor = f2color;
    d5.style.backgroundColor = f5color;
    d8.style.backgroundColor = f8color;

    b8.style.backgroundColor = d2color;
    b5.style.backgroundColor = d5color;
    b2.style.backgroundColor = d8color;

    u8.style.backgroundColor = b2color;
    u5.style.backgroundColor = b5color;
    u2.style.backgroundColor = b8color;
}

function rotateLeft2dClicked() {
    fReverseClicked();
    bClicked();

    var l2color = getColor(l2);
    var l5color = getColor(l5);
    var l8color = getColor(l8);

    var u4color = getColor(u4);
    var u5color = getColor(u5);
    var u6color = getColor(u6);

    var r2color = getColor(r2);
    var r5color = getColor(r5);
    var r8color = getColor(r8);

    var d4color = getColor(d4);
    var d5color = getColor(d5);
    var d6color = getColor(d6);

    l2.style.backgroundColor = u6color;
    l5.style.backgroundColor = u5color;
    l8.style.backgroundColor = u4color;

    u4.style.backgroundColor = r2color;
    u5.style.backgroundColor = r5color;
    u6.style.backgroundColor = r8color;

    r2.style.backgroundColor = d6color;
    r5.style.backgroundColor = d5color;
    r8.style.backgroundColor = d4color;

    d4.style.backgroundColor = l2color;
    d5.style.backgroundColor = l5color;
    d6.style.backgroundColor = l8color;
}

function rotateRight2dClicked() {
    fClicked();
    bReverseClicked();

    var l2color = getColor(l2);
    var l5color = getColor(l5);
    var l8color = getColor(l8);

    var u4color = getColor(u4);
    var u5color = getColor(u5);
    var u6color = getColor(u6);

    var r2color = getColor(r2);
    var r5color = getColor(r5);
    var r8color = getColor(r8);

    var d4color = getColor(d4);
    var d5color = getColor(d5);
    var d6color = getColor(d6);

    u6.style.backgroundColor = l2color;
    u5.style.backgroundColor = l5color;
    u4.style.backgroundColor = l8color;

    r2.style.backgroundColor = u4color;
    r5.style.backgroundColor = u5color;
    r8.style.backgroundColor = u6color;

    d6.style.backgroundColor = r2color;
    d5.style.backgroundColor = r5color;
    d4.style.backgroundColor = r8color;

    l2.style.backgroundColor = d4color;
    l5.style.backgroundColor = d5color;
    l8.style.backgroundColor = d6color;
    if (secretNumber > secretMaxNumber) {
        if (isSecretHidden) {
            showHiddenButtons();
            isSecretHidden = false;
        }
    } else {
        secretNumber++;
    }
}

function scrambleClicked() {
    resetClicked();

    isPlaying = true;
    var myAlgorithm = [];

    var rotation = "X"

    for (var i = 1; i < 31; i++) {
        const candidateRotations = allRotations.filter(word => word[0] != [rotation[0]]);
        rotation = candidateRotations[Math.floor(Math.random() * candidateRotations.length)];
        myAlgorithm.push(rotation);


        switch (rotation) {
            case "L":
                lClicked();
                break;
            case "F":
                fClicked();
                break;
            case "R":
                rClicked();
                break;
            case "B":
                bClicked();
                break;
            case "U":
                uClicked();
                break;
            case "D":
                dClicked();
                break;
            case "L'":
                lReverseClicked();
                break;
            case "F'":
                fReverseClicked();
                break;
            case "R'":
                rReverseClicked();
                break;
            case "B'":
                bReverseClicked();
                break;
            case "U'":
                uReverseClicked();
                break;
            case "D'":
                dReverseClicked();
                break;
            case "L2":
                l2Clicked();
                break;
            case "F2":
                f2Clicked();
                break;
            case "R2":
                r2Clicked();
                break;
            case "B2":
                b2Clicked();
                break;
            case "U2":
                u2Clicked();
                break;
            case "D2":
                d2Clicked();
                break;
            default:
            // code block
        }


    }
    algorithm.textContent = myAlgorithm.join("  ")
}

function resetClicked() {
    isPlaying = false;

    algorithm.textContent = "–";

    l1.style.backgroundColor = "#FFA101";
    l2.style.backgroundColor = "#FFA101";
    l3.style.backgroundColor = "#FFA101";
    l4.style.backgroundColor = "#FFA101";
    l5.style.backgroundColor = "#FFA101";
    l6.style.backgroundColor = "#FFA101";
    l7.style.backgroundColor = "#FFA101";
    l8.style.backgroundColor = "#FFA101";
    l9.style.backgroundColor = "#FFA101";

    f1.style.backgroundColor = "#4AD256";
    f2.style.backgroundColor = "#4AD256";
    f3.style.backgroundColor = "#4AD256";
    f4.style.backgroundColor = "#4AD256";
    f5.style.backgroundColor = "#4AD256";
    f6.style.backgroundColor = "#4AD256";
    f7.style.backgroundColor = "#4AD256";
    f8.style.backgroundColor = "#4AD256";
    f9.style.backgroundColor = "#4AD256";

    r1.style.backgroundColor = "#F52002";
    r2.style.backgroundColor = "#F52002";
    r3.style.backgroundColor = "#F52002";
    r4.style.backgroundColor = "#F52002";
    r5.style.backgroundColor = "#F52002";
    r6.style.backgroundColor = "#F52002";
    r7.style.backgroundColor = "#F52002";
    r8.style.backgroundColor = "#F52002";
    r9.style.backgroundColor = "#F52002";

    b1.style.backgroundColor = "#095EC3";
    b2.style.backgroundColor = "#095EC3";
    b3.style.backgroundColor = "#095EC3";
    b4.style.backgroundColor = "#095EC3";
    b5.style.backgroundColor = "#095EC3";
    b6.style.backgroundColor = "#095EC3";
    b7.style.backgroundColor = "#095EC3";
    b8.style.backgroundColor = "#095EC3";
    b9.style.backgroundColor = "#095EC3";

    u1.style.backgroundColor = "white";
    u2.style.backgroundColor = "white";
    u3.style.backgroundColor = "white";
    u4.style.backgroundColor = "white";
    u5.style.backgroundColor = "white";
    u6.style.backgroundColor = "white";
    u7.style.backgroundColor = "white";
    u8.style.backgroundColor = "white";
    u9.style.backgroundColor = "white";

    d1.style.backgroundColor = "#F0FF19";
    d2.style.backgroundColor = "#F0FF19";
    d3.style.backgroundColor = "#F0FF19";
    d4.style.backgroundColor = "#F0FF19";
    d5.style.backgroundColor = "#F0FF19";
    d6.style.backgroundColor = "#F0FF19";
    d7.style.backgroundColor = "#F0FF19";
    d8.style.backgroundColor = "#F0FF19";
    d9.style.backgroundColor = "#F0FF19";

}


function checkboxClicked() {

    var back = document.getElementById("back-side");
    var down = document.getElementById("down-side");
    var left = document.getElementById("left-side");
    var dummy = document.getElementById("dummy-side");

    back.classList.toggle('isHidden');
    down.classList.toggle('isHidden');
    left.classList.toggle('isHidden');
    dummy.classList.toggle('isHidden');

}

function checkResult() {

    if (!isPlaying) {
        return;
    }


    // check upper side
    var u1color = getColor(u1);
    var u2color = getColor(u2);
    var u3color = getColor(u3);
    var u4color = getColor(u4);
    var u5color = getColor(u5);
    var u6color = getColor(u6);
    var u7color = getColor(u7);
    var u8color = getColor(u8);
    var u9color = getColor(u9);
    if (u5color == u1color
        && u5color == u2color
        && u5color == u3color
        && u5color == u4color
        && u5color == u6color
        && u5color == u7color
        && u5color == u8color
        && u5color == u9color) {
    } else {
        return;

    }

    // check left side
    var l1color = getColor(l1);
    var l2color = getColor(l2);
    var l3color = getColor(l3);
    var l4color = getColor(l4);
    var l5color = getColor(l5);
    var l6color = getColor(l6);
    var l7color = getColor(l7);
    var l8color = getColor(l8);
    var l9color = getColor(l9);
    if (l5color == l1color
        && l5color == l2color
        && l5color == l3color
        && l5color == l4color
        && l5color == l6color
        && l5color == l7color
        && l5color == l8color
        && l5color == l9color) {
    } else {
        return;

    }

    // check front side
    var f1color = getColor(f1);
    var f2color = getColor(f2);
    var f3color = getColor(f3);
    var f4color = getColor(f4);
    var f5color = getColor(f5);
    var f6color = getColor(f6);
    var f7color = getColor(f7);
    var f8color = getColor(f8);
    var f9color = getColor(f9);
    if (f5color == f1color
        && f5color == f2color
        && f5color == f3color
        && f5color == f4color
        && f5color == f6color
        && f5color == f7color
        && f5color == f8color
        && f5color == f9color) {
    } else {
        return;

    }

    // check right side
    var r1color = getColor(r1);
    var r2color = getColor(r2);
    var r3color = getColor(r3);
    var r4color = getColor(r4);
    var r5color = getColor(r5);
    var r6color = getColor(r6);
    var r7color = getColor(r7);
    var r8color = getColor(r8);
    var r9color = getColor(r9);
    if (r5color == r1color
        && r5color == r2color
        && r5color == r3color
        && r5color == r4color
        && r5color == r6color
        && r5color == r7color
        && r5color == r8color
        && r5color == r9color) {
    } else {
        return;

    }

    // check back side
    var b1color = getColor(b1);
    var b2color = getColor(b2);
    var b3color = getColor(b3);
    var b4color = getColor(b4);
    var b5color = getColor(b5);
    var b6color = getColor(b6);
    var b7color = getColor(b7);
    var b8color = getColor(b8);
    var b9color = getColor(b9);
    if (b5color == b1color
        && b5color == b2color
        && b5color == b3color
        && b5color == b4color
        && b5color == b6color
        && b5color == b7color
        && b5color == b8color
        && b5color == b9color) {
    } else {
        return;

    }

    // check down side
    var d1color = getColor(d1);
    var d2color = getColor(d2);
    var d3color = getColor(d3);
    var d4color = getColor(d4);
    var d5color = getColor(d5);
    var d6color = getColor(d6);
    var d7color = getColor(d7);
    var d8color = getColor(d8);
    var d9color = getColor(d9);
    if (d5color == d1color
        && d5color == d2color
        && d5color == d3color
        && d5color == d4color
        && d5color == d6color
        && d5color == d7color
        && d5color == d8color
        && d5color == d9color) {
        isPlaying = false;
        setTimeout(showWin, 300);

    } else {
        return;

    }
}

function showWin() {
    window.alert("Congratulations! You did it!")
    if (isSecretHidden) {
        isSecretHidden = false
        showHiddenButtons();

    }
}

function showHiddenButtons() {
    var secretButtons = document.getElementById("secret-buttons");
    secretButtons.classList.toggle('isHidden');

}

function secret1Clicked() {
    uClicked();
    rClicked();
    uReverseClicked();
    rReverseClicked();
}

function secret2Clicked() {
    rClicked();
    uClicked();
    rReverseClicked();
    uReverseClicked();
}


function secret3Clicked() {
    uReverseClicked();
    lReverseClicked();
    uClicked();
    lClicked();
    uClicked();
    fClicked();
    uReverseClicked();
    fReverseClicked();
}

function secret4Clicked() {
    uClicked();
    rClicked();
    uReverseClicked();
    rReverseClicked();
    uReverseClicked();
    fReverseClicked();
    uClicked();
    fClicked();
}

function secret5Clicked() {
    fClicked();
    rClicked();
    uClicked();
    rReverseClicked();
    uReverseClicked();
    fReverseClicked();
}

function secret6Clicked() {
    uReverseClicked();
    rClicked();
    uClicked();
    uClicked();
    rReverseClicked();
    uReverseClicked();
    rClicked();
    uReverseClicked();
    rReverseClicked();
}

function secret7Clicked() {
    uReverseClicked();
    lReverseClicked();
    uClicked();
    rClicked();
    uReverseClicked();
    lClicked();
    uClicked();
    rReverseClicked();
}

function secret8Clicked() {
    uClicked();
    rClicked();
    uReverseClicked();
    lReverseClicked();
    uClicked();
    rReverseClicked();
    uReverseClicked();
    lClicked();
}


