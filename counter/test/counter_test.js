const CounterTest = artifacts.require("CounterTest");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("CounterTest", function (/* accounts */) {
  it("should assert true", async function () {
    await CounterTest.deployed();
    return assert.isTrue(true);
  });
});
