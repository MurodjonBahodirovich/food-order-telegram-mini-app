const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");

const web_link = "https://food-order-telegram-mini-app.vercel.app/";

const TOKEN = `7326313370:AAGwezKqxkPHB41zOrEaiEsK60q01ZQMi5o`;
const bot = new TelegramBot(TOKEN, { polling: true });

bot.setMyCommands([
  {
    command: "/start",
    description: "Botni qayta ishga tushirish ♻️",
  },
]);

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

  const webAppUrlWithChatId = `${web_link}?chatId=${chatId}`;

  bot.sendMessage(
    chatId,
    `Assalomu aleykum ${from?.first_name}! Siz Koson tumanidagi yegulik buyurtma berish uchun mo'ljallangan botga tashrif buyurdingiz. Buyurtma berish uchun pastdagi tugmani bosing 👇👇👇`,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Buyurtma berish", web_app: { url: webAppUrlWithChatId } }],
        ],
      },
    }
  );
});
