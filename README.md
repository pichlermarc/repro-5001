# reproducer for https://github.com/open-telemetry/opentelemetry-js/issues/5001

## How to use

- run `npm ci`
- run `npm run start`
- run `curl http://localhost:3000`
- `trace_id` and `span_id` of the http span are properly added to the log that's logged to the console

Sample output:

```
> repro-5001@1.0.0 start
> node --require ./otel.js index.js

Server running at http://127.0.0.1:3000/
{"level":"info","message":"handling request","span_id":"7910f65dc0ca528e","trace_flags":"01","trace_id":"318b0710262bd1ae8d953d347cb71bae"}
{
  resource: {
    attributes: {
      'service.name': 'unknown_service:node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.26.0'
    }
  },
  instrumentationScope: {
    name: '@opentelemetry/instrumentation-http',
    version: '0.53.0',
    schemaUrl: undefined
  },
  traceId: '318b0710262bd1ae8d953d347cb71bae',
  parentId: undefined,
  traceState: undefined,
  name: 'GET',
  id: '7910f65dc0ca528e',
  kind: 1,
  timestamp: 1727266100470000,
  duration: 7558.904,
  attributes: {
    'http.url': 'http://localhost:3000/',
    'http.host': 'localhost:3000',
    'net.host.name': 'localhost',
    'http.method': 'GET',
    'http.scheme': 'http',
    'http.target': '/',
    'http.user_agent': 'curl/8.5.0',
    'http.flavor': '1.1',
    'net.transport': 'ip_tcp',
    'net.host.ip': '::1',
    'net.host.port': 3000,
    'net.peer.ip': '::1',
    'net.peer.port': 45486,
    'http.status_code': 200,
    'http.status_text': 'OK'
  },
  status: { code: 0 },
  events: [],
  links: []
}
```
