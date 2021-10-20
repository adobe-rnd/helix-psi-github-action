const auditMetrics = {
    lh: { 'green': 90, 'orange': 50, weight: null },
    fcp: { 'green': 1.8, 'orange': 3, weight: 10 },
    si: { 'green': 3.4, 'orange': 5.8, weight: 10 },
    lcp: { 'green': 2.5, 'orange': 4.0, weight: 25 },
    tti: { 'green': 3.8, 'orange': 7.3, weight: 10 },
    tbt: { 'green': 200, 'orange': 600, weight: 30 },
    cls: { 'green': 0.1, 'orange': 0.25, weight: 15 },
}

function compareValues(valueOne, valueTwo, lessThan) {
    return lessThan ? valueOne <= valueTwo : valueOne >= valueTwo;
};

function getColor(key, value, lessThan = false) {
    const metrics = auditMetrics[key];
    if (compareValues(metrics.green, value, lessThan)) {
        return 'green';
    } else if (compareValues(metrics.orange, value, lessThan)) {
        return 'orange';
    }
    return 'red';
}

module.exports = getColor;