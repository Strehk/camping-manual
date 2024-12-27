/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("uq00rj72ugoitaa")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text803162848",
    "max": 0,
    "min": 0,
    "name": "faIcon",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("uq00rj72ugoitaa")

  // remove field
  collection.fields.removeById("text803162848")

  return app.save(collection)
})
