import React, { Component } from 'react'
import { ListView } from 'reat-native'
import { connect } from 'react-redux'

class LibraryList extends Component {
  componentWillMout () {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithWindows(this.props.libraries)

  }

  renderRow () {

  }

  render () {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)