import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
// * as actions means I want to import many thigns from a file at one time
import * as actions from '../actions'

class ListItem extends Component {
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

export default connect(null, actions)(ListItem)
// connect will link actions with the class component as well as automaticall dispatch the actions to the reducers
