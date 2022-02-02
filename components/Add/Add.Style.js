import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  avatar: {
    fontSize: 25,
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#fff',
    borderBottomWidth: 2,
    padding: 10,
    marginLeft: 10,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 10,
  },
  iconAttach: {
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  iconText: {
    fontSize: 15,
    color: '#000',
  },
  post: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  postButton: {
    // width: 100,
    // height: 40,
    borderRadius: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postButtonText: {
    fontSize: 16,
    color: 'white',
  },
});
