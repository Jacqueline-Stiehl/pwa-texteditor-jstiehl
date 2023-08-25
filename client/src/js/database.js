import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content
//and adds it to the database
//original code below:
//export const putDb = async (content) => console.error('putDb not implemented');

export const putDb = async (content) => {
  const openTextEditorDb = await openDB(texteditor_db, 1);
  const transAction = openTextEditorDb.transaction(texteditor_db, "readwrite");
  const store = transAction.objectStore(texteditor_db);

  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log("🚀 - data saved to the database", result.value);
};

// TODO: Add logic for a method that gets all the
//content from the database
//original code below:
//export const getDb = async () => console.error("getDb not implemented");

export const getDb = async () => {
  const openTextEditorDb = await openDB(texteditor_db, 1);
  const transAction = openTextEditorDb.transaction(texteditor_db, "readonly");
  const store = transAction.objectStore(texteditor_db);

  const request = store.get(1);
  const result = await request;
  result
    ? console.log("🚀 - data retrieved from the database", result.value)
    : console.log("🚀 - data not found in the database");

  return result?.value;
};

initdb();
