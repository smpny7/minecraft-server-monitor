import * as functions from "firebase-functions";
import {pingAsync} from "./ping";
import {post} from "./webhook";

interface serverResponse {
  players: {
    online: number;
  }
}

exports.scheduledFunction = functions.pubsub.schedule("every 10 minutes")
    .onRun(async () => {
      // eslint-disable-next-line max-len
      pingAsync(functions.config().server.address, parseInt(functions.config().server.port))
          .then((data: serverResponse) => {
            post("正常に稼働しています", `現在${data.players.online}人がオンラインです。`, 1);
            console.log("Working");
          }).catch(() => {
            post("サーバーが停止しました", "10分後にもう一度接続を試みます", 3);
            console.log("Not Working");
          });
    });
