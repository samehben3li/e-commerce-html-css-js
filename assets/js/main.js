const wrapper = document.querySelector(".wrapper")
const menuItems = document.querySelectorAll(".bottom .item")

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "/assets/img/air.png",
      },
      {
        code: "darkblue",
        img: "/assets/img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "/assets/img/jordan.png",
      },
      {
        code: "green",
        img: "/assets/img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "/assets/img/blazer.png",
      },
      {
        code: "green",
        img: "/assets/img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "/assets/img/crater.png",
      },
      {
        code: "lightgray",
        img: "/assets/img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "/assets/img/hippie.png",
      },
      {
        code: "black",
        img: "/assets/img/hippie2.png",
      },
    ],
  },
]

let choosenProduct = products[0]

const pImg = document.querySelector('.product .img')
const pTitle = document.querySelector('.product .title')
const pPrice = document.querySelector('.product .price')
const pColors = document.querySelectorAll('.product .color')
const pSizes = document.querySelectorAll('.product .size')

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{

        wrapper.style.transform = `translateX(${-100 * index}vw)`

        choosenProduct = products[index]
        pTitle.textContent = choosenProduct.title
        pPrice.textContent = "$"+choosenProduct.price
        pImg.src = choosenProduct.colors[0].img
        pColors.forEach((c,i)=>{
            c.style.backgroundColor = choosenProduct.colors[i].code
        })

    })
})

pColors.forEach((c,i)=>{
    c.addEventListener("click",()=>{
        pImg.src = choosenProduct.colors[i].img
    })
})

pSizes.forEach((s,i)=>{
    s.addEventListener("click",()=>{
        pSizes.forEach((s,i)=>{
            s.style.backgroundColor = "whitesmoke"
            s.style.color = "black"
        })
        s.style.backgroundColor = "black"
        s.style.color = "whitesmoke"
    })
})

const pBtn = document.querySelector(".product .buy")
const payment = document.querySelector(".payment")
const closeBtn = document.querySelector(".close")

pBtn.addEventListener("click",()=>{
  payment.style.display = "flex"
})

closeBtn.addEventListener("click",()=>{
  payment.style.display = "none"
})