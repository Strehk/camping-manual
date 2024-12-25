/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hsmyh6ry4l9abn0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rps50kdc",
    "name": "priority",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hsmyh6ry4l9abn0")

  // remove
  collection.schema.removeField("rps50kdc")

  return dao.saveCollection(collection)
})
