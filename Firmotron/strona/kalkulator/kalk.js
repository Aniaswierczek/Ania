/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function rysuj_kwadrat() {
    var kalkulator = document.createElement("div");
    kalkulator.id = 'kalkulator';
    var ms = kalkulator.style;
    ms.width = '500px';
    ms.height = '600px';
    ms.position = 'relative';
    ms.backgroundColor = 'black';
    ms.zIndex = '0';
    ms.marginLeft = 'auto';
    ms.marginRight = 'auto';
    ms.marginTop = '35px';
    var body = document.getElementsByTagName('body')[0]; // przypisanie body do zmiennej
    body.appendChild(kalkulator);

    var logo = document.createElement('div');
    var ls = logo.style;
    logo.innerHTML = "CASIO";
    ls.color = 'white';
    ls.fontStyle = 'italic';
    ls.fontWeight = '900';
    ls.fontFamily = 'Verdana';
    ls.fontSize = '20px';
    ls.float = 'right';
    ls.marginRight = '80px';
    ls.marginTop = '15px';
    ls.marginBottom = '-20px';
    ls.width = '40px';
    ls.height = '10px';
    document.querySelector('#kalkulator').appendChild(logo);

    var gora = document.createElement('div');
    var gs = gora.style;
    gora.id = 'gora';
    gs.width = '460px';
    gs.height = '100px';
    gs.marginTop = '50px';
    gs.marginLeft = '21px';
    gs.float = 'left';
    document.querySelector('#kalkulator').appendChild(gora);


    var pole = document.createElement('div');
    var es = pole.style;
    pole.id = 'kalk_pole';
    pole.innerHTML = "";
    es.overflow = "hidden";
    es.overflowWrap = "break-word";
    es.width = '347px';
    es.height = '100px';
    es.display = 'inline';
    es.backgroundColor = 'gray';
    es.float = 'left';
    es.opacity = '0.5';
    es.marginTop = '0px';
    es.marginLeft = '0px';
    es.color = 'white';
    es.fontSize = '60px';
    es.textAlign = 'right';
    es.lineHeight = '110px';
    document.querySelector('#gora').appendChild(pole);




    var kalkulator = document.getElementById("kalkulator");

    var Clear = document.createElement('div');
    var cs = Clear.style;
    Clear.id = 'kalk_usuwanie';
    cs.fontFamily = 'Orbitron', 'sans-serif';
    Clear.innerHTML = 'C';
    cs.cursor = 'pointer';
    cs.textAlign = 'center';
    cs.lineHeight = '110px';
    cs.fontSize = '50px';
    cs.width = '100px';
    cs.height = '100px';
    cs.float = 'left';
    cs.marginLeft = '13px';
    cs.backgroundColor = 'red';
    document.querySelector('#gora').appendChild(Clear);

    document.getElementById('kalk_usuwanie').onmouseover = function over1()
    {
        cs.backgroundColor = 'gray';
    };
    document.getElementById('kalk_usuwanie').onmouseout = function out1()
    {
        cs.backgroundColor = 'red';
    };
    document.getElementById('kalk_usuwanie').onmousedown = function lighting1()
    {
        cs.opacity = '0.5';
    };
    document.getElementById('kalk_usuwanie').onmouseup = function nonlighting1()
    {
        cs.opacity = '1';
    };


//    var usuwanie = document.createElement("div");
//    usuwanie.id = "kalk_usuwanie";
//    usuwanie.style.width = "50px";
//    usuwanie.style.height = "70px";
//    usuwanie.style.border = "none";
//    usuwanie.style.backgroundColor = '#D00';
//    usuwanie.style.position = "absolute";
//    usuwanie.style.top = "20px";
//    usuwanie.innerHTML = "C";
//    usuwanie.style.right = "20px";
//    usuwanie.style.lineHeight = "70px";
//    usuwanie.style.color = "#FFF";
//    usuwanie.style.fontSize = "30px";
//    usuwanie.style.float = "right";
//    var kalkulator = document.getElementById("kalkulator");
//    kalkulator.appendChild(usuwanie);
//
//    usuwanie.onmouseover = function ()
//    {
//        this.style.backgroundColor = "#f00";
//    };
//
//    usuwanie.onmouseout = function ()
//    {
//        this.style.backgroundColor = "#D00";
//    };


    var przyciski = document.createElement('div');
    var ps = przyciski.style;
    przyciski.id = 'przyciski';
    ps.width = '480px';
    ps.height = '360px';
    ps.paddingTop = '20px';
    ps.float = 'left';
    document.querySelector('#kalkulator').appendChild(przyciski);


    var znaki = [["7", "kalk_siedem"], ["8", "kalk_osiem"], ["9", "kalk_dziewiec"], ["*", "kalk_mnozenie"], ["4", "kalk_cztery"], ["5", "kalk_piec"], ["6", "kalk_szesc"], ["/", "kalk_dzielenie"], ["1", "kalk_jeden"], ["2", "kalk_dwa"], ["3", "kalk_trzy"], ["-", "kalk_odejmowanie"], ["0", "kalk_zero"], [".", "kalk_kropka"], ["=", "kalk_rownosc"], ["+", "kalk_dodawanie"]];

    var przesuniecieX = 0;
    var przesuniecieY = 0;


    for (i = 0; i < znaki.length; i++)
    {
        var element = document.createElement("div");
        element.id = znaki[i][1];
        element.style.width = "100px";
        element.style.height = "80px";
        element.style.float = "left";
        element.style.textAlign = "center";
        element.innerHTML = znaki[i][0];
        element.style.cursor = 'pointer';
        element.style.backgroundColor = 'green';
        element.style.lineHeight = '80px';
        element.style.fontSize = '50px';
        element.style.marginLeft = '20px';
        element.style.marginTop = '20px';
        element.style.fontFamily = 'Orbitron', 'sans-serif';
        przyciski.appendChild(element);

//        if (isNaN(znaki[i][0]) == true && znaki[i][0] != "." && znaki[i][0] != "=")
//        {
//            element.style.backgroundColor = "#F44";
//            element.onmouseover = function () {
//                this.style.backgroundColor = "#F88";
//            };
//            element.onmouseout = function () {
//                this.style.backgroundColor = "#F44";
//            };
//
//        } else if (znaki[i][0] == "=")
//        {
//            element.style.backgroundColor = "#F00";
//            element.onmouseover = function () {
//                this.style.backgroundColor = "#F22";
//            };
//            element.onmouseout = function () {
//                this.style.backgroundColor = "#F00";
//            };
//
//        } else
//        {
//            element.style.backgroundColor = "#CCC";
//            element.onmouseover = function () {
//                this.style.backgroundColor = "#EEE";
//            };
//            element.onmouseout = function () {
//                this.style.backgroundColor = "#CCC";
//            };
//
//        }
        element.onmouseover = function over()
        {
            this.style.backgroundColor = 'lightgreen';
        };
        element.onmouseout = function out()
        {
            this.style.backgroundColor = 'green';
        };
        element.onmousedown = function lighting()
        {
            this.style.opacity = '0.5';
        };
        element.onmouseup = function nonlighting()
        {
            this.style.opacity = '1';
        };
//        element.style.position = "absolute";
//        element.style.top = 120 + przesuniecieY + "px";
//        element.style.left = 20 + przesuniecieX + "px";
//        przesuniecieX = przesuniecieX + 95;
//
//        if (przesuniecieX == 380)
//        {
//            przesuniecieX = 0;
//            przesuniecieY = przesuniecieY + 65;
//
//        }



    }

    var rownania = 0;
    var klik = 0;
    var rodzaj = "";



    function rowna_sie() {
//        zmniejszanie();
        if (klik == 0)

        {
        } else {
            var miejsce = pole.innerHTML.indexOf(rodzaj);
            var druga_liczba = pole.innerHTML.substr(miejsce + 1);
            var dlugosc = druga_liczba.toString().length;
            druga_liczba = parseFloat(druga_liczba);
            pole.innerHTML = pole.innerHTML.slice(0, -dlugosc);
            pole.innerHTML += druga_liczba;
            var tekst = pole.innerHTML;
            var ilosc = pole.innerHTML.length;
            var koniec = tekst.substr(ilosc - 2);
            var koniec1 = tekst.substr(ilosc - 1);
            

            if (rownania == 0 && koniec == "/0")
            {
                pole.innerHTML = "Nie dzieli siê przez zero";
                rownania++;
                rodzaj = "";
            } else if (tekst == "" || rownania == 1 || koniec1 == "/" || koniec1 == "." || koniec1 == "*" || koniec1 == "-" || koniec1 == "+") {

            } else if (klik == 1) {
                var liczenie = pole.innerHTML;
                pole.innerHTML += "=";
                pole.innerHTML += eval(liczenie);
                rownania++;
                rodzaj = "";
            } else if (rownania == 0 && koniec == "/0")
            {
                pole.innerHTML = "Nie dzieli siê przez zero";
                rownania++;
                rodzaj = "";
            }


        }
    }

    function mnozenie1() {
        zmniejszanie();
        if (klik == 0 && rownania == 0 && pole.innerHTML != "")
        {
            var pierwsza = pole.innerHTML;
            pierwsza = parseFloat(pierwsza);
            pole.innerHTML = pierwsza;
            pole.innerHTML += "*";
            klik++;
            rodzaj = "*";

        } else if (pole.innerHTML == "")
        {
        }

    }

    function dodawanie1() {
        zmniejszanie();
        if (klik == 0 && rownania == 0 && pole.innerHTML != "")
        {
            var pierwsza = pole.innerHTML;
            pierwsza = parseFloat(pierwsza);
            pole.innerHTML = pierwsza;
            pole.innerHTML += "+";
            klik++;
            rodzaj = "+";
        } else if (pole.innerHTML == "")
        {
        }
    }

    function  odejmowanie1() {
        zmniejszanie();
        if (klik == 0 && rownania == 0 && pole.innerHTML != "")
        {
            var pierwsza = pole.innerHTML;
            pierwsza = parseFloat(pierwsza);
            pole.innerHTML = pierwsza;
            pole.innerHTML += "-";
            klik++;
            rodzaj = "-";
        } else if (pole.innerHTML == "")
        {
        }
    }
    ;

    function dzielenie1() {
        zmniejszanie();
        if (klik == 0 && rownania == 0 && pole.innerHTML != "")
        {
            var pierwsza = pole.innerHTML;
            pierwsza = parseFloat(pierwsza);
            pole.innerHTML = pierwsza;
            pole.innerHTML += "/";
            klik++;
            rodzaj = "/";
        } else if (pole.innerHTML == "")
        {
        }
    }
    ;

    function kropki() {
        zmniejszanie();

        var ilosc = pole.innerHTML.length;
        var koniec = pole.innerHTML.substr(ilosc - 1);

        if (rownania == 1)
        {

        } else if (klik == 0 && kropka1 == 0 && pole.innerHTML == "") {
            pole.innerHTML += "0.";
            kropka1++;
        } else if (klik == 0 && kropka1 == 0 && koniec == 0) {
            pole.innerHTML += ".";
            kropka1++;
        } else if (klik == 0 && kropka1 == 0 && koniec != 0) {
            pole.innerHTML += ".";
            kropka1++;
        } else if (klik == 1 && kropka2 == 0 && koniec == 0)
        {
            pole.innerHTML += ".";
            kropka2++;
        } else if (klik == 1 && kropka2 == 0 && koniec != 0 && isNaN(koniec) == false)
        {
            pole.innerHTML += ".";
            kropka2++;
        } else if (klik == 1 && kropka2 == 0 && isNaN(koniec) == true)
        {
            pole.innerHTML += "0.";
            kropka2++;
        }
    }
    ;

    function cyfry() {
        zmniejszanie();
        if (rownania == 0)
            pole.innerHTML += this.innerHTML;
        else if (rownania == 1) {
            pole.innerHTML = this.innerHTML;
            rownania = 0;
            klik = 0;
            kropka = 0;
            kropka1 = 0;
            rodzaj = "";
        } else {

        }
    }

    function cyfry_z_klaw(e) {
        zmniejszanie();
        if (rownania == 0)
            pole.innerHTML += e;
        else if (rownania == 1) {
            pole.innerHTML = e;
            rownania = 0;
            klik = 0;
            kropka = 0;
            kropka1 = 0;
            rodzaj = "";
        } else {

        }
    }
    var rownanie = document.getElementById("kalk_rownosc");
    rownanie.onclick = rowna_sie;


    var mnozenie = document.getElementById("kalk_mnozenie");
    mnozenie.onclick = mnozenie1;

    var dodawanie = document.getElementById("kalk_dodawanie");
    dodawanie.onclick = dodawanie1;

    var odejmowanie = document.getElementById("kalk_odejmowanie");
    odejmowanie.onclick = odejmowanie1;

    var dzielenie = document.getElementById("kalk_dzielenie");
    dzielenie.onclick = dzielenie1;

    var kropka = document.getElementById("kalk_kropka");
    var kropka1 = 0;
    var kropka2 = 0;

    kropka.onclick = kropki;




    for (a = 0; a < znaki.length; a++)
    {
        if (isNaN(znaki[a][0]) == false)
        {

            var element = znaki[a][1];
            element1 = document.getElementById(element);
            element1.onclick = cyfry;
        }

    }

    Clear.onclick = function ()
    {
        pole.style.fontSize = '60px';
        klik = 0;
        rownania = 0;
        pole.innerHTML = "";
        kropka1 = 0;
        kropka2 = 0;
        rodzaj = "";
    };

    var b = document.getElementsByTagName('body')[0];

    b.onkeydown = function (a) {
        zmniejszanie();
        var key1;
        if (window.event)
            key1 = a.keyCode;
        else
            key1 = a.which;
        if (key1 == 46)
        {
            pole.style.fontSize = '60px';
            klik = 0;
            rownania = 0;
            pole.innerHTML = "";
            kropka1 = 0;
            kropka2 = 0;
            rodzaj = "";

        } else if (key1 == 13 && rownania == 0)
        {
            rowna_sie();
        }

    };

    b.onkeypress = function (e)
    {
        zmniejszanie();
        var key;
        if (window.event)
            key = e.keyCode;
        else
            key = e.which;


        for (i = 0; i < znaki.length; i++)
        {
            var znak_klaw = String.fromCharCode(key);

            if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == false)
            {
                cyfry_z_klaw(znak_klaw);
                document.getElementById(znaki[i][1]).style.backgroundColor = "#EEE";

            } else if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == true && znak_klaw == ".")
            {
                kropki();

            } else if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == true && znak_klaw == "/")
            {
                dzielenie1();
            } else if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == true && znak_klaw == "*")
            {
                mnozenie1();
            } else if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == true && znak_klaw == "+")
            {
                dodawanie1();
            } else if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == true && znak_klaw == "-")
            {
                odejmowanie1();
            } else if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == true && znak_klaw == "=" && rownania == 0)
            {
                rowna_sie();
            }
        }
    };
    b.onkeyup = function (e)
    {
        zmniejszanie();
        var key;
        if (window.event)
            key = e.keyCode;
        else
            key = e.which;


        for (i = 0; i < znaki.length; i++)
        {
            var znak_klaw = String.fromCharCode(key);

            if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == false)
            {
                document.getElementById(znaki[i][1]).style.backgroundColor = "#CCC";

            } else if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == true && znak_klaw == ".")
            {

            } else if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == true && znak_klaw == "/")
            {

            } else if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == true && znak_klaw == "*")
            {

            } else if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == true && znak_klaw == "+")
            {

            } else if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == true && znak_klaw == "-")
            {

            } else if (znak_klaw == znaki[i][0] && isNaN(znak_klaw) == true && znak_klaw == "=" && rownania == 0)
            {

            }
        }
    };


    window.addEventListener('resize', function (event) {

        if (window.innerWidth < 408 || window.innerHeight < 408) {
            document.getElementById("kalkulator").style.visibility = 'hidden';
        } else {
            document.getElementById("kalkulator").style.visibility = 'visible';

        }
    });

    function zmniejszanie() {
        if (pole.innerHTML.length == 6)
        {
            pole.style.fontSize = "35px";
        } else if (pole.innerHTML.length == 12)
        {
            pole.style.fontSize = "25px";
        }
    }


}

