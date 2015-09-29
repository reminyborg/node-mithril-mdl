'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _attributes = require('../attributes');

var _attributes2 = _interopRequireDefault(_attributes);

var Header = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		var _args = args;
		var scroll = _args.scroll;
		var waterfall = _args.waterfall;
		var transparent = _args.transparent;

		attr['class'].push('mdl-layout__header');

		if (scroll) attr['class'].push('mdl-layout__header--scroll');
		if (waterfall) attr['class'].push('mdl-layout__header--waterfall');
		if (transparent) attr['class'].push('mdl-layout__header--transparent');

		for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			children[_key - 2] = arguments[_key];
		}

		return (0, _mithril2['default'])(
			'header',
			attr,
			children
		);
	}
};

exports.Header = Header;
var HeaderRow = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		attr['class'].push('mdl-layout__header-row');

		for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
			children[_key2 - 2] = arguments[_key2];
		}

		return (0, _mithril2['default'])(
			'div',
			attr,
			children
		);
	}
};
exports.HeaderRow = HeaderRow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sYXlvdXQvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3VCQUFjLFNBQVM7Ozs7MEJBQ0EsZUFBZTs7OztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNuQixLQUFJLEVBQUEsY0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFlO0FBQzdCLE1BQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ2xCLE1BQUksSUFBSSxHQUFHLDZCQUFXLElBQUksQ0FBQyxDQUFDO2NBQ1csSUFBSTtNQUF0QyxNQUFNLFNBQU4sTUFBTTtNQUFFLFNBQVMsU0FBVCxTQUFTO01BQUUsV0FBVyxTQUFYLFdBQVc7O0FBRW5DLE1BQUksU0FBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztBQUV0QyxNQUFHLE1BQU0sRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUN6RCxNQUFHLFNBQVMsRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUMvRCxNQUFHLFdBQVcsRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7b0NBVGhELFFBQVE7QUFBUixXQUFROzs7QUFXM0IsU0FBTzs7R0FBWSxJQUFJO0dBQUcsUUFBUTtHQUFVLENBQUM7RUFDN0M7Q0FDRCxDQUFDOzs7QUFFSyxJQUFJLFNBQVMsR0FBRztBQUN0QixLQUFJLEVBQUEsY0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFlO0FBQzdCLE1BQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ2xCLE1BQUksSUFBSSxHQUFHLDZCQUFXLElBQUksQ0FBQyxDQUFDO0FBQzVCLE1BQUksU0FBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOztxQ0FIdkIsUUFBUTtBQUFSLFdBQVE7OztBQUszQixTQUFPOztHQUFTLElBQUk7R0FBRyxRQUFRO0dBQU8sQ0FBQztFQUN2QztDQUNELENBQUMiLCJmaWxlIjoic3JjL2xheW91dC9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbSBmcm9tICdtaXRocmlsJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4uL2F0dHJpYnV0ZXMnO1xuXG5leHBvcnQgbGV0IEhlYWRlciA9IHtcblx0dmlldyhjdHJsLCBhcmdzLCAuLi5jaGlsZHJlbikge1xuXHRcdGFyZ3MgPSBhcmdzIHx8IHt9O1xuXHRcdGxldCBhdHRyID0gYXR0cmlidXRlcyhhcmdzKTtcblx0XHRsZXQge3Njcm9sbCwgd2F0ZXJmYWxsLCB0cmFuc3BhcmVudH0gPSBhcmdzO1xuXG5cdFx0YXR0ci5jbGFzcy5wdXNoKCdtZGwtbGF5b3V0X19oZWFkZXInKTtcblxuXHRcdGlmKHNjcm9sbCkgYXR0ci5jbGFzcy5wdXNoKCdtZGwtbGF5b3V0X19oZWFkZXItLXNjcm9sbCcpO1xuXHRcdGlmKHdhdGVyZmFsbCkgYXR0ci5jbGFzcy5wdXNoKCdtZGwtbGF5b3V0X19oZWFkZXItLXdhdGVyZmFsbCcpO1xuXHRcdGlmKHRyYW5zcGFyZW50KSBhdHRyLmNsYXNzLnB1c2goJ21kbC1sYXlvdXRfX2hlYWRlci0tdHJhbnNwYXJlbnQnKTtcblxuXHRcdHJldHVybiA8aGVhZGVyIHsuLi5hdHRyfT57Y2hpbGRyZW59PC9oZWFkZXI+O1xuXHR9XG59O1xuXG5leHBvcnQgbGV0IEhlYWRlclJvdyA9IHtcblx0dmlldyhjdHJsLCBhcmdzLCAuLi5jaGlsZHJlbikge1xuXHRcdGFyZ3MgPSBhcmdzIHx8IHt9O1xuXHRcdGxldCBhdHRyID0gYXR0cmlidXRlcyhhcmdzKTtcblx0XHRhdHRyLmNsYXNzLnB1c2goJ21kbC1sYXlvdXRfX2hlYWRlci1yb3cnKTtcblxuXHRcdHJldHVybiA8ZGl2IHsuLi5hdHRyfT57Y2hpbGRyZW59PC9kaXY+O1xuXHR9XG59O1xuIl19
