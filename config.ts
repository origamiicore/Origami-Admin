
import {ConfigModel} from "origamicore";  
import { ConnectionProtocol, EndpointConfig, EndpointConnection, EndpointConnectionType, JwtConfig } from "tsoriendpoint";
import { DatabaseConnection, MongoConfig } from "tsorimongo";
import fs from 'fs'
export default new ConfigModel({
    packageConfig:[
        new MongoConfig({
           connections:[
               new DatabaseConnection({
                   name:'default',
                   database:'origami-admin'
               }),
           ]
        }),
        new EndpointConfig({
            connections:[
                new EndpointConnection({
                    //debug:true,
                    protocol:new ConnectionProtocol({
                        port:8008,
                        type:'http',
                        jwtConfig:new JwtConfig({
                             algorithm:'RS256',
                             secExpireTime:1000*60*60*24*1200,
                             privateKey:fs.readFileSync('security/jwtRS256.key') + '',
                             publicKey:fs.readFileSync('security/jwtRS256.key.pub') + '',
                        })
                    }),
                    crossDomain:['*'],
                    type:EndpointConnectionType.Express
                }), 
            ]
         })
         
    ]
});