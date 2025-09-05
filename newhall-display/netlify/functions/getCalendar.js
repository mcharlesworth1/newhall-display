// This is the Node.js code for our serverless function
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    // The calendar URL is safely stored here on the server-side
    const CALENDAR_URL = 'https://www.newhallschoolcalendar.co.uk/CalendarSync.ashx?Cal=New%20Hall%20School%20Calendar&ID=3282';

    try {
        const response = await fetch(CALENDAR_URL);
        const data = await response.text();

        return {
            statusCode: 200,
            headers: {
                // This header is crucial - it allows your webpage to access the data
                'Access-Control-Allow-Origin': '*', 
            },
            body: data,
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch calendar data.' }),
        };
    }
};