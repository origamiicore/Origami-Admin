import { DataInput, ModuleConfig, OriInjectable, OriService, PackageIndex, SessionInput } from "origamicore";
import SapiConfig from "./models/sapiConfig";
import UserModel from './models/userModel';

@OriInjectable({domain:'sapi'})
export default class SapiService implements PackageIndex
{
    name:string='sapi';
    config:SapiConfig;
    jsonConfig(moduleConfig: ModuleConfig): Promise<void> { 
        this.config=moduleConfig as SapiConfig;
        return ;
    }
    start(): Promise<void> {
        return;
    }
    restart(): Promise<void> {
        return;
    }
    stop(): Promise<void> {
        return;
    }
    
    @OriService({isPublic:true})
    test(@SessionInput session,@DataInput({classType:UserModel})user:UserModel)
    {

    }
}