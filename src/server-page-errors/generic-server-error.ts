import { ServerHttp2Stream } from 'http2';
import { ServerError } from '@/contracts';

export class GenericServerError implements ServerError{
	handle(stream: ServerHttp2Stream, err: Error) {
		stream.respond({
			'content-type': 'text/html; charset=utf-8',
			':status': 500
		});
		stream.end('<pre><h1>Internal Server Error</h1></pre>');
	}
}