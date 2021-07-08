const express = require('express')
const { google } = require('googleapis')
const { OAuth2 } = google.auth

const OAuth2Client = new OAuth2("1028437729895-6sp59gor974ilgoovrjeepip6t27u4p9.apps.googleusercontent.com","uXkQX7jq3U0sPbsKCnBiJXUd")
OAuth2Client.setCredentials({
    refresh_token:  "1//04JciBMnH_7XJCgYIARAAGAQSNwF-L9IrmN6ullDSvVYgD-dL8NQDA4KLt-D5u3niFtOOHoVxtnhWwwFNAWS6ERGAPMZ_cXDUxZw"
})

const express = require('express')
const app = express()
const port = 3000

const calendar = google.calendar({version: "v3",auth: OAuth2Client})

const startDate = new Date('18 June 2021 12:00').toISOString()
const endDate = new Date('18 June 2021 13:00').toISOString()

  var object = {
    "summary": "cc ca marche",
    "description": "ah bah oe",
    'end': {
        'dateTime': endDate,//end,
        'timeZone': "Europe/Paris"
    },
    'start': {
        'dateTime': startDate,//start,
        'timeZone': "Europe/Paris"
    }
};

var calendarObject = {
    'calendarId': "primary",
    'resource': object
};


calendar.freebusy.query({
    resource: {
        "timeMin": startDate,
        "timeMax": endDate,
        timeZone: "Europe/Paris",
        items: [{id: "primary"}]
    }
},
    async (err, res) => {
        if(err) return (console.error('freebusyerror: ',err))
        const arr = await res.data.calendars.primary.busy
        if(arr.length == 0){
            calendar.events.insert(calendarObject,calendarError => {if(calendarError) return console.error(calendarError)})
        }
        else{console.log("im busy")}
    }

)


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

//https://fullcalendar.io/docs/getting-started
 //TODO HANDLE ERROR FRONT
//https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
//https://lukeboyle.com/blog-posts/2016/04/google-calendar-api---color-id
