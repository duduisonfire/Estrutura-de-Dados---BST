abstract class IsUnique {
  static IsUniqueChar(str: string): boolean {
    if (str.length > 256) return false;

    let checker = 0;

    for (let i = 0; i < str.length; i++) {
      const val = str.charCodeAt(i) - 'a'.charCodeAt(0);
      if ((checker & (1 << val)) > 0) return false;
      checker |= 1 << val;
    }

    return true;
  }
}

const word = ['abcde', 'hello', 'apple', 'kite', 'padle'];

word.forEach((word) => {
  console.log(word + ': ' + IsUnique.IsUniqueChar(word));
});
