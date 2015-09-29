'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _attributes = require('./attributes');

var _attributes2 = _interopRequireDefault(_attributes);

var ProgressBar = {
	view: function view(ctrl, args) {
		args = args || {};
		var attr = (0, _attributes2['default'])(args);
		var _args = args;
		var progress = _args.progress;
		var buffer = _args.buffer;

		attr['class'].push('mdl-progress', 'mdl-js-progress');
		if (!progress) attr['class'].push('mdl-progress__indeterminate');

		var config = function config(el) {
			if (progress) {
				el.addEventListener('mdl-componentupgraded', function () {
					this.MaterialProgress.setProgress(progress);
					if (buffer) this.MaterialProgress.setBuffer(buffer);
				});
			}
		};

		return (0, _mithril2['default'])('div', _extends({}, attr, { config: config }));
	}
};
exports.ProgressBar = ProgressBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2FkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7dUJBQWMsU0FBUzs7OzswQkFDQSxjQUFjOzs7O0FBRTlCLElBQUksV0FBVyxHQUFHO0FBQ3hCLEtBQUksRUFBQSxjQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDaEIsTUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDbEIsTUFBSSxJQUFJLEdBQUcsNkJBQVcsSUFBSSxDQUFDLENBQUM7Y0FDSCxJQUFJO01BQXhCLFFBQVEsU0FBUixRQUFRO01BQUUsTUFBTSxTQUFOLE1BQU07O0FBR3JCLE1BQUksU0FBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUNuRCxNQUFHLENBQUMsUUFBUSxFQUFFLElBQUksU0FBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDOztBQUU3RCxNQUFJLE1BQU0sR0FBRyxTQUFULE1BQU0sQ0FBSSxFQUFFLEVBQUs7QUFDcEIsT0FBRyxRQUFRLEVBQUU7QUFDWixNQUFFLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLEVBQUUsWUFBVztBQUN2RCxTQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLFNBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbkQsQ0FBQyxDQUFDO0lBQ0g7R0FDRCxDQUFDOztBQUVGLFNBQU8sOENBQVMsSUFBSSxJQUFFLE1BQU0sRUFBRSxNQUFNLEFBQUMsSUFBTyxDQUFDO0VBQzdDO0NBQ0QsQ0FBQyIsImZpbGUiOiJzcmMvbG9hZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzJztcblxuZXhwb3J0IGxldCBQcm9ncmVzc0JhciA9IHtcblx0dmlldyhjdHJsLCBhcmdzKSB7XG5cdFx0YXJncyA9IGFyZ3MgfHwge307XG5cdFx0bGV0IGF0dHIgPSBhdHRyaWJ1dGVzKGFyZ3MpO1xuXHRcdGxldCB7cHJvZ3Jlc3MsIGJ1ZmZlcn0gPSBhcmdzO1xuXG5cblx0XHRhdHRyLmNsYXNzLnB1c2goJ21kbC1wcm9ncmVzcycsICdtZGwtanMtcHJvZ3Jlc3MnKTtcblx0XHRpZighcHJvZ3Jlc3MpIGF0dHIuY2xhc3MucHVzaCgnbWRsLXByb2dyZXNzX19pbmRldGVybWluYXRlJyk7XG5cblx0XHRsZXQgY29uZmlnID0gKGVsKSA9PiB7XG5cdFx0XHRpZihwcm9ncmVzcykge1xuXHRcdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdtZGwtY29tcG9uZW50dXBncmFkZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aGlzLk1hdGVyaWFsUHJvZ3Jlc3Muc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuXHRcdFx0XHRcdGlmKGJ1ZmZlcikgdGhpcy5NYXRlcmlhbFByb2dyZXNzLnNldEJ1ZmZlcihidWZmZXIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIDxkaXYgey4uLmF0dHJ9IGNvbmZpZz17Y29uZmlnfT48L2Rpdj47XG5cdH1cbn07XG4iXX0=
