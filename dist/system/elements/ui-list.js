System.register(['aurelia-framework'], function (_export) {
  "use strict";

  var inject, customElement, useView, containerless, bindable, UiList, UiListItem, UiListItemContent;

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
      UiList = (function () {
        var _instanceInitializers = {};

        function UiList() {
          _classCallCheck(this, _UiList);

          _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'variations', _instanceInitializers);
        }

        _createDecoratedClass(UiList, [{
          key: 'type',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'variations',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        var _UiList = UiList;
        UiList = containerless()(UiList) || UiList;
        UiList = customElement('ui-list')(UiList) || UiList;
        return UiList;
      })();

      _export('UiList', UiList);

      UiListItem = (function () {
        function UiListItem() {
          _classCallCheck(this, _UiListItem);
        }

        var _UiListItem = UiListItem;
        UiListItem = containerless()(UiListItem) || UiListItem;
        UiListItem = useView('./ui-list/item.html')(UiListItem) || UiListItem;
        UiListItem = customElement('ui-list-item')(UiListItem) || UiListItem;
        return UiListItem;
      })();

      _export('UiListItem', UiListItem);

      UiListItemContent = (function () {
        function UiListItemContent() {
          _classCallCheck(this, _UiListItemContent);
        }

        var _UiListItemContent = UiListItemContent;
        UiListItemContent = containerless()(UiListItemContent) || UiListItemContent;
        UiListItemContent = useView('./ui-list/item-content.html')(UiListItemContent) || UiListItemContent;
        UiListItemContent = customElement('ui-list-item-content')(UiListItemContent) || UiListItemContent;
        return UiListItemContent;
      })();

      _export('UiListItemContent', UiListItemContent);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQVksQ0FBQzs7K0RBVUEsTUFBTSxFQWNOLFVBQVUsRUFTVixpQkFBaUI7Ozs7Ozs7Ozs7aUNBM0J0QixNQUFNO3dDQUFFLGFBQWE7a0NBQUUsT0FBTzt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7OztBQUlsRCxZQUFNOzs7aUJBQU4sTUFBTTs7Ozs7Ozs7OEJBQU4sTUFBTTs7dUJBRWpCLFFBQVE7O21CQUFRLElBQUk7Ozs7O3VCQUNwQixRQUFROzttQkFBYyxJQUFJOzs7OztzQkFIZixNQUFNO0FBQU4sY0FBTSxHQURsQixhQUFhLEVBQUUsQ0FDSCxNQUFNLEtBQU4sTUFBTTtBQUFOLGNBQU0sR0FGbEIsYUFBYSxDQUFFLFNBQVMsQ0FBRSxDQUVkLE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTTs7Ozs7QUFjTixnQkFBVTtpQkFBVixVQUFVOzs7OzBCQUFWLFVBQVU7QUFBVixrQkFBVSxHQUR0QixhQUFhLEVBQUUsQ0FDSCxVQUFVLEtBQVYsVUFBVTtBQUFWLGtCQUFVLEdBRnRCLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUVsQixVQUFVLEtBQVYsVUFBVTtBQUFWLGtCQUFVLEdBSHRCLGFBQWEsQ0FBRSxjQUFjLENBQUUsQ0FHbkIsVUFBVSxLQUFWLFVBQVU7ZUFBVixVQUFVOzs7OztBQVNWLHVCQUFpQjtpQkFBakIsaUJBQWlCOzs7O2lDQUFqQixpQkFBaUI7QUFBakIseUJBQWlCLEdBRDdCLGFBQWEsRUFBRSxDQUNILGlCQUFpQixLQUFqQixpQkFBaUI7QUFBakIseUJBQWlCLEdBRjdCLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUUxQixpQkFBaUIsS0FBakIsaUJBQWlCO0FBQWpCLHlCQUFpQixHQUg3QixhQUFhLENBQUUsc0JBQXNCLENBQUUsQ0FHM0IsaUJBQWlCLEtBQWpCLGlCQUFpQjtlQUFqQixpQkFBaUIiLCJmaWxlIjoiZWxlbWVudHMvdWktbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTGlzdCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvbGlzdC5odG1sXG4gKi9cblxuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIHVzZVZpZXcsIGNvbnRhaW5lcmxlc3MsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCAndWktbGlzdCcgKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVpTGlzdCB7XG5cblx0QGJpbmRhYmxlIHR5cGUgPSBudWxsO1xuXHRAYmluZGFibGUgdmFyaWF0aW9ucyA9IG51bGw7XG5cbn1cblxuXG4vKipcbiAqIHVpLWxpc3QtaXRlbVxuICovXG5AY3VzdG9tRWxlbWVudCggJ3VpLWxpc3QtaXRlbScgKVxuQHVzZVZpZXcoJy4vdWktbGlzdC9pdGVtLmh0bWwnKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVpTGlzdEl0ZW0ge31cblxuXG4vKipcbiAqIHVpLWxpc3QtaXRlbS1jb250ZW50XG4gKi9cbkBjdXN0b21FbGVtZW50KCAndWktbGlzdC1pdGVtLWNvbnRlbnQnIClcbkB1c2VWaWV3KCcuL3VpLWxpc3QvaXRlbS1jb250ZW50Lmh0bWwnKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVpTGlzdEl0ZW1Db250ZW50IHt9XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
