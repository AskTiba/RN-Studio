import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Button from '~/components/Button';

export default function Engineering() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // Open the BottomSheet
  const handleOpen = useCallback(() => {
    bottomSheetRef.current?.expand(); // Expand to the maximum height
  }, []);

  // renders
  return (
    <GestureHandlerRootView className="flex-1" style={styles.container}>
      <Text className="m-3 text-lg">Product List</Text>
      <Button className="mx-4" title="Open Filters" onPress={handleOpen} />
      <BottomSheet
        // snapPoints={[200, 500]}
        // snapPoints={[200, '50%']}
        // snapPoints={['100%']}
        index={-1}
        snapPoints={['25%', '50%', '75%']} // Height options
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer} className="">
          <Text className="my-2 font-sans text-lg text-coffee">
            Aut nunquam tentes, aut perfice
          </Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});
