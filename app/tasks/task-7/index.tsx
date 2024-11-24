import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Person from '~/assets/svgs/person';
import RightChevron from '~/assets/svgs/right-chevron';
import { Stack } from 'expo-router';
import CustomListItem from '~/components/CustomListItem';
import Shield from '~/assets/svgs/shield';
import Notifications from '~/assets/svgs/notifications';
import Privacy from '~/assets/svgs/privacy';
import House from '~/assets/svgs/house';
import Display from '~/assets/svgs/display';

export default function Settings() {
  return (
    <ScrollView className="px-4">
      <Stack.Screen
        options={{ headerShown: true, title: 'Settings and privacy', headerTitleAlign: 'center' }}
      />
      <View className="">
        <Text className="py-4 font-bold uppercase">Account</Text>
        <View className=" rounded-lg">
          <CustomListItem
            title="Manage Account"
            LeftIcon={<Person />}
            RightIcon={<RightChevron />}
          />
          <CustomListItem title="Privacy" LeftIcon={<Privacy />} RightIcon={<RightChevron />} />
          <CustomListItem
            title="Security and login"
            LeftIcon={<Shield color={'#543310'} />}
            RightIcon={<RightChevron />}
          />
        </View>
      </View>
      <View className="">
        <Text className="py-4 font-bold uppercase">Content & Display</Text>
        <View className=" rounded-lg">
          <CustomListItem
            title="Notifications"
            LeftIcon={<Notifications />}
            RightIcon={<RightChevron />}
          />
          <CustomListItem
            title="Content preferences"
            LeftIcon={<House color={'#543310'} />}
            RightIcon={<RightChevron />}
          />
          <CustomListItem
            title="Display"
            LeftIcon={<Display color={'#543310'} />}
            RightIcon={<RightChevron />}
          />
          <CustomListItem
            title="Accessibility"
            LeftIcon={<Shield color={'#543310'} />}
            RightIcon={<RightChevron />}
          />
        </View>
      </View>
      <View className="">
        <Text className="py-4 font-bold uppercase">Support & About</Text>
        <View className=" rounded-lg">
          <CustomListItem
            title="Report a problem"
            LeftIcon={<Notifications />}
            RightIcon={<RightChevron />}
          />
          <CustomListItem
            title="Support"
            LeftIcon={<House color={'#543310'} />}
            RightIcon={<RightChevron />}
          />
          <CustomListItem
            title="Terms and Policies"
            LeftIcon={<Shield color={'#543310'} />}
            RightIcon={<RightChevron />}
          />
        </View>
      </View>
      <View className="">
        <Text className="py-4 font-bold uppercase">Login</Text>
        <View className=" rounded-lg">
          <CustomListItem
            title="Switch role"
            LeftIcon={<Notifications />}
            RightIcon={<RightChevron />}
          />
          <CustomListItem
            title="Log out"
            LeftIcon={<House color={'#543310'} />}
            RightIcon={<RightChevron />}
          />
        </View>
      </View>
    </ScrollView>
  );
}
