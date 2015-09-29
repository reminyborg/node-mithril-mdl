'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _attributes = require('./attributes');

var _attributes2 = _interopRequireDefault(_attributes);

var Card = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);

		attr['class'].push('mdl-card');

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

exports.Card = Card;
var CardTitle = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		var _args = args;
		var expand = _args.expand;
		var size = _args.size;

		attr['class'].push('mdl-card__title');
		if (expand) attr['class'].push('mdl-card--expand');

		size = size || 2;

		for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
			children[_key2 - 2] = arguments[_key2];
		}

		return (0, _mithril2['default'])(
			'div',
			attr,
			(0, _mithril2['default'])(
				'h2',
				{ 'class': 'mdl-card__title-text' },
				children
			)
		);
	}
};

exports.CardTitle = CardTitle;
var CardSupportingText = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		var border = attr.border;
		var expand = attr.expand;

		attr['class'].push('mdl-card__title-text');
		if (border) attr['class'].push('mdl-card--border');
		if (expand) attr['class'].push('mdl-card--expand');

		for (var _len3 = arguments.length, children = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
			children[_key3 - 2] = arguments[_key3];
		}

		return (0, _mithril2['default'])(
			'div',
			attr,
			children
		);
	}
};
exports.CardSupportingText = CardSupportingText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3VCQUFjLFNBQVM7Ozs7MEJBQ0EsY0FBYzs7OztBQUU5QixJQUFJLElBQUksR0FBRztBQUNqQixLQUFJLEVBQUEsY0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFlO0FBQzdCLE1BQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ2xCLE1BQUksSUFBSSxHQUFHLDZCQUFXLElBQUksQ0FBQyxDQUFDOztBQUU1QixNQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O29DQUpULFFBQVE7QUFBUixXQUFROzs7QUFNM0IsU0FBTzs7R0FBUyxJQUFJO0dBQUcsUUFBUTtHQUFPLENBQUM7RUFDdkM7Q0FDRCxDQUFDOzs7QUFFSyxJQUFJLFNBQVMsR0FBRztBQUN0QixLQUFJLEVBQUEsY0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFlO0FBQzdCLE1BQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ2xCLE1BQUksSUFBSSxHQUFHLDZCQUFXLElBQUksQ0FBQyxDQUFDO2NBQ1AsSUFBSTtNQUFwQixNQUFNLFNBQU4sTUFBTTtNQUFFLElBQUksU0FBSixJQUFJOztBQUVqQixNQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNuQyxNQUFHLE1BQU0sRUFBRSxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7QUFFL0MsTUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7O3FDQVJFLFFBQVE7QUFBUixXQUFROzs7QUFVM0IsU0FBTzs7R0FBUyxJQUFJO0dBQUU7O01BQUksU0FBTSxzQkFBc0I7SUFBRSxRQUFRO0lBQU07R0FBTSxDQUFDO0VBQzdFO0NBQ0QsQ0FBQzs7O0FBRUssSUFBSSxrQkFBa0IsR0FBRztBQUMvQixLQUFJLEVBQUEsY0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFlO0FBQzdCLE1BQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ2xCLE1BQUksSUFBSSxHQUFHLDZCQUFXLElBQUksQ0FBQyxDQUFDO01BQ3ZCLE1BQU0sR0FBWSxJQUFJLENBQXRCLE1BQU07TUFBRSxNQUFNLEdBQUksSUFBSSxDQUFkLE1BQU07O0FBRW5CLE1BQUksU0FBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3hDLE1BQUcsTUFBTSxFQUFFLElBQUksU0FBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQy9DLE1BQUcsTUFBTSxFQUFFLElBQUksU0FBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOztxQ0FQNUIsUUFBUTtBQUFSLFdBQVE7OztBQVMzQixTQUFPOztHQUFTLElBQUk7R0FBRyxRQUFRO0dBQU8sQ0FBQztFQUN2QztDQUNELENBQUMiLCJmaWxlIjoic3JjL2NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbSBmcm9tICdtaXRocmlsJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcyc7XG5cbmV4cG9ydCBsZXQgQ2FyZCA9IHtcblx0dmlldyhjdHJsLCBhcmdzLCAuLi5jaGlsZHJlbikge1xuXHRcdGFyZ3MgPSBhcmdzIHx8IHt9O1xuXHRcdGxldCBhdHRyID0gYXR0cmlidXRlcyhhcmdzKTtcblxuXHRcdGF0dHIuY2xhc3MucHVzaCgnbWRsLWNhcmQnKTtcblxuXHRcdHJldHVybiA8ZGl2IHsuLi5hdHRyfT57Y2hpbGRyZW59PC9kaXY+O1xuXHR9XG59O1xuXG5leHBvcnQgbGV0IENhcmRUaXRsZSA9IHtcblx0dmlldyhjdHJsLCBhcmdzLCAuLi5jaGlsZHJlbikge1xuXHRcdGFyZ3MgPSBhcmdzIHx8IHt9O1xuXHRcdGxldCBhdHRyID0gYXR0cmlidXRlcyhhcmdzKTtcblx0XHRsZXQge2V4cGFuZCwgc2l6ZX0gPSBhcmdzO1xuXG5cdFx0YXR0ci5jbGFzcy5wdXNoKCdtZGwtY2FyZF9fdGl0bGUnKTtcblx0XHRpZihleHBhbmQpIGF0dHIuY2xhc3MucHVzaCgnbWRsLWNhcmQtLWV4cGFuZCcpO1xuXG5cdFx0c2l6ZSA9IHNpemUgfHwgMjtcblxuXHRcdHJldHVybiA8ZGl2IHsuLi5hdHRyfT48aDIgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiPntjaGlsZHJlbn08L2gyPjwvZGl2Pjtcblx0fVxufTtcblxuZXhwb3J0IGxldCBDYXJkU3VwcG9ydGluZ1RleHQgPSB7XG5cdHZpZXcoY3RybCwgYXJncywgLi4uY2hpbGRyZW4pIHtcblx0XHRhcmdzID0gYXJncyB8fCB7fTtcblx0XHRsZXQgYXR0ciA9IGF0dHJpYnV0ZXMoYXJncyk7XG5cdFx0bGV0IHtib3JkZXIsIGV4cGFuZH0gPSBhdHRyO1xuXG5cdFx0YXR0ci5jbGFzcy5wdXNoKCdtZGwtY2FyZF9fdGl0bGUtdGV4dCcpO1xuXHRcdGlmKGJvcmRlcikgYXR0ci5jbGFzcy5wdXNoKCdtZGwtY2FyZC0tYm9yZGVyJyk7XG5cdFx0aWYoZXhwYW5kKSBhdHRyLmNsYXNzLnB1c2goJ21kbC1jYXJkLS1leHBhbmQnKTtcblxuXHRcdHJldHVybiA8ZGl2IHsuLi5hdHRyfT57Y2hpbGRyZW59PC9kaXY+O1xuXHR9XG59O1xuIl19
