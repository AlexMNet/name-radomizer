const input = document.querySelector("textarea");
const form = document.querySelector("form");
const display = document.getElementById("display");
const resetBtn = document.getElementById("reset");

function mix(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const people = input.value.split(" ").filter((e) => e);
  const mixedPeople = mix(people);

  let html = "";
  for (let person of mixedPeople) {
    html += `
      <li class="collection-item">${person}</li>
      
    `;
    display.innerHTML = html;

    resetBtn.classList.remove("hide");
  }
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
