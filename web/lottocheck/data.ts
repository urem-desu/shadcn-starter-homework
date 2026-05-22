export interface LottoType {
  id: string
  name: string
  short: string
  color: string
  swatch: string
  drawDay: string
  drawDayShort: string
  nums: number
  supps: number
  max: number
  jackpot: string
  nextDraw: string
  powerball?: boolean
}

export interface DrawResult {
  drawNo: string
  date: string
  numbers: number[]
  supps?: number[]
  powerball?: number
  divOne: string
}

export const LOTTO_TYPES: LottoType[] = [
  { id: "oz",         name: "Oz Lotto",        short: "OZ",    color: "var(--gold)",   swatch: "#fbbf24", drawDay: "Tuesday",   drawDayShort: "Tue",   nums: 7, supps: 3, max: 47, jackpot: "$30 million",    nextDraw: "Tue 26 May" },
  { id: "powerball",  name: "Powerball",        short: "PB",    color: "var(--red)",    swatch: "#f87171", drawDay: "Thursday",  drawDayShort: "Thu",   nums: 7, supps: 0, powerball: true, max: 35, jackpot: "$80 million",    nextDraw: "Thu 28 May" },
  { id: "saturday",   name: "Saturday Lotto",   short: "SAT",   color: "var(--sky)",    swatch: "#38bdf8", drawDay: "Saturday",  drawDayShort: "Sat",   nums: 6, supps: 2, max: 45, jackpot: "$5 million",     nextDraw: "Sat 23 May" },
  { id: "monday",     name: "Monday Lotto",     short: "MON",   color: "var(--violet)", swatch: "#a78bfa", drawDay: "Monday",    drawDayShort: "Mon",   nums: 6, supps: 2, max: 45, jackpot: "$1 million",     nextDraw: "Mon 25 May" },
  { id: "wednesday",  name: "Wednesday Lotto",  short: "WED",   color: "var(--mint)",   swatch: "#34d399", drawDay: "Wednesday", drawDayShort: "Wed",   nums: 6, supps: 2, max: 45, jackpot: "$1 million",     nextDraw: "Wed 27 May" },
  { id: "setforlife", name: "Set for Life",     short: "SFL",   color: "var(--violet)", swatch: "#a78bfa", drawDay: "Daily",     drawDayShort: "Daily", nums: 7, supps: 2, max: 44, jackpot: "$20,000 / month", nextDraw: "Tonight" },
]

export const LATEST_RESULTS: Record<string, DrawResult> = {
  oz:         { drawNo: "1582", date: "Tue 20 May 2026", numbers: [4,17,22,28,31,38,45], supps: [9,19,41],  divOne: "1 winner • $30,000,000" },
  powerball:  { drawNo: "1462", date: "Thu 15 May 2026", numbers: [2,11,19,26,27,29,33], powerball: 7,      divOne: "Jackpotted • $80,000,000" },
  saturday:   { drawNo: "4471", date: "Sat 17 May 2026", numbers: [3,12,18,23,35,41],    supps: [8,27],     divOne: "4 winners • $1,250,000 ea" },
  monday:     { drawNo: "4253", date: "Mon 19 May 2026", numbers: [6,14,20,25,33,44],    supps: [11,39],    divOne: "2 winners • $500,000 ea" },
  wednesday:  { drawNo: "4254", date: "Wed 21 May 2026", numbers: [1,9,16,24,30,42],     supps: [5,37],     divOne: "1 winner • $1,000,000" },
  setforlife: { drawNo: "2891", date: "Tonight • daily draw", numbers: [2,7,13,18,25,31,40], supps: [12,36], divOne: "Top prize • $20,000/mo for 20 yrs" },
}

export const BALL_COLORS = ["ball-gold", "ball-sky", "ball-mint", "ball-violet"] as const

export function ballClassFor(i: number): string {
  return BALL_COLORS[i % BALL_COLORS.length]
}
