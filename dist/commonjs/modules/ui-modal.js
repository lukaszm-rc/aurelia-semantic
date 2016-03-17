
"use strict";

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var UiModal = (function () {
	var _instanceInitializers = {};
	var _instanceInitializers = {};

	_createDecoratedClass(UiModal, [{
		key: 'active',
		decorators: [_aureliaFramework.bindable],
		initializer: function initializer() {
			return false;
		},
		enumerable: true
	}], null, _instanceInitializers);

	function UiModal(element) {
		_classCallCheck(this, _UiModal);

		_defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

		this.element = element;
	}

	_createDecoratedClass(UiModal, [{
		key: 'attached',
		value: function attached() {}
	}, {
		key: 'activeChanged',
		value: function activeChanged(newValue) {
			if (newValue) {
				(0, _jquery2['default'])(this.modal).modal('show');
			} else {
				(0, _jquery2['default'])(this.modal).modal('hide');
			}
		}
	}], null, _instanceInitializers);

	var _UiModal = UiModal;
	UiModal = (0, _aureliaFramework.inject)(Element)(UiModal) || UiModal;
	UiModal = (0, _aureliaFramework.customElement)('ui-modal')(UiModal) || UiModal;
	return UiModal;
})();

exports.UiModal = UiModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Z0NBTWdELG1CQUFtQjs7c0JBQ2xFLFFBQVE7Ozs7SUFJVCxPQUFPOzs7O3VCQUFQLE9BQU87Ozs7VUFFQSxLQUFLOzs7OztBQUViLFVBSkMsT0FBTyxDQUlOLE9BQU8sRUFBRzs7Ozs7QUFDdEIsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7RUFDdkI7O3VCQU5XLE9BQU87O1NBUVgsb0JBQUcsRUFBRTs7O1NBRUEsdUJBQUUsUUFBUSxFQUFHO0FBQ3pCLE9BQUssUUFBUSxFQUFHO0FBQ2YsNkJBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUNoQyxNQUFNO0FBQ04sNkJBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUNoQztHQUNEOzs7Z0JBaEJXLE9BQU87QUFBUCxRQUFPLEdBRG5CLDhCQUFRLE9BQU8sQ0FBRSxDQUNMLE9BQU8sS0FBUCxPQUFPO0FBQVAsUUFBTyxHQUZuQixxQ0FBZSxVQUFVLENBQUUsQ0FFZixPQUFPLEtBQVAsT0FBTztRQUFQLE9BQU8iLCJmaWxlIjoibW9kdWxlcy91aS1tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTW9kYWwgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvbW9kYWwuaHRtbFxuICovXG5cbmltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBjb250YWluZXJsZXNzLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuQGN1c3RvbUVsZW1lbnQoICd1aS1tb2RhbCcgKVxuQGluamVjdCggRWxlbWVudCApXG5leHBvcnQgY2xhc3MgVWlNb2RhbCB7XG5cblx0QGJpbmRhYmxlIGFjdGl2ZSA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKCBlbGVtZW50ICkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdH1cblxuXHRhdHRhY2hlZCgpIHt9XG5cblx0YWN0aXZlQ2hhbmdlZCggbmV3VmFsdWUgKSB7XG5cdFx0aWYgKCBuZXdWYWx1ZSApIHtcblx0XHRcdCQoIHRoaXMubW9kYWwgKS5tb2RhbCggJ3Nob3cnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoIHRoaXMubW9kYWwgKS5tb2RhbCggJ2hpZGUnICk7XG5cdFx0fVxuXHR9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
