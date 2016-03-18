System.register(['aurelia-framework'], function (_export) {
    "use strict";

    var inject, bindable, customElement, LogManager, DemoNav;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            bindable = _aureliaFramework.bindable;
            customElement = _aureliaFramework.customElement;
            LogManager = _aureliaFramework.LogManager;
        }],
        execute: function () {
            DemoNav = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(DemoNav, [{
                    key: 'router',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'data',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function DemoNav(element) {
                    _classCallCheck(this, _DemoNav);

                    _defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'data', _instanceInitializers);

                    this.element = element;
                    this.logger = LogManager.getLogger('demo-nav');
                }

                _createDecoratedClass(DemoNav, [{
                    key: 'propertyChanged',
                    value: function propertyChanged(property, newValue, oldValue) {
                        this[property] = newValue;
                        if (property == "router") {
                            this.data - { "items": this.router.navigation };
                        }
                    }
                }, {
                    key: 'attached',
                    value: function attached() {
                        var _this = this;

                        this.logger.debug("Attached!");

                        $(this.element).children('.top.menu').each(function (el) {
                            return _this.logger.debug("Setting visibility for %o", el);
                        }).visibility({ type: 'fixed' });

                        $('.ui.sidebar').sidebar('attach events', '.toc.item');
                    }
                }], null, _instanceInitializers);

                var _DemoNav = DemoNav;
                DemoNav = customElement('demo-nav')(DemoNav) || DemoNav;
                DemoNav = inject(Element)(DemoNav) || DemoNav;
                return DemoNav;
            })();

            _export('DemoNav', DemoNav);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8tbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnQkFBWSxDQUFDOztxREFRQSxPQUFPOzs7Ozs7Ozs7O3VDQUxaLE1BQU07eUNBQUUsUUFBUTs4Q0FBRSxhQUFhOzJDQUFFLFVBQVU7OztBQUt0QyxtQkFBTzs7OztzQ0FBUCxPQUFPOztpQ0FFZixRQUFROzs7OztpQ0FDUixRQUFROzs7OztBQUVFLHlCQUxGLE9BQU8sQ0FLSixPQUFPLEVBQUU7Ozs7Ozs7QUFFakIsd0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLHdCQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ2xEOztzQ0FUUSxPQUFPOzsyQkFXRCx5QkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMxQyw0QkFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUMxQiw0QkFBSSxRQUFRLElBQUksUUFBUSxFQUFFO0FBQ3RCLGdDQUFJLENBQUMsSUFBSSxHQUFHLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLENBQUM7eUJBQ2pEO3FCQUNKOzs7MkJBRU8sb0JBQUc7OztBQUNQLDRCQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFL0IseUJBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7bUNBQUksTUFBSyxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUUsQ0FBQzt5QkFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7O0FBR2pJLHlCQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztxQkFDMUQ7OzsrQkF6QlEsT0FBTztBQUFQLHVCQUFPLEdBRG5CLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FDYixPQUFPLEtBQVAsT0FBTztBQUFQLHVCQUFPLEdBRm5CLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FFSCxPQUFPLEtBQVAsT0FBTzt1QkFBUCxPQUFPIiwiZmlsZSI6ImRlbW8tbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuXG5pbXBvcnQge2luamVjdCwgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuXG5AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCgnZGVtby1uYXYnKVxuZXhwb3J0IGNsYXNzIERlbW9OYXYge1xuXG4gICAgQGJpbmRhYmxlIHJvdXRlcjtcbiAgICBAYmluZGFibGUgZGF0YTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmxvZ2dlciA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCdkZW1vLW5hdicpO1xuICAgIH1cblxuICAgIHByb3BlcnR5Q2hhbmdlZChwcm9wZXJ0eSwgbmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gbmV3VmFsdWU7XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PSBcInJvdXRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgLSB7XCJpdGVtc1wiOiB0aGlzLnJvdXRlci5uYXZpZ2F0aW9ufTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIkF0dGFjaGVkIVwiKTtcblxuICAgICAgICAkKHRoaXMuZWxlbWVudCkuY2hpbGRyZW4oJy50b3AubWVudScpLmVhY2goZWwgPT4gdGhpcy5sb2dnZXIuZGVidWcoXCJTZXR0aW5nIHZpc2liaWxpdHkgZm9yICVvXCIsIGVsKSkudmlzaWJpbGl0eSh7dHlwZTogJ2ZpeGVkJ30pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBzaWRlYmFyIGFuZCBhdHRhY2ggdG8gbWVudSBvcGVuXG4gICAgICAgICQoJy51aS5zaWRlYmFyJykuc2lkZWJhcignYXR0YWNoIGV2ZW50cycsICcudG9jLml0ZW0nKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
