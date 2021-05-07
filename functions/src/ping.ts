// eslint-disable-next-line @typescript-eslint/no-var-requires
const mcPing = require("mc-ping-updated");

/**
 * @param {string} address
 * @param {number} port
 * @return {Promise}
 */
export function pingAsync(address: string, port: number): Promise<never> {
  return new Promise((resolve, reject) => {
    mcPing(address, port, function(err: never, res: never) {
      if (err) reject(new Error("Could not get server information"));
      else resolve(res);
    });
  });
}
