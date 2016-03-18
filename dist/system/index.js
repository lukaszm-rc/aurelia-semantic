System.register(['semantic', 'semantic/semantic.css!'], function (_export) {
    "use strict";

    var VERSION, _id;

    _export('configure', configure);

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

    return {
        setters: [function (_semantic) {}, function (_semanticSemanticCss) {}],
        execute: function () {
            VERSION = '0.0.1.dev';

            _export('VERSION', VERSION);

            _id = 0;

            window.getUid = function (prefix) {
                prefix = prefix || "def";
                return prefix + ++_id;
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQkFBWSxDQUFDOztRQUdGLE9BQU8sRUFHZCxHQUFHOzs7O0FBTUEsYUFBUyxTQUFTLENBQUMsTUFBTSxFQUFFOztBQUc5QixjQUFNLENBQUMsZUFBZSxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDdEQsY0FBTSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ2hELGNBQU0sQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMvQyxjQUFNLENBQUMsZUFBZSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDbEQsY0FBTSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQy9DLGNBQU0sQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM3QyxjQUFNLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDN0MsY0FBTSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQy9DLGNBQU0sQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNoRCxjQUFNLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDakQsY0FBTSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzdDLGNBQU0sQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUM3Qzs7Ozs7QUF4QlUsbUJBQU8sR0FBRyxXQUFXOzs7O0FBRzVCLGVBQUcsR0FBRyxDQUFDOztBQUNYLGtCQUFNLENBQUMsTUFBTSxHQUFHLFVBQUMsTUFBTSxFQUFLO0FBQ3hCLHNCQUFNLEdBQUcsTUFBTSxJQUFJLEtBQUssQ0FBQztBQUN6Qix1QkFBTyxNQUFNLEdBQUksRUFBRSxHQUFHLEFBQUMsQ0FBQzthQUMzQixDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgJ3NlbWFudGljJztcbmltcG9ydCAnc2VtYW50aWMvc2VtYW50aWMuY3NzISc7XG5leHBvcnQgdmFyIFZFUlNJT04gPSAnMC4wLjEuZGV2JztcblxuLy8gQXVyZWxpYSBwbHVnaW4gaG9va1xudmFyIF9pZCA9IDA7XG53aW5kb3cuZ2V0VWlkID0gKHByZWZpeCkgPT4ge1xuICAgIHByZWZpeCA9IHByZWZpeCB8fCBcImRlZlwiO1xuICAgIHJldHVybiBwcmVmaXggKyAoKytfaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZykge1xuXG5cbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCcuL2NvbGxlY3Rpb25zL25jLWJyZWFkY3J1bWInKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCcuL2NvbGxlY3Rpb25zL25jLW1lbnUnKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL25jLWJ1dHRvbicpO1xuICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoJy4vZWxlbWVudHMvbmMtY29udGFpbmVyJyk7XG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy9uYy1oZWFkZXInKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL25jLWljb24nKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL25jLWxpc3QnKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL25jLXJhdGluZycpO1xuICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoJy4vZWxlbWVudHMvbmMtc2VnbWVudCcpO1xuICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoJy4vZWxlbWVudHMvbmMtc2VnbWVudHMnKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCcuL21vZHVsZXMvbmMtbW9kYWwnKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCcuL3ZpZXdzL25jLWNhcmQnKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
