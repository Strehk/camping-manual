/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("ptqyf3h8sv6qffl")

  // remove field
  collection.fields.removeById("bool271442091")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("ptqyf3h8sv6qffl")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool271442091",
    "name": "done",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
