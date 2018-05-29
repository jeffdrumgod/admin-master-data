import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import Header from './components/Header'
import DialogModal from './components/DialogModal'
import {
  getVtableDocuments,
} from './fetcher'

import Spinner from '@vtex/styleguide/lib/Spinner'
import Card from '@vtex/styleguide/lib/Card'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      totalDocuments: null,
      dialog: {
        message: null,
        isOpen: false,
        callback: () => {},
      },
      loading: true,
    }
  }

  componentWillMount() {
    // this handles topbar loading
    window.postMessage({ action: { type: 'START_LOADING' } }, '*')
  }

  componentDidMount() {
    getVtableDocuments()
      .then(res => {
        const totalDocuments = res.headers['rest-content-range'].split('/')[1]
        this.setState({ totalDocuments, items: res.data, loading: false })
        // this handles topbar loading
        window.postMessage({ action: { type: 'STOP_LOADING' } }, '*')
      })
  }

  render() {
    const { items, dialog, totalDocuments, loading } = this.state

    if (!items) {
      return (
        <div className="h-100">
          <Header />
          {
            loading
            ? <div className="flex flex-column items-center justify-center pa10 tc">
                <Spinner />
                <span className="b f5 pa4">
                  <FormattedMessage id="customers.home.loadingConfigs" />
                </span>
              </div>
            : <span className="b f3 flex flex-column items-center justify-center pa10 tc">
                <FormattedMessage id="customers.home.somethingWrong" />
              </span>
          }
          
          <DialogModal
            isOpen={dialog.isOpen}
            onConfirm={dialog.callback}
            message={dialog.message}
          />
        </div>
      )
    }

    return (
      <div className="h-100">
        <Header />
        <DialogModal
          isOpen={dialog.isOpen}
          onConfirm={dialog.callback}
          message={dialog.message}
        />
        <div className="flex items-center ph6">
          {items.map((item, index) =>{
            console.log(item)
            let tables = ''
            item.tables.forEach((table, index) => {
              tables += `${table.label}${item.tables.length === (index+1) ? '.':','}`
            })
            return (
              <div className="pa3">
                <Card key={index}>
                  <h3>{item.title}</h3>
                  <p>Tables: {tables}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
