const axios = require("axios");

const request = require("request");

const fs = require("fs-extra");

const moment = require("moment-timezone");


module.exports.config = {

    name: "bom",

    version: "1.0.0",

    hasPermssion: 0,

    credits: "BADOL", //don't change my credit 

    description: "Show Owner Info",

    commandCategory: "info",

    usages: "",

    cooldowns: 5

};


module.exports.run = function ({ api, event, Users, args }) {

  const permission = ["61568807452487"];

   if (!permission.includes(event.senderID))

   return api.sendMessage("Only Bot Admin Can Use this command", event.threadID, event.messageID);

  if (args.length !== 2) {

    api.sendMessage(`Invalid number of arguments. Usage: ${global.config.PREFIX}spam [msg] [amount]`, event.threadID);

    return;

  }

  var { threadID, messageID } = event;

  var k = function (k) { api.sendMessage(k, threadID)};


  const msg = args[0];

  const count = args[1];


  //*vonglap


for (i = 0; i < `${count}`; i++) {

 k(`${msg}`);

}


}
