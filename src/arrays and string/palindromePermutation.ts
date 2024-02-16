abstract class PalindromePermutation {
  private static getCharNumber(c: string) {
    const val = c.toLocaleLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);

    if (0 <= val && val <= 25) return val;

    return -1;
  }

  public static isPermutationOfPalindrome(phrase: string) {
    let countOdd = 0;
    const table: number[] = new Array(26);

    for (let i = 0; i < table.length; i++) {
      table[i] = 0;
    }

    phrase.split('').forEach((char) => {
      const x = this.getCharNumber(char);

      if (x != -1) {
        table[x]++;

        if (table[x] % 2 === 1) {
          countOdd++;
        } else {
          countOdd--;
        }
      }
    });

    return countOdd <= 1;
  }
}

const strings = ['Rats live on no evil star', 'A man, a plan, a canal, panama', 'Lleve', 'Tacotac', 'asda'];

strings.forEach((string) => {
  const a = PalindromePermutation.isPermutationOfPalindrome(string);
  console.log(string + ' ' + a);
});
