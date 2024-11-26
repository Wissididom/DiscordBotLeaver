const response = await fetch("https://discord.com/api/v10/users/@me", {
  method: "GET",
  headers: {
    Authorization: `Bot ${Deno.env.get("DISCORD_TOKEN")}`,
  },
});
console.log(await response.json());
