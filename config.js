//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237697517505";
global.owner = process.env.OWNER_NUMBER || "237697517505";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUsramlOb0ZLYjYzb2FIaGZQa3FXczFyUjRYS0NmY0pXb2lobEdHN0RGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVCcEtmUDM5R2VCTFB2NFRkK0l6WjRHaXo0VUZibnI1TEwvOXZjWjRnND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUHRNSFB5bTM0WHIxQ0VCOHR4TmNMbTJnZkxzY0NIL09rMXR3OHZXem1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzaEVwVHFvZ2U1TC9NZW9mR25rOWpyU04vTzlQZFRpTWk3TUlzSmFuVDFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEZ1dMRUFDakYrb0RYZ09EaFIxMVRTR0liUHRCRW4vbVVPMVFVc3hiR3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlA5bFU1Uk5MUm5QK2VyRWRoMDl1OERLRmF4MGpwQ0R0S3R6ZnJ1MjZGQmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkN1N1FVaERMN2hFeW5BYmNnMmRuVnYxdXJTL1ozdWZqMlJSOHUzWHJudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaG5sa2xLLysvSXd4NFN3aEdCNDRtVVJCRFozTG1ScFJmanR3cU81b2REQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJVbE9FSEVDR0wxRzJySWxUb2J1QURqb1kxREVQNnVCWjQ5cFk3VmtuY09hcUorMFBnK3ZtVVhpTGVJOCtMaW5zVFprYnNUMzRvNHVPT1FEckFUTUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiJRYWRGMGswNjBsbzBINTFhWDZYZzVNN0d0Vy9pQjFhcllRa2l1cElOb1FnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItU0dHRWlOS1NjeXFCMW5zMW93cm1BIiwicGhvbmVJZCI6IjRmYTM4MGVmLTE0MzgtNGVhNS04ZDE5LTQyODI3NjNmYmY4MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUY1U2eXUrYTJiYzd0bEhiUFl4TXYyS1JabzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHVweWxxRk9pcDdJUDhSdFZ5VXhZNXNnNlBjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRLTEsyTEVMIiwibWUiOnsiaWQiOiIyMzc2OTc1MTc1MDU6NTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lXQTR0VVBFSkMvanJjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im95MjZVdGJhdGdKSEpSaWZsQjhsY0VwTHhjdGFWSHlEUVNtUkJGM1grM0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdSeDNLZTFKTGVRdzQ3QVpqbktkME8vRjFFZithRm1pMXFpOHR0cThHa3Nid1hGRUZJYzZuNGhpT1pDdlZEMmgvS0FPc0oxYWhLckgzREIzRmZwMWhBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzZkhRZ1hFUEpZdUFjRnFqb3FKTXhNRWhaQW0yQjQzU1cvT2IzTUt3TmFUNzY3UjhOZUw2VWI3SG1WaWdUOGRCQldkSDNWU1RQek16cUFyRFRBMHdDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY5NzUxNzUwNTo1N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhTXR1bExXMnJZQ1J5VVluNVFmSlhCS1M4WExXbFI4ZzBFcGtRUmQxL3R5In19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYxOTM1NjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQzNaIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜Amirr 🥷🔥⌝☜`",
  author: process.env.PACK_AUTHER || "Amirr 🥷🔥",
  packname: process.env.PACK_NAME || "Amirr 🥷🔥",
  botname: process.env.BOT_NAME || "ᵏᵍ┘Primo🤖𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜Amirr 🥷🔥⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
