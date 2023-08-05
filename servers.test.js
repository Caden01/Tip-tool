describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should not add a new server when submit ServerInfo() is called with an empty input", () => {
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should upadte the #serverTable when updateServerTable() is called", () => {
    submitServerInfo();
    updateServerTable();
    let list = document.querySelectorAll("#serverTable tbody tr td");

    expect(list[0].innerText).toEqual("Alice");
  });

  afterEach(function () {
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
