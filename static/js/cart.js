// const cartData = localStorage.getItem("cartItems") || "[]";
// const container = document.querySelector(".container");

// const updateLocalStorage = (parsedCartData) => {
//     localStorage.setItem("cartItems", JSON.stringify(parsedCartData));
//   };

// function updateCartData(pizzaId, curr_quantity, curr_price) {
//   const parsedCartData = JSON.parse(cartData);

//   const item = parsedCartData.find((item) => item.pizzaId === pizzaId);
//   if (item) {
//     if (curr_quantity == 0) {
//       parsedCartData = parsedCartData.filter(
//         (item) => item.pizzaId !== pizzaId
//       );
//       updateLocalStorage(parsedCartData);
//     } else {
//       item.quantity = curr_quantity;
//       item.price = curr_price;
//       updateLocalStorage(parsedCartData);
//     }
//   }
// }

// const incQuantity = (event) => {
//   const plusBtn = event.target.closest(".increaseQuantity");
//   const quantityElement = plusBtn.previousElementSibling;
//   const priceDisplayArea = plusBtn.closest("td").nextElementSibling;
//   curr_quantity = parseInt(quantityElement.innerText);
//   const previous_price = parseFloat(priceDisplayArea.innerText) / curr_quantity;
//   if (curr_quantity < 10) {
//     curr_quantity++;
//     quantityElement.innerText = curr_quantity;
//     const curr_price = parseFloat(previous_price) * curr_quantity;
//     priceDisplayArea.innerHTML = `   <i class="fa-solid fa-indian-rupee-sign"></i>${curr_price.toFixed(
//       0.2
//     )}`;

//     const itemId = plusBtn.getAttribute("data-pizzaid");
//     updateCartData(itemId, curr_quantity, curr_price);
//   }
// };

// const decQuantity = (event) => {
//   const minusBtn = event.target.closest(".decreaseQuantity");
//   const quantityElement = minusBtn.nextElementSibling;
//   const priceDisplayArea = minusBtn.closest("td").nextElementSibling;
//   const pizzaId = minusBtn.getAttribute("data-pizzaid");
//   curr_quantity = parseInt(quantityElement.innerText);
//   const previous_price = parseFloat(priceDisplayArea.innerText) / curr_quantity;
//   if (curr_quantity > 0) curr_quantity--;
//   if (curr_quantity === 0) {
//     minusBtn.closest("tr").remove();
//     updateCartData(pizzaId, 0, 0);
//   } else {
//     quantityElement.innerText = curr_quantity;
//     const curr_price = parseFloat(previous_price) * curr_quantity;
//     priceDisplayArea.innerHTML = `   <i class="fa-solid fa-indian-rupee-sign"></i>${curr_price.toFixed(
//       2
//     )}`;

//     updateCartData(pizzaId, curr_quantity, curr_price);
//   }
// };

// const createTableHeader = () => {
//   const thead = document.createElement("thead");
//   thead.classList.add("table-primary");

//   const tr = document.createElement("tr");

//   const headers = [
//     "Pizza",
//     "Size",
//     "Crust",
//     "Extra Cheese",
//     "Quantity",
//     "Price",
//   ];

//   headers.forEach((headerText) => {
//     const th = document.createElement("th");
//     th.scope = "col";
//     th.classList.add("p-3");
//     th.textContent = headerText;
//     tr.appendChild(th);
//   });

//   thead.appendChild(tr);
//   return thead;
// };

// const createTableFooter = () => {
//   const tfoot = document.createElement("tfoot");
//   const tr = document.createElement("tr");
//   const td = document.createElement("td");
//   td.colSpan = "5";
//   td.innerText = "Place your order here";
//   tr.appendChild(td);
//   tfoot.appendChild(tr);
//   return tfoot;
// };

// async function displayCartItems() {
//   const parsedCartData = JSON.parse(cartData);
//   if (parsedCartData.length === 0) {
//     container.innerHTML = `
//             <h1>Add items to your cart to place order</h1>
//             <a class="btn btn-danger" href="/" onclick="window.location.href='/';">Go to home page to select pizza</a>`;
//   } else {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/showCartItems", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(parsedCartData),
//       });

//       if (!response.ok) {
//         alert("Something went wrong. Try again");
//       } else {
//         const data = await response.json();

//         const table = document.querySelector("table");
//         table.classList.remove("d-none");

//         table.appendChild(createTableHeader());

//         const tableBody = document.querySelector("table tbody");
//         tableBody.innerHTML = "";

//         data.items.forEach((item) => {
//           const row = document.createElement("tr");

//           row.innerHTML = `
//                         <td>${item.pizza_name}</td>
//                         <td>${item.size_name}</td>
//                         <td>${item.base_name}</td>
//                         <td>${item.cheese_name}</td>
//                         <td>
//                             <div class="p-3" aria-labelledby="customizePizza_${
//                               item.pizzaId
//                             }">
//                                 <div class="btn-group">
//                                     <button type="button" class="btn decreaseQuantity no-hover bg-danger text-white" data-pizzaid="${
//                                       item.pizzaId
//                                     }">
//                                         <i class="fa-solid fa-minus"></i>
//                                     </button>
//                                     <button type="button" class="btn quantity bg-danger text-white" style="pointer-events: none;">
//                                         ${item.quantity}
//                                     </button>
//                                     <button type="button" class="btn increaseQuantity no-hover bg-danger-subtle text-white" data-pizzaid="${
//                                       item.pizzaId
//                                     }">
//                                         <i class="fa-solid fa-plus"></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         </td>
//                         <td><i class="fa-solid fa-indian-rupee-sign"></i>${item.price.toFixed(
//                           2
//                         )}</td>
//                     `;

//           tableBody.appendChild(row);
//         });

//         const allMinusBtn = document.querySelectorAll(".decreaseQuantity");
//         const allPlusBtn = document.querySelectorAll(".increaseQuantity");

//         allMinusBtn.forEach((curr_minus_btn) => {
//           curr_minus_btn.addEventListener("click", decQuantity);
//         });

//         allPlusBtn.forEach((curr_plus_btn) => {
//           curr_plus_btn.addEventListener("click", incQuantity);
//         });

//         table.appendChild(createTableFooter());
//       }
//     } catch (error) {
//       console.error("Error fetching price:", error);
//     }
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   displayCartItems();
// });



/* second code*/

// const container = document.querySelector(".container");

// function calculateTotalPrice() {
//     let totalPrice = 0;
//     const tableBody = document.querySelector("table tbody");
//     const rows = tableBody.querySelectorAll("tr");
//     rows.forEach((row) => {
//       const priceCell = row.lastElementChild;
//       const priceText = priceCell.innerText.replace(/\D/g, ""); // Extract numeric part
//       totalPrice += parseFloat(priceText);
//     });
  
//     const grandTotalElement = document.getElementById("grandTotal");
//     grandTotalElement.innerHTML = `<strong>Total Price: <i class="fa-solid fa-indian-rupee-sign"></i>${totalPrice.toFixed(2)}</strong>`;
//   }
  
// const updateLocalStorage = (parsedCartData) => {


//   localStorage.setItem("cartItems", JSON.stringify(parsedCartData));

// };

// function updateCartData(pizzaId, curr_quantity, curr_price) {
//   const cartData = localStorage.getItem("cartItems") || "[]"; // Fetch cart data here
//   let parsedCartData = JSON.parse(cartData);

//   const itemIndex = parsedCartData.findIndex(
//     (item) => item.pizzaId === pizzaId
//   );
//   if (itemIndex !== -1) {
//     if (curr_quantity === 0) {
//       parsedCartData.splice(itemIndex, 1); // Remove item if quantity is 0
//     } else {
//       parsedCartData[itemIndex].quantity = curr_quantity;
//       parsedCartData[itemIndex].price = curr_price;
//     }
//     updateLocalStorage(parsedCartData);
//   }
// }

// const incQuantity = (event) => {
//   const plusBtn = event.target.closest(".increaseQuantity");
//   const quantityElement = plusBtn.previousElementSibling;
//   const priceDisplayArea = plusBtn.closest("td").nextElementSibling;
//   let curr_quantity = parseInt(quantityElement.innerText);
//   const previous_price =
//     parseFloat(priceDisplayArea.innerText.replace(/[^0-9.-]+/g, "")) /
//     curr_quantity;
//   if (curr_quantity < 10) {
//     curr_quantity++;
//     quantityElement.innerText = curr_quantity;
//     const curr_price = parseFloat(previous_price) * curr_quantity;
//     priceDisplayArea.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${curr_price.toFixed(
//       2
//     )}`;

//     const itemId = plusBtn.getAttribute("data-pizzaid");
//     updateCartData(itemId, curr_quantity, curr_price);
//   }
//   calculateTotalPrice();
// };

// const decQuantity = (event) => {
//   const minusBtn = event.target.closest(".decreaseQuantity");
//   const quantityElement = minusBtn.nextElementSibling;
//   const priceDisplayArea = minusBtn.closest("td").nextElementSibling;
//   const pizzaId = minusBtn.getAttribute("data-pizzaid");
//   let curr_quantity = parseInt(quantityElement.innerText);
//   const previous_price =
//     parseFloat(priceDisplayArea.innerText.replace(/[^0-9.-]+/g, "")) /
//     curr_quantity;
//   if (curr_quantity > 0) curr_quantity--;
//   if (curr_quantity === 0) {
//     minusBtn.closest("tr").remove();
//     updateCartData(pizzaId, 0, 0);

//     const tableBody = document.querySelector("table tbody");
//     console.log(tableBody.rows.length);
//     if (tableBody && tableBody.rows.length === 0) {
  
//         document.querySelector("table").remove();
//         container.innerHTML = `
//           <h1 class="card shadow card-body bg-light bg-gradient opacity-10 rounded justify-content-center align-items-center ">
//           Add items to your cart to place order <br>
//           <a class="btn btn-danger my-4 p-3" href="/" onclick="window.location.href='/';">Go to home page to select pizza</a></h1>
//           `;
//       }

//   } else {
//     quantityElement.innerText = curr_quantity;
//     const curr_price = parseFloat(previous_price) * curr_quantity;
//     priceDisplayArea.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${curr_price.toFixed(
//       2
//     )}`;

//     updateCartData(pizzaId, curr_quantity, curr_price);
//   }
//   calculateTotalPrice();
// };

// const createTableHeader = () => {
//   const thead = document.createElement("thead");
//   thead.classList.add("table-primary");

//   const tr = document.createElement("tr");

//   const headers = [
//     "Pizza",
//     "Size",
//     "Crust",
//     "Extra Cheese",
//     "Quantity",
//     "Price",
//   ];

//   headers.forEach((headerText) => {
//     const th = document.createElement("th");
//     th.scope = "col";
//     th.classList.add("p-3");
//     th.textContent = headerText;
//     tr.appendChild(th);
//   });

//   thead.appendChild(tr);
//   return thead;
// };

// // const createTableFooter = () => {
// //   const tfoot = document.createElement("tfoot");
// //   const tr = document.createElement("tr");
// //   const td = document.createElement("td");
// //   td.colSpan = "5";
// //   td.innerHTML=`<div class="d-flex justify-content-between"> <div class="">Total Price : </div>
// //   <div class="div"></div>`
// //   tr.appendChild(td);
// //   tfoot.appendChild(tr);
// //   return tfoot;
// // };
// const createTableFooter = () => {
//     const tfoot = document.createElement("tfoot");
//     const tr = document.createElement("tr");
//     const td = document.createElement("td");
//     td.colSpan = "5";
//     td.id = "grandTotal";
//     tr.appendChild(td);
//     tfoot.appendChild(tr);
//     calculateTotalPrice();
//     return tfoot;
//   };
  

// async function displayCartItems() {

//   const cartData = localStorage.getItem("cartItems") || "[]";
//   const parsedCartData = JSON.parse(cartData);

//   if (parsedCartData.length === 0) {
//     container.innerHTML = `
//             <h1>Add items to your cart to place order</h1>
//             <a class="btn btn-danger" href="/" onclick="window.location.href='/';">Go to home page to select pizza</a>`;
//   } else {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/showCartItems", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(parsedCartData),
//       });

//       if (!response.ok) {
//         alert("Something went wrong. Try again");
//       } else {
//         const data = await response.json();

//         const table = document.querySelector("table");
//         table.classList.remove("d-none");

//         table.appendChild(createTableHeader());

//         const tableBody = document.querySelector("table tbody");
//         tableBody.innerHTML = "";

//         data.items.forEach((item) => {
//           const row = document.createElement("tr");
//           row.classList.add("shadow-sm");
//          // row.classList.add("my-2");
//           row.innerHTML = `
//                         <td>${item.pizza_name}</td>
//                         <td>${item.size_name}</td>
//                         <td>${item.base_name}</td>
//                         <td>${item.cheese_name}</td>
//                         <td>
//                             <div class="p-3" aria-labelledby="customizePizza_${
//                               item.pizzaId
//                             }">
//                                 <div class="btn-group">
//                                     <button type="button" class="btn decreaseQuantity no-hover bg-danger text-white" data-pizzaid="${
//                                       item.pizzaId
//                                     }">
//                                         <i class="fa-solid fa-minus"></i>
//                                     </button>
//                                     <button type="button" class="btn quantity bg-danger text-white" style="pointer-events: none;">
//                                         ${item.quantity}
//                                     </button>
//                                     <button type="button" class="btn increaseQuantity no-hover bg-danger-subtle text-white" data-pizzaid="${
//                                       item.pizzaId
//                                     }">
//                                         <i class="fa-solid fa-plus"></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         </td>
//                         <td><i class="fa-solid fa-indian-rupee-sign"></i>${item.price.toFixed(
//                           2
//                         )}</td>
//                     `;

//           tableBody.appendChild(row);
//         });

        

//         const allMinusBtn = document.querySelectorAll(".decreaseQuantity");
//         const allPlusBtn = document.querySelectorAll(".increaseQuantity");

//         allMinusBtn.forEach((curr_minus_btn) => {
//           curr_minus_btn.addEventListener("click", decQuantity);
//         });

//         allPlusBtn.forEach((curr_plus_btn) => {
//           curr_plus_btn.addEventListener("click", incQuantity);
//         });

//         table.appendChild(createTableFooter());
//       }
//     } catch (error) {
//       console.error("Error fetching price:", error);
//     }
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   displayCartItems();
// });



const container = document.querySelector(".container");

function calculateTotalPrice() {
  let totalPrice = 0;
  const tableBody = document.querySelector("table tbody");
  const rows = tableBody.querySelectorAll("tr");
  rows.forEach((row) => {
    const priceCell = row.lastElementChild;
    const priceText = priceCell.innerText.replace(/\D/g, ""); // Extract numeric part
    totalPrice += parseFloat(priceText);
  });

  const grandTotalElement = document.getElementById("grandTotal");
  grandTotalElement.innerHTML = `<strong>Total Price: <i class="fa-solid fa-indian-rupee-sign"></i>${totalPrice.toFixed(2)}</strong>`;
}

const updateLocalStorage = (parsedCartData) => {
  localStorage.setItem("cartItems", JSON.stringify(parsedCartData));
};

function updateCartData(pizzaId, curr_quantity, curr_price) {
  const cartData = localStorage.getItem("cartItems") || "[]"; // Fetch cart data here
  let parsedCartData = JSON.parse(cartData);

  const itemIndex = parsedCartData.findIndex((item) => item.pizzaId === pizzaId);
  if (itemIndex !== -1) {
    if (curr_quantity === 0) {
      parsedCartData.splice(itemIndex, 1); // Remove item if quantity is 0
    } else {
      parsedCartData[itemIndex].quantity = curr_quantity;
      parsedCartData[itemIndex].price = curr_price;
    }
    updateLocalStorage(parsedCartData);
  }
}

const incQuantity = (event) => {
  const plusBtn = event.target.closest(".increaseQuantity");
  const quantityElement = plusBtn.previousElementSibling;
  const priceDisplayArea = plusBtn.closest("td").nextElementSibling;
  let curr_quantity = parseInt(quantityElement.innerText);
  const previous_price = parseFloat(priceDisplayArea.innerText.replace(/[^0-9.-]+/g, "")) / curr_quantity;
  if (curr_quantity < 10) {
    curr_quantity++;
    quantityElement.innerText = curr_quantity;
    const curr_price = parseFloat(previous_price) * curr_quantity;
    priceDisplayArea.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${curr_price.toFixed(2)}`;

    const itemId = plusBtn.getAttribute("data-pizzaid");
    updateCartData(itemId, curr_quantity, curr_price);
  }
  calculateTotalPrice();
};

const decQuantity = (event) => {
  const minusBtn = event.target.closest(".decreaseQuantity");
  const quantityElement = minusBtn.nextElementSibling;
  const priceDisplayArea = minusBtn.closest("td").nextElementSibling;
  const pizzaId = minusBtn.getAttribute("data-pizzaid");
  let curr_quantity = parseInt(quantityElement.innerText);
  const previous_price = parseFloat(priceDisplayArea.innerText.replace(/[^0-9.-]+/g, "")) / curr_quantity;
  if (curr_quantity > 0) curr_quantity--;
  if (curr_quantity === 0) {
    minusBtn.closest("tr").remove();
    updateCartData(pizzaId, 0, 0);

    const tableBody = document.querySelector("table tbody");
    if (tableBody && tableBody.rows.length === 0) {
      document.querySelector("table").remove();
      container.innerHTML = `
        <h1 class="card shadow card-body bg-light bg-gradient opacity-10 rounded justify-content-center align-items-center ">
        Add items to your cart to place order <br>
        <a class="btn btn-danger my-4 p-3" href="/" onclick="window.location.href='/';">Go to home page to select pizza</a></h1>
      `;
    }
  } else {
    quantityElement.innerText = curr_quantity;
    const curr_price = parseFloat(previous_price) * curr_quantity;
    priceDisplayArea.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${curr_price.toFixed(2)}`;

    updateCartData(pizzaId, curr_quantity, curr_price);
  }
  calculateTotalPrice();
};

const createTableHeader = () => {
  const thead = document.createElement("thead");
  thead.classList.add("table-primary");

  const tr = document.createElement("tr");

  const headers = ["Pizza", "Size", "Crust", "Extra Cheese", "Quantity", "Price"];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.classList.add("p-3");
    th.textContent = headerText;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  return thead;
};

const createTableFooter = () => {
  const tfoot = document.createElement("tfoot");
  const tr = document.createElement("tr");
  const tr2 = document.createElement("tr");
  const td = document.createElement("td");
  const td2 = document.createElement("td");
  td.colSpan = "6";
  td2.colSpan = "6";
  td.id = "grandTotal";
  tr.appendChild(td);
  tfoot.appendChild(tr);
  td2.innerHTML=`<div class="d-grid">
  <button class="btn btn-primary" type="button">Place Order</button>
</div>`;
  tr2.appendChild(td2);
  tfoot.appendChild(tr2);
   // Initial calculation of total price
  return tfoot;
};

async function displayCartItems() {
  const cartData = localStorage.getItem("cartItems") || "[]";
  const parsedCartData = JSON.parse(cartData);

  if (parsedCartData.length === 0) {
    container.innerHTML = `
      <h1>Add items to your cart to place order</h1>
      <a class="btn btn-danger" href="/" onclick="window.location.href='/';">Go to home page to select pizza</a>`;
  } else {
    try {
      const response = await fetch("http://127.0.0.1:8000/showCartItems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedCartData),
      });

      if (!response.ok) {
        alert("Something went wrong. Try again");
      } else {
        const data = await response.json();

        const table = document.querySelector("table");
        table.classList.remove("d-none");

        table.appendChild(createTableHeader());

        const tableBody = document.querySelector("table tbody");
        tableBody.innerHTML = "";

        data.items.forEach((item) => {
          const row = document.createElement("tr");
          row.classList.add("shadow-sm");
          row.innerHTML = `
            <td>${item.pizza_name}</td>
            <td>${item.size_name}</td>
            <td>${item.base_name}</td>
            <td>${item.cheese_name}</td>
            <td>
              <div class="p-3" aria-labelledby="customizePizza_${item.pizzaId}">
                <div class="btn-group">
                  <button type="button" class="btn decreaseQuantity no-hover bg-danger text-white" data-pizzaid="${item.pizzaId}">
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <button type="button" class="btn quantity bg-danger text-white" style="pointer-events: none;">
                    ${item.quantity}
                  </button>
                  <button type="button" class="btn increaseQuantity no-hover bg-danger-subtle text-white" data-pizzaid="${item.pizzaId}">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td><i class="fa-solid fa-indian-rupee-sign"></i>${item.price.toFixed(2)}</td>
          `;
          tableBody.appendChild(row);
        });

        const allMinusBtn = document.querySelectorAll(".decreaseQuantity");
        const allPlusBtn = document.querySelectorAll(".increaseQuantity");

        allMinusBtn.forEach((curr_minus_btn) => {
          curr_minus_btn.addEventListener("click", decQuantity);
        });

        allPlusBtn.forEach((curr_plus_btn) => {
          curr_plus_btn.addEventListener("click", incQuantity);
        });

        table.appendChild(createTableFooter());
        calculateTotalPrice();
      }
    } catch (error) {
      console.error("Error fetching price:", error);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayCartItems();
});

