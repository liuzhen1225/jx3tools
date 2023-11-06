// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {context} from '../models';

export function DllImport():Promise<string>;

export function ExportPlans(arg1:string):Promise<string>;

export function ImportPlans():Promise<string>;

export function ParseKeyThread():Promise<void>;

export function ParseStartThread():Promise<void>;

export function ParseStopThread():Promise<void>;

export function StartKeyThread():Promise<void>;

export function Startup(arg1:context.Context,arg2:Array<number>):Promise<void>;

export function StopKeyThread():Promise<void>;

export function SyncDisabled(arg1:string):Promise<string>;

export function SyncFrontKey(arg1:string):Promise<string>;

export function SyncFrontModel(arg1:number):Promise<string>;

export function SyncFrontMs(arg1:number):Promise<string>;

export function SyncParseType(arg1:string):Promise<string>;

export function ThreadExec(arg1:number,arg2:number,arg3:number):Promise<void>;
