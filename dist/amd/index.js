define(['exports', 'semantic'], function (exports, _semantic) {
    "use strict";
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    exports.configure = configure;
    var VERSION = '0.0.1.dev';

    exports.VERSION = VERSION;

    var _id = 0;
    window.getUid = function (prefix) {
        prefix = prefix || "def";
        return prefix + ++_id;
    };

    function configure(config) {

        config.globalResources('./collections/nc-breadcrumb');
        config.globalResources('./collections/nc-menu');
        config.globalResources('./elements/nc-button');
        config.globalResources('./elements/nc-container');
        config.globalResources('./elements/nc-header');
        config.globalResources('./elements/nc-icon');
        config.globalResources('./elements/nc-list');
        config.globalResources('./elements/nc-rating');
        config.globalResources('./elements/nc-segment');
        config.globalResources('./elements/nc-segments');
        config.globalResources('./modules/nc-modal');
        config.globalResources('./views/nc-card');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQkFBWSxDQUFDOzs7OztBQUdOLFFBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQzs7OztBQUdqQyxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDWixVQUFNLENBQUMsTUFBTSxHQUFHLFVBQUMsTUFBTSxFQUFLO0FBQ3hCLGNBQU0sR0FBRyxNQUFNLElBQUksS0FBSyxDQUFDO0FBQ3pCLGVBQU8sTUFBTSxHQUFJLEVBQUUsR0FBRyxBQUFDLENBQUM7S0FDM0IsQ0FBQTs7QUFFTSxhQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUU7O0FBRzlCLGNBQU0sQ0FBQyxlQUFlLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUN0RCxjQUFNLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDaEQsY0FBTSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQy9DLGNBQU0sQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUNsRCxjQUFNLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDL0MsY0FBTSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzdDLGNBQU0sQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM3QyxjQUFNLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDL0MsY0FBTSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ2hELGNBQU0sQ0FBQyxlQUFlLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNqRCxjQUFNLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDN0MsY0FBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQzdDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgJ3NlbWFudGljJztcblxuZXhwb3J0IHZhciBWRVJTSU9OID0gJzAuMC4xLmRldic7XG5cbi8vIEF1cmVsaWEgcGx1Z2luIGhvb2tcbnZhciBfaWQgPSAwO1xud2luZG93LmdldFVpZCA9IChwcmVmaXgpID0+IHtcbiAgICBwcmVmaXggPSBwcmVmaXggfHwgXCJkZWZcIjtcbiAgICByZXR1cm4gcHJlZml4ICsgKCsrX2lkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWcpIHtcblxuXG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcygnLi9jb2xsZWN0aW9ucy9uYy1icmVhZGNydW1iJyk7XG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcygnLi9jb2xsZWN0aW9ucy9uYy1tZW51Jyk7XG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy9uYy1idXR0b24nKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL25jLWNvbnRhaW5lcicpO1xuICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoJy4vZWxlbWVudHMvbmMtaGVhZGVyJyk7XG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy9uYy1pY29uJyk7XG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy9uYy1saXN0Jyk7XG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy9uYy1yYXRpbmcnKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL25jLXNlZ21lbnQnKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL25jLXNlZ21lbnRzJyk7XG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcygnLi9tb2R1bGVzL25jLW1vZGFsJyk7XG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcygnLi92aWV3cy9uYy1jYXJkJyk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
