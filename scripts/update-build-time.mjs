import { readFile, writeFile } from 'node:fs/promises'

const targetFile = new URL('../index.html', import.meta.url)

const parts = new Intl.DateTimeFormat('zh-CN', {
  timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
}).formatToParts(new Date())

const valueByType = Object.fromEntries(parts.map((part) => [part.type, part.value]))
const buildTime = [
  valueByType.year,
  valueByType.month,
  valueByType.day,
  valueByType.hour,
  valueByType.minute,
  valueByType.second,
].join('')

const metaTag = `<meta name="buildTime" content="${buildTime}" />`
const html = await readFile(targetFile, 'utf8')
const nextHtml = html.includes('name="buildTime"')
  ? html.replace(/<meta name="buildTime" content="\d{14}" \/>/, metaTag)
  : html.replace(/(<meta name="viewport"[^>]*>\n)/, `$1    ${metaTag}\n`)

await writeFile(targetFile, nextHtml)
console.log(`buildTime updated: ${buildTime}`)
