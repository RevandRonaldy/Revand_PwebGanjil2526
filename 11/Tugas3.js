var jenisMinuman;
jenisMinuman = prompt('Masukkan jenis minuman');
switch (jenisMinuman.toLowerCase()) {
    case 'teh manis':
        document.writeln('<h2>Hari ini minum Teh Manis</h2>');
        break;
    case 'kopi':
        document.writeln('<h2>Hari ini minum Kopi</h2>');
        break;
    case 'susu':
        document.writeln('<h2>Hari ini minum Susu</h2>');
        break;
    case 'jus jeruk':
        document.writeln('<h2>Hari ini minum Jus Jeruk</h2>');
        break;
    default:
        document.writeln('<h2>Tidak minum apa-apa.</h2>');
        break;
}