/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hsmyh6ry4l9abn0",
    "created": "2024-12-25 20:20:14.960Z",
    "updated": "2024-12-25 20:20:14.960Z",
    "name": "alert",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ecwrenox",
        "name": "severity",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "info",
            "success",
            "warning",
            "danger"
          ]
        }
      },
      {
        "system": false,
        "id": "kwmvqzbb",
        "name": "text",
        "type": "editor",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
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
  const collection = dao.findCollectionByNameOrId("hsmyh6ry4l9abn0");

  return dao.deleteCollection(collection);
})
