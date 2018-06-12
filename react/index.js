import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import Header from './components/Header'
import DialogModal from './components/DialogModal'
import TablesPannel from './components/TablesPannel'
import {
  getVtableDocuments,
} from './fetcher'

import { Spinner } from 'vtex.styleguide'

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
        <TablesPannel items={items} />
      </div>
    )
  }
}
