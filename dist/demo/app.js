System.register(['aurelia-framework', 'aurelia-router', 'aurelia-event-aggregator'], function (_export) {
    'use strict';

    var inject, bindable, LogManager, Redirect, EventAggregator, DemoApp;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            bindable = _aureliaFramework.bindable;
            LogManager = _aureliaFramework.LogManager;
        }, function (_aureliaRouter) {
            Redirect = _aureliaRouter.Redirect;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }],
        execute: function () {
            DemoApp = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(DemoApp, [{
                    key: 'router',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function DemoApp(eventAggregator) {
                    _classCallCheck(this, _DemoApp);

                    _defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

                    this.logger = LogManager.getLogger('cozyadmin');
                    this.eventAggregator = eventAggregator;
                }

                _createDecoratedClass(DemoApp, [{
                    key: 'configureRouter',
                    value: function configureRouter(config, router) {
                        this.router = router;
                        this.logger.debug("Router is: ", router);

                        config.title = 'Aurelia Semantic UI Demo App';
                        config.map([{
                            route: 'overview',
                            name: 'overview',
                            moduleId: 'demo/overview',
                            nav: true,
                            title: 'Overview'
                        }, {
                            route: 'elements',
                            name: 'elements',
                            moduleId: 'demo/modules/elements',
                            nav: true,
                            title: 'Elements'
                        }, {
                            route: 'collections',
                            name: 'collections',
                            moduleId: 'demo/modules/collections',
                            nav: true,
                            title: 'Collections'
                        }, {
                            route: 'views',
                            name: 'views',
                            moduleId: 'demo/modules/views',
                            nav: true,
                            title: 'Views'
                        }, {
                            route: 'modules',
                            name: 'modules',
                            moduleId: 'demo/modules/modules',
                            nav: true,
                            title: 'Modules'
                        }, {
                            route: '',
                            redirect: 'overview'
                        }]);
                    }
                }, {
                    key: 'attached',
                    value: function attached() {
                        $('.image').visibility({
                            type: 'image',
                            transition: 'vertical flip in',
                            duration: 500
                        });
                    }
                }], null, _instanceInitializers);

                var _DemoApp = DemoApp;
                DemoApp = inject(EventAggregator)(DemoApp) || DemoApp;
                return DemoApp;
            })();

            _export('DemoApp', DemoApp);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7aUVBU2EsT0FBTzs7Ozs7Ozs7Ozt1Q0FMWixNQUFNO3lDQUFFLFFBQVE7MkNBQUUsVUFBVTs7c0NBQzVCLFFBQVE7O3NEQUNSLGVBQWU7OztBQUdWLG1CQUFPOzs7O3NDQUFQLE9BQU87O2lDQUVmLFFBQVE7Ozs7O0FBRUUseUJBSkYsT0FBTyxDQUlKLGVBQWUsRUFBRTs7Ozs7QUFDekIsd0JBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNoRCx3QkFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7aUJBQzFDOztzQ0FQUSxPQUFPOzsyQkFVRCx5QkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQzVCLDRCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQiw0QkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztBQUV6Qyw4QkFBTSxDQUFDLEtBQUssR0FBRyw4QkFBOEIsQ0FBQztBQUM5Qyw4QkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNQO0FBQ0ksaUNBQUssRUFBRSxVQUFVO0FBQ2pCLGdDQUFJLEVBQUUsVUFBVTtBQUNoQixvQ0FBUSxFQUFFLGVBQWU7QUFDekIsK0JBQUcsRUFBRSxJQUFJO0FBQ1QsaUNBQUssRUFBRSxVQUFVO3lCQUNwQixFQUVEO0FBQ0ksaUNBQUssRUFBRSxVQUFVO0FBQ2pCLGdDQUFJLEVBQUUsVUFBVTtBQUNoQixvQ0FBUSxFQUFFLHVCQUF1QjtBQUNqQywrQkFBRyxFQUFFLElBQUk7QUFDVCxpQ0FBSyxFQUFFLFVBQVU7eUJBQ3BCLEVBRUQ7QUFDSSxpQ0FBSyxFQUFFLGFBQWE7QUFDcEIsZ0NBQUksRUFBRSxhQUFhO0FBQ25CLG9DQUFRLEVBQUUsMEJBQTBCO0FBQ3BDLCtCQUFHLEVBQUUsSUFBSTtBQUNULGlDQUFLLEVBQUUsYUFBYTt5QkFDdkIsRUFFRDtBQUNJLGlDQUFLLEVBQUUsT0FBTztBQUNkLGdDQUFJLEVBQUUsT0FBTztBQUNiLG9DQUFRLEVBQUUsb0JBQW9CO0FBQzlCLCtCQUFHLEVBQUUsSUFBSTtBQUNULGlDQUFLLEVBQUUsT0FBTzt5QkFDakIsRUFFRDtBQUNJLGlDQUFLLEVBQUUsU0FBUztBQUNoQixnQ0FBSSxFQUFFLFNBQVM7QUFDZixvQ0FBUSxFQUFFLHNCQUFzQjtBQUNoQywrQkFBRyxFQUFFLElBQUk7QUFDVCxpQ0FBSyxFQUFFLFNBQVM7eUJBQ25CLEVBSUQ7QUFDSSxpQ0FBSyxFQUFFLEVBQUU7QUFDVCxvQ0FBUSxFQUFFLFVBQVU7eUJBQ3ZCLENBQ0osQ0FBQyxDQUFDO3FCQUNOOzs7MkJBRU8sb0JBQUc7QUFHUCx5QkFBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUNuQixnQ0FBSSxFQUFFLE9BQU87QUFDYixzQ0FBVSxFQUFFLGtCQUFrQjtBQUM5QixvQ0FBUSxFQUFFLEdBQUc7eUJBQ2hCLENBQUMsQ0FBQztxQkFDTjs7OytCQXpFUSxPQUFPO0FBQVAsdUJBQU8sR0FEbkIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUNYLE9BQU8sS0FBUCxPQUFPO3VCQUFQLE9BQU8iLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3p5IEFkbWluIEFwcFxuICovXG5cbmltcG9ydCB7aW5qZWN0LCBiaW5kYWJsZSwgTG9nTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSZWRpcmVjdH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5cbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIERlbW9BcHAge1xuXG4gICAgQGJpbmRhYmxlIHJvdXRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGV2ZW50QWdncmVnYXRvcikge1xuICAgICAgICB0aGlzLmxvZ2dlciA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCdjb3p5YWRtaW4nKTtcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XG4gICAgfVxuXG5cbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiUm91dGVyIGlzOiBcIiwgcm91dGVyKTtcblxuICAgICAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSBTZW1hbnRpYyBVSSBEZW1vIEFwcCc7XG4gICAgICAgIGNvbmZpZy5tYXAoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvdXRlOiAnb3ZlcnZpZXcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdvdmVydmlldycsXG4gICAgICAgICAgICAgICAgbW9kdWxlSWQ6ICdkZW1vL292ZXJ2aWV3JyxcbiAgICAgICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdPdmVydmlldydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3V0ZTogJ2VsZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWxlbWVudHMnLFxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiAnZGVtby9tb2R1bGVzL2VsZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdFbGVtZW50cydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3V0ZTogJ2NvbGxlY3Rpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29sbGVjdGlvbnMnLFxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiAnZGVtby9tb2R1bGVzL2NvbGxlY3Rpb25zJyxcbiAgICAgICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb2xsZWN0aW9ucydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3V0ZTogJ3ZpZXdzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndmlld3MnLFxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiAnZGVtby9tb2R1bGVzL3ZpZXdzJyxcbiAgICAgICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWaWV3cydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3V0ZTogJ21vZHVsZXMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdtb2R1bGVzJyxcbiAgICAgICAgICAgICAgICBtb2R1bGVJZDogJ2RlbW8vbW9kdWxlcy9tb2R1bGVzJyxcbiAgICAgICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNb2R1bGVzJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogLS0tICovXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3V0ZTogJycsXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6ICdvdmVydmlldydcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG5cbiAgICAgICAgLy8gbGF6eSBsb2FkIGltYWdlc1xuICAgICAgICAkKCcuaW1hZ2UnKS52aXNpYmlsaXR5KHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAndmVydGljYWwgZmxpcCBpbicsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
