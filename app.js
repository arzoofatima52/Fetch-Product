//fetch() method : defined on window object,
// which we can use to perform request 
// this method will return the promise
// promise will either fulflled or rejected 


fetch('https://fakestoreapi.com/products')
.then((data)=>{
    // console.log(data)
    return data.json();
}).then((fulldata)=>{
    // console.log(fulldata[2].title)
    // document.getElementById('root').innerHTML= fulldata[2].title
    let data1 = "";
    fulldata.map((products)=>{
        data1+= `    <div class="cards">
        <h1 class="title">${products.title}</h1>
        <img  class="image" src="${products.image}" alt="img">
        <p>${products.description}</p>
        <p class="category">${products.category}</p>
        <p class="price">${products.price}</p>
        <button onclick='addtoCart()'>Add to Cart</button>
        </div>`
    
    })
 document.getElementById("cards").innerHTML= data1
}).catch((err)=>{
    console.log(err)
})

function addtoCart(){
    window.location="addtocart.html"

}