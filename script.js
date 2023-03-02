const infiList = document.getElementById("infi-list");
const loadMoreThreshold = 200; 
let currentPage = 1;


for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Item ${i}`;
  infiList.appendChild(listItem);
}

window.addEventListener("scroll", () => {
  const distanceToBottom = document.documentElement.scrollHeight - (window.innerHeight + window.scrollY);
  if (distanceToBottom < loadMoreThreshold) {
    for (let i = 1; i <= 2; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${currentPage * 10 + i}`;
      infiList.appendChild(listItem);
    }
    currentPage++;
  }
});





