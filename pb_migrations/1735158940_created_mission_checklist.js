/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n63vwn6jeg7qnup",
    "created": "2024-12-25 20:35:40.057Z",
    "updated": "2024-12-25 20:35:40.057Z",
    "name": "mission_checklist",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gniwsfhx",
        "name": "mission",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "8ag64scawxr32no",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "wwwqa85r",
        "name": "checklist",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ptqyf3h8sv6qffl",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "6otcgtxm",
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
  const collection = dao.findCollectionByNameOrId("n63vwn6jeg7qnup");

  return dao.deleteCollection(collection);
})
