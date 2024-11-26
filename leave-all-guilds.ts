const response = await fetch("https://discord.com/api/v10/users/@me/guilds", {
  method: "GET",
  headers: {
    Authorization: `Bot ${Deno.env.get("DISCORD_TOKEN")}`,
  },
});
const guilds = await response.json();
console.log("Guilds:", guilds);
for (const guild of guilds) {
  const delResponse = await fetch(
    `https://discord.com/api/v10/users/@me/guilds/${guild.id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bot ${Deno.env.get("DISCORD_TOKEN")}`,
      },
    },
  );
  console.log("Delete-Response:", await delResponse.text());
}
