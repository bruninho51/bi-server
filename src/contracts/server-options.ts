import { Router } from '@/server/router';
import { ServerPush } from '@/contracts/server-push';
import { TemplateEngine } from '@/contracts/template-engine';
import { ServerError } from '@/contracts/server-error';

export type ServerOptions = {
	key: Buffer
	cert: Buffer,
	genericServerError: ServerError,
	notFoundServerError: ServerError,
	templateEngine?: TemplateEngine;
	serverPushers?: ServerPush[];
	router?: Router
}