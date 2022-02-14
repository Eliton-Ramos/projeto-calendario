$(function () {  
    function c() {  
     p();  
     let e = h();  
     let r = 0;  
     let u = false;  
     l.empty();  
     while (!u) {  
      if (s[r] == e[0].weekday) {  
       u = true;  
      } else {  
       l.append('<div class="blank"></div>');  
       r++;  
      }  
     }  
     for (let c = 0; c < 42 - r; c++) {  
      if (c >= e.length) {  
       l.append('<div class="blank"></div>');  
      } else {  
       let v = e[c].day;  
       let m = g(new Date(t, n - 1, v)) ? '<div class="today">' : "<div>";  
       l.append(m + "" + v + "</div>");  
      }  
     }  
     let y = o[n - 1];  
     a.css("background-color", y)  
      .find("h1")  
      .text(i[n - 1] + " " + t);  
     f.find("div").css("color", y);  
     l.find(".today").css("background-color", y);  
     d();  
    }  
    function h() {  
     let e = [];  
     for (let r = 1; r < v(t, n) + 1; r++) {  
      e.push({ day: r, weekday: s[m(t, n, r)] });  
     }  
     return e;  
    }  
    function p() {  
     f.empty();  
     for (let e = 0; e < 7; e++) {  
      f.append("<div>" + s[e].substring(0, 3) + "</div>");  
     }  
    }  
    function d() {  
     let t;  
     let n = $("#calendario").css("width", e + "px");  
     n.find((t = "#calendario_weekdays, #calendario_content"))  
      .css("width", e + "px")  
      .find("div")  
      .css({  
       width: e / 7 + "px",  
       height: e / 7 + "px",  
       "line-height": e / 7 + "px",  
      });  
     n.find("#calendario_header")  
      .css({ height: e * (1 / 7) + "px" })  
      .find('i[class^="icon-chevron"]')  
      .css("line-height", e * (1 / 7) + "px");  
    }  
    function v(e, t) {  
     return new Date(e, t, 0).getDate();  
    }  
    function m(e, t, n) {  
     return new Date(e, t - 1, n).getDay();  
    }  
    function g(e) {  
     return y(new Date()) == y(e);  
    }  
    function y(e) {  
     return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate();  
    }  
    function b() {  
     let e = new Date();  
     t = e.getFullYear();  
     n = e.getMonth() + 1;  
    }  
    let e = 480;  
    let t = 2013;  
    let n = 9;  
    let r = [];  
    let i = [  
     "JANEIRO",  
     "FEVEREIRO",  
     "MARÇO",  
     "ABRIL",  
     "MAIO",  
     "JUNHO",  
     "JULHO",  
     "AGOSTO",  
     "SETEMBRO",  
     "OUTUBRO",  
     "NOVEMBRO",  
     "DEZEMBRO",  
    ];  
    let s = [  
     "Domingo",  
     "Segunda",  
     "Terça",  
     "Quarta",  
     "Quinta",  
     "Sexta",  
     "Sabado",  
    ];  
    let o = [  
     "#16a085",  
     "#1abc9c",  
     "#c0392b",  
     "#27ae60",  
     "#FF6860",  
     "#f39c12",  
     "#f1c40f",  
     "#e67e22",  
     "#2ecc71",  
     "#e74c3c",  
     "#d35400",  
     "#2c3e50",  
    ];  
    let u = $("#calendario");  
    let a = u.find("#calendario_header");  
    let f = u.find("#calendario_weekdays");  
    let l = u.find("#calendario_content");  
    b();  
    c();  
    a.find('i[class^="icon-chevron"]').on("click", function () {  
     let e = $(this);  
     let r = function (e) {  
      n = e == "next" ? n + 1 : n - 1;  
      if (n < 1) {  
       n = 12;  
       t--;  
      } else if (n > 12) {  
       n = 1;  
       t++;  
      }  
      c();  
     };  
     if (e.attr("class").indexOf("left") != -1) {  
      r("previous");  
     } else {  
      r("next");  
     }  
    });  
});