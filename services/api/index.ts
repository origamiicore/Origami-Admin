import { DataInput, ModuleConfig, OriInjectable, OriService, PackageIndex, SessionInput } from "origamicore";
import ApiConfig from "./models/apiConfig";
import UserModel from './models/userModel';

@OriInjectable({domain:'api'})
export default class ApiService implements PackageIndex
{
    name:string='api';
    config:ApiConfig;
    jsonConfig(moduleConfig: ModuleConfig): Promise<void> { 
        this.config=moduleConfig as ApiConfig;
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