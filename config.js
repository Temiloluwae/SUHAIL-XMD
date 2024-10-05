const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="olokedetemiloluwa@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Smile" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_18_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc1LFxuICAgICAgICA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxLFxuICAgICAgICA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgODEsXG4gICAgICAgIDcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI4LFxuICAgICAgICA4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBiczFaa2pkRzZFMjRxd3dNOUhjQ1p0eDhWTU9peVRMNURHNEhuOGI2Zm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImoxNFFrRHNoU0xLeG13UG9zNWhGOXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGQ2YmU2OTYtM2EyZC00MmM1LWJhNzktMTMyOWZjZDU4OTBhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDM0LFxuICAgICAgMTk0LFxuICAgICAgMjQ2LFxuICAgICAgMjA2LFxuICAgICAgMjM1LFxuICAgICAgMTM2LFxuICAgICAgMzcsXG4gICAgICAyMDUsXG4gICAgICAxNjIsXG4gICAgICA5NCxcbiAgICAgIDEsXG4gICAgICAxMjEsXG4gICAgICA3NyxcbiAgICAgIDg1LFxuICAgICAgMTk3LFxuICAgICAgMTA2LFxuICAgICAgMTMsXG4gICAgICAxMCxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDE0MyxcbiAgICAgIDIyMCxcbiAgICAgIDI1NSxcbiAgICAgIDM4LFxuICAgICAgNjAsXG4gICAgICA3NixcbiAgICAgIDE5MCxcbiAgICAgIDI5LFxuICAgICAgMTA3LFxuICAgICAgNTcsXG4gICAgICAxMTcsXG4gICAgICA0NixcbiAgICAgIDg1LFxuICAgICAgMTgzLFxuICAgICAgMjIyLFxuICAgICAgMTI5LFxuICAgICAgMTQ3LFxuICAgICAgMCxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYOUdTU0dMNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MDAxODc3MzoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5NXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuSVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbkxcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5FXCIsXG4gICAgXCJsaWRcIjogXCI0MTM3ODE2NzkyNjk0MjoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOVFh2MjRRcTlDRHVBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNkZWFzTnB5UFRicVlJVU9BcngrT0w2TTJrU3AvSjRpdlVPVWtFUlVwbU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibzI3c3FTdmdHOWY0a0toMXBsSkl1TUk3SzMrcitRM2hSa01jNmplYWNjNlhKYVBqSlY2VGRmbTcyUEhHeU85TmZLUzYwOVVEckFYc3puajQ2YkNxQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwienE3NWdwZ3A5R0lFMEpkUzRQK1ZYVEs5Z0U1cjNpQkVFQ2kxTTZvSE5sS29DV1BmSzMwdFdNazZwNjhNMEVCMXNwV2dUbEg5dFJyaGI2TFpoRGFzQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3MDAxODc3MzoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MTEyNjg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHNSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIc1IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJScmM1a2Fra3ZTMDdhMXVoYzQ0Z3hyVWFqT1hQWGR1ZkxOaVN0OWxvMTJzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzMTczMDEzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI3NTE0NDY5MTgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
