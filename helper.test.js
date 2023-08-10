describe("Utilities test (with setup and tear-down)", () => {
  beforeEach(() => {
    billAmtInput.value = 50;
    tipAmtInput.value = 10;
    submitPaymentInfo();
  });

  it("should get the sum of the total tip amount of all payments when sumPaymentTotal() is called", () => {
    expect(sumPaymentTotal("tipAmt")).toEqual(10);
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(30);
  });

  it("should get the sum of the total bill amount of all payments when sumPaymentTotal() is called", () => {
    expect(sumPaymentTotal("billAmt")).toEqual(50);
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(150);
  });

  it("should get the sum of the total percent of all payments when sumPaymentTotal() is called", () => {
    expect(sumPaymentTotal("tipPercent")).toEqual(20);
    billAmtInput.value = 50;
    tipAmtInput.value = 10;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipPercent")).toEqual(40);
  });

  it("should create a new td and append it to tr when appendTd(tr, value) is called", () => {
    let newTr = document.createElement("tr");
    appendTd(newTr, "test");
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("test");
  });

  it("shoud create delete td and append ot tr when appendDeleteBtn(tr) is called", () => {
    let newTr = document.createElement("tr");
    appendDeleteBtn(newTr);
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("X");
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
