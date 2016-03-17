define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.fireEvent = fireEvent;
    exports.fireSemanticEvent = fireSemanticEvent;

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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9ldmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTU8sYUFBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDM0MsWUFBSSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFO0FBQzlCLGtCQUFNLEVBQUUsSUFBSTtBQUNaLG1CQUFPLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7QUFDSCxlQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUU3QixlQUFPLEtBQUssQ0FBQztLQUNoQjs7QUFRTSxhQUFTLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ25ELGVBQU8sU0FBUyxDQUFDLE9BQU8sT0FBSyxJQUFJLEVBQUksSUFBSSxDQUFDLENBQUM7S0FDOUMiLCJmaWxlIjoiY29tbW9uL2V2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlyZSBET00gZXZlbnQgb24gYW4gZWxlbWVudFxuICogQHBhcmFtIGVsZW1lbnQgVGhlIEVsZW1lbnQgd2hpY2ggdGhlIERPTSBldmVudCB3aWxsIGJlIGZpcmVkIG9uXG4gKiBAcGFyYW0gbmFtZSBUaGUgRXZlbnQncyBuYW1lXG4gKiBAcGFyYW0gZGF0YSBBZGRpdGlvbiBkYXRhIHRvIGF0dGFjaCB0byBhbiBldmVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlyZUV2ZW50KGVsZW1lbnQsIG5hbWUsIGRhdGEpIHtcbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgICBkZXRhaWw6IGRhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHRydWVcbiAgICB9KTtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgcmV0dXJuIGV2ZW50O1xufVxuXG4vKipcbiAqIEZpcmUgRE9NIGV2ZW50IG9uIGFuIGVsZW1lbnQgd2l0aCB0aGUgbWQtb24gcHJlZml4XG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgRWxlbWVudCB3aGljaCB0aGUgRE9NIGV2ZW50IHdpbGwgYmUgZmlyZWQgb25cbiAqIEBwYXJhbSBuYW1lIFRoZSBFdmVudCdzIG5hbWUsIHdpdGhvdXQgbWQtb24gcHJlZml4XG4gKiBAcGFyYW0gZGF0YSBBZGRpdGlvbiBkYXRhIHRvIGF0dGFjaCB0byBhbiBldmVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlyZVNlbWFudGljRXZlbnQoZWxlbWVudCwgbmFtZSwgZGF0YSkge1xuICAgIHJldHVybiBmaXJlRXZlbnQoZWxlbWVudCwgYCR7bmFtZX1gLCBkYXRhKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
