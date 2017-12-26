const fs = require("fs");

export function createDirectory(name: string) {
    let dir = __dirname + "/" + name;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}