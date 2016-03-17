System.register(['aurelia-framework', 'jquery'], function (_export) {
	"use strict";

	var inject, customElement, containerless, bindable, $, UiModal;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			customElement = _aureliaFramework.customElement;
			containerless = _aureliaFramework.containerless;
			bindable = _aureliaFramework.bindable;
		}, function (_jquery) {
			$ = _jquery['default'];
		}],
		execute: function () {
			UiModal = (function () {
				var _instanceInitializers = {};
				var _instanceInitializers = {};

				_createDecoratedClass(UiModal, [{
					key: 'active',
					decorators: [bindable],
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
							$(this.modal).modal('show');
						} else {
							$(this.modal).modal('hide');
						}
					}
				}], null, _instanceInitializers);

				var _UiModal = UiModal;
				UiModal = inject(Element)(UiModal) || UiModal;
				UiModal = customElement('ui-modal')(UiModal) || UiModal;
				return UiModal;
			})();

			_export('UiModal', UiModal);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7d0RBV0EsT0FBTzs7Ozs7Ozs7Ozs4QkFMWixNQUFNO3FDQUFFLGFBQWE7cUNBQUUsYUFBYTtnQ0FBRSxRQUFROzs7OztBQUt6QyxVQUFPOzs7OzBCQUFQLE9BQU87O2tCQUVsQixRQUFROzthQUFVLEtBQUs7Ozs7O0FBRWIsYUFKQyxPQUFPLENBSU4sT0FBTyxFQUFHOzs7OztBQUN0QixTQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN2Qjs7MEJBTlcsT0FBTzs7WUFRWCxvQkFBRyxFQUFFOzs7WUFFQSx1QkFBRSxRQUFRLEVBQUc7QUFDekIsVUFBSyxRQUFRLEVBQUc7QUFDZixRQUFDLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUUsQ0FBQztPQUNoQyxNQUFNO0FBQ04sUUFBQyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxLQUFLLENBQUUsTUFBTSxDQUFFLENBQUM7T0FDaEM7TUFDRDs7O21CQWhCVyxPQUFPO0FBQVAsV0FBTyxHQURuQixNQUFNLENBQUUsT0FBTyxDQUFFLENBQ0wsT0FBTyxLQUFQLE9BQU87QUFBUCxXQUFPLEdBRm5CLGFBQWEsQ0FBRSxVQUFVLENBQUUsQ0FFZixPQUFPLEtBQVAsT0FBTztXQUFQLE9BQU8iLCJmaWxlIjoibW9kdWxlcy91aS1tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTW9kYWwgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvbW9kYWwuaHRtbFxuICovXG5cbmltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBjb250YWluZXJsZXNzLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuQGN1c3RvbUVsZW1lbnQoICd1aS1tb2RhbCcgKVxuQGluamVjdCggRWxlbWVudCApXG5leHBvcnQgY2xhc3MgVWlNb2RhbCB7XG5cblx0QGJpbmRhYmxlIGFjdGl2ZSA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKCBlbGVtZW50ICkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdH1cblxuXHRhdHRhY2hlZCgpIHt9XG5cblx0YWN0aXZlQ2hhbmdlZCggbmV3VmFsdWUgKSB7XG5cdFx0aWYgKCBuZXdWYWx1ZSApIHtcblx0XHRcdCQoIHRoaXMubW9kYWwgKS5tb2RhbCggJ3Nob3cnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoIHRoaXMubW9kYWwgKS5tb2RhbCggJ2hpZGUnICk7XG5cdFx0fVxuXHR9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
