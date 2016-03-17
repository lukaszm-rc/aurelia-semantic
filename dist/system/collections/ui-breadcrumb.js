System.register(['aurelia-framework'], function (_export) {
	"use strict";

	var inject, customElement, useView, containerless, bindable, UiBreadcrumb, UiBreadcrumbSection;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			customElement = _aureliaFramework.customElement;
			useView = _aureliaFramework.useView;
			containerless = _aureliaFramework.containerless;
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			UiBreadcrumb = (function () {
				var _instanceInitializers = {};
				var _instanceInitializers = {};

				_createDecoratedClass(UiBreadcrumb, [{
					key: 'divider',
					decorators: [bindable],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'size',
					decorators: [bindable],
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
				UiBreadcrumb = containerless(UiBreadcrumb) || UiBreadcrumb;
				UiBreadcrumb = customElement('ui-breadcrumb')(UiBreadcrumb) || UiBreadcrumb;
				UiBreadcrumb = inject(Element)(UiBreadcrumb) || UiBreadcrumb;
				return UiBreadcrumb;
			})();

			_export('UiBreadcrumb', UiBreadcrumb);

			UiBreadcrumbSection = (function () {
				function UiBreadcrumbSection() {
					_classCallCheck(this, _UiBreadcrumbSection);
				}

				var _UiBreadcrumbSection = UiBreadcrumbSection;
				UiBreadcrumbSection = containerless()(UiBreadcrumbSection) || UiBreadcrumbSection;
				UiBreadcrumbSection = useView('./ui-breadcrumb/section.html')(UiBreadcrumbSection) || UiBreadcrumbSection;
				UiBreadcrumbSection = customElement('ui-breadcrumb-section')(UiBreadcrumbSection) || UiBreadcrumbSection;
				return UiBreadcrumbSection;
			})();

			_export('UiBreadcrumbSection', UiBreadcrumbSection);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7OERBV0EsWUFBWSxFQXNCWixtQkFBbUI7Ozs7Ozs7Ozs7OEJBM0J4QixNQUFNO3FDQUFFLGFBQWE7K0JBQUUsT0FBTztxQ0FBRSxhQUFhO2dDQUFFLFFBQVE7OztBQUtsRCxlQUFZOzs7OzBCQUFaLFlBQVk7O2tCQUV2QixRQUFROzthQUFXLElBQUk7Ozs7O2tCQUN2QixRQUFROzthQUFRLElBQUk7Ozs7O0FBRVYsYUFMQyxZQUFZLENBS1gsT0FBTyxFQUFHOzs7Ozs7O0FBQ3RCLFNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3ZCOzswQkFQVyxZQUFZOztZQVNoQixvQkFBRyxFQUVWOzs7d0JBWFcsWUFBWTtBQUFaLGdCQUFZLEdBRHhCLGFBQWEsQ0FDRCxZQUFZLEtBQVosWUFBWTtBQUFaLGdCQUFZLEdBRnhCLGFBQWEsQ0FBRSxlQUFlLENBQUUsQ0FFcEIsWUFBWSxLQUFaLFlBQVk7QUFBWixnQkFBWSxHQUh4QixNQUFNLENBQUMsT0FBTyxDQUFDLENBR0gsWUFBWSxLQUFaLFlBQVk7V0FBWixZQUFZOzs7OztBQXNCWixzQkFBbUI7YUFBbkIsbUJBQW1COzs7OytCQUFuQixtQkFBbUI7QUFBbkIsdUJBQW1CLEdBRC9CLGFBQWEsRUFBRSxDQUNILG1CQUFtQixLQUFuQixtQkFBbUI7QUFBbkIsdUJBQW1CLEdBRi9CLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUUzQixtQkFBbUIsS0FBbkIsbUJBQW1CO0FBQW5CLHVCQUFtQixHQUgvQixhQUFhLENBQUUsdUJBQXVCLENBQUUsQ0FHNUIsbUJBQW1CLEtBQW5CLG1CQUFtQjtXQUFuQixtQkFBbUIiLCJmaWxlIjoiY29sbGVjdGlvbnMvdWktYnJlYWRjcnVtYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQnJlYWRjcnVtYiAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvYnJlYWRjcnVtYi5odG1sXG4gKi9cblxuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIHVzZVZpZXcsIGNvbnRhaW5lcmxlc3MsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCAndWktYnJlYWRjcnVtYicgKVxuQGNvbnRhaW5lcmxlc3NcbmV4cG9ydCBjbGFzcyBVaUJyZWFkY3J1bWIge1xuXG5cdEBiaW5kYWJsZSBkaXZpZGVyID0gbnVsbDtcblx0QGJpbmRhYmxlIHNpemUgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKCBFbGVtZW50ICkge1xuXHRcdHRoaXMuZWxlbWVudCA9IEVsZW1lbnQ7XG5cdH1cblxuXHRhdHRhY2hlZCgpIHtcblx0XHQvLyBUT0RPOiBGaWd1cmUgb3V0IGhvdyB0byBhdXRvLWluamVjdCB0aGUgZGl2aWRlclxuXHR9XG5cbn1cblxuXG4vKipcbiAqIG5jLWJyZWFkY3J1bWItc2VjdGlvblxuICovXG5AY3VzdG9tRWxlbWVudCggJ3VpLWJyZWFkY3J1bWItc2VjdGlvbicgKVxuQHVzZVZpZXcoJy4vdWktYnJlYWRjcnVtYi9zZWN0aW9uLmh0bWwnKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVpQnJlYWRjcnVtYlNlY3Rpb24ge31cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
