import assert from "assert";
import createRepo from "../lib/createRepo.js";
import getRepoTokenAmount from "../lib/getRepoTokenAmount.js";

describe("createRepo", function () {
  it("should create a repo and return a token amount of 1000000", async function () {
    await createRepo("john", "john/myRepo", "", "222", "");

    let resTokenAmount = await getRepoTokenAmount(
      /*owner:*/ "",
      /*repo:*/ "john/myRepo",
      /*pr_id:*/ "",
      /*contributor:*/ "",
      /*side:*/ ""
    );

    let tokenAmount = Number(resTokenAmount);

    assert.equal(
      tokenAmount,
      1_000_000,
      "Failed to create a repo in the database"
    );
  });
});
