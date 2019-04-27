let items = [
  { apple: { value: 1, weight: 10 } },
  { banana: { value: 1, weight: 15 } },
  { pear: { value: 1, weight: 35 } },
  { cashew: { value: 1, weight: 20 } },
  { guava: { value: 1, weight: 23 } },
  { coconut: { value: 1, weight: 24 } },
  { pineaple: { value: 1, weight: 18 } },
  { cocoa: { value: 1, weight: 15 } },
  { cassava: { value: 1, weight: 17 } },
  { yam: { value: 1, weight: 25 } },
  { kolanut: { value: 1, weight: 5 } },
  { carrot: { value: 1, weight: 10 } },
  { stone: { value: 1, weight: 50 } },
  { phone: { value: 1, weight: 33 } },
  { bag: { value: 1, weight: 38 } },
  { papaye: { value: 1, weight: 27 } },
  { orange: { value: 1, weight: 19 } },
  { watermelon: { value: 1, weight: 35 } },
  { pawpaw: { value: 1, weight: 29 } },
  { cucumber: { value: 1, weight: 15 } }
];
var maxCap = document.querySelector("input");
var apple = document.querySelector("#apple");
var banana = document.querySelector("#banana");
var pear = document.querySelector("#pear");
var cashew = document.querySelector("#cashew");
var guava = document.querySelector("#guava");
var coconut = document.querySelector("#coconut");
var pineaple = document.querySelector("#pineaple");
var cocoa = document.querySelector("#cocoa");
var cassava = document.querySelector("#cassava");
var yam = document.querySelector("#yam");
var kolanut = document.querySelector("#kolanut");
var carrot = document.querySelector("#carrot");
var stone = document.querySelector("#stone");
var phone = document.querySelector("#phone");
var bag = document.querySelector("#bag");
var papaye = document.querySelector("#papaye");
var orange = document.querySelector("#orange");
var watermelon = document.querySelector("#watermelon");
var pawpaw = document.querySelector("#pawpaw");
var cucumber = document.querySelector("#cucumber");

const arr = [];
const adder = sum.apply(window, arr);
const refillBut = document.querySelector("#refill");
refillBut.addEventListener("click", function() {
  location.reload();
});

apple.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[0].apple.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = "DONE!";
      display.textContent = `knapsack can take more! Current weight:${adder}kg
      Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
    Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
      Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
       `;
    });
  }
});
banana.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[1].banana.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more!  `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack can take more! Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
      Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
         `;
    });
  }
});
pear.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[2].pear.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `knapsack can take more! Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
      Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
         `;
    });
  }
});

cashew.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[3].cashew.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack can take more! Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
      Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
         `;
    });
  }
});

guava.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[4].guava.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more.`;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack can take more! Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
      Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
         `;
    });
  }
});

coconut.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[5].coconut.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack can take more! Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
      Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
         `;
    });
  }
});

pineaple.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[6].pineaple.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack can take more! Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
      Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
         `;
    });
  }
});
cocoa.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[7].cocoa.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack can take more! Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
      Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
         `;
    });
  }
});

cassava.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[8].cassava.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack can take more! Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
      Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
         `;
    });
  }
});

yam.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[9].yam.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `knapsack can take more! Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
      Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = "DONE!";
      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
        Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
         `;
    });
  }
});
kolanut.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[10].kolanut.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more!  `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack can take more! Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
        Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
           `;
    });
  }
});

carrot.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[11].carrot.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack can take more! Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
        Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
           `;
    });
  }
});

stone.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[12].stone.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = "DONE!";
      display.textContent = `knapsack can take more! Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
        Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
           `;
    });
  }
});

phone.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[13].phone.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack can take more! Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
        Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
           `;
    });
  }
});

bag.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[14].bag.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack can take more! Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
        Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = "DONE!";
      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
           `;
    });
  }
});

papaye.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[15].papaye.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `knapsack can take more! Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
        Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
           `;
    });
  }
});

orange.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[16].orange.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `knapsack can take more! Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
        Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
           `;
    });
  }
});

watermelon.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[17].watermelon.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `knapsack can take more! Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
        Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
          Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
           `;
    });
  }
});

pawpaw.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[18].pawpaw.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `knapsack can take more! Current weight:${adder}kg
            Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
          Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";

      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
            Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
             `;
    });
  }
});

cucumber.addEventListener("click", function(item) {
  if (maxCap.value == "") {
    alert("Please input maximum capacity for Knapsack");
    return;
  }
  let appW = items[19].cucumber.weight;
  arr.push(appW);
  var adder = sum.apply(window, arr);

  if (adder < maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "cyan";
    display.textContent = `The weight is ${adder}! Knapsack can take more. `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `knapsack can take more! Current weight:${adder}kg
            Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else if (adder == maxCap.value) {
    const display = document.querySelector("#display");
    display.style.background = "green";
    display.textContent = ` knapsack weight equals maximum capacity!
          Knapsack CANNOT take more `;
    const doneBut = document.querySelector("#done");
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `knapsack weight equals maximum capacity!!!!... Current weight:${adder}kg
            Remaining Capacity: ${maxCap.value - adder}kg`;
    });
  } else {
    var display = document.querySelector("#display");
    const doneBut = document.querySelector("#done");
    display.style.background = "red";
    display.textContent = `Maximum capacity exceeded.!!!`;
    doneBut.addEventListener("click", function() {
      display.style.background = "white";
      display.textContent = `Maximum capacity exceeded.!!!.. 
             `;
    });
  }
});

function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
