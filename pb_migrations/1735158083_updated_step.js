/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrfof1qzps4n4st")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "37xt4n8s",
    "name": "alerts",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hsmyh6ry4l9abn0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrfof1qzps4n4st")

  // remove
  collection.schema.removeField("37xt4n8s")

  return dao.saveCollection(collection)
})
