<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const tabs = ['赛程', '积分榜', '晋级图', '射手榜']
const activeTab = ref(0)
const activeDate = ref(0)
const originalFontSize = document.documentElement.style.fontSize
const downloadUrl = 'https://www.txty888.app:30111/?i_code=7450040'

function setRemUnit() {
  const html = document.documentElement
  const width = html.clientWidth
  const isLandscape = window.matchMedia('(orientation: landscape)').matches

  if (width > 1000 || isLandscape) {
    html.style.fontSize = '40px'
  }
  else {
    html.style.fontSize = `${width / 10}px`
  }
}

onMounted(() => {
  setRemUnit()
  window.addEventListener('resize', setRemUnit)
})

const weekLabels = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

const flagMap = {
  墨西哥: '🇲🇽',
  南非: '🇿🇦',
  韩国: '🇰🇷',
  捷克: '🇨🇿',
  加拿大: '🇨🇦',
  波黑: '🇧🇦',
  美国: '🇺🇸',
  巴拉圭: '🇵🇾',
  卡塔尔: '🇶🇦',
  瑞士: '🇨🇭',
  巴西: '🇧🇷',
  摩洛哥: '🇲🇦',
  海地: '🇭🇹',
  苏格兰: '/worldcup/flags/scotland.svg',
  澳大利亚: '🇦🇺',
  土耳其: '🇹🇷',
  德国: '🇩🇪',
  库拉索: '🇨🇼',
  荷兰: '🇳🇱',
  日本: '🇯🇵',
  科特迪瓦: '🇨🇮',
  厄瓜多尔: '🇪🇨',
  瑞典: '🇸🇪',
  突尼斯: '🇹🇳',
  西班牙: '🇪🇸',
  佛得角: '🇨🇻',
  比利时: '🇧🇪',
  埃及: '🇪🇬',
  沙特: '🇸🇦',
  乌拉圭: '🇺🇾',
  伊朗: '🇮🇷',
  新西兰: '🇳🇿',
  阿根廷: '🇦🇷',
  法国: '🇫🇷',
  塞内加尔: '🇸🇳',
  伊拉克: '🇮🇶',
  挪威: '🇳🇴',
  约旦: '🇯🇴',
  阿尔及利亚: '🇩🇿',
  奥地利: '🇦🇹',
  葡萄牙: '🇵🇹',
  '刚果（金）': '🇨🇩',
  英格兰: '/worldcup/flags/england.svg',
  克罗地亚: '🇭🇷',
  加纳: '🇬🇭',
  巴拿马: '🇵🇦',
  乌兹别克斯坦: '🇺🇿',
  哥伦比亚: '🇨🇴',
}

const matchList = [
  ['2026-06-12', '03:00', '墨西哥', '南非'],
  ['2026-06-12', '10:00', '韩国', '捷克'],
  ['2026-06-13', '03:00', '加拿大', '波黑'],
  ['2026-06-13', '09:00', '美国', '巴拉圭'],
  ['2026-06-14', '03:00', '卡塔尔', '瑞士'],
  ['2026-06-14', '06:00', '巴西', '摩洛哥'],
  ['2026-06-14', '09:00', '海地', '苏格兰'],
  ['2026-06-14', '12:00', '澳大利亚', '土耳其'],
  ['2026-06-15', '01:00', '德国', '库拉索'],
  ['2026-06-15', '04:00', '荷兰', '日本'],
  ['2026-06-15', '07:00', '科特迪瓦', '厄瓜多尔'],
  ['2026-06-15', '10:00', '瑞典', '突尼斯'],
  ['2026-06-16', '00:00', '西班牙', '佛得角'],
  ['2026-06-16', '03:00', '比利时', '埃及'],
  ['2026-06-16', '06:00', '沙特', '乌拉圭'],
  ['2026-06-16', '09:00', '伊朗', '新西兰'],
  ['2026-06-17', '03:00', '法国', '塞内加尔'],
  ['2026-06-17', '06:00', '伊拉克', '挪威'],
  ['2026-06-17', '09:00', '阿根廷', '阿尔及利亚'],
  ['2026-06-17', '12:00', '奥地利', '约旦'],
  ['2026-06-18', '01:00', '葡萄牙', '刚果（金）'],
  ['2026-06-18', '04:00', '英格兰', '克罗地亚'],
  ['2026-06-18', '07:00', '加纳', '巴拿马'],
  ['2026-06-18', '10:00', '乌兹别克斯坦', '哥伦比亚'],
  ['2026-06-19', '00:00', '捷克', '南非'],
  ['2026-06-19', '03:00', '瑞士', '波黑'],
  ['2026-06-19', '06:00', '加拿大', '卡塔尔'],
  ['2026-06-19', '09:00', '墨西哥', '韩国'],
  ['2026-06-20', '03:00', '美国', '澳大利亚'],
  ['2026-06-20', '06:00', '苏格兰', '摩洛哥'],
  ['2026-06-20', '08:30', '巴西', '海地'],
  ['2026-06-20', '11:00', '土耳其', '巴拉圭'],
  ['2026-06-21', '01:00', '荷兰', '瑞典'],
  ['2026-06-21', '04:00', '德国', '科特迪瓦'],
  ['2026-06-21', '08:00', '厄瓜多尔', '库拉索'],
  ['2026-06-21', '12:00', '突尼斯', '日本'],
  ['2026-06-22', '00:00', '西班牙', '沙特'],
  ['2026-06-22', '03:00', '比利时', '伊朗'],
  ['2026-06-22', '06:00', '乌拉圭', '佛得角'],
  ['2026-06-22', '09:00', '新西兰', '埃及'],
  ['2026-06-23', '01:00', '阿根廷', '奥地利'],
  ['2026-06-23', '05:00', '法国', '伊拉克'],
  ['2026-06-23', '08:00', '挪威', '塞内加尔'],
  ['2026-06-23', '11:00', '约旦', '阿尔及利亚'],
  ['2026-06-24', '01:00', '葡萄牙', '乌兹别克斯坦'],
  ['2026-06-24', '04:00', '英格兰', '加纳'],
  ['2026-06-24', '07:00', '巴拿马', '克罗地亚'],
  ['2026-06-24', '10:00', '哥伦比亚', '刚果（金）'],
  ['2026-06-25', '03:00', '瑞士', '加拿大'],
  ['2026-06-25', '03:00', '波黑', '卡塔尔'],
  ['2026-06-25', '06:00', '摩洛哥', '海地'],
  ['2026-06-25', '06:00', '苏格兰', '巴西'],
  ['2026-06-25', '09:00', '南非', '韩国'],
  ['2026-06-25', '09:00', '捷克', '墨西哥'],
  ['2026-06-26', '04:00', '库拉索', '科特迪瓦'],
  ['2026-06-26', '04:00', '厄瓜多尔', '德国'],
  ['2026-06-26', '07:00', '突尼斯', '荷兰'],
  ['2026-06-26', '07:00', '日本', '瑞典'],
  ['2026-06-26', '10:00', '土耳其', '美国'],
  ['2026-06-26', '10:00', '巴拉圭', '澳大利亚'],
  ['2026-06-27', '03:00', '挪威', '法国'],
  ['2026-06-27', '03:00', '塞内加尔', '伊拉克'],
  ['2026-06-27', '08:00', '佛得角', '沙特'],
  ['2026-06-27', '08:00', '乌拉圭', '西班牙'],
  ['2026-06-27', '11:00', '新西兰', '比利时'],
  ['2026-06-27', '11:00', '埃及', '伊朗'],
  ['2026-06-28', '05:00', '巴拿马', '英格兰'],
  ['2026-06-28', '05:00', '克罗地亚', '加纳'],
  ['2026-06-28', '07:30', '哥伦比亚', '葡萄牙'],
  ['2026-06-28', '07:30', '刚果（金）', '乌兹别克斯坦'],
  ['2026-06-28', '10:00', '阿尔及利亚', '奥地利'],
  ['2026-06-28', '10:00', '约旦', '阿根廷'],
].map(([date, time, home, away]) => ({
  date,
  time,
  stage: '小组赛',
  status: '',
  home,
  homeFlag: flagMap[home],
  away,
  awayFlag: flagMap[away],
  score: '0 - 0',
}))

const standings = [
  {
    group: 'A组',
    teams: [
      { rank: 1, name: '墨西哥', flag: '🇲🇽', played: 0, record: '0/0/0', goals: '0/0', points: 0 },
      { rank: 2, name: '南非', flag: '🇿🇦', played: 0, record: '0/0/0', goals: '0/0', points: 0 },
      { rank: 3, name: '韩国', flag: '🇰🇷', played: 0, record: '0/0/0', goals: '0/0', points: 0 },
      { rank: 4, name: '捷克', flag: '🇨🇿', played: 0, record: '0/0/0', goals: '0/0', points: 0 },
    ],
  },
]

const bracketRounds = [
  { title: '1/8决赛', items: ['A组第1', 'B组第2', 'C组第1', 'D组第2'] },
  { title: '1/4决赛', items: ['胜者1', '胜者2'] },
  { title: '半决赛', items: ['胜者3', '胜者4'] },
  { title: '冠军赛', items: ['7月20日'] },
]

const scorers = [
  { rank: 1, player: '贝林厄姆', team: '英格兰', goals: '0(0)' },
  { rank: 2, player: '姆巴佩', team: '法国', goals: '0(0)' },
  { rank: 3, player: '梅西', team: '阿根廷', goals: '0(0)' },
  { rank: 4, player: '维尼修斯', team: '巴西', goals: '0(0)' },
]

const nowTimestamp = ref(Date.now())
const nowTimer = window.setInterval(() => {
  nowTimestamp.value = Date.now()
}, 60000)

onUnmounted(() => {
  window.clearInterval(nowTimer)
  window.removeEventListener('resize', setRemUnit)
  document.documentElement.style.fontSize = originalFontSize
})

function matchTimestamp(match) {
  return new Date(`${match.date}T${match.time}:00+08:00`).getTime()
}

function dateMeta(date) {
  const d = new Date(`${date}T00:00:00+08:00`)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')

  return {
    date,
    week: weekLabels[d.getDay()],
    label: `${d.getMonth() + 1}月${d.getDate()}日`,
    full: `${d.getFullYear()}年${month}月${day}日`,
  }
}

const upcomingMatches = computed(() => matchList.filter((match) => matchTimestamp(match) >= nowTimestamp.value))

const visibleDates = computed(() => {
  const seen = new Set()

  return upcomingMatches.value.reduce((dates, match) => {
    if (!seen.has(match.date)) {
      seen.add(match.date)
      dates.push(dateMeta(match.date))
    }

    return dates
  }, [])
})

const selectedDate = computed(() => visibleDates.value[activeDate.value] || visibleDates.value[0])

const visibleSchedule = computed(() => {
  if (!selectedDate.value) {
    return []
  }

  return upcomingMatches.value.filter((match) => match.date === selectedDate.value.date)
})

function setActiveDate(index) {
  activeDate.value = index
}

function openDownloadPage() {
  window.open(downloadUrl, '_blank', 'noopener,noreferrer')
}

function handleTabClick(index) {
  if (index === 0) {
    activeTab.value = index
    return
  }

  openDownloadPage()
}
</script>

<template>
  <main class="world-cup-page">
    <section class="hero">
      <div class="title-block" aria-label="2026美加墨世界杯">
        <h1>2026美加墨世界杯</h1>
        <p>一三国同燃，巅峰开赛一</p>
      </div>
    </section>

    <nav class="tabbar" aria-label="世界杯导航">
      <button
        v-for="(tab, index) in tabs"
        :key="tab"
        type="button"
        :class="{ active: activeTab === index }"
        @click="handleTabClick(index)"
      >
        {{ tab }}
      </button>
    </nav>

    <section v-if="activeTab === 0" class="schedule-panel">
      <div class="date-nav">
        <button
          v-for="(date, index) in visibleDates"
          :key="date.full"
          type="button"
          :class="{ active: selectedDate?.date === date.date }"
          @click="setActiveDate(index)"
        >
          <span>{{ date.week }}</span>
          <strong>{{ date.label }}</strong>
        </button>
      </div>

      <h2 v-if="selectedDate" class="current-date">{{ selectedDate.full }}</h2>

      <div class="match-list">
        <article v-for="match in visibleSchedule" :key="`${match.date}-${match.time}-${match.home}`" class="match-card">
          <header>
            <span>{{ match.time }} {{ match.stage }}</span>
            <span>{{ match.status }}</span>
          </header>
          <div class="match-body">
            <div class="team home">
              <span class="team-name">{{ match.home }}</span>
              <img v-if="match.homeFlag.startsWith('/')" class="flag flag-image" :src="match.homeFlag" :alt="match.home">
              <span v-else class="flag">{{ match.homeFlag }}</span>
            </div>
            <strong class="score">{{ match.score }}</strong>
            <div class="team away">
              <img v-if="match.awayFlag.startsWith('/')" class="flag flag-image" :src="match.awayFlag" :alt="match.away">
              <span v-else class="flag">{{ match.awayFlag }}</span>
              <span class="team-name">{{ match.away }}</span>
            </div>
            <button type="button" class="bet-button" @click="openDownloadPage">立即投注</button>
          </div>
        </article>

        <div v-if="!visibleSchedule.length" class="empty-schedule">暂无赛程</div>
      </div>
    </section>

    <section v-else-if="activeTab === 1" class="data-panel">
      <article v-for="group in standings" :key="group.group" class="standings-card">
        <header>
          <b>{{ group.group }}</b>
          <span>场次</span>
          <span>胜/平/负</span>
          <span>进/失</span>
          <span>积分</span>
        </header>
        <div v-for="team in group.teams" :key="team.name" class="standing-row">
          <b>{{ team.rank }} {{ team.flag }} {{ team.name }}</b>
          <span>{{ team.played }}</span>
          <span>{{ team.record }}</span>
          <span>{{ team.goals }}</span>
          <span>{{ team.points }}</span>
        </div>
      </article>
    </section>

    <section v-else-if="activeTab === 2" class="data-panel bracket-panel">
      <article v-for="round in bracketRounds" :key="round.title" class="bracket-card">
        <h2>{{ round.title }}</h2>
        <div v-for="item in round.items" :key="item" class="bracket-slot">
          {{ item }}
        </div>
      </article>
    </section>

    <section v-else class="data-panel">
      <article class="scorer-card">
        <header>
          <span>排名</span>
          <span>球员</span>
          <span>球队</span>
          <span>进球/点球</span>
        </header>
        <div v-for="item in scorers" :key="item.player" class="scorer-row">
          <b>{{ item.rank }}</b>
          <span>{{ item.player }}</span>
          <span>{{ item.team }}</span>
          <strong>{{ item.goals }}</strong>
        </div>
      </article>
    </section>
  </main>
</template>

<style src="../styles/worldCup.css"></style>
