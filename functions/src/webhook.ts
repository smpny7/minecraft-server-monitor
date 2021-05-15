import * as functions from "firebase-functions";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dateformat = require("dateformat");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const exec = require("child_process").exec;

// ######   SETTINGS   #########################################################
const colorSuccess = 6815520;
const colorWarning = 16768300;
const colorError = 16724530;
const colorNotify = 12895428;
const webhookCopyright = "minecraft server monitor";
const webhookNotificationsUrl = functions.config().webhook.notification_url;
const webhookEmergencyUrl = functions.config().webhook.emergency_url;
// #############################################################################


/**
 * @param {string} title
 * @param {string} description
 * @param {number} status
 * @return {undefined}
 */
export function post(title: string, description: string, status: number) {
  // 1: Success (green)
  // 2: Warning (yellow)
  // 3: Error (red)
  // 4: Notify (gray)
  let color;
  switch (status) {
    case 1:
      color = colorSuccess;
      break;
    case 2:
      color = colorWarning;
      break;
    case 3:
      color = colorError;
      break;
    case 4:
    default:
      color = colorNotify;
  }

  /* eslint-disable */
  const json = `
      {
          "embeds": [ {
              "title": "${title}",
              "description": "${description}",
              "timestamp": "${dateformat(new Date(), "yyyy-mm-dd HH:MM:ss+09:00")}",
              "color": "${color}",
              "footer": {
                  "text": "© ${dateformat(new Date(), "yyyy")} ${webhookCopyright}",
                  "icon_url": ""
              }
          } ]
      }
  `;
  /* eslint-enable */

  // eslint-disable-next-line max-len
  exec(`curl -H "Content-Type: application/json" -X POST -d '${json}' "${webhookNotificationsUrl}"`);
  // eslint-disable-next-line max-len
  if (status === 3) exec(`curl -H "Content-Type: application/json" -X POST -d '${json}' "${webhookEmergencyUrl}"`);
}
