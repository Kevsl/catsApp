import {StyleSheet} from 'react-native';

export const MonthlyDashboardStyle = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    },
    mainTitle: {
      marginRight: 'auto',
      marginLeft: 'auto',
      textAlign: 'center',
      marginTop: 20,
      fontSize: 30,
      color: '#14213D',
    },
    dashboard: {
      width: '95%',
      height: '100%',
      marginTop: 20,
      marginRight: 'auto',
      marginLeft: 'auto',
      borderRadius: 9,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    counter: {
      width: '45%',
      height: 130,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: 20,
      marginTop: 20,
    },
    trait: {
      width: '50%',
      height: 3,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: 20,
      marginTop: 20,
      backgroundColor: '#14213D',
    },
    counterTitle: {
      color: '#14213D',
      textAlign: 'center',
      marginTop: 5,
    },
  
    gaugeText: {
      color: '#14213D',
      fontSize: 12,
      marginRight: 'auto',
      marginLeft: 'auto',
      textAlign: 'center',
      marginTop: -50,
    },
    pie: {
      paddingVertical: 15,
      marginRight: 'auto',
      marginLeft: 'auto',
      textAlign: 'center',
    },
    button: {
      width: 50,
      height: 50,
      marginLeft: 'auto',
      marginTop: 30,
    },
    buttonSecondaryMeny: {
      width: 50,
      height: 50,
      marginLeft: 'auto',
      marginTop: 30,
    },
    PrimaryMenuButton: {
      position: 'absolute',
      right: -20,
      top: 70,
      width: 70,
      height: 70,
    }
  });
  