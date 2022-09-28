import moment from 'moment'
import React from 'react'
import { Text, View, Image } from 'react-native'
import { CardStyle } from '../../Styles/Card'
import 'moment/locale/fr' // without this line it didn't work

export const Card = (props) => {
  moment.locale('fr')

  return (
    <View style={CardStyle.container}>
      <Image source={{ uri: props.url }} style={CardStyle.image} />

      <Text style={CardStyle.text}>{props.title}</Text>
      <Text style={CardStyle.text}>
        {moment(props.date_created).format('DD MMMM YYYY  ')}
      </Text>
    </View>
  )
}
