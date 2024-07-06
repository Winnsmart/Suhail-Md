const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_30_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDczLFxuICAgICAgICA4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMixcbiAgICAgICAgMTIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MixcbiAgICAgICAgODYsXG4gICAgICAgIDk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM3LFxuICAgICAgICA5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICA0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgMjI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTExLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNixcbiAgICAgICAgMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU3LFxuICAgICAgICA0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVBZTh1MVZhZnAwTkVRVk1MRFAyeldDRW5nY0ZhUjhBUUloZmhIcDBUd1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk8wUGlOcDF4UWJtZ1BHU3laZTlEUmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDUwODc4MDYtZDg2ZC00NDI4LTlmYzItOWQ1NjM5ZjIwMDBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMTc1LFxuICAgICAgNjcsXG4gICAgICAyMDEsXG4gICAgICAxNTIsXG4gICAgICA2OCxcbiAgICAgIDExMyxcbiAgICAgIDcxLFxuICAgICAgMjcsXG4gICAgICAyMzEsXG4gICAgICA5MyxcbiAgICAgIDE3MSxcbiAgICAgIDk3LFxuICAgICAgMjQ5LFxuICAgICAgMjEyLFxuICAgICAgMjAyLFxuICAgICAgNyxcbiAgICAgIDU4LFxuICAgICAgNDYsXG4gICAgICAxMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgMTMwLFxuICAgICAgNzQsXG4gICAgICAxODIsXG4gICAgICA5NCxcbiAgICAgIDc4LFxuICAgICAgNzEsXG4gICAgICA4MixcbiAgICAgIDIwNSxcbiAgICAgIDE4OCxcbiAgICAgIDIzOCxcbiAgICAgIDI0NyxcbiAgICAgIDIzLFxuICAgICAgMTAxLFxuICAgICAgMTg0LFxuICAgICAgMjA5LFxuICAgICAgODYsXG4gICAgICAxMjEsXG4gICAgICA2MSxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDWkJDOEM3QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzNjA0NDg0MToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTAwMjkyMTY3MjU4MzM0OjIxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1lZXQgVGhlIFdvb/CfkoDwn46uXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlN2d2VrRUVJL0dwYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwWHAraC9SNTgwdUw0VjhuWi9BdVRzMlJnbWJmMUxPWW51S1hhMG9DZmdFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImd3blN3N2lnRWRHc3ZwSTQ4NFMvd0xNaS9pTXExQWo0OThVa2RQQzdjTUdLNTlpTmhnMEVsOXI3OTMrYlVlWVhjOU1EWWxXOTdUTnZCREUrUFFwSEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5DY1MwS00yNW1QZXFneVZPYmF5Z1Z3eTNqVEREem56WmZMZ0tZaTB1cGJIamxzbGl2V0FKem9UeU9EczBNT1VyUENXK0NrNjhVbnVvOTQwUjhvWGdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzYwNDQ4NDE6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI3OTgyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJXTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQldNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU1pNbmxNQUZzTEsrVGhxUFJYa29kVExqZzNiemV2Ti9FbDdNSEh3U2xhaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjk1MDEzNzgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNzk4MzU0MzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
