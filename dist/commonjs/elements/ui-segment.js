
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var UiSegment = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(UiSegment, [{
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
    }, {
        key: 'loading',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return false;
        },
        enumerable: true
    }, {
        key: 'disabled',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return false;
        },
        enumerable: true
    }], null, _instanceInitializers);

    function UiSegment(element) {
        _classCallCheck(this, _UiSegment);

        _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'variations', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'loading', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

        this._classes = new Set();

        this.logger = _aureliaFramework.LogManager.getLogger('ui-segment-element');
        this.element = element;
    }

    _createDecoratedClass(UiSegment, [{
        key: 'attached',
        value: function attached() {
            if (this.loading) {
                this._classes.add('loading');
            }
            if (this.disabled) {
                this._classes.add('disabled');
            }
            return true;
        }
    }, {
        key: 'loadingChanged',
        value: function loadingChanged(newValue) {
            this.logger.debug('Loading set to ' + newValue + '.');
            if (newValue) {
                this._classes.add('loading');
            } else {
                this._classes['delete']('loading');
            }
        }
    }, {
        key: 'disabledChanged',
        value: function disabledChanged(newValue) {
            this.logger.debug('Loading set to ' + newValue + '.');
            if (newValue) {
                this._classes.add('disabled');
            } else {
                this._classes['delete']('disabled');
            }
        }
    }, {
        key: 'classes',
        decorators: [(0, _aureliaFramework.computedFrom)('_classes')],
        get: function get() {
            var results = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._classes.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var cls = _step.value;

                    results.push(cls);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return results.join(' ');
        }
    }], null, _instanceInitializers);

    var _UiSegment = UiSegment;
    UiSegment = (0, _aureliaFramework.containerless)()(UiSegment) || UiSegment;
    UiSegment = (0, _aureliaFramework.customElement)('ui-segment')(UiSegment) || UiSegment;
    UiSegment = (0, _aureliaFramework.inject)(Element)(UiSegment) || UiSegment;
    return UiSegment;
})();

exports.UiSegment = UiSegment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXNlZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O2dDQU0wRSxtQkFBbUI7O0lBSzdGLFNBQVM7Ozs7MEJBQVQsU0FBUzs7OzttQkFFRCxJQUFJOzs7Ozs7O21CQUNFLElBQUk7Ozs7Ozs7bUJBQ1AsS0FBSzs7Ozs7OzttQkFDSixLQUFLOzs7OztBQUdmLGFBUkYsU0FBUyxDQVFOLE9BQU8sRUFBRTs7Ozs7Ozs7Ozs7YUFGckIsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFOztBQUdoQixZQUFJLENBQUMsTUFBTSxHQUFHLDZCQUFXLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3pELFlBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQzFCOzswQkFYUSxTQUFTOztlQXdCVixvQkFBRztBQUNQLGdCQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDZCxvQkFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDL0I7QUFDRCxnQkFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2Ysb0JBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQ2hDO0FBQ0QsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7OztlQUdhLHdCQUFDLFFBQVEsRUFBRTtBQUNyQixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLHFCQUFtQixRQUFRLE9BQUksQ0FBQztBQUNqRCxnQkFBSSxRQUFRLEVBQUU7QUFDVixvQkFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDaEMsTUFBTTtBQUNILG9CQUFJLENBQUMsUUFBUSxVQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbkM7U0FDSjs7O2VBR2MseUJBQUMsUUFBUSxFQUFFO0FBQ3RCLGdCQUFJLENBQUMsTUFBTSxDQUFDLEtBQUsscUJBQW1CLFFBQVEsT0FBSSxDQUFDO0FBQ2pELGdCQUFJLFFBQVEsRUFBRTtBQUNWLG9CQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNqQyxNQUFNO0FBQ0gsb0JBQUksQ0FBQyxRQUFRLFVBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNwQztTQUNKOzs7cUJBdkNBLG9DQUFhLFVBQVUsQ0FBQzthQUNkLGVBQUc7QUFDVixnQkFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOzs7Ozs7O0FBRWpCLHFDQUFnQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSw4SEFBRTt3QkFBN0IsR0FBRzs7QUFDUiwyQkFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxtQkFBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCOzs7cUJBckJRLFNBQVM7QUFBVCxhQUFTLEdBRHJCLHNDQUFlLENBQ0gsU0FBUyxLQUFULFNBQVM7QUFBVCxhQUFTLEdBRnJCLHFDQUFjLFlBQVksQ0FBQyxDQUVmLFNBQVMsS0FBVCxTQUFTO0FBQVQsYUFBUyxHQUhyQiw4QkFBTyxPQUFPLENBQUMsQ0FHSCxTQUFTLEtBQVQsU0FBUztXQUFULFNBQVMiLCJmaWxlIjoiZWxlbWVudHMvdWktc2VnbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogU2VnbWVudCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvc2VnbWVudC5odG1sXG4gKi9cblxuaW1wb3J0IHtjdXN0b21FbGVtZW50LCBjb21wdXRlZEZyb20sIGJpbmRhYmxlLCBjb250YWluZXJsZXNzLCBpbmplY3QsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50KVxuQGN1c3RvbUVsZW1lbnQoJ3VpLXNlZ21lbnQnKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVpU2VnbWVudCB7XG5cbiAgICBAYmluZGFibGUgdHlwZSA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHZhcmlhdGlvbnMgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBsb2FkaW5nID0gZmFsc2U7XG4gICAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XG4gICAgX2NsYXNzZXMgPSBuZXcgU2V0KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gTG9nTWFuYWdlci5nZXRMb2dnZXIoJ3VpLXNlZ21lbnQtZWxlbWVudCcpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIEBjb21wdXRlZEZyb20oJ19jbGFzc2VzJylcbiAgICBnZXQgY2xhc3NlcygpIHtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBjbHMgb2YgdGhpcy5fY2xhc3Nlcy5rZXlzKCkpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChjbHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzLmpvaW4oJyAnKTtcbiAgICB9XG5cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGFzc2VzLmFkZCgnbG9hZGluZycpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsYXNzZXMuYWRkKCdkaXNhYmxlZCcpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICBsb2FkaW5nQ2hhbmdlZChuZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTG9hZGluZyBzZXQgdG8gJHtuZXdWYWx1ZX0uYCk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY2xhc3Nlcy5hZGQoJ2xvYWRpbmcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NsYXNzZXMuZGVsZXRlKCdsb2FkaW5nJyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRpc2FibGVkQ2hhbmdlZChuZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTG9hZGluZyBzZXQgdG8gJHtuZXdWYWx1ZX0uYCk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY2xhc3Nlcy5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jbGFzc2VzLmRlbGV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
