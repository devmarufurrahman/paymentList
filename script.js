// dom selector =================================================

const date = document.querySelector("#date");
const names = document.querySelector("#names");
const payment = document.querySelector("#payment");
const details = document.querySelector("#details");
const addBtn = document.querySelector(".btn");
const payList = document.querySelector(".pay-list");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    date.value === "" &&
    names.value === "" &&
    payment.value === "" &&
    details.value === ""
  ) {
    alert("Please input date,name,details & amount");
  } else {
    const newRow = document.createElement("tr");

    //list showing
    const newDate = document.createElement("th");
    newDate.innerHTML = date.value;
    newRow.appendChild(newDate);

    //list showing
    const newNames = document.createElement("th");
    newNames.innerHTML = names.value;
    newRow.appendChild(newNames);

    //list showing
    const newPayment = document.createElement("th");
    newPayment.innerHTML = payment.value;
    newRow.appendChild(newPayment);

    //list showing
    const newDetail = document.createElement("th");
    newDetail.innerHTML = details.value;
    newRow.appendChild(newDetail);


    payList.appendChild(newRow)
  }
});
