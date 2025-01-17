import { __extends } from "tslib";
import { TELEMETRY_BLOB_EVENT_NAMES } from "./TelemetryConstants";
import TelemetryEvent from "./TelemetryEvent";
import { prependEventNamePrefix } from "./TelemetryUtils";
var DefaultEvent = /** @class */ (function (_super) {
    __extends(DefaultEvent, _super);
    // TODO Platform Type
    function DefaultEvent(platform, correlationId, clientId, eventCount) {
        var _this = _super.call(this, prependEventNamePrefix("default_event"), correlationId) || this;
        _this.event[prependEventNamePrefix("client_id")] = clientId;
        _this.event[prependEventNamePrefix("sdk_plaform")] = platform.sdk;
        _this.event[prependEventNamePrefix("sdk_version")] = platform.sdkVersion;
        _this.event[prependEventNamePrefix("application_name")] = platform.applicationName;
        _this.event[prependEventNamePrefix("application_version")] = platform.applicationVersion;
        _this.event["" + TELEMETRY_BLOB_EVENT_NAMES.UiEventCountTelemetryBatchKey] = _this.getEventCount(prependEventNamePrefix("ui_event"), eventCount);
        _this.event["" + TELEMETRY_BLOB_EVENT_NAMES.HttpEventCountTelemetryBatchKey] = _this.getEventCount(prependEventNamePrefix("http_event"), eventCount);
        _this.event["" + TELEMETRY_BLOB_EVENT_NAMES.CacheEventCountConstStrKey] = _this.getEventCount(prependEventNamePrefix("cache_event"), eventCount);
        return _this;
        /// Device id?
    }
    DefaultEvent.prototype.getEventCount = function (eventName, eventCount) {
        if (!eventCount[eventName]) {
            return 0;
        }
        return eventCount[eventName];
    };
    return DefaultEvent;
}(TelemetryEvent));
export default DefaultEvent;
//# sourceMappingURL=DefaultEvent.js.map