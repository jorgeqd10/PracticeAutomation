import createTestCafe from "testcafe";

const testcafe = await createTestCafe("localhost", 1337, 1338);

try {
    const runner = testcafe.createRunner();

    const failedCount = await runner
        .src(["./QA/tests/test5.js"])
        .browsers(["Chrome"])
        .run();
    console.log("Tests failed:" + failedCount);
} finally {
    await testcafe.close();
}