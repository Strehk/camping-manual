/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ptqyf3h8sv6qffl",
    "created": "2024-12-25 20:16:08.534Z",
    "updated": "2024-12-25 20:16:08.534Z",
    "name": "checklist",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lt16gwry",
        "name": "title",
        "type": "text",
        "required": true,
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
        "id": "ml7trc8f",
        "name": "info",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_BwNOF11` ON `checklist` (`title`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("ptqyf3h8sv6qffl");

  return dao.deleteCollection(collection);
})
