setInterval(() => {
  let body = document.querySelector("body");
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  body.style.background =`rgb(${a}, ${b}, ${c})`;
}, 1000);

let chiroq=document.querySelector("#one");
setInterval(()=>{
    let src=chiroq.getAttribute("src");
    if(src==="img/yoniqchiroq.jpg"){
        chiroq.setAttribute("src", "img/ochiqchiroq.jpg");
    }else{
        chiroq.setAttribute("src", "img/yoniqchiroq.jpg")
    }
},2000)
