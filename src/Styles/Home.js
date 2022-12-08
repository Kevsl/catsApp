import { StyleSheet } from 'react-native'

export const HomeStyle = (StyleSheet.createstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 80,
  },
  coordinates: {
    position: 'absolute',
    bottom: 30,
  },
  nav: {
    marginVertical: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  gazButton: {
    marginVertical: 10,
    border: '1px solid #FCA311',
    borderWidth: 2,
    borderColor: '#FCA311',
    padding: 5,
    borderRadius: 9,
    marginHorizontal: 10,
  },
}))
