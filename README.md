# Motley Technical Test
Tech test for lead dev role

Parts 1 and 2 are things to prepare before the tech interview, but don't require you to send us anything. Part 3 requires you to send us a link and some code.

## Part 1

Imagine you've been asked to build a system for broadcasting highly-sensitive confidential messages to a collection of users in real time. Basically, it's a platform for creating group-chats, except only one user can send messages. Specifically, it requires the following:

- Anyone can sign up for a user account
- Once signed up, users can create 'channels' and invite other users to their channel (a user can create multiple different channels)
- The channel creator can send out (plain-text) messages that will be receieved by subscribers to their channel
- The messages must be received in real time (i.e. polling the server isn't feasible)
- Channels are invite only, and nobody outside of a channel should have access to the channel's messages
- Access to a channel can only be revoked by the channel's creator
- The messages contain highly-sensitive information
- Channels can be branded (specifically, each channel will have it's own font choice, colour scheme, and logo)
- There needs to be a web app and mobile app version; they must have feature parity
- Channel creator's can send messages via the web/mobile app UI or programatically via an API

Think about how you'd architect this system. You'd don't need to write any code or create any documents, but be prepared to talk about how you'd design it as part of the technical interview. Specific things to think about:

- What frontend/backend frameworks would you use and why
- Cloud infrastructure
- Security/authentication/authorisation
- Data storage (SQL, NoSQL, etc.) and possible schemas
- API design

## Part 2

You've asked a junior developer to write some code for user login on the backend of some app. The current stack consists of an express/nodejs app running on the server, backed by a postgres DB. The code they write is included in this repo as `login.js`. Review the code and describe any issues with it. Again, you don't need to send us anything, but be prepared to give the code review feedback as part of the tech interview.

## Part 3

Create a 'web app' that allows someone to choose a colour in HSV and then displays that colour's value as a RGB hex value (i.e. #rrggbb). The page should look something like `colour-picker.jpg`. Some specifics:

- Try to get the appearance of the page as close to `colour-picker.jpg` as possible;
- The slider and bar on the right are for choosing hue, whilst the main box is for choosing saturation and value;
- You can use libraries for manipulating the DOM/CSS, but don't use libraries for the colour picker itself. You should write the event handlers and the HSV to RGB conversion code, as well as the code that updates the view when a different colour is chosen (NB: you don't need to understand the specifics of colour space theory or be able to explain HSV<->RGB conversion);
- The box containing the actual hex value at the bottom is just a box with a border (i.e. don't worry about making it an input element)

Please host the site somewhere and send us a link together with your code (either as a zip file or via a link to github etc.). If you need free hosting then https://www.netlify.com/ has a free plan.
