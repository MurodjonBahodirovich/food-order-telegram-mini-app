const TelegramBot = require("node-telegram-bot-api");

const TOKEN = `7326313370:AAGwezKqxkPHB41zOrEaiEsK60q01ZQMi5o`;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  const { from } = msg;

  fetch(`http://localhost:8000/usersData`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(from),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("User data saved:", data);
    })
    .catch((error) => {
      console.error(error);
    });
});
