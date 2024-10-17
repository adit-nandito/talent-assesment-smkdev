/**
 * Alfabet dari a sampai z memiliki bobot sebesar angka urutannya,
 * misal: a = 1, b = 2, c = 3, ..., z = 26.
 * Bobot sebuah string merupakan penjumlahan bobot dari
 * kesuluruhan karakter.
 * Contoh: gits = 7 + 9 + 20 + 19 = 55
 */

/**
 * Aturan:
 * Jika terdapat karakter yang berulang dan berurutan perlu dirincikan ke dalam bentuk substring dari perulangan pertama hingga n.
 * Contoh: bbccc => b, bb, c, cc, ccc.
 *
 * Soal:
 * Buat fungsi untuk menyelesaikan permasalahan Weighted Strings!
 */

function weightedString(a = "abbcccd", b = [1, 3, 9, 8]) {
  // code disini
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let consecutive = 1;
  const listWeight = [];
  for (let i = 0; i < a.length; i++) {
    const letter = a[i];
    const index = alphabet.indexOf(letter);
    let weight = index + 1;
    if (i !== 0 && letter === a[i - 1]) {
      consecutive++;
      weight *= consecutive;
    } else {
      consecutive = 1;
    }

    listWeight.push(weight);
  }

  return b.map((val) => {
    const isMatch = listWeight.find((item) => val === item);
    return isMatch ? "YES" : "NO";
  });
}

module.exports = weightedString;
