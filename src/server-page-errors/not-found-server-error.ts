import { ServerHttp2Stream } from 'http2';
import { ServerError } from '@/contracts/server-error';

export class NotFoundServerError implements ServerError{
	handle(stream: ServerHttp2Stream){
		stream.respond({
			'content-type': 'text/html; charset=utf-8',
			':status': 404
		});
		stream.end('<pre><h1>Not Found</h1></pre>');
	}
}