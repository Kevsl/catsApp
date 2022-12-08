import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { GazCardStyle } from '../../Styles/GazCardStyle'
import 'moment/locale/fr' // without this line it didn't work
import moment from 'moment'

export const GazCard = (props) => {
  const [service, setService] = useState(false)

  return (
    <View style={GazCardStyle.container}>
      <Text>{props.data.fields.adresse}</Text>
      <Text>{props.data.fields.cp}</Text>
      <Text>{props.data.fields.ville}</Text>
      <Text>
        {props.data.fields.prix_nom} :{props.data.fields.prix_valeur}€
      </Text>
      <Text style={GazCardStyle.hour}>
        Mise à jour :
        {moment(props.data.fields.prix_maj).format('DD MMMM YYYY  HH:MM ')}
      </Text>

      <TouchableOpacity
        onPress={() =>
          service === true ? setService(false) : setService(true)
        }
        style={GazCardStyle.button}
      >
        <Text>
          {service === true ? 'Cacher les services' : 'Voir les services'}
        </Text>
      </TouchableOpacity>
      {service === true && props.data.fields.services_service && (
        <Text style={GazCardStyle.services}>
          {props.data.fields.services_service.replace('//', ',')}
        </Text>
      )}
    </View>
  )
}
