import axios from 'axios'

export function getGazPrices(city) {
  console.log('function ', city)
  return axios
    .get(
      `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-instantane-test-ods-copie&q=${city}&rows=50&sort=-prix_valeur&facet=id&facet=adresse&facet=ville&facet=prix_maj&facet=prix_nom&facet=com_arm_name&facet=epci_name&facet=dep_name&facet=reg_name&facet=services_service&facet=horaires_automate_24_24`
    )
    .then((res) => res.data.records)
}
export function getCustomGaz(Gaz, city) {
  console.log(Gaz, city)
  return axios
    .get(
      `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-instantane-test-ods-copie&q=${city}&rows=50&sort=-prix_valeur&facet=id&facet=adresse&facet=ville&facet=prix_maj&facet=prix_nom&facet=com_arm_name&facet=epci_name&facet=dep_name&facet=reg_name&facet=services_service&refine.prix_nom=${Gaz}`
    )
    .then((res) => res.data.records)
}
