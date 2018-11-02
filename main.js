// ambil form element
var formKalkulator = document.forms.formKalkulator;

var hasil = document.querySelector("#hasil");

// fungsi hitung nilai
var hitung = (nilai1 = 0, nilai2 = 0, operasi = "+") => {

  let total = 0;

  if (operasi === "+") {
    total = nilai1 + nilai2;
  } else if (operasi === "-") {
    total = nilai1 - nilai2;
  } else if (operasi === "*") {
    total = nilai1 * nilai2;
  } else if (operasi === "/") {
    total = nilai1 / nilai2;
  }
  
  return total.toFixed(2);

}

// cancel form submission
formKalkulator.onsubmit = () => {
  return false;
}

// event klik tombol hitung
var btnHitung = document.querySelector("#hitung");
btnHitung.onclick = () => {
  nilai1 = parseFloat(formKalkulator.nilai1.value);
  
  nilai2 = parseFloat(formKalkulator.nilai2.value);

  let operasi = formKalkulator.operasi.value;

  if (isNaN(nilai1) || isNaN(nilai2)) {
    alert('Mohon isi input terlebih dahulu dan pastikan kamu memasukkan angka!');
  } else {
    let total = hitung(nilai1, nilai2, operasi);
    total = total.toString();
    if (total.endsWith(".00")) {
      total = total.slice(0, total.length - 3);
    }

    hasil.innerHTML = `Hasil: ${total}`;
  }
}

// event klik tombol bersih
var btnBersih = document.querySelector("#bersih");
btnBersih.onclick = () => {
  formKalkulator.nilai1.value = "";
  formKalkulator.nilai2.value = "";
  formKalkulator.operasi.value = "+";
  hasil.innerHTML = "";
}