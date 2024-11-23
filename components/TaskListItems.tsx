import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';

type TaskListItems = {
  task: number;
};

export default function TaskListItems({ task }: TaskListItems) {
  return (
    <Pressable onPress={() => router.push(`/tasks/task-${task}`)} className={styles.container}>
      <Text style={{ fontFamily: 'RubikGlitchPro' }} className={styles.text}>
        {task}
      </Text>
    </Pressable>
  );
}

const styles = {
  container: `mx-1 aspect-square flex-1 items-center justify-center rounded-2xl border-2 border-[#543310]`,
  text: `text-8xl text-['#543310']`,
};
