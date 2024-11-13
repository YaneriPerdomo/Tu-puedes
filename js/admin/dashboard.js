
document.addEventListener("keyup", e => {
  if (e.target.matches(`[type="search"]`)) {
    const searchTerm = e.target.value.toLowerCase().trim(); 

    document.querySelectorAll(".show").forEach(record => {
      let isMatch = false; 

      isMatch = isMatch || record.textContent.toLowerCase().includes(searchTerm); 
      isMatch = isMatch || (record.dataset && record.dataset.name && record.dataset.name.toLowerCase().includes(searchTerm));
      isMatch = isMatch || (record.dataset && record.dataset.id && !isNaN(record.dataset.id) && record.dataset.id.toLowerCase().includes(searchTerm));

      if (isMatch) {
        record.style.display = ""; 
      } else {
        record.style.display = "none";
      }
    });
  }
});