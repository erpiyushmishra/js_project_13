const reset = document.querySelector(".reset");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");

let second = 0;
let mint = 0;
let hr = 0;

const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");

const timer_start = () => {
  x = setInterval(() => {
    second++;
    if (second >= 60) {
      mint++;
      if (mint >= 60) {
        hr++;
        mint = 0;
      }
      second = 0;
    }
    sec.innerText = second < 10 ? "0" + second : second;
    min.innerText = mint < 10 ? "0" + mint : mint;
    hour.innerText = hr < 10 ? "0" + hr : hr;
  }, 1000);
};

start.addEventListener("click", timer_start);
pause.addEventListener("click", () => {
  clearInterval(x);
});

reset.addEventListener("click",()=>{
    clearInterval(x);
    sec.innerText="00";
    min.innerText="00";
    hour.innerText="00";
    second=0;
    mint=0;
    hr=0;
})
