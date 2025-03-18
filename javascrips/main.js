const products = [
  { id: 1, name: "Đồ chơi lúc lắc cho trẻ", price: 120000, image: "sanpham/Bodochoiluc-sosinh.jpg", category: "tre-so-sinh" },
  { id: 2, name: "Bộ gặm nướu Baby Rattle", price: 1499000, image: "sanpham/Ngamnuu-sosinh.jpg", category: "tre-so-sinh" },
  { id: 3, name: "Đồ chơi treo nôi cú mèo xinh xắn Winfun 0865", price: 100000, image: "sanpham/Dochoitreonoi-sosinh.jpg", category: "tre-so-sinh" },
  { id: 4, name: "Kệ chữ A đồ chơi vẹt 2821/23", price: 65000, image: "sanpham/Kechunet.jpg", category: "tre-so-sinh" },
  { id: 5, name: "Thảm chơi cho bé Kinderkraft Smartplay", price: 590000, image: "sanpham/Thảm chơi cho bé Kinderkraft Smartplay-sosinh_200x200.jpg", category: "tre-so-sinh" },
  { id: 6, name: "Xúc xắc gặm nướu sư tử Richell", price: 99000, image: "sanpham/Xucsacgamnuu-sosinh.jpg", category: "tre-so-sinh" },
  { id: 7, name: "Thảm chơi Maboshi xốp XPE 2 mặt 1.8 x 2 m", price: 1499000, image: "sanpham/Thamchoi-sosinh.jpg", category: "tre-so-sinh" },  
  { id: 8, name: "Đồ chơi hình Con voi có nhạc", price: 1499000, image: "sanpham/Dochoihinhvoiconhac-sosinh.jpg", category: "tre-so-sinh" },

  { id: 6, name: "Đồ chơi Sudoku", price: 599000, image: "sanpham/Đồ chơi Sudoku-giaoduc.jpg", category: "giao-duc" },
  { id: 7, name: "Bảng số toán học gỗ A3009", price: 599000, image: "sanpham/Bảng số toán học gỗ A3009.jpg", category: "giao-duc" },
  { id: 8, name: "Bộ bột nặn 10 màu 22037", price: 99000, image: "sanpham/Bộ bột nặn 10 màu 22037.jpg", category: "giao-duc" },
  { id: 9, name: "Đồ chơi lắp ráp gỗ 3D Robotime LS402", price: 99000, image: "sanpham/Đồ chơi lắp ráp gỗ 3D Robotime LS402.jpg", category: "giao-duc" },
  { id: 11, name: "Bộ LEGO Lắp Ráp Máy Bay - XingBao XB-06013", price: 339000, image: "sanpham/Bộ LEGO Lắp Ráp Máy Bay Trực Thăng Quân Sự - XingBao XB-06013.jpg", category: "giao-duc" },
  { id: 12, name: "Bộ đồ chơi LEGO lắp ghép ngôi nhà siêu to", price: 339000, image: "sanpham/fdxto2mms1d4m.jpg", category: "giao-duc" },
  { id: 13, name: "Xe đua F1 điều khiển từ xa DK81036.jpg", price: 339000, image: "sanpham/Xe đua F1 điều khiển từ xa, có đèn led và pin sạc DK81036.jpg", category: "giao-duc" },
  { id: 14, name: "Bộ Cờ vua quốc tế Sato 040", price: 339000, image: "sanpham/Bộ Cờ vua quốc tế có nam châm Sato 040.jpg", category: "giao-duc" },

  { id: 15, name: "Thảm chơi Maboshi xốp XPE 2 mặt 1.8 x 2 m", price: 1499000, image: "sanpham/Thamchoi-sosinh.jpg", category: "sang-tao" },  
  { id: 16, name: "Đồ chơi hình Con voi có nhạc", price: 1499000, image: "sanpham/Dochoihinhvoiconhac-sosinh.jpg", category: "sang-tao" },
  { id: 17, name: "Bộ LEGO Lắp Ráp Máy Bay - XingBao XB-06013", price: 339000, image: "sanpham/Bộ LEGO Lắp Ráp Máy Bay Trực Thăng Quân Sự - XingBao XB-06013.jpg", category: "sang-tao" },
  { id: 18, name: "Bộ đồ chơi LEGO lắp ghép ngôi nhà siêu to", price: 339000, image: "sanpham/fdxto2mms1d4m.jpg", category: "sang-tao" }   
];


function renderProducts() {
    const categories = ["tre-so-sinh", "giao-duc", "sang-tao"]; // Thêm "sang-tao"

    categories.forEach(category => {
        const slider = document.querySelector(`.product-slider[data-category="${category}"]`);
        const productList = products.filter(product => product.category === category);
        renderSlider(slider, productList);
    });

    addSliderEventListeners();
}
function renderSlider(slider, productList) {
    slider.innerHTML = "";

    for (const product of productList) {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${formatProductName(product.name)}</h3>
            <p>${product.price.toLocaleString("vi-VN")} VND</p>
            <button class="buy-button">Mua</button>
        `;
        slider.appendChild(productElement);
    }
}
function formatProductName(name) {
    const words = name.split(" ");
    if (words.length > 5 ) {
        const middleIndex = Math.floor(words.length / 2);
        const firstPart = words.slice(0, middleIndex).join(" ");
        const secondPart = words.slice(middleIndex).join(" ");
        return `${firstPart}<br>${secondPart}`; // Sử dụng <br> để xuống hàng
    }
    return name;
}


function addSliderEventListeners() {
    const sliderButtons = document.querySelectorAll(".slider-button");

    sliderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            const slider = document.querySelector(`.product-slider[data-category="${category}"]`);
            const slideWidth = slider.clientWidth;

            if (button.classList.contains("prev")) {
                slider.scrollLeft -= slideWidth;
            } else {
                slider.scrollLeft += slideWidth;
            }
        });
    });
}

renderProducts();

// Java cho slide show
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }  // Loop back to first slide

    slides[slideIndex - 1].style.display = "block";  // Show the current slide

    setTimeout(showSlides, 5000);  // Thay doi thoi gian show dv milies
}

// Function to move slides manually
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("mySlides").length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = document.getElementsByClassName("mySlides").length }
    showSlidesManually();
}

function showSlidesManually() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    slides[slideIndex - 1].style.display = "block";  // Show the current slide
}


//Code side bar

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  