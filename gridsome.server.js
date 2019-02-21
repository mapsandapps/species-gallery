// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

var butterflies = [
  {
    "sortOrder": 0,
    "id": "sispsk",
    "commonName": "Silver-spotted Skipper",
    "sciName": "Epargyreus clarus",
    "file": "/butterfly-photos/silver-spotted skipper.jpg"
  },
  {
    "sortOrder": 1,
    "id": "cochsk",
    "commonName": "Common Checkered-skipper",
    "sciName": "Pyrgus communis",
    "file": "/butterfly-photos/common checkered-skipper.jpg"
  }
]

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    console.log(butterflies)

    const contentType = store.addContentType({
      typeName: 'Species',
      route: '/species/:slug'
    })

    for (const item of butterflies) {
      contentType.addNode({
        id: item.id,
        fields: item
      })
    }
  })
}