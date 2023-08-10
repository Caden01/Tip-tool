describe("Payments test (with setup and teardown)", () => {
  beforeEach(() => {
    billAmtInput.value = 50;
    tipAmtInput.value = 10;
  });

  it("should add a new payment when submitPaymentInfo() is called", () => {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual("50");
    expect(allPayments["payment1"].tipAmt).toEqual("10");
    expect(allPayments["payment1"].tipPercent).toEqual(20);
  });

  it("should not add a new payment when submitPaymentInfo() is called with an empty input", () => {
    billAmtInput.value = "";
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it("should update #paymentTable when appendPaymentTable() is called", () => {
    let curPayment = createCurPayment();
    allPayments["payment1"] = curPayment;
    appendPaymentTable(curPayment);
    let list = document.querySelectorAll("#paymentTable tbody tr td");

    expect(list.length).toEqual(3);
    expect(list[0].innerText).toEqual("$50");
    expect(list[1].innerText).toEqual("$10");
    expect(list[2].innerText).toEqual("20%");
  });

  it("should create a new payment when createCurPayment() is called", () => {
    let expectedPayment = {
      billAmt: "50",
      tipAmt: "10",
      tipPercent: 20,
    };
    expect(createCurPayment()).toEqual(expectedPayment);
  });

  it("should create a new payment with an empty input when createCurPayment() is called", () => {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    let curPayment = createCurPayment();
    expect(curPayment).toEqual(undefined);
  });

  afterEach(() => {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    paymentId = 0;
    allPayments = {};
  });
});
