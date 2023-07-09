
import {ConfigModel} from "origamicore";  
import { ConnectionProtocol, EndpointConfig, EndpointConnection, EndpointConnectionType, JwtConfig } from "tsoriendpoint";
import { DatabaseConnection, MongoConfig } from "tsorimongo";
import fs, { stat } from 'fs'
import SapiConfig from "./services/sapi/models/sapiConfig";
let dbcontext:string='origami-admin'
export default new ConfigModel({
    packageConfig:[
        new MongoConfig({
           connections:[
               new DatabaseConnection({
                   name:'default',
                   database:dbcontext
               }),
           ]
        }),
        new SapiConfig({
            dbContext:dbcontext
        }),
        new EndpointConfig({
            connections:[ 
                new EndpointConnection({
                    protocol:new ConnectionProtocol({
                        port:8007,
                        type:'http'
                    }),
                    crossDomain:['*'],
                    type:EndpointConnectionType.Soucket
                }),
            ]
         })
         
    ]
});