import { StyleSheet } from 'react-native'

export const RegisterStyle = (StyleSheet.createstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    backgroundColor: '#e5e5e5',
    borderWidth: 1,
    alignItems: 'center',
    color: '#000',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: '#000',
  },

  forgot_button: {
    height: 30,
    marginBottom: 20,
    color: '#fff',
  },
  registerBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A0CA3',
  },
  loginText: {
    color: '#fff',
  },
  bgImage: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  PrimaryMenuButton: {
    position: 'absolute',
    right: -20,
    top: 70,
    width: 70,
    height: 70,
  },
  noAccount: {
    width: '80%',
    borderRadius: 25,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
    marginVertical: 10,
  },
  noAccountText: {
    color: '#3A0CA3',
  },
  loading: {
    marginVertical: 20,
  },
}))
