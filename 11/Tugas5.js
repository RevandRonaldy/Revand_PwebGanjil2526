const tugas5 = [];

for (let i = 0; i < 3; i++) {
    const nama = prompt("Masukkan nama barang : ");
    const harga = prompt("Masukkan harga barang : ");
    const jumlah = prompt("Masukkan jumlah barang : ");
    tugas5.push({
        nama,
        harga: Number(harga),
        jumlah: Number(jumlah)
    });
}

document.writeln('<table border="1">');
document.writeln('<tr class="table-header">')
document.writeln('<th>Nama Barang</th><th>Harga Barang</th><th>Jumlah Beli</th><th>Sub Total</th>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td>' + tugas5[0].nama + '</td><td>' + tugas5[0].harga + '</td><td>' + tugas5[0].jumlah + '</td><td>' + (tugas5[0].harga * tugas5[0].jumlah) + '</td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td>' + tugas5[1].nama + '</td><td>' + tugas5[1].harga + '</td><td>' + tugas5[1].jumlah + '</td><td>' + (tugas5[1].harga * tugas5[1].jumlah) + '</td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td>' + tugas5[2].nama + '</td><td>' + tugas5[2].harga + '</td><td>' + tugas5[2].jumlah + '</td><td>' + (tugas5[2].harga * tugas5[2].jumlah) + '</td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td colspan="3">Total Harga Semua Barang</td><td><strong>' + ((tugas5[0].harga * tugas5[0].jumlah) + (tugas5[1].harga * tugas5[1].jumlah) + (tugas5[2].harga * tugas5[2].jumlah)) + '</strong></td>');
document.writeln('</tr>');
document.writeln("<td colspan='2'></td><td colspan='2'><button onclick=\"bayar()\">Bayar</button></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td colspan='4'>Revand Ronaldy</td>");
document.writeln("</tr>");
document.writeln(" </table>");

var total = (tugas5[0].harga * tugas5[0].jumlah) +
            (tugas5[1].harga * tugas5[1].jumlah) +
            (tugas5[2].harga * tugas5[2].jumlah);

function bayar() {
        uang = prompt("Masukkan jumlah uang: ");
        total = alert("Bayar : " + uang + " Total Belanjaan : " + total + " Kembalian : " + (uang - total));
    }