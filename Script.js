function openWhatsApp(number){
  window.open("https://wa.me/" + number, "_blank");
}

function playMusic(){
  const music = document.getElementById("bgmusic");
  music.play();
}


// ================= COUNTDOWN =================

const targetDate = new Date("2026-07-11T19:00:00").getTime();

const countdown = document.createElement("div");

countdown.style.position = "fixed";
countdown.style.top = "20px";
countdown.style.left = "20px";
countdown.style.background = "rgba(0,0,0,0.75)";
countdown.style.color = "#f4d58d";
countdown.style.padding = "14px 18px";
countdown.style.borderRadius = "14px";
countdown.style.fontWeight = "bold";
countdown.style.fontSize = "15px";
countdown.style.zIndex = "9999";
countdown.style.backdropFilter = "blur(8px)";

document.body.appendChild(countdown);

function updateCountdown(){

  const now = new Date().getTime();
  const distance = targetDate - now;

  if(distance < 0){
    countdown.innerHTML = "🎉 اليوم الكبير وصل!";
    return;
  }

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

  countdown.innerHTML =
    "⏳ " + days + " يوم • " + hours + " ساعة • " + minutes + " دقيقة";
}

updateCountdown();
setInterval(updateCountdown, 60000);
