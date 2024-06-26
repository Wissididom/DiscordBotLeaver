import "dotenv/config";
// https://discord.com/api/v10/users/@me
const response = await fetch("https://discord.com/api/v10/users/@me/guilds", {
  method: "GET",
  headers: {
    Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
  },
});
console.log(await response.json());
