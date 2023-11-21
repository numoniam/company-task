var n = prompt("enter row value");

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
            document.write("*");
        }
        else {
            document.write("&nbsp&nbsp");

        }
    }
    document.write("</br>")
}