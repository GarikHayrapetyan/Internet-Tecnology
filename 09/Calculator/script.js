document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("submit").addEventListener("click", () => get("http://localhost:3000/form"));
});


function get(url) {

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() {
        if (xhr.readyState === 4) {
            var result = document.getElementById("result");
            result.textContent = JSON.stringify(JSON.parse(xhr.responseText));
        }
    };
    
    xhr.send(JSON.stringify({"num1": document.getElementById("num1").value, "num2": document.getElementById("num2").value, "operation": document.getElementById("operation").value}));
}