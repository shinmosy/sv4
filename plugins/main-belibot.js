let handler = async (m, { conn }) => {
const ftroli = {
    key : {
    remoteJid: '6285380166282-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'Get Bot', 
    orderTitle: `Wabot`,
    thumbnail: 'https://telegra.ph/file/8907374948af8cd672fdc.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
	conn.reply(m.chat, price1, ftroli)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)?$/i

module.exports = handler
