// radio button name
var radiocheck = document.getElementsByName("paymentmethod");
for (var i = 0; i < radiocheck.length; i++) {
  radiocheck[i].onclick = desc;
}

function desc() {
  if (document.getElementById("creditcard").checked) {
    var creditcardcontent = document.getElementById("cCardContent");
    creditcardcontent.classList.remove("none");
    creditcardcontent.style.display = "block";
  }
}
desc();

// select brand
function selected() {
  var x = document.getElementById("brands");
  // document.getElementById("test").innerHTML = x.value;

  var TmodelList = document.getElementById("teslaModel");
  var MmodelList = document.getElementById("mercModel");
  var BmodelList = document.getElementById("bugattiModel");

  var choosemodel = document.getElementById("choosemodel");

  // DJI
  // img element
  var timg1 = document.getElementById("Timg1");
  var timg2 = document.getElementById("Timg2");
  var timg3 = document.getElementById("Timg3");
  // h1 element
  var Th1 = document.getElementById("Th1");
  var Th2 = document.getElementById("Th2");
  var Th3 = document.getElementById("Th3");
  // price list
  var tp1 = document.getElementById("tp1");
  var tp2 = document.getElementById("tp2");
  var tp3 = document.getElementById("tp3");

  // Hubson
  // img element
  var mimg1 = document.getElementById("Mimg1");
  var mimg2 = document.getElementById("Mimg2");
  var mimg3 = document.getElementById("Mimg3");
  // h1 element
  var Mh1 = document.getElementById("Mh1");
  var Mh2 = document.getElementById("Mh2");
  var Mh3 = document.getElementById("Mh3");
  // price list
  var mp1 = document.getElementById("mp1");
  var mp2 = document.getElementById("mp2");
  var mp3 = document.getElementById("mp3");

  // Autel robotics
  // img element
  var bimg1 = document.getElementById("Bimg1");
  var bimg2 = document.getElementById("Bimg2");
  var bimg3 = document.getElementById("Bimg3");
  // h1 element
  var Bh1 = document.getElementById("Bh1");
  var Bh2 = document.getElementById("Bh2");
  var Bh3 = document.getElementById("Bh3");
  // pricelist
  var bp1 = document.getElementById("bp1");
  var bp2 = document.getElementById("bp2");
  var bp3 = document.getElementById("bp3");

  if (x.value == "merc") {
    TmodelList.classList.add("none");
    MmodelList.classList.remove("none");
    BmodelList.classList.add("none");

    choosemodel.classList.remove("none");

    timg1.classList.add("none");
    Th1.classList.add("none");
    tp1.classList.add("none");

    timg2.classList.add("none");
    Th2.classList.add("none");
    tp2.classList.add("none");

    timg3.classList.add("none");
    Th3.classList.add("none");
    tp3.classList.add("none");

    mimg1.classList.add("none");
    Mh1.classList.add("none");
    mp1.classList.add("none");

    mimg2.classList.add("none");
    Mh2.classList.add("none");
    mp2.classList.add("none");

    mimg3.classList.add("none");
    Mh3.classList.add("none");
    mp3.classList.add("none");

    bimg1.classList.add("none");
    Bh1.classList.add("none");
    bp1.classList.add("none");

    bimg2.classList.add("none");
    Bh2.classList.add("none");
    bp2.classList.add("none");

    bimg3.classList.add("none");
    Bh3.classList.add("none");
    bp3.classList.add("none");

  } else if (x.value == "bugatti") {
    TmodelList.classList.add("none");
    MmodelList.classList.add("none");
    BmodelList.classList.remove("none");

    choosemodel.classList.remove("none");

    timg1.classList.add("none");
    Th1.classList.add("none");
    tp1.classList.add("none");

    timg2.classList.add("none");
    Th2.classList.add("none");
    tp2.classList.add("none");

    timg3.classList.add("none");
    Th3.classList.add("none");
    tp3.classList.add("none");

    mimg1.classList.add("none");
    Mh1.classList.add("none");
    mp1.classList.add("none");

    mimg2.classList.add("none");
    Mh2.classList.add("none");
    mp2.classList.add("none");

    mimg3.classList.add("none");
    Mh3.classList.add("none");
    mp3.classList.add("none");

    bimg1.classList.add("none");
    Bh1.classList.add("none");
    bp1.classList.add("none");

    bimg2.classList.add("none");
    Bh2.classList.add("none");
    bp2.classList.add("none");

    bimg3.classList.add("none");
    Bh3.classList.add("none");
    bp3.classList.add("none");

  } else {
    TmodelList.classList.remove("none");
    MmodelList.classList.add("none");
    BmodelList.classList.add("none");

    choosemodel.classList.remove("none");

    timg1.classList.add("none");
    Th1.classList.add("none");
    tp1.classList.add("none");

    timg2.classList.add("none");
    Th2.classList.add("none");
    tp2.classList.add("none");

    timg3.classList.add("none");
    Th3.classList.add("none");
    tp3.classList.add("none");

    mimg1.classList.add("none");
    Mh1.classList.add("none");
    mp1.classList.add("none");

    mimg2.classList.add("none");
    Mh2.classList.add("none");
    mp2.classList.add("none");

    mimg3.classList.add("none");
    Mh3.classList.add("none");
    mp3.classList.add("none");

    bimg1.classList.add("none");
    Bh1.classList.add("none");
    bp1.classList.add("none");

    bimg2.classList.add("none");
    Bh2.classList.add("none");
    bp2.classList.add("none");

    bimg3.classList.add("none");
    Bh3.classList.add("none");
    bp3.classList.add("none");
  }
}
selected();

function amount(month1, price, total) {
  var ppm = Number(month1.value);
  var amount = price;
  var totalprice = (amount * 0.04 + amount) / ppm;
  total.value = totalprice.toFixed(2);
}

// select model
function model1() {
  var x = document.getElementById("teslaModel");

  var choosemodel = document.getElementById("choosemodel");
  // price tag
  var p1 = document.getElementById("price1");
  var p2 = document.getElementById("price2");
  var p3 = document.getElementById("price3");

  var price1 = Number(p1.value);
  var price2 = Number(p2.value);
  var price3 = Number(p3.value);

  // total price
  var totalprice = document.getElementById("price");

  // payment month
  var month = document.getElementById("paymentTerm");

  // document.getElementById("test").innerHTML = x.value;
  // img element
  // tesla
  var timg1 = document.getElementById("Timg1");
  var timg2 = document.getElementById("Timg2");
  var timg3 = document.getElementById("Timg3");
  // h1 element
  // tesla
  var Th1 = document.getElementById("Th1");
  var Th2 = document.getElementById("Th2");
  var Th3 = document.getElementById("Th3");
  // price list
  // tesla
  var tp1 = document.getElementById("tp1");
  var tp2 = document.getElementById("tp2");
  var tp3 = document.getElementById("tp3");

  if (x.value == "T2") {
    choosemodel.classList.add("none");

    // img element
    timg1.classList.add("none");
    timg2.classList.remove("none");
    timg3.classList.add("none");
    // h1 element
    Th1.classList.add("none");
    Th2.classList.remove("none");
    Th3.classList.add("none");
    // price list
    tp1.classList.add("none");
    tp2.classList.remove("none");
    tp3.classList.add("none");

    month.onchange = function () {
      amount(month, price2, totalprice);
    };
  } else if (x.value == "T3") {
    choosemodel.classList.add("none");

    // img element
    timg1.classList.add("none");
    timg2.classList.add("none");
    timg3.classList.remove("none");
    // h1 element
    Th1.classList.add("none");
    Th2.classList.add("none");
    Th3.classList.remove("none");
    // price list
    tp1.classList.add("none");
    tp2.classList.add("none");
    tp3.classList.remove("none");

    month.onchange = function () {
      amount(month, price3, totalprice);
    };
  
  } else if (x.value == "T1") {
    choosemodel.classList.add("none");
    // img element
    timg1.classList.remove("none");
    timg2.classList.add("none");
    timg3.classList.add("none");
    // h1 element
    Th1.classList.remove("none");
    Th2.classList.add("none");
    Th3.classList.add("none");
    // price list
    tp1.classList.remove("none");
    tp2.classList.add("none");
    tp3.classList.add("none");

    month.onchange = function () {
      amount(month, price1, totalprice);
    };
  } else {
    choosemodel.classList.remove("none");
    timg1.classList.add("none");
    timg2.classList.add("none");
    timg3.classList.add("none");
    // h1 element
    Th1.classList.add("none");
    Th2.classList.add("none");
    Th3.classList.add("none");
    // price list
    tp1.classList.add("none");
    tp2.classList.add("none");
    tp3.classList.add("none");
  }
}

function model2() {
  var y = document.getElementById("mercModel");

  var choosemodel = document.getElementById("choosemodel");

  // price tag
  var p1 = document.getElementById("price5");
  var p2 = document.getElementById("price6");
  var p3 = document.getElementById("price7");

  var price1 = Number(p1.value);
  var price2 = Number(p2.value);
  var price3 = Number(p3.value);

  // total price
  var totalprice = document.getElementById("price");

  // payment month
  var month = document.getElementById("paymentTerm");

  // img element
  // merc
  var mimg1 = document.getElementById("Mimg1");
  var mimg2 = document.getElementById("Mimg2");
  var mimg3 = document.getElementById("Mimg3");
  // h1 element
  // merc
  var Mh1 = document.getElementById("Mh1");
  var Mh2 = document.getElementById("Mh2");
  var Mh3 = document.getElementById("Mh3");
  // price list
  // merc
  var mp1 = document.getElementById("mp1");
  var mp2 = document.getElementById("mp2");
  var mp3 = document.getElementById("mp3");

  if (y.value == "M2") {
    choosemodel.classList.add("none");
    // img element
    mimg1.classList.add("none");
    mimg2.classList.remove("none");
    mimg3.classList.add("none");
    // h1 element
    Mh1.classList.add("none");
    Mh2.classList.remove("none");
    Mh3.classList.add("none");
    // price list
    mp1.classList.add("none");
    mp2.classList.remove("none");
    mp3.classList.add("none");

    month.onchange = function () {
      amount(month, price2, totalprice);
    };
  } else if (y.value == "M3") {
    choosemodel.classList.add("none");
    // img element
    mimg1.classList.add("none");
    mimg2.classList.add("none");
    mimg3.classList.remove("none");
    // h1 element
    Mh1.classList.add("none");
    Mh2.classList.add("none");
    Mh3.classList.remove("none");
    // price list
    mp1.classList.add("none");
    mp2.classList.add("none");
    mp3.classList.remove("none");

    month.onchange = function () {
      amount(month, price3, totalprice);
    };
  
  } else if (y.value == "M1") {
    choosemodel.classList.add("none");
    // img element
    mimg1.classList.remove("none");
    mimg2.classList.add("none");
    mimg3.classList.add("none");
    // h1 element
    Mh1.classList.remove("none");
    Mh2.classList.add("none");
    Mh3.classList.add("none");
    // price list
    mp1.classList.remove("none");
    mp2.classList.add("none");
    mp3.classList.add("none");

    month.onchange = function () {
      amount(month, price1, totalprice);
    };
  } else {
    choosemodel.classList.remove("none");
    mimg1.classList.add("none");
    mimg2.classList.add("none");
    mimg3.classList.add("none");
    // h1 element
    Mh1.classList.add("none");
    Mh2.classList.add("none");
    Mh3.classList.add("none");
    // price list
    mp1.classList.add("none");
    mp2.classList.add("none");
    mp3.classList.add("none");
  }
}

function model3() {
  var y = document.getElementById("bugattiModel");

  var choosemodel = document.getElementById("choosemodel");

  // price tag
  var p1 = document.getElementById("price9");
  var p2 = document.getElementById("price10");
  var p3 = document.getElementById("price11");

  var price1 = Number(p1.value);
  var price2 = Number(p2.value);
  var price3 = Number(p3.value);

  // total price
  var totalprice = document.getElementById("price");

  // payment month
  var month = document.getElementById("paymentTerm");

  // img element
  // bugatti
  var bimg1 = document.getElementById("Bimg1");
  var bimg2 = document.getElementById("Bimg2");
  var bimg3 = document.getElementById("Bimg3");
  // h1 element
  // bugatti
  var Bh1 = document.getElementById("Bh1");
  var Bh2 = document.getElementById("Bh2");
  var Bh3 = document.getElementById("Bh3");
  // pricelist
  // bugatti
  var bp1 = document.getElementById("bp1");
  var bp2 = document.getElementById("bp2");
  var bp3 = document.getElementById("bp3");

  if (y.value == "B2") {
    choosemodel.classList.add("none");
    // img element
    bimg1.classList.add("none");
    bimg2.classList.remove("none");
    bimg3.classList.add("none");
    // h1 element
    Bh1.classList.add("none");
    Bh2.classList.remove("none");
    Bh3.classList.add("none");
    // price list
    bp1.classList.add("none");
    bp2.classList.remove("none");
    bp3.classList.add("none");

    month.onchange = function () {
      amount(month, price2, totalprice);
    };
  } else if (y.value == "B3") {
    choosemodel.classList.add("none");
    // img element
    bimg1.classList.add("none");
    bimg2.classList.add("none");
    bimg3.classList.remove("none");
    // h1 element
    Bh1.classList.add("none");
    Bh2.classList.add("none");
    Bh3.classList.remove("none");
    // price list
    bp1.classList.add("none");
    bp2.classList.add("none");
    bp3.classList.remove("none");

    month.onchange = function () {
      amount(month, price3, totalprice);
    };
  
  } else if (y.value == "B1") {
    choosemodel.classList.add("none");
    // img element
    bimg1.classList.remove("none");
    bimg2.classList.add("none");
    bimg3.classList.add("none");
    // h1 element
    Bh1.classList.remove("none");
    Bh2.classList.add("none");
    Bh3.classList.add("none");
    // price list
    bp1.classList.remove("none");
    bp2.classList.add("none");
    bp3.classList.add("none");

    month.onchange = function () {
      amount(month, price1, totalprice);
    };
  } else {
    choosemodel.classList.remove("none");
    // img element
    bimg1.classList.add("none");
    bimg2.classList.add("none");
    bimg3.classList.add("none");
    // h1 element
    Bh1.classList.add("none");
    Bh2.classList.add("none");
    Bh3.classList.add("none");
    // price list
    bp1.classList.add("none");
    bp2.classList.add("none");
    bp3.classList.add("none");
  }
}

var totalprice = document.getElementById("price");

var form = document.getElementById("purchaseform");
form.onsubmit = function () {
  var validform = this.checkValidity();
  if (!validform) {
    return false;
  }

  var amount = Number(price.value);
  if (amount) {
    var submit = confirm("Confirm to make purchase ?");
    if (submit) {
      var note = "Thanks for your purchase !";
      alert(note);
      window.print();
      return true;
    }
    var note = "Failed to purchase";
    alert(note);
    return true;
  }
  var warning = "Please select a model";
  alert(warning);
  return false;
};
