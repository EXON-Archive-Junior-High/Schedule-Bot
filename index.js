const setting = require('./setting.json')
const { Client, MessageEmbed } = require('discord.js')
const client = new Client()
const prefix = '!'

const schedule = [
    {"subject":"월요일"},
    {"subject":"화요일"},
    {"subject":"수요일"},
    {"subject":"목요일"},
    {"subject":"금요일"},
]

client.on('ready', () => console.log('[System] Start'))

client.on('message', (msg) => {
    if (msg.author.bot) return
    if (msg.content === `${prefix}시간표`) {
      const day = new Date().getDay()
      msg.channel.send(schedule[day - 1].subject || "응 오늘 학교 안가~~")
    }
    client.login(setting.token)
})

while (true) {
    const date = Date()
    if (date.getHours() === 22 && date.getMinutes() === 23 && date.getSeconds() === 0) {
        console.log('ㅇ')
    }
}




