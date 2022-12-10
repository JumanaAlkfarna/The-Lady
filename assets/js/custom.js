 // spinner
 let loading = document.querySelector(".page-loader");
 setTimeout((_) => {
   loading.style.display = "none";
 }, 6000);


//nav Link

let linkAll = document.querySelectorAll("nav a");
linkAll.forEach(link => {
    link.onclick = function color() {
        clearStyle()
        link.style.color = "#E91C6A";
    }
});
// تنظيف التنسيقات عن كل الروابط
function clearStyle() {
    linkAll.forEach(element => {
        element.style.color = "#000";
        element.style.background = "";
    });
}

// New Product Link
let buttonsAll = document.querySelectorAll("button.nav-link");
buttonsAll.forEach(link => {
    link.onclick = function color() {
        clearSt()
        link.style.backgroundColor = "#E91C6A";
        link.style.borderColor = "#E91C6A ";

    }
});
// تنظيف التنسيقات عن كل الروابط
function clearSt() {
    buttonsAll.forEach(element => {
        element.style.color = "";
        element.style.background = "";
        element.style.borderColor = "";
    });
}

//

// -------* To on / off internet  *-------
 ononline = _=>{
            console.log("on");
            alert("تمت استعادة الاتصال");
        }
        onoffline = _=>{
            console.log("off");
            alert("تم قطع الاتصال");
    }    


// 

let arrow = document.querySelector(".arrow");
window.onscroll = (_) => {
  if (window.scrollY < 10) {
    arrow.style.opacity = "0";
  } else {
    arrow.style.opacity = "1";
  }
};

//To back for up step by step
arrow.onclick = (_) => {
    console.log("ttt");
    window.scrollBy({
      top: -1000,
      left: 100,
      behavior: "smooth",
    });
};
