document.write("<h1>구구단표</h1>");
document.write("<table border=2 width=50%");
for (let i = 1; i <= 9; i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    for (let j = 2; j <= 9; j++) {
        let n = i * j;
        let isPrime = true;
        if (n < 2) {
            isPrime = false;
        } else {
            for (let k = 2; k * k <= n; k++) {
                if (n % k === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            document.write("<td style='color:red;'>" + n + "</td>");
        } else {
            document.write("<td>" + n + "</td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");
