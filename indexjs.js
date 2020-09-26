function calculateInsurance() {
    var name = document.getElementById("name").value;
    var horsep = Number(document.getElementById("horsepower").value);
    var age = Number(document.getElementById("age").value);
    var country = document.getElementById("country").value;

    if (country == 1) { 
        var cost = (horsep * 100) / age + 50;
        document.getElementById("result").textContent = ` ${name}, your insurance fee is ${cost.toFixed(2)}€`;
    } else if (country == 2) {
        var cost = (horsep * 120) / age + 100;
        document.getElementById("result").textContent = ` ${name}, your insurance fee is ${cost.toFixed(2)}€`;
    } else
        var cost = (horsep * 150) / (age + 3) + 50;
    document.getElementById("result").textContent = ` ${name}, your insurance fee is ${cost.toFixed(2)}€`;
}

document.getElementById("calculate").addEventListener("click", calculateInsurance, false);