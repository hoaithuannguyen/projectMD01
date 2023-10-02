// localStorage.clear();

// tạo sản phẩm, lưu trên localStorage
/* let productsObject = [{
    id: 1,
    name: "sản phẩm 1",
    price: 9000,
    img: "./images/begai2.jpg",
    stock: 10
},
{
    id: 2,
    name: "sản phẩm 2",
    price: 8000,
    img: "./images/begai4.jpg",
    stock: 10
},
{
    id: 3,
    name: "sản phẩm 3",
    price: 12000,
    img: "./images/begai2.jpg",
    stock: 10
},
{
    id: 4,
    name: "sản phẩm 4",
    price: 5000,
    img: "./images/betrai20.jpg",
    stock: 10
},
{
    id: 5,
    name: "sản phẩm 5",
    price: 3000,
    img: "./images/betrai25.jpg",
    stock: 10
},
{
    id: 6,
    name: "sản phẩm 6",
    price: 10000,
    img: "./images/betrai29.jpg",
    stock: 10
},
{
    id: 7,
    name: "sản phẩm 7",
    price: 5000,
    img: "./images/begai2.jpg",
    stock: 10
},
{
    id: 8,
    name: "sản phẩm 8",
    price: 3000,
    img: "./images/begai2.jpg",
    stock: 10
},
];
localStorage.setItem("productsObject", JSON.stringify(productsObject)); */

// định dạng chuyển đổi tiền tệ
let VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

// render các sản phẩm khuyến mại

let discountProducts = JSON.parse(localStorage.getItem("productsObject")) || [];
console.log(discountProducts);

function renderDiscountProducts(discountProducts) {
    let resultDiscountProducts = "";
    for (let i = 0; i < discountProducts.length; i++) {
        resultDiscountProducts += `
                        <div class="discount-products">
                            <img src="${discountProducts[i].img}" alt="" class="img-discount">
                            <div class="name">${discountProducts[i].name}</div>
                            <div class="price">${VND.format(discountProducts[i].price)}</div>
                        </div>
                        `
    }
    document.getElementById("div-content").innerHTML = resultDiscountProducts;
}
renderDiscountProducts(discountProducts);

// render sản phẩm theo từng mục