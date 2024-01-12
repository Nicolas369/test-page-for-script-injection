function testScriptImportedFromGithub(){
    alert("script working!!!");
}

async function importEthersModule() {
    const ethers = await import("https://cdn.ethers.io/lib/ethers-5.2.esm.min.js");
    return ethers
}