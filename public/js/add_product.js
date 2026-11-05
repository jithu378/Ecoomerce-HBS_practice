
const productForm = document.getElementById("productForm");
const message = document.getElementById("message");

productForm.addEventListener("submit", function (event) {
    const productName = document.getElementById("productName").value.trim();
    const priceInput = document.getElementById("price");
    const price = Number(priceInput.value);

    message.textContent = "";
    message.className = "message";

    if (!productName) {
        event.preventDefault();

        message.textContent = "Please enter the product name.";
        message.classList.add("error");

        return;
    }

    if (
        priceInput.value.trim() === "" ||
        !Number.isFinite(price) ||
        price <= 0
    ) {
        event.preventDefault();

        message.textContent = "Please enter a valid price greater than zero.";
        message.classList.add("error");

        return;
    }

    // Valid data is submitted normally using POST.
});

productForm.addEventListener("reset", function () {
    message.textContent = "";
    message.className = "message";
});

