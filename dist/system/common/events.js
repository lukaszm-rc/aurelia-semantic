System.register([], function (_export) {
    "use strict";

    _export("fireEvent", fireEvent);

    _export("fireSemanticEvent", fireSemanticEvent);

    function fireEvent(element, name, data) {
        var event = new CustomEvent(name, {
            detail: data,
            bubbles: true
        });
        element.dispatchEvent(event);

        return event;
    }

    function fireSemanticEvent(element, name, data) {
        return fireEvent(element, "" + name, data);
    }

    return {
        setters: [],
        execute: function () {}
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9ldmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1PLGFBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQzNDLFlBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksRUFBRTtBQUM5QixrQkFBTSxFQUFFLElBQUk7QUFDWixtQkFBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO0FBQ0gsZUFBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFN0IsZUFBTyxLQUFLLENBQUM7S0FDaEI7O0FBUU0sYUFBUyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNuRCxlQUFPLFNBQVMsQ0FBQyxPQUFPLE9BQUssSUFBSSxFQUFJLElBQUksQ0FBQyxDQUFDO0tBQzlDIiwiZmlsZSI6ImNvbW1vbi9ldmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZpcmUgRE9NIGV2ZW50IG9uIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSBlbGVtZW50IFRoZSBFbGVtZW50IHdoaWNoIHRoZSBET00gZXZlbnQgd2lsbCBiZSBmaXJlZCBvblxuICogQHBhcmFtIG5hbWUgVGhlIEV2ZW50J3MgbmFtZVxuICogQHBhcmFtIGRhdGEgQWRkaXRpb24gZGF0YSB0byBhdHRhY2ggdG8gYW4gZXZlbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcmVFdmVudChlbGVtZW50LCBuYW1lLCBkYXRhKSB7XG4gICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgICAgZGV0YWlsOiBkYXRhLFxuICAgICAgICBidWJibGVzOiB0cnVlXG4gICAgfSk7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgIHJldHVybiBldmVudDtcbn1cblxuLyoqXG4gKiBGaXJlIERPTSBldmVudCBvbiBhbiBlbGVtZW50IHdpdGggdGhlIG1kLW9uIHByZWZpeFxuICogQHBhcmFtIGVsZW1lbnQgVGhlIEVsZW1lbnQgd2hpY2ggdGhlIERPTSBldmVudCB3aWxsIGJlIGZpcmVkIG9uXG4gKiBAcGFyYW0gbmFtZSBUaGUgRXZlbnQncyBuYW1lLCB3aXRob3V0IG1kLW9uIHByZWZpeFxuICogQHBhcmFtIGRhdGEgQWRkaXRpb24gZGF0YSB0byBhdHRhY2ggdG8gYW4gZXZlbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcmVTZW1hbnRpY0V2ZW50KGVsZW1lbnQsIG5hbWUsIGRhdGEpIHtcbiAgICByZXR1cm4gZmlyZUV2ZW50KGVsZW1lbnQsIGAke25hbWV9YCwgZGF0YSk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
