# StyleIT

StyleIt lets you download images of clothes from anywhere online and instantly see how they’d look on you in real life. Try outfits from around the world effortlessly—no fitting rooms needed!

## Features

View in real-time any clothes you want on your own body, no matter where you are. StyleIt uses augmented reality to show you how clothes will look on you in real life.

## Contributors
- [Stephen](https://github.com/realstephendong)
    - Worked heavily on the front-end, optimizing camera resource usage and real-time the clothing overlay on web-camera interface.
    - Added rotational functionality on headwear.
    - Worked closely with Mediapipe to detect the user's body anchor points and dynamically transform clothing to fit the user.
- [Rafael](https://github.com/raf-fonseca)
    - Led the back-end development, syncing the user's data and clothing data to the front-end.
    - Worked on the front-end creating components and connecting backend routes to the front-end.
    - Added image clipping to the processing pipeline and created separate server to handle processing.
- [Aaryan](https://github.com/patel-aaryan)
    - Led the front-end development, creating a seamless and clean design to view and browse all clothing options
    - Also helped sync data between front-end and back-end components.
- [Ben](https://github.com/Leg3ndary)
    - Worked on the back-end, helping process images to have a transparent background.
    - Also worked heavily with Mediapipe to scale clothes to match users in real-time.
    - Helped with the front-end to create a form to help upload images.

## Installation

Install both sets of dependencys for both folders and run a command for each respective folder:

```bash
$ node server.js
$ npm run dev
```
