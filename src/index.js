/*
 * LightningChartJS example that showcases a simple XY line series.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, AxisTickStrategies, Themes, emptyFill } = lcjs

// Create a XY Chart.
const chart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        }).ChartXY({
    theme: (() => {
    const t = Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
    const smallView = Math.min(window.innerWidth, window.innerHeight) < 500
    if (!window.__lcjsDebugOverlay) {
        window.__lcjsDebugOverlay = document.createElement('div')
        window.__lcjsDebugOverlay.style.cssText = 'position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);color:#fff;padding:4px 8px;z-index:99999;font:12px monospace;pointer-events:none'
        if (document.body) document.body.appendChild(window.__lcjsDebugOverlay)
        setInterval(() => {
            if (!window.__lcjsDebugOverlay.parentNode && document.body) document.body.appendChild(window.__lcjsDebugOverlay)
            window.__lcjsDebugOverlay.textContent = window.innerWidth + 'x' + window.innerHeight + ' dpr=' + window.devicePixelRatio + ' small=' + (Math.min(window.innerWidth, window.innerHeight) < 500)
        }, 500)
    }
    return t && smallView ? lcjs.scaleTheme(t, 0.5) : t
})(),
})

chart.axisX.setTickStrategy(AxisTickStrategies.DateTime)

chart.setTitle('Diesel and Gasoline Price Comparison')

const diesel = [
    { x: new Date(2022, 0, 1).getTime(), y: 1.52 },
    { x: new Date(2022, 0, 2).getTime(), y: 1.52 },
    { x: new Date(2022, 0, 3).getTime(), y: 1.58 },
    { x: new Date(2022, 0, 4).getTime(), y: 1.52 },
    { x: new Date(2022, 0, 5).getTime(), y: 2.0 },
    { x: new Date(2022, 0, 6).getTime(), y: 2.0 },
    { x: new Date(2022, 0, 7).getTime(), y: 2.0 },
    { x: new Date(2022, 0, 8).getTime(), y: 2.0 },
    { x: new Date(2022, 0, 9).getTime(), y: 2.26 },
    { x: new Date(2022, 0, 10).getTime(), y: 1.9 },
    { x: new Date(2022, 0, 11).getTime(), y: 1.9 },
    { x: new Date(2022, 0, 12).getTime(), y: 1.9 },
    { x: new Date(2022, 0, 13).getTime(), y: 1.9 },
    { x: new Date(2022, 0, 14).getTime(), y: 1.6 },
    { x: new Date(2022, 0, 15).getTime(), y: 1.6 },
    { x: new Date(2022, 0, 16).getTime(), y: 1.6 },
    { x: new Date(2022, 0, 17).getTime(), y: 1.0 },
    { x: new Date(2022, 0, 18).getTime(), y: 1.0 },
    { x: new Date(2022, 0, 19).getTime(), y: 1.0 },
    { x: new Date(2022, 0, 20).getTime(), y: 1.74 },
    { x: new Date(2022, 0, 21).getTime(), y: 1.47 },
    { x: new Date(2022, 0, 22).getTime(), y: 1.47 },
    { x: new Date(2022, 0, 23).getTime(), y: 1.47 },
    { x: new Date(2022, 0, 24).getTime(), y: 1.74 },
    { x: new Date(2022, 0, 25).getTime(), y: 1.74 },
    { x: new Date(2022, 0, 26).getTime(), y: 1.74 },
    { x: new Date(2022, 0, 27).getTime(), y: 1.5 },
    { x: new Date(2022, 0, 28).getTime(), y: 1.5 },
    { x: new Date(2022, 0, 29).getTime(), y: 1.5 },
]

const gasoline = [
    { x: new Date(2022, 0, 1).getTime(), y: 1.35 },
    { x: new Date(2022, 0, 2).getTime(), y: 1.35 },
    { x: new Date(2022, 0, 3).getTime(), y: 1.35 },
    { x: new Date(2022, 0, 4).getTime(), y: 1.35 },
    { x: new Date(2022, 0, 5).getTime(), y: 1.9 },
    { x: new Date(2022, 0, 6).getTime(), y: 1.9 },
    { x: new Date(2022, 0, 7).getTime(), y: 1.9 },
    { x: new Date(2022, 0, 8).getTime(), y: 1.92 },
    { x: new Date(2022, 0, 9).getTime(), y: 1.5 },
    { x: new Date(2022, 0, 10).getTime(), y: 1.5 },
    { x: new Date(2022, 0, 11).getTime(), y: 1.3 },
    { x: new Date(2022, 0, 12).getTime(), y: 1.3 },
    { x: new Date(2022, 0, 13).getTime(), y: 1.3 },
    { x: new Date(2022, 0, 14).getTime(), y: 1.3 },
    { x: new Date(2022, 0, 15).getTime(), y: 1.3 },
    { x: new Date(2022, 0, 16).getTime(), y: 1.32 },
    { x: new Date(2022, 0, 17).getTime(), y: 1.4 },
    { x: new Date(2022, 0, 18).getTime(), y: 1.44 },
    { x: new Date(2022, 0, 19).getTime(), y: 1.02 },
    { x: new Date(2022, 0, 20).getTime(), y: 1.02 },
    { x: new Date(2022, 0, 21).getTime(), y: 1.02 },
    { x: new Date(2022, 0, 22).getTime(), y: 1.02 },
    { x: new Date(2022, 0, 23).getTime(), y: 1.02 },
    { x: new Date(2022, 0, 24).getTime(), y: 1.02 },
    { x: new Date(2022, 0, 25).getTime(), y: 1.02 },
    { x: new Date(2022, 0, 26).getTime(), y: 1.02 },
    { x: new Date(2022, 0, 27).getTime(), y: 1.3 },
    { x: new Date(2022, 0, 28).getTime(), y: 1.3 },
    { x: new Date(2022, 0, 29).getTime(), y: 1.3 },
]

// Add two line series.
const lineSeries = chart.addLineSeries(
        {automaticColorIndex: 0},
).setName('Diesel')
const lineSeries2 = chart.addLineSeries(
    {automaticColorIndex: 4},
).setName('Gasoline')

// Add the points to each Series
lineSeries2.appendJSON(diesel)
lineSeries.appendJSON(gasoline)

// Setup view nicely.
chart.axisY.setTitle('Price').setUnits('$/litre').setInterval({ start: 0, end: 3, stopAxisAfter: true })
