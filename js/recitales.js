
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
                title: 'Fito Paez - Rosario Ex-Rural',
                start: '2023-12-02',
                end: '2023-12-04'
            },
            {
                title: 'Divididos - Tandil',
                start: '2023-11-25',
            },
            {
                title: 'Abel Pintos - Estadio Velez Sarsfield',
                start: '2023-11-17',
                end: '2023-11-19',
            },
            {
                title: 'Árbol - Club Museum',
                start: '2023-12-16',
            },
            {
                title: 'Karol G - Estadio Velez Sarsfield',
                start: '2024-04-26',
                end: '2024-04-28',
            },
            {
                title: 'La Konga - Quality Arena',
                start: '2023-12-07',
            },
        ]
    });

    calendar.render();
});