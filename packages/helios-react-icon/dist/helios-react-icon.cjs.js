'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

var _excluded = ["color", "size"];
var ArrowDownRight = function ArrowDownRight(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.707 6.293a1 1 0 00-1.414 1.414L14.586 16H7a1 1 0 100 2h10.003a.996.996 0 00.71-.3.997.997 0 00.287-.697V7a1 1 0 10-2 0v7.586L7.707 6.293z"
  }));
};
ArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowDownRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$1 = ["color", "size"];
var ArrowLeft = function ArrowLeft(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$1);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.707 5.707a1 1 0 00-1.414-1.414l-7 7a1 1 0 000 1.414l7 7a1 1 0 001.414-1.414L7.414 13H19a1 1 0 100-2H7.414l5.293-5.293z"
  }));
};
ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$2 = ["color", "size"];
var ArrowLeftCircle = function ArrowLeftCircle(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$2);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.707 8.707a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L10.414 13H16a1 1 0 100-2h-5.586l2.293-2.293z"
  }));
};
ArrowLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowLeftCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$3 = ["color", "size"];
var ArrowRight = function ArrowRight(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$3);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.707 4.293a1 1 0 10-1.414 1.414L16.586 11H5a1 1 0 100 2h11.586l-5.293 5.293a1 1 0 001.414 1.414l7-7a1 1 0 000-1.414l-7-7z"
  }));
};
ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$4 = ["color", "size"];
var ArrowRightCircle = function ArrowRightCircle(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$4);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.707 7.293a1 1 0 10-1.414 1.414L13.586 11H8a1 1 0 100 2h5.586l-2.293 2.293a1 1 0 001.414 1.414l4-4a1 1 0 000-1.414l-4-4z"
  }));
};
ArrowRightCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowRightCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$5 = ["color", "size"];
var ArrowUp = function ArrowUp(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$5);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.707 4.293a1 1 0 00-1.414 0l-7 7a1 1 0 101.414 1.414L11 7.414V19a1 1 0 102 0V7.414l5.293 5.293a1 1 0 001.414-1.414l-7-7z"
  }));
};
ArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$6 = ["color", "size"];
var ArrowUpCircle = function ArrowUpCircle(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$6);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.707 7.293a1 1 0 00-1.414 0l-4 4a1 1 0 101.414 1.414L11 10.414V16a1 1 0 102 0v-5.586l2.293 2.293a1 1 0 001.414-1.414l-4-4z"
  }));
};
ArrowUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowUpCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$7 = ["color", "size"];
var ArrowUpLeft = function ArrowUpLeft(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$7);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 6a1 1 0 00-1 1v10a1 1 0 102 0V9.34l8.293 8.367a1 1 0 001.414-1.414L9.487 8H17a1 1 0 100-2H7z"
  }));
};
ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$8 = ["color", "size"];
var ArrowUpRight = function ArrowUpRight(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$8);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 6a1 1 0 000 2h7.513l-8.22 8.293a1 1 0 101.414 1.414L16 9.341V17a1 1 0 102 0V7a1 1 0 00-1-1H7z"
  }));
};
ArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowUpRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$9 = ["color", "size"];
var AtSign = function AtSign(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$9);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.5 1.288a11 11 0 104.188 19.446 1 1 0 10-1.216-1.588A9 9 0 1121 12v1a2 2 0 01-4 0V8a1 1 0 00-2 0 5 5 0 10.74 7.319A3.996 3.996 0 0019 17a4 4 0 004-4v-1a11 11 0 00-8.5-10.712zM9 12a3 3 0 116 0 3 3 0 01-6 0z"
  }));
};
AtSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AtSign.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$a = ["color", "size"];
var Award = function Award(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$a);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2a6 6 0 100 12 6 6 0 000-12zM4 8a8 8 0 1116 0A8 8 0 014 8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.659 12.889a1 1 0 011.122.86l1.21 9.12a1 1 0 01-1.506.989L12 21.166l-4.486 2.692a1 1 0 01-1.505-.99l1.21-9.11a1 1 0 011.982.264l-.937 7.053 3.222-1.933a1 1 0 011.028 0l3.222 1.933-.937-7.063a1 1 0 01.86-1.123z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24"
  }))));
};
Award.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Award.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$b = ["color", "size"];
var BarChart = function BarChart(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$b);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 9a1 1 0 011 1v10a1 1 0 11-2 0V10a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 3a1 1 0 011 1v16a1 1 0 11-2 0V4a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 15a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"
  }));
};
BarChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BarChart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$c = ["color", "size"];
var BarChart2 = function BarChart2(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$c);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 9a1 1 0 011 1v10a1 1 0 11-2 0V10a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3a1 1 0 011 1v16a1 1 0 11-2 0V4a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 13a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z"
  }));
};
BarChart2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BarChart2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$d = ["color", "size"];
var Battery = function Battery(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$d);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 7a1 1 0 00-1 1v8a1 1 0 001 1h14a1 1 0 001-1V8a1 1 0 00-1-1H3zM0 8a3 3 0 013-3h14a3 3 0 013 3v8a3 3 0 01-3 3H3a3 3 0 01-3-3V8z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23 10a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
  }));
};
Battery.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Battery.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$e = ["color", "size"];
var BatteryCharging = function BatteryCharging(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$e);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.832 6.555a1 1 0 00-1.664-1.11l-4 6A1 1 0 007 13h4.132l-2.964 4.445a1 1 0 101.664 1.11l4-6A1 1 0 0013 11H8.869l2.963-4.445zM3 7a1 1 0 00-1 1v8a1 1 0 001 1h2a1 1 0 110 2H3a3 3 0 01-3-3V8a3 3 0 013-3h3.19a1 1 0 010 2H3zm11-1a1 1 0 011-1h2a3 3 0 013 3v8a3 3 0 01-3 3h-3.19a1 1 0 110-2H17a1 1 0 001-1V8a1 1 0 00-1-1h-2a1 1 0 01-1-1zm9 4a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
  }));
};
BatteryCharging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BatteryCharging.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$f = ["color", "size"];
var Bell = function Bell(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$f);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3a6 6 0 00-6 6v5a4 4 0 01-.536 2h13.072A4 4 0 0118 14V9a6 6 0 00-6-6zm10 13a2 2 0 01-2-2V9A8 8 0 004 9v5a2 2 0 01-2 2 1 1 0 100 2h20v-2zM9.768 20.135a1 1 0 011.367.363 1 1 0 001.73 0 1 1 0 011.73 1.004 3 3 0 01-5.19 0 1 1 0 01.363-1.367z"
  }));
};
Bell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Bell.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$g = ["color", "size"];
var BellOff = function BellOff(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$g);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M.293.293a1 1 0 011.414 0l4.779 4.779h.001l17.22 17.22a1 1 0 01-1.414 1.415L16.586 18H2a1 1 0 110-2 2 2 0 002-2V9c0-1.038.202-2.057.584-3.001L.293 1.707a1 1 0 010-1.414zm5.877 7.29L14.586 16H5.464A4 4 0 006 14V9c0-.481.058-.956.17-1.416z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.045 2.997a6 6 0 00-2.994.774 1 1 0 01-.982-1.742A8 8 0 0120 9.001V13a1 1 0 11-2 0V9a6.003 6.003 0 00-5.955-6.003z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.768 20.135a1 1 0 011.367.363 1 1 0 001.73 0 1 1 0 011.73 1.004 3 3 0 01-5.19 0 1 1 0 01.363-1.367z"
  }));
};
BellOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BellOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$h = ["color", "size"];
var Bluetooth = function Bluetooth(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$h);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.617.076a1 1 0 011.09.217l5.5 5.5a1 1 0 010 1.414L13.414 12l4.793 4.793a1 1 0 010 1.414l-5.5 5.5A1 1 0 0111 23v-8.586l-3.793 3.793a1 1 0 01-1.414-1.414L10.586 12 5.793 7.207a1 1 0 011.414-1.414L11 9.586V1a1 1 0 01.617-.924zM13 14.414l3.086 3.086L13 20.586v-6.172zm0-4.828V3.414L16.086 6.5 13 9.586z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24"
  }))));
};
Bluetooth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Bluetooth.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$i = ["color", "size"];
var Bold = function Bold(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$i);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 4a1 1 0 011-1h8a5 5 0 110 10H6a1 1 0 01-1-1V4zm2 1v6h7a3 3 0 000-6H7z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 12a1 1 0 011-1h9a5 5 0 110 10H6a1 1 0 01-1-1v-8zm2 1v6h8a3 3 0 000-6H7z"
  }));
};
Bold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Bold.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$j = ["color", "size"];
var Book = function Book(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$j);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.5 18A1.5 1.5 0 005 19.5a1 1 0 11-2 0A3.5 3.5 0 016.5 16H20a1 1 0 110 2H6.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.5 3A1.5 1.5 0 005 4.5v15A1.5 1.5 0 006.5 21H19V3H6.5zm0-2H20a1 1 0 011 1v20a1 1 0 01-1 1H6.5A3.5 3.5 0 013 19.5v-15A3.5 3.5 0 016.5 1z"
  }));
};
Book.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Book.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$k = ["color", "size"];
var Bookmark = function Bookmark(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$k);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 4a1 1 0 00-1 1v14.057l5.419-3.87a1 1 0 011.162 0L18 19.056V5a1 1 0 00-1-1H7zM4.879 2.879A3 3 0 017 2h10a3 3 0 013 3v16a1 1 0 01-1.581.814L12 17.229l-6.419 4.585A1 1 0 014 21V5a3 3 0 01.879-2.121z"
  }));
};
Bookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Bookmark.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$l = ["color", "size"];
var BookOpen = function BookOpen(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$l);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 3a1 1 0 011-1h6a5 5 0 015 5v14a1 1 0 11-2 0 2 2 0 00-2-2H2a1 1 0 01-1-1V3zm10 14.536V7a3 3 0 00-3-3H3v13h6a4 4 0 012 .536z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.464 3.464A5 5 0 0116 2h6a1 1 0 011 1v15a1 1 0 01-1 1h-7a2 2 0 00-2 2 1 1 0 11-2 0V7a5 5 0 011.464-3.536zM13 17.536A4 4 0 0115 17h6V4h-5a3 3 0 00-3 3v10.536z"
  }));
};
BookOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BookOpen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$m = ["color", "size"];
var Box = function Box(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$m);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.556 2.345h-.001l-7.998 4h-.002A1 1 0 003 7.24v9.527a1 1 0 00.55.9l7.997 3.999a1.002 1.002 0 00.896 0l8-4 .002-.002A1 1 0 0021 16.77V7.242a1 1 0 00-.555-.895l-.002-.002-7.998-3.998a1 1 0 00-.89 0zm1.334-.895l.445-.896a3 3 0 00-2.67 0l-.002.002-7.998 3.998-.001.001A3 3 0 001 7.24v9.518a3 3 0 001.65 2.696l.003.001 8 4a3 3 0 002.684 0l7.998-3.998.001-.001A3 3 0 0023 16.771V7.24a3.002 3.002 0 00-1.664-2.685h-.001l-7.998-4-.447.895z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.426 5.713a1 1 0 011.341-.447L12 9.882l9.233-4.616a1 1 0 11.894 1.788l-9.68 4.84a1 1 0 01-.894 0l-9.68-4.84a1 1 0 01-.447-1.341z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 10a1 1 0 011 1v11.76a1 1 0 11-2 0V11a1 1 0 011-1z"
  }));
};
Box.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Box.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$n = ["color", "size"];
var Briefcase = function Briefcase(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$n);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 8a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1H4zM1 9a3 3 0 013-3h16a3 3 0 013 3v10a3 3 0 01-3 3H4a3 3 0 01-3-3V9z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.879 2.879A3 3 0 0110 2h4a3 3 0 013 3v16a1 1 0 11-2 0V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v16a1 1 0 11-2 0V5a3 3 0 01.879-2.121z"
  }));
};
Briefcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Briefcase.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$o = ["color", "size"];
var Calendar = function Calendar(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$o);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1H5zM2 6a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V6z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 1a1 1 0 011 1v4a1 1 0 11-2 0V2a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 1a1 1 0 011 1v4a1 1 0 01-2 0V2a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 10a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z"
  }));
};
Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Calendar.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$p = ["color", "size"];
var Camera = function Camera(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$p);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.168 2.445A1 1 0 019 2h6a1 1 0 01.832.445L17.535 5H21a3 3 0 013 3v11a3 3 0 01-3 3H3a3 3 0 01-3-3V8a3 3 0 013-3h3.465l1.703-2.555zM9.535 4L7.832 6.555A1 1 0 017 7H3a1 1 0 00-1 1v11a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1h-4a1 1 0 01-.832-.445L14.465 4h-4.93z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 10a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z"
  }));
};
Camera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Camera.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$q = ["color", "size"];
var CameraOff = function CameraOff(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$q);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M.293.293a1 1 0 011.414 0l22 22a1 1 0 01-1.414 1.414l-22-22a1 1 0 010-1.414z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 3a1 1 0 011-1h6a1 1 0 01.832.445L17.535 5H21a3 3 0 013 3v9.34a1 1 0 11-2 0V8a1 1 0 00-1-1h-4a1 1 0 01-.832-.445L14.465 4H9a1 1 0 01-1-1zM3 7a1 1 0 00-1 1v11a1 1 0 001 1h15.586l-3.262-3.262a4.997 4.997 0 01-5.043.986 5 5 0 01-2.019-8.048L5.586 7H3zm7.413 1.999L6.707 5.293A1 1 0 006 5H3a3 3 0 00-3 3v11a3 3 0 003 3h18a1 1 0 00.707-1.707l-5.706-5.706a1.339 1.339 0 00-.026-.027L10.44 9.025A.978.978 0 0010.413 9zm-.733 2.095a2.996 2.996 0 00-.523 2.946 3 3 0 004.749 1.28L9.68 11.094z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24"
  }))));
};
CameraOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CameraOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$r = ["color", "size"];
var Cast = function Cast(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$r);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 5a1 1 0 00-1 1v2a1 1 0 11-2 0V6a3 3 0 013-3h16a3 3 0 013 3v12a3 3 0 01-3 3h-6a1 1 0 110-2h6a1 1 0 001-1V6a1 1 0 00-1-1H4zm-2.994 6.94a1 1 0 011.105-.884 10 10 0 018.833 8.834 1 1 0 11-1.988.22 8 8 0 00-7.067-7.066 1 1 0 01-.883-1.104zm.014 3.96a1 1 0 011.18-.78 6 6 0 014.68 4.68 1 1 0 11-1.96.4 4 4 0 00-3.12-3.12 1 1 0 01-.78-1.18z"
  }));
};
Cast.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Cast.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$s = ["color", "size"];
var Check = function Check(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$s);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
  }));
};
Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Check.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$t = ["color", "size"];
var CheckCircle = function CheckCircle(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$t);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.663 3.773A9 9 0 1021 12v-.919a1 1 0 112 0V12A11.002 11.002 0 018.188 22.313a11 11 0 118.289-20.366 1 1 0 11-.814 1.826z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.707 3.293a1 1 0 010 1.414l-10 10.01a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L12 12.595l9.293-9.302a1 1 0 011.414 0z"
  }));
};
CheckCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CheckCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$u = ["color", "size"];
var CheckSquare = function CheckSquare(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$u);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.707 3.293a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L12 12.586l9.293-9.293a1 1 0 011.414 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 4a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-7a1 1 0 112 0v7a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h11a1 1 0 110 2H5z"
  }));
};
CheckSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CheckSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$v = ["color", "size"];
var ChevronDown = function ChevronDown(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$v);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
  }));
};
ChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$w = ["color", "size"];
var ChevronLeft = function ChevronLeft(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$w);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.707 5.293a1 1 0 010 1.414L10.414 12l5.293 5.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
  }));
};
ChevronLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$x = ["color", "size"];
var ChevronRight = function ChevronRight(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$x);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L13.586 12 8.293 6.707a1 1 0 010-1.414z"
  }));
};
ChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$y = ["color", "size"];
var ChevronsDown = function ChevronsDown(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$y);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.293 12.293a1 1 0 011.414 0L12 16.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.293 5.293a1 1 0 011.414 0L12 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
  }));
};
ChevronsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronsDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$z = ["color", "size"];
var ChevronsLeft = function ChevronsLeft(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$z);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.707 6.293a1 1 0 010 1.414L7.414 12l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.707 6.293a1 1 0 010 1.414L14.414 12l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
  }));
};
ChevronsLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronsLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$A = ["color", "size"];
var ChevronsRight = function ChevronsRight(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$A);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.293 6.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L16.586 12l-4.293-4.293a1 1 0 010-1.414z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.293 6.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L9.586 12 5.293 7.707a1 1 0 010-1.414z"
  }));
};
ChevronsRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronsRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$B = ["color", "size"];
var ChevronsUp = function ChevronsUp(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$B);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.293 5.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.293 12.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 14.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5z"
  }));
};
ChevronsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronsUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$C = ["color", "size"];
var ChevronUp = function ChevronUp(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$C);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.293 8.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6z"
  }));
};
ChevronUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$D = ["color", "size"];
var Chrome = function Chrome(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$D);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 9a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 8a1 1 0 011-1h9.17a1 1 0 110 2H12a1 1 0 01-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.45 5.194a1 1 0 011.366.366l4.59 7.94a1 1 0 01-1.732 1l-4.59-7.94a1 1 0 01.366-1.366z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.96 13.134a1 1 0 01.366 1.366l-4.58 7.94a1 1 0 11-1.732-1l4.58-7.94a1 1 0 011.366-.366z"
  }));
};
Chrome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Chrome.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$E = ["color", "size"];
var Circle = function Circle(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$E);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
  }));
};
Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Circle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$F = ["color", "size"];
var Clipboard = function Clipboard(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$F);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 5a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-2a1 1 0 110-2h2a3 3 0 013 3v14a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h2a1 1 0 010 2H6z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 3a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2V3zm8 0H9v2h6V3z"
  }));
};
Clipboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Clipboard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$G = ["color", "size"];
var Clock = function Clock(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$G);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5a1 1 0 011 1v5.382l3.447 1.724a1 1 0 11-.894 1.788l-4-2A1 1 0 0111 12V6a1 1 0 011-1z"
  }));
};
Clock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Clock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$H = ["color", "size"];
var Cloud = function Cloud(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$H);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.873 3.559A9 9 0 0117.479 9H18a6 6 0 010 12H9A9 9 0 01.01 12.518L0 12.5l.007-.011a8.999 8.999 0 015.862-8.93h.004zm.69 1.876a7.007 7.007 0 00-3.105 2.28A7 7 0 008.977 19H18a4 4 0 100-8h-1.26a1 1 0 01-.968-.75 7 7 0 00-9.208-4.815z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24"
  }))));
};
Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Cloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$I = ["color", "size"];
var CloudDrizzle = function CloudDrizzle(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$I);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 18a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 18a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 12a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 20a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 14a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.082.047A9 9 0 0117.48 6h.522a6 6 0 012.4 11.496 1 1 0 11-.802-1.832A4 4 0 0017.999 8H16.74a1 1 0 01-.968-.75 7 7 0 10-11.148 7.219 1 1 0 01-1.248 1.562A9 9 0 018.082.047z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24"
  }))));
};
CloudDrizzle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudDrizzle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$J = ["color", "size"];
var CloudRain = function CloudRain(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$J);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 12a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 14a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.082.047A9 9 0 0117.48 6h.522a6 6 0 012.4 11.496 1 1 0 11-.802-1.832A4 4 0 0017.999 8H16.74a1 1 0 01-.968-.75 7 7 0 10-11.148 7.219 1 1 0 01-1.248 1.562A9 9 0 018.082.047z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24"
  }))));
};
CloudRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudRain.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$K = ["color", "size"];
var Code = function Code(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$K);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L20.586 12l-5.293-5.293a1 1 0 010-1.414z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.707 5.293a1 1 0 010 1.414L3.414 12l5.293 5.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
  }));
};
Code.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Code.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$L = ["color", "size"];
var CloudLightning = function CloudLightning(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$L);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 17.9c-.5 0-.9-.3-1-.8-.1-.5.2-1.1.8-1.2 2.2-.4 3.6-2.6 3.1-4.7-.4-1.9-2-3.2-3.9-3.2h-1.3c-.5 0-.9-.3-1-.8-1-3.7-4.8-6-8.5-5-1.8.5-3.3 1.6-4.2 3.2-1 1.7-1.3 3.5-.8 5.4.5 1.9 1.7 3.4 3.4 4.4.5.2.7.8.4 1.3-.3.5-.9.7-1.4.4C2.4 15.7.9 13.7.2 11.3c-.6-2.3-.3-4.8 1-6.8C2.4 2.4 4.4 1 6.7.4c4.5-1.2 9.2 1.4 10.7 5.7h.6c2.8 0 5.3 2 5.9 4.8.7 3.2-1.4 6.4-4.7 7.1-.1-.1-.1-.1-.2-.1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 24c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l3-4.4H9c-.4 0-.7-.2-.9-.5-.2-.3-.2-.7 0-1l4-6c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-3 4.4H15c.4 0 .7.2.9.5.2.3.2.7 0 1l-4 6c-.3.3-.6.5-.9.5z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24"
  }))));
};
CloudLightning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudLightning.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$M = ["color", "size"];
var CloudOff = function CloudOff(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$M);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.9 21c-3.3 0-6.3-1.8-7.9-4.6-1.2-2.1-1.4-4.5-.8-6.8.7-2.3 2.2-4.2 4.3-5.4.5-.3 1.1-.2 1.4.3.2.5.1 1.1-.4 1.4-1.6.9-2.8 2.4-3.3 4.2-.5 1.8-.3 3.7.6 5.3C4 17.7 6.4 19.1 9 19h9c.5 0 .9-.1 1.4-.2.5-.2 1.1.1 1.3.6.2.5-.1 1.1-.6 1.3-.7.2-1.3.4-2 .4H9c0-.1-.1-.1-.1-.1zm13.7-3c-.1 0-.3 0-.4-.1-.5-.2-.7-.8-.5-1.3.9-2-.1-4.4-2.1-5.2-.5-.2-1-.3-1.6-.3h-1.3c-.5 0-.9-.3-1-.8-.7-2.9-3.1-5-6.1-5.3-.6 0-1-.5-.9-1.1 0-.5.5-1 1.1-.9 3.5.3 6.5 2.7 7.7 6h.5c.8 0 1.6.2 2.3.5 3 1.3 4.5 4.8 3.2 7.9-.1.3-.5.6-.9.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 24c-.3 0-.5-.1-.7-.3l-22-22C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l22 22c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24"
  }))));
};
CloudOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

var _excluded$N = ["color", "size"];
var CloudSnow = function CloudSnow(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, _excluded$N);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 18.6c-.4 0-.8-.2-.9-.6-.2-.5 0-1.1.5-1.3 1-.4 1.7-1.2 2.1-2.2.4-1 .4-2.1-.1-3.1C21 9.9 19.6 9 18 9h-1.3c-.5 0-.9-.3-1-.8-1-3.7-4.8-6-8.5-5s-6 4.8-5 8.5c.4 1.5 1.2 2.8 2.4 3.7.4.3.5 1 .2 1.4-.3.4-1 .5-1.4.2a9.15 9.15 0 01-3.1-4.8C-1 7.4 1.9 2.5 6.7 1.3 11.3.1 15.9 2.7 17.4 7h.6c2.4 0 4.5 1.4 5.5 3.6.6 1.5.7 3.1.1 4.6-.6 1.5-1.7 2.7-3.2 3.3-.1.1-.3.1-.4.1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 17c-.3 0-.5-.1-.7-.3-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4 0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.4-.4 1-.4 1.4 0 .1.1.2.2.2.3.1.1.1.3.1.4 0 .1 0 .3-.1.4-.1.1-.1.2-.2.3-.2.2-.4.3-.7.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 21c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.1-.1.2-.2.3-.2.4-.2.8-.1 1.1.2.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 19c-.1 0-.3 0-.4-.1-.1 0-.2-.1-.3-.2-.2-.2-.3-.4-.3-.7 0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.4-.4 1-.4 1.4 0 .2.2.3.5.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 23c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.4-.4 1-.4 1.4 0 .1.1.2.2.2.3 0 .1.1.3.1.4 0 .3-.1.5-.3.7-.1.1-.2.2-.3.2-.1 0-.3.1-.4.1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 17c-.3 0-.5-.1-.7-.3-.1-.1-.2-.2-.2-.3 0-.1-.1-.3-.1-.4 0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.4-.4 1-.4 1.4 0 .1.1.2.2.2.3 0 .1.1.3.1.4 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.6-.3.9-.3.1 0 .1 0 .2.1.1 0 .1 0 .2.1 0 0 .1.1.2.1.2.2.3.5.3.7 0 .3-.1.5-.3.7-.3.2-.5.3-.8.3z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24"
  }))));
};
CloudSnow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudSnow.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.ArrowDownRight = ArrowDownRight;
exports.ArrowLeft = ArrowLeft;
exports.ArrowLeftCircle = ArrowLeftCircle;
exports.ArrowRight = ArrowRight;
exports.ArrowRightCircle = ArrowRightCircle;
exports.ArrowUp = ArrowUp;
exports.ArrowUpCircle = ArrowUpCircle;
exports.ArrowUpLeft = ArrowUpLeft;
exports.ArrowUpRight = ArrowUpRight;
exports.AtSign = AtSign;
exports.Award = Award;
exports.BarChart = BarChart;
exports.BarChart2 = BarChart2;
exports.Battery = Battery;
exports.BatteryCharging = BatteryCharging;
exports.Bell = Bell;
exports.BellOff = BellOff;
exports.Bluetooth = Bluetooth;
exports.Bold = Bold;
exports.Book = Book;
exports.BookOpen = BookOpen;
exports.Bookmark = Bookmark;
exports.Box = Box;
exports.Briefcase = Briefcase;
exports.Calendar = Calendar;
exports.Camera = Camera;
exports.CameraOff = CameraOff;
exports.Cast = Cast;
exports.Check = Check;
exports.CheckCircle = CheckCircle;
exports.CheckSquare = CheckSquare;
exports.ChevronDown = ChevronDown;
exports.ChevronLeft = ChevronLeft;
exports.ChevronRight = ChevronRight;
exports.ChevronUp = ChevronUp;
exports.ChevronsDown = ChevronsDown;
exports.ChevronsLeft = ChevronsLeft;
exports.ChevronsRight = ChevronsRight;
exports.ChevronsUp = ChevronsUp;
exports.Chrome = Chrome;
exports.Circle = Circle;
exports.Clipboard = Clipboard;
exports.Clock = Clock;
exports.Cloud = Cloud;
exports.CloudDrizzle = CloudDrizzle;
exports.CloudLightning = CloudLightning;
exports.CloudOff = CloudOff;
exports.CloudRain = CloudRain;
exports.CloudSnow = CloudSnow;
exports.Code = Code;
