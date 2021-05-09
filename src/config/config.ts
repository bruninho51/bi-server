import path from 'path';
import fs from 'fs'
import { GenericServerError } from '../server-page-errors/generic-server-error';
import { NotFoundServerError } from '../server-page-errors/not-found-server-error';
import { StylePusher } from '../server-push/style-pusher';
import { ScriptPusher } from '../server-push/script-pusher';
import { ServerOptions } from '../contracts/server-options';
import { EjsTemplateEngine } from '../template-engine';

export const defaultServerOptions: ServerOptions  = {
    key: path.join(process.cwd(), 'ssl', 'localhost-privkey.pem'),
	cert: path.join(process.cwd(), 'ssl', 'localhost-cert.pem'),
	genericServerError: new GenericServerError(),
	notFoundServerError: new NotFoundServerError(),
	templateEngine: new EjsTemplateEngine({
		dir: path.join(process.cwd(), 'views'),
		ext: 'ejs'
	}),
	serverPushers: [new ScriptPusher(), new StylePusher()]
}

export const makeServerOptions = (config: any) => {
    return { ...defaultServerOptions, ...config }
}