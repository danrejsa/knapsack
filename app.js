const refill = document.querySelector("#refill");
const doneBut = document.querySelector("#done");
const maxCap = document.querySelector("input");
const display = document.querySelector("#display");
let allItems = document.querySelectorAll(".items-added");
const arr = [];

allItems.forEach(item => {  
  item.addEventListener("click", () => {
    if ( isNaN(maxCap.value) || maxCap.value == '') {
      alert("Please input maximum capacity for Knapsack");
      return;
    }
    
    let appW = item.getAttribute("weight");
    arr.push(parseInt(appW));
    const adder = sum.apply(window, arr);
    //console.log(sum.apply(window, arr));
    if (adder < maxCap.value) {      
      display.style.background = "cyan";
      display.textContent = `The weight is ${adder}! Knapsack can take more. `;      
      doneBut.addEventListener("click", () => {
        display.style.background = "white";
        display.textContent = "DONE!";
        display.textContent = `knapsack can take more!
         Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
      });
    } else if (adder == maxCap.value) {
      for(let it of allItems){
        it.disabled = true;
      }      
      display.style.background = "green";
      display.textContent = ` knapsack weight equals maximum capacity!
      Knapsack CANNOT take more `;      
      doneBut.addEventListener("click", () => {
        display.style.background = "white";
        display.textContent = `knapsack weight equals maximum capacity!!!!
        Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
      });
    }else {    
      for(let it of allItems){
        it.disabled = true;
      }   
      display.style.background = "red";
      display.textContent = `knapsack maximum capacity exceeded!`; 
      doneBut.addEventListener("click", () => {
        display.style.background = "white";
        display.textContent = `knapsack is overloaded!!!!
        Current weight:${adder}kg.
         Knapsack Max Capacity:${maxCap.value}kg.
        Overloaded by: ${maxCap.value - adder}kg`;
      });     
    } 
  });
});
let sum = (...nums) => {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
refill.addEventListener('click', () => {
  location.reload();
})
