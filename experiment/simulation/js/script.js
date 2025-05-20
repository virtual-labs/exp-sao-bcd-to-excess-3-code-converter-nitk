// stepNo & Step TITLE
const stepNumber = document.querySelector(".practice-step-no");
const stepTitle = document.querySelector(".practice-step-info");
const taskTitle = document.querySelector(".task-title");

function Refresh() {
  window.location = window.location.href;
}

var n = 1;
function AddData() {
  var a = document.getElementById("A").value;
  var b = document.getElementById("B").value;
  var c = document.getElementById("C").value;
  var d = document.getElementById("D").value;
  var w = document.getElementById("W").value;
  var x = document.getElementById("X").value;
  var y = document.getElementById("Y").value;
  var z = document.getElementById("Z").value;
  var s1 = document.getElementById("S1").value;
  var s19 = document.getElementById("S19").value;
  var s2 = document.getElementById("S2").value;
  var s3 = document.getElementById("S3").value;
  var s4 = document.getElementById("S4").value;
  var s5 = document.getElementById("S5").value;
  var s15 = document.getElementById("S15").value;
  var s17 = document.getElementById("S17").value;
  var s18 = document.getElementById("S18").value;
  var s20 = document.getElementById("S20").value;
  var s16 = document.getElementById("S16").value;
  var s14 = document.getElementById("S14").value;
  var s8 = document.getElementById("S8").value;
  var s9 = document.getElementById("S9").value;
  var s10 = document.getElementById("S10").value;
  var s11 = document.getElementById("S11").value;
  var s6 = document.getElementById("S6").value;
  var s7 = document.getElementById("S7").value;
  var s12 = document.getElementById("S12").value;
  var s13 = document.getElementById("S13").value;
  var s21 = document.getElementById("S21").value;
  var s22 = document.getElementById("S22").value;
  var s23 = document.getElementById("S23").value;

  var cd;
  var caddd;
  var cordnot;
  var yn;
  var cordnotandb;
  var cadddandb;
  var wn;
  var bnot;
  var cadddandbnot;
  var xn;
  if (d == "0") {
    if (S1.checked == true && S19.checked == true) {
      z = "0";
    }
    if (S1.checked == true && S19.checked == false) {
      z = "1";
    }
    if (S1.checked == false && S19.checked == true) {
      z = "0";
    }
    if (S1.checked == false && S19.checked == false) {
      z = "1";
    }
  }
  if (d == "1") {
    if (S1.checked == true && S19.checked == true) {
      z = "0";
    }
    if (S1.checked == true && S19.checked == false) {
      z = "1";
    }
    if (S1.checked == false && S19.checked == true) {
      z = "0";
    }
    if (S1.checked == false && S19.checked == false) {
      z = "0";
    }
  }
  if (d == "0" && c == "0") {
    if (S2.checked == true && S3.checked == true) {
      cd = "0";
    }
    if (S2.checked == true && S3.checked == false) {
      cd = "0";
    }
    if (S2.checked == false && S3.checked == true) {
      cd = "0";
    }
    if (S2.checked == false && S3.checked == false) {
      cd = "0";
    }
  }
  if (d == "0" && c == "1") {
    if (S2.checked == true && S3.checked == true) {
      cd = "0";
    }
    if (S2.checked == true && S3.checked == false) {
      cd = "0";
    }
    if (S2.checked == false && S3.checked == true) {
      cd = "0";
    }
    if (S2.checked == false && S3.checked == false) {
      cd = "0";
    }
  }
  if (d == "1" && c == "0") {
    if (S2.checked == true && S3.checked == true) {
      cd = "0";
    }
    if (S2.checked == true && S3.checked == false) {
      cd = "0";
    }
    if (S2.checked == false && S3.checked == true) {
      cd = "0";
    }
    if (S2.checked == false && S3.checked == false) {
      cd = "0";
    }
  }
  if (d == "1" && c == "1") {
    if (S2.checked == true && S3.checked == true) {
      cd = "0";
    }
    if (S2.checked == true && S3.checked == false) {
      cd = "0";
    }
    if (S2.checked == false && S3.checked == true) {
      cd = "0";
    }
    if (S2.checked == false && S3.checked == false) {
      cd = "1";
    }
  }
  if (d == "0" && c == "0") {
    if (S4.checked == true && S5.checked == true) {
      caddd = "0";
    }
    if (S4.checked == true && S5.checked == false) {
      caddd = "0";
    }
    if (S4.checked == false && S5.checked == true) {
      caddd = "0";
    }
    if (S4.checked == false && S5.checked == false) {
      caddd = "0";
    }
  }
  if (d == "0" && c == "1") {
    if (S4.checked == true && S5.checked == true) {
      caddd = "0";
    }
    if (S4.checked == true && S5.checked == false) {
      caddd = "1";
    }
    if (S4.checked == false && S5.checked == true) {
      caddd = "0";
    }
    if (S4.checked == false && S5.checked == false) {
      caddd = "1";
    }
  }
  if (d == "1" && c == "0") {
    if (S4.checked == true && S5.checked == true) {
      caddd = "0";
    }
    if (S4.checked == true && S5.checked == false) {
      caddd = "0";
    }
    if (S4.checked == false && S5.checked == true) {
      caddd = "1";
    }
    if (S4.checked == false && S5.checked == false) {
      caddd = "1";
    }
  }
  if (d == "1" && c == "1") {
    if (S4.checked == true && S5.checked == true) {
      caddd = "0";
    }
    if (S4.checked == true && S5.checked == false) {
      caddd = "1";
    }
    if (S4.checked == false && S5.checked == true) {
      caddd = "1";
    }
    if (S4.checked == false && S5.checked == false) {
      caddd = "1";
    }
  }
  if (caddd == "1") {
    if (S15.checked == false) {
      cordnot = "0";
    }
    if (S15.checked == true) {
      cordnot = "1";
    }
  }

  if (caddd == "0") {
    cordnot = "1";
  }

  if (cd == "0" && cordnot == "0") {
    if (S18.checked == true && S17.checked == true) {
      yn = "0";
    }
    if (S18.checked == true && S17.checked == false) {
      yn = "0";
    }
    if (S18.checked == false && S17.checked == true) {
      yn = "0";
    }
    if (S18.checked == false && S17.checked == false) {
      yn = "0";
    }
  }
  if (cd == "0" && cordnot == "1") {
    if (S18.checked == true && S17.checked == true) {
      yn = "0";
    }
    if (S18.checked == true && S17.checked == false) {
      yn = "1";
    }
    if (S18.checked == false && S17.checked == true) {
      yn = "0";
    }
    if (S18.checked == false && S17.checked == false) {
      yn = "1";
    }
  }
  if (cd == "1" && cordnot == "0") {
    if (S18.checked == true && S17.checked == true) {
      yn = "0";
    }
    if (S18.checked == true && S17.checked == false) {
      yn = "0";
    }
    if (S18.checked == false && S17.checked == true) {
      yn = "1";
    }
    if (S18.checked == false && S17.checked == false) {
      yn = "1";
    }
  }
  if (cd == "1" && cordnot == "1") {
    if (S18.checked == true && S17.checked == true) {
      yn = "0";
    }
    if (S18.checked == true && S17.checked == false) {
      yn = "1";
    }
    if (S18.checked == false && S17.checked == true) {
      yn = "1";
    }
    if (S18.checked == false && S17.checked == false) {
      yn = "1";
    }
  }
  if (S20.checked == false) {
    y = yn;
  }
  if (S20.checked == true) {
    y = "0";
  }
  if (cordnot == "0" && b == "0") {
    if (S16.checked == true && S14.checked == true) {
      cordnotandb = "0";
    }
    if (S16.checked == true && S14.checked == false) {
      cordnotandb = "0";
    }
    if (S16.checked == false && S14.checked == true) {
      cordnotandb = "0";
    }
    if (S16.checked == false && S14.checked == false) {
      cordnotandb = "0";
    }
  }
  if (cordnot == "0" && b == "1") {
    if (S16.checked == true && S14.checked == true) {
      cordnotandb = "0";
    }
    if (S16.checked == true && S14.checked == false) {
      cordnotandb = "0";
    }
    if (S16.checked == false && S14.checked == true) {
      cordnotandb = "0";
    }
    if (S16.checked == false && S14.checked == false) {
      cordnotandb = "0";
    }
  }
  if (cordnot == "1" && b == "0") {
    if (S16.checked == true && S14.checked == true) {
      cordnotandb = "0";
    }
    if (S16.checked == true && S14.checked == false) {
      cordnotandb = "0";
    }
    if (S16.checked == false && S14.checked == true) {
      cordnotandb = "0";
    }
    if (S16.checked == false && S14.checked == false) {
      cordnotandb = "0";
    }
  }
  if (cordnot == "1" && b == "1") {
    if (S16.checked == true && S14.checked == true) {
      cordnotandb = "0";
    }
    if (S16.checked == true && S14.checked == false) {
      cordnotandb = "0";
    }
    if (S16.checked == false && S14.checked == true) {
      cordnotandb = "0";
    }
    if (S16.checked == false && S14.checked == false) {
      cordnotandb = "1";
    }
  }
  if (caddd == "0" && b == "0") {
    if (S8.checked == true && S9.checked == true) {
      cadddandb = "0";
    }
    if (S8.checked == true && S9.checked == false) {
      cadddandb = "0";
    }
    if (S8.checked == false && S9.checked == true) {
      cadddandb = "0";
    }
    if (S8.checked == false && S9.checked == false) {
      cadddandb = "0";
    }
  }
  if (caddd == "0" && b == "1") {
    if (S8.checked == true && S9.checked == true) {
      cadddandb = "0";
    }
    if (S8.checked == true && S9.checked == false) {
      cadddandb = "0";
    }
    if (S8.checked == false && S9.checked == true) {
      cadddandb = "0";
    }
    if (S8.checked == false && S9.checked == false) {
      cadddandb = "0";
    }
  }
  if (caddd == "1" && b == "0") {
    if (S8.checked == true && S9.checked == true) {
      cadddandb = "0";
    }
    if (S8.checked == true && S9.checked == false) {
      cadddandb = "0";
    }
    if (S8.checked == false && S9.checked == true) {
      cadddandb = "0";
    }
    if (S8.checked == false && S9.checked == false) {
      cadddandb = "0";
    }
  }
  if (caddd == "1" && b == "1") {
    if (S8.checked == true && S9.checked == true) {
      cadddandb = "0";
    }
    if (S8.checked == true && S9.checked == false) {
      cadddandb = "0";
    }
    if (S8.checked == false && S9.checked == true) {
      cadddandb = "0";
    }
    if (S8.checked == false && S9.checked == false) {
      cadddandb = "1";
    }
  }
  if (cadddandb == "0" && a == "0") {
    if (S10.checked == true && S9.checked == true) {
      wn = "0";
    }
    if (S10.checked == true && S9.checked == false) {
      wn = "0";
    }
    if (S10.checked == false && S9.checked == true) {
      wn = "0";
    }
    if (S10.checked == false && S9.checked == false) {
      wn = "0";
    }
  }
  if (cadddandb == "0" && a == "1") {
    if (S10.checked == true && S9.checked == true) {
      wn = "0";
    }
    if (S10.checked == true && S9.checked == false) {
      wn = "1";
    }
    if (S10.checked == false && S9.checked == true) {
      wn = "0";
    }
    if (S10.checked == false && S9.checked == false) {
      wn = "1";
    }
  }
  if (cadddandb == "1" && a == "0") {
    if (S10.checked == true && S9.checked == true) {
      wn = "0";
    }
    if (S10.checked == true && S9.checked == false) {
      wn = "0";
    }
    if (S10.checked == false && S9.checked == true) {
      wn = "1";
    }
    if (S10.checked == false && S9.checked == false) {
      wn = "1";
    }
  }
  if (cadddandb == "1" && a == "1") {
    if (S10.checked == true && S9.checked == true) {
      wn = "0";
    }
    if (S10.checked == true && S9.checked == false) {
      wn = "1";
    }
    if (S10.checked == false && S9.checked == true) {
      wn = "1";
    }
    if (S10.checked == false && S9.checked == false) {
      wn = "1";
    }
  }
  if (S11.checked == false) {
    w = wn;
  }
  if (S11.checked == true) {
    w = 0;
  }
  if (b == "0") {
    bnot = "1";
  }
  if (b == "1") {
    if (S6.checked == true) {
      bnot = "1";
    }
    if (S6.checked == false) {
      bnot = "0";
    }
  }
  if (caddd == "0" && bnot == "0") {
    if (S13.checked == true && S12.checked == true) {
      cadddandbnot = "0";
    }
    if (S13.checked == true && S12.checked == false) {
      cadddandbnot = "0";
    }
    if (S13.checked == false && S12.checked == true) {
      cadddandbnot = "0";
    }
    if (S13.checked == false && S12.checked == false) {
      cadddandbnot = "0";
    }
  }
  if (caddd == "0" && bnot == "1") {
    if (S13.checked == true && S12.checked == true) {
      cadddandbnot = "0";
    }
    if (S13.checked == true && S12.checked == false) {
      cadddandbnot = "0";
    }
    if (S13.checked == false && S12.checked == true) {
      cadddandbnot = "0";
    }
    if (S13.checked == false && S12.checked == false) {
      cadddandbnot = "0";
    }
  }
  if (caddd == "1" && bnot == "0") {
    if (S13.checked == true && S12.checked == true) {
      cadddandbnot = "0";
    }
    if (S13.checked == true && S12.checked == false) {
      cadddandbnot = "0";
    }
    if (S13.checked == false && S12.checked == true) {
      cadddandbnot = "0";
    }
    if (S13.checked == false && S12.checked == false) {
      cadddandbnot = "0";
    }
  }
  if (caddd == "1" && bnot == "1") {
    if (S13.checked == true && S12.checked == true) {
      cadddandbnot = "0";
    }
    if (S13.checked == true && S12.checked == false) {
      cadddandbnot = "0";
    }
    if (S13.checked == false && S12.checked == true) {
      cadddandbnot = "0";
    }
    if (S13.checked == false && S12.checked == false) {
      cadddandbnot = "1";
    }
  }
  if (cordnotandb == "0" && cadddandbnot == "0") {
    if (S22.checked == true && S21.checked == true) {
      xn = "0";
    }
    if (S22.checked == true && S21.checked == false) {
      xn = "0";
    }
    if (S22.checked == false && S21.checked == true) {
      xn = "0";
    }
    if (S22.checked == false && S21.checked == false) {
      xn = "0";
    }
  }
  if (cordnotandb == "0" && cadddandbnot == "1") {
    if (S22.checked == true && S21.checked == true) {
      xn = "0";
    }
    if (S22.checked == true && S21.checked == false) {
      xn = "1";
    }
    if (S22.checked == false && S21.checked == true) {
      xn = "0";
    }
    if (S22.checked == false && S21.checked == false) {
      xn = "1";
    }
  }
  if (cordnotandb == "1" && cadddandbnot == "0") {
    if (S22.checked == true && S21.checked == true) {
      xn = "0";
    }
    if (S22.checked == true && S21.checked == false) {
      xn = "0";
    }
    if (S22.checked == false && S21.checked == true) {
      xn = "1";
    }
    if (S22.checked == false && S21.checked == false) {
      xn = "1";
    }
  }
  if (cordnotandb == "1" && cadddandbnot == "1") {
    if (S22.checked == true && S21.checked == true) {
      xn = "0";
    }
    if (S22.checked == true && S21.checked == false) {
      xn = "1";
    }
    if (S22.checked == false && S21.checked == true) {
      xn = "1";
    }
    if (S22.checked == false && S21.checked == false) {
      xn = "1";
    }
  }
  if (S23.checked == false) {
    x = xn;
  }
  if (S23.checked == true) {
    x = 0;
  }

  var table = document.getElementById("mytable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(-1);
  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);

  cell1.innerHTML = n++;
  cell2.innerHTML = a;
  cell3.innerHTML = b;
  cell4.innerHTML = c;
  cell5.innerHTML = d;
  cell6.innerHTML = w;
  cell7.innerHTML = x;
  cell8.innerHTML = y;
  cell9.innerHTML = z;
}

function clearForm() {
  document.getElementById("mytable").reset();
}

function refreshPage() {
  location.reload(); // Reloads the current page
}
function pr() {
  window.print();
}
