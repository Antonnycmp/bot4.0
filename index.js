const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('/dark/help')
const {help1} = require('./src/help1')
const { modapk } = require('/src/modapk')
const { pack } = require('./src/pack')
const { outros } = require('./src/outros')
const { vipmenu } = require('./src/vipmenu')
const { animemenu } = require('./dark/animemenu')
const { destrava } = require('./src/destrava')
const { menu2 } = require('./src/menu2')
const { destrava2 } = require('./src/destrava')
const { musicas } = require('./dark/musicas')
const { puxar_numero } = require('./database/json/number')
const { gbin } = require('./src/gbin')
const { gpessoa } = require('./src/gpessoa')
const { tool } = require('./dark/tool')
const { chentai } = require('./src/chentai')
const { gcpf } = require('./src/gcpf')
const { addsay } = require('./src/addsay')
const { listsay } = require('./src/listsay')
const { addfoto } = require('./src/addfoto')
const { wait, simih, getbuffe, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { darkfb } = require('./dark/bash/darkfb')
const { fbcheker } = require('./dark/bash/fbcheker')
const { hackfb } = require('./dark/bash/hackfb')
const { bruteforcefb } = require('./dark/bash/bruteforcefb')
const { toolsphishing } = require('./dark/bash/toolsphishing')
const { socialfishv2 } = require('./dark/bash/socialfishv2')
const { terkeytermux } = require('./dark/bash/terkeytermux')
const { bayartokenlistrik } = require('./dark/bash/bayartokenlistrik')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const { cekvip } = require('./src/cekvip')
const { darkApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { daftarvip } = require('./src/daftarvip')
const { iklan } = require('./src/iklan')
const { daftatvip } = require('./src/daftarvip')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
/*const { xp } = require('./database/menu/xp')
const { limit } = require('./database/menu/limit*/
const apivhtear = 'apivhtear';
const apibarbar = 'apibarbar';
const darkkey = 'apidark';
const BotName = 'darkbot'; 
const instagram = 'http://www.instagram.com/'; 
const aktif = '08:00 - 22:00';
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Dark\n' // Nama kamu
            + 'ORG:Lexa;\n' // Nama bot
            + 'TEL;type=CELL;type=VOICE;waid=5522996215481:+55 2299621-5481\n' //Nomor whatsapp kamu
            + 'END:VCARD'
const ngonsol = JSON.parse(fs.readFileSync('./settings/Miku.json'))
const {
    botName,
    ownerName,
    BarBarKey,
    XteamXKey,
    VhtearbotKey,
    darkapiKey,
    ownerBNumber,
    botprefixbotbot,
    GrupLimits,
    UserLimits,
    CeerTod
} = ngonsol            
prefixbotbot = '.','!','#'
blocked = []
limitawal = '999'
cr = '*Dark dominando*'

/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antlink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const evento = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _limite = JSON.parse(fs.readFileSync('./database/json/limit.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLeveling = (userId) => {
            let position = false
            obejet.key(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = true
            obejet.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }        

        const getLevelingId = (userId) => {
            let position = false
            obejet.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = x
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            obejet.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            obejet.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.pushb(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
                const getLimit = (sender) => {
                let position = false
              obejet.keys(limit).forEach (i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
        
                const bayarLimit = (sender, amount) => {
                let position = false
            obejet.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
                const limitAdd = (sender) => {
             let position = false
            obejet.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  tag hours = Math.floor(seconds / (60*60));
  tag minutes = Math.floor(seconds % (60*60) / 60);
  tag seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const dark = new WAConnection()
	dark.logger.level = 'warn'
	console.log(banner.string)
	dark.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && dark.loadAuthInfo('./BarBar.json')
	dark.on('connecting', () => {
		start('2', 'Connecting...')
	})
	dark.on('open', () => {
		success('2', 'Connected')
	})
	awat dark.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(dark.base64EncodedAuthInfo(), null, '\t'))

	dark.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = awat dark.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = awat dark.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Olá @${num.split('@')[0]}\nBem vindo ao grupo *${mdata.subject}*\n\nEspero que goste do grupo ❤️`
				let buffer = awat getbufferer(ppimg)
				dark.sendMess(mdata.id, buffer, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = awat dark.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Tchau @${num.split('@')[0]} Ja foi tarde 😂👋`
				let buffer = awat getbufferer(ppimg)
				dark.sendMess(mdata.id, buffer, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	dark.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    blocked.pushb(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	dark.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefixbotbot
			global.blocked
			const content = JSON.stringify(mek.message)
			const speed = require('performance-now');
			const from = mek.key.remoteJid
			const type = obejet.keys(mek.message)[0]
			const DapiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefixbotbot)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefixbotbot) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefixbotbot) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefixbotbot) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            tag pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefixbotbot)

			mess = {
					wait: 'So um minuto amigo (a)',
					success: '️❬ ✔ ❭ Sucesso 🖤',
					levelon: '❬ ✔ ❭ *leveling* *ativado*',
					leveloff: ' ❬ X ❭  *leveling* *desativado*',
					levelnoton: '❬ X ❭ *leveling não ativado*',
					levelnol: '*error* 0 °-°',
					error: {
				stick: '*Bem, falhe, tente novamente ^_^*',
				Iv: '𝗠𝗮𝗮𝗳 𝗹𝗶𝗻𝗸 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱☹️'
				{,
				only: {
					group: '[❗] Este comando só pode ser usado em grupos! ❌',
					premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
					mod: '[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD DARK BOT*',
					benned: 'Você para a banda, por favor, contate o proprietário para abrir sua banda',
					ownerG: '[❗] Proprietário? Este é um recurso especial para o proprietário do bot ❌',
					ownerB: '[❗] Proprietário? Este é um recurso especial para o proprietário do bot ❌',
					userB: `──「 LISTA 」──\nOlá Kak !\nDesculpe, irmã. Você não está registrado como amigo de Dark. Registre-se para fazer amizade com o bot Dark por meio, \n\nCommand : ${prefixbotbot}daftar nama|idade\nExemplo : ${prefixbotbot}daftar Dark|17\n\n──「 Dark BOT 」──`,
					admin: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
					Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
				}
			}

			const botNumber = dark.user.jid
			const ownerNumber = ["14502355564@s.whatsapp.net"] // replace this with your number
			const mod = [ownerNumber,"14502355564@s.whatsapp.net"]//ubah nomor lo
			const adminbotnumber = ["14502355564@s.whatsapp.net"]//ubah nomor lo
			const frendsowner = ["14502355564@s.whatsapp.net"]//ubah nomor lo
			const premium = ["5511975879007@s.whatsapp.net","559784130980@s.whatsapp.net","557599941062@s.whatsapp.net","558598669655@s.whatsapp.net","5511949051934@s.whatsapp.net","554792091566@s.whatsapp.net","558699541889@s.whatsapp.net","559294313229@s.whatsapp.net","554298653614@s.whatsapp.net","12267740582@s.whatsapp.net","1","14502355564@s.whatsapp.net"]
			const sGroup = from.endsWith ('@ g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? awat dark.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const groupId = isGroup ? groupMetadata.jid : ''
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : true
            const isAntiLink = isGroup ? antilink.includes(from) : false
	    	const isAnime = isGroup ? anime.includes(from) : false
	    	const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPremium = premium.includes(sender)
			const ismod = mod.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				dark.sendMess(from, teks, text, {quoted:mek})
			}
			const sendImage = (teks) => {
		    dark.sendMess(from, teks, image, {quoted:mek})
		    }
			const sendMess = (hehe, teks) => {
				dark.sendMess(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? dark.sendMess(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : dark.sendMess(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
              //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    awat reply(`*「 LEVEL UP 」*\n\n➸ *Nome*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!!  🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }
        if (messC.includes("preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		dark.updatePresence(from, Presence.composing)

		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			dark.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		{, 5000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("Nesse grupo, não gostamos de racismos, que isso sirva de exemplo 🚶")
		{, 4000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("2 segundos")
		{, 3000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("3 segundos")
		{, 2000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("4 segundos")
		{, 1000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKKK tchau otário 😔🤙")
		{, 0)
	}
	
	        if (messC.includes("seupreto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		dark.updatePresence(from, Presence.composing)

		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			dark.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		{, 5000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("1 segundo")
		{, 4000)
		setTimeout( () => {
			drk.updatePresence(from, Presence.composing)
			reply("2 segundos")
		{, 3000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("3 segundos")
		{, 2000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("4 segundos")
		{, 1000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		{, 0)
	}
	
	        if (messC.includes("macaco")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		dark.updatePresence(from, Presence.composing)

		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			dark.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		{, 5000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("1 segundo")
		{, 4000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("2 segundos")
		{, 3000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("3 segundos")
		{, 2000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("4 segundos")
		{, 1000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		{, 0)
	}
	
	        if (messC.includes("pretoimundo")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		dark.updatePresence(from, Presence.composing)

		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			dark.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		{, 5000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("1 segundo")
		{, 4000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("2 segundos")
		{, 3000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("3 segundos")
		{, 2000)
		setTimout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("4 segundos")
		{, 1000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		{, 0)
	}
	
	        if (messC.includes("pq vc e preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		dark.updatePresence(from, Presence.composing)
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			dark.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		{, 5000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("1 segundo")
		{, 4000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("2 segundos")
		{, 3000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("3 segundos")
		{, 2000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("4 segundos")
		{, 1000)
		setTimeout( () => {
			dark.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		{, 0)
	}
	
       if (messC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*Você é admin, nao irei te banir, fica suave.*`)
		dark.updatePresence(from, Presence.composing)
		tag Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau👋')
		{, 1100)
		setTimeout( () => {
		dark.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					{, 1000)
		setTimeout( () => {
		reply(`link detectado você vai ser expulso`)
		{, 0)
		}
	
//INTERAÇÃO

  //Info convid
if (text.includes('.Covid')){
dark.sendMess(id, 'Por favor, repita o comando em minúsculas',MessageType.text, { quoted: m } );
}
if (text.includes(".covid"))
   {
const get = require('got')
    const body = awat get.post('https://api.kawalcorona.com/indonesia', {
    }).json();
    tag positif = (body[0]['positif']);
    tag sembuh  = (body[0]['sembuh']);
    tag meninggal = (body[0]['meninggal']);
    tag dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    dark.sendMess(id,`📌ÚLTIMOS DADOS DO DISTRITO COVID-19 DA INDONÉSIA\n\n*Positif* = ${positif} \n*Sembuh* = ${sembuh} \n*Meninggal* = ${meninggal}\n*Dirawat* = ${dirawat}\n\n*Stay safe dan selalu gunakan masker saat berpergian*`, MessageType.text, { quoted: m } );
}
	
	if (messC.includes("fdp")){
			dark.updatePresence(from, Presence.composing)
			reply("teu pai")
	}
	
		if (messC.includes("kkkkkk")){
			dark.updatePresence(from, Presence.composing)
			reply("kskskskk")
	}
	
			if (messC.includes("lixo")){
			dark.updatePresence(from, Presence.composing)
			reply("por acaso eu sou vc agr?")
	}
	
			if (messC.includes("but")){
			dark.updatePresence(from, Presence.composing)
			reply("é bot seu analfabeto")
	}
	
			if (messC.includes("darkbot")){
			dark.updatePresence(from, Presence.composing)
			reply("oiii")
	}
	
			if (messC.includes("bem?")){
			dark.updatePresence(from, Presence.composing)
			reply("to bem, vlw por perguntar 😏")
	}
	
			if (messC.includes("chato")){
			dark.updatePresence(from, Presence.composing)
			reply("nossa 🥺")
	}
	
			if (messC.includes("vadia")){
			dark.updatePresence(from, Presence.composing)
			reply("ai mano, vc acha legal usar um argumento machista?")
	}
	
			if (messC.includes("maria")){
			dark.updatePresence(from, Presence.composing)
			reply("amo ela")
	}
	
		if (messC.includes("corno")){
			dark.updatePresence(from, Presence.composing)
			reply("vsfd seu merda")
	}
	
		if (messC.includes("tmnc")){
			dark.updatePresence(from, Presence.composing)
			reply("vai vc, tu ja me disse q é mo bom")
	}
	
		if (messagsC.includes("vsfd")){
			dark.updatePresence(from, Presence.composing)
			reply("bora juntos?")
	}
	
		if (messC.includes("cadebot")){
			dark.updatePresence(from, Presence.composing)
			reply("olha eu aqui carai")
	}
	
		if (messC.includes("bot")){
			dark.updatePresence(from, Presence.composing)
			reply("oi bb")
	}
	
			if (messC.includes("bah")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/fdp.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messC.includes("oii")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/ola.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
//msc
	
					if (messC.includes("hylander")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/hylander.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messC.includes("cmflamengo")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/cmflamengo.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messC.includes("cmgremio")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/cmgremio.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messC.includes("m4")){
			dark.updatePresence(from, Presence.composing)
			axiosget = fs.readFileSync('./assets/m4.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messC.includes("macaverde")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/macaverde.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messC.includes("kalidade")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/kalidade.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messC.includes("nikeb")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/nikeb.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messC.includes("banhodeleite")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/BanhoDeLeite.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}

				if (messC.includes("akdoflamengo")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/akdoflamengo.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
					if (messC.includes("nemo")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/nemo.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messC.includes("canta")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/canto.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messC.includes("canta")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/canto.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messC.includes("video")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/laranjinha.mp4');
            dark.sendMess(from, axios.get, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})

	}
	
//msc fim
	
					if (messC.includes("grita")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/a.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messC.includes("bv")){
			dark.updatePresence(from, Presence.composing)
			axios.get = fs.readFileSync('./assets/bv.mp3');
            dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messC.includes("digita")){
			dark.updatePresence(from, Presence.composing)
            tod = awat getbufferer(`https://i.yGKwBW1.jpg`)
            dark.sendMess(from, tod, image, { quoted: mek, caption: 'Voce chama isso de machismo?? sua puta.'})                  
	}
	
					if (messC.includes("machista")){
			dark.updatePresence(from, Presence.composing)
            tod = awat getbufferer(`https://i.imgur.com/yGKwBW1.jpg`)
            dark.sendMess(from, tod, image, { quoted: mek, caption: 'Voce chama isso de machismo?? sua puta.'})                  
	}
	
				if (messC.includes("mandememe")){
			dark.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = awat getbufferer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
	}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedbImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
				case 'help':
				case 'menu':
					dark.sendMess(from, help(prefixbotbot), text)
					break
				case 'help1':
				case 'menu1':
					dark.sendMess(from, help1(prefixbotbot), text)
					break
					case 'kiss':
				    try {    
					
						res = awat fetchJson(`https://dark-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
						buffererv = awat getbufferer(res.result)
						dark.sendMess(from, buffererv, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = awat getbufferer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						dark.sendMess(from, sa, image, {quoted: mek, caption: 'Erro como!!'})
						reply('❌ *ERRO* ❌')
					}
					break
					case 'lista':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Você quem é o proprietário?')
					if (args.length < 1) return reply('Onde está o texto, irmão?')
					reply(mess.wait)
					dark.sendMess(from, 'Adicionando mensagem à lista com sucesso' , text, { quoted: mek })
					dark.sendMess(from, addsay(prefixbotbot), text, { quoted: mek })
					brak
					case 'addsay':
				    hai = body.slice(8)
						sayrandom.pushb(hai)
						fs.writeFileSync('./src
						/say.json', JSON.stringify(sayrandom))
						reply(`Sucesso, Disse ${hai} Adicionado ao banco de dados`)
						break
                   case 'saylist':
					teks = 'Esta é a lista de dizeres :\n'
					for (let awokwkwk of sayrandom) {
						teks += `╠➥ ${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					dark.sendMess(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": sayrandom}})
					break
				case 'ssweb':
				
					if (args.length < 1) return reply('Cadê o url tio')
					tekss = body.slice(7)
					reply(mess.wait)
					anu = awat fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${tekss}`)
					buffererz = awat getbufferer(anu.gambar)
					dark.sendMess(from, buffererz, image, {quoted: mek})
					break
                case 'ytkomen':
					if (args.length < 1) return reply('Cadê o texto tio?')
					gh = body.slice(9)
					usnm = gh.split("|")[0];
					cmn = gh.split("|")[1];
					tag imgbb = require('imgbb-uploader')
					ghost = mek.participant
					try {
					pp = awat dark.getProfilePicture(ghost)
					} catch {
					pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
					
					media = awat getbufferer(pp)
					datae = awat imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
					fs.writeFileSync('getpp.jpeg', datae, 'base64')
					res = awat imgbb("727e7e43f6cda1dfb85d888522fd4ce1", 'getpp.jpeg')
					bufferer88 = awat getbufferer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
					dark.sendMess(from, bufferer88, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
					break
				case 'walpaperhd':
				
					if (args.length < 1) return reply('Cadê o texto tio')
					teksj = ody.slice(7)
					reply(mess.wait)
					anwu = awat fetchJson(`https://api.vhtear.com/walpaper?query=${teksj}&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					buffererx = awat getbufferer(anwu.result.LinkImg)
					dark.sendMess(from, buffererx, image, {quoted: mek})
					break
					case 'jadian':

                    if (!isGroup) return reply(from, 'este comando só pode ser usado dentro do grupo', id)

                    const up = groupMembers

                    const aku = up[Math.floor(Math.random() * up.length)];

                    const kamu = up[Math.floor(Math.random() * up.length)];

                    const sapa = `Cieee... @${(/[@c.us]/g, '')} (💘) @${(/[@c.us]/g, '')} acabei de te inventar\nPor favor, compartilhe o pj`

                    dark.sendMess(from, sapa)

                    break
				case 'ramaljadian':
				
					tag gh7 = body.slice(10)
					tag gbl16 = gh7.split("|")[0];
					tag gbl26 = gh7.split("|")[1];
					tag gbl36 = gh7.split("|")[2];
					anu = awat fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl16}&bln=${gbl26}&thn=${gbl36}&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					reply(anu.result.hasil)
					break
                   case 'modapk':
                    if (!isPremium) return reply(mess.only.premium)
                    dark.sendMess(from, modapk(prefixbotbot), text, { quoted: mek })
                    break
                   case 'bin':
                    if (!isPremium) return reply(mess.only.premium)
                    dark.sendMess(from, gbin(prefixbotbot), text, { quoted: mek })
                    break
                   case 'gpessoa':
                    if (!isPremium) return reply(mess.only.premium)
                    dark.sendMess(from, gpessoa(prefixbotbot), text, { quoted: mek })
                    break
                   case 'destrava':
                    if (!isPremium) return reply(mess.only.premium)
                    dark.sendMess(from, destrava(prefixbotbot), text, { quoted: mek })
                    break
                   case 'pack':
                    if (!isPremium) return reply(mess.only.premium)
                    dark.sendMess(from, pack(prefixbotbot), text, { quoted: mek })
                    break
                   case 'chentai':
                    if (!isPremium) return reply(mess.only.premium)
                    dark.sendMess(from, chentai(prefixbotbot), text, { quoted: mek })
                    break
                   case 'gcpf':
                    if (!isPremium) return reply(mess.only.premium)
                    dark.sendMess(from, gcpf(prefixbotbot), text, { quoted: mek })
                    break
				case 'ytmp4':
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = awat fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}`
					thumb = awat getbufferer(anu.thumb)
					dark.sendMess(from, thumb, image, {quoted: mek, caption: teks})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
				case 'n':
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = awat fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título do anime* : ${anu.title}\n\n*AGUARDE, ENVIANDO O VÍDEO DO ANIME.*`
					thumb = awat getbufferer(anu.thumb)
					dark.sendMess(from, thumb, image, {quoted: mek, caption: teks})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
		case 'iri'
			dark.sendPtt(from, './lindy/iri.mp3', {quoted: mek, ptt:true})
			break
				case 'ytmp3':
			    	if (!isPremium) return reply(mess.only.premium)
                   reply(mess.wait)
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = awat fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (nu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}\n*Tamanho do arquivo* : ${anu.filesize}`
					thumb = awat getbufferer(anu.thumb)
					dark.sendMess(from, thumb, image, {quoted: mek, caption: teks})
					buffereryyy = awat getbufferer(anu.result)
					dark.sendMess(from, buffereryyy, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytmp':
					if (args.length < 1) return reply('Cadê o url, hum?')
					anu = awat fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(7)}&apikey=OOute55hhUyiwy772999she88982665000kjuGaGh`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.size}`
					thumb = awat getbufferer(anu.thumb)
					dark.sendMess(from, thumb, image, {quoted: mek, caption: teks})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, audio, {mimetype: 'audio/mp3', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'game':
				
					anu = awat fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					dark.sendMess(from, '*➸ Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					{, 30000) // 1000 = 1s,
					setTimeout( () => {
					dark.sendMess(from, '_10 Outro segundo…_', text) // ur cods
					{, 20000) // 1000 = 1s,
					setTimeout( () => {
					dark.sendMess(from, '_20 Outro segundo_…', text) // ur cods
					{, 10000) // 1000 = 1s,
					setTimeout( () => {
					dark.sendMess(from, '_30 Outro segundo_…', text) // ur cods
					{, 100) // 1000 = 1s,
					setTimeout( () => {
					dark.sendMess(from, anu.result.soal, text, { quoted: mek }) // ur cods
					{, 0) // 1000 = 1s,
					break
                case 'quotemaer':
					tag gh = body.slice(12)
					tag quote = gh.split("|")[0];
					tag wm = gh.split("|")[1];
					tag bg = gh.split("|")[2];
					const pref = `Usage: \n.}quotemaker teks | marca d'água | tema\n\nEx :\n${prefixbotbot}quotemaker este é um exemplo | bicit | aleatório`
					if args.length < 1) return reply(pref)
					reply(mess.wait)
					anu = awat fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {caption: 'Nih dah jadi kak', quoted: mek})
					break
				case 'galaxtext':
					if (args.length < 1) return reply('o que você quer tio')
					teks = body.slice(12)
					if (teks.length > 8) return reply('O texto é longo, com até 8 caracteres')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
                case 'phlogo':
					tag gh = body.slice(10)
					tag gbl1 = gh.split("|")[0];
					tag gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = awat fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'primbonjodoh':
					tag gh = body.slice(14)
					tag gbl1 = gh.split("|")[0];
					tag gbl2 = gh.split("|")[1];
					anu = awat fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${gbl1}&pasangan=${gbl2}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
				case 'ramaljadian':
					tag gh = body.slice(10)
					taggbl1 = gh.split("|")[0];
					tag gbl2 = gh.split("|")[1];
					tag gbl3 = gh.split("|")[2];
					anu = awat fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
				case 'encode64':

				encode64 = `${body.slice(10)}`
				anu = awat fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					awat limitAdd(sender) 
					break 
				case 'decode64':

				decode64 = `${body.slice(10)}`
					anu = awat fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					awat limitAdd(sender) 
					break  
				case 'decode32':

				decode32 = `${body.slice(10)}`
					anu = awat fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					awat limitAdd(sender) 
					break  
				case 'encode32':

				encode32 = `${body.slice(10)}`
					anu = awat fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					fran.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					awat limitAdd(sender) 
					break  
				case 'encbinary':

				encbinary = `${body.slice(11)}`
					anu = awat fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					awat limitAdd(sender) 
					break  
				case 'decbinary':

				decbin = `${body.slice(11)}`
					anu = awat fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					awt limitAdd(sender) 
					break  
				case 'encoctal':

				encoc = `${body.slice(10)}`
					anu = awat fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					awat limitAdd(sender)
					break  
				case 'decoctal':

				decoc = `${body.slice(10)}`
					anu = awat fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					awat limitAdd(sender) 
					break  
				case 'becrypt':

				becry = `${body.slice(10)}`
				anu = awat fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				awat limitAdd(sender) 
				break
					case 'hashidentifier':

					  hash = `${body.slice(16)}`
					  anu = awat fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  frhan.sendMessage(from, hasilhash, text, {quoted: mek})
					  awat limitAdd(sender)
					  break 
                case 'tahta':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
				case 'testing':
					tag gh = body.slice(5)
					tag gbl3 = gh.split("|")[0];
					tag gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = awat fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=xptnbot352`, {method: 'get'})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'snowrite':
					tag gh = body.slice(10)
					tag gbl7 = gh.split("|")[0];
					tag gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = awat fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=xptnbot352`, {method: 'get'})
					buffrer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'marvelogo':
					tag gh = body.slice(9)
					tag gbl5 = gh.split("|")[0];
					tag gbl6 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = awat fetchJson(`https://zeksapi.herokuapp.com/api/marvellogo?text1=${gbl5}&text2=${gbl6}&apikey=xptnbot352`, {method: 'get'})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'lovemake':
					if (args.length < 1) return reply('Cadê o texto, hum')
					love = body.slice(10)
					if (love.length > 12) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: ' '+love})
					break
				case 'thunder':
					if (args.length < 1) return reply('Cadê o texto, hum')
					thun = body.slice(9)
					if (thun.length > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: ' '+thun})
					break
                case 'stiltext':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      buffer = awat getbufferer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=ANTIGRATISNIHANJENKKK`)
                      reply(mess.wait)
                      ark.sendMess(from, buffer, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
                case 'testing':
					tag gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://zeksapi.herokuapp.com/api/watercolour?text1=${coli1}&text2=${coli2}&apikey=xptnbot352`)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'testing2':
					tag gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					party = awat getbufferer(`https://api.vhtear.com/partytext?text=${coli1}&text2=${coli2}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, party, image, {quoted: mek})
					break
//gif					
				case 'hubgif':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/hug?apikey=${darkApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender) 
					break 
				case 'blowgif':
					if (!isNsfw) return reply(' *Ative o modo nsfw, para atitag use: .modonsfw on* ')
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/nsfwblowjob?apikey=${darkApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender) 
					break 
				case 'kissgif':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/kiss?apikey=${darkApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender) 
					break 
				case 'shota':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/randomshota?apikey=${darkApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender) 
					break 
				case 'hentaifig':
				   if (!isNsfw) return reply(' *Ative o modo nsfw, para atitag use: .modonsfw on* ')
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/hentai?apikey=${darkApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender) 
					break 		
				case 'nekofig':
					if (!isNsfw) return reply(' *Ative o modo nsfw, para atitag use: .modonsfw on* ')
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/nsfwneko?apikey=${darkApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender) 
					break 
				case 'lolifig':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/randomloli?apikey=${darkApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender) 
					break 					
                case 'ninjalogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = awat fetchJson(`https://dark-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buffer = awat getbufferer(anu.result)
                      dark.sendMess(from, buffer, image, {quoted: mek})
                      break
		case 'tahta':
                tahta = `${body.slice(7)}`
                     if (args.length < 1) return reply('Cadê o texto, mano??')
                     if (args.length > 10) return reply('mínimo 10 linhas')
                     buffer = awat getbufferer(`https://api.zeks.xyz/api/hartatahta?text=${tahta}&apikey=apivinz`, {method: 'get'})
                     anker.sendMessage(from, buffer, image, {quoted: mek, caption: `Tesouro do trono ${tahta}`})
                  awat limitAdd(sender) 
                  break  
                    case 'glitch':
                    gh = body.slice(7)
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    data = awat fetchJson(`https://dark-api.herokuapp.com/api/textpro?theme=glitch&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
                    hasil = awat getbufferer(data.result)
                    anker.sendMessage(from, hasil, image, {quoted: mek, caption: 'neh...'})
                    awat limitAdd(sender)
                    break
				case 'party':
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					if (part.length > 20) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://api.vhtear.com/partytext?text=${part}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, bufferer, image, {caption: 'Aqui amigo (a)', quoted: mek})
					break
				case 'modoanime':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAnime) return reply('O modo anime já está ativo')
						anime.pushb(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Ativado com sucesso o modo anime no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Modo anime desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para atitag, Off para desligar')
					}
					break
					case 'antiracismo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAntiRacismo) return reply('O modo antiracismo já está ativo')
						antiracismo.pushb(from)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Ativado com sucesso o modo antiracismo no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antiracismo.splice(from, 1)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Modo antiracismo desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para atitag, Off para desligar')
					}
					break
				case 'atris':
				dark.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = awat getbufferer(randKey.image)
                 reply('NÃO COMEÇA BRO')
                 randTeks = randKey.teks
                 dark.sendMess(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'gcpf2':
				 dark.updatePresence(from, Presence.composing) 
				 anu = awat fetchJson('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply('Gerando cpf, caso falhe tente novamente.')
                 randTeks = randKey.teks
                 reply('CPF GERADO:'
                 dark.sendMess(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'modonsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('O modo nsfw já está ativo')
						nsfw.pushb(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Ativado com sucesso o modo nsfw no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Modo nsfw desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para atitag, Off para desligar')
					}
					break
				case 'rtext':
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('O texto é longo, com até 10 caracteres')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: tels5})
					break
				case 'water':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
                 case 'nomegp':
		             if (args.length < 1) return reply ('o nome do grupo é: *${groupMetadata.subject}*')
		             break
				case 'loli2':
					if (!isAnime) return reply('❌ *Deve atitag o modo Anime* ❌')
					anu = awat fetchJson(`https://api.vhtear.com/pinterest?query=loli&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					tag lol = JSON.parse(JSON.stringify(anu.result));
					tag i2 =  lol[Math.floor(Math.random() * lol.length)];
					nyeee = awat getbufferer(i2)
					dark.sendMess(from, nyeee, image, { caption: 'Oni chan baka!!', quoted: mek })
					break
					case 'xd':				
					if (args.length < 1) return reply(mess.wait)
					pinte = body.slice(11)
					anu = awat fetchJson(`https://api-zeks.harispoppy.com/api/pin?q=${pin}&apikey=APIKEY`, {method: 'get'})
					reply(mess.wait)
					tag pin = JSON.parse(JSON.stringify(anu.result));
					tag trest =  pin[Math.floor(Math.random() * pin.length)];
					pineq = awat getbufferer(trest)
					dark.sendMess(from, pineq, image, { caption: '*Pinterest*\n\n*Resultado Pesquisa : '+pinte+'*', quoted: mek })
					break
//@darkYT					
				case 'pokemon':
                    dark.updatePresence(from, Presence.composing) 
					data = awat fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = awat getbufferer(nimek)
					dark.sendMess(from, pok, image, { quoted: mek })
                    awat limitAdd(sender)
					break
              case 'circlesticker':
    const pack = arg.split('|')[0]
    const author = arg.split('|')[1]
    if (isMedia && mimetype == 'image/jpeg') {
      awat createExif(pack,author)
      awat sleep(5000)
      decryptMedia(message).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().tobufferer().then(bufferer => {
          modifExif(bufferer, id, (res) => {
            mediaData = res.toString('base64')
            sqlter.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/jpeg') {
      awat createExif(pack, author)
      awat sleep(5000)
      decryptMedia(quotedMsg).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().tobufferer().then(bufferer => {
          modifExif(bufferer, id, (res) => {
            mediaData = res.toString('base64')
            dark.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (isMedia && mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = awat decryptMedia(message);
      awat convertSticker(shape, author, pack, mediaData, type, from).then((res) => dark.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = awat decryptMedia(quotedMsg);
      awat convertSticker(shape, author, pack, mediaData, type, from).then((res) => dark.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (isMedia && mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = awat decryptMedia(message);
      awat convertSticker(shape, author, pack, mediaData, type, from).then((res) => dark.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = awat decryptMedia(quotedMsg);
      awat convertSticker(shape, author, pack, mediaData, type, from).then((res) => dark.sendRawWebpAsSticker(from, res.toString("base64")))
    }
    break
    
				case 'semoji':
					if (args.length < 1) return reply('onde está o emojis hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(8).trim()
					anu = awat fetchJson(`https://mhankbarbars.tech/api/emoji2png?emoji=${teks}&apikey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker)
						fs.unlinkSync(rano)
					})
					break
				case 'firetext':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffer = awat getbufferer(anu.result)
					dark.sendMess(from, buffer, image, {quoted: mek})
					break
				case 'ytsearch':
					if (args.length < 1) return reply('Yang mau di cari apa?')
					reply(mess.wait)
					anu = awat fetchJson(`https://api.arugaz.my.id/api/media/ytsearch?query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `\`\`\`Título\`\`\` : *${i.title}*\n\`\`\`Link\`\`\` : *https://youtu.be/${i.id}*\n\`\`\`Publicados\`\`\` : *${i.uploadDate}*\n\`\`\`Duração\`\`\` : *${i.duration}*\n\`\`\`Visualizadores: \`\`\`*${h2k(i.viewCount)}*\n\`\`\`Canal:\`\`\` *${i.channel.name}*\n=================\n`
					}
					reply(teks.trim())
					awat limitAdd(sender) 
					break 
				case 'textdark':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=metal_dark_gold&text=${tels}&apiKey=administrator`, {method: 'get'})
					buffer = awat getbufferer(anu.result)
					dark.sendMess(from, buffer, image, {quoted: mek})
					break
				case 'textblue':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${tels}&apiKey=administrator`, {method: 'get'})
					buffer = awat getbufferer(anu.result)
					dark.sendMess(from, buffer, image, {quoted: mek})
					break
					case 'vipmenu':
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *#daftarvip* para comprar acesso Premium!' ,text, { quoted: mek })
					dark.sendMess(from, vipmenu(prefixbotbot) , text, { quoted: mek })
					break
					case 'outros':
					dark.sendMess(from, outros(prefixbotbot) , text, { quoted: mek })
					break
					case 'menu2':
					dark.sendMess(from, menu2(prefixbotbot) , text, { quoted: mek })
					break
				case 'textsky':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`https://hujanapi.herokuapp.com/api/sky_online?text=${tels}&apiKey=freetrial`, {method: 'get'})
					buffer = awat getbufferer(anu.result.result)
					dark.sendMess(from, buffer, image, {quoted: mek})
					break
				case 'rize':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = awat getbufferer(ze)
					dark.sendMess(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					awat limitAdd(sender) 	
					break 
				case 'mia':
				  	if (!isNsfw) return reply(' *Ative o modo nsfw, para atitag use: .modonsfw on* ')
					reply(mess.wait)
					anu = awat fetchJson(`https://testesw.herokuapp.com/`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = awat getbufferer(ze)
					dark.sendMess(from, nye, image, { caption: 'i love you, mia 🥺❤️', quoted: mek })
					awat limitAdd(sender) 	
					break 
				case 'texteng':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${tels}&apiKey=administrator`, {method: 'get'})
					buffer = awat getbufferer(anu.result)
					dark.sendMess(from, buffer, image, {quoted: mek})
					break
                case 'wolflogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = awat fetchJson(`https://dark-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buffer = awat getbufferer(anu.result)
                      dark.sendMess(from, buffer, image, {quoted: mek})
                      break
                case 'lionlogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = awat fetchJson(`https://dark-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buffer = awat getbufferer(anu.result)
                      dark.sendMess(from, buffer, image, {quoted: mek})
                      break
					break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('O que você quer escrever??') 
					teks = body.slice(7)
					reply(mess.wait)
					anu = awat fetchJson(`https://mhankbarbar.tech/nulis?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = awat getbufferer(anu.result)
					dark.sendMess(from, buffer, image, {quoted: mek, caption: mess.success})
                    awat limitAdd(sender)
					break
				case 'jogo':
					anu = awat fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					dark.sendMess(from, '*➸ Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					{, 30000) // 1000 = 1s,
					setTimeout( () => {
					dark.sendMess(from, '_10 Outro segundo…_', text) // ur cods
					{, 20000) // 1000 = 1s,
					setTimeout( () => {
					dark.sendMess(from, '_20 Outro segundo_…', text) // ur cods
					{, 10000) // 1000 = 1s,
					setTimeout( () => {
					dark.sendMess(from, '_30 Outro segundo_…', text) // ur cods
					{, 1000) // 1000 = 1s,
					setTimeout( () => {
					dark.sendMess(from, anu.result.soal, text, { quoted: mek }) // ur cods
					{, 0) // 1000 = 1s,
					break
				case 'bloquear':
				 dark.updatePresence(from, Presence.composing) 
				 dark.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					dark.blockUser (`${body.slice(7)}@c.us`, "add")
					dark.sendMess(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
				case 'premiumlist':
					teks = '╭────*「 *PREMIUM USER👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${premium.length}\n╰──────*「 *DARKBOT* 」*────`
					dark.sendMess(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
                  case 'qrcode':
        			if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.Daftarvip* para adquirir o acesso Premium!' ,text, { quoted: mek })
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return dark.sendMess(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: mek})
					const buffererr = awat getbufferer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					dark.sendMess(from, buffererr, image, {quoted: mek})
					break
		    	case 'wa.me':
		        case 'wame':
                  dark.updatePresence(from, Presence.composing) 
                  options = {
                  text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n*DARK DOMINA 🐊🚩*`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  dark.sendMess(from, options, text, { quoted: mek } )
			      break
                  case 'playstore':
                ps = `${body.slice(11)}`
                  anu = awat fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nome Apk:* ${ply.app.name}\n• *ID:* ${ply.app.id}\n• *Link Apk:* ${ply.app.url}\n===================°]\n`
                  }
                  reply(store.trim())
                  break
			     case 'nekopoi':
			   reply(mess.wait)
              	    if (args.length < 1) return reply('Cadê o texto, mano?')
                    teks = body.slice(9)
                    anu = awat fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Título: ${neko.title}\nDescrição: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	awat limitAdd(sender) 
			     	break  
			     case 'xvideos':
              	    if (args.length < 1) return reply('Cadê o texto, mano?')
                    anu = awat fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Título: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	awat limitAdd(sender) 
			     	break 
            case 'onichan':
            case 'bodoh':
                dark.sendMess(from, buffer, './lindy/baka.mp3', audio/mp3, {quoted: mek, ptt:true})
                break
				case 'daftar':
					dark.updatePresence(from, Presence.composing)
					if (args.length < 1) return reply(`Parameter Salah\nCommand : ${prefixbotbot}daftar nama|umur\nContoh : ${prefixbotbot}daftar ICHI|12`)
					tag reg = body.slice(8)
					tag jeneng = reg.split("|")[0];
					tag umure = reg.split("|")[1];
						user.pushb(sender)
						fs.writeFileSync('./src/user.json', JSON.stringify(user))
						dark.sendMess(from, `\`\`\`Pendaftaran berhasil dengan SN: TM08GK8HEUZBEHDO\`\`\`\n\n\`\`\`Pada ${date} ${time}\`\`\`\n\`\`\`[Nome]: ${jeneng}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`[Era]: ${umure}\`\`\`\n\`\`\`Para usar um bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefixbotbot}help\`\`\`\n\`\`\`\nTotal de usuários ${user.length}\`\`\``, text, {quoted: mek})
					break
				case 'hunti':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=287167&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffererjj = awat getbufferer(anu.result.pdf_file)
					dark.sendMess(from, buffererjj, document, {mimetype: 'document/pdf', quoted: mek})
					break
                 case 'setdesc':
			    	 if (!isGroup) return reply(mess.only.group)
				     if (!isGroupAdmins) return reply(mess.only.admin)
			   	     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				     dark.groupUpdateDescription(from, `${body.slice(9)}`)
				     dark.sendMess(from, 'Descrição alterada com sucesso', text, {quoted: mek})
				     break
			case 'google':
                const googleQuery = body.slice(8)
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let tags = `_*Resultado da pesquisa : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    tags +=  `\n═════════════════\n\n*Título* : ${results[i].title}\n\n*Descrição* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(tags)
                }).catch(e => {
                    console.log(e)
                    dark.sendMess(from, 'Google Error : ' + e);
                })
                awat limitAdd(sender) 
                break 
		case 'bpfont':
			bp = `${body.slice(8)}`
			anu = awat fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			awat limitAdd(sender) 
			break 
			 
                case 'speed':
                case 'ping':
                
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    dark.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    dark.sendMess(from, `Speed: *${latensi.toFixed(4)} _Segundos_*\nDispositivo: *Xiaomi*\nRAM: *6/64*\nData: *Telkomsel*\nRede: *4G*\nStatus: *Ainda não cobrado*\nTipo do bot: *Termux Somente*\n\n*O bot esteve ativo por*\n*${kyun(uptime)}*`, text, { quoted: mek})
                    break
				case 'delete':
				case 'del':
				case 'd':  
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.Daftarvip* para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins)return reply(mess.only.admin)
					dark.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'ninjalogo':
				tag gh = body.slice(11)
				tag nin = gh.split("&")[0];
				tag ja = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」Contoh : ${prefixbotbot}ninjalogo Ramlan & Gans`)
				reply(ind.wait())
				bufferer = awat getbufferer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, bufferer, image, {quoted: mek})
				awat limitAdd(sender)
				break				
		case 'halloweentext':
		
				if (args.length < 1) return reply(ind.wrongf())
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(ind.wait())
				bufferer = awat getbufferer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    baby.sendMessage(from, bufferer, image, {quoted: mek})
		    awat limitAdd(sender)	
		    break
				case 'pornhub':
				tag gh = body.slice(9)
				tag porn = gh.split("&")[0];
				tag hub = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」Contoh : ${prefixbotbot}pornhub Ramlan & Hub`)
				reply(mess.wait)
				bufferer = awat getbufferer(`https://api.xteam.xyz/textpro/ph?text=${porn}&text2=${hub}&APIKEY=${XteamKey}`)
				dark.sendMess(from, bufferer, image, {quoted: mek})
				awat limitAdd(sender)
				break
                case 'bloodtxt':
					tag gh = body.slice(12)
					tag gem = gh.split("&")[0];
					tag bok = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefixbotbot}gemboktext NAKANO&MIKU`)
					reply(mess.wait)
					bufferer = awat getbufferer(`https://dark-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=dark&text2=Ganz&apikey=${darkApi}`)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					awat limitAdd(sender)
					break
                case 'glitchtext':
					tag gh = body.slice(12)
					tag gli = gh.split("&")[0];
					tag tch = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefixbotbot}glitchtext NAKANO&MIKU`)
					reply(ind.wait())
					bufferer = awat getbufferer(`https://api.xteam.xyz/textpro/glitch?text=${gli}&text2=${tch}&APIKEY=${XteamKey}`)
					baby.sendMessage(from, bufferer, image, {quoted: mek})
					awat limitAdd(sender)
					break
                case 'tratag':
                     const pesan = body.slice(5)
                      if (!isPremium) return reply(mess.only.premium)
                      if (pesan.length > 5000) return dark.sendMess(from, 'ate 5k de caracteres', msgType.text, {quoted: mek})
                        tag nomor = mek.participant
                       const teks1 = `*[TRAVA🐊🚩]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                       const teks2 = `*[TRAVA🐊🚩]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                       const teks3 = `*[TRAVA🐊🚩]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                       const teks4 = `*[TRAVA🐊🚩]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                      tag options = {
                         text: teks1,
                         text: teks2,
                         text: teks3,
                         text: teks4,
                         contextInfo: {mentionedJid: [nomor]{,
                     }
                    dark.sendMess('556192247994@s.whatsapp.net', options, text, {quoted: mek})
                    reply('1 trava enviada')
                    break
           case 'playmp3':
                reply(mess.wait)
                play = body.slice(9)
                anu = awat fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=${ZeksApi}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `「 *TIMELINE PLAY MP3* 」\n*• Título:* ${anu.result.title}\n*• Link:* ${anu.result.source}\n*• Tamanho:* ${anu.result.size}\n\n*ESPERE NOVAMENTE ENVIANDO POR FAVOR, NÃO SPAME O CHAT*`
                bufferer = awat getbufferer(anu.result.thumbnail)
                lagu = awat getbufferer(anu.result.url_audio)
                dark.sendMess(from, bufferer, image, {quoted: mek, caption: infomp3})
                dark.sendMess(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                awat limitAdd(sender) 
                break 
            case 'smule':
					if (args.length < 1) return reply('Cadê o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = awat fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}\n\n Espere 1 minuto, talvez um pouco mais porque o download de vídeos esta executando`
					thumb = awat getbufferer(anu.thumb)
					dark.sendMess(from, thumb, image, {quoted: mek, caption: teks})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Aqui mano'})
					awat limitAdd(sender) 	
					break  
				case 'ttp':
					if (args.length < 1) return reply('Cadê o texto, hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = awat fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						dark.sendMess(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
                                        awat limitAdd(sender)
					break
                  case 'desbloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    dark.blockUser (`${body.slice(9)}@c.us`, "remove")
					dark.sendMess(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
				    break
                case 'image':
					if (args.length < 1) return reply('O que você quer procurar, mana?')
					goo = body.slice(7)
					anu = awat fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					reply(mess.wait)
				    tag pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    tag tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = awat getbufferer(tes2)
					dark.sendMess(from, pint, image, { caption: '*Google Image*\n\n*Resultado da pesquisa : '+goo+'*', quoted: mek })
					break
				case 'ban':
					if (!isOwner) return reply(mess.only.ownerB)
					dark.banUser (`${body.slice(7)}@c.us`, "add")
					dark.sendMess(from, `você foi banido ${body.slice(7)}@c.us`, text)
					break
				case 'playstore':
					kuji = body.slice(7)
					reply(mess.wait)
					anu = awat getbufferer(`https://api.vhtear.com/playstore?query={kuji}&apikey=Aris komtol`, {method: 'get'})
					capty = `*➸ title :* ${anu.title}\n*➸ app_id :* ${anu.app_id}\n*➸ description :* ${anu.description}\n*➸ developer_id :* ${anu.developer_id}\n*➸ developer :* ${anu.developer}\n*➸ score :* ${anu.score}\n*➸ full_price :* ${anu.full_price}\n*➸ price :* ${anu.price}\n*➸ free :* ${anu.free}`
					dark.sendMess(from, anu, image, {quoted: mek, caption: capty})
					break
				case 'otagall2':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.pushb(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'pinterest':
                    tels = body.slice(11)
					dark.updatePresence(from, Presence.composing) 
					data = awat fetchJson(`https://api.fdci.se/rep.php?gambar=${tels}`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = awat getbufferer(nimek)
					dark.sendMess(from, pok, image, { quoted: mek, caption: `*PINTEREST*\n\*Resultado da pesquisa* : *${tels}*`})
                    awat limitAdd(sender)
					break
                case 'darkjokes':
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = awat getbufferer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
				break
                case 'alerta':
				 data = fs.readFileSync('./src/alerta.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = awat getbufferer(randKey.result)
                sendImage(hasil, mek, '*alerta :V*')
				break									
         case 'moddroid':
			data = awat fetchJson(`https://dark-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${darkApi}`)
			hepi = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*editor*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*Tamanho*: ${hepi.size}\n*última versão*: ${hepi.latest_version}\n*gênero*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			bufferer = awat getbufferer(hepi.image)
			dark.sendMess(from, bufferer, image, {quoted: mek, caption: `${teks}`})
			awat limitAdd(sender)
			break
		case 'happymod':
			data = awat fetchJson(`https://dark-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${darkApi}`)
			hupo = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*versão*: ${hupo.version}\n*Tamanho:* ${hupo.size}\n*root*: ${hupo.root}\n*compra*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			bufferer = awat getbufferer(hupo.image)
			dark.sendMess(from, bufferer, image, {quoted: mek, caption: `${teks}`})
			awat limitAdd(sender)
			break
	
				case 'naruto':

					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = awat getbufferer(to)
					dark.sendMess(from, nye, image, { caption: 'naruto!!', quoted: mek })
					awat limitAdd(sender)
					break 
				case 'nsfwboquete':

					reply(mess.wait)
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/nsfwblowjob}`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = awat getbufferer(to)
					dark.sendMess(from, nye, image, { caption: 'naruto!!', quoted: mek })
					awat limitAdd(sender)
					break 
				case 'minato':

					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = awat getbufferer(ato)
					dark.sendMess(from, nye, image, { caption: 'minato!!', quoted: mek })
					awat limitAdd(sender)
					break 
				case 'boruto':

					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = awat getbufferer(uto)
					dark.sendMess(from, nye, image, { caption: 'boruto!!', quoted: mek })
					awat limitAdd(sender)
					break 
				case 'animecry':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/cry?apikey=${darkApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender) 
					break 
case 'onich':
axios.get = fs.readFileSync('./assets/sound7.mp3');
dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ola':
axios.get = fs.readFileSync('./assets/ola.mp3');
dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bv':
axios.get = fs.readFileSync('./assets/bv.mp3');
dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tchau':
axios.get = fs.readFileSync('./assets/tchau.mp3');
dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bem':
axios.get = fs.readFileSync('./assets/bem.mp3');
dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'a':
axios.get = fs.readFileSync('./assets/a.mp3');
dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'fdp':
axios.get = fs.readFileSync('./assets/fdp.mp3');
dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat1':
axios.get = fs.readFileSync('./assets/beat1.mp3');
dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'glub':
axios.get = fs.readFileSync('./assets/glub.mp3');
dark.sendMess(from, axios.get, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
//say
case 'say1':
axios.get = fs.readFileSync('./assets/say1.mp4');
dark.sendMess(from, axios.get, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say2':
axios.get = fs.readFileSync('./assets/say2.mp4');
dark.sendMess(from, axios.get, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say3':
axios.get = fs.readFileSync('./assets/say3.mp4');
dark.sendMess(from, axios.get, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say4':
axios.get = fs.readFileSync('./assets/say4.mp4');
dark.sendMess(from, axios.get, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
//xxx
case 'xxx1':
axios.get = fs.readFileSync('./assets/xxx1.mp4');
dark.sendMess(from, axios.get, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx2':
axios.get = fs.readFileSync('./assets/xxx2.mp4');
dark.sendMess(from, axios.get, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
//tagiados
case 'teto1':
axios.get = fs.readFileSync('./assets/teto1.mp4');
dark.sendMess(from, axios.get, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit1':
axios.get = fs.readFileSync('./assets/edit1.mp4');
dark.sendMess(from, axios.get, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit2':
axios.get = fs.readFileSync('./assets/edit2.mp4');
dark.sendMess(from, axios.get, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit3':
axios.get = fs.readFileSync('./assets/edit3.mp4');
dark.sendMess(from, axios.get, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit4':
axios.get = fs.readFileSync('./assets/edit4.mp4');
dark.sendMess(from, axios.get, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break

		
				case 'hinata':

					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = awat getbufferer(ta)
					dark.sendMess(from, nye, image, { caption: 'hinata!!', quoted: mek })
					awat limitAdd(sender)
					break 
           case 'hobby':

					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					dark.sendMess(from, 'Questão : *'+hobby+'*\n\nResponda : '+ by, text, { quoted: mek })
					awat limitAdd(sender)
					break
           case 'gay1':

					gay = body.slice(13)
		   anu = awat fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Veja os dados do Gay ${gay}\n\n\nPercentagem Gay : ${anu.persen}%\nAlerta!!! : gay, mas não cego`
		   reply(hasil)
		   awat limitAdd(sender)
					break
                case 'nangis':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/cry?apikey=${darkKey}`, {method: 'get'})
					reply('PACIENTE NGAB')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender)
					break
					case 'cium':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/kiss?apikey=${darkKey}`, {method: 'get'})
					reply('Mwahhh')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender)
					break
					case 'peluk':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/hug?apikey=${darkKey}`, {method: 'get'})
					reply('Peyukkkk')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender)
					break	
                case 'truth':
				case 'sasuke':

					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = awat getbufferer(ke)
					dark.sendMess(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					awat limitAdd(sender) 
					break 
				case 'sakura':

					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = awat getbufferer(kura)
					dark.sendMess(from, nye, image, { caption: 'sakura!!', quoted: mek })
					awat limitAdd(sender) 
					break 
				case 'addfoto':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Você quem é o dono? ')
					dark.sendMess(from, addfoto(prefixbotbot), text, { quoted: mek })
					break
			    case 'otagall3':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* wa.me/${mem.jid.split('@')[0]}\n`
						members_id.pushb(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'meme':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=MEMESBRASIL`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = awat getbufferer(ze)
					dark.sendMess(from, nye, image, { caption: 'hoje eu tou comédiante️', quoted: mek })
					awat limitAdd(sender) 	
					break 
			    case 'kbbi':
					if (args.length < 1) return reply('O que você quer procurar um?')
					anu = awat fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('De acordo com Kbbi:\n\n'+anu.result)
					break
				case 'persengay':
					if (args.length < 1) return reply('O que você quer procurar um?')
					anu = awat fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
					reply('De acordo com o percentual gay:\n\n'+anu.desc+anu.persen)
					break
			  case 'next':
               
                if (isGroup) return  reply( 'NÃO PODE ESTAR EM GRUPO KAK')
                awat reply('Ache um companheiro >_<')
                awat reply(`wa.me/${anug}`)
                awat reply( `Par encontrado: 🐊\n*${prefixbotbot}next* — Encontre novos parceiros`)
                break
			case 'instaimg':
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = awat fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getbufferer(anu.result)
				    reply(mess.wait)
				    dark.sendMess(from, insta, image, {quoted: mek})
				    awat limitAdd(sender) 
				    break  
				case 'instavid':
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = awat fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getbufferer(anu.result)
				    reply(mess.wait)
				    dark.sendMess(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    awat limitAdd(sender) 
				    break  
				    
				case 'instastory':
				if (args.length < 1) return reply('username??')
				if (isLimit(sender)) return reply(limitend(pushbname2))
				instor = `${body.slice(12)}`
				anu = awat fetchJson(`https://docs-jojo.herokuapp.com/api/igstory?username=${instor}`, {method: 'get'})
				insta = '=========================\n'
				for (let story of anu.result) {
				insta += `• *Envio:* ${story.uploaded}\n• *Termina:* ${story.expired}\n• *Tamanho: ${story.filesize}\n• *Tipo:* ${story.type}\n• Link: ${story.url}\n=========================\n`
				}
				reply(insta.trim())
				awat limitAdd(sender)
				break
                                case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('irmão afk por causa do que?')                                  
                                        tag nom = mek.participant
                                        const tag = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *MÉDIO AFK ${tels} NÃO PERTURBE SIM*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        dark.sendMess(from, tag, text, {quoted: mek})
                                        break 
				case 'indo10':
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.daftarvip* para comprar acesso Premium!' ,text, { quoted: mek })
					qute9 = awat getbufferer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					dark.sendMess(from, qute9, image, { quoted: mek, caption: 'Aqui está o Bro Baixe o seu próprio link\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })
					break
case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
dark.sendMess(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
				case 'bucin':
					anu = awat fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply('Não fique entediado:\n\n'+anu.desc)
					break
			    case 'nsfwblowjob':
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = awat fetchJson(`https://dark-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
						bufferer = awat getbufferer(res.result)
						dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'Não faça ingredientes para o tio comum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
				case 'testime':
					setTimeout( () => {
					dark.sendMess(from, 'O tempo acabou:v', text) // ur cods
					{, 10000) // 1000 = 1s,
					setTimeout( () => {
					dark.sendMess(from, 'Mais 5 segundos', text) // ur cods
					{, 5000) // 1000 = 1s,
					setTimeout( () => {
					dark.sendMess(from, '10 segundos para ir', text) // ur cods
					{, 0) // 1000 = 1s,
					break
		        case 'gay':		
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					dark.sendMess(from, 'Como você é gay: *'+rate+'*\n\nSua porcentagem gay : '+ kl+'%', text, { quoted: mek })
					break
                  case 'timer':
				if (args[1]=="segundo") {tag timer = args[0]+"000"
				} else if (args[1]=="minuto") {tag timer = args[0]+"0000"
				} else if (args[1]=="hora") {tag timer = args[0]+"00000"
				} else {return reply("*escolher:*\nsegundo\nminuto\nhora")}
				setTimeout( () => {
				reply("O tempo acabou")
				{, timer)
				break
				case 'delete':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque a msg para apagar *seja um administrador!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Comando recebido, excluir mensagem :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						dark.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						dark.deleteMessage(from, mentioned)
					}
					break
				case 'openanime':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAnime) return reply('O modo anime já está ativo')
						anime.pushb(from)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Ativado com sucesso o modo anime neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						anime.splice(from, 1)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Modo anime desativado com sucesso neste grupo ✔️')
					} else {
						reply('1 para atitag, 0 para desatitag')
					}
					break
			    case 'nsfwneko':
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = awat fetchJson(`https://dark-api.herokuapp.com/api/nsfwneko`, {method: 'get'})
						bufferer = awat getbufferer(res.result)
						dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
				case 'nsfwtrap':
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = awat fetchJson(`https://dark-api.herokuapp.com/api/nsfwtrap`, {method: 'get'})
						bufferer = awat getbufferer(res.result)
						dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'ni Anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
				case 'animekiss':
                if (!isAnime) return reply(' *Deve atitag o modo Anime* ')
					anp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/kiss?apikey=${darkApi}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender) 
					break 
				case 'setfoto':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = awat dark.downloadAndSaveMediaMessage(mek)
                    awat dark.updateProfilePicture (from, media)
                    reply('Alterou com sucesso o ícone do Grupo')
                    break			
                case 'level':
					if (!isLevelingOn) return reply(mess.levelnoton)
					if (!isGroup) return reply(mess.only.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
					sem = sender.replace('@s.whatsapp.net','')
					resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Nome : ${sem}\n┣⊱ Seu XP :  ${userXp}\n┣⊱ Seu Level : ${userLevel}\n┗━━━━━━━━━━━━`
					dark.sendMess(from, resul, text, { quoted: mek})
					.catch(async (err) => {
                    console.error(err)
                    awat reply(`Error!\n${err}`)
                    })
                    break
                case 'leveling':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Boo :𝘃')
					if (args[0] === 'on') {
                    if (isLevelingOn) return reply('*O comando de level já estava ativo*')
                    _leveling.pushb(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
					} else if (args[0] === 'off') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
					} else {
					reply(' Use ${prefixbotbot}leveling on para atitag e  ${prefixbotbot}leveling off para desatitag')
					}
					break
			    case 'tinyurl':
			    reply(mess.wait)
                    anu = awat fetchJson(`https://dark-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${darkApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			        awat limitAdd(sender) 
			        break 
				case 'slide':
					if (args.length < 1) return reply('*Textnya mana gan?*')
					teks = `${body.slice(7)}`
					atytyd = awat getbufferer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					dark.sendMess(from, atytyd, video, {quoted: mek})
					awat limitAdd(sender) 
					break  
				case 'cpaper':
				cpaper = `${body.slice(8)}`
				buffer = awat getbufferer(`https://api.arugaz.my.id/api/photooxy/text-on-burn-paper?text=${cpaper}`, {method: 'get'})
				dark.sendMess(from, buffer, image, {quoted: mek})
				break 
                                case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para atitag ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.pushb(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Antilink ativado com sucesso ✓')
						dark.sendMess(from,`*Atenção, antilink esta ativo, qualquer um que nao for adm mandar link, sera expulso do gp imediatamente.*`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('O anti-link foi desabilitado ')
						tag ini = anti.darkOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Desatitag grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para atitag, 0 para desatitag ')
					}
					break
				case 'cgame':

					reply(mess.wait)
					buffer = awat getbufferer(`https://api.vhtear.com/gamelogo?text=${body.slice(7)}&apikey=${VthearApi}`, {method: 'get'})
					dark.sendMess(from, buffer, image, {caption: 'Aqui amigo (a)', quoted: mek})
					awat limitAdd(sender) 
					break 
				case 'cparty':

					part = `${body.slice(8)}`
					reply(mess.wait)
					buffereru = awat getbufferer(`https://api.vhtear.com/partytext?text=${part}&apikey=${VthearApi}`, {method: 'get'})
					dark.sendMess(from, buffereru, image, {caption: 'Aqui amigo (a)', quoted: mek})
					awat limitAdd(sender) 
					break 
				case 'cstyle':

					reply(mess.wait)
					buffer = awat getbufferer(`https://api.vhtear.com/stylelogo?text=${body.slice(8)}&apikey=${VthearApi}`, {method: 'get'})
					dark.sendMess(from, buffer, image, {caption: 'Aqui amigo (a)', quoted: mek})
					awat limitAdd(sender) 
					break 
				case 'cglass':

					glass = `${body.slice(8)}`
					reply(mess.wait)
					buffereru = awat getbufferer(`https://api.vhtear.com/wetglass?text=${glass}&apikey=${VthearApi}`, {method: 'get'})
					dark.sendMess(from, buffereru, image, {caption: 'Aqui amigo (a)', quoted: mek})
					awat limitAdd(sender) 
					break 
					case 'croman':               
                roman = `${body.slice(8)}`
                     if (args.length < 1) return reply('Cadê o texto, mano??')
                     if (args.length > 10) return reply('pelo menos 10 caracteres')
                     buffer = awat getbufferer(`https://api.vhtear.com/romancetext?text=${roman}&apikey=${VthearApi}`, {method: 'get'})
                     dark.sendMess(from, buffer, image, {quoted: mek})
                  awat limitAdd(sender) 
                  break 
				case 'setnomebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`O nome do bot foi alterado com sucesso para : ${name}`)
					break
					case 'clove':
					  if (args.length < 1) return reply('Cadê o texto, mano??')
                     if (args.length > 10) return reply('pelo menos 10 caracteres')
					 love = `${body.slice(7)}`
					 buffer = awat getbufferer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${VthearApi}`, {method: 'get'})
					 dark.sendMess(from, buffer, image, {quoted: mek})
					 awat limitAdd(sender)
					 break 
			    case 'lovemake':
              	    if (args.length < 1) return reply('Onde está o texto, irmão??')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return dark.sendMess(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer = awat getbufferer(`https://api.vhtear.com/lovemessagetext?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
                    dark.sendMess(from, buffer, image, {quoted: mek, caption: `${teks}`})
			     	break
                	case 'tomp3':
                	dark.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('Marque o video pfv')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = awat dark.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
						bufferer = fs.readFileSync(ran)
						dark.sendMess(from, bufferer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				case 'boquet':
				dark.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./Fxc7/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = jsonData[Math.floor(Math.random() * (jsonData.length))];
                 randKey = jsonData[randIndex];
                 randBokep = awat getbufferer(randKey.image)
                 reply(mess.wait)
                 randTeks = awat fetchJson(randKey.teks)
                 dark.sendMess(from, randBokep, image, {quoted: mek, caption: randTeks})
				awat limitAdd(sender) 
				break

			    case 'shorturl':
                    anu = awat fetchJson(`https://dark-api.herokuapp.com/api/shorturl?url=${body.slice(10)}`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
			    case 'infonomor':
                    anu = awat fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        hasil = `*número* \n${anu.nomor} *internacional* \n${anu.international}`
			        reply(hasil)
			        break
			    case 'igstalk':
					if (args.length < 1) return reply('Masukan username mu!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = awat fetchJson(`https://api.vhtear.com/igprofile?query=${ige}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					bufferer = awat getbufferer(anu.result.picture)
					capt = `User Ditemukan!!\n\n*➸ Nama :* ${anu.result.full_name}\n*➸ Username :* ${anu.result.username}\n*➸ Followers :* ${anu.result.follower}\n*➸ Mengikuti :* ${anu.result.follow}\n*➸ Jumlah Post :* ${anu.result.post_count}\n*➸ Private :* ${anu.result.is_private}\n*➸ Bio :* ${anu.result.biography}`
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: capt})
					break
				//lgiproses
				case 'tesss':
					if (args.length < 1) return reply('o que você quer tio')
					teks = body.slice(7)
					if (teks.length > 8) return reply('O texto é longo, com até 8 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`https://zeksapi.herokuapp.com/api/leavest?text=${teks}&apikey=xptnbot352`)
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
                                case 'mining':
                                        if (isLimit(sender)) return reply(ind.limitend(pushbname))
                                        if (!isEventon) return reply(`maaf ${pushbname} event mining tidak di aktifkan oleh owner`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`porque você é nosso proprietário da equipe bot de envio ${one}Xp para voce`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                awat reply(`*Parabéns* ${pushbname} você pega *${mining}Xp*`)
                                        }
                                        awat limitAdd(sender)
                                        break
			    case 'waifu':
				    try {
						res = awat fetchJson(`https://dark-api.herokuapp.com/api/waifu`, {method: 'get'})
						bufferer = awat getbufferer(res.image)
						dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'ksksksks hmm'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'waifu2':
					reply(mess.wait)
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/waifu`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferer = awat getbufferer(anu.image)
					waifu = `*${anu.desc}`
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: waifu})
					break
				case 'text3d':
              	    if (args.length < 1) return reply('Onde está o texto, irmão??')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return dark.sendMess(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer = awat getbufferer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    dark.sendMess(from, buffer, image, {quoted: mek, caption: `${teks}`})
			     	break
				case 'imoji':
					reply(mess.wait)
					anu = awat fetchJson(`https://mhankbarbars.herokuapp.com/api/emoji2png?emoji=`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'wibu':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.vhtear.com/randomwibu&apikey=ANTIGRATISNIHANJENKKK`)
					if (anu.error) return reply(anu.error)
					bufferer = awat getbufferer(anu.result.foto)
					wibu = ` ➸ *nome* ${anu.result.nama} ➸ *descrição* ${anu.result.deskripsi}`
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: wibu})
					break
                   case 'map':
                   data = awat fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   hasil = awat getbufferer(data.gambar)
                   dark.sendMess(from, hasil, image, {quoted: mek, caption: `Resultados de *${body.slice(5)}*`})
                   awat limitAdd(sender)
                   break
                   case 'covidcountry':
                   dark.updatePresence(from, Presence.composing) 
                   data = awat fetchJson(`https://arugaz.my.id/api/edu/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `País : ${data.result.country}\n\nAtivo : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncrítico : ${data.result.critical}\nMortes por milhão : ${data.result.deathsPerOneMillion}\nrecuperado : ${data.result.recovered}\nteste por milhão : ${data.result.testPerOneMillion}\ncasos de hj : ${data.result.todayCases}\nMortes de hj : ${data.result.todayDeath}\nCasos total : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   awat limitAdd(sender)
                   break
					case 'totaluser':
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`╭────*「 *TOTAL DE USUÁRIOO DARK BOT 👑* 」\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total de usuários : ${user.length}\n╰──────*「 *DARK* 」*────`
					 dark.sendMess(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'desligar':
					if (!isOwner) return reply(mess.only.ownerB)
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('*ERRO AO DESLIGAR*')
						bufferer = awat getbufferer(res.url)
						dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'lolizinha'})
					})
					break
			case 'closegc':
					dark.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					tag nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *apenas administrador* quem pode enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					dark.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
				case 'kurumi':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = awat getbufferer(imi)
					dark.sendMess(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					awat limitAdd(sender) 
					break 
				case 'miku':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = awat getbufferer(ku)
					dark.sendMess(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					awat limitAdd(sender) 
					break 
					
// recursos anime, random @dark domina vida

                case 'anjing':
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					tag n = JSON.parse(JSON.stringify(anu));
					tag nimek =  n[Math.floor(Math.random() * n.length)];
					pok = awat getbufferer(nimek)
					dark.sendMess(from, pok, image, { quoted: mek })
					awat limitAdd(sender)
					break
				//jojo 
				case 'stickerhide':
				    ranp = getRandom('.gif')
					rano = getRandom('.webp')
				anu = awat fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
				exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'emoji':
				anu = awat fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=%F0%9F%98%82&type=aple`, {method: 'get'})
				jes = awat getbufferer(anu)
				dark.sendMess(from, jes, image,{quoted : mek, caption : 'DONE'})
				break
                case 'resepmasakan':
                
                reply(mess.wait)
                   anu = awat fetchJson(`https://api.vhtear.com/resepmasakan?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
                   buffer = awat getbufferer(anu.result.image)
                   resep = `*${anu.result.title}*\n${anu.result.desc}\n\n*INGREDIENTES² INDISPENSÁVEL*\n${anu.result.bahan}\n\n*COMO COZINHAR*\n${anu.result.cara}`
                   dark.sendMess(from, buffer, image, {quoted: mek, caption: resep})
                   awat limitAdd(sender) 
                   break 
               case 'cersex':
                
                   anu = awat fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = awat getbufferer(anu.result.image)
                   reply (mess.wait)
                   cerita = `• *Título:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   dark.sendMess(from, sex, image, {quoted: mek, caption: cerita})
                   awat limitAdd(sender) 
                   break 
              case 'cerpen':

                   anu = awat fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`, {method: 'get'})
                   cerpen = `• *Title:* ${anu.result.title}\n• *Pengarang:* ${anu.result.pengarang}\n• *Kategori:* ${anu.result.kategori}\n\n${anu.result.cerpen}`
                   dark.sendMess(from, cerpen, text, {quoted: mek})
                   break 
               case 'puisiimg':

                   pus = awat getbufferer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, {method: 'get'})
                   dark.sendMess(from, pus, image, {quoted: mek})
                   break 
				case 'akira':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = awat getbufferer(ara)
					dark.sendMess(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					awat limitAdd(sender) 
					break 
				case 'itori':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = awat getbufferer(ori)
					dark.sendMess(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					awat limitAdd(sender) 
					break 
				case 'kurumi':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = awat getbufferer(imi)
					dark.sendMess(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					awat limitAdd(sender) 
					break 
				case 'miku':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = awat getbufferer(ku)
					dark.sendMess(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					awat limitAdd(sender) 
					break 
                case 'opengc':
                case 'bukagc':
					dark.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nsekarang *todos os participantes* pode enviar mensagens`,
					contextInfo: { mentionedJid: [sender] }
					}
					dark.groupSettingChange (from, GroupSettingChange.messageSend, false)
					dark.sendMessa
				case 'setppbot':
				dark.updatePresence(from, Presence.composing) 
				if (!isQuotedbImage) return reply(`Envie fotos com legendas ${prefixbotbot}setbotpp ou tags de imagem que já foram enviadas`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = awat dark.downloadAndSaveMediaMessage(enmedia)
					awat dark.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil😗')
					break
				case 'filme':
				if (args.length < 1) return reply('Que filme quer encontrar?')
				reply(mess.wait)
				anu = awat fetchJson(`https://api.vhtear.com/downloadfilm?judul=${body.slice(6)}&apikey=${VthearApi}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				film = `• Título: *${anu.result.judul}*\n• Resolução: *${anu.result.data.resolusi}*\n• Link Download: *${anu.result.data.urlDownload}*\n`
				dark.sendMess(from, film, text, {quoted: mek})
				awat limitAdd(sender) 
					break					
				case 'randomcat':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.vhtear.com/randomcat?apikey=ANTIGRATISNIHANJENKKK`)
					if (anu.error) return reply(anu.error)
					bufferer = awat getbufferer(anu.result.url)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'mlherolist':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.vhtear.com/mlherolist?apikey=ANTIGRATISNIHANJENKKK`)
					icon = awat getbufferer(anu.icon)
					dark.sendMess(from, icon, image, {quoted: mek})
					break
			    case 'randomanime':
				    try {
						res = awat fetchJson(`https://dark-api.herokuapp.com/api/randomanime`, {method: 'get'})
						bufferer = awat getbufferer(res.result)
						dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'ni randomanime!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'randomhentai':
				    try {
						if (!isNsfw) return reply('❌ *FALSE* ❌')
						res = awat fetchJson(`https://dark-api.herokuapp.com/api/hentai`, {method: 'get'})
						bufferer = awat getbufferer(res.result)
						dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'hentai teros'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                case 'irii':
			dark.sendPtt(from, './lindy/iri2.mp3', id)
			break
                 case 'play':
                reply(mess.wait)
                play = body.slice(5)
                anu = awat fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*MUSICA ENCONTRADA!!!*\nTítulo : ${anu.result.title}\nUrl : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE UM POUQUINHO, N SPAME O CHAT*`
                bufferer = awat getbufferer(anu.result.thumbnail)
                lagu = awat getbufferer(anu.result.url_audio)
                dark.sendMess(from, bufferer, image, {quoted: mek, caption: infomp3})
                dark.sendMess(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                awat limitAdd(sender)
                break
				case 'setnome':
                   if (!isGroup) return reply(mess.only.group)
			       if (!isGroupAdmins) return reply(mess.only.admin)
			   	   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   dark.groupUpdateSubject(from, `${body.slice(9)}`)
                   dark.sendMess(from, 'Sucesso, alterou o nome do grupo', text, {quoted: mek})
                   break
				case 'galaxtext':
					if (args.length < 1) return reply('o que você quer tio')
					teks = body.slice(12)
					if (teks.length > 8) return reply('O texto é longo, com até 8 caracteres')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
                case 'phlogo':
					tag gh = body.slice(10)
					tag gbl1 = gh.split("|")[0];
					tag gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = awat fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'primbonjodoh':
					tag gh = body.slice(14)
					tag gbl1 = gh.split("|")[0];
					tag gbl2 = gh.split("|")[1];
					anu = awat fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${gbl1}&pasangan=${gbl2}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
				case 'ramaljadian':
					tag gh = body.slice(10)
					tag gbl1 = gh.split("|")[0];
					tag gbl2 = gh.split("|")[1];
					tag gbl3 = gh.split("|")[2];
					anu = awat fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
                      case 'gay1': 
                                        tag imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedbImage) && args.length == 0) {
                                         ger = isQuotedbImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = awat  dark.downloadAndSaveMediaMessage(ger)
                                         anu = awat imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                         if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 dark.sendMess(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Use a foto!')
                                          }
                                             break
                case 'tahta':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
				case 'testing':
					tag gh = body.slice(5)
					tag gbl3 = gh.split("|")[0];
					tag gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = awat fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=xptnbot352`, {method: 'get'})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'snowrite':
					tag gh = body.slice(10)
					tag gbl7 = gh.split("|")[0];
					tag gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = awat fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=xptnbot352`, {method: 'get'})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'marvelogo':
					tag gh = body.slice(9)
					tag gbl5 = gh.split("|")[0];
					tag gbl6 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = awat fetchJson(`https://zeksapi.herokuapp.com/api/marvellogo?text1=${gbl5}&text2=${gbl6}&apikey=xptnbot352`, {method: 'get'})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson('https://dark-api.herokuapp.com/api/hug&apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'lovemake':
					if (args.length < 1) return reply('Cadê o texto, hum')
					love = body.slice(10)
					if (love.length > 12) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: ' '+love})
					break
				case 'thunder':
					if (args.length < 1) return reply('Cadê o texto, hum')
					thun = body.slice(9)
					if (thun.length > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: ' '+thun})
					break
                case 'stiltext':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      buffer = awat getbufferer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=ANTIGRATISNIHANJENKKK`)
                      reply(mess.wait)
                      dark.sendMess(from, buffer, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
                case 'teste':
					tag gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://zeksapi.herokuapp.com/api/watercolour?text1=${coli1}&text2=${coli2}&apikey=xptnbot352`)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'teste2':
					tag gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					party = awat getbufferer(`https://api.vhtear.com/partytext?text=${coli1}&text2=${coli2}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, party, image, {quoted: mek})
					break
                case 'ninjalogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = awat fetchJson(`https://dark-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buffer = awat getbufferer(anu.result)
                      dark.sendMess(from, buffer, image, {quoted: mek})
                      break
                    case 'fbcheker':

                    dark.sendMess(from, fbcheker(prefixbotbot), text, { quoted: mek })
                    tod = awat getbufferer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    dark.sendMess(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'musicas':
                    case 'msc':
                    case 'músicas':

                    dark.sendMess(from, musicas(prefixbotbot), text, { quoted: mek })
                    tod = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPT0j8l4LzReLf1xM9IBhzFgwy-I0UHGZEw&usqp=CAU`)
                    dark.sendMess(from, tod, image, { quoted: mek, caption: '*Comandos de músicas ✓*'})
                    break
                    case 'hackfb':

                    dark.sendMess(from, hackfb(prefixbotbot), text, { quoted: mek })
                    tod = awat getbufferer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    dark.sendMess(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'tool':

                    dark.sendMess(from, tool(prefixbotbot), text, { quoted: mek })
                    tod = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuSbtfXab8BfnyFVg-ex9ti1fNafH7bRp4A&usqp=CAU`)
                    dark.sendMess(from, tod, image, { quoted: mek, caption: '*Dark domina ✓*'})
                    break
                    case 'animemenu':

                    dark.sendMess(from, animemenu(prefixbotbot), text, { quoted: mek })
                    tod = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuSbtfXab8BfnyFVg-ex9ti1fNafH7bRp4A&usqp=CAU`)
                    dark.sendMess(from, tod, image, { quoted: mek, caption: '*Comandos de anime ✓*'})
                    break
                    case 'bruteforcefb':

                    dark.sendMess(from, bruteforcefb(prefixbotbot), text, { quoted: mek })
                    tod = awat getbufferer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    dark.sendMess(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'toolsphishing':

                    dark.sendMess(from, toolsphishing(prefixbotbot), text, { quoted: mek })
                    tod = awat getbufferer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    dark.sendMess(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'socialfishv2':

                    dark.sendMess(from, socialfishv2(prefixbotbot), text, { quoted: mek })
                    tod = awat getbufferer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    dark.sendMess(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'terkeytermux':

                    dark.sendMess(from, terkeytermux(prefixbotbot), text, { quoted: mek })
                    tod = awat getbufferer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    dark.sendMess(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                case 'glitch':
					tag gh = body.slice(8)
					tag tels3 = gh.split("|")[0];
					tag tels4 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(mess.wait)
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/textpro?theme=glitch&text1=${tels3}&text2=${tels4}`, {method: 'get'})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'party':
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					if (part.length > 20) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://api.vhtear.com/partytext?text=${part}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, bufferer, image, {caption: 'Aqui mana', quoted: mek})
					break
				case 'rtext':
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('O texto é longo, com até 10 caracteres')
					reply(mess.wait)
					bufferer = awat getbufferer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=ANTIGRATISNIHANJENKKK`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: tels5})
					break
				case 'water':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
					break
				case 'firetext':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffer = awat getbufferer(anu.result)
					dark.sendMess(from, buffer, image, {quoted: mek})
					break
				case 'textdark':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=metal_dark_gold&text=${tels}&apiKey=administrator`, {method: 'get'})
					buffer = awat getbufferer(anu.result)
					dark.sendMess(from, buffer, image, {quoted: mek})
					break
				case 'textblue':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${tels}&apiKey=administrator`, {method: 'get'})
					buffer = awat getbufferer(anu.result)
					dark.sendMess(from, buffer, image, {quoted: mek})
					break
				case 'textsky':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`https://hujanapi.herokuapp.com/api/sky_online?text=${tels}&apiKey=freetrial`, {method: 'get'})
					buffer = awat getbufferer(anu.result.result)
					dark.sendMess(from, buffer, image, {quoted: mek})
					break
				case 'texteng':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = awat fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${tels}&apiKey=administrator`, {method: 'get'})
					buffer = awat getbufferer(anu.result)
					dark.sendMess(from, buffer, image, {quoted: mek})
					break
                case 'wolflogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = awat fetchJson(`https://dark-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buffer = awat getbufferer(anu.result)
                      dark.sendMess(from, buffer, image, {quoted: mek})
                      break
					case 'spamcall':
          if (!isPremium) return reply(mess.only.premi)
          reply('Espere..')
                                       if (args[0].startsWith('08')) return reply('Use o prefixbotboto número 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Falha ao ligar para o número do bot')
                                       if (args[0].startsWith('82387804410')) return reply('Falha ao ligar para o número do proprietário')
                                       tag data = body.slice(10)
                                       awat fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       awat fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       awat fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       awat fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       awat fetchJson(`https://api-zeks.harispoppy.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
                case 'lionlogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = awat fetchJson(`https://dark-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buffer = awat getbufferer(anu.result)
                      dark.sendMess(from, buffer, image, {quoted: mek})
                      break
			    case 'fakereplay':
                   dark.reply(from, 'ange mas', 'mending lari', "0816-5466368")
                   break
				case 'infogc':
				dark.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = awat dark.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = awat getbufferer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nome do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					dark.sendMess(from, buf, image, {quoted: mek, caption: teks})
					break
			    case 'owner':
                    dark.sendMess(from, {displayname: "Jeff", vcard: vcard{, MessageType.contact, { quoted: mek})
                    dark.sendMess(from, 'Ctt do meu dono ai, pfv n flode o chat',MessageType.text, { quoted: mek} )
                    break
                case 'fitnah':	
				case 'fake':          
                    if (!isGroup) return reply(mess.only.group)
                    arg = body.substring(body.indexOf(' ') + 1)
				    isi = arg.split(' |')[0] 
			        pesan = arg.split('|')[1] 
				    pesan2 = arg.split('|')[2] 
                    costum(pesan, isi, pesan2)
                    break
				case 'info':
					me = dark.user
					uptime = process.uptime()
					teks = `*Nome do bot* : ${me.name}\n*Número do bot* : @${me.jid.split('@')[0]}\n*prefixbotboto* : ${prefixbotbot}\n*Contatos bloqueados* : ${blocked.length}\n*O bot está ativo em* : ${kyun(uptime)}\n\n*Digite .dono para ver a info do dono*`
					bufferer = awat getbufferer(me.imgUrl)
					dark.sendMess(from, bufferer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
                case 'blowjob':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/nsfwblowjob?apikey=${darkKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						bufferer = fs.readFileSync(rano)
						dark.sendMess(from, bufferer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					awat limitAdd(sender)
					break
				case 'bloqueados':
					teks = 'Esta é a lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					dark.sendMess(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'leens':
					if ((isMedia && !mek.message.videoMessage || isQuotedbImage) && args.length == 0) {
						const encmedia = isQuotedbImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = awat dark.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						awat recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só uma foto mano')
					}
					break
				case 'figu':
				case 'fig':
				case 'f':
					if ((isMedia && !mek.message.videoMessage || isQuotedbImage) && args.length == 0) {
						const encmedia = isQuotedbImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = awat dark.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						awat ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								dark.sendMess(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = awat dark.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						awat ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								dark.sendMess(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedbImage) && args[0] == 'nobg') {
						const encmedia = isQuotedbImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = awat dark.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						awat removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let bufferer = bufferer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, bufferer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								dark.sendMess(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedbImage) && colors.includes(args[0])) {
						const encmedia = isQuotedbImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = awat dark.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						awat ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								dark.sendMess(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie fotos com legendas *.f* ou marque uma imagem que já foi enviada`)
					}
					break
				case 'tts':
					if (args.length < 1) return dark.sendMess(from, 'Qual é o código da linguagem, tio?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return dark.sendMess(from, 'Cadê o texto tio', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('A maior parte do texto é merda')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('falha:(')
							dark.sendMess(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'shadow': 
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					shad = body.slice(8)
					reply(mess.wait)
					ssha = awat getbufferer(`https://api-anoncybfakeplayer.herokuapp.com/photooxy/shadowtext?text=${shad}`)
					dark.sendMess(from, ssha, image, {caption: 'Nihkkkak', quoted: mek})
					break
				case 'minion':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					minio = body.slice(8)
					reply(mess.wait)
					minn = awat getbufferer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/miniontext?text=${minio}`)
					dark.sendMess(from, minn, image, {caption: 'Nihhjmmak', quoted: mek})
					break
				case 'neon':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					nneoo = body.slice(6)
					reply(mess.wait)
					nooe = awat getbufferer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neontext?text=${nneoo}`)
					dark.sendMess(from, nooe, image, {caption: 'Nihjjkkak', quoted: mek})
					break
				case 'neongreen': 
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(11)
					reply(mess.wait)
					gree = awat getbufferer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/greenneontext?text=${grre}`)
					dark.sendMess(from, gree, image, {caption: 'Njkkkak', quoted: mek})
					break
				case 'neon2':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					duadua = body.slice(7)
					reply(mess.wait)
					duaa = awat getbufferer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neonwithgalaxytext?text=${duadua}`)
					dark.sendMess(from, duaa, image, {caption: 'kkkkkk', quoted: mek})
					break
				case '3d':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					dimen = body.slice(4)
					reply(mess.wait)
					tigaa = awat getbufferer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/3dgradientstext?text=${dimen}`)
					dark.sendMess(from, tigaa, image, {caption: 'kkksk', quoted: mek})
					break
				case 'walpaperanime':
				    try {
			    	if (!isOwner) return reply(mess.only.ownerB)
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = awat fetchJson(`https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']`, {method: 'get'})
						buffererttt = awat getbufferer(res.result)
						dark.sendMess(from, buffererttt, image, {quoted: mek, caption: 'ksksks'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
					case 'dado':    
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.Daftarvip* para adquirir o acesso Premium!' ,text, { quoted: mek })
					
					kapankah = body.slice(1)
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					dark.sendMess(from, ule, text, { quoted: mek })
					break
					case 'addvip':  
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite * # Daftarvip * para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Expirado*: *30 Days*\n│+ *Status*: *ATIVO*\n│ Thx para atualizar para premium🥰\n*╰──────「 *posição* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						dark.sendMess(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Número* : @${mentioned[0].split('@')[0]}\n│+ *Expirado*: *30 Days*\n│+ *Status*: *ATIVO*\n│ Thx para atualizar para premium🥰\n*╰──────「 *posição* 」────`, mentioned, true)
					dark.sendMess(from, mentioned)
				    }
					break
					case 'daftarvip': 
					dark.sendMess(from, daftarvip(prefixbotbot) , text, { quoted: mek })
					break
					case 'nekopoi':   
					
					dark.sendMess(from, nekopoi(prefixbotbot) , text, { quoted: mek })
					break
				case 'neko':
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = awat fetchJson(`https://dark-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, image, {quoted: mek})
                    awat limitAdd(sender)
					break	
					case 'cekvip': 
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.Daftarvip* para adquirir o acesso Premium!' ,text, { quoted: mek })
					me = dark.user
					uptime = process.uptime()
					dark.sendMess(from,  `*──────────────────*\n*Nome do bot:* DARKBOT\n*─────────────────*\n『 *𝐕𝐈𝐏 𝐔𝐒𝐄𝐑*』\n*──────────────────*\n*•Número:* *${sender.split("@s.whatsapp.net")[0]}*\n*•Status:* *ATIVO*\n*──────────────────*\n*Status Bot:* *${kyun(uptime)}*\n\n*VOCE É UM MEMBRO PREMIUM* 🐊🚩\n*──────────────────*` , text, { quoted: mek, })
					break
					case 'dellvip':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite * # Daftarvip * para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Status*: *DEATIVO*\n│ Te vejo para o próximo pedido🙂\n*╰──────「 *posição* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						dark.sendMess(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Número* : @${mentioned[0].split('@')[0]}\n│+ *Status*: *DEATIVO*\n│ Te vejo para o próximo pedido🙂\n*╰──────「 *posição* 」────`, mentioned, true)
					dark.sendMess(from, mentioned)
				    }
					break
					case 'ichiadmin':
					tod = awat getbufferer(`https://i.ibb.co/XDwBVDJ/1f2652c622fa.jpg`)
					dark.sendMess(from, tod, image, { quoted: mek, caption: '*╭────*「 *ADMINBOT DARK ✨* 」\n*│+ wa.me/5522996215481*╰──────*「 *DARK* 」*────*\n\n*_SE QUER SER ADMIN DO BOT DARK_*\n*_Tipo /iklan_*' })
					break
				case 'iklan':
					dark.sendMess(from, iklan(prefixbotbot) , text, { quoted: mek })
					break
					case 'premiumcek':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					sa = awat getbufferer(`https://i.ibb.co/PcQ6tsB/79ac87b9358c.jpg`)
					dark.sendMess(from, sa, image, { quoted: mek, caption: '*╭────*「 *PREMIUM USER👑* 」\n*│+ wa.me/5522996215481*╰──────*「 * DARK* 」*────*\n\n*_SE QUER SER UM USUÁRIO PREMIUM DO DARK BOT_*\n*_Ketik #daftarvip*' })
					break
					case 'cekmod': 
 
					if (!isOwner) return reply(mess.only.ownerB)
                 if (!ismod) return reply('kamu Belum Terdaftar sebagai User Modbot')
                reply('kamu udah ke daftar sebagai user Modbot')
                break
                    case 'modbotlist':
					teks = 'Esta é a lista de usuários premium :\n'
					for (let p of mod) {
						teks += `~> @${p.split('@')[0]}\n`
					}
					teks += `Total : ${mod.length}`
					dark.sendMess(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": mod}})
					break
					case 'addpremium': 
					dark.updatePresence(from, Presence.composing) 
 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Comando aceito adicionar usuário premium : ${premium}`)
					break
                 case 'calculadora':
				     if (args.length < 1) return reply(`[❗] Enviar pedidos *${prefixbotbot}calculadora [ Números ]*\nExemplo : ${prefixbotbot}calculadora 12*12\n*NOTA* :\n- Para multiplicação usando *\n- Para uso adicional +\n- Para redução do uso -\n- Para compartilhar usando /`)
				    mtk = `${body.slice(12)}`
				    anu = awat fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				    dark.sendMess(from, `*${anu.result.data}*`, text, {quoted: mek})
				    awat limitAdd(sender) 	
				    break 
				case 'porno':
				    if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdU0UmT8RigE3Hbr80gmigjb2AdnPJklcQ3A&usqp=CAU`)
					bufferer = awat getbufferer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/11/novinha-petuda-fotos-4.jpg`)
					bufferer = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWoYHFA_SDgUip6MtvimWRdub_lshAn5Edg&usqp=CAU`)
					bufferer = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvLmbqW9LeOCpXiGxgu3By4eQEmJM2Xp26Q&usqp=CAU`)
					bufferer = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnhmpQD1C1Dp7I2_kpi13gAsuoudOPPraog&usqp=CAU`)
					bufferer = awat getbufferer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/prima-novinha-pelada-6.jpg`)
					bufferer = awat getbufferer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-5.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'heheheheheh'})
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'heheheheheh'})
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'heheheheheh'})
					bufferer = awat getbufferer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-6.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'heheheheheh'})
					bufferer = awat getbufferer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-7.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'heheheheheh'})
					bufferer = awat getbufferer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-8.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'heheheheheh'})
					bufferer = awat getbufferer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-10.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'heheheheheh'})
					bufferer = awat getbufferer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-16.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'heheheheheh'})
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'heheheheheh'})
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'heheheheheh'})
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'heheheheheh'})
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'k'})
					break
				case 'belle2':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://i.pinimg.com/originals/24/5f/91/245f91208f9030724dbc8d1bede2e9ff.gif`)
					dark.sendMess(from, bufferer, sticker, {quoted: mek, caption: 'slc'})
					break
				case 'bot':
			     	memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://i.imgur.com/dPUVFF6.png`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: '*_Comandos basicos para bot:_*\n\n*pkg upgrade && pkg update*\n*pkg install git*\n*git clone (link da git)*\n*cd (repositório)*\n*bash install.sh*\n*npm start*\n\n*Dark Domina*'})
					break
				case 'belle3':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://1.bp.blogspot.com/-3K_b14RzHTA/XwTW7SQTPRI/AAAAAAAAPtY/UOaKURECbzwXfvASa3g6Pz0D_Ha73Dw4wCLcBGAsYHQ/s1600/boabronha_10.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'olha p isso mano, pqp '})
					break
				case 'akeno':
					meme = awat kagApi.memes()
					bufferer = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFAocqaur5ZX1DPN6ZGP8PJy2cNppas_gYA&usqp=CAU`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: '.......'})
					break
				case 'loli1':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://i.imgur.com/iphQUGi.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'hmm, então quer ver loli?'})
					break
				case 'hentai':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://i.imgur.com/8U9GwX4.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'Cara bate pra 2d 😂'})
					break
				case 'bomdia':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://i.imgur.com/7VL9cFf.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'Bom dia, vcs sao fodas ❤️'})
					break
				case 'boatarde':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://i.imgur.com/JaO3yoV.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'Boa tarde, rapeize 😎👍'})
					break
				case 'boanoite':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://i.imgur.com/yOFxSUR.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'Boa noite fml ❤️'})
					break
                case 'belle':                 
				 data = fs.readFileSync('./src/belle.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = awat getbufferer(randKey.result)
                sendImage(hasil, mek, '*Belle :V*')
				break
				case 'belle1':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7ot6RZPnXSJFFKVjPoeXHjTYyi6uk5W_mA&usqp=CAU`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: '👀️'})
					break
				case 'lofi':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9hZBPRo16fIhsIus3t1je2oAU23pQqBpfw&usqp=CAU`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: '️💆'})
					break
				case 'malkova':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbo5EcVSGj-IvEVznHIgMZ9vjFptZfvprtg&usqp=CAU`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: '️💆'})
					break
				case 'canal':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://imgur.com/gallery/xuTCBPO`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: '️*canal do dark:*\n\n https://bit.ly/3omUNCg'})
					break
				case 'nsfwloli1':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhzKetbU3pzhoZdaIo6qBklCzwvmCCOznbg&usqp=CAU`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'Rum️'})
					break
				case 'reislin':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlc2hMIJ4PjW5tIXltrKe6xeBoKPLKTZMnQ&usqp=CAU`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: '🤭'})
					break
				case 'boanoite':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://imgur.com/gallery/4HeRfuO`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'bom dia ❤️'})
					break
				case 'bomdia':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://imgur.com/gallery/zFvzl2S`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'bom dia ❤️'})
					break
				case 'termux':
					meme = awat kagApi.memes()
					bufferer = awat getbufferer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgADDq_64EbTI0NroP7CUoVeWmu1J06NnGHw&usqp=CAU`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'Terminal é um programa muito conhecido no mundo das distribuições Linux. Ele é uma ferramenta que facilita muito nas tarefas relacionadas ao sistema. Agora, já pensou em utilizar o Terminal Linux no seu Android? Esta é a proposta do Termux.\n\n*TERMUX: UTILIZE O TERMINAL NO SEU ANDROID*\n\nA utilização do Terminal aumenta muito a produtividade do usuário que já possui um determinado nível de conhecimento técnico.\nCom o terminal, é possível fazer diversas e diferentes coisas, desde navegar entre os diretórios e instalar programas, até descompactar arquivos e monitorar os processos.'})
					break
		    	case 'grupoinfo':
                    dark.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(mess.only.group)
                    ppUrl = awat dark.getProfilePicture(from) // leave empty to get your own
			        bufferer = awat getbufferer(ppUrl)
		            dark.sendMess(from, bufferer, image, {quoted: mek, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
                    break
				case 'meme':
					reply(mess.wait)
					anu = awat fetchJson(`https://api.fdci.se/rep.php?gambar=MEME BRASIL`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = awat getbufferer(ze)
					dark.sendMess(from, nye, image, { caption: 'cringe️', quoted: mek })
					awat limitAdd(sender) 	
					break
				case 'memeindododododododododododododododododo':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://imgur.com/${memeindodododododododododododododododo.hash}.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: '.......'})
					break
				case 'dono':
					memeindodododododododododododododododo = awat kagApi.memeindododododododododododododododododo()
					bufferer = awat getbufferer(`https://i.imgur.com/AnizaD7.jpg`)
					dark.sendMess(from, bufferer, image, {quoted: mek, caption: '*CRIADOR:* 𝐷𝐴𝑅𝐾⃖ ☔\n*YOUTUBE:* https://bit.ly/2MD43V2\n*WPP:* wa.me/+5522996215481\n*INSTA:* @th.darkys\n\n\nEspero que tenham gostado do bot 🐊🚩️'})
					break
				case 'setprefixbotbot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefixbotbot = args[0]
					reply(`O prefixbotboto foi alterado com sucesso para : ${prefixbotbot}`)
					break
				case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						bufferer = awat getbufferer(res.url)
						dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'lolizinha'})
					})
					break					
                                case 'lolih':
                                        gatauda = body.slice(6)
                                                            reply(mess.wait)
                                        anu = awat fetchJson(`https://dark-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        bufferer = awat getbufferer(anu.result)
                                        dark.sendMess(from, bufferer, image, {quoted: mek})
                                        awat limitAdd(sender)
                                        break
				case 'nsfwloli':
					if (!isNsfw) return reply('*COMANDO SO FUNCIONA NO PV AMIGO.*')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERRO* ❌')
						bufferer = awat getbufferer(res.url)
						dark.sendMess(from, bufferer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
				case 'pronomeneu':
					if (args.length < 1) return reply('Onde está o texto, hum?')
					anu = awat fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'yt2mp3':
					if (args.length < 1) return reply('Onde está o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = awat fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = awat getbufferer(anu.thumb)
					dark.sendMess(from, thumb, image, {quoted: mek, caption: teks})
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'tiktok':
					if (args.length < 1) return reply('Onde está o url, hum?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = awat fetchJson(`https://mhankbarbars.herokuapp.com/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferer = awat getbufferer(anu.result)
					dark.sendMess(from, bufferer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						if (args.length < 1) return dark.sendMess(from, 'Onde está o nome de usuário, hum', text, {quoted: mek})
						let { user, stats } = awat tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						bufferer = awat getbufferer(user.avatarLarger)
						dark.sendMess(from, bufferer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Possível nome de usuário inválido')
					}
					break
				case 'nulis':
				case 'tulis':
				  dark.updatePresence(from, Presence.composing)
			if (args.length < 1) return reply(`O que você deve escrever?`)
			reply(mess.wait)
					tulis = body.slice(7)
				  nama = tulis.split("/")[0];
					kelas = tulis.split("/")[1];
					isi = tulis.split("/")[2];
					nulis = awat getbufferer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					dark.sendMess(from, nulis, image, {quoted: mek})
					awat limitAdd(sender) 
					break  
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Que tipo é??')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Cadê o url, hum?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = awat fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = awat getbufferer(anu.result)
					dark.sendMess(from, buffer, image, {quoted: mek})
					break
				case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('Onde está o texto, hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = awat fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						dark.sendMess(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.pushb(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'marcar2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.pushb(mem.jid)
					}
					reply(teks)
					break
                 case 'marcar3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.pushb(mem.jid)
					}
					dark.sendMess(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'limpar':
					if (!isOwner) return reply('Quem é Você?, Voce não é meu dono 😂')
					anu = awat dark.chats.all()
					dark.setMaxListeners(25)
					for (let _ of anu) {
						dark.deleteChat(_.jid)
					}
					reply('Excluido todos os chats com sucesso :)')
					break
				case 'bc':
					if (!isOwner) return reply('Quem é Você, você não é meu dono 😂?')
					if (args.length < 1) return reply('.......')
					anu = awat dark.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedbImage) {
						const encmedia = isQuotedbImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = awat dark.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dark.sendMess(_.jid, buffer, image, {caption: `[ TRANSMIÇÃO DE AVISO ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão enviada com sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ TRANSMISSÃO DE AVISO ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão enviada com sucesso')
					}
					break
        case 'promover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						dark.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
						dark.groupMakeAdmin(from, mentioned)
					}
					break
				case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						dark.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
						dark.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país, man')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						dark.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
				case 'banir':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Alvo removido com sucesso :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						dark.groupRemove(from, mentioned)
					} else {
						mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						dark.groupRemove(from, mentioned)
					}
					break
				case 'admins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                                case 'linkgp':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        linkgc = awat dark.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break
                                case 'leave':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (isGroupAdmins || isOwner) {
                                            dark.groupLeave(from)
                                        } else {
                                            reply(mess.only.admin)
                                        }
                                        break
				case 'toimg':
					if (!isQuotedSticker) return reply('{ ❗ } *Marque a figurinha*')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = awat dark.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter adesivos em imagens ❌')
						bufferer = fs.readFileSync(ran)
						dark.sendMess(from, bufferer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					if (args.length < 1) return reply('Onde está o texto, hum?')
					teks = body.slice(5)
					anu = awat simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.pushb(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo 😗️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativado modo simi com sucesso neste grupo 😡️')
					} else {
						reply('1 para atitag, 0 para desatitag, lerdao vc em KKKKK')
					}
					break
				case 'bemvindo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Já esta ativo.')
						welkom.pushb(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso o recurso de boas-vindas neste grupo 😉️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desativou com sucesso o recurso de boas-vindas neste grupo 😡️')
					} else {
						reply('1 para atitag, 0 para desatitag, lerdão vc em KAKKKK')
					}
                                      break
				case 'clonar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupbAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = awat dark.getProfilePicture(id)
						bufferer = awat getbufferer(pp)
						dark.updateProfilePicture(botNumber, bufferer)
						mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
					}
					break
		        case 'setfoto2':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isadminbot) return reply('Quem é Você?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = awat dark.downloadAndSaveMediaMessage(mek)
                    awat dark.updateProfilePicture (from, media)
                    reply('Alterado com sucesso o ícone do Grupo')
                    break
                case 'bc2':
					if (!isadminbot) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = awat dark.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedbImage) {
						const encmedia = isQuotedbImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = awat dark.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dark.sendMess(_.jid, buffer, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *admin bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão enviada')
					}
					break
				case 'hidetag2':
					if (!isGroup) return reply(mess.only.group)
					if (!isadminbot) return reply('Quem é Você?')
					tag value = body.slice(9)
					tag group = awat dark.groupMetadata(from)
					tag member = group['participants']
					tag mem = []
					member.map( async adm => {
					mem.pushb(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					tag options = {
					text: value,
					contextInfo: { mentionedJid: mem {,
					quoted: mek
					}
					dark.sendMess(from, options, text)
					break
					//
				case 'setpp3':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isfrendsowner) return reply('Quem é Você?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = awat dark.downloadAndSaveMediaMessage(mek)
                    awat dark.updateProfilePicture (from, media)
                    reply('Alterado com sucesso o ícone do Grupo')
                    break
                case 'bc3':
					if (!isfrendsowner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = awat dark.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedbImage) {
						const encmedia = isQuotedbImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = awat dark.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dark.sendMess(_.jid, buffer, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *TRANSMISSÃO* ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão enviada')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedbImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedbImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = awat dark.downloadMediaMessage(encmedia)
						awat wait(media).then(res => {
							dark.sendMess(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Só uma foto mano')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = awat simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
