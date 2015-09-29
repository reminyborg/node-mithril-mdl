'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _attributes = require('./attributes');

var _attributes2 = _interopRequireDefault(_attributes);

var Grid = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);

		attr['class'].push('mdl-grid');

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

exports.Grid = Grid;
var Cell = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		var _args = args;
		var align = _args.align;
		var width = _args.width;
		var phone = _args.phone;
		var tablet = _args.tablet;
		var desktop = _args.desktop;
		var nophone = _args.nophone;
		var notablet = _args.notablet;
		var nodesktop = _args.nodesktop;

		attr['class'].push('mdl-cell');
		if (align) attr['class'].push('mdl-cell--' + align);
		if (width) attr['class'].push('mdl-cell--' + width + '-col');
		if (phone) attr['class'].push('mdl-cell--' + phone + '-col-phone');
		if (tablet) attr['class'].push('mdl-cell--' + tablet + '-col-tablet');
		if (desktop) attr['class'].push('mdl-cell--' + desktop + '-col-desktop');
		if (nophone) attr['class'].push('mdl-cell--hide-phone');
		if (notablet) attr['class'].push('mdl-cell--hide-tablet');
		if (nodesktop) attr['class'].push('mdl-cell--hide-desktop');

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
exports.Cell = Cell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9ncmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3VCQUFjLFNBQVM7Ozs7MEJBQ0EsY0FBYzs7OztBQUU5QixJQUFJLElBQUksR0FBRztBQUNqQixLQUFJLEVBQUEsY0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFlO0FBQzdCLE1BQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ2xCLE1BQUksSUFBSSxHQUFHLDZCQUFXLElBQUksQ0FBQyxDQUFDOztBQUU1QixNQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O29DQUpULFFBQVE7QUFBUixXQUFROzs7QUFLM0IsU0FBTzs7R0FBUyxJQUFJO0dBQUcsUUFBUTtHQUFPLENBQUM7RUFDdkM7Q0FDRCxDQUFDOzs7QUFFSyxJQUFJLElBQUksR0FBRztBQUNqQixLQUFJLEVBQUEsY0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFlO0FBQzdCLE1BQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ2xCLE1BQUksSUFBSSxHQUFHLDZCQUFXLElBQUksQ0FBQyxDQUFDO2NBQytDLElBQUk7TUFBMUUsS0FBSyxTQUFMLEtBQUs7TUFBRSxLQUFLLFNBQUwsS0FBSztNQUFFLEtBQUssU0FBTCxLQUFLO01BQUUsTUFBTSxTQUFOLE1BQU07TUFBRSxPQUFPLFNBQVAsT0FBTztNQUFFLE9BQU8sU0FBUCxPQUFPO01BQUUsUUFBUSxTQUFSLFFBQVE7TUFBRSxTQUFTLFNBQVQsU0FBUzs7QUFFdkUsTUFBSSxTQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzVCLE1BQUcsS0FBSyxFQUFFLElBQUksU0FBTSxDQUFDLElBQUksZ0JBQWMsS0FBSyxDQUFHLENBQUM7QUFDaEQsTUFBRyxLQUFLLEVBQUUsSUFBSSxTQUFNLENBQUMsSUFBSSxnQkFBYyxLQUFLLFVBQU8sQ0FBQztBQUNwRCxNQUFHLEtBQUssRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLGdCQUFjLEtBQUssZ0JBQWEsQ0FBQztBQUMxRCxNQUFHLE1BQU0sRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLGdCQUFjLE1BQU0saUJBQWMsQ0FBQztBQUM3RCxNQUFHLE9BQU8sRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLGdCQUFjLE9BQU8sa0JBQWUsQ0FBQztBQUNoRSxNQUFHLE9BQU8sRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNwRCxNQUFHLFFBQVEsRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN0RCxNQUFHLFNBQVMsRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQzs7cUNBYnJDLFFBQVE7QUFBUixXQUFROzs7QUFlM0IsU0FBTzs7R0FBUyxJQUFJO0dBQUcsUUFBUTtHQUFPLENBQUM7RUFDdkM7Q0FDRCxDQUFDIiwiZmlsZSI6InNyYy9ncmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCc7XG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMnO1xuXG5leHBvcnQgbGV0IEdyaWQgPSB7XG5cdHZpZXcoY3RybCwgYXJncywgLi4uY2hpbGRyZW4pIHtcblx0XHRhcmdzID0gYXJncyB8fCB7fTtcblx0XHRsZXQgYXR0ciA9IGF0dHJpYnV0ZXMoYXJncyk7XG5cblx0XHRhdHRyLmNsYXNzLnB1c2goJ21kbC1ncmlkJyk7XG5cdFx0cmV0dXJuIDxkaXYgey4uLmF0dHJ9PntjaGlsZHJlbn08L2Rpdj47XG5cdH1cbn07XG5cbmV4cG9ydCBsZXQgQ2VsbCA9IHtcblx0dmlldyhjdHJsLCBhcmdzLCAuLi5jaGlsZHJlbikge1xuXHRcdGFyZ3MgPSBhcmdzIHx8IHt9O1xuXHRcdGxldCBhdHRyID0gYXR0cmlidXRlcyhhcmdzKTtcblx0XHRsZXQge2FsaWduLCB3aWR0aCwgcGhvbmUsIHRhYmxldCwgZGVza3RvcCwgbm9waG9uZSwgbm90YWJsZXQsIG5vZGVza3RvcH0gPSBhcmdzO1xuXG5cdFx0YXR0ci5jbGFzcy5wdXNoKCdtZGwtY2VsbCcpO1xuXHRcdGlmKGFsaWduKSBhdHRyLmNsYXNzLnB1c2goYG1kbC1jZWxsLS0ke2FsaWdufWApO1xuXHRcdGlmKHdpZHRoKSBhdHRyLmNsYXNzLnB1c2goYG1kbC1jZWxsLS0ke3dpZHRofS1jb2xgKTtcblx0XHRpZihwaG9uZSkgYXR0ci5jbGFzcy5wdXNoKGBtZGwtY2VsbC0tJHtwaG9uZX0tY29sLXBob25lYCk7XG5cdFx0aWYodGFibGV0KSBhdHRyLmNsYXNzLnB1c2goYG1kbC1jZWxsLS0ke3RhYmxldH0tY29sLXRhYmxldGApO1xuXHRcdGlmKGRlc2t0b3ApIGF0dHIuY2xhc3MucHVzaChgbWRsLWNlbGwtLSR7ZGVza3RvcH0tY29sLWRlc2t0b3BgKTtcblx0XHRpZihub3Bob25lKSBhdHRyLmNsYXNzLnB1c2goJ21kbC1jZWxsLS1oaWRlLXBob25lJyk7XG5cdFx0aWYobm90YWJsZXQpIGF0dHIuY2xhc3MucHVzaCgnbWRsLWNlbGwtLWhpZGUtdGFibGV0Jyk7XG5cdFx0aWYobm9kZXNrdG9wKSBhdHRyLmNsYXNzLnB1c2goJ21kbC1jZWxsLS1oaWRlLWRlc2t0b3AnKTtcblxuXHRcdHJldHVybiA8ZGl2IHsuLi5hdHRyfT57Y2hpbGRyZW59PC9kaXY+O1xuXHR9XG59O1xuIl19
