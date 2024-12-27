/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrfof1qzps4n4st")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gwb8ao44",
    "name": "stepNumber",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrfof1qzps4n4st")

  // remove
  collection.schema.removeField("gwb8ao44")

  return dao.saveCollection(collection)
})
