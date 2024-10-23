import { View, Text, FlatList } from 'react-native';
import React from 'react';
import TaskListItems from '~/components/TaskListItems';

export default function tasks() {
  const tasks = [...Array(50)].map((_, index) => index + 1);
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskListItems task={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{
          paddingHorizontal: 4,
          paddingVertical: 5,
          // marginTop: 2,
        }}
        className=" pb-2"
      />
    </View>
  );
}
