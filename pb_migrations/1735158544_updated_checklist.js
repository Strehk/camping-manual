/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ptqyf3h8sv6qffl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qcmcavmi",
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
    "id": "pnuc21jv",
    "name": "todos",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "i3lcx8fdyowfabe",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ptqyf3h8sv6qffl")

  // remove
  collection.schema.removeField("qcmcavmi")

  // remove
  collection.schema.removeField("pnuc21jv")

  return dao.saveCollection(collection)
})
