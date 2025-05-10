const btnRandom = document.getElementById("btnRandom");
const h2 = document.querySelector("h2");
const para = document.querySelector("p")

btnRandom.addEventListener("click", async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data);
  
  h2.textContent = `ADVICE #${data.slip.id}`
   para.textContent = `"${data.slip.advice}"`
});
