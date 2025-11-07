function rein(){
    document.getElementById("a1").value = ''
    document.getElementById("q1").value = ''
    document.getElementById("p1").value = ''
    document.getElementById("r1").value = ''

    document.getElementById("a2").value = ''
    document.getElementById("q2").value = ''
    document.getElementById("p2").value = ''
    document.getElementById("r2").value = ''

    document.getElementById("a3").value = ''
    document.getElementById("q3").value = ''
    document.getElementById("p3").value = ''
    document.getElementById("r3").value = ''

    document.getElementById("n1").value = ''
    document.getElementById("n2").value = ''
    document.getElementById("n3").value = ''
    document.getElementById("n4").value = ''
    document.getElementById("n5").value = ''

    document.getElementById("n6").value = ''
    document.getElementById("n7").value = ''
    document.getElementById("n8").value = ''
    document.getElementById("n9").value = ''
    document.getElementById("n10").value = ''
}

function calc(){
    var resul1 = document.getElementById("q1").value;
    var resul2 = document.getElementById("p1").value;
    var resul3 = document.getElementById("q2").value;
    var resul4 = document.getElementById("p2").value;
    var resul5 = document.getElementById("q3").value;
    var resul6 = document.getElementById("p3").value;
    
    var v1 = Number(resul1) * Number(resul2);
    var v2 = Number(resul3) * Number(resul4);
    var v3 = Number(resul5) * Number(resul6);

    document.getElementById("r1").value = v1;
    document.getElementById("r2").value = v2;
    document.getElementById("r3").value = v3;

    var total = v1 + v2 + v3

    document.getElementById("r4").value = total;

}

function imp(){
    window.print();
}

