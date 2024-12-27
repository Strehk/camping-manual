/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("i3lcx8fdyowfabe")

  // remove field
  collection.fields.removeById("ykxotro0")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation271442091",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "done",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("i3lcx8fdyowfabe")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "ykxotro0",
    "name": "done",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // remove field
  collection.fields.removeById("relation271442091")

  return app.save(collection)
})
