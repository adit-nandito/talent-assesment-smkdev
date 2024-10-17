/**
 * Aturan:
 * 1. Tanda braket / karakter yang diperbolehkan sebagai berikut: ( , ) , { , } , atau [ , ].
 * 2. Bracket bisa dipisahkan dengan atau tanpa whitespace.
 * 3. Periksa tanda kurung yang memiliki kecocokan antara braket buka dan braket tutup dengan mengembalikan nilai string YES atau NO.
 *
 * Soal:
 * 1. Buat fungsi untuk menemukan Balanced Bracket dengan kompleksitas paling rendah!
 * 2. Jelaskan kompleksitas dari penyelesaianmu untuk No.3 dan cantumkan di README Repo!
 */

function balanceBracket(a) {
  // code disini
  const listItem = [];
  a = a.replaceAll(/\s/g, "");

  for (let i = 0; i < a.length; i++) {
    if (
      (a[i] === ")" && listItem.includes("(")) ||
      (a[i] === "}" && listItem.includes("{")) ||
      (a[i] === "]" && listItem.includes("["))
    ) {
      listItem.pop();
    } else {
      listItem.push(a[i]);
    }
  }

  return listItem.length === 0 ? "YES" : "NO";
}

module.exports = balanceBracket;
