const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

function Particle(){
  this.x = innerWidth / 2;
  this.y = innerHeight / 2;
  this.vx = Math.random() * 10 - 5;
  this.vy = Math.random() * 10 - 5;
  this.alpha = 1;
  this.r = Math.random() * 3 + 2;
  this.color = `hsl(${Math.random() * 360},100%,60%)`;
}

function boom(){
  for(let i = 0; i < 180; i++){
    particles.push(new Particle());
  }
}

function animate(){
  requestAnimationFrame(animate);

  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  particles.forEach((p,i)=>{
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.01;

    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x,p.y,p.r,0,Math.PI * 2);
    ctx.fill();

    if(p.alpha <= 0) particles.splice(i,1);
  });
}
animate();

function sleep(ms){
  return new Promise(r => setTimeout(r, ms));
}

async function start(){
  const code = document.getElementById("code").value;
  const msg = document.getElementById("msg");
  const gift = document.getElementById("gift");
  const portal = document.getElementById("portal");

  msg.style.opacity = 0;

  portal.style.opacity = 1;
  portal.style.top = "50%";
  portal.style.left = "50%";
  portal.style.transform = "translate(-50%,-50%)";

  await sleep(1500);

  gift.style.display = "flex";
  gift.style.top = "-150px";

  setTimeout(()=>{
    gift.style.transition = "1.2s cubic-bezier(.2,.8,.2,1)";
    gift.style.top = "40%";
  },100);

  await sleep(1200);

  gift.classList.add("shake");
  boom();

  if(navigator.vibrate){
    navigator.vibrate([80,50,80]);
  }

  await sleep(600);

  gift.classList.remove("shake");

  if(code === "1806"){
    msg.innerHTML = `
      ⚡ <b>CẢM ƠN BẠN ĐÃ ĐỒNG HÀNH CÙNG 18DL</b><br/><br/>
      Thanh xuân này không lặp lại,<br/>
      nhưng ký ức thì sẽ còn mãi. ❤️
    `;
  } else {
    msg.innerHTML = `
      🎉 ACCESS GRANTED<br/>
      A message is being decoded...
    `;
  }

  msg.style.opacity = 1;
  msg.style.transform = "translateY(0)";
}
