define(['exports', 'aurelia-framework', 'semantic-ui'], function (exports, _aureliaFramework, _semanticUi) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    var _$ = _interopRequireDefault(_semanticUi);

    var UiRating = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(UiRating, [{
            key: 'id',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
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
            key: 'options',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return null;
            },
            enumerable: true
        }, {
            key: 'size',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return "medium";
            },
            enumerable: true
        }, {
            key: 'min',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return 5;
            },
            enumerable: true
        }, {
            key: 'max',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return 5;
            },
            enumerable: true
        }, {
            key: 'value',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return 3;
            },
            enumerable: true
        }, {
            key: 'click',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }], null, _instanceInitializers);

        function UiRating(Element) {
            _classCallCheck(this, _UiRating);

            _defineDecoratedPropertyDescriptor(this, 'id', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'variations', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'min', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'max', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'click', _instanceInitializers);

            this.id = getUid("rating");
            this.click = this.defaultClick;
            this.element = Element;
        }

        _createDecoratedClass(UiRating, [{
            key: 'defaultClick',
            value: function defaultClick(item) {
                this.value = (0, _$['default'])("#" + this.id).find(".active").length;
                console.log(this.id + ' ' + this.value + '/' + this.max + ' rate has been clicked');
            }
        }, {
            key: 'propertyChanged',
            value: function propertyChanged(property, newValue, oldValue) {
                if (typeof newValue !== "function") {
                    console.log(this.id + ' ' + property + ' changed, is ' + newValue + ', was ' + oldValue);
                } else {
                    console.log(this.id + ' ' + property + ' assigned as function');
                }
                this[property] = newValue;
            }
        }, {
            key: 'optionsChanged',
            value: function optionsChanged(newValue, oldValue) {
                var _this = this;

                this.options = JSON.parse(newValue);
                var indexes = Object.keys(this.options);
                indexes.forEach(function (idx) {
                    _this[idx] = _this.options[idx];
                });
            }
        }, {
            key: 'attached',
            value: function attached() {
                this.jElement = (0, _$['default'])('#' + this.id).rating({
                    initialRating: this.value,
                    maxRating: this.max
                });
            }
        }], null, _instanceInitializers);

        var _UiRating = UiRating;
        UiRating = (0, _aureliaFramework.containerless)()(UiRating) || UiRating;
        UiRating = (0, _aureliaFramework.inject)(Element)(UiRating) || UiRating;
        UiRating = (0, _aureliaFramework.customElement)('ui-rating')(UiRating) || UiRating;
        return UiRating;
    })();

    exports.UiRating = UiRating;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXJhdGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztRQUthLFFBQVE7Ozs7OEJBQVIsUUFBUTs7MkNBTHlCLFFBQVE7Ozs7OzJDQUFSLFFBQVE7O3VCQVFqQyxJQUFJOzs7OzsyQ0FScUIsUUFBUTs7dUJBUzNCLElBQUk7Ozs7OzJDQVRlLFFBQVE7O3VCQVU5QixJQUFJOzs7OzsyQ0FWa0IsUUFBUTs7dUJBYWpDLFFBQVE7Ozs7OzJDQWJpQixRQUFROzt1QkFnQmxDLENBQUM7Ozs7OzJDQWhCeUIsUUFBUTs7dUJBaUJsQyxDQUFDOzs7OzsyQ0FqQnlCLFFBQVE7O3VCQWtCaEMsQ0FBQzs7Ozs7MkNBbEJ1QixRQUFROzs7OztBQXdCdkMsaUJBbkJGLFFBQVEsQ0FtQkwsT0FBTyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDakIsZ0JBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCLGdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDL0IsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQzFCOzs4QkF2QlEsUUFBUTs7bUJBeUJMLHNCQUFDLElBQUksRUFBRTtBQUNmLG9CQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNyRCx1QkFBTyxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsRUFBRSxTQUFJLElBQUksQ0FBQyxLQUFLLFNBQUksSUFBSSxDQUFDLEdBQUcsNEJBQXlCLENBQUM7YUFDN0U7OzttQkFFYyx5QkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMxQyxvQkFBSSxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUU7QUFDaEMsMkJBQU8sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLEVBQUUsU0FBSSxRQUFRLHFCQUFnQixRQUFRLGNBQVMsUUFBUSxDQUFHLENBQUM7aUJBQ2xGLE1BRUQ7QUFDSSwyQkFBTyxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsRUFBRSxTQUFJLFFBQVEsMkJBQXdCLENBQUM7aUJBQzlEO0FBQ0Qsb0JBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7YUFDN0I7OzttQkFFYSx3QkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFOzs7QUFDL0Isb0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQyxvQkFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEMsdUJBQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUs7QUFDckIsMEJBQUssR0FBRyxDQUFDLEdBQUcsTUFBSyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2pDLENBQUMsQ0FBQTthQUNMOzs7bUJBRU8sb0JBQUc7QUFFUCxvQkFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxpQ0FBYSxFQUFFLElBQUksQ0FBQyxLQUFLO0FBQ3pCLDZCQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUc7aUJBQ3RCLENBQUMsQ0FBQzthQUVOOzs7d0JBeERRLFFBQVE7QUFBUixnQkFBUSxHQURwQixzQkFKOEIsYUFBYSxHQUk1QixDQUNILFFBQVEsS0FBUixRQUFRO0FBQVIsZ0JBQVEsR0FGcEIsc0JBSE8sTUFBTSxFQUdOLE9BQU8sQ0FBQyxDQUVILFFBQVEsS0FBUixRQUFRO0FBQVIsZ0JBQVEsR0FIcEIsc0JBRmUsYUFBYSxFQUVkLFdBQVcsQ0FBQyxDQUdkLFFBQVEsS0FBUixRQUFRO2VBQVIsUUFBUSIsImZpbGUiOiJlbGVtZW50cy91aS1yYXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ3NlbWFudGljLXVpJztcbkBjdXN0b21FbGVtZW50KCd1aS1yYXRpbmcnKVxuQGluamVjdChFbGVtZW50KVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVpUmF0aW5nIHtcbiAgICAvKiogQmFzZSBhdHRyaWJ1dGVzICovXG4gICAgQGJpbmRhYmxlIGlkO1xuICAgIEBiaW5kYWJsZSB0eXBlID0gbnVsbDtcbiAgICBAYmluZGFibGUgdmFyaWF0aW9ucyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIG9wdGlvbnMgPSBudWxsO1xuXG4gICAgLyoqIEV4dHJhIHByb3BlcnRpZXMgKi9cbiAgICBAYmluZGFibGUgc2l6ZSA9IFwibWVkaXVtXCI7XG5cbiAgICAvKiogRXh0cmEgcHJvcGVydGllcyAqL1xuICAgIEBiaW5kYWJsZSBtaW4gPSA1O1xuICAgIEBiaW5kYWJsZSBtYXggPSA1O1xuICAgIEBiaW5kYWJsZSB2YWx1ZSA9IDM7XG5cbiAgICAvKiogRXZlbnRzICovXG4gICAgQGJpbmRhYmxlIGNsaWNrO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaWQgPSBnZXRVaWQoXCJyYXRpbmdcIik7XG4gICAgICAgIHRoaXMuY2xpY2sgPSB0aGlzLmRlZmF1bHRDbGljaztcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gRWxlbWVudDtcbiAgICB9XG5cbiAgICBkZWZhdWx0Q2xpY2soaXRlbSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gJChcIiNcIiArIHRoaXMuaWQpLmZpbmQoXCIuYWN0aXZlXCIpLmxlbmd0aDtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5pZH0gJHt0aGlzLnZhbHVlfS8ke3RoaXMubWF4fSByYXRlIGhhcyBiZWVuIGNsaWNrZWRgKTtcbiAgICB9XG5cbiAgICBwcm9wZXJ0eUNoYW5nZWQocHJvcGVydHksIG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5ld1ZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuaWR9ICR7cHJvcGVydHl9IGNoYW5nZWQsIGlzICR7bmV3VmFsdWV9LCB3YXMgJHtvbGRWYWx1ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuaWR9ICR7cHJvcGVydHl9IGFzc2lnbmVkIGFzIGZ1bmN0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICBvcHRpb25zQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gSlNPTi5wYXJzZShuZXdWYWx1ZSk7XG4gICAgICAgIGxldCBpbmRleGVzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zKTtcbiAgICAgICAgaW5kZXhlcy5mb3JFYWNoKChpZHgpID0+IHtcbiAgICAgICAgICAgIHRoaXNbaWR4XSA9IHRoaXMub3B0aW9uc1tpZHhdO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICAvL3RoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5qRWxlbWVudCA9ICQoJyMnICsgdGhpcy5pZCkucmF0aW5nKHtcbiAgICAgICAgICAgIGluaXRpYWxSYXRpbmc6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBtYXhSYXRpbmc6IHRoaXMubWF4XG4gICAgICAgIH0pO1xuICAgICAgICAvL3RoaXMuakVsZW1lbnQub24oXCJSYXRlXCIsIGNvbnNvbGUubG9nKFwicmF0ZVwiKSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
