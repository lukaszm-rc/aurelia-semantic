define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    var UiMenu = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(UiMenu, [{
            key: 'id',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'type',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'variations',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'router',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'data',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'isRoot',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return true;
            },
            enumerable: true
        }], null, _instanceInitializers);

        function UiMenu(Element) {
            _classCallCheck(this, _UiMenu);

            _defineDecoratedPropertyDescriptor(this, 'id', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'variations', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'data', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'isRoot', _instanceInitializers);

            this.id = getUid("menu");
            this.element = Element;
        }

        _createDecoratedClass(UiMenu, [{
            key: 'attached',
            value: function attached() {
                $(this._id).dropdown("hide");
            }
        }, {
            key: 'propertyChanged',
            value: function propertyChanged(property, newValue, oldValue) {
                if (property == "data" && typeof newValue == "string") {
                    newValue = JSON.parse(newValue);
                }
                this[property] = newValue;
                if (property == "router") {
                    this.data = newValue.navigation;
                }
            }
        }, {
            key: 'buttonClick',
            value: function buttonClick() {
                console.log("nc-menu -> buttonClick");
                $(this._id).dropdown("toggle");
            }
        }, {
            key: '_id',
            get: function get() {
                return "#" + this.id;
            }
        }, {
            key: 'isDropdown',
            get: function get() {
                return this.type == "dropdown" ? true : false;
            }
        }], null, _instanceInitializers);

        var _UiMenu = UiMenu;
        UiMenu = (0, _aureliaFramework.inject)(Element)(UiMenu) || UiMenu;
        UiMenu = (0, _aureliaFramework.containerless)()(UiMenu) || UiMenu;
        UiMenu = (0, _aureliaFramework.customElement)('ui-menu')(UiMenu) || UiMenu;
        return UiMenu;
    })();

    exports.UiMenu = UiMenu;

    var UiMenuItem = (function () {
        var _instanceInitializers2 = {};
        var _instanceInitializers2 = {};

        _createDecoratedClass(UiMenuItem, [{
            key: 'type',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'href',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'data',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }], null, _instanceInitializers2);

        function UiMenuItem() {
            _classCallCheck(this, _UiMenuItem);

            _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers2);

            _defineDecoratedPropertyDescriptor(this, 'href', _instanceInitializers2);

            _defineDecoratedPropertyDescriptor(this, 'data', _instanceInitializers2);
        }

        _createDecoratedClass(UiMenuItem, [{
            key: 'attached',
            value: function attached() {}
        }, {
            key: 'propertyChanged',
            value: function propertyChanged(property, newValue, oldValue) {
                this[property] = newValue;
                console.log({ property: property, value: newValue });
            }
        }, {
            key: 'isDropdown',
            get: function get() {
                return this.type == "dropdown" && typeof this.data.items == "Array" ? true : false;
            }
        }], null, _instanceInitializers2);

        var _UiMenuItem = UiMenuItem;
        UiMenuItem = (0, _aureliaFramework.containerless)()(UiMenuItem) || UiMenuItem;
        UiMenuItem = (0, _aureliaFramework.useView)('./ui-menu/item.html')(UiMenuItem) || UiMenuItem;
        UiMenuItem = (0, _aureliaFramework.customElement)('ui-menu-item')(UiMenuItem) || UiMenuItem;
        return UiMenuItem;
    })();

    exports.UiMenuItem = UiMenuItem;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdCQUFZLENBQUM7Ozs7Ozs7Ozs7OztRQVdBLE1BQU07Ozs7OEJBQU4sTUFBTTs7MkNBTHFDLFFBQVE7Ozs7OzJDQUFSLFFBQVE7Ozs7OzJDQUFSLFFBQVE7Ozs7OzJDQUFSLFFBQVE7Ozs7OzJDQUFSLFFBQVE7Ozs7OzJDQUFSLFFBQVE7O3VCQVd6QyxJQUFJOzs7OztBQUVaLGlCQVJGLE1BQU0sQ0FRSCxPQUFPLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQUNqQixnQkFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekIsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQzFCOzs4QkFYUSxNQUFNOzttQkFxQlAsb0JBQUc7QUFFUCxpQkFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEM7OzttQkFFYyx5QkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMxQyxvQkFBSSxRQUFRLElBQUksTUFBTSxJQUFJLE9BQU8sUUFBUSxJQUFJLFFBQVEsRUFBRTtBQUNuRCw0QkFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ25DO0FBQ0Qsb0JBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDMUIsb0JBQUksUUFBUSxJQUFJLFFBQVEsRUFBRTtBQUN0Qix3QkFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO2lCQUNuQzthQUVKOzs7bUJBRVUsdUJBQUc7QUFDVix1QkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3RDLGlCQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsQzs7O2lCQTNCTSxlQUFHO0FBQ04sdUJBQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDeEI7OztpQkFFYSxlQUFHO0FBQ2IsdUJBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBRTthQUNuRDs7O3NCQW5CUSxNQUFNO0FBQU4sY0FBTSxHQURsQixzQkFKTyxNQUFNLEVBSU4sT0FBTyxDQUFDLENBQ0gsTUFBTSxLQUFOLE1BQU07QUFBTixjQUFNLEdBRmxCLHNCQUh3QyxhQUFhLEdBR3RDLENBRUgsTUFBTSxLQUFOLE1BQU07QUFBTixjQUFNLEdBSGxCLHNCQUZnQixhQUFhLEVBRWYsU0FBUyxDQUFDLENBR1osTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNOzs7OztRQW9ETixVQUFVOzs7OzhCQUFWLFVBQVU7OzJDQXpEaUMsUUFBUTs7Ozs7MkNBQVIsUUFBUTs7Ozs7MkNBQVIsUUFBUTs7Ozs7QUErRGpELGlCQU5GLFVBQVUsR0FNTDs7Ozs7Ozs7U0FFYjs7OEJBUlEsVUFBVTs7bUJBVVgsb0JBQUcsRUFFVjs7O21CQUVjLHlCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQzFDLG9CQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQzFCLHVCQUFPLENBQUMsR0FBRyxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQzthQUN0RDs7O2lCQUVhLGVBQUc7QUFDYix1QkFBTyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3RGOzs7MEJBckJRLFVBQVU7QUFBVixrQkFBVSxHQUR0QixzQkF4RHdDLGFBQWEsR0F3RHRDLENBQ0gsVUFBVSxLQUFWLFVBQVU7QUFBVixrQkFBVSxHQUZ0QixzQkF2RCtCLE9BQU8sRUF1RDlCLHFCQUFxQixDQUFDLENBRWxCLFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FIdEIsc0JBdERnQixhQUFhLEVBc0RmLGNBQWMsQ0FBQyxDQUdqQixVQUFVLEtBQVYsVUFBVTtlQUFWLFVBQVUiLCJmaWxlIjoiY29sbGVjdGlvbnMvdWktbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTWVudSAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVudS5odG1sXG4gKi9cblxuaW1wb3J0IHtpbmplY3QsICBjdXN0b21FbGVtZW50LCB1c2VWaWV3LCBjb250YWluZXJsZXNzLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCgndWktbWVudScpXG5AY29udGFpbmVybGVzcygpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgVWlNZW51IHtcbiAgICBAYmluZGFibGUgaWQ7XG4gICAgQGJpbmRhYmxlIHR5cGU7XG4gICAgQGJpbmRhYmxlIHZhcmlhdGlvbnM7XG4gICAgQGJpbmRhYmxlIHJvdXRlcjtcbiAgICBAYmluZGFibGUgZGF0YTtcbiAgICBAYmluZGFibGUgaXNSb290ID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGdldFVpZChcIm1lbnVcIik7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IF9pZCgpIHtcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcbiAgICB9XG5cbiAgICBnZXQgaXNEcm9wZG93bigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR5cGUgPT0gXCJkcm9wZG93blwiID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB9XG5cbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgLy8kKHRoaXMuX2lkKS5kcm9wZG93bih7YWN0aW9uOiAnaGlkZSd9KTtcbiAgICAgICAgJCh0aGlzLl9pZCkuZHJvcGRvd24oXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIHByb3BlcnR5Q2hhbmdlZChwcm9wZXJ0eSwgbmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PSBcImRhdGFcIiAmJiB0eXBlb2YgbmV3VmFsdWUgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBKU09OLnBhcnNlKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAocHJvcGVydHkgPT0gXCJyb3V0ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gbmV3VmFsdWUubmF2aWdhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmMtbWVudSAtPiBidXR0b25DbGlja1wiKTtcbiAgICAgICAgJCh0aGlzLl9pZCkuZHJvcGRvd24oXCJ0b2dnbGVcIik7XG4gICAgfVxuXG5cbn1cblxuXG4vKipcbiAqIG5jLW1lbnUtaXRlbVxuICovXG5AY3VzdG9tRWxlbWVudCgndWktbWVudS1pdGVtJylcbkB1c2VWaWV3KCcuL3VpLW1lbnUvaXRlbS5odG1sJylcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVaU1lbnVJdGVtIHtcblxuICAgIEBiaW5kYWJsZSB0eXBlO1xuICAgIEBiaW5kYWJsZSBocmVmO1xuICAgIEBiaW5kYWJsZSBkYXRhO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBhdHRhY2hlZCgpIHtcblxuICAgIH1cblxuICAgIHByb3BlcnR5Q2hhbmdlZChwcm9wZXJ0eSwgbmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gbmV3VmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHtwcm9wZXJ0eTogcHJvcGVydHksIHZhbHVlOiBuZXdWYWx1ZX0pO1xuICAgIH1cblxuICAgIGdldCBpc0Ryb3Bkb3duKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09IFwiZHJvcGRvd25cIiAmJiB0eXBlb2YgdGhpcy5kYXRhLml0ZW1zID09IFwiQXJyYXlcIiA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
