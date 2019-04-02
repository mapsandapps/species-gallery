// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

var speciesGalleriesData = require('./src/data/species-galleries.json')
var photosData = require('./src/data/photos.json')
var subgalleriesData = require('./src/data/subgalleries.json')

var birdsData = require('./src/data/birds.json')
var butterfliesData = require('./src/data/butterflies.json')
var mothsData = require('./src/data/moths.json')

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api

    const speciesGalleries = store.addContentType({
      typeName: 'SpeciesGalleryGallery',
      route: '/species-gallery/:id'
    })
    const photos = store.addContentType('Photo')
    const subgalleries = store.addContentType('Subgallery')
    const species = store.addContentType({
      typeName: 'Species',
      route: '/species-gallery/species/:id'
    })

    photos.addReference('species', 'Species')
    species.addReference('featuredPhoto', 'Photo')
    speciesGalleries.addReference('featuredPhoto', 'Photo')
    species.addReference('photos', 'Photo')
    subgalleries.addReference('speciesGalleries', 'SpeciesGalleryGallery')
    species.addReference('subgallery', 'Subgallery')

    for (const item of photosData) {
      photos.addNode({
        id: item.id,
        fields: {
          ...item
        }
      })
    }

    for (const item of birdsData) {
      species.addNode({
        id: item.id,
        fields: {
          speciesGallery: 'birds',
          ...item
        }
      })
    }

    for (const item of butterfliesData) {
      species.addNode({
        id: item.id,
        fields: {
          speciesGallery: 'butterflies',
          ...item
        }
      })
    }

    for (const item of mothsData) {
      species.addNode({
        id: item.id,
        fields: {
          speciesGallery: 'moths',
          ...item
        }
      })
    }

    for (const item of speciesGalleriesData) {
      speciesGalleries.addNode({
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
