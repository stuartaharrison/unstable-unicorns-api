# Unstable Unicorns Database

This is a small web application that displays Unicorns from the board-game [Unstable Unicorns](https://www.unstablegames.com/collections/unstable-unicorns). Built as a learning tool for [Apollo GraphQL](https://www.apollographql.com/).

## Missing Images?

There is a `static` folder in the root of the server directory that is excluded from the project so that images of the cards are not committed to the repository. This is intentional as to avoid as much copyright infringement as possible.

I've tried to add a small bit of code in the helper class for building the image url's that will seek the image from an [external source](https://www.unicornsdatabase.com/) so that if you run this locally yourself - you will see images. The provider of these images could change their structure and the images will break again. See the `helpers/images.js` file for more.

## Disclaimer
> Unstable Unicorns is a board game by [Unstable Games](https://www.unstablegames.com/). Please support their awesome work by considering purchasing one of their many games or merchandise from their official store. All images and concepts belong to their rightful owners and in no way was copyright infringment intended. This web-application was built purely as a learning tool for GraphQL and no money being earned from the creation of this project - so please don't sue.