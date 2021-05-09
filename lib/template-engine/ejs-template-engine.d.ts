import { TemplateEngine, TemplateEngineOptions } from '@/contracts';
export declare class EjsTemplateEngine implements TemplateEngine {
    private readonly ejsRender;
    private readonly options;
    constructor(options: TemplateEngineOptions);
    render(view: string, data: any): Promise<string>;
    isValid(view: any): boolean;
}
