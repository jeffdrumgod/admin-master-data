import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'vtex.styleguide'

class TablesPannel extends Component {
  render() {
    const { items } = this.props
    return (
      <Fragment>
        <h2 className="mh6">Tables (VTable)</h2>
        <div className="dt dt--fixed ph6">
          {items.map((item, index) =>{
            let tables = ': '
            item.tables.forEach((table, index) => {
              tables += `${table.label}${item.tables.length === (index+1) ? '.':', '}`
            })
            let schemas = ': '
            item.tables.forEach((table, index) => {
              schemas += `${table.model}${item.tables.length === (index+1) ? '.':', '}`
            })
            return (
              <div className="dtc tc pa4 pointer" style={{ height: '300px', width: '150px' }}>
                <Card fullWidth key={index}>
                  <h3 className="">{item.title}</h3>
                  <p className="pa2">
                    <span className="b">
                      Tables
                    </span>
                    {tables}
                  </p>
                  <p className="pa2">
                    <span className="b">
                      Schemas
                    </span>
                    {schemas}
                  </p>
                </Card>
              </div>
            )
          })}
        </div>
      </Fragment>
    )
  }
}

TablesPannel.propTypes = {
  items: PropTypes.array,
}

export default TablesPannel