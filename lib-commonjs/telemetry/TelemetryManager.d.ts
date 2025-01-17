import TelemetryEvent from "./TelemetryEvent";
import { TelemetryConfig, TelemetryEmitter } from "./TelemetryTypes";
export default class TelemetryManager {
    private completedEvents;
    private inProgressEvents;
    private eventCountByCorrelationId;
    private onlySendFailureTelemetry;
    private telemetryPlatform;
    private clientId;
    private telemetryEmitter;
    constructor(config: TelemetryConfig, telemetryEmitter: TelemetryEmitter);
    startEvent(event: TelemetryEvent): void;
    stopEvent(event: TelemetryEvent): void;
    flush(correlationId: string): void;
    private incrementEventCount;
    private getOrphanedEvents;
}
