import { ConfigModuleOptions } from "@nestjs/config";
import Joi from "joi";
import { join } from 'path';

export const configModuleConfig: ConfigModuleOptions = {
    //envFilePath: join(__dirname, '..', `.env.${process.env.NODE_ENV || 'development'}`),
    envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    isGlobal: true,
    validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
        PORT: Joi.number().default(3000),
        API_KEY: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
    })
}