// We import Chai to use its asserting functions here.
const { expect } = require("chai");
const { hardhatArguments } = require("hardhat");

// `describe` is a Mocha function that allows you to organize your tests. It's
// not actually needed, but having your tests organized makes debugging them
// easier. All Mocha functions are available in the global scope.

// `describe` receives the name of a section of your test suite, and a callback.
// The callback must define the tests of that section. This callback can't be
// an async function.
describe("Billion dollar calendar contract", function () {
  // Mocha has four functions that let you hook into the the test runner's
  // lifecyle. These are: `before`, `beforeEach`, `after`, `afterEach`.

  // They're very useful to setup the environment for tests, and to clean it
  // up after they run.

  // A common pattern is to declare some variables, and assign them in the
  // `before` and `beforeEach` callbacks.

  let BillionDollarCalendar;
  let hardhatBillionDollarCalendar;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  // `beforeEach` will run before each test, re-deploying the contract every
  // time. It receives a callback, which can be async.
  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    BillionDollarCalendar = await ethers.getContractFactory("BillionDollarCalendar");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // To deploy our contract, we just have to call BillionDollarCalendar.deploy() and await
    // for it to be deployed(), which happens once its transaction has been
    // mined.
    hardhatBillionDollarCalendar = await BillionDollarCalendar.deploy();
  });

  // You can nest describe calls to create subsections.
  describe("Deployment", function () {
    // `it` is another Mocha function. This is the one you use to define your
    // tests. It receives the test name, and a callback function.

    // If the callback function is async, Mocha will `await` it.
    it("Should set the right owner", async function () {
      // Expect receives a value, and wraps it in an Assertion object. These
      // objects have a lot of utility methods to assert values.

      // This test expects the owner variable stored in the contract to be equal
      // to our Signer's owner.
      expect(await hardhatBillionDollarCalendar.owner()).to.equal(owner.address);
    });
  });

  describe("BuyDate", function () {
    it("should be able to buy date", async () => {
      await hardhatBillionDollarCalendar.connect(addr1).buyDate(11, 11, 2020, 123123);
      expect((await hardhatBillionDollarCalendar.dateOwners("11/11/2020"))[0]).to.equal(addr1.address)
      expect((await hardhatBillionDollarCalendar.dateOwners("11/11/2020"))[1].toString()).to.equal("123123")
    })

    it("should NOT be able to buy date that is already owned", async () => {
      await hardhatBillionDollarCalendar.buyDate(11, 11, 2020, 123123);
      expect((await hardhatBillionDollarCalendar.dateOwners("11/11/2020"))[0]).to.equal(owner.address)
      expect((await hardhatBillionDollarCalendar.dateOwners("11/11/2020"))[1].toString()).to.equal("123123")
      await expect(
        hardhatBillionDollarCalendar.connect(addr1).buyDate(11, 11, 2020, 123123)
      ).to.be.revertedWith("Date already owned");
    });

    it('should fail on invalid date', async () => {
      await expect(
        hardhatBillionDollarCalendar.buyDate(11, 113, 2020, 123123)
      ).to.be.revertedWith("Must be valid date");
      await expect(
        hardhatBillionDollarCalendar.buyDate(2, 29, 2023, 123123) // not leap yar
      ).to.be.revertedWith("Must be valid date");
      await hardhatBillionDollarCalendar.buyDate(2, 29, 2024, 123123) // leap year
    })
  });

  describe("TransferDate", function () {
    it("should be able to transfer date", async () => {
      await hardhatBillionDollarCalendar.buyDate(11, 11, 2020, 123123);
      expect((await hardhatBillionDollarCalendar.dateOwners("11/11/2020"))[0]).to.equal(owner.address)
      expect((await hardhatBillionDollarCalendar.dateOwners("11/11/2020"))[1].toString()).to.equal("123123")
      await hardhatBillionDollarCalendar.transferDate(11, 11, 2020, 123123, addr1.address);
      expect((await hardhatBillionDollarCalendar.dateOwners("11/11/2020"))[0]).to.equal(addr1.address)
      expect((await hardhatBillionDollarCalendar.dateOwners("11/11/2020"))[1].toString()).to.equal("123123")
    })

    it("should NOT be able to transfer date you don't own", async () => {
      await hardhatBillionDollarCalendar.buyDate(11, 11, 2020, 123123);
      expect((await hardhatBillionDollarCalendar.dateOwners("11/11/2020"))[0]).to.equal(owner.address)
      expect((await hardhatBillionDollarCalendar.dateOwners("11/11/2020"))[1].toString()).to.equal("123123")
      await expect(
        hardhatBillionDollarCalendar.connect(addr1).transferDate(11, 11, 2020, 123123, addr1.address)
      ).to.be.revertedWith("Only owner can transfer this date");
    })

    it('should fail on invalid date', async () => {
      await expect(
        hardhatBillionDollarCalendar.transferDate(11, 113, 2020, 123123, addr1.address)
      ).to.be.revertedWith("Must be valid date");
    })
  });


});