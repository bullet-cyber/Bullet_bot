module.exports.config = {
name: "bom",
  version: "",
  permssion: 2,
  credits: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕",
  description: "",
  category: "spam",
  usages: "[msg] [amount]",
  prefix: true,
  cooldowns: 5,
  dependencies: "",
};

module.exports.run = function ({ api, event, Users, args }) {
  const permission = ["100001381266797"];
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
