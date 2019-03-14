// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

var galleriesData = require('./src/data/galleries.json')
var photosData = require('./src/data/photos.json')
var subgalleriesData = require('./src/data/subgalleries.json')
var speciesData = require('./src/data/species.json')

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api

    const galleries = store.addContentType({
      typeName: 'Gallery',
      route: '/:id'
    })
    const photos = store.addContentType('Photo')
    const subgalleries = store.addContentType('Subgallery')
    const species = store.addContentType('Species')

    photos.addReference('species', 'Species')
    species.addReference('featuredPhoto', 'Photo')
    species.addReference('photos', 'Photo')
    subgalleries.addReference('galleries', 'Gallery')
    subgalleries.addReference('species', 'Species')

    for (const item of photosData) {
      photos.addNode({
        id: item.id,
        fields: {
          ...item
        }
      })
    }

    for (const item of speciesData) {
      species.addNode({
        id: item.id,
        fields: {
          ...item
        }
      })
    }

    for (const item of galleriesData) {
      galleries.addNode({
        id: item.id,
        fields: {
          ...item
        }
      })
    }

    for (const item of subgalleriesData) {
      subgalleries.addNode({
        id: item.id,
        fields: {
          ...item
        }
      })
    }
  })
}
