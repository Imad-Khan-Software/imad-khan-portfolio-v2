/* DARK MODE */
const themeBtn = document.getElementById("themeBtn");
themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

/* SKILL ANIMATION */
const skills = document.querySelectorAll(".skill");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.querySelector(".fill").style.width =
        entry.target.querySelector(".fill").getAttribute("data") + "%";
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.3});
skills.forEach(skill => observer.observe(skill));

/* TYPEWRITER */
const introText = document.getElementById("introText");
const texts = [
  "Software Engineering Student",
  "Frontend Developer",
  "Data Analyst",
  "Learning Freelancing"
];
let i=0,j=0;
function type(){
  if(j<texts[i].length){
    introText.textContent += texts[i][j++];
    setTimeout(type,80);
  }else{
    setTimeout(()=>{
      introText.textContent="";
      j=0;
      i=(i+1)%texts.length;
      type();
    },1200);
  }
}
type();

/* ACADEMIC SEARCH */
document.getElementById("academicSearch").addEventListener("keyup", function(){
  const val = this.value.toLowerCase();
  document.querySelectorAll("#academicTable tr").forEach((row,i)=>{
    if(i===0) return;
    row.style.display = row.innerText.toLowerCase().includes(val) ? "" : "none";
  });
});

/* CONTACT FORM VALIDATION */
document.querySelector(".send").addEventListener("click", () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const status = document.getElementById("msgStatus");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!name || !email || !message || !emailPattern.test(email)){
    status.style.color="red";
    status.textContent="❌ Please fill the above requirements";
  }else{
    status.style.color="green";
    status.textContent="✅ Your message has been sent successfully!";
    nameInput.value=emailInput.value=messageInput.value="";
  }

  setTimeout(()=>status.textContent="",3000);
});
