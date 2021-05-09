import { ServerPush } from '@/contracts';
export declare class StylePusher implements ServerPush {
    pushAssets(stream: any, contentBody: string): void;
}
