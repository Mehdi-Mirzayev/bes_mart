let boyuyen = true;
document.getElementById("countt").addEventListener("click", function() {
  let count = parseInt(document.getElementById("countt").textContent);
  if (boyuyen) {
    
    count++;
    if (count > 10) {
      boyuyen = false;
      count = 9;
    }
  } else {
    count--;
    if (count < 0) {
      boyuyen = true;
      count = 1;
    }
  }
  document.getElementById("countt").textContent = count;
});