abstract class StringCompression {
  static Compress(str: string) {
    let actualLetter = str.charAt(0);
    let stringBuilder = '';
    let count = 0;

    for (let i = 0; i <= str.length; i++) {
      if (str.charAt(i) == actualLetter) {
        count++;
      } else {
        stringBuilder += `${actualLetter}${count}`;
        actualLetter = str.charAt(i);
        count = 0;
        i--;
      }
    }

    return stringBuilder;
  }
}

const original = 'abbccccccde';
const compressed = StringCompression.Compress(original);
console.log(compressed);
