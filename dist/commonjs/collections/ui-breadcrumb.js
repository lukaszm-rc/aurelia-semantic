
"use strict";

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O2dDQU15RCxtQkFBbUI7O0lBSzVFLFlBQVk7Ozs7dUJBQVosWUFBWTs7OztVQUVKLElBQUk7Ozs7Ozs7VUFDUCxJQUFJOzs7OztBQUVWLFVBTEMsWUFBWSxDQUtYLE9BQU8sRUFBRzs7Ozs7OztBQUN0QixNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztFQUN2Qjs7dUJBUFcsWUFBWTs7U0FTaEIsb0JBQUcsRUFFVjs7O3FCQVhXLFlBQVk7QUFBWixhQUFZLHdDQUFaLFlBQVksS0FBWixZQUFZO0FBQVosYUFBWSxHQUZ4QixxQ0FBZSxlQUFlLENBQUUsQ0FFcEIsWUFBWSxLQUFaLFlBQVk7QUFBWixhQUFZLEdBSHhCLDhCQUFPLE9BQU8sQ0FBQyxDQUdILFlBQVksS0FBWixZQUFZO1FBQVosWUFBWTs7Ozs7SUFzQlosbUJBQW1CO1VBQW5CLG1CQUFtQjs7Ozs0QkFBbkIsbUJBQW1CO0FBQW5CLG9CQUFtQixHQUQvQixzQ0FBZSxDQUNILG1CQUFtQixLQUFuQixtQkFBbUI7QUFBbkIsb0JBQW1CLEdBRi9CLCtCQUFRLDhCQUE4QixDQUFDLENBRTNCLG1CQUFtQixLQUFuQixtQkFBbUI7QUFBbkIsb0JBQW1CLEdBSC9CLHFDQUFlLHVCQUF1QixDQUFFLENBRzVCLG1CQUFtQixLQUFuQixtQkFBbUI7UUFBbkIsbUJBQW1CIiwiZmlsZSI6ImNvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEJyZWFkY3J1bWIgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL2JyZWFkY3J1bWIuaHRtbFxuICovXG5cbmltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCB1c2VWaWV3LCBjb250YWluZXJsZXNzLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCggJ3VpLWJyZWFkY3J1bWInIClcbkBjb250YWluZXJsZXNzXG5leHBvcnQgY2xhc3MgVWlCcmVhZGNydW1iIHtcblxuXHRAYmluZGFibGUgZGl2aWRlciA9IG51bGw7XG5cdEBiaW5kYWJsZSBzaXplID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvciggRWxlbWVudCApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBFbGVtZW50O1xuXHR9XG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0Ly8gVE9ETzogRmlndXJlIG91dCBob3cgdG8gYXV0by1pbmplY3QgdGhlIGRpdmlkZXJcblx0fVxuXG59XG5cblxuLyoqXG4gKiBuYy1icmVhZGNydW1iLXNlY3Rpb25cbiAqL1xuQGN1c3RvbUVsZW1lbnQoICd1aS1icmVhZGNydW1iLXNlY3Rpb24nIClcbkB1c2VWaWV3KCcuL3VpLWJyZWFkY3J1bWIvc2VjdGlvbi5odG1sJylcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVaUJyZWFkY3J1bWJTZWN0aW9uIHt9XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
