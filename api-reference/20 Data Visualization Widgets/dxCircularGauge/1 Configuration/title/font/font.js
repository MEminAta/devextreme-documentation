$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        rangeContainer: { backgroundColor: 'mediumseagreen' },
        scale: {
            startValue: 0,
            endValue: 1000
        },
        value: 750,
        title: {
            text: 'Fan Speed (in rpm)',
            font: {
                family: 'Zapf-Chancery, cursive',
                weight: 400,
                color: 'forestgreen',
                size: 22
            }
        }
    });
})