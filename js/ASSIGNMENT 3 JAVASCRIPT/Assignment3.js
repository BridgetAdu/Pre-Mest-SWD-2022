let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0





const increment_btn = document.getElementById('increment_btn');

increment_btn.addEventListener('click', function onClick() {
 increment_btn.style.backgroundColor = 'green';
  increment_btn.style.color = 'brown';
  count = count + 1;
  countEl.innerText = count
});





const reset_btn = document.getElementById('reset_btn');

reset_btn.addEventListener('click', function onClick() {
 reset_btn.style.backgroundColor = 'blue';
  reset_btn.style.color = 'yellow';
  count = 0;
  countEl.innerText = count
});



const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'red';
  btn.style.color = 'blue';
  count = count -1;
  countEl.innerText = count
});









