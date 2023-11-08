
$('.slider').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    variableWidth: true,
    variableHeight: true,
});

// calendario
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        locale: 'es',
        events: [
            {
                title: 'Curso 1 Javascript',
                start: '2023-12-16',
                end: '2023-12-30'
            },
            {
                title: 'Curso 2',
                start: '2023-06-20',
                end: '2023-07-05'
            }
        ]
    });

    calendar.render();
});