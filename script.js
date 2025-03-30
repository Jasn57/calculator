function calculate() {
    let display = document.getElementById("display").value;
    try {
      
        if (/^[0-9+\-*/.() ]+$/.test(display)) {
            document.getElementById("display").value = new Function("return " + display)();
        } else {
            document.getElementById("display").value = "Error";
        }
    } catch {
        document.getElementById("display").value = "Error";
    }
}
