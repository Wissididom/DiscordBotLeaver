import "dotenv/config";
// https://discord.com/api/v10/users/@me
const response = await fetch("https://discord.com/api/v10/users/@me/guilds", {
  method: "GET",
  headers: {
    Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
  },
});
const guilds = await response.json();
for (let guild of guilds) {
  const delResponse = await fetch(
    "https://discord.com/api/v10/users/@me/guilds/${guild.id}",
    {
      method: "DELETE",
      headers: {
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      },
    },
  );
}
