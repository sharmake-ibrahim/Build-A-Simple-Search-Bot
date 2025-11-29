
import config from "config"

const urls = process.env.URL_TO_SEARCH
  ? process.env.URL_TO_SEARCH.split(',')
  : config.get('urls');

const twilioAccount = process.env.TWILIO_ACCOUNT || config.get('twilio.account');
const twilioToken = process.env.TWILIO_TOKEN || config.get('twilio.token');
