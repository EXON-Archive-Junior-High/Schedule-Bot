const setting = require('./setting.json')
const { Client, MessageEmbed } = require('discord.js')
const { schedule } = require('./schedule.json')
const client = new Client()
const prefix = '!'

client.on('ready', () => console.log('[Server] Start'))

client.on('message', (msg) => {
  if (msg.author.bot) return
  if (msg.content === `${prefix}시간표`) {
    const day = new Date().getDay()
    const embed = new MessageEmbed({ title: `${schedule[day].day} 시간표` })
    schedule[day].subject.forEach(i => embed.addField(i.title, i.description))
    msg.channel.send(embed)
  }
})

client.login(setting.token)
