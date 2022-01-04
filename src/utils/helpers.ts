export function getLongestWordInList(list: string[]): string {
  const longestWord = list.reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, '');

  return longestWord;
}
