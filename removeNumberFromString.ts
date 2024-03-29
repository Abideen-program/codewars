// REMOVING NUMBERS FROM STRINGS

// Receive a string
// Return string, exluding any number in the string
function stringClean(s: any) {
  // Function will return the cleaned string
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) || s[i] == " ") {
      result += s[i];
    }
  }
  return result;
}

//   Example
stringClean("");
stringClean("! !");
stringClean("123456789");
stringClean("(E3at m2e2!!)");
stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!");
stringClean("A1 A1! AAA   3J4K5L@!!!");
stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@");
stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 ");
stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 ");
stringClean('My "me3ssy" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?');
stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3");
