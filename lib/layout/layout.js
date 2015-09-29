'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _attributes = require('../attributes');

var _attributes2 = _interopRequireDefault(_attributes);

var Layout = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		var _args = args;
		var drawer = _args.drawer;
		var fixedDrawer = _args.fixedDrawer;
		var fixedHeader = _args.fixedHeader;
		var fixedTabs = _args.fixedTabs;

		attr['class'].push('mdl-layout mdl-js-layout');

		if (fixedTabs) attr['class'].push('mdl-layout--fixed-tabs');
		if (fixedDrawer) attr['class'].push('mdl-layout--fixed-drawer');
		if (fixedHeader) attr['class'].push('mdl-layout--fixed-header');
		if (drawer || fixedDrawer) attr['class'].push('mdl-layout--overlay-drawer-button');

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

exports.Layout = Layout;
var Content = {
	view: function view(ctrl, args) {
		var attr = (0, _attributes2['default'])(args || {});
		attr['class'].push('mdl-layout__content');

		for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
			children[_key2 - 2] = arguments[_key2];
		}

		return (0, _mithril2['default'])(
			'main',
			attr,
			children
		);
	}
};

exports.Content = Content;
var Title = {
	view: function view(ctrl, args) {
		var attr = (0, _attributes2['default'])(args || {});

		attr['class'].push('mdl-layout-title');

		for (var _len3 = arguments.length, children = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
			children[_key3 - 2] = arguments[_key3];
		}

		return (0, _mithril2['default'])(
			'span',
			attr,
			children
		);
	}
};
exports.Title = Title;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sYXlvdXQvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3VCQUFjLFNBQVM7Ozs7MEJBQ0EsZUFBZTs7OztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNuQixLQUFJLEVBQUEsY0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFlO0FBQzdCLE1BQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ2xCLE1BQUksSUFBSSxHQUFHLDZCQUFXLElBQUksQ0FBQyxDQUFDO2NBQ3dCLElBQUk7TUFBbkQsTUFBTSxTQUFOLE1BQU07TUFBRSxXQUFXLFNBQVgsV0FBVztNQUFFLFdBQVcsU0FBWCxXQUFXO01BQUUsU0FBUyxTQUFULFNBQVM7O0FBRWhELE1BQUksU0FBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDOztBQUU1QyxNQUFHLFNBQVMsRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN4RCxNQUFHLFdBQVcsRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUM1RCxNQUFHLFdBQVcsRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUM1RCxNQUFHLE1BQU0sSUFBSSxXQUFXLEVBQUUsSUFBSSxTQUFNLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7O29DQVY1RCxRQUFRO0FBQVIsV0FBUTs7O0FBWTNCLFNBQU87O0dBQVMsSUFBSTtHQUFHLFFBQVE7R0FBTyxDQUFDO0VBQ3ZDO0NBQ0QsQ0FBQzs7O0FBRUssSUFBSSxPQUFPLEdBQUc7QUFDcEIsS0FBSSxFQUFBLGNBQUMsSUFBSSxFQUFFLElBQUksRUFBZTtBQUM3QixNQUFJLElBQUksR0FBRyw2QkFBVyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEMsTUFBSSxTQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7O3FDQUZwQixRQUFRO0FBQVIsV0FBUTs7O0FBSTNCLFNBQU87O0dBQVUsSUFBSTtHQUFHLFFBQVE7R0FBUSxDQUFDO0VBQ3pDO0NBQ0QsQ0FBQzs7O0FBRUssSUFBSSxLQUFLLEdBQUc7QUFDbEIsS0FBSSxFQUFBLGNBQUMsSUFBSSxFQUFFLElBQUksRUFBZTtBQUM3QixNQUFJLElBQUksR0FBRyw2QkFBVyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7O0FBRWxDLE1BQUksU0FBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOztxQ0FIakIsUUFBUTtBQUFSLFdBQVE7OztBQUszQixTQUFPOztHQUFVLElBQUk7R0FBRyxRQUFRO0dBQVEsQ0FBQztFQUN6QztDQUNELENBQUMiLCJmaWxlIjoic3JjL2xheW91dC9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbSBmcm9tICdtaXRocmlsJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4uL2F0dHJpYnV0ZXMnO1xuXG5leHBvcnQgbGV0IExheW91dCA9IHtcblx0dmlldyhjdHJsLCBhcmdzLCAuLi5jaGlsZHJlbikge1xuXHRcdGFyZ3MgPSBhcmdzIHx8IHt9O1xuXHRcdGxldCBhdHRyID0gYXR0cmlidXRlcyhhcmdzKTtcblx0XHRsZXQge2RyYXdlciwgZml4ZWREcmF3ZXIsIGZpeGVkSGVhZGVyLCBmaXhlZFRhYnN9ID0gYXJncztcblxuXHRcdGF0dHIuY2xhc3MucHVzaCgnbWRsLWxheW91dCBtZGwtanMtbGF5b3V0Jyk7XG5cblx0XHRpZihmaXhlZFRhYnMpIGF0dHIuY2xhc3MucHVzaCgnbWRsLWxheW91dC0tZml4ZWQtdGFicycpO1xuXHRcdGlmKGZpeGVkRHJhd2VyKSBhdHRyLmNsYXNzLnB1c2goJ21kbC1sYXlvdXQtLWZpeGVkLWRyYXdlcicpO1xuXHRcdGlmKGZpeGVkSGVhZGVyKSBhdHRyLmNsYXNzLnB1c2goJ21kbC1sYXlvdXQtLWZpeGVkLWhlYWRlcicpO1xuXHRcdGlmKGRyYXdlciB8fCBmaXhlZERyYXdlcikgYXR0ci5jbGFzcy5wdXNoKCdtZGwtbGF5b3V0LS1vdmVybGF5LWRyYXdlci1idXR0b24nKTtcblxuXHRcdHJldHVybiA8ZGl2IHsuLi5hdHRyfT57Y2hpbGRyZW59PC9kaXY+O1xuXHR9XG59O1xuXG5leHBvcnQgbGV0IENvbnRlbnQgPSB7XG5cdHZpZXcoY3RybCwgYXJncywgLi4uY2hpbGRyZW4pIHtcblx0XHRsZXQgYXR0ciA9IGF0dHJpYnV0ZXMoYXJncyB8fCB7fSk7XG5cdFx0YXR0ci5jbGFzcy5wdXNoKCdtZGwtbGF5b3V0X19jb250ZW50Jyk7XG5cblx0XHRyZXR1cm4gPG1haW4gey4uLmF0dHJ9PntjaGlsZHJlbn08L21haW4+O1xuXHR9XG59O1xuXG5leHBvcnQgbGV0IFRpdGxlID0ge1xuXHR2aWV3KGN0cmwsIGFyZ3MsIC4uLmNoaWxkcmVuKSB7XG5cdFx0bGV0IGF0dHIgPSBhdHRyaWJ1dGVzKGFyZ3MgfHwge30pO1xuXG5cdFx0YXR0ci5jbGFzcy5wdXNoKCdtZGwtbGF5b3V0LXRpdGxlJyk7XG5cblx0XHRyZXR1cm4gPHNwYW4gey4uLmF0dHJ9PntjaGlsZHJlbn08L3NwYW4+O1xuXHR9XG59O1xuIl19
