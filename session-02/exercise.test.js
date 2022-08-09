const { transformArrayToUpper } = require("./exercise.js");

describe("transformArrayToUpper()", () => {
  test('should convert ["abc"] to ["ABC"]', () => {
    expect(transformArrayToUpper(["abc"])).toEqual(["ABC"]);
  });

  test('should convert ["apple", "banana", "coconut"] to ["ABC"]', () => {
    expect(transformArrayToUpper(["apple", "banana", "coconut"])).toEqual([
      "APPLE",
      "BANANA",
      "COCONUT",
    ]);
  });

  test("should convert [] to []", () => {
    expect(transformArrayToUpper([])).toEqual([]);
  });
});

describe("sumOfAllAges()", () => {
  test("should return 0 for empty input", () => {
    expect(sumOfAllAges([])).toBe(0);
  });

  test("should return 0 for inputs missing ages", () => {
    expect(sumOfAllAges([{ gpa: 4.0 }, {}, { name: "Sally" }])).toBe(0);
  });

  test("should return 51 for inputs with ages summing to 51", () => {
    expect(
      sumOfAllAges([
        { name: "Sandra", age: 31 },
        { name: "Didi", age: 20 },
      ])
    ).toBe(51);
  });

  test("should return 51 and ignore inputs with missing ages", () => {
    expect(
      sumOfAllAges([{ name: "Sandra", age: 31 }, {}, { name: "Didi", age: 20 }])
    ).toBe(51);
  });
});
