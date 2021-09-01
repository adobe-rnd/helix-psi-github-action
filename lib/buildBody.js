const PSI_HTML_URL = 'https://developers.google.com/speed/pagespeed/insights/?url=';

function getBadge ({ label, value, color }) {
    return `![${label}](https://img.shields.io/badge/${label}-${value}-${color}?style=for-the-badge)`;
};

function getAttempt (attemptNo) {
    return attemptNo ? `- Attempt ${attemptNo}` : '';
}

function buildBody(url, results, attemptNo) {
    return `
| Page Speed Insights Audit ${getAttempt(attemptNo)} |
| :--------- |
| ${getBadge(results.lh)} ${getBadge(results.fcp)} ${getBadge(results.lcp)} ${getBadge(results.tbt)} ${getBadge(results.cls)} |
| [View page](${url}) - [Run again](${PSI_HTML_URL}${encodeURI(url)}) |

`;
}

module.exports = buildBody;