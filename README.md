![EtherHive](https://i.imgur.com/1YxwFyU.png)
========

EtherHive is to become a direct democratic social network, running fully autonomously. Its users will be able to post and interact with messages, photos and videos. The social platform will be ruled by its users, through an electoral system, with technocratic values.  The users will receive the right to vote on the development of the platform, to run for a position in managing it, and to vote the candidates they believe more competent for each position.

**Ruby on Rails** is used for the back-end, while **React.js** and Redux are used for the dynamic front-end. A static front-end for public resources (profiles and statuses) is also provided.

If you would like, you can be a part of this project on [https://etherhive.io](https://etherhive.io)


---

## Resources
- [Documentation](https://github.com/etherhive/docs/blob/master/README.md)
- [API overview](https://github.com/etherhive/docs/blob/master/API/API.md)
- [Running EtherHive](https://github.com/etherhive/docs/blob/master/Running/ProductionGuide.md)

## Features

**No vendor lock-in: Fully interoperable with any conforming platform**

It doesn't have to be Mastodon, whatever implements ActivityPub or OStatus is part of the social network!

**Real-time timeline updates**

See the updates of people you're following appear in real-time in the UI via WebSockets. There's a firehose view as well!

**Federated thread resolving**

If someone you follow replies to a user unknown to the server, the server fetches the full thread so you can view it without leaving the UI

**Media attachments like images and short videos**

Upload and view images and WebM/MP4 videos attached to the updates. Videos with no audio track are treated like GIFs; normal videos are looped - like vines!

**OAuth2 and a straightforward REST API**

EtherHive acts as an OAuth2 provider so 3rd party apps can use the API

**Fast response times**

EtherHive tries to be as fast and responsive as possible, so all long-running tasks are delegated to background processing

**Deployable via Docker**

You don't need to mess with dependencies and configuration if you want to try EtherHive, if you have Docker and Docker Compose the deployment is extremely easy

---

## Development

Please follow the [development guide](https://github.com/etherhive/docs/blob/master/Running/DevelopmentGuide.md) from the documentation repository.

## Deployment

Please follow the [production deployment guide](https://github.com/etherhive/docs/blob/master/Running/ProductionGuide.md) from the documentation repository.

## Contributing

You can open issues for bugs you've found or features you think are missing. You can also submit pull requests to this repository. [Here are the guidelines for code contributions](CONTRIBUTING.md)

---
