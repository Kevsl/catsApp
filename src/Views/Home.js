import React, { useState, useEffect } from 'react'
import Geolocation from 'react-native-geolocation-service'
import { useDispatch, useSelector } from 'react-redux'
import { addHours, secondsToHm } from '../utils/calculators'
import { HomeStyle } from '../Styles/homeStyle'
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native'
import Texts from '../commons/texts'
import menuBurger from '../Assets/icons/burger.png'
import bed from '../Assets/icons/whiteBed.png'
import wheel from '../Assets/icons/wheel.png'
import hammer from '../Assets/icons/hammer.png'
import dispo from '../Assets/icons/available.png'
import secondaryMenuButton from '../Assets/icons/secondaryMenu.png'
import {
  getAmplitude,
  getWorkingTime,
  getRestTime,
  getDispositionTime,
  getSleepTime,
  getDrivingTime,
  getDailyDrivingTime,
  getDoubleCrew,
  getServiceTime,
  getDailyServiceTime,
  getChronoMode,
  getIsActive,
  getShowSecondaryMenu,
  incrementAmplitude,
  incrementDailyDrivingTime,
  incrementDailyServiceTime,
  incrementDispositionTime,
  incrementDrivingTime,
  incrementRestTime,
  incrementServiceTime,
  incrementWorkingTime,
  resetDrivingTime,
  resetRestTime,
  resetServiceTime,
  resetWorkingTime,
  setRestTime,
  setShowSecondaryMenu,
  setChronoMode,
  setIsActive,
} from '../redux/reducers/dayInformations'
import { createChronoMode } from '../Services/timeDatas/chronomodeService'
import { getData, setData, removeItem } from '../utils/localStorage'
import {
  createJournee,
  closeJournee,
} from '../Services/timeDatas/journeeService'

export const Home = ({ navigation }) => {
  Geolocation.requestAuthorization('always')
  const dispatch = useDispatch()

  const amplitude = useSelector(getAmplitude)
  // Work time
  const workTime = useSelector(getWorkingTime)
  const [dailyWorkTime, setDailyWorkTime] = useState(0)

  // Driving Time
  const drivingTime = useSelector(getDrivingTime)
  const dailyDrivingTime = useSelector(getDailyDrivingTime)

  // Disposition Time
  const dispositionTime = useSelector(getDispositionTime)

  // rest time
  const breakTime = useSelector(getRestTime)

  // service Time
  const serviceTime = useSelector(getServiceTime)
  const dailyServiceTime = useSelector(getDailyServiceTime)

  // Day  And general informations
  const [dayStart, setDayStart] = useState(new Date())
  const [dayEnd, setDayEnd] = useState(new Date())

  const isActive = useSelector(getIsActive)
  const chronoMode = useSelector(getChronoMode)
  const [seconds, setSeconds] = useState(0)
  const [error, setError] = useState('')
  const showSecondaryMenu = useSelector(getShowSecondaryMenu)

  const [endBreak15, setEndBreak15] = useState(0)
  const [endBreak45, setEndBreak45] = useState(0)
  //   Geographic datas
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [oldLatitude, setOldLatitude] = useState(0)
  const [oldLongitude, setOldLongitude] = useState(0)
  const [alerte, setAlerte] = useState()
  const isDoubleCrew = useSelector(getDoubleCrew)

  const [difference, setDifference] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [accessToken, setAccessToken] = useState('')

  const [dayId, setDayId] = useState('')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    getData('access_token').then((res) => setAccessToken(res))
    getData('utilisateur_id').then((response) => setUserId(response))
    getData('first_name').then((ret) => setFirstName(ret))
  }, [])

  function handleDay(value) {
    value === true
      ? (dispatch(setIsActive(true)),
        handleChronoMode(Texts.chronoVariables.workingTime),
        createJournee(userId, accessToken).then((res) => {
          setData('id_journee', res.data.id_journee.toString())
          setData('last_chronoMode', Date.now().toString())
        }))
      : (dispatch(setIsActive(false)),
        closeJournee(
          userId,
          accessToken,
          dayId,
          drivingTime,
          breakTime,
          serviceTime
        ),
        removeItem('id_journee'))
  }

  // ChronoTachygraph manager
  async function handleChronoMode(chronoValue) {
    if (chronoMode !== chronoValue) {
      createChronoMode(chronoValue, userId, accessToken)
        .then((res) => {
          res
        })
        .catch((err) => {
          alert(err)
        })
    }

    switch (chronoValue) {
      case Texts.chronoVariables.workingTime:
        breakTime < 15
          ? dispatch(resetRestTime())
          : breakTime > 14 && breakTime < 45
          ? dispatch(setRestTime(15))
          : dispatch(setRestTime(breakTime))
        dispatch(setChronoMode(Texts.chronoVariables.workingTime))
        dispatch(setShowSecondaryMenu(false))
        breakTime > 45
          ? (dispatch(resetRestTime()),
            dispatch(resetDrivingTime()),
            dispatch(resetServiceTime()))
          : null
        break

      case Texts.chronoVariables.drivingTime:
        breakTime < 15
          ? dispatch(resetRestTime())
          : breakTime > 14 && breakTime < 45
          ? dispatch(setRestTime(15))
          : null
        dispatch(setChronoMode(Texts.chronoVariables.drivingTime))

        breakTime > 45
          ? (dispatch(resetRestTime()),
            dispatch(resetDrivingTime()),
            dispatch(resetServiceTime()),
            dispatch(resetWorkingTime()))
          : null

        break

      case Texts.chronoVariables.dispositionTime:
        dispatch(setChronoMode(Texts.chronoVariables.dispositionTime))

        if (isDoubleCrew) {
          handleMessages(Texts.chronoVariables.restTime)
          setEndBreak45(addHours(45))
          setEndBreak15(addHours(15))
          breakTime > 30 ? dispatch(resetServiceTime) : null
        }
        dispatch(resetWorkingTime())
        dispatch(setShowSecondaryMenu(false))

        break

      case Texts.chronoVariables.restTime:
        dispatch(setChronoMode(Texts.chronoVariables.restTime))
        handleMessages(Texts.chronoVariables.restTime)

        breakTime < 15
          ? dispatch(resetRestTime())
          : breakTime > 14 && breakTime < 45
          ? dispatch(adjustRestTime(15))
          : breakTime > 45
          ? (dispatch(resetDrivingTime()), dispatch(resetServiceTime()))
          : null
        dispatch(setShowSecondaryMenu(false))
        dispatch(resetWorkingTime())
        break
      case Texts.chronoVariables.sleepTime:
        dispatch(setChronoMode(Texts.chronoVariables.sleepTime))

        dispatch(setShowSecondaryMenu(false))
        handleMessages('sleepTime')
        break
      default:
        null
    }
  }

  function handleMessages(message) {
    switch (message) {
      case Texts.chronoVariables.restTime:
        setAlerte(
          <View style={HomeStyle.messageContainer}>
            {breakTime < 15 ? (
              <Text style={HomeStyle.message}>
                {Texts.francais.messages.rest15} :{' '}
                {addHours(15 - breakTime).toLocaleTimeString()}
              </Text>
            ) : null}

            <Text style={HomeStyle.message}>
              {Texts.francais.messages.rest45}:{' '}
              {addHours(45 - breakTime).toLocaleTimeString()}
            </Text>
          </View>
        )
        break
      case Texts.chronoVariables.sleepTime:
        setAlerte(
          <View>
            <Text style={HomeStyle.position}>
              {Texts.francais.messages.sleep9}
            </Text>
            <Text style={HomeStyle.position}>
              {Texts.francais.messages.sleep11}
            </Text>
          </View>
        )
        break
        null
    }
  }
  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1)
      }, 1000)
      if (seconds > 4) {
        setOldLatitude(latitude)
        setOldLongitude(longitude)

        Geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
          },
          (error) => {
            // See error code charts below.
            setError(error.code, error.message)
          },
          { enableHighAccuracy: true, timeout: 4000, maximumAge: 4000 }
        )
        if (
          chronoMode === Texts.chronoVariables.workingTime ||
          chronoMode === Texts.chronoVariables.drivingTime
        ) {
          if (
            latitude - oldLatitude > 0.00025 ||
            oldLatitude - latitude > 0.00025 ||
            longitude - oldLongitude > 0.00025 ||
            oldLongitude - longitude > 0.00025
          ) {
            chronoMode !== Texts.chronoVariables.drivingTime
              ? handleChronoMode(Texts.chronoVariables.drivingTime)
              : null
          } else {
            handleChronoMode(Texts.chronoVariables.workingTime)
          }
        }
        setSeconds(0)
      } else if (seconds > 5) {
        clearInterval(interval)
      }
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, chronoMode, seconds])

  //   chrono tachygraph State Watch
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        getData('last_chronoMode').then((res) => {
          let ecart = Date.now() - parseInt(res)
          setDifference(ecart / 1000)
          // alert(difference)
        })
        removeItem('last_chronoMode')
        setData('last_chronoMode', Date.now().toString())

        switch (chronoMode) {
          case Texts.chronoVariables.drivingTime:
            dispatch(incrementDrivingTime(difference))
            dispatch(incrementServiceTime(difference))
            dispatch(incrementAmplitude(difference))
            dispatch(incrementDailyDrivingTime(difference))
            dispatch(incrementDailyServiceTime(difference))

            break
          case Texts.chronoVariables.restTime:
            dispatch(incrementRestTime(difference))
            dispatch(incrementAmplitude(difference))
            if (breakTime >= 30) {
              dispatch(resetServiceTime())
            }
            break
          case Texts.chronoVariables.dispositionTime:
            dispatch(incrementDispositionTime(difference))
            dispatch(incrementServiceTime(difference))
            dispatch(incrementAmplitude(difference))
            break
          case Texts.chronoVariables.workingTime:
            dispatch(incrementWorkingTime(difference))
            dispatch(incrementServiceTime(difference))
            dispatch(incrementAmplitude(difference))
            dispatch(incrementDailyServiceTime(difference))
            break
        }
      }, 20000)
      return () => clearInterval(interval)
    }
  }, [isActive, chronoMode])

  return (
    <SafeAreaView style={HomeStyle.homeLayer}>
      <TouchableOpacity
        title="Main menu"
        accessibilityLabel="Main menu button"
        style={HomeStyle.PrimaryMenuButton}
        onPress={() => navigation.navigate('MainMenu')}
      >
        <Image source={menuBurger} />
      </TouchableOpacity>
      <Text style={HomeStyle.testmsg}>{firstName}</Text>

      <View style={HomeStyle.chronoInfo}>
        {chronoMode === Texts.chronoVariables.workingTime ? (
          <View style={HomeStyle.statusView}>
            <Image source={hammer} style={HomeStyle.statusBarImage} />
            <Text style={HomeStyle.statusBarText}>{secondsToHm(workTime)}</Text>
          </View>
        ) : chronoMode === Texts.chronoVariables.restTime ? (
          <View style={HomeStyle.statusView}>
            <Image source={bed} style={HomeStyle.statusBarImage} />
            <Text style={HomeStyle.statusBarText}>
              {secondsToHm(breakTime)}
            </Text>
          </View>
        ) : chronoMode === Texts.chronoVariables.drivingTime ? (
          <View style={HomeStyle.statusView}>
            <Image source={wheel} style={HomeStyle.statusBarImage} />
            <Text style={HomeStyle.statusBarText}>
              {secondsToHm(drivingTime)}
            </Text>
          </View>
        ) : chronoMode === Texts.chronoVariables.dispositionTime ? (
          <View style={HomeStyle.statusView}>
            <Image source={dispo} style={HomeStyle.statusBarImage} />
            <Text style={HomeStyle.statusBarText}>
              {secondsToHm(dispositionTime)}
            </Text>
          </View>
        ) : null}
        <Text style={HomeStyle.statusBarDay}>
          Amplitude : {secondsToHm(amplitude)}
        </Text>
      </View>
      <View
        style={
          showSecondaryMenu === true ? HomeStyle.secondaryMenu : HomeStyle.none
        }
      >
        <View style={HomeStyle.chronoContainer}>
          <View style={HomeStyle.chronoItem}>
            <TouchableOpacity
              style={HomeStyle.chronoItemButton}
              onPress={() => {
                handleChronoMode(Texts.chronoVariables.workingTime)
              }}
            >
              <Image source={hammer} style={HomeStyle.chronoButtonImg} />
            </TouchableOpacity>
          </View>
          <View style={HomeStyle.chronoItem}>
            <TouchableOpacity
              style={HomeStyle.chronoItemButton}
              onPress={() => {
                handleChronoMode(Texts.chronoVariables.drivingTime)
              }}
            >
              <Image source={wheel} style={HomeStyle.chronoButtonImg} />
            </TouchableOpacity>
          </View>
          <View style={HomeStyle.chronoItem}>
            <TouchableOpacity
              style={HomeStyle.chronoItemButton}
              onPress={() => {
                handleChronoMode(Texts.chronoVariables.restTime)
              }}
            >
              <Image source={bed} style={HomeStyle.statusBarImage} />
            </TouchableOpacity>
          </View>
          <View style={HomeStyle.chronoItem}>
            <TouchableOpacity
              style={HomeStyle.chronoItemButton}
              onPress={() => {
                handleChronoMode(Texts.chronoVariables.dispositionTime)
              }}
            >
              <Image source={dispo} style={HomeStyle.statusBarImage} />
            </TouchableOpacity>
          </View>
        </View>

        {isActive === true ? (
          <TouchableOpacity
            onPress={() => {
              handleDay(false)
            }}
          >
            <Text style={HomeStyle.dayButton}> Terminer la journée</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              handleDay(true)
            }}
          >
            <Text style={HomeStyle.dayButton}>Démarrer la journée</Text>
          </TouchableOpacity>
        )}
      </View>
      {chronoMode === Texts.chronoVariables.dispositionTime ||
      chronoMode === Texts.chronoVariables.restTime
        ? alerte
        : null}
      <TouchableOpacity
        title="Learn More"
        accessibilityLabel="Learn more about this purple button"
        style={HomeStyle.secondaryMenuButton}
        onPress={() =>
          showSecondaryMenu === true
            ? dispatch(setShowSecondaryMenu(false))
            : dispatch(setShowSecondaryMenu(true))
        }
      >
        <Image source={secondaryMenuButton} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}
