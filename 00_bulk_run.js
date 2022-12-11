const fs = require("fs")
for (const file of fs.readdirSync(".")) {
    const sep_name = file.split(".");
    if (sep_name.pop() == "js") {
        if (sep_name.join("") != "00_bulk_run") {
            console.log(sep_name.join(""))
            require("./" + sep_name.join(""));
            console.log()
        }
    }
}