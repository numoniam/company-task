let n = prompt("Enter odd number");

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        document.write("*");
    }

    document.write("&nbsp");
    document.write('</br>');
}
for (let i = n; i > 0; i--) {
    for (let j = 0; j <= i; j++) {
        document.write("*");
    }

    document.write("&nbsp");
    document.write('</br>');
}
