import { View, Text, FlatList, TouchableOpacity, Pressable, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, Stack } from 'expo-router';
import Plus from '~/assets/svgs/plus';
import { supabase } from '~/lib/supabase';
import Person from '~/assets/svgs/person';

export default function Index() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const fetchPolls = async () => {
      // console.log('fetching...');

      let { data, error } = await supabase.from('polls').select('*');
      if (error) {
        Alert.alert('Error fetching data');
      }
      // console.log(JSON.stringify(data, null, 2));
      setPolls(data);
    };
    fetchPolls();
  }, []);

  const renderPoll = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push(`/tasks/task-2/polls/${item.id}`)}
      className="rounded-xl bg-white p-3">
      <Text className="text-base">
        {item.id}: {item.question}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Pressable onPress={() => router.push('/Profile')} className="">
              <Person color="#543310" />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => router.push('/(protected)/CreatePoll')} className="">
              <Plus />
            </Pressable>
          ),
          headerTitleAlign: 'center',
        }}
      />
      <FlatList
        data={polls}
        renderItem={renderPoll}
        contentContainerStyle={{ rowGap: 10 }}
        className="p-2"
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
