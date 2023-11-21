const { glob } = require("glob");
const { promisify } = require("util");

const globPromise = promisify(glob);

module.exports = async (client) => {
    try {
        const commandFiles = await globPromise(`${process.cwd()}/src/**/*.js`);

        commandFiles.forEach((filePath) => {
            try {
                const command = require(filePath);

                if (command.name) {
                    const splittedPath = filePath.split("/");
                    const directory = splittedPath[splittedPath.length - 2];

                    const properties = { directory, ...command };
                    client.commands.set(command.name, properties);
                    console.log(`${command.name} added to commands in ${directory}`);
                } else {
                    console.log(`${filePath} does not export a command with a name property`);
                }
            } catch (error) {
                console.error(`Error loading command file ${filePath}:`, error);
            }
        });

        console.log("Command loading completed.");
    } catch (error) {
        console.error("Error while loading commands:", error);
    }
};










//if handling doesnt work try this instead



// const { glob } = require("glob");
// const { promisify } = require("util");

// const globPromise = promisify(glob);

// module.exports = async (client) => {
//     const commandFiles = await globPromise(`${process.cwd()}/src/**/*.js`);
//     commandFiles.map((value) => {
//         const file = require(value);
//         const splitted = value.split("/");
//         const directory = splitted[splitted.length - 2];

//         if (file.name) {
//             const properties = { directory, ...file };
//             client.commands.set(file.name, properties);
//             console.log(`${file.name} added commands`)
//         } else {
//             console.log(`${file} dont have name`) 
//         }
//     });
// }