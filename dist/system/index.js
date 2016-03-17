System.register(['semantic', 'semantic/semantic.css!'], function (_export) {
    'use strict';

    var VERSION;

    _export('configure', configure);

    function configure(config) {
        config.globalResources('./collections/ui-breadcrumb');
        config.globalResources('./collections/ui-menu');
        config.globalResources('./elements/ui-container');
        config.globalResources('./elements/ui-header');
        config.globalResources('./elements/ui-icon');
        config.globalResources('./elements/ui-list');
        config.globalResources('./elements/ui-segment');
        config.globalResources('./elements/ui-segments');
        config.globalResources('./modules/ui-modal');
        config.globalResources('./views/ui-card');
    }

    return {
        setters: [function (_semantic) {}, function (_semanticSemanticCss) {}],
        execute: function () {
            VERSION = '0.0.1.dev';

            _export('VERSION', VERSION);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQVlXLE9BQU87Ozs7QUFHWCxhQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUU7QUFDOUIsY0FBTSxDQUFDLGVBQWUsQ0FBRSw2QkFBNkIsQ0FBRSxDQUFDO0FBQ3hELGNBQU0sQ0FBQyxlQUFlLENBQUUsdUJBQXVCLENBQUUsQ0FBQztBQUNsRCxjQUFNLENBQUMsZUFBZSxDQUFFLHlCQUF5QixDQUFFLENBQUM7QUFDcEQsY0FBTSxDQUFDLGVBQWUsQ0FBRSxzQkFBc0IsQ0FBRSxDQUFDO0FBQ2pELGNBQU0sQ0FBQyxlQUFlLENBQUUsb0JBQW9CLENBQUUsQ0FBQztBQUMvQyxjQUFNLENBQUMsZUFBZSxDQUFFLG9CQUFvQixDQUFFLENBQUM7QUFDL0MsY0FBTSxDQUFDLGVBQWUsQ0FBRSx1QkFBdUIsQ0FBRSxDQUFDO0FBQ2xELGNBQU0sQ0FBQyxlQUFlLENBQUUsd0JBQXdCLENBQUUsQ0FBQztBQUNuRCxjQUFNLENBQUMsZUFBZSxDQUFFLG9CQUFvQixDQUFFLENBQUM7QUFDL0MsY0FBTSxDQUFDLGVBQWUsQ0FBRSxpQkFBaUIsQ0FBRSxDQUFDO0tBQy9DOzs7OztBQWRVLG1CQUFPLEdBQUcsV0FBVyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXVyZWxpYS1TZW1hbnRpYy1VSSAtLSBBdXJlbGlhIGNvbXBvbmVudHMgZm9yIFNlbWFudGljLVVJXG4gKiAkSWQkXG4gKlxuICogQXV0aG9yc1xuICogLSBNaWNoYWVsIEdyYW5nZXIgPGdlZEBGYWVyaWVNVUQub3JnPlxuICovXG5cbmltcG9ydCAnc2VtYW50aWMnO1xuaW1wb3J0ICdzZW1hbnRpYy9zZW1hbnRpYy5jc3MhJztcblxuXG5leHBvcnQgdmFyIFZFUlNJT04gPSAnMC4wLjEuZGV2JztcblxuLy8gQXVyZWxpYSBwbHVnaW4gaG9va1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWcpIHtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCAnLi9jb2xsZWN0aW9ucy91aS1icmVhZGNydW1iJyApO1xuICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoICcuL2NvbGxlY3Rpb25zL3VpLW1lbnUnICk7XG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcyggJy4vZWxlbWVudHMvdWktY29udGFpbmVyJyApO1xuICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoICcuL2VsZW1lbnRzL3VpLWhlYWRlcicgKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCAnLi9lbGVtZW50cy91aS1pY29uJyApO1xuICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoICcuL2VsZW1lbnRzL3VpLWxpc3QnICk7XG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcyggJy4vZWxlbWVudHMvdWktc2VnbWVudCcgKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCAnLi9lbGVtZW50cy91aS1zZWdtZW50cycgKTtcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKCAnLi9tb2R1bGVzL3VpLW1vZGFsJyApO1xuICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoICcuL3ZpZXdzL3VpLWNhcmQnICk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
