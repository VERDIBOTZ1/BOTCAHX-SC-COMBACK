let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Bulan* :      *Rp 15000*
╠➥ *Permanen* : *Rp 25000*
╠➥ *Premium* :   *Rp 10000*
╠➥ *Sc Bot* :        *Beli*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Gopay, Dana, Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 
╠═ Scrip by Tio x verdi_zZ
╠═〘 ${namabot} 〙 ═`.trim(), footer, 'Dana', '#viadana', 'OVO', '#viaovo', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler
