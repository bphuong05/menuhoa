const flowers = [
    {
        id: 1,
        name: "Lily mix hồng",
        category: "Lily",
        price: 300000,
        featured: true,
        images: [
            "images/lily-mix-hong-1.jpg",
            "images/lily-mix-hong-2.jpg",
            "images/lily-mix-hong-3.jpg"
        ],
        description: "Mẫu Lily mix hồng nhẹ nhàng, phù hợp làm quà tặng và các dịp đặc biệt."
    },
    {
        id: 2,
        name: "Lily đậm nhạt",
        category: "Lily",
        price: 300000,
        featured: true,
        images: [
            "images/lily-dam-nhat-1.jpg",
            "images/lily-dam-nhat-2.jpg",
            "images/lily-dam-nhat-3.jpg"
        ],
        description: "Lily phối sắc đậm nhạt tạo cảm giác mềm mại và nổi bật."
    },
    {
        id: 3,
        name: "Lily ren mix hồng",
        category: "Lily",
        price: 400000,
        featured: false,
        images: [
            "images/lily-ren-mix-hong-1.jpg",
            "images/lily-ren-mix-hong-2.jpg",
            "images/lily-ren-mix-hong-3.jpg"
        ],
        description: "Lily ren mix hồng với cách phối nhẹ nhàng, nữ tính."
    },
    {
        id: 4,
        name: "Lily ren đậm nhạt",
        category: "Lily",
        price: 400000,
        featured: false,
        images: [
            "images/lily-ren-dam-nhat-1.jpg",
            "images/lily-ren-dam-nhat-2.jpg",
            "images/lily-ren-dam-nhat-3.jpg"
        ],
        description: "Mẫu Lily ren phối màu đậm nhạt, phù hợp nhiều dịp."
    },
    {
        id: 5,
        name: "Lily hồng phấn tai mèo",
        category: "Lily",
        price: 500000,
        featured: true,
        images: [
            "images/lily-hong-phan-tai-meo-1.jpg",
            "images/lily-hong-phan-tai-meo-2.jpg",
            "images/lily-hong-phan-tai-meo-3.jpg"
        ],
        description: "Mẫu Lily hồng phấn tai mèo nổi bật với sắc hồng dịu dàng."
    },
    {
        id: 6,
        name: "Sofia mix",
        category: "Sofia",
        price: 300000,
        featured: true,
        images: [
            "images/sofia-mix-1.jpg",
            "images/sofia-mix-2.jpg",
            "images/sofia-mix-3.jpg"
        ],
        description: "Sofia mix với cách phối hoa nhẹ nhàng, trẻ trung."
    },
    {
        id: 7,
        name: "Chiết xạ trơn",
        category: "Chiết xạ",
        price: 300000,
        featured: false,
        images: [
            "images/chiet-xa-tron-1.jpg",
            "images/chiet-xa-tron-2.jpg",
            "images/chiet-xa-tron-3.jpg"
        ],
        description: "Mẫu chiết xạ trơn tối giản và thanh lịch."
    },
    {
        id: 8,
        name: "Chiết xạ mix",
        category: "Chiết xạ",
        price: 300000,
        featured: false,
        images: [
            "images/chiet-xa-mix-1.jpg",
            "images/chiet-xa-mix-2.jpg",
            "images/chiet-xa-mix-3.jpg"
        ],
        description: "Chiết xạ mix với cách phối màu đa dạng và nổi bật."
    },
    {
        id: 9,
        name: "Hồng đỏ form cơ bản",
        category: "Hồng đỏ",
        price: 350000,
        featured: true,
        images: [
            "images/hong-do-co-ban-1.jpg",
            "images/hong-do-co-ban-2.jpg",
            "images/hong-do-co-ban-3.jpg"
        ],
        description: "Form hồng đỏ cơ bản, sang trọng và dễ lựa chọn."
    },
    {
        id: 10,
        name: "Hồng đỏ form premium",
        category: "Hồng đỏ",
        price: null,
        featured: false,
        images: [
            "images/hong-do-premium-1.jpg",
            "images/hong-do-premium-2.jpg",
            "images/hong-do-premium-3.jpg"
        ],
        description: "Form hồng đỏ premium. Vui lòng liên hệ tiệm để được báo giá theo mẫu."
    },
    {
        id: 11,
        name: "Mix hồng",
        category: "Mix hồng",
        price: 300000,
        featured: true,
        images: [
            "images/mix-hong-1.jpg",
            "images/mix-hong-2.jpg",
            "images/mix-hong-3.jpg"
        ],
        description: "Mẫu mix hồng nhẹ nhàng, phù hợp tặng người thân và bạn bè."
    },
    {
        id: 12,
        name: "Cẩm tú cầu xanh dương",
        category: "Cẩm tú cầu",
        price: 300000,
        featured: false,
        images: [
            "images/cam-tu-cau-xanh-duong-1.jpg",
            "images/cam-tu-cau-xanh-duong-2.jpg",
            "images/cam-tu-cau-xanh-duong-3.jpg"
        ],
        description: "Cẩm tú cầu xanh dương với sắc hoa dịu mắt."
    },
    {
        id: 13,
        name: "Cẩm tú cầu hồng",
        category: "Cẩm tú cầu",
        price: 300000,
        featured: false,
        images: [
            "images/cam-tu-cau-hong-1.jpg",
            "images/cam-tu-cau-hong-2.jpg",
            "images/cam-tu-cau-hong-3.jpg"
        ],
        description: "Cẩm tú cầu hồng ngọt ngào, nữ tính."
    },
    {
        id: 14,
        name: "Cẩm tú cầu xanh lá",
        category: "Cẩm tú cầu",
        price: 300000,
        featured: false,
        images: [
            "images/cam-tu-cau-xanh-la-1.jpg",
            "images/cam-tu-cau-xanh-la-2.jpg",
            "images/cam-tu-cau-xanh-la-3.jpg"
        ],
        description: "Cẩm tú cầu xanh lá mang cảm giác tươi mát và tự nhiên."
    },
    {
        id: 15,
        name: "Ốc quế",
        category: "Ốc quế",
        price: 400000,
        featured: true,
        images: [
            "images/oc-que-1.jpg",
            "images/oc-que-2.jpg",
            "images/oc-que-3.jpg"
        ],
        description: "Mẫu ốc quế nhỏ gọn, xinh xắn và dễ mang tặng."
    },
    {
        id: 16,
        name: "Lẵng hoa",
        category: "Lẵng",
        price: 500000,
        featured: false,
        images: [
            "images/lang-1.jpg",
            "images/lang-2.jpg",
            "images/lang-3.jpg"
        ],
        description: "Lẵng hoa phù hợp cho những dịp cần một món quà nổi bật."
    },
    {
        id: 17,
        name: "Bông đơn",
        category: "Bông đơn",
        price: null,
        featured: false,
        images: [
            "images/bong-don-1.jpg",
            "images/bong-don-2.jpg",
            "images/bong-don-3.jpg"
        ],
        description: "Mẫu bông đơn. Vui lòng liên hệ tiệm để được tư vấn mẫu và giá."
    }
];


let currentCategory = "Lily";
let currentFlower = null;
let currentImageIndex = 0;


/* =========================
   TIỆN ÍCH
========================= */

function formatPrice(price) {
    if (typeof price !== "number") {
        return "Liên hệ";
    }

    return "Từ " + Math.round(price / 1000) + "k";
}


function getImage(path) {
    return path;
}


/* =========================
   MẪU NỔI BẬT
========================= */

function renderFeatured() {
    const grid = document.getElementById("featuredGrid");

    const featured = flowers
        .filter(flower => flower.featured)
        .slice(0, 6);

    grid.innerHTML = featured.map(flower => `
        <article class="featured-card" onclick="openModal(${flower.id})">
            <img
                src="${getImage(flower.images[0])}"
                alt="${flower.name}"
                onerror="this.src='https://placehold.co/700x700/e8f5f8/557782?text=Flower'"
            >

            <div class="featured-overlay">
                <h3>${flower.name}</h3>
            </div>
        </article>
    `).join("");
}


/* =========================
   DANH MỤC
========================= */

function renderCategory() {
    const slider = document.getElementById("categorySlider");
    const title = document.getElementById("categoryTitle");

    const categoryFlowers = flowers.filter(
        flower => flower.category === currentCategory
    );

    title.textContent = currentCategory;

    if (categoryFlowers.length === 0) {
        slider.innerHTML = `
            <p style="padding:20px;color:#78909a;">
                Chưa có mẫu trong danh mục này.
            </p>
        `;
        return;
    }

    slider.innerHTML = categoryFlowers.map(flower => `
        <article class="category-card" onclick="openModal(${flower.id})">

            <img
                src="${getImage(flower.images[0])}"
                alt="${flower.name}"
                onerror="this.src='https://placehold.co/600x700/e8f5f8/557782?text=Flower'"
            >

            <div class="category-card-info">
                <h4>${flower.name}</h4>

                <p class="price">
                    ${formatPrice(flower.price)}
                </p>
            </div>

        </article>
    `).join("");
}


function selectCategory(category, button) {
    currentCategory = category;

    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    renderCategory();

    document.getElementById("categorySlider").scrollTo({
        left: 0,
        behavior: "smooth"
    });
}


function slideCategory(direction) {
    const slider = document.getElementById("categorySlider");

    slider.scrollBy({
        left: direction * 300,
        behavior: "smooth"
    });
}


/* =========================
   NGÂN SÁCH
========================= */

function renderBudget(min, max) {
    const grid = document.getElementById("budgetGrid");

    const result = flowers.filter(flower => {
        return typeof flower.price === "number" &&
            flower.price >= min &&
            flower.price <= max;
    });

    if (result.length === 0) {
        grid.innerHTML = `
            <p style="color:#78909a;">
                Chưa có mẫu trong khoảng giá này.
            </p>
        `;
        return;
    }

    grid.innerHTML = result.map(flower => `
        <article class="budget-card" onclick="openModal(${flower.id})">

            <img
                src="${getImage(flower.images[0])}"
                alt="${flower.name}"
                onerror="this.src='https://placehold.co/600x700/e8f5f8/557782?text=Flower'"
            >

            <div class="budget-info">
                <h3>${flower.name}</h3>
                <p>${formatPrice(flower.price)}</p>
            </div>

        </article>
    `).join("");
}


function filterBudget(min, max, button) {
    document.querySelectorAll(".budget-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    renderBudget(min, max);
}


/* =========================
   MODAL
========================= */

function openModal(id) {
    const flower = flowers.find(item => item.id === id);

    if (!flower) return;

    currentFlower = flower;
    currentImageIndex = 0;

    const modal = document.getElementById("imageModal");

    document.getElementById("modalTitle").textContent = flower.name;
    document.getElementById("modalCategory").textContent = flower.category;
    document.getElementById("modalPrice").textContent = formatPrice(flower.price);
    document.getElementById("modalDescription").textContent = flower.description;

    renderModalDots();
    updateModalImage();

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


function updateModalImage() {
    if (!currentFlower) return;

    const image = document.getElementById("modalImage");

    image.src = currentFlower.images[currentImageIndex];
    image.alt = currentFlower.name;

    image.onerror = function() {
        this.src = "https://placehold.co/800x800/e8f5f8/557782?text=Flower";
    };

    document.querySelectorAll(".modal-dot").forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentImageIndex
        );
    });
}


function renderModalDots() {
    const dots = document.getElementById("modalDots");

    if (!currentFlower) return;

    dots.innerHTML = currentFlower.images.map((_, index) => `
        <button
            class="modal-dot ${index === 0 ? "active" : ""}"
            onclick="goToModalImage(${index})"
            aria-label="Xem ảnh ${index + 1}">
        </button>
    `).join("");
}


function changeModalImage(direction) {
    if (!currentFlower) return;

    const total = currentFlower.images.length;

    currentImageIndex =
        (currentImageIndex + direction + total) % total;

    updateModalImage();
}


function goToModalImage(index) {
    if (!currentFlower) return;

    currentImageIndex = index;
    updateModalImage();
}


function closeModal() {
    const modal = document.getElementById("imageModal");

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    currentFlower = null;
}


function closeModalOutside(event) {
    if (event.target.id === "modalBackdrop") {
        closeModal();
    }
}


/* =========================
   VUỐT ẢNH TRÊN ĐIỆN THOẠI
========================= */

let touchStartX = 0;
let touchEndX = 0;


function handleSwipe() {
    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) < 50) return;

    if (distance < 0) {
        changeModalImage(1);
    } else {
        changeModalImage(-1);
    }
}


/* =========================
   SỰ KIỆN
========================= */

document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", function() {
        selectCategory(
            this.dataset.category,
            this
        );
    });
});


document.getElementById("prevCategory").addEventListener(
    "click",
    () => slideCategory(-1)
);


document.getElementById("nextCategory").addEventListener(
    "click",
    () => slideCategory(1)
);


document.querySelectorAll(".budget-btn").forEach(button => {
    button.addEventListener("click", function() {
        filterBudget(
            Number(this.dataset.min),
            Number(this.dataset.max),
            this
        );
    });
});


document.getElementById("modalClose").addEventListener(
    "click",
    closeModal
);


document.getElementById("modalBackdrop").addEventListener(
    "click",
    closeModalOutside
);


document.getElementById("modalPrev").addEventListener(
    "click",
    () => changeModalImage(-1)
);


document.getElementById("modalNext").addEventListener(
    "click",
    () => changeModalImage(1)
);


const modalImageWrap = document.getElementById("modalImageWrap");

modalImageWrap.addEventListener("touchstart", event => {
    touchStartX = event.changedTouches[0].screenX;
}, { passive: true });


modalImageWrap.addEventListener("touchend", event => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });


document.addEventListener("keydown", event => {

    if (!currentFlower) return;

    if (event.key === "ArrowLeft") {
        changeModalImage(-1);
    }

    if (event.key === "ArrowRight") {
        changeModalImage(1);
    }

    if (event.key === "Escape") {
        closeModal();
    }
});


/* =========================
   KHỞI TẠO
========================= */

renderFeatured();
renderCategory();
renderBudget(300000, 400000);