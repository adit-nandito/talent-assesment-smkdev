/**
 * Kamu memiliki string yang merepresentasikan angka 3943
 * lalu diberikan sebuah variabel k untuk melakukan
 * replacement karakter sejumlah k pada string
 * untuk mendapatkan bentuk palindrom dengan nilai tertinggi.
 */

/* Aturan:
 * 1. Jika dari sebuah string tidak ditemukan bentuk palindrome-nya 
 * meski sudah melakukan replacement dan 
 * tidak merepresentasikan sebuah angka maka akan mengeluarkan output -1.
 * 2. Tidak boleh menggunakan fungsi bawaan/tools untuk pencarian/filter/sort.
 * 3. Tidak boleh menggunakan looping.
 * 4. Hanya diperkenankan menggunakan rekursif.
 * 

Soal:
Buat fungsi yang digunakan untuk menyelesaikan permasalahan Highest Palindrome! */

function highestPalindrome(a = "3993", k = 1) {
  // code disini
  if (Number.isNaN(Number(a))) {
    return "-1";
  }

  const lengthString = a.length;
  const limit = Math.floor(lengthString / 2);
  let countIndexList = 0;
  const listDifferenceIndex = [];
  const listSameIndex = [];
  const generateListIndexString = () => {
    if (countIndexList < limit) {
      if (a[countIndexList] === a[lengthString - (1 + countIndexList)]) {
        listSameIndex.push(countIndexList);
        listSameIndex.push(lengthString - (1 + countIndexList));
      } else {
        listDifferenceIndex.push(countIndexList);
        listDifferenceIndex.push(lengthString - (1 + countIndexList));
      }

      countIndexList++;
      generateListIndexString();
    }
  };
  generateListIndexString();

  // Replace string by index
  const setCharAt = (str, index, chr) =>
    str.substring(0, index) + chr + str.substring(index + 1);

  let countDifferenceIndex = 0;
  const generateHighestPalindromeByDifferenceIndex = (str) => {
    if (countDifferenceIndex < listDifferenceIndex.length) {
      if (Number(str[listDifferenceIndex[countDifferenceIndex]]) < 9 && k > 0) {
        str = setCharAt(str, listDifferenceIndex[countDifferenceIndex], 9);
        k--;
      }

      countDifferenceIndex++;
      return generateHighestPalindromeByDifferenceIndex(str);
    }

    return str;
  };
  a = generateHighestPalindromeByDifferenceIndex(a);

  if (k >= 2) {
    let countSameIndex = 0;
    const generateHighestPalindromeBySameIndex = (str) => {
      if (countSameIndex < listSameIndex.length) {
        if (Number(str[listSameIndex[countSameIndex]]) < 9 && k > 0) {
          str = setCharAt(str, listSameIndex[countSameIndex], 9);
          k--;
        }

        countSameIndex++;
        return generateHighestPalindromeBySameIndex(str);
      }

      return str;
    };

    a = generateHighestPalindromeBySameIndex(a);
  }

  let count = lengthString;
  let reversed = "";
  const generatePalindrome = (str) => {
    if (count > 0) {
      reversed += str[count - 1];
      count--;
      generatePalindrome(str);
    }

    return reversed;
  };

  const palindrome = generatePalindrome(a);
  return a === palindrome ? a : "-1";
}

module.exports = highestPalindrome;
