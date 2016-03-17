System.register(['aurelia-framework'], function (_export) {
    "use strict";

    var inject, customElement, useView, containerless, bindable, UiMenu, UiMenuItem;

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
            UiMenu = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(UiMenu, [{
                    key: 'id',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'type',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'variations',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'router',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'data',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'isRoot',
                    decorators: [bindable],
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
                UiMenu = inject(Element)(UiMenu) || UiMenu;
                UiMenu = containerless()(UiMenu) || UiMenu;
                UiMenu = customElement('ui-menu')(UiMenu) || UiMenu;
                return UiMenu;
            })();

            _export('UiMenu', UiMenu);

            UiMenuItem = (function () {
                var _instanceInitializers2 = {};
                var _instanceInitializers2 = {};

                _createDecoratedClass(UiMenuItem, [{
                    key: 'type',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'href',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'data',
                    decorators: [bindable],
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
                UiMenuItem = containerless()(UiMenuItem) || UiMenuItem;
                UiMenuItem = useView('./ui-menu/item.html')(UiMenuItem) || UiMenuItem;
                UiMenuItem = customElement('ui-menu-item')(UiMenuItem) || UiMenuItem;
                return UiMenuItem;
            })();

            _export('UiMenuItem', UiMenuItem);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdCQUFZLENBQUM7O2lFQVdBLE1BQU0sRUFvRE4sVUFBVTs7Ozs7Ozs7Ozt1Q0F6RGYsTUFBTTs4Q0FBRyxhQUFhO3dDQUFFLE9BQU87OENBQUUsYUFBYTt5Q0FBRSxRQUFROzs7QUFLbkQsa0JBQU07Ozs7c0NBQU4sTUFBTTs7aUNBQ2QsUUFBUTs7Ozs7aUNBQ1IsUUFBUTs7Ozs7aUNBQ1IsUUFBUTs7Ozs7aUNBQ1IsUUFBUTs7Ozs7aUNBQ1IsUUFBUTs7Ozs7aUNBQ1IsUUFBUTs7K0JBQVUsSUFBSTs7Ozs7QUFFWix5QkFSRixNQUFNLENBUUgsT0FBTyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUFDakIsd0JBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pCLHdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztpQkFDMUI7O3NDQVhRLE1BQU07OzJCQXFCUCxvQkFBRztBQUVQLHlCQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDaEM7OzsyQkFFYyx5QkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMxQyw0QkFBSSxRQUFRLElBQUksTUFBTSxJQUFJLE9BQU8sUUFBUSxJQUFJLFFBQVEsRUFBRTtBQUNuRCxvQ0FBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ25DO0FBQ0QsNEJBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDMUIsNEJBQUksUUFBUSxJQUFJLFFBQVEsRUFBRTtBQUN0QixnQ0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO3lCQUNuQztxQkFFSjs7OzJCQUVVLHVCQUFHO0FBQ1YsK0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN0Qyx5QkFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ2xDOzs7eUJBM0JNLGVBQUc7QUFDTiwrQkFBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztxQkFDeEI7Ozt5QkFFYSxlQUFHO0FBQ2IsK0JBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBRTtxQkFDbkQ7Ozs4QkFuQlEsTUFBTTtBQUFOLHNCQUFNLEdBRGxCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxNQUFNLEtBQU4sTUFBTTtBQUFOLHNCQUFNLEdBRmxCLGFBQWEsRUFBRSxDQUVILE1BQU0sS0FBTixNQUFNO0FBQU4sc0JBQU0sR0FIbEIsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUdaLE1BQU0sS0FBTixNQUFNO3VCQUFOLE1BQU07Ozs7O0FBb0ROLHNCQUFVOzs7O3NDQUFWLFVBQVU7O2lDQUVsQixRQUFROzs7OztpQ0FDUixRQUFROzs7OztpQ0FDUixRQUFROzs7OztBQUVFLHlCQU5GLFVBQVUsR0FNTDs7Ozs7Ozs7aUJBRWI7O3NDQVJRLFVBQVU7OzJCQVVYLG9CQUFHLEVBRVY7OzsyQkFFYyx5QkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMxQyw0QkFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUMxQiwrQkFBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7cUJBQ3REOzs7eUJBRWEsZUFBRztBQUNiLCtCQUFPLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7cUJBQ3RGOzs7a0NBckJRLFVBQVU7QUFBViwwQkFBVSxHQUR0QixhQUFhLEVBQUUsQ0FDSCxVQUFVLEtBQVYsVUFBVTtBQUFWLDBCQUFVLEdBRnRCLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUVsQixVQUFVLEtBQVYsVUFBVTtBQUFWLDBCQUFVLEdBSHRCLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FHakIsVUFBVSxLQUFWLFVBQVU7dUJBQVYsVUFBVSIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBNZW51IC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZW51Lmh0bWxcbiAqL1xuXG5pbXBvcnQge2luamVjdCwgIGN1c3RvbUVsZW1lbnQsIHVzZVZpZXcsIGNvbnRhaW5lcmxlc3MsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCd1aS1tZW51JylcbkBjb250YWluZXJsZXNzKClcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBVaU1lbnUge1xuICAgIEBiaW5kYWJsZSBpZDtcbiAgICBAYmluZGFibGUgdHlwZTtcbiAgICBAYmluZGFibGUgdmFyaWF0aW9ucztcbiAgICBAYmluZGFibGUgcm91dGVyO1xuICAgIEBiaW5kYWJsZSBkYXRhO1xuICAgIEBiaW5kYWJsZSBpc1Jvb3QgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoRWxlbWVudCkge1xuICAgICAgICB0aGlzLmlkID0gZ2V0VWlkKFwibWVudVwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gRWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXQgX2lkKCkge1xuICAgICAgICByZXR1cm4gXCIjXCIgKyB0aGlzLmlkO1xuICAgIH1cblxuICAgIGdldCBpc0Ryb3Bkb3duKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHlwZSA9PSBcImRyb3Bkb3duXCIgPyB0cnVlIDogZmFsc2UpO1xuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICAvLyQodGhpcy5faWQpLmRyb3Bkb3duKHthY3Rpb246ICdoaWRlJ30pO1xuICAgICAgICAkKHRoaXMuX2lkKS5kcm9wZG93bihcImhpZGVcIik7XG4gICAgfVxuXG4gICAgcHJvcGVydHlDaGFuZ2VkKHByb3BlcnR5LCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ID09IFwiZGF0YVwiICYmIHR5cGVvZiBuZXdWYWx1ZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IEpTT04ucGFyc2UobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gbmV3VmFsdWU7XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PSBcInJvdXRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBuZXdWYWx1ZS5uYXZpZ2F0aW9uO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBidXR0b25DbGljaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJuYy1tZW51IC0+IGJ1dHRvbkNsaWNrXCIpO1xuICAgICAgICAkKHRoaXMuX2lkKS5kcm9wZG93bihcInRvZ2dsZVwiKTtcbiAgICB9XG5cblxufVxuXG5cbi8qKlxuICogbmMtbWVudS1pdGVtXG4gKi9cbkBjdXN0b21FbGVtZW50KCd1aS1tZW51LWl0ZW0nKVxuQHVzZVZpZXcoJy4vdWktbWVudS9pdGVtLmh0bWwnKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVpTWVudUl0ZW0ge1xuXG4gICAgQGJpbmRhYmxlIHR5cGU7XG4gICAgQGJpbmRhYmxlIGhyZWY7XG4gICAgQGJpbmRhYmxlIGRhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuXG4gICAgfVxuXG4gICAgcHJvcGVydHlDaGFuZ2VkKHByb3BlcnR5LCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2coe3Byb3BlcnR5OiBwcm9wZXJ0eSwgdmFsdWU6IG5ld1ZhbHVlfSk7XG4gICAgfVxuXG4gICAgZ2V0IGlzRHJvcGRvd24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT0gXCJkcm9wZG93blwiICYmIHR5cGVvZiB0aGlzLmRhdGEuaXRlbXMgPT0gXCJBcnJheVwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
