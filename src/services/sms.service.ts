import axios from 'axios';

export const sentTwilioSms = async (to: string, message: string) => {
const myHeaders = {
  Authorization: "App 62135ca03a0d4cb5692db874178209e7-7eed1b23-1a21-4075-862e-446d52bcb0f2",
  "Content-Type": "application/json",
  Accept: "application/json",
};

const raw = {
  messages: [
      {
          destinations: [{"to":"639671887113" + to}],
          from: "447491163443",
          text: message,
      },
  ],
};

try {
  await axios.post(
      "https://pe2n68.api.infobip.com/sms/2/text/advanced",
      raw,
      { headers: myHeaders }
  );
} catch (err) {
  console.error(err);
}
}
