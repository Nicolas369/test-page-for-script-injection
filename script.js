function testScriptImportedFromGithub(){
    alert("script working!!!");
}

async function importEthersModule() {
    const ethers = fetch("https://cdn.ethers.io/lib/ethers-5.2.esm.min.js", {
        method: "GET",
        mode: "no-cors",
    });
    return ethers
}