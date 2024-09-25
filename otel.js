const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const {
    ConsoleSpanExporter,
    NodeTracerProvider,
    SimpleSpanProcessor,
} = require('@opentelemetry/sdk-trace-node');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const {WinstonInstrumentation} = require("@opentelemetry/instrumentation-winston");

const provider = new NodeTracerProvider();

provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.register();

registerInstrumentations({
    instrumentations: [
        new HttpInstrumentation(),
        new WinstonInstrumentation()],
});