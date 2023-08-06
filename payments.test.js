it("shoud return the current bill amount when createCurPayment() is called and will return undefined if the inputs are negative or empty", () => {
  billAmtInput.value = "";
  expect(createCurPayment()).toEqual(undefined);
});
