import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 35,
  },
  unreadBadge: {
    backgroundColor: 'red',
    position: 'absolute',
    left: 45,
    bottom: 15,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  unreadBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
