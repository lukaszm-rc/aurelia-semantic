define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
	"use strict";

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	var UiBreadcrumb = (function () {
		var _instanceInitializers = {};
		var _instanceInitializers = {};

		_createDecoratedClass(UiBreadcrumb, [{
			key: 'divider',
			decorators: [_aureliaFramework.bindable],
			initializer: function initializer() {
				return null;
			},
			enumerable: true
		}, {
			key: 'size',
			decorators: [_aureliaFramework.bindable],
			initializer: function initializer() {
				return null;
			},
			enumerable: true
		}], null, _instanceInitializers);

		function UiBreadcrumb(Element) {
			_classCallCheck(this, _UiBreadcrumb);

			_defineDecoratedPropertyDescriptor(this, 'divider', _instanceInitializers);

			_defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

			this.element = Element;
		}

		_createDecoratedClass(UiBreadcrumb, [{
			key: 'attached',
			value: function attached() {}
		}], null, _instanceInitializers);

		var _UiBreadcrumb = UiBreadcrumb;
		UiBreadcrumb = (0, _aureliaFramework.containerless)(UiBreadcrumb) || UiBreadcrumb;
		UiBreadcrumb = (0, _aureliaFramework.customElement)('ui-breadcrumb')(UiBreadcrumb) || UiBreadcrumb;
		UiBreadcrumb = (0, _aureliaFramework.inject)(Element)(UiBreadcrumb) || UiBreadcrumb;
		return UiBreadcrumb;
	})();

	exports.UiBreadcrumb = UiBreadcrumb;

	var UiBreadcrumbSection = (function () {
		function UiBreadcrumbSection() {
			_classCallCheck(this, _UiBreadcrumbSection);
		}

		var _UiBreadcrumbSection = UiBreadcrumbSection;
		UiBreadcrumbSection = (0, _aureliaFramework.containerless)()(UiBreadcrumbSection) || UiBreadcrumbSection;
		UiBreadcrumbSection = (0, _aureliaFramework.useView)('./ui-breadcrumb/section.html')(UiBreadcrumbSection) || UiBreadcrumbSection;
		UiBreadcrumbSection = (0, _aureliaFramework.customElement)('ui-breadcrumb-section')(UiBreadcrumbSection) || UiBreadcrumbSection;
		return UiBreadcrumbSection;
	})();

	exports.UiBreadcrumbSection = UiBreadcrumbSection;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7O0tBV0EsWUFBWTs7Ozt3QkFBWixZQUFZOztrQ0FMOEIsUUFBUTs7V0FPMUMsSUFBSTs7Ozs7a0NBUDhCLFFBQVE7O1dBUTdDLElBQUk7Ozs7O0FBRVYsV0FMQyxZQUFZLENBS1gsT0FBTyxFQUFHOzs7Ozs7O0FBQ3RCLE9BQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0dBQ3ZCOzt3QkFQVyxZQUFZOztVQVNoQixvQkFBRyxFQUVWOzs7c0JBWFcsWUFBWTtBQUFaLGNBQVkseUJBTGUsYUFBYSxFQUt4QyxZQUFZLEtBQVosWUFBWTtBQUFaLGNBQVksR0FGeEIsc0JBSGUsYUFBYSxFQUdiLGVBQWUsQ0FBRSxDQUVwQixZQUFZLEtBQVosWUFBWTtBQUFaLGNBQVksR0FIeEIsc0JBRk8sTUFBTSxFQUVOLE9BQU8sQ0FBQyxDQUdILFlBQVksS0FBWixZQUFZO1NBQVosWUFBWTs7Ozs7S0FzQlosbUJBQW1CO1dBQW5CLG1CQUFtQjs7Ozs2QkFBbkIsbUJBQW1CO0FBQW5CLHFCQUFtQixHQUQvQixzQkExQnVDLGFBQWEsR0EwQnJDLENBQ0gsbUJBQW1CLEtBQW5CLG1CQUFtQjtBQUFuQixxQkFBbUIsR0FGL0Isc0JBekI4QixPQUFPLEVBeUI3Qiw4QkFBOEIsQ0FBQyxDQUUzQixtQkFBbUIsS0FBbkIsbUJBQW1CO0FBQW5CLHFCQUFtQixHQUgvQixzQkF4QmUsYUFBYSxFQXdCYix1QkFBdUIsQ0FBRSxDQUc1QixtQkFBbUIsS0FBbkIsbUJBQW1CO1NBQW5CLG1CQUFtQiIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1icmVhZGNydW1iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBCcmVhZGNydW1iIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9icmVhZGNydW1iLmh0bWxcbiAqL1xuXG5pbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgdXNlVmlldywgY29udGFpbmVybGVzcywgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50KVxuQGN1c3RvbUVsZW1lbnQoICd1aS1icmVhZGNydW1iJyApXG5AY29udGFpbmVybGVzc1xuZXhwb3J0IGNsYXNzIFVpQnJlYWRjcnVtYiB7XG5cblx0QGJpbmRhYmxlIGRpdmlkZXIgPSBudWxsO1xuXHRAYmluZGFibGUgc2l6ZSA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoIEVsZW1lbnQgKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gRWxlbWVudDtcblx0fVxuXG5cdGF0dGFjaGVkKCkge1xuXHRcdC8vIFRPRE86IEZpZ3VyZSBvdXQgaG93IHRvIGF1dG8taW5qZWN0IHRoZSBkaXZpZGVyXG5cdH1cblxufVxuXG5cbi8qKlxuICogbmMtYnJlYWRjcnVtYi1zZWN0aW9uXG4gKi9cbkBjdXN0b21FbGVtZW50KCAndWktYnJlYWRjcnVtYi1zZWN0aW9uJyApXG5AdXNlVmlldygnLi91aS1icmVhZGNydW1iL3NlY3Rpb24uaHRtbCcpXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVWlCcmVhZGNydW1iU2VjdGlvbiB7fVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
