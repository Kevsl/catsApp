import { StyleSheet } from 'react-native'

export const LevelsStyle = (StyleSheet.createstyle = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },

  image: {
    flex: 1,
    width: '100%',
  },
  button: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'absolute',
    top: 50,
    left: 20,
    border: '1px solid #000',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#e5e5e5',
  },
  input: {
    width: '50%',
    marginHorizontal: '25%',
    backgroundColor: '#e5e5e5',
    height: 30,
    marginVertical: 20,
  },
  text: {
    textAlign: 'center',
    marginTop: 30,
  },
  success: {
    backgroundColor: '#28a745',
    color: '#fff',
    textAlign: 'center',
    maxWidth: '50%',
    marginHorizontal: '25%',
  },
  search: {
    width: '50%',
    marginHorizontal: '25%',
    marginVertical: 10,
    backgroundColor: '#fca311',
    textAlign: 'center',
    borderRadius: 9,
  },
  searchText: {
    color: '#fff',
    textAlign: 'center',
  },
}))
