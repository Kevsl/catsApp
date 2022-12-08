import { StyleSheet } from 'react-native'

export const GazCardStyle = (StyleSheet.createstyle = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    width: '70%',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 9,
    marginHorizontal: '15%',
  },
  image: {
    maxWidth: 300,
    maxHeight: 200,
    borderRadius: 9,
  },
  button: {
    marginVertical: 10,
    border: '1px solid #14213D',
    borderWidth: 2,
    borderColor: '#FCA311',
    padding: 5,
    borderRadius: 9,
  },
  services: {
    width: '80%',
    paddingHorizontal: 10,
  },
  hour: {
    fontSize: 10,
    marginVertical: 5,
  },
}))
