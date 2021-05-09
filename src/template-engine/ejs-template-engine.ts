import { promisify } from 'util';
import { renderFile } from 'ejs';
import path from 'path';
import { TemplateEngine, TemplateEngineOptions } from '@/contracts';

export class EjsTemplateEngine implements TemplateEngine {

    private readonly ejsRender: any;
    private readonly options: TemplateEngineOptions;

    constructor(options: TemplateEngineOptions) {
    	this.ejsRender = promisify(renderFile);
    	this.options = options;
    }

    async render(view: string, data: any): Promise<string> {
    	if (this.isValid(view)) {
    		const { dir, ext } = this.options;
    		const viewPath = path.join(dir, `${view.substring(1)}.${ext}`);
    		const html = await this.ejsRender(viewPath, data);
    		return html;
    	}
    	return view;
    }
	
    isValid(view: any) {
    	return typeof view === 'string' &&  /^@/.test(view);
    }
}