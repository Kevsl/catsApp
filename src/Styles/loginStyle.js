import { StyleSheet } from 'react-native'

export const LoginStyle = (StyleSheet.createstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noAccount: {
    color: '#fff',
    marginTop: 20,
  },
  inputView: {
    borderRadius: 30,
    width: '80%',
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
    color: '#fff',
    textDecorationLine: 'underline',
  },

  loginBtn: {
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
  loading: {
    marginVertical: 20,
  },
  noAccount: {
    width: '80%',
    borderRadius: 25,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
    marginVertical: 10,
    opacity: 0.7,
  },
  noAccountText: {
    color: '#3A0CA3',
  },
}))
