import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection URI
const dbName = 'yourDatabaseName'; // Replace with your database name

export const putDb = async (content) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');

    const db = client.db(dbName);
    const collection = db.collection('yourCollectionName'); // Replace with your collection name

    // Insert the content into the collection
    const result = await collection.insertOne({ content });

    console.log('Content added to the database:', result.insertedId);
  } catch (err) {
    console.error('Error adding content to the database:', err);
  } finally {
    // Close the connection
    client.close();
    console.log('Connection closed');
  }
};

// Usage example
const contentToAdd = 'Some content to add to the database';
putDb(contentToAdd);


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
