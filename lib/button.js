'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _attributes = require('./attributes');

var _attributes2 = _interopRequireDefault(_attributes);

var Button = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		var _args = args;
		var raised = _args.raised;
		var accent = _args.accent;
		var color = _args.color;
		var primary = _args.primary;

		attr['class'].push('mdl-button', 'mdl-js-button');
		if (color) attr['class'].push('mdl-button--colored');
		if (accent) attr['class'].push('mdl-button--accent');
		if (raised) attr['class'].push('mdl-button--raised');
		if (primary) attr['class'].push('mdl-button--primary');

		for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			children[_key - 2] = arguments[_key];
		}

		return (0, _mithril2['default'])(
			'button',
			attr,
			children
		);
	}
};

exports.Button = Button;
var Fab = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		var _args2 = args;
		var raised = _args2.raised;
		var mini = _args2.mini;
		var accent = _args2.accent;
		var color = _args2.color;
		var primary = _args2.primary;

		attr['class'].push('mdl-button', 'mdl-js-button');
		attr['class'].push(mini ? 'mdl-button--mini-fab' : 'mdl-button--fab');
		if (color) attr['class'].push('mdl-button--colored');
		if (accent) attr['class'].push('mdl-button--accent');
		if (raised) attr['class'].push('mdl-button--raised');
		if (primary) attr['class'].push('mdl-button--primary');

		for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
			children[_key2 - 2] = arguments[_key2];
		}

		return (0, _mithril2['default'])(
			'button',
			attr,
			children
		);
	}
};
exports.Fab = Fab;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7dUJBQWMsU0FBUzs7OzswQkFDQSxjQUFjOzs7O0FBRTlCLElBQUksTUFBTSxHQUFHO0FBQ25CLEtBQUksRUFBQSxjQUFDLElBQUksRUFBRSxJQUFJLEVBQWU7QUFDN0IsTUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDbEIsTUFBSSxJQUFJLEdBQUcsNkJBQVcsSUFBSSxDQUFDLENBQUM7Y0FDVyxJQUFJO01BQXRDLE1BQU0sU0FBTixNQUFNO01BQUUsTUFBTSxTQUFOLE1BQU07TUFBRSxLQUFLLFNBQUwsS0FBSztNQUFFLE9BQU8sU0FBUCxPQUFPOztBQUVuQyxNQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQy9DLE1BQUcsS0FBSyxFQUFFLElBQUksU0FBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2pELE1BQUcsTUFBTSxFQUFFLElBQUksU0FBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2pELE1BQUcsTUFBTSxFQUFFLElBQUksU0FBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2pELE1BQUcsT0FBTyxFQUFFLElBQUksU0FBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOztvQ0FUaEMsUUFBUTtBQUFSLFdBQVE7OztBQVczQixTQUFPOztHQUFZLElBQUk7R0FBRyxRQUFRO0dBQVUsQ0FBQztFQUM3QztDQUNELENBQUM7OztBQUVLLElBQUksR0FBRyxHQUFHO0FBQ2hCLEtBQUksRUFBQSxjQUFDLElBQUksRUFBRSxJQUFJLEVBQWU7QUFDN0IsTUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDbEIsTUFBSSxJQUFJLEdBQUcsNkJBQVcsSUFBSSxDQUFDLENBQUM7ZUFDaUIsSUFBSTtNQUE1QyxNQUFNLFVBQU4sTUFBTTtNQUFFLElBQUksVUFBSixJQUFJO01BQUUsTUFBTSxVQUFOLE1BQU07TUFBRSxLQUFLLFVBQUwsS0FBSztNQUFFLE9BQU8sVUFBUCxPQUFPOztBQUV6QyxNQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQy9DLE1BQUksU0FBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLEdBQUcsaUJBQWlCLENBQUMsQ0FBQztBQUNuRSxNQUFHLEtBQUssRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNqRCxNQUFHLE1BQU0sRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNqRCxNQUFHLE1BQU0sRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNqRCxNQUFHLE9BQU8sRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7cUNBVmhDLFFBQVE7QUFBUixXQUFROzs7QUFZM0IsU0FBTzs7R0FBWSxJQUFJO0dBQUcsUUFBUTtHQUFVLENBQUM7RUFDN0M7Q0FDRCxDQUFDIiwiZmlsZSI6InNyYy9idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbSBmcm9tICdtaXRocmlsJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcyc7XG5cbmV4cG9ydCBsZXQgQnV0dG9uID0ge1xuXHR2aWV3KGN0cmwsIGFyZ3MsIC4uLmNoaWxkcmVuKSB7XG5cdFx0YXJncyA9IGFyZ3MgfHwge307XG5cdFx0bGV0IGF0dHIgPSBhdHRyaWJ1dGVzKGFyZ3MpO1xuXHRcdGxldCB7cmFpc2VkLCBhY2NlbnQsIGNvbG9yLCBwcmltYXJ5fSA9IGFyZ3M7XG5cblx0XHRhdHRyLmNsYXNzLnB1c2goJ21kbC1idXR0b24nLCAnbWRsLWpzLWJ1dHRvbicpO1xuXHRcdGlmKGNvbG9yKSBhdHRyLmNsYXNzLnB1c2goJ21kbC1idXR0b24tLWNvbG9yZWQnKTtcblx0XHRpZihhY2NlbnQpIGF0dHIuY2xhc3MucHVzaCgnbWRsLWJ1dHRvbi0tYWNjZW50Jyk7XG5cdFx0aWYocmFpc2VkKSBhdHRyLmNsYXNzLnB1c2goJ21kbC1idXR0b24tLXJhaXNlZCcpO1xuXHRcdGlmKHByaW1hcnkpIGF0dHIuY2xhc3MucHVzaCgnbWRsLWJ1dHRvbi0tcHJpbWFyeScpO1xuXG5cdFx0cmV0dXJuIDxidXR0b24gey4uLmF0dHJ9PntjaGlsZHJlbn08L2J1dHRvbj47XG5cdH1cbn07XG5cbmV4cG9ydCBsZXQgRmFiID0ge1xuXHR2aWV3KGN0cmwsIGFyZ3MsIC4uLmNoaWxkcmVuKSB7XG5cdFx0YXJncyA9IGFyZ3MgfHwge307XG5cdFx0bGV0IGF0dHIgPSBhdHRyaWJ1dGVzKGFyZ3MpO1xuXHRcdGxldCB7cmFpc2VkLCBtaW5pLCBhY2NlbnQsIGNvbG9yLCBwcmltYXJ5fSA9IGFyZ3M7XG5cblx0XHRhdHRyLmNsYXNzLnB1c2goJ21kbC1idXR0b24nLCAnbWRsLWpzLWJ1dHRvbicpO1xuXHRcdGF0dHIuY2xhc3MucHVzaChtaW5pID8gJ21kbC1idXR0b24tLW1pbmktZmFiJyA6ICdtZGwtYnV0dG9uLS1mYWInKTtcblx0XHRpZihjb2xvcikgYXR0ci5jbGFzcy5wdXNoKCdtZGwtYnV0dG9uLS1jb2xvcmVkJyk7XG5cdFx0aWYoYWNjZW50KSBhdHRyLmNsYXNzLnB1c2goJ21kbC1idXR0b24tLWFjY2VudCcpO1xuXHRcdGlmKHJhaXNlZCkgYXR0ci5jbGFzcy5wdXNoKCdtZGwtYnV0dG9uLS1yYWlzZWQnKTtcblx0XHRpZihwcmltYXJ5KSBhdHRyLmNsYXNzLnB1c2goJ21kbC1idXR0b24tLXByaW1hcnknKTtcblxuXHRcdHJldHVybiA8YnV0dG9uIHsuLi5hdHRyfT57Y2hpbGRyZW59PC9idXR0b24+O1xuXHR9XG59O1xuIl19
