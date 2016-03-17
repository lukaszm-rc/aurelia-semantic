
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O2dDQU0wRCxtQkFBbUI7O0lBSzdFLE1BQU07Ozs7MEJBQU4sTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBTUksSUFBSTs7Ozs7QUFFWixhQVJGLE1BQU0sQ0FRSCxPQUFPLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQUNqQixZQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUMxQjs7MEJBWFEsTUFBTTs7ZUFxQlAsb0JBQUc7QUFFUCxhQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQzs7O2VBRWMseUJBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDMUMsZ0JBQUksUUFBUSxJQUFJLE1BQU0sSUFBSSxPQUFPLFFBQVEsSUFBSSxRQUFRLEVBQUU7QUFDbkQsd0JBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25DO0FBQ0QsZ0JBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDMUIsZ0JBQUksUUFBUSxJQUFJLFFBQVEsRUFBRTtBQUN0QixvQkFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO2FBQ25DO1NBRUo7OztlQUVVLHVCQUFHO0FBQ1YsbUJBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN0QyxhQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQzs7O2FBM0JNLGVBQUc7QUFDTixtQkFBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUN4Qjs7O2FBRWEsZUFBRztBQUNiLG1CQUFRLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUU7U0FDbkQ7OztrQkFuQlEsTUFBTTtBQUFOLFVBQU0sR0FEbEIsOEJBQU8sT0FBTyxDQUFDLENBQ0gsTUFBTSxLQUFOLE1BQU07QUFBTixVQUFNLEdBRmxCLHNDQUFlLENBRUgsTUFBTSxLQUFOLE1BQU07QUFBTixVQUFNLEdBSGxCLHFDQUFjLFNBQVMsQ0FBQyxDQUdaLE1BQU0sS0FBTixNQUFNO1dBQU4sTUFBTTs7Ozs7SUFvRE4sVUFBVTs7OzswQkFBVixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1SLGFBTkYsVUFBVSxHQU1MOzs7Ozs7OztLQUViOzswQkFSUSxVQUFVOztlQVVYLG9CQUFHLEVBRVY7OztlQUVjLHlCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQzFDLGdCQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQzFCLG1CQUFPLENBQUMsR0FBRyxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztTQUN0RDs7O2FBRWEsZUFBRztBQUNiLG1CQUFPLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7U0FDdEY7OztzQkFyQlEsVUFBVTtBQUFWLGNBQVUsR0FEdEIsc0NBQWUsQ0FDSCxVQUFVLEtBQVYsVUFBVTtBQUFWLGNBQVUsR0FGdEIsK0JBQVEscUJBQXFCLENBQUMsQ0FFbEIsVUFBVSxLQUFWLFVBQVU7QUFBVixjQUFVLEdBSHRCLHFDQUFjLGNBQWMsQ0FBQyxDQUdqQixVQUFVLEtBQVYsVUFBVTtXQUFWLFVBQVUiLCJmaWxlIjoiY29sbGVjdGlvbnMvdWktbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTWVudSAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVudS5odG1sXG4gKi9cblxuaW1wb3J0IHtpbmplY3QsICBjdXN0b21FbGVtZW50LCB1c2VWaWV3LCBjb250YWluZXJsZXNzLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCgndWktbWVudScpXG5AY29udGFpbmVybGVzcygpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgVWlNZW51IHtcbiAgICBAYmluZGFibGUgaWQ7XG4gICAgQGJpbmRhYmxlIHR5cGU7XG4gICAgQGJpbmRhYmxlIHZhcmlhdGlvbnM7XG4gICAgQGJpbmRhYmxlIHJvdXRlcjtcbiAgICBAYmluZGFibGUgZGF0YTtcbiAgICBAYmluZGFibGUgaXNSb290ID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGdldFVpZChcIm1lbnVcIik7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IF9pZCgpIHtcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcbiAgICB9XG5cbiAgICBnZXQgaXNEcm9wZG93bigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR5cGUgPT0gXCJkcm9wZG93blwiID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB9XG5cbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgLy8kKHRoaXMuX2lkKS5kcm9wZG93bih7YWN0aW9uOiAnaGlkZSd9KTtcbiAgICAgICAgJCh0aGlzLl9pZCkuZHJvcGRvd24oXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIHByb3BlcnR5Q2hhbmdlZChwcm9wZXJ0eSwgbmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PSBcImRhdGFcIiAmJiB0eXBlb2YgbmV3VmFsdWUgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBKU09OLnBhcnNlKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAocHJvcGVydHkgPT0gXCJyb3V0ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gbmV3VmFsdWUubmF2aWdhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmMtbWVudSAtPiBidXR0b25DbGlja1wiKTtcbiAgICAgICAgJCh0aGlzLl9pZCkuZHJvcGRvd24oXCJ0b2dnbGVcIik7XG4gICAgfVxuXG5cbn1cblxuXG4vKipcbiAqIG5jLW1lbnUtaXRlbVxuICovXG5AY3VzdG9tRWxlbWVudCgndWktbWVudS1pdGVtJylcbkB1c2VWaWV3KCcuL3VpLW1lbnUvaXRlbS5odG1sJylcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVaU1lbnVJdGVtIHtcblxuICAgIEBiaW5kYWJsZSB0eXBlO1xuICAgIEBiaW5kYWJsZSBocmVmO1xuICAgIEBiaW5kYWJsZSBkYXRhO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBhdHRhY2hlZCgpIHtcblxuICAgIH1cblxuICAgIHByb3BlcnR5Q2hhbmdlZChwcm9wZXJ0eSwgbmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gbmV3VmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHtwcm9wZXJ0eTogcHJvcGVydHksIHZhbHVlOiBuZXdWYWx1ZX0pO1xuICAgIH1cblxuICAgIGdldCBpc0Ryb3Bkb3duKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09IFwiZHJvcGRvd25cIiAmJiB0eXBlb2YgdGhpcy5kYXRhLml0ZW1zID09IFwiQXJyYXlcIiA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
