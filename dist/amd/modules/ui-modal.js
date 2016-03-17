define(['exports', 'aurelia-framework', 'jquery'], function (exports, _aureliaFramework, _jquery) {
	"use strict";

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	var _$ = _interopRequireDefault(_jquery);

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
					(0, _$['default'])(this.modal).modal('show');
				} else {
					(0, _$['default'])(this.modal).modal('hide');
				}
			}
		}], null, _instanceInitializers);

		var _UiModal = UiModal;
		UiModal = (0, _aureliaFramework.inject)(Element)(UiModal) || UiModal;
		UiModal = (0, _aureliaFramework.customElement)('ui-modal')(UiModal) || UiModal;
		return UiModal;
	})();

	exports.UiModal = UiModal;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztLQVdBLE9BQU87Ozs7d0JBQVAsT0FBTzs7a0NBTDBCLFFBQVE7O1dBT2xDLEtBQUs7Ozs7O0FBRWIsV0FKQyxPQUFPLENBSU4sT0FBTyxFQUFHOzs7OztBQUN0QixPQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztHQUN2Qjs7d0JBTlcsT0FBTzs7VUFRWCxvQkFBRyxFQUFFOzs7VUFFQSx1QkFBRSxRQUFRLEVBQUc7QUFDekIsUUFBSyxRQUFRLEVBQUc7QUFDZix3QkFBRyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsS0FBSyxDQUFFLE1BQU0sQ0FBRSxDQUFDO0tBQ2hDLE1BQU07QUFDTix3QkFBRyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsS0FBSyxDQUFFLE1BQU0sQ0FBRSxDQUFDO0tBQ2hDO0lBQ0Q7OztpQkFoQlcsT0FBTztBQUFQLFNBQU8sR0FEbkIsc0JBSk8sTUFBTSxFQUlMLE9BQU8sQ0FBRSxDQUNMLE9BQU8sS0FBUCxPQUFPO0FBQVAsU0FBTyxHQUZuQixzQkFIZSxhQUFhLEVBR2IsVUFBVSxDQUFFLENBRWYsT0FBTyxLQUFQLE9BQU87U0FBUCxPQUFPIiwiZmlsZSI6Im1vZHVsZXMvdWktbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIE1vZGFsIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL21vZGFsLmh0bWxcbiAqL1xuXG5pbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbkBjdXN0b21FbGVtZW50KCAndWktbW9kYWwnIClcbkBpbmplY3QoIEVsZW1lbnQgKVxuZXhwb3J0IGNsYXNzIFVpTW9kYWwge1xuXG5cdEBiaW5kYWJsZSBhY3RpdmUgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvciggZWxlbWVudCApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHR9XG5cblx0YXR0YWNoZWQoKSB7fVxuXG5cdGFjdGl2ZUNoYW5nZWQoIG5ld1ZhbHVlICkge1xuXHRcdGlmICggbmV3VmFsdWUgKSB7XG5cdFx0XHQkKCB0aGlzLm1vZGFsICkubW9kYWwoICdzaG93JyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCB0aGlzLm1vZGFsICkubW9kYWwoICdoaWRlJyApO1xuXHRcdH1cblx0fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
