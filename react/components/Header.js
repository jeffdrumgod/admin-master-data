import React from 'react'
import { FormattedMessage } from 'react-intl'

export default function Header() {
  return (
    <div
      className="w-100 bg-near-white pl7 pt8 pb5 b f2 mb7"
    >
      <FormattedMessage id="masterdata.home.title" />
    </div>
  )
}
