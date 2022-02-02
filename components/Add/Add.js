import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useState, useEffect} from 'react';

import styles from './Add.Style';

export default function Add() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View></View>
        <Text style={styles.avatar}>avatar</Text>
        <TextInput
          style={styles.input}
          placeholder="Write something..."
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.iconAttach}>
          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Text style={styles.iconText}>Attach</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Text style={styles.iconText}>Emoji</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Text style={styles.iconText}>Add Poll</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Text style={styles.iconText}>Add Poll</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.post}>
          <TouchableOpacity style={styles.postButton}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
