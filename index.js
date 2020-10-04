const setting = require('./setting.json')
const { Client, MessageEmbed } = require('discord.js')
const client = new Client()
const prefix = '!'

const schedule = [
    {'day':'일요일', "subject":[{'title':"놀일", 'description':'와 놀자'}]},
    {'day':'월요일', "subject":[{'title':"영어 [스피킹]", 'description':':star: 불름쌤과 함께 하는 영어 스피킹'}, {'title':"기가", 'description':'만강쌤과 함께하는 기가'}, {'title':"컴퓨터 동아리", 'description':'차상우 쌤고 함께하는 컴동'}]},
    {'day':'화요일', "subject":[{'title':"미술", 'description':'내 미술 실력은..어..'}, {'title':"국어", 'description':':star: 국어는 필수'}, {'title':"체인지메이커", 'description':'편안하게 임하자'}]},
    {'day':'수요일', "subject":[{'title':"과학", 'description':'과학이닷'}, {'title':"수학", 'description':':star: 저리가 우웩'}, {'title':"영어 [문법]", 'description':':star: 아주 중요함'}]},
    {'day':'목요일', "subject":[{'title':"도덕", 'description':'윽... 숙제..'}, {'title':"음악", 'description':'라랄라랄라!'}, {'title':"체육", 'description':'체육복 필수'}]},
    {'day':'금요일', "subject":[{'title':"사회", 'description':'와 정리노트!'}, {'title':"수학", 'description':':star: 수..학. 1+1'}, {'title':"하키", 'description':'체육복 필수'}]},
    {'day':'토요일', "subject":[{'title':"놀토", 'description':'와 놀자'}]},
]

client.on('ready', () => console.log('[System] Start'))

client.on('message', (msg) => {
    if (msg.author.bot) return
    if (msg.content === `${prefix}시간표`) {
      const day = new Date().getDay()
      let embed = new MessageEmbed({title:`${schedule[day].day} 시간표`})
      schedule[day].subject.forEach(i => embed.addField(i.title, i.description))
      msg.channel.send(embed)
    }

})


client.login(setting.token)

