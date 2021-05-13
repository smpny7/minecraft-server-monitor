# minecraft server monitor

Monitor your Minecraft server and let Discord know the status 🖥

This software is made for `Cloud Functions for Firebase 🔥`.


## Getting Started

### Step 1: Set up Node.js and the Firebase CLI
You'll need a [Node.js](https://nodejs.org) environment to write functions,
and the [Firebase CLI](https://firebase.google.com/docs/cli#setup_update_cli) to deploy functions to the Cloud Functions runtime.

```shell
$ npm install -g firebase-tools
```

Associate with your Firebase project.

```shell
$ firebase login
```


### Step 2: Set your Firebase config

Register your Minecraft server `address` and `port`.

```shell
$ firebase functions:config:set server.address="minecraft-sample-server.com" server.port="25565"
```

Set webhook url for Discord notification.

- Notification: regular notification during stable operation
- Emergency: emergency notification when the server is stopped

```shell
$ firebase functions:config:set webhook.notification_url="https://discord.com/api/webhooks/xxxxx" webhook.emergency_url="https://discord.com/api/webhooks/xxxxx"
```


### Step 3: Deploy your monitoring server

Your Firebase project must be on the [Blaze pricing plan](https://firebase.google.com/pricing).
See [Cloud Functions pricing](https://firebase.google.com/support/faq#functions-pricing).

```shell
$ firebase deploy
```


## Contributing

Please read [CONTRIBUTING.md](https://github.com/smpny7/minecraft-server-monitor/blob/main/CONTRIBUTION.md) for details on our code of conduct, and the process for submitting pull requests to us.


## License

This project is licensed under the MIT License - see [LICENSE.md](https://github.com/smpny7/minecraft-server-monitor/blob/main/LICENCE) file for details.

Copyright &copy; 2021 Developed by [smpny7](https://github.com/smpny7).
