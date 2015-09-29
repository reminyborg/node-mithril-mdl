'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _attributes = require('../attributes');

var _attributes2 = _interopRequireDefault(_attributes);

var Tabs = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		attr['class'].push('mdl-layout__tab-bar');

		for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			children[_key - 2] = arguments[_key];
		}

		return (0, _mithril2['default'])(
			'div',
			attr,
			children
		);
	}
};

exports.Tabs = Tabs;
var Tab = {
	view: function view(ctrl, args, title) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args, args.config);
		attr['class'].push('mdl-layout__tab');
		attr.href = args.href;

		return (0, _mithril2['default'])(
			'a',
			attr,
			title
		);
	}
};
exports.Tab = Tab;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sYXlvdXQvdGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozt1QkFBYyxTQUFTOzs7OzBCQUNBLGVBQWU7Ozs7QUFFL0IsSUFBSSxJQUFJLEdBQUc7QUFDakIsS0FBSSxFQUFBLGNBQUMsSUFBSSxFQUFFLElBQUksRUFBZTtBQUM3QixNQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNsQixNQUFJLElBQUksR0FBRyw2QkFBVyxJQUFJLENBQUMsQ0FBQztBQUM1QixNQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7b0NBSHBCLFFBQVE7QUFBUixXQUFROzs7QUFLM0IsU0FBTzs7R0FBUyxJQUFJO0dBQUcsUUFBUTtHQUFPLENBQUM7RUFDdkM7Q0FDRCxDQUFDOzs7QUFFSyxJQUFJLEdBQUcsR0FBRztBQUNoQixLQUFJLEVBQUEsY0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUN2QixNQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNsQixNQUFJLElBQUksR0FBRyw2QkFBVyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLE1BQUksU0FBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ25DLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7QUFFdEIsU0FBTzs7R0FBTyxJQUFJO0dBQUcsS0FBSztHQUFLLENBQUM7RUFDaEM7Q0FDRCxDQUFDIiwiZmlsZSI6InNyYy9sYXlvdXQvdGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi4vYXR0cmlidXRlcyc7XG5cbmV4cG9ydCBsZXQgVGFicyA9IHtcblx0dmlldyhjdHJsLCBhcmdzLCAuLi5jaGlsZHJlbikge1xuXHRcdGFyZ3MgPSBhcmdzIHx8IHt9O1xuXHRcdGxldCBhdHRyID0gYXR0cmlidXRlcyhhcmdzKTtcblx0XHRhdHRyLmNsYXNzLnB1c2goJ21kbC1sYXlvdXRfX3RhYi1iYXInKTtcblxuXHRcdHJldHVybiA8ZGl2IHsuLi5hdHRyfT57Y2hpbGRyZW59PC9kaXY+O1xuXHR9XG59O1xuXG5leHBvcnQgbGV0IFRhYiA9IHtcblx0dmlldyhjdHJsLCBhcmdzLCB0aXRsZSkge1xuXHRcdGFyZ3MgPSBhcmdzIHx8IHt9O1xuXHRcdGxldCBhdHRyID0gYXR0cmlidXRlcyhhcmdzLCBhcmdzLmNvbmZpZyk7XG5cdFx0YXR0ci5jbGFzcy5wdXNoKCdtZGwtbGF5b3V0X190YWInKTtcblx0XHRhdHRyLmhyZWYgPSBhcmdzLmhyZWY7XG5cblx0XHRyZXR1cm4gPGEgey4uLmF0dHJ9Pnt0aXRsZX08L2E+O1xuXHR9XG59O1xuIl19
