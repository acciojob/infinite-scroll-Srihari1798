const infiList = document.getElementById("infi-list");
const loadMoreThreshold = 200; // distance from bottom of page to trigger loading more items
let currentPage = 1;

// Add 10 list items by default
for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Item ${i}`;
  infiList.appendChild(listItem);
}

// Add 2 more list items when the user scrolls to the bottom of the page
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





