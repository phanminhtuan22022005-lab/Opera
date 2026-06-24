const code = "2026";

function goLock(){
  switchScreen("intro","lock");
}

function unlock(){
  const input =
    a.value + b.value + c.value + d.value;

  if(input === code){
    switchScreen("lock","gift");
  } else {
    document.getElementById("msg").innerText = "Sai mật mã rồi";
  }
}

function switchScreen(from,to){
  document.getElementById(from).classList.remove("active");
  document.getElementById(to).classList.add("active");
}
