define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var UiList = (function () {
    var _instanceInitializers = {};

    function UiList() {
      _classCallCheck(this, _UiList);

      _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'variations', _instanceInitializers);
    }

    _createDecoratedClass(UiList, [{
      key: 'type',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'variations',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    var _UiList = UiList;
    UiList = (0, _aureliaFramework.containerless)()(UiList) || UiList;
    UiList = (0, _aureliaFramework.customElement)('ui-list')(UiList) || UiList;
    return UiList;
  })();

  exports.UiList = UiList;

  var UiListItem = (function () {
    function UiListItem() {
      _classCallCheck(this, _UiListItem);
    }

    var _UiListItem = UiListItem;
    UiListItem = (0, _aureliaFramework.containerless)()(UiListItem) || UiListItem;
    UiListItem = (0, _aureliaFramework.useView)('./ui-list/item.html')(UiListItem) || UiListItem;
    UiListItem = (0, _aureliaFramework.customElement)('ui-list-item')(UiListItem) || UiListItem;
    return UiListItem;
  })();

  exports.UiListItem = UiListItem;

  var UiListItemContent = (function () {
    function UiListItemContent() {
      _classCallCheck(this, _UiListItemContent);
    }

    var _UiListItemContent = UiListItemContent;
    UiListItemContent = (0, _aureliaFramework.containerless)()(UiListItemContent) || UiListItemContent;
    UiListItemContent = (0, _aureliaFramework.useView)('./ui-list/item-content.html')(UiListItemContent) || UiListItemContent;
    UiListItemContent = (0, _aureliaFramework.customElement)('ui-list-item-content')(UiListItemContent) || UiListItemContent;
    return UiListItemContent;
  })();

  exports.UiListItemContent = UiListItemContent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQVksQ0FBQzs7Ozs7Ozs7Ozs7O01BVUEsTUFBTTs7O2FBQU4sTUFBTTs7Ozs7Ozs7MEJBQU4sTUFBTTs7cUNBSm9DLFFBQVE7O2VBTTdDLElBQUk7Ozs7O3FDQU5pQyxRQUFROztlQU92QyxJQUFJOzs7OztrQkFIZixNQUFNO0FBQU4sVUFBTSxHQURsQixzQkFIdUMsYUFBYSxHQUdyQyxDQUNILE1BQU0sS0FBTixNQUFNO0FBQU4sVUFBTSxHQUZsQixzQkFGZSxhQUFhLEVBRWIsU0FBUyxDQUFFLENBRWQsTUFBTSxLQUFOLE1BQU07V0FBTixNQUFNOzs7OztNQWNOLFVBQVU7YUFBVixVQUFVOzs7O3NCQUFWLFVBQVU7QUFBVixjQUFVLEdBRHRCLHNCQWpCdUMsYUFBYSxHQWlCckMsQ0FDSCxVQUFVLEtBQVYsVUFBVTtBQUFWLGNBQVUsR0FGdEIsc0JBaEI4QixPQUFPLEVBZ0I3QixxQkFBcUIsQ0FBQyxDQUVsQixVQUFVLEtBQVYsVUFBVTtBQUFWLGNBQVUsR0FIdEIsc0JBZmUsYUFBYSxFQWViLGNBQWMsQ0FBRSxDQUduQixVQUFVLEtBQVYsVUFBVTtXQUFWLFVBQVU7Ozs7O01BU1YsaUJBQWlCO2FBQWpCLGlCQUFpQjs7Ozs2QkFBakIsaUJBQWlCO0FBQWpCLHFCQUFpQixHQUQ3QixzQkExQnVDLGFBQWEsR0EwQnJDLENBQ0gsaUJBQWlCLEtBQWpCLGlCQUFpQjtBQUFqQixxQkFBaUIsR0FGN0Isc0JBekI4QixPQUFPLEVBeUI3Qiw2QkFBNkIsQ0FBQyxDQUUxQixpQkFBaUIsS0FBakIsaUJBQWlCO0FBQWpCLHFCQUFpQixHQUg3QixzQkF4QmUsYUFBYSxFQXdCYixzQkFBc0IsQ0FBRSxDQUczQixpQkFBaUIsS0FBakIsaUJBQWlCO1dBQWpCLGlCQUFpQiIsImZpbGUiOiJlbGVtZW50cy91aS1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBMaXN0IC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9saXN0Lmh0bWxcbiAqL1xuXG5pbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgdXNlVmlldywgY29udGFpbmVybGVzcywgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoICd1aS1saXN0JyApXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVWlMaXN0IHtcblxuXHRAYmluZGFibGUgdHlwZSA9IG51bGw7XG5cdEBiaW5kYWJsZSB2YXJpYXRpb25zID0gbnVsbDtcblxufVxuXG5cbi8qKlxuICogdWktbGlzdC1pdGVtXG4gKi9cbkBjdXN0b21FbGVtZW50KCAndWktbGlzdC1pdGVtJyApXG5AdXNlVmlldygnLi91aS1saXN0L2l0ZW0uaHRtbCcpXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVWlMaXN0SXRlbSB7fVxuXG5cbi8qKlxuICogdWktbGlzdC1pdGVtLWNvbnRlbnRcbiAqL1xuQGN1c3RvbUVsZW1lbnQoICd1aS1saXN0LWl0ZW0tY29udGVudCcgKVxuQHVzZVZpZXcoJy4vdWktbGlzdC9pdGVtLWNvbnRlbnQuaHRtbCcpXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVWlMaXN0SXRlbUNvbnRlbnQge31cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
