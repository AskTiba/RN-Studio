import { View, Text } from 'react-native';
import React from 'react';
import * as SQLite from 'expo-sqlite';
import Button from '~/components/Button';
import { router } from 'expo-router';

const initDb = async () => {
  console.log('Initializing Database');

  try {
    const db = await SQLite.openDatabaseAsync('animeChar');

    // `execAsync()` is useful for bulk queries when you want to execute altogether.
    // Note that `execAsync()` does not escape parameters and may lead to SQL injection.
    await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS Students (RegNo INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT NOT NULL, last_name TEXT NOT NULL);`);
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

const insertRecord = async () => {
  console.log('Inserting Student Record(s)');

  try {
    const db = await SQLite.openDatabaseAsync('animeChar');

    const result = await db.runAsync(
      'INSERT INTO Students (first_name, last_name) VALUES (?, ?)',
      'Wabuteeya',
      'Cyrus'
    );

    console.log(result.lastInsertRowId, result.changes);
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

const deleteRecord = async () => {
  console.log('Deleting Student Record(s)');

  try {
    const db = await SQLite.openDatabaseAsync('animeChar');

    await db.runAsync('DELETE FROM Students WHERE RegNo = $value', { $value: 11 }); // Binding named parameters from object
    console.log('Record(s) deleted successfully');
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

const updateRecord = async () => {
  console.log('Updating Student Record(s)');

  try {
    const db = await SQLite.openDatabaseAsync('animeChar');

    // Data for updates
    const updates = [
      { first_name: 'Turihohabwe', last_name: 'Patricia', RegNo: 9 },
      { first_name: 'Najjemba', last_name: 'Charlotte', RegNo: 12 },
      { first_name: 'Muhindo', last_name: 'Conrad', RegNo: 13 },
      { first_name: 'Taaka', last_name: 'Joanita', RegNo: 14 },
    ];

    // Perform updates for each record
    for (const { first_name, last_name, RegNo } of updates) {
      await db.runAsync('UPDATE Students SET first_name = ?, last_name = ? WHERE RegNo = ?', [
        first_name,
        last_name,
        RegNo,
      ]);
    }

    console.log('All records updated successfully');
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const queryDatabase = async () => {
  console.log('Querying Students table');
  // router.push('/tasks/task-15/students');

  try {
    const db = await SQLite.openDatabaseAsync('animeChar');

    // `getAllAsync()` is useful when you want to get all results as an array of objects.
    const allRows = await db.getAllAsync('SELECT * FROM Students');
    console.log('allRows:', JSON.stringify(allRows, null, 2));
    for (const row of allRows) {
      console.log(row.RegNo, row.first_name, row.last_name);
    }
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

export default function Index() {
  return (
    <View className="flex-1 px-4">
      <Text className="my-3 text-center text-2xl font-semibold">Expo SQLite</Text>
      <View className="flex-1 gap-3">
        <Button className="" title="Initialize database" onPress={initDb} />
        <Button className="" title="Insert student record" onPress={insertRecord} />
        <Button className="" title="Update student(s) record" onPress={updateRecord} />
        <Button className="" title="Delete student(s)" onPress={deleteRecord} />
        <Button className="" title="Select student(s)" onPress={queryDatabase} />
      </View>
    </View>
  );
}
