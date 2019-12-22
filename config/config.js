/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: 'localhost', // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "", "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out, is "localhost"
  port: 8080,
  ipWhitelist: ['127.0.0.1', '::ffff:127.0.0.1', '::1'], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: 'en',
  timeFormat: 24,
  units: 'metric',

  modules: [
    {
      module: 'alert',
      classes: 'default everyone'
    },
    {
      module: 'updatenotification',
      position: 'top_bar',
      classes: 'default everyone'
    },
    {
      module: 'clock',
      position: 'top_left',
      classes: 'default everyone'
    },
    {
      module: 'calendar',
      header: 'US Holidays',
      position: 'top_left',
      config: {
        calendars: [
          {
            symbol: 'calendar-check',
            url:
              'webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics'
          }
        ]
      },
      classes: 'hakan'
    },
    {
      module: 'compliments',
      position: 'lower_third',
      classes: 'default everyone'
    },
    {
      module: 'currentweather',
      position: 'top_right',
      config: {
        location: 'New York',
        locationID: '', //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        appid: 'YOUR_OPENWEATHER_API_KEY'
      },
      classes: 'default everyone'
    },
    {
      module: 'weatherforecast',
      position: 'top_right',
      header: 'Weather Forecast',
      config: {
        location: 'New York',
        locationID: '5128581', //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        appid: 'YOUR_OPENWEATHER_API_KEY'
      },
      classes: 'default everyone'
    },
    {
      module: 'newsfeed',
      position: 'bottom_bar',
      config: {
        feeds: [
          {
            title: 'New York Times',
            url: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
          }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
      },
      classes: 'default everyone'
    },
    {
      module: 'MMM-toothbrush',
      position: 'bottom_left',
      classes: 'default everyone'
    },
    {
      module: 'MMM-Face-Reco-DNN',
      config: {
        // Logout 15 seconds after user was not detecte anymore, if they will be detected between this 15 Seconds, they delay will start again
        logoutDelay: 15000,
        // How many time the recognition starts, with a RasPi 3+ it would be good every 2 seconds
        checkInterval: 2000,
        // Module set used for strangers and if no user is detected
        defaultClass: 'default',
        // Set of modules which should be shown for every user
        everyoneClass: 'everyone',
        // XML to recognize with haarcascae
        cascade:
          'modules/MMM-Face-Reco-DNN/tools/haarcascade_frontalface_default.xml',
        // Pre encoded pickle with the faces
        encodings: 'modules/MMM-Face-Reco-DNN/tools/encodings.pickle',
        // You wanna use pi camera or usb / builtin (1 = raspi camera, 0 = other camera)
        usePiCamera: 1,
        // Method of face detection (dnn = deep neural network, haar = haarcascade)
        method: 'dnn',
        // Which face detection model to use. "hog" is less accurate but faster on CPUs. "cnn" is a more accurate deep-learning model which is GPU/CUDA accelerated (if available).
        detectionMethod: 'hog',
        // How fast in ms should the modules hide and show (face effect)
        animationSpeed: 0,
        // Path to Python to run the face recognition (null / '' means default path)
        pythonPath: null,
        // Should shown welcome message over alert module from MagicMirror
        welcomeMessage: true,
        // Save some pictures from recognized people, if unknown we save it in folder "unknown"
        // So you can extend your dataset and retrain it afterwards for better recognitions
        extendDataset: false,
        // if extenDataset is set, you need to set the full path of the dataset
        dataset: 'modules/MMM-Face-Reco-DNN/dataset/'
      }
    }
  ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {
  module.exports = config;
}
