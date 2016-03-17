define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXNlZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdCQUFZLENBQUM7Ozs7Ozs7Ozs7OztRQVdBLFNBQVM7Ozs7OEJBQVQsU0FBUzs7MkNBTGUsUUFBUTs7dUJBT3hCLElBQUk7Ozs7OzJDQVBZLFFBQVE7O3VCQVFsQixJQUFJOzs7OzsyQ0FSTSxRQUFROzt1QkFTckIsS0FBSzs7Ozs7MkNBVFEsUUFBUTs7dUJBVXBCLEtBQUs7Ozs7O0FBR2YsaUJBUkYsU0FBUyxDQVFOLE9BQU8sRUFBRTs7Ozs7Ozs7Ozs7aUJBRnJCLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRTs7QUFHaEIsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsa0JBZGdELFVBQVUsQ0FjL0MsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDekQsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQzFCOzs4QkFYUSxTQUFTOzttQkF3QlYsb0JBQUc7QUFDUCxvQkFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2Qsd0JBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2lCQUMvQjtBQUNELG9CQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDZix3QkFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7aUJBQ2hDO0FBQ0QsdUJBQU8sSUFBSSxDQUFDO2FBQ2Y7OzttQkFHYSx3QkFBQyxRQUFRLEVBQUU7QUFDckIsb0JBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxxQkFBbUIsUUFBUSxPQUFJLENBQUM7QUFDakQsb0JBQUksUUFBUSxFQUFFO0FBQ1Ysd0JBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNoQyxNQUFNO0FBQ0gsd0JBQUksQ0FBQyxRQUFRLFVBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDbkM7YUFDSjs7O21CQUdjLHlCQUFDLFFBQVEsRUFBRTtBQUN0QixvQkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLHFCQUFtQixRQUFRLE9BQUksQ0FBQztBQUNqRCxvQkFBSSxRQUFRLEVBQUU7QUFDVix3QkFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ2pDLE1BQU07QUFDSCx3QkFBSSxDQUFDLFFBQVEsVUFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNwQzthQUNKOzs7eUJBdkNBLHNCQWxCa0IsWUFBWSxFQWtCakIsVUFBVSxDQUFDO2lCQUNkLGVBQUc7QUFDVixvQkFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOzs7Ozs7O0FBRWpCLHlDQUFnQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSw4SEFBRTs0QkFBN0IsR0FBRzs7QUFDUiwrQkFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCx1QkFBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVCOzs7eUJBckJRLFNBQVM7QUFBVCxpQkFBUyxHQURyQixzQkFKOEMsYUFBYSxHQUk1QyxDQUNILFNBQVMsS0FBVCxTQUFTO0FBQVQsaUJBQVMsR0FGckIsc0JBSE8sYUFBYSxFQUdOLFlBQVksQ0FBQyxDQUVmLFNBQVMsS0FBVCxTQUFTO0FBQVQsaUJBQVMsR0FIckIsc0JBRjZELE1BQU0sRUFFNUQsT0FBTyxDQUFDLENBR0gsU0FBUyxLQUFULFNBQVM7ZUFBVCxTQUFTIiwiZmlsZSI6ImVsZW1lbnRzL3VpLXNlZ21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFNlZ21lbnQgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3NlZ21lbnQuaHRtbFxuICovXG5cbmltcG9ydCB7Y3VzdG9tRWxlbWVudCwgY29tcHV0ZWRGcm9tLCBiaW5kYWJsZSwgY29udGFpbmVybGVzcywgaW5qZWN0LCBMb2dNYW5hZ2VyfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCd1aS1zZWdtZW50JylcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVaVNlZ21lbnQge1xuXG4gICAgQGJpbmRhYmxlIHR5cGUgPSBudWxsO1xuICAgIEBiaW5kYWJsZSB2YXJpYXRpb25zID0gbnVsbDtcbiAgICBAYmluZGFibGUgbG9hZGluZyA9IGZhbHNlO1xuICAgIEBiaW5kYWJsZSBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIF9jbGFzc2VzID0gbmV3IFNldCgpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmxvZ2dlciA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCd1aS1zZWdtZW50LWVsZW1lbnQnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBAY29tcHV0ZWRGcm9tKCdfY2xhc3NlcycpXG4gICAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgY2xzIG9mIHRoaXMuX2NsYXNzZXMua2V5cygpKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goY2xzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cy5qb2luKCcgJyk7XG4gICAgfVxuXG5cbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5fY2xhc3Nlcy5hZGQoJ2xvYWRpbmcnKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGFzc2VzLmFkZCgnZGlzYWJsZWQnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgbG9hZGluZ0NoYW5nZWQobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYExvYWRpbmcgc2V0IHRvICR7bmV3VmFsdWV9LmApO1xuICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsYXNzZXMuYWRkKCdsb2FkaW5nJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jbGFzc2VzLmRlbGV0ZSgnbG9hZGluZycpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBkaXNhYmxlZENoYW5nZWQobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYExvYWRpbmcgc2V0IHRvICR7bmV3VmFsdWV9LmApO1xuICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsYXNzZXMuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2xhc3Nlcy5kZWxldGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
