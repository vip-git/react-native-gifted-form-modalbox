var React = require('react');
var {
  View,
  Text
} = require('react-native')
var createReactClass = require('create-react-class');

var WidgetMixin = require('../mixins/WidgetMixin.js');


module.exports = createReactClass({
  mixins: [WidgetMixin],

  
  getDefaultProps() {
    return {
      type: 'ValidationErrorWidget',
    };
  },
  
  render() {
    return (
      <View>
        <View style={this.getStyle('validationErrorRow')}>
          <Text
            style={this.getStyle('validationError')}
            {...this.props}
          >
            {this.props.message}
          </Text>
        </View>
      </View>
    );
  },
  

  defaultStyles: {
    validationErrorRow: {
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
    validationError: {
      fontSize: 12,
      color: '#ff001A',
    },
  },
  
});