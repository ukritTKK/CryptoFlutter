'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactNative = require('react-native');
var Intl = _interopDefault(require('react-intl'));

var FormattedDate = function (props) {
  return React__default.createElement(
    Intl.FormattedDate,
    props,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedDate.propTypes = {
  style: PropTypes.any
};

var FormattedHTMLMessage = function (props) {
  return React__default.createElement(
    Intl.FormattedHTMLMessage,
    props,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedHTMLMessage.propTypes = {
  style: PropTypes.any
};

var FormattedMessage = function (props) {
  return React__default.createElement(
    Intl.FormattedMessage,
    props,
    function () {
      for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }

      var newNodes = nodes.map(function (node) {
        if (!React.isValidElement(node)) {
          return React__default.createElement(
            reactNative.Text,
            { style: props.style },
            node
          );
        }
        return node;
      });
      return React.createElement.apply(undefined, [reactNative.Text, { style: props.style }].concat(newNodes));
    }
  );
};

FormattedMessage.propTypes = {
  style: PropTypes.any
};

var FormattedNumber = function (props) {
  var style = props.style;

  var formatOptions = {
    localeMatcher: props.localeMatcher,
    style: props.formatStyle,
    currency: props.currency,
    currencyDisplay: props.currencyDisplay,
    useGrouping: props.useGrouping,
    minimumIntegerDigits: props.minimumIntegerDigits,
    minimumFractionDigits: props.minimumFractionDigits,
    maximumFractionDigits: props.maximumFractionDigits,
    minimumSignificantDigits: props.minimumSignificantDigits,
    maximumSignificantDigits: props.maximumSignificantDigits,
    value: props.value
  };

  return React__default.createElement(
    Intl.FormattedNumber,
    formatOptions,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: style },
        localized
      );
    }
  );
};

FormattedNumber.propTypes = {
  style: PropTypes.any,
  localeMatcher: PropTypes.any,
  formatStyle: PropTypes.any,
  currency: PropTypes.any,
  currencyDisplay: PropTypes.any,
  useGrouping: PropTypes.any,
  minimumIntegerDigits: PropTypes.any,
  minimumFractionDigits: PropTypes.any,
  maximumFractionDigits: PropTypes.any,
  minimumSignificantDigits: PropTypes.any,
  maximumSignificantDigits: PropTypes.any,
  value: PropTypes.any
};

var FormattedPlural = function (props) {
  return React__default.createElement(
    Intl.FormattedPlural,
    props,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedPlural.propTypes = {
  style: PropTypes.any
};

var FormattedRelative = function (props) {
  return React__default.createElement(
    Intl.FormattedRelative,
    props,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedRelative.propTypes = {
  style: PropTypes.any
};

var FormattedTime = function (props) {
  return React__default.createElement(
    Intl.FormattedTime,
    props,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedTime.propTypes = {
  style: PropTypes.any
};

exports.FormattedDate = FormattedDate;
exports.FormattedHTMLMessage = FormattedHTMLMessage;
exports.FormattedMessage = FormattedMessage;
exports.FormattedNumber = FormattedNumber;
exports.FormattedPlural = FormattedPlural;
exports.FormattedRelative = FormattedRelative;
exports.FormattedTime = FormattedTime;