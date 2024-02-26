
import { easepick } from '@easepick/bundle';
import { TimePlugin } from '@easepick/time-plugin';

const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
  ],
  format: "DD/MM/YY, HH:mm",
  TimePlugin: {
    stepMinutes: 5,
    stepSeconds: 1
  },
  plugins: [
    TimePlugin
  ],
  TimePlugin: {
    format: 'HH:mm',
  },
});

export default easePick;