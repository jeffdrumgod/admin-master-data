import axios from 'axios'
import {
  DATA_ENTITY,
  SCHEMA_NAME,
} from '../constants'

export function getVtableSchema() {
  if (!window) return
  const url = `${
    window.location.origin
  }/api/dataentities/${DATA_ENTITY}/schemas/${SCHEMA_NAME}?complete=true`
  return axios({
    method: 'get',
    url,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.data)
    .catch(err => console.log('>>>> CATCH >>', err))
}

export function getVtableDocuments() {
  const url = `${
    window.location.origin
  }/api/dataentities/${DATA_ENTITY}/search?_fields=_all`
  return axios({
    method: 'get',
    url,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res)
    .catch(err => console.log('>>>> CATCH >>', err))
}

export function fetchItemsWithFilter(query) {
  if (!window) return
  const url = `${
    window.location.origin
  }/api/dataentities/${DATA_ENTITY}/search?${query}&_schema=${SCHEMA_NAME}&_fields=_all`
  return axios({
    method: 'get',
    url,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res)
    .catch(err => console.log('>>>> CATCH >>', err))
}

export function saveDocuments(documents) {
  if (!window) return
  Object.keys(documents).forEach(key => {
    if (documents[key].status === 'new') {
      const url = `${
        window.location.origin
      }/api/dataentities/${DATA_ENTITY}/documents`
      const docToSend = documents[key].document
      delete docToSend.id
      return axios({
        method: 'patch',
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(docToSend),
      })
        .then(res => res.data) // TO DO: set doc id with the new one from the response
        .catch(err => console.log('>>>> CATCH >>', err))
    } else if (documents[key].status === 'staging') {
      const url = `${
        window.location.origin
      }/api/dataentities/${DATA_ENTITY}/documents/${key}`
      return axios({
        method: 'patch',
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(documents[key].document),
      })
        .then(res => res.data)
        .then(res => console.log('saved doc! res:', res))
        .catch(err => console.log('>>>> CATCH >>', err))
    }
  })
}

export function deleteDocuments(documents) {
  if (!window) return
  documents.forEach(key => {
    const url = `${
      window.location.origin
    }/api/dataentities/${DATA_ENTITY}/documents/${key}`
    return axios({
      method: 'delete',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.data)
      .catch(err => console.log('>>>> CATCH >>', err))
  })
}
