import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {useState, useEffect} from 'react';

import styles from './Tags.Style';

export const users = [
  {
    id: 1,
    // make love icon
    name: 'For You',
  },
  {
    id: 2,
    name: 'Trending',
  },
  {
    id: 3,
    name: 'Popular',
  },
  {
    id: 4,
    name: 'New',
  },
  {
    id: 5,
    name: 'Sports',
  },
];

export default function Tags() {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={users}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
