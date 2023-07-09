import { ModuleConfig, PackageIndex } from "origamicore";
import SapiService from "..";
export default class SapiConfig extends ModuleConfig
{
    async createInstance(): Promise<PackageIndex> {
        var instance=new SapiService();
        await instance.jsonConfig(this);
        return instance;
    }
    dbContext:string;
    public constructor(
        
        fields?: {
            id?:string
            name?: string, 
            dbContext?:string  
        }) {

        super(fields);
        if (fields) Object.assign(this, fields);
    }
}