// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

var galleries = require('./src/data/galleries.json');
var butterflies = require('./src/data/butterflies.json');

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    console.log(butterflies)

    const galleryContentType = store.addContentType({
      typeName: 'Gallery',
      route: '/:slug'
    })

    for (const item of galleries) {
      galleryContentType.addNode({
        id: item.id,
        fields: {
          ...item
        }
      })
    }

    const butterflyContentType = store.addContentType({
      typeName: 'Butterfly',
      route: '/butterflies/:slug'
    })

    for (const item of butterflies) {
      butterflyContentType.addNode({
        id: item.id,
        fields: {
          ...item
        }
      })
    }
  })
}
