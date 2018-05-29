import {
  DATA_ENTITY,
  SECTION_LABEL,
  CANONICAL_PROPERTIES,
} from '../constants'

export function generateConfigs(schema) {
  // predetermining order for this table
  const fields = {
    email: schema.properties.email,
    approved: schema.properties.approved,
    birthDate: schema.properties.birthDate,
    firstName: schema.properties.firstName,
    lastName: schema.properties.lastName,
    isNewsletterOptIn: schema.properties.isNewsletterOptIn,
    ...schema.properties,
  }

  schema.properties = fields

  // composing fields to use in UIschema
  const filedNames = Object.keys(fields)
  filedNames.forEach(key => {
    if (CANONICAL_PROPERTIES.includes(key)) {
      delete fields[key]
    } else {
      if ( // if type is boolean, width can be smoler
        fields[key].type === 'boolean' ||
        (Array.isArray(fields[key].type) &&
        fields[key].type.includes('boolean'))
      ) {
        fields[key].width = 100
      } else {
        fields[key].width = 200
      }
    }
  })
  const updatedFieldNames = Object.keys(fields)

  // composing UIschema
  const UIschema = {
    title: DATA_ENTITY,
    fields,
    list: updatedFieldNames,
    editor: {
      settings: {
        sections: [{
          name: SECTION_LABEL,
          fields: updatedFieldNames,
        }]
      }
    }
  }

  return { schema, UIschema }
}

export function generateMockedIndexedFields() {
  return {
    email: {
      icon: 'font',
      isIndex: true,
      isRequired: true,
      name: 'email',
      type: 'string',
      width: 200
    },
    firstName: {
      icon: 'font',
      isIndex: true,
      isRequired: false,
      name: 'firstName',
      type: 'string',
      width: 200
    },
    lastName: {
      icon: 'font',
      isIndex: true,
      isRequired: false,
      name: 'lastName',
      type: 'string',
      width: 200
    },
    approved: {
      icon: 'font',
      isIndex: true,
      isRequired: false,
      name: 'approved',
      type: 'boolean',
      width: 200
    },
    id: {
      icon: 'font',
      isIndex: true,
      isRequired: false,
      name: 'id',
      type: 'string',
      width: 200
    },
    document: {
      icon: 'font',
      isIndex: true,
      isRequired: false,
      name: 'document',
      type: 'string',
      width: 200
    },
    gender: {
      icon: 'font',
      isIndex: true,
      isRequired: false,
      name: 'gender',
      type: 'string',
      width: 200
    },
    isNewsletterOptIn: {
      icon: 'font',
      isIndex: true,
      isRequired: false,
      name: 'isNewsletterOptIn',
      type: 'boolean',
      width: 200
    },
  }
}