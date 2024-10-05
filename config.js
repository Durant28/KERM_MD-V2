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
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZhdUl3ZDRtaW9WSC9waUhiT1QwTFNLSGs1ZUtzeEIxRjRSeGlmdnZGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWFFY3BzeVdOL1lObGJ0aDZDOUt2WjhlcVZJTElrMW1JZ0tKSm9CSXdHST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSzZ2VEErOXlDSTVCWGJ0RzBXU3cxZXB3akkxNnErY2prLzVITVhUc1c0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0K3RPZmxiZXlwanpaa3ozdE12MHEyUkJnVGhZbEFCN2RoOGZ2VW1KSWlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtCdU1LR3hIM0taeEo1azFYY1J1UEUyY2crVnlFVWE3K3JaRWxNOWpZbTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJaZFBzNEZmOXF3NHVRVHA2L2lYVHVRVUZqMGNTUHRvWHhVcGo4T1k1RE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hyejlEcjFwaWY0bFo0VXdQTlAreUd1VUh0cHNzNlFKc1lwR2dsTnlFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2I3aUtDaWF0S24xdjlGWlFWcmplWjhQekxzbzRBM01MTzZaRUlldWptWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhIVWxPV0V6RFYxNjgySTRDK29HUWlKcmYvL2d6UFNmTHBNYzRFeDZncmZpTkVvK3dSSmdKeG1xSFNuM1V1dGcvUlhNeS8wVm1aeWJXbEg1cjk0QWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6InVtS3EyNUpGSEtlZkthM3NxNHZkdjRJV3FBUUtSY0FrbklqL2licUFHVHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM3Njk3NTE3NTA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBNUQzQUFGMUE1OEE1MEZBOENBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjgxNTU1MDV9XSwibmV4dFByZUtleUlkIjo2MiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYyLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im92dlcxb2ZJVEpHZUNlaDc0U1ZvOGciLCJwaG9uZUlkIjoiZWM5YmY4ZGYtZDkwYi00M2EwLWIyNmQtZjEyMTViODBkZjFhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVLYTltR1lRYmdiMFFuL2lHdHZsU0t1SUhEST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4L1YwdFM1YkxxRjlQZlBURGZSSVF2a1VMMUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUozRlBaWlkiLCJtZSI6eyJpZCI6IjIzNzY5NzUxNzUwNTo4MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLjgqLjg5/jg7zjg6sg8J+lt/CflKUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0kybXNmd0RFTk9laHJnR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik96N1hNMk9McDVRQVNQOXI3cHZib09WTWZvSUF3MGlkVWY5emJ2ZlRoQnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imx2dU5lS2FxaUk0VEVDQXdTNUkyMTBoOFZIQUJBSjRnbVJSZ0YyMWt4blFvK1ZoRGIzcHJ0YTFvVW9QY1dHNWRiSFZaKzlTTDRyeDFVbG5XbjFrM2pnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVQjhRdnE0d2NUT3FOT0dQWGdGaGRwTnNZYWpuMkwrV3RaTFBRaDhjN3ppNmpFUHB3dTh3WktnMWs3L2gyaW0vaWtGRmFkL0w2VDkrcHBaRWxhdFZqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY5NzUxNzUwNTo4MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUcysxek5qaTZlVUFFai9hKzZiMjZEbFRINkNBTU5JblZIL2MyNzMwNFFjIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgxNTU2ODMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRklkIn0="
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
