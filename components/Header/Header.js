import * as React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useState, useEffect} from 'react';

import styles from './Header.Style';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Hashtager</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Text style={styles.icon}>#</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Text style={styles.icon}>@</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
