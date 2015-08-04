const React     = require('react');
const PureMixin = require('react/lib/ReactComponentWithPureRenderMixin');
const dom = React.findDOMNode;
const $ = jQuery;

const PalettePicker = React.createClass({
  mixins: [PureMixin],


  componentDidMount(){
    $(dom(this))
      .colorpicker()
      .on('changeColor.colorpicker', this.handleColorChange);
  },

  componentWillUnmount(){
    $(dom(this)).colorpicker('destroy');
  },

  componentDidUpdate(){
    $(dom(this)).colorpicker('setValue', this.props.color);
  },

  open(){
    $(dom(this)).colorpicker('show');
  },

  handleColorChange(e){
    this.props.update(e.target.value);
  },

  render(){
    return (
      <input type="text" defaultValue={this.props.color} />
    );
  }
});

module.exports = PalettePicker;