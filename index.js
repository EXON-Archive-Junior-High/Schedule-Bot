const setting = require('./setting.json')
const { Client, MessageEmbed } = require('discord.js')
const client = new Client()
const prefix = '!'

const schedule = [
    {'day':'월요일', "subject":[{'title':"월요일", 'description':'아주 뭐같은 월요일'}, {'title':"월요일", 'description':'아주 뭐같은 월요일'}, {'title':"월요일", 'description':'아주 뭐같은 월요일'}]},
    {'day':'화요일', "subject":[{'title':"화요일", 'description':'아주 뭐같은 화요일'}, {'title':"월요일", 'description':'아주 뭐같은 월요일'}, {'title':"월요일", 'description':'아주 뭐같은 월요일'}]},
    {'day':'수요일', "subject":[{'title':"수요일", 'description':'아주 뭐같은 수요일'}, {'title':"수요일", 'description':'아주 뭐같은 수요일'}, {'title':"수요일", 'description':'아주 뭐같은 수요일'}]},
    {'day':'목요일', "subject":[{'title':"목요일", 'description':'아주 뭐같은 목요일'}, {'title':"목요일", 'description':'아주 뭐같은 목요일'}, {'title':"목요일", 'description':'아주 뭐같은 목요일'}]},
    {'day':'금요일', "subject":[{'title':"금요일", 'description':'아주 뭐같은 금요일'}, {'title':"금요일", 'description':'아주 뭐같은 금요일'}, {'title':"금요일", 'description':'아주 뭐같은 금요일'}]},
]

client.on('ready', () => console.log('[System] Start'))

client.on('message', (msg) => {
    if (msg.author.bot) return
    if (msg.content === `${prefix}시간표`) {
      const day = new Date().getDay()
      let embed = new MessageEmbed({title:`${schedule[day - 1].day} 시간표`})
      schedule[day - 1].subject.forEach((i) => {
        embed.addField(i.title, i.description)
      })
      msg.channel.send(embed)
    }

})


client.login(setting.token)

