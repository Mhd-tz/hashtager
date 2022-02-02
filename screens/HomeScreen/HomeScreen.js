import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import {useState, useEffect} from 'react';

import styles from './HomeScreen.Style';

import Header from '../../components/Header/Header';
import Tags from '../../components/Tags/Tags';
import Add from '../../components/Add/Add';

const HomeScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Tags />
      <ScrollView>
        <Add />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
