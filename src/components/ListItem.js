import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
// * as actions means I want to import many thigns from a file at one time
import * as actions from '../actions'

class ListItem extends Component {
  renderDescription () {
    const { library, selectedLibraryId } = this.props

    if (library.id === selectedLibraryId) {
      return (
        <Text>{library.description}</Text>
      )
    }
  }

  render () {
    const { titleStyle } = styles
    const { id, title } = this.props.library

    return (
      <TouchableWithoutFeedback
      onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem)
// connect will link actions with the class component as well as automaticall dispatch the actions to the reducers
