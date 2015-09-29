'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _attributes = require('../attributes');

var _attributes2 = _interopRequireDefault(_attributes);

var Drawer = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);

		attr['class'].push('mdl-layout__drawer');

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

exports.Drawer = Drawer;
var Navigation = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		attr['class'].push('mdl-navigation');

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

exports.Navigation = Navigation;
var NavLink = {
	view: function view(ctrl, args, name) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		attr['class'].push('mdl-navigation__link');
		attr.href = args.href;

		return (0, _mithril2['default'])(
			'a',
			attr,
			name
		);
	}
};
exports.NavLink = NavLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sYXlvdXQvbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozt1QkFBYyxTQUFTOzs7OzBCQUNBLGVBQWU7Ozs7QUFFL0IsSUFBSSxNQUFNLEdBQUc7QUFDbkIsS0FBSSxFQUFBLGNBQUMsSUFBSSxFQUFFLElBQUksRUFBZTtBQUM3QixNQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNsQixNQUFJLElBQUksR0FBRyw2QkFBVyxJQUFJLENBQUMsQ0FBQzs7QUFFNUIsTUFBSSxTQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7O29DQUpuQixRQUFRO0FBQVIsV0FBUTs7O0FBTTNCLFNBQU87O0dBQVMsSUFBSTtHQUFHLFFBQVE7R0FBTyxDQUFDO0VBQ3ZDO0NBQ0QsQ0FBQzs7O0FBRUssSUFBSSxVQUFVLEdBQUc7QUFDdkIsS0FBSSxFQUFBLGNBQUMsSUFBSSxFQUFFLElBQUksRUFBZTtBQUM3QixNQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNsQixNQUFJLElBQUksR0FBRyw2QkFBVyxJQUFJLENBQUMsQ0FBQztBQUM1QixNQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7cUNBSGYsUUFBUTtBQUFSLFdBQVE7OztBQUszQixTQUFPOztHQUFTLElBQUk7R0FBRyxRQUFRO0dBQU8sQ0FBQztFQUN2QztDQUNELENBQUM7OztBQUVLLElBQUksT0FBTyxHQUFHO0FBQ3BCLEtBQUksRUFBQSxjQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3RCLE1BQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ2xCLE1BQUksSUFBSSxHQUFHLDZCQUFXLElBQUksQ0FBQyxDQUFDO0FBQzVCLE1BQUksU0FBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3hDLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7QUFFdEIsU0FBTzs7R0FBTyxJQUFJO0dBQUcsSUFBSTtHQUFLLENBQUM7RUFDL0I7Q0FDRCxDQUFDIiwiZmlsZSI6InNyYy9sYXlvdXQvbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi4vYXR0cmlidXRlcyc7XG5cbmV4cG9ydCBsZXQgRHJhd2VyID0ge1xuXHR2aWV3KGN0cmwsIGFyZ3MsIC4uLmNoaWxkcmVuKSB7XG5cdFx0YXJncyA9IGFyZ3MgfHwge307XG5cdFx0bGV0IGF0dHIgPSBhdHRyaWJ1dGVzKGFyZ3MpO1xuXG5cdFx0YXR0ci5jbGFzcy5wdXNoKCdtZGwtbGF5b3V0X19kcmF3ZXInKTtcblxuXHRcdHJldHVybiA8ZGl2IHsuLi5hdHRyfT57Y2hpbGRyZW59PC9kaXY+O1xuXHR9XG59O1xuXG5leHBvcnQgbGV0IE5hdmlnYXRpb24gPSB7XG5cdHZpZXcoY3RybCwgYXJncywgLi4uY2hpbGRyZW4pIHtcblx0XHRhcmdzID0gYXJncyB8fCB7fTtcblx0XHRsZXQgYXR0ciA9IGF0dHJpYnV0ZXMoYXJncyk7XG5cdFx0YXR0ci5jbGFzcy5wdXNoKCdtZGwtbmF2aWdhdGlvbicpO1xuXG5cdFx0cmV0dXJuIDxkaXYgey4uLmF0dHJ9PntjaGlsZHJlbn08L2Rpdj47XG5cdH1cbn07XG5cbmV4cG9ydCBsZXQgTmF2TGluayA9IHtcblx0dmlldyhjdHJsLCBhcmdzLCBuYW1lKSB7XG5cdFx0YXJncyA9IGFyZ3MgfHwge307XG5cdFx0bGV0IGF0dHIgPSBhdHRyaWJ1dGVzKGFyZ3MpO1xuXHRcdGF0dHIuY2xhc3MucHVzaCgnbWRsLW5hdmlnYXRpb25fX2xpbmsnKTtcblx0XHRhdHRyLmhyZWYgPSBhcmdzLmhyZWY7XG5cblx0XHRyZXR1cm4gPGEgey4uLmF0dHJ9PntuYW1lfTwvYT47XG5cdH1cbn07XG4iXX0=
