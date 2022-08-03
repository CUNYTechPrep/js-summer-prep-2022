const { validUsername, validPassword } = require("./validators.js");

describe("validUsername():", () => {
  test("should return true for usernames with length between 3-10 letters", async () => {
    expect(validUsername("apple")).toBeTruthy();
  });
  test("should return true for usernames with 3 letters", async () => {
    expect(validUsername("abc")).toBeTruthy();
    expect(validUsername("xyz")).toBeTruthy();
  });
  test("should return false for usernames with less than 3 letters", async () => {
    expect(validUsername("ac")).toBeFalsy();
    expect(validUsername("z")).toBeFalsy();
  });
  test("should return true for usernames with 10 letters", async () => {
    expect(validUsername("avaliduser")).toBeTruthy();
  });
  test("should return false for usernames with more than 10 letters", async () => {
    expect(validUsername("invaliduser")).toBeFalsy();
    expect(validUsername("verylonginvalidusername")).toBeFalsy();
  });
  test("should return false for usernames starting with a number", async () => {
    expect(validUsername("1pizza")).toBeFalsy();
  });
  test("should return true for usernames with a number", async () => {
    expect(validUsername("num1gamer")).toBeTruthy();
  });
  test("should return true for usernames with uppercase letters", async () => {
    expect(validUsername("Num1Gamer")).toBeTruthy();
  });
  test("should return false for usernames with special chars", async () => {
    expect(validUsername("@shark")).toBeFalsy();
    expect(validUsername("lab.guest")).toBeFalsy();
    expect(validUsername("newUser!")).toBeFalsy();
  });
});

describe("validPassword():", () => {
  test("should return true for passwords of length between 10-64 and contain at least 1 letter, 1 number, and 1 special character", async () => {
    expect(validPassword("secr3tP@ssword123!!")).toBeTruthy();
  });
  test("should return true for passwords of length 10", async () => {
    expect(validPassword("secr3tP@ss")).toBeTruthy();
  });
  test("should return true for passwords of length 64", async () => {
    expect(
      validPassword(
        "secr3tP@sssecretP@sssecretP@sssecretP@sssecretP@sssecretP@ssPASS"
      )
    ).toBeTruthy();
  });
  test("should return false for passwords with length greater than 64", async () => {
    expect(
      validPassword(
        "secr3tP@sssecretP@sssecretP@sssecretP@sssecretP@sssecretP@ssPASS!"
      )
    ).toBeFalsy();
    expect(
      validPassword(
        "secr3tP@sssecretP@sssecretP@sssecretP@sssecretP@sssecretP@ssPASS!!!!!!!!"
      )
    ).toBeFalsy();
  });
  test("should return false for passwords with length less than 10", async () => {
    expect(validPassword("s@cr3t!")).toBeFalsy();
    expect(validPassword("s@cr3t!!!")).toBeFalsy();
  });

  test("should return false for passwords that do not contain at least 1 letter", async () => {
    expect(validPassword("1234@#$%&*1223")).toBeFalsy();
  });
  test("should return false for passwords that do not contain at least 1 number", async () => {
    expect(validPassword("secretp@ssword")).toBeFalsy();
  });
  test("should return false for passwords that do not contain at least 1 special character", async () => {
    expect(validPassword("s3cretpassword")).toBeFalsy();
  });

  test("should return false for passwords that are all letters", async () => {
    expect(validPassword("secretpassword")).toBeFalsy();
  });
  test("should return false for passwords that are all numbers", async () => {
    expect(validPassword("12345678901234")).toBeFalsy();
  });
  test("should return false for passwords that are all special characters", async () => {
    expect(validPassword("@#$%^!!@#$%^&!")).toBeFalsy();
  });
});
