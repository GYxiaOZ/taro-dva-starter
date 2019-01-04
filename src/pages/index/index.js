import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.less'

@connect(
  ({ counter }) => ({
    counter,
  }),
  dispatch => ({
    add() {
      dispatch({ type: 'counter/add' })
    },
    dec() {
      dispatch({ type: 'counter/minus' })
    },
    asyncAdd() {
      dispatch({ type: 'counter/asyncAdd' })
    },
  })
)
class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>
          +
        </Button>
        <Button className='dec_btn' onClick={this.props.dec}>
          -
        </Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>
          async
        </Button>
        <View>
          <Text>{this.props.counter.num}</Text>
        </View>
        <View>
          <Text>Hello, World</Text>
        </View>
      </View>
    )
  }
}

export default Index