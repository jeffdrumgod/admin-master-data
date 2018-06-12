import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Modal, Button } from 'vtex.styleguide'

export default class DialogModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen || false,
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.isOpen !== this.props.isOpen) {
  //     this.setState({ isOpen: nextProps.isOpen })
  //   }
  // }

  handleModalVisibilityToggle = () => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render() {
    const { isOpen } = this.state
    const { message, onConfirm } = this.props
    return (
      <Modal
        centered
        isOpen={isOpen}
        onClose={this.handleModalVisibilityToggle}
      >
        <div className="flex flex-column tc pa3">
          <div className="f3">Warning</div>
          <div>{message}</div>
          <div className="tr">
            <span className="mr4">
              <Button
                primary
                onClick={() => {
                  this.handleModalVisibilityToggle()
                  onConfirm()
                }}
              >
                YES
              </Button>
            </span>
            <span>
              <Button secondary onClick={this.handleModalVisibilityToggle}>
                CANCEL
              </Button>
            </span>
          </div>
        </div>
      </Modal>
    )
  }
}

DialogModal.propTypes = {
  onConfirm: PropTypes.func,
  message: PropTypes.string,
  isOpen: PropTypes.bool,
}
