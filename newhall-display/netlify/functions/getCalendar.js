import fetch from 'node-fetch';

export const handler = async (event, context) => {
    const CALENDAR_URL = 'https://www.newhallschoolcalendar.co.uk/CalendarSync.ashx?Cal=New%20Hall%20School%20Calendar&ID=3282';

    try {
        const response = await fetch(CALENDAR_URL);
        const data = await response.text();
        return {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: data,
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
