System.register(['babel/polyfill', 'semantic-ui', 'semantic-ui/semantic.css!', 'jquery'], function (_export) {
    "use strict";
    var jQuery;

    _export('configure', configure);

    function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging().globalResources('demo/resources/index.js').plugin('aurelia-animator-css').plugin('aurelia-ui');

        aurelia.start().then(function (a) {
            return a.setRoot('demo/app', document.body);
        });
    }

    return {
        setters: [function (_babelPolyfill) {}, function (_semanticUi) {}, function (_semanticUiSemanticCss) {}, function (_jquery) {
            jQuery = _jquery.jQuery;
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdCQUFZLENBQUM7Ozs7O0FBTU4sYUFBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQy9CLGVBQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUNuRCxlQUFlLENBQUMseUJBQXlCLENBQUMsQ0FDMUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQzlCLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFMUIsZUFBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7bUJBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQztTQUFBLENBQUMsQ0FBQztLQUNuRTs7Ozs2QkFUTyxNQUFNIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuaW1wb3J0ICdiYWJlbC9wb2x5ZmlsbCc7XG5pbXBvcnQgJ3NlbWFudGljLXVpJztcbmltcG9ydCAnc2VtYW50aWMtdWkvc2VtYW50aWMuY3NzISc7XG5pbXBvcnQge2pRdWVyeX0gZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSB7XG4gICAgYXVyZWxpYS51c2Uuc3RhbmRhcmRDb25maWd1cmF0aW9uKCkuZGV2ZWxvcG1lbnRMb2dnaW5nKClcbiAgICAgICAgLmdsb2JhbFJlc291cmNlcygnZGVtby9yZXNvdXJjZXMvaW5kZXguanMnKVxuICAgICAgICAucGx1Z2luKCdhdXJlbGlhLWFuaW1hdG9yLWNzcycpXG4gICAgICAgIC5wbHVnaW4oJ2F1cmVsaWEtdWknKTtcblxuICAgIGF1cmVsaWEuc3RhcnQoKS50aGVuKGEgPT4gYS5zZXRSb290KCdkZW1vL2FwcCcsIGRvY3VtZW50LmJvZHkpKTtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
