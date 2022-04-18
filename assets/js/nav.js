const input = document.getElementById("icon");
const btnClick = document.querySelector("#nav__mobile");
btnClick.addEventListener('change', function (e) {
    if (btnClick.checked) {
        input.setAttribute("class", "fas fa-times");
    } else {
        input.setAttribute("class", "fas fa-bars");
    }
})

var index = 0;
var img = [];
function loadAnh() {
    for (var i = 0; i < 3; i++) {
        img[i] = new Image();
        img[i].src = "./assets/img/slide" + i + ".jpg";
    }
}
function next() {
    index = (index + 1) % img.length;
    var anh = document.getElementById("anh");
    anh.src = img[index].src;

}
function prev() {
    console.log("hình cuối:" + img.length);
    index = (index - 1 + img.length) % img.length;
    console.log(index);
    var anh = document.getElementById("anh");
    anh.src = img[index].src;
}

// input
const slide = document.getElementById("range");
const value = document.getElementById("value");
if(value){
    value.textContent = slide.value;
    if(slide){
        slide.oninput = function () {
            value.textContent = this.value;
        }
    }
}

// BUTTON Scroll to top

window.addEventListener("scroll", function() {
    const btnScroll = document.querySelector(".btnScrollTop");
    if (window.pageYOffset > 100) {
        btnScroll.classList.add("active");
    }else{
        btnScroll.classList.remove("active");
    }
});
function autoTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


// DATA FILTER

const listFilter = document.querySelectorAll(".services__btn button");
const listItem = document.querySelectorAll(".services__item");
if(listFilter){
    listFilter.forEach(button => {
        button.onclick = function() {
            listFilter.forEach(button => {
                button.className = "";
            })
            button.className = "active";
    
            // Filter
            const value = button.getAttribute('data-filter');
            listItem.forEach(item => {
                if (item.getAttribute('data-filter') == value || value == "all") {
                    item.style.transform = 'scale(1)';
                    setTimeout(() => {
                        item.style.display = 'block';
                    }, 200);
                } else {
                    item.style.transform = 'scale(0)';
                    setTimeout(() => {
                        item.style.display = 'none'
                    }, 200);
                }
            })
        }
    })
}



// ACTIVE NAV
const activePage = window.location.pathname;
const navLink = document.querySelectorAll('.nav__link');


if(activePage === '/Phone-Repair/'){
    navLink[0].classList.add('active');
}else{
    navLink.forEach((link) => {
        if(link.href.includes(`${activePage}`)){
            link.classList.add('active');
        }
    })
}
