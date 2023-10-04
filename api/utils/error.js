export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};


{/*

--> 1xx Success <--
100 Continue
101 Switching Protocols
102 Processing
103 Early Hints
104 - 199 Unassigned

--> 2xx Success <--
200 OK
201 Created
202 Accepted
203 Non-Authoritative Information
204 No Content
205 Reset Content
206 Partial Content
207 Multi-Status
208 Already Reported
209 - 225 Unassigned
210 Content Different
211 Content Different
212 Content Different
213 Content Different
214 Content Different
215 Content Different
216 Content Different
217 Content Different
218 Content Different
219 Content Different
220 Content Different
221 Content Different
222 Content Different
223 Content Different
224 Content Different
225 Content Different
226 IM Used
227 - 299 Unassigned

--> 3xx Redirect <--
301 Moved Permanently
302 Found
303 See Other
304 Not Modified
305 Use Proxy
306 (Unused)
307 Temporary Redirect
308 Permanent Redirect
309 - 399 Unassigned

--> 4xx Client Error <--
400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Timeout
409 Conflict
410 Gone
411 Length Required
412 Precondition Failed
413 Payload Too Large
414 URI Too Long
415 Unsupported Media Type
416 Range Not Satisfiable
417 Expectation Failed
418 I'm a teapot
419 Authentication Timeout
420 Method Failure
421 Misdirected Request
422 Unprocessable Entity
423 Locked
424 Failed Dependency
425 Too Early
426 Upgrade Required
427 Unassigned
428 Precondition Required
429 Too Many Requests
430 Unassigned
431 Request Header Fields Too Large
432 - 450 Unassigned

--> 5xx Server Error <--
500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
505 HTTP Version Not Supported
506 Variant Also Negotiates
507 Insufficient Storage
508 Loop Detected
509 Unassigned
510 Not Extended
511 Network Authentication Required
512 - 599 Unassigned


*/}