module.exports = function toReadable (number) {
    let str = '';
    let n = Number(number);
    let a = Number(Math.floor(n/100));
    let c = Number(n%100);
    let d = Number(n%10);
    if (a === 1) {
      str +='one hundred';
    } else if (a === 2) {
      str += 'two hundred';
    } else if (a === 3) {
      str += 'three hundred';
    } else if (a === 4) {
      str += 'four hundred';
    } else if (a === 5) {
      str += 'five hundred';
    } else if (a === 6) {
      str += 'six hundred';
    } else if (a === 7) {
      str += 'seven hundred';
    } else if (a === 8) {
      str += 'eight hundred';
    } else if (a === 9) {
      str += 'nine hundred';
    }
    if (c === 10) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'ten';
    } else if (c === 11) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'eleven';
    } else if (c === 12) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'twelve';
    } else if (c === 13) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'thirteen';
    } else if (c === 14) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'fourteen';
    } else if (c === 15) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'fifteen';
    } else if (c === 16) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'sixteen';
    } else if (c === 17) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'seventeen';
    } else if (c === 18) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'eighteen';
    } else if (c === 19) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'nineteen';
    } else if (c >= 20 && c < 30) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'twenty';
    } else if (c >= 30 && c < 40) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'thirty';
    } else if (c >= 40 && c < 50) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'forty';
    } else if (c >= 50 && c < 60) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'fifty';
    } else if (c >= 60 && c < 70) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'sixty';
    } else if (c >= 70 && c < 80) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'seventy';
    } else if (c >= 80 && c < 90) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'eighty';
    } else if (c >= 90 && c < 100) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'ninety';
    }
    if (d === 1 && c != 11) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'one';
    } else if (d === 2 && c != 12) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'two';
    } else if (d === 3 && c != 13) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'three';
    } else if (d === 4 && c != 14) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'four';
    } else if (d === 5 && c != 15) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'five';
    } else if (d === 6 && c != 16) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'six';
    } else if (d === 7 && c != 17) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'seven';
    } else if (d === 8 && c != 18) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'eight';
    } else if (d === 9 && c != 19) {
      if (str.length > 0) {
        str += ' ';
      }
      str += 'nine';
    } else if (d === 0 && str.length === 0) {
      str = 'zero';
    }
    return str;
}