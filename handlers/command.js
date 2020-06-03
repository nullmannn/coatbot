const { readdirSync } = require("fs");
const ascii = require("ascii-table");

let table = new ascii("Komutlar");
table.setHeading("Komut", "Durum");

module.exports = (app) => {
    readdirSync("./komutlar/").forEach(dir => {

        const commands = readdirSync(`./komutlar/${dir}/`).filter(file => file.endsWith(".js"));
        
        for (let file of commands) {
            let pull = require(`../komutlar/${dir}/${file}`);
    
            if (pull.name) {
                app.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, '❌');
                continue;
            }

            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => app.aliases.set(alias, pull.name));

        }
    });
    console.log(table.toString());
}