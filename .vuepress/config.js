const githubSettings = {
    docsRepo: 'axibase/charts',
    editLinks: true,
    editLinkText: 'Have a suggestion?'
}

const widgetLinks = [
    { text: 'Time Chart', link: '/widgets/time-chart/' },
    { text: 'Bar', link: '/widgets/bar-chart/' },
    { text: 'Pie', link: '/widgets/pie-chart/' },
    { text: 'Gauge', link: '/widgets/gauge-chart/' },
    { text: 'Box', link: '/widgets/box-chart/' },
    { text: 'Calendar', link: '/widgets/calendar-chart/' },
    { text: 'Histogram', link: '/widgets/histogram/' },
    { text: 'Treemap', link: '/widgets/treemap/' },
    { text: 'Text Widget', link: '/widgets/text-widget/' },
    { text: 'Series Table', link: '/widgets/series-table/' },
    { text: 'Property Table', link: '/widgets/property-table/' },
    { text: 'Alert Table', link: '/widgets/alert-table/' },
    { text: 'Graph', link: '/widgets/graph/' },
    { text: 'Page Widget', link: '/widgets/page-widget/' },
    { },
    { text: 'Common Settings', link: '/widgets/shared/' },
    { text: 'Table Settings', link: '/widgets/shared-table/' },
];

const widgetsSideBar = widgetLinks
    .filter(item => "link" in item)
    .map(({text, link}) => [link.slice(9), text]);

const syntaxLinks = [
    { text: 'Settings Reference', link: `/syntax/reference.md` },
    { text: 'Alert Expressions', link: '/syntax/alert-expression.md' },
    { text: 'Baselines', link: '/configuration/baselines.md' },
    { text: 'Computed Metrics', link: '/configuration/computed-metrics.md' },
    { text: 'Control Structures', link: '/syntax/control-structures.md' },
    { text: 'Display Filters', link: '/configuration/display-filters.md' },
    { text: 'Drop-down Lists', link: '/configuration/drop-down-lists.md' },
    { text: 'Extended Aggregators', link: '/syntax/extended-aggregators.md' },
    { text: 'Functions', link: '/syntax/functions.md' },  
    { text: 'Inheritance', link: '/configuration/inheritance.md' },
    { text: 'Label Formatting', link: '/syntax/label-formatting.md' },
    { text: 'Linking', link: '/syntax/linking.md' },
    { text: 'Meta Data', link: '/configuration/meta-data.md' },
    { text: 'Summary Portals', link: '/configuration/summary-portals.md' },
    { text: 'Thresholds and SLA', link: '/syntax/thresholds.md' },
    { text: 'User-Defined Functions', link: '/syntax/udf.md' },
    { text: 'Wildcards', link: '/syntax/wildcards.md' },
]


const syntaxSideBar = syntaxLinks
    .filter(item => "link" in item)
    .map(({text, link}) => [".." + link, text]);

console.log(syntaxSideBar)

const topNavMenu = [
    { text: 'Overview', link: '/', highlighted: true },
    { text: 'Widgets', items: widgetLinks },
    { text: 'Syntax', items: syntaxLinks },
    { text: 'Resources', items: [
        { text: 'VSCode Plugin', link: 'https://marketplace.visualstudio.com/items?itemName=Axibase.axibasecharts-syntax' },
        { text: 'Sample Apps', link: 'https://apps.axibase.com/' },
        { text: 'ATSD Portals', link: 'https://axibase.com/docs/atsd/portals/' },
        { text: 'ATSD API', link: 'https://axibase.com/docs/atsd/api/data/' },
        { text: 'Series Query', link: 'https://axibase.com/docs/atsd/api/data/series/query.html' },
        { text: 'External Frameworks', link: '/external/' },
        { text: 'Troubleshooting', link: '/troubleshooting/'},
    ]},
]


module.exports = {
    base: '/docs/charts/',
    title: 'Axibase Charts',
    titleNote: 'Charts',
    description: "User manual for Axibase® Charts",
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
    ],
    staticFilesExtensionsTest: /(?:tcollector|\.(?:pdf|xlsx?|xml|txt|csv|str|java|json|sql|sps|yxmd|htm|prpt|do|tdc|jsonld|ktr|service|sh|ya?ml|config))$/,
    themeConfig: {
        nav: topNavMenu,
        logo: '/images/axibase_logo_site.png',
        algolia: {
            appId: 'BH4D9OD16A',
            apiKey: 'd46fb51356528c83c9c1c427e6d7206d',
            indexName: 'axibase',
            algoliaOptions: {
                facetFilters: ["tags:charts"]
            }
        },
        sidebarDepth: 1,
        sidebar: {
            '/widgets/': widgetsSideBar,
            '/configuration/': syntaxSideBar,
            '/external/': [
                ['', 'Overview'],
                ['highcharts_widget.md', 'Create External Widget'],
                ['amcharts.md', 'amCharts'],
                ['chart.js.md', 'Chart.js'],
                ['fusioncharts.md', 'FusionCharts'],
                ['google_charts.md', ' Google Charts'],
                ['heatmap.md', 'Heatmap'],
                ['highcharts.md', 'Highcharts'],
                ['n3-charts.md', 'n3-charts'],
            ],
            '/syntax/': syntaxSideBar,
            '/troubleshooting/': [
                'recording_profiles.md',
                'capture_response.md',
                'capture_HAR.md',
            ],
            // '/': [],
        },
        searchMaxSuggestions: 10,

        ...githubSettings
    },
    markdown: {
        slugify
    }
}

// loadFromEnv("ga", "GA_API_KEY");
// loadFromEnv("sc", "STATCOUNTER_ID");
// loadFromEnv("scSec", "STATCOUNTER_SEC");

function loadFromEnv(setting, varName) {
    if (!(setting in module.exports)) {
        let value = require('process').env[varName];
        if (value) {
            module.exports[setting] = value;
        }
    }
}

const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-+=[\]{}|\\;:"'<>,.?/]+/g

function slugify (str) {
  return str
    // Remove control characters
    .replace(rControl, '')
    // Replace special characters
    .replace(rSpecial, '-')
    // Remove continous separators
    .replace(/\-{2,}/g, '-')
    // Remove prefixing and trailing separtors
    .replace(/^\-+|\-+$/g, '')
    // ensure it doesn't start with a number (#121)
    .replace(/^(\d)/, '_$1')
    // lowercase
    .toLowerCase()
}
