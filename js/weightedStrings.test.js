const weightedString = require('./weightedStrings')

test('weightedString with input "abbcccd" and [1, 3, 9, 8] to equal ["YES", "YES", "YES", "NO"]', () => {
    expect(weightedString("abbcccd", [1, 3, 9, 8])).toEqual(["YES", "YES", "YES", "NO"]);
});

test('weightedString with input "aaabbbcccddd" and [5, 9, 7, 8, 12, 5] to equal ["NO", "YES", "NO", "YES", "YES", "NO"]', () => {
    expect(weightedString("aaabbbcccddd", [5, 9, 7, 8, 12, 5])).toEqual(["NO", "YES", "NO", "YES", "YES", "NO"]);
});

test('weightedString with input "getitssimple" and [1, 2, 8, 7, 12, 38, 10] to equal [NO, NO, NO, YES, YES, YES, NO]', () => {
    expect(weightedString("getitssimple", [1, 2, 8, 7, 12, 38, 10])).toEqual(["NO", "NO", "NO", "YES", "YES", "YES", "NO"]);
});
