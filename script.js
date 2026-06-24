let bgMusic = new Audio("assets/bg.mp3");
bgMusic.loop = true;

let unlockSound = new Audio("assets/unlock.mp3");

function showLock(){
  document.getElementById("intro").style.display = "none";
  document.getElementById("lock").style.display = "flex";

  bgMusic.volume = 0.4;
  bgMusic.play();
}

function check(){

  const code = "2026";

  const input =
    a.value + b.value + c.value + d.value;

  if(input === code){

    unlockSound.play();
    document.body.classList.add("flash");

    setTimeout(()=>{
      document.getElementById("lock").style.display = "none";
      document.getElementById("content").classList.add("show");
    },800);

  } else {
    document.getElementById("msg").innerText = "Sai rồi 😢";
  }
}

/* PARTICLE */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

document.addEventListener("mousemove",(e)=>{
  for(let i=0;i<3;i++){
    particles.push({
      x:e.clientX,
      y:e.clientY,
      size:Math.random()*3,
      speedX:(Math.random()-0.5)*2,
      speedY:(Math.random()-0.5)*2
    });
  }
});

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach((p,i)=>{
    p.x += p.speedX;
    p.y += p.speedY;
    p.size *= 0.96;

    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();

    if(p.size < 0.2){
      particles.splice(i,1);
    }
  });

  requestAnimationFrame(animate);
}

animate();
