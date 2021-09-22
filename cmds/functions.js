// random function
function r(num) {
    return Math.floor(Math.random()*num);
}

// reading files function
function read(path, message, args) {
    const fs = require('fs')
    // reading from file
    fs.readFile(path, 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        // storing data into a string array
        var lines = data.split('\n');
        // check if there are arguments
        let options = [];
        if (args.length === 0) {
            var chosen = lines[r(lines.length)]
            message.channel.send({ content: chosen });
        } else {
            // when the bulk of a function is dedicated to one command asdfhkjsf
            // linear search through data for matching keywords
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].toLowerCase().includes(args)) {
                    // storing matching data into an array
                    options.push(lines[i]);
                }
            }
            // choosing at most 3 random data points to send
            if (options.length === 0) {
                message.channel.send({ content: "It appears that I do not have a recipe for `" + args + 
                "`.\nIf you wish, you can try again using less keywords or specificity." });
            } else if (options.length <= 3) {
                message.channel.send({ content: "Here are some recipes that have matched your input: \n" });
                for (let i = 0; i < options.length; i++) {
                    message.channel.send(options[i] + "\n");
                }
                message.channel.send({ content: "If you screw up making one of my recipes, I will know." });
            } else if (options.length > 3) {
                message.channel.send({ content: "Here are some recipes that have matched your input: \n" });
                for (let j = 0; j < 3; j++) {
                   // choosing random recipe
                   var temp = r(options.length);
                   message.channel.send(options[temp] + "\n");
                   // removing sent recipe to prevent duplicate
                   options.splice(temp, 1);
               }
               message.channel.send({ content: "If you screw up making one of my recipes, I will know." });
            }
        }
    })
}

// getting user from mention (yoinked directly from discord.js help guide)
function getUser(mention, client) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }
        return client.users.cache.get(mention);
    }
}

// getting user avatar link
function getAv(message, user) {
    if (!user) {
        return message.reply('Please use a proper mention for this command!');
    }
    // getting user avatar url
    return user.displayAvatarURL({ format: 'png', dynamic: true });
}

// adjust font size based on the length of text
function fontSize(canvas, text, defSize) {
	const context = canvas.getContext('2d');
	// default font size
	let fontSize = defSize;
    // decrementing font size until it fits
    do 
    {
        context.font = `${fontSize -= 1}px sans-serif`;
    } while (context.measureText(text).width > canvas.width - 5); 
	return fontSize;
};

// exporting methods
module.exports = { r, read, getUser, getAv, fontSize };