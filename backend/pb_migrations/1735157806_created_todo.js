/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i3lcx8fdyowfabe",
    "created": "2024-12-25 20:16:46.215Z",
    "updated": "2024-12-25 20:16:46.215Z",
    "name": "todo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xm8cbynr",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ykxotro0",
        "name": "done",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i3lcx8fdyowfabe");

  return dao.deleteCollection(collection);
})
