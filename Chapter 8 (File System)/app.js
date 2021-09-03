const fs = require("fs").promises;
async function writeFile(data) {
    try {
        await fs.writeFile("./test.json", data);
        console.log("The file is saved");
    } catch (e) {
        console.error(e);
    }
}
//writeFile(JSON.stringify({ msg: "Hello world" }));
async function readFile() {
    try {
        let data = await fs.readFile("./test.json", {
            encoding: "utf8",
        });
        console.log(JSON.parse(data));
    } catch (e) {
        console.error(e);
    }
}
//readFile();
async function stat() {
    try {
        let stat = await fs.stat("./test.json");
        let stat2 = await fs.stat(".");
        console.log(stat.isDirectory(), stat.isFile());
        console.log(stat2.isDirectory(), stat2.isFile());
    } catch (e) {
        console.error(e);
    }
}
stat();
