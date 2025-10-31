var panjang, lebar, luas;
panjang = prompt("Masukkan Panjang");
lebar = prompt("Masukkan Lebar");
luas = panjang * lebar;

document.writeln('<table border="1">');
document.writeln('<tr class="table-header">');
document.writeln('<th>Variabel</th><th>Data Masukan</th><th>Keluaran</th>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td>Panjang</td><td>' + panjang + '</td><td></td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td>Lebar</td><td>' + lebar + '</td><td></td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td>Luas</td><td>Panjang*Lebar</td><td>' + luas + '</td>');