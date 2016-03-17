System.register(['aurelia-framework'], function (_export) {
    "use strict";

    var customElement, computedFrom, bindable, containerless, inject, LogManager, UiSegment;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
            computedFrom = _aureliaFramework.computedFrom;
            bindable = _aureliaFramework.bindable;
            containerless = _aureliaFramework.containerless;
            inject = _aureliaFramework.inject;
            LogManager = _aureliaFramework.LogManager;
        }],
        execute: function () {
            UiSegment = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(UiSegment, [{
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
                }, {
                    key: 'loading',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return false;
                    },
                    enumerable: true
                }, {
                    key: 'disabled',
                    decorators: [bindable],
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

                    this.logger = LogManager.getLogger('ui-segment-element');
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
                    decorators: [computedFrom('_classes')],
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
                UiSegment = containerless()(UiSegment) || UiSegment;
                UiSegment = customElement('ui-segment')(UiSegment) || UiSegment;
                UiSegment = inject(Element)(UiSegment) || UiSegment;
                return UiSegment;
            })();

            _export('UiSegment', UiSegment);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXNlZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdCQUFZLENBQUM7O2tGQVdBLFNBQVM7Ozs7Ozs7Ozs7OENBTGQsYUFBYTs2Q0FBRSxZQUFZO3lDQUFFLFFBQVE7OENBQUUsYUFBYTt1Q0FBRSxNQUFNOzJDQUFFLFVBQVU7OztBQUtuRSxxQkFBUzs7OztzQ0FBVCxTQUFTOztpQ0FFakIsUUFBUTs7K0JBQVEsSUFBSTs7Ozs7aUNBQ3BCLFFBQVE7OytCQUFjLElBQUk7Ozs7O2lDQUMxQixRQUFROzsrQkFBVyxLQUFLOzs7OztpQ0FDeEIsUUFBUTs7K0JBQVksS0FBSzs7Ozs7QUFHZix5QkFSRixTQUFTLENBUU4sT0FBTyxFQUFFOzs7Ozs7Ozs7Ozt5QkFGckIsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFOztBQUdoQix3QkFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDekQsd0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2lCQUMxQjs7c0NBWFEsU0FBUzs7MkJBd0JWLG9CQUFHO0FBQ1AsNEJBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNkLGdDQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTt5QkFDL0I7QUFDRCw0QkFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2YsZ0NBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO3lCQUNoQztBQUNELCtCQUFPLElBQUksQ0FBQztxQkFDZjs7OzJCQUdhLHdCQUFDLFFBQVEsRUFBRTtBQUNyQiw0QkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLHFCQUFtQixRQUFRLE9BQUksQ0FBQztBQUNqRCw0QkFBSSxRQUFRLEVBQUU7QUFDVixnQ0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7eUJBQ2hDLE1BQU07QUFDSCxnQ0FBSSxDQUFDLFFBQVEsVUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lCQUNuQztxQkFDSjs7OzJCQUdjLHlCQUFDLFFBQVEsRUFBRTtBQUN0Qiw0QkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLHFCQUFtQixRQUFRLE9BQUksQ0FBQztBQUNqRCw0QkFBSSxRQUFRLEVBQUU7QUFDVixnQ0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7eUJBQ2pDLE1BQU07QUFDSCxnQ0FBSSxDQUFDLFFBQVEsVUFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUNwQztxQkFDSjs7O2lDQXZDQSxZQUFZLENBQUMsVUFBVSxDQUFDO3lCQUNkLGVBQUc7QUFDViw0QkFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOzs7Ozs7O0FBRWpCLGlEQUFnQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSw4SEFBRTtvQ0FBN0IsR0FBRzs7QUFDUix1Q0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs2QkFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCwrQkFBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUM1Qjs7O2lDQXJCUSxTQUFTO0FBQVQseUJBQVMsR0FEckIsYUFBYSxFQUFFLENBQ0gsU0FBUyxLQUFULFNBQVM7QUFBVCx5QkFBUyxHQUZyQixhQUFhLENBQUMsWUFBWSxDQUFDLENBRWYsU0FBUyxLQUFULFNBQVM7QUFBVCx5QkFBUyxHQUhyQixNQUFNLENBQUMsT0FBTyxDQUFDLENBR0gsU0FBUyxLQUFULFNBQVM7dUJBQVQsU0FBUyIsImZpbGUiOiJlbGVtZW50cy91aS1zZWdtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBTZWdtZW50IC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9zZWdtZW50Lmh0bWxcbiAqL1xuXG5pbXBvcnQge2N1c3RvbUVsZW1lbnQsIGNvbXB1dGVkRnJvbSwgYmluZGFibGUsIGNvbnRhaW5lcmxlc3MsIGluamVjdCwgTG9nTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCgndWktc2VnbWVudCcpXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVWlTZWdtZW50IHtcblxuICAgIEBiaW5kYWJsZSB0eXBlID0gbnVsbDtcbiAgICBAYmluZGFibGUgdmFyaWF0aW9ucyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIGxvYWRpbmcgPSBmYWxzZTtcbiAgICBAYmluZGFibGUgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBfY2xhc3NlcyA9IG5ldyBTZXQoKTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBMb2dNYW5hZ2VyLmdldExvZ2dlcigndWktc2VnbWVudC1lbGVtZW50Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgQGNvbXB1dGVkRnJvbSgnX2NsYXNzZXMnKVxuICAgIGdldCBjbGFzc2VzKCkge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGNscyBvZiB0aGlzLl9jbGFzc2VzLmtleXMoKSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGNscyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHMuam9pbignICcpO1xuICAgIH1cblxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsYXNzZXMuYWRkKCdsb2FkaW5nJylcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fY2xhc3Nlcy5hZGQoJ2Rpc2FibGVkJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIGxvYWRpbmdDaGFuZ2VkKG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBMb2FkaW5nIHNldCB0byAke25ld1ZhbHVlfS5gKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGFzc2VzLmFkZCgnbG9hZGluZycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2xhc3Nlcy5kZWxldGUoJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZGlzYWJsZWRDaGFuZ2VkKG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBMb2FkaW5nIHNldCB0byAke25ld1ZhbHVlfS5gKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGFzc2VzLmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NsYXNzZXMuZGVsZXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
