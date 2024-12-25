/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uq00rj72ugoitaa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4j6qyngn",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1ep6slbc",
    "name": "steps",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hrfof1qzps4n4st",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uq00rj72ugoitaa")

  // remove
  collection.schema.removeField("4j6qyngn")

  // remove
  collection.schema.removeField("1ep6slbc")

  return dao.saveCollection(collection)
})
