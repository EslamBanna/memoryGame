/* global document, alert, prompt */
var go = prompt("اسمك ايه؟ ");
if (go === "" || go === null) {
    go = "unKnown";
}
document.getElementById('one').innerHTML = "Name: " + "<b>" + go + "</b>";
var d1 = new Date();
var i = 0,
    el = [],
    es,
    score = 0,
    co = [0, 0, 0, 0, 0, 0, 0],
    img1 = ["../images/26.jpg", "../images/27.jpg", "../images/7.jpg"],
    img = [],
    w;
for (w = 0; w < 3; w += 1) {
    es = Math.floor(Math.random() * 3);
    if (co[es] === 0) {
        img[w] = img1[es];
        co[es] = 1;
    } else {
        w -= 1;
    }
}
for (w = 3; w < 6; w += 1) {
    es = Math.floor(Math.random() * 3 + 3);
    if (co[es] === 0) {
        var tt = es - 3;
        img[w] = img1[tt];
        co[es] = 1;
    } else {
        w -= 1;
    }
}
function play(element) {
    'use strict';
    i = i + 1;
    var index = parseInt(element);
    el.push(index);
    var who = document.querySelectorAll('.front')[index];
    who.innerHTML = " ";
    var url = 'url('+ img[index] + ')';
    var where = document.querySelectorAll('.back')[index];
    where.style.backgroundImage = url;
    var car = document.querySelectorAll('.car')[index];
    car.style.transform = 'rotateY(180deg)';
    if (i === 2) {
        if (el[0] === el[1]) {
            i = i - 1;
            el.pop();
        } else if (img[el[0]] === img[el[1]]) {
            score += 1;
            document.getElementById('two').innerHTML = "Score: " + score * 10 + "/30";
            i = 0;
            el = [];
            if (score === 3) {
                var
                    m1 = d1.getMinutes(),
                    s1 = d1.getMilliseconds() / 1000,
                    d2 = new Date(),
                    m2 = d2.getMinutes(),
                    s2 = d2.getMilliseconds() / 1000;
                m2 = m2 - m1;
                s2 = s2 - s1;
                if (s2 < 0) {
                    s2 = 0;
                }
                alert("Congratulations " + go + " You spent " + m2 + " Minutes and " + s2 + " Seconds");
                window.location.assign('index.html');
            }
        }
    } else if (i >= 3) {
        if (img[el[0]] === img[el[1]]) {
            score += 1;
            i = 0;
            el = [];
            if (score === 3) {
                var
                    mo = d1.getMinutes(),
                    so = d1.getMilliseconds() / 1000,
                    dx = new Date(),
                    mt = dx.getMinutes(),
                    st = dx.getMilliseconds() / 1000;
                mt = mt - mo;
                st = st - so;
                if (st < 0) {
                    st = 0;
                }
                alert("Congratulations " + go + " You spent " + mt + " Minutes and " + st + " Seconds");
                window.location.assign('index.html');
            }
        } else {
            document.getElementById(el[0]).style.transform = 'rotateY(360deg)';
            document.getElementById(el[1]).style.transform = 'rotateY(360deg)';
            document.getElementById(el[0]).style.all =  'none';
            document.getElementById(el[1]).style.all =  'none';
            i = 1;
            el = [];
            el.push(element);
        }
        }
}