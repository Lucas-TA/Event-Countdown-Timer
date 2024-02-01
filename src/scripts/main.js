AOS.init();

const eventDate = new Date("Sep 12, 2024 19:00:00");
const eventTimeStamp = eventDate.getTime();

const hours = setInterval( () => {

    const now = new Date();
    const actualTimeStamp = now.getTime();

    if (eventDate < now) {
        document.getElementById('eventTimeStampMessage').innerHTML = `Evento já concluído. Prazo de inscrição encerrado.`;

        document.getElementById('buttonGetTicket').classList.remove('--primary');
        document.getElementById('buttonGetTicket').classList.add('disabled');
    } else {
        const generalTimeStamp = eventTimeStamp - actualTimeStamp;

        const oneDay = (1000 * 60 * 60 * 24)
        const oneHour = (1000 * 60 * 60);
        const oneMinute = (1000 * 60);
        const oneSecond = (1000)

        const daysToEvent = Math.floor(generalTimeStamp / oneDay);
        const hoursToEvent = Math.floor((generalTimeStamp % oneDay) / oneHour);
        const minutesToEvent = Math.floor((generalTimeStamp % oneHour) / oneMinute);
        const secondsToEvent = Math.floor((generalTimeStamp % oneMinute) / oneSecond);

        document.getElementById('eventTimeStampMessage').innerHTML = `O maior evento de tecnologia do Brasil começa em ${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;
        document.getElementById('buttonGetTicket').classList.remove('disabled');
    }
}, 1000);