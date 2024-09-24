const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const {
    ConsoleSpanExporter,
    NodeTracerProvider,
    SimpleSpanProcessor,
} = require('@opentelemetry/sdk-trace-node');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');

const provider = new NodeTracerProvider();

provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.register();

registerInstrumentations({
    instrumentations: [new HttpInstrumentation()],
});