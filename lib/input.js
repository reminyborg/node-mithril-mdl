'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _attributes = require('./attributes');

var _attributes2 = _interopRequireDefault(_attributes);

var TextInput = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		var _args = args;
		var value = _args.value;
		var label = _args.label;
		var pattern = _args.pattern;
		var error = _args.error;
		var floating = _args.floating;
		var outerClass = _args.outerClass;

		attr.type = 'text';
		attr['class'].push('mdl-textfield__input');
		if (pattern) attr.pattern = pattern;
		if (typeof value !== undefined) attr.value = value;

		return (0, _mithril2['default'])(
			'div',
			{ 'class': 'mdl-textfield mdl-js-textfield ' + (outerClass || '') + ' ' + (floating ? 'mdl-textfield--floating-label' : '') },
			(0, _mithril2['default'])('input', attr),
			label && attr.id ? (0, _mithril2['default'])(
				'label',
				{ 'for': attr.id, 'class': 'mdl-textfield__label' },
				label
			) : null,
			pattern && error ? (0, _mithril2['default'])(
				'span',
				{ 'class': 'mdl-textfield__error' },
				error
			) : null
		);
	}
};
exports.TextInput = TextInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozt1QkFBYyxTQUFTOzs7OzBCQUNBLGNBQWM7Ozs7QUFFOUIsSUFBSSxTQUFTLEdBQUc7QUFDdEIsS0FBSSxFQUFBLGNBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNoQixNQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNsQixNQUFJLElBQUksR0FBRyw2QkFBVyxJQUFJLENBQUMsQ0FBQztjQUMrQixJQUFJO01BQTFELEtBQUssU0FBTCxLQUFLO01BQUUsS0FBSyxTQUFMLEtBQUs7TUFBRSxPQUFPLFNBQVAsT0FBTztNQUFFLEtBQUssU0FBTCxLQUFLO01BQUUsUUFBUSxTQUFSLFFBQVE7TUFBRSxVQUFVLFNBQVYsVUFBVTs7QUFFdkQsTUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDbkIsTUFBSSxTQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDeEMsTUFBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDbkMsTUFBRyxPQUFPLEtBQUssS0FBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O0FBRWxELFNBQU87O0tBQUssOENBQXlDLFVBQVUsSUFBSSxFQUFFLENBQUEsVUFBSSxRQUFRLEdBQUcsK0JBQStCLEdBQUcsRUFBRSxDQUFBLEFBQUc7R0FDMUgsbUNBQVcsSUFBSSxDQUFJO0dBRWxCLEFBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUk7O01BQU8sT0FBSyxJQUFJLENBQUMsRUFBRSxBQUFDLEVBQUMsU0FBTSxzQkFBc0I7SUFBRSxLQUFLO0lBQVMsR0FBRyxJQUFJO0dBQzdGLEFBQUMsT0FBTyxJQUFJLEtBQUssR0FBSTs7TUFBTSxTQUFNLHNCQUFzQjtJQUFFLEtBQUs7SUFBUSxHQUFHLElBQUk7R0FDekUsQ0FBQztFQUNQO0NBQ0QsQ0FBQyIsImZpbGUiOiJzcmMvaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbSBmcm9tICdtaXRocmlsJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcyc7XG5cbmV4cG9ydCBsZXQgVGV4dElucHV0ID0ge1xuXHR2aWV3KGN0cmwsIGFyZ3MpIHtcblx0XHRhcmdzID0gYXJncyB8fCB7fTtcblx0XHRsZXQgYXR0ciA9IGF0dHJpYnV0ZXMoYXJncyk7XG5cdFx0bGV0IHt2YWx1ZSwgbGFiZWwsIHBhdHRlcm4sIGVycm9yLCBmbG9hdGluZywgb3V0ZXJDbGFzc30gPSBhcmdzO1xuXG5cdFx0YXR0ci50eXBlID0gJ3RleHQnO1xuXHRcdGF0dHIuY2xhc3MucHVzaCgnbWRsLXRleHRmaWVsZF9faW5wdXQnKTtcblx0XHRpZihwYXR0ZXJuKSBhdHRyLnBhdHRlcm4gPSBwYXR0ZXJuO1xuXHRcdGlmKHR5cGVvZiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSBhdHRyLnZhbHVlID0gdmFsdWU7XG5cblx0XHRyZXR1cm4gPGRpdiBjbGFzcz17YG1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCAke291dGVyQ2xhc3MgfHwgJyd9ICR7ZmxvYXRpbmcgPyAnbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwnIDogJyd9YH0+XG5cdFx0XHQ8aW5wdXQgey4uLmF0dHJ9IC8+XG5cblx0XHRcdHsobGFiZWwgJiYgYXR0ci5pZCkgPyA8bGFiZWwgZm9yPXthdHRyLmlkfSBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCI+e2xhYmVsfTwvbGFiZWw+IDogbnVsbH1cblx0XHRcdHsocGF0dGVybiAmJiBlcnJvcikgPyA8c3BhbiBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2Vycm9yXCI+e2Vycm9yfTwvc3Bhbj4gOiBudWxsfVxuXHRcdDwvZGl2Pjtcblx0fVxufTtcbiJdfQ==
