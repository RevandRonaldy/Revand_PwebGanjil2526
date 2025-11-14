function hitungIP() {
    var quiz = parseFloat(document.getElementById("quiz").value);
    var tugas = parseFloat(document.getElementById("tugas").value);
    var uts = parseFloat(document.getElementById("uts").value);
    var uas = parseFloat(document.getElementById("uas").value);

    if (isNaN(quiz) || isNaN(tugas) || isNaN(uts) || isNaN(uas)) {
        alert("Semua nilai harus diisi dengan angka!");
        return;
    }

    var nilaiAkhir = (quiz * 0.1) + (tugas * 0.2) + (uts * 0.3) + (uas * 0.4);
    var indeks, ket;

    if (nilaiAkhir > 80 && nilaiAkhir <= 100) {
        indeks = "A";
        ket = "Lulus dengan sangat baik";
    } else if (nilaiAkhir > 68 && nilaiAkhir <= 80) {
        indeks = "B";
        ket = "Lulus dengan baik";
    } else if (nilaiAkhir > 55 && nilaiAkhir <= 68) {
        indeks = "C";
        ket = "Lulus dengan cukup";
    } else if (nilaiAkhir > 38 && nilaiAkhir <= 55) {
        indeks = "D";
        ket = "Lulus dengan kurang";
    } else if (nilaiAkhir >= 0 && nilaiAkhir <= 38) {
        indeks = "E";
        ket = "Tidak Lulus";
    } else {
        alert("Nilai tidak valid (0–100)!");
        return;
    }

    document.getElementById("nilaiAkhir").value = nilaiAkhir.toFixed(2);
    document.getElementById("indeksPrestasi").value = indeks;
    document.getElementById("keterangan").value = ket;
}

function ulangIP() {
    document.getElementById("quiz").value = "";
    document.getElementById("tugas").value = "";
    document.getElementById("uts").value = "";
    document.getElementById("uas").value = "";
    document.getElementById("nilaiAkhir").value = "";
    document.getElementById("indeksPrestasi").value = "";
    document.getElementById("keterangan").value = "";
}