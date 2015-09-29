'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _attributes = require('./attributes');

var _attributes2 = _interopRequireDefault(_attributes);

var Icon = {
	view: function view(ctrl, args, icon) {
		var attr = (0, _attributes2['default'])(args || {});
		attr['class'].push('material-icons');

		return (0, _mithril2['default'])(
			'i',
			attr,
			icon
		);
	}
};

exports.Icon = Icon;
var Spacer = {
	view: function view(ctrl, args) {
		var attr = (0, _attributes2['default'])(args || {});
		attr['class'].push('mdl-layout__spacer');

		return (0, _mithril2['default'])('div', attr);
	}
};
exports.Spacer = Spacer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9taXNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3VCQUFjLFNBQVM7Ozs7MEJBQ0EsY0FBYzs7OztBQUU5QixJQUFJLElBQUksR0FBRztBQUNqQixLQUFJLEVBQUEsY0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUN0QixNQUFJLElBQUksR0FBRyw2QkFBVyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEMsTUFBSSxTQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O0FBRWxDLFNBQU87O0dBQU8sSUFBSTtHQUFHLElBQUk7R0FBSyxDQUFDO0VBQy9CO0NBQ0QsQ0FBQzs7O0FBRUssSUFBSSxNQUFNLEdBQUc7QUFDbkIsS0FBSSxFQUFBLGNBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNoQixNQUFJLElBQUksR0FBRyw2QkFBVyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEMsTUFBSSxTQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7O0FBRXRDLFNBQU8saUNBQVMsSUFBSSxDQUFJLENBQUM7RUFDekI7Q0FDRCxDQUFDIiwiZmlsZSI6InNyYy9taXNjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCc7XG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMnO1xuXG5leHBvcnQgbGV0IEljb24gPSB7XG5cdHZpZXcoY3RybCwgYXJncywgaWNvbikge1xuXHRcdGxldCBhdHRyID0gYXR0cmlidXRlcyhhcmdzIHx8IHt9KTtcblx0XHRhdHRyLmNsYXNzLnB1c2goJ21hdGVyaWFsLWljb25zJyk7XG5cblx0XHRyZXR1cm4gPGkgey4uLmF0dHJ9PntpY29ufTwvaT47XG5cdH1cbn07XG5cbmV4cG9ydCBsZXQgU3BhY2VyID0ge1xuXHR2aWV3KGN0cmwsIGFyZ3MpIHtcblx0XHRsZXQgYXR0ciA9IGF0dHJpYnV0ZXMoYXJncyB8fCB7fSk7XG5cdFx0YXR0ci5jbGFzcy5wdXNoKCdtZGwtbGF5b3V0X19zcGFjZXInKTtcblxuXHRcdHJldHVybiA8ZGl2IHsuLi5hdHRyfSAvPjtcblx0fVxufTtcbiJdfQ==
