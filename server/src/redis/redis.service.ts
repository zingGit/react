import { Injectable } from '@nestjs/common';
import { createClient, RedisClient } from 'redis';

@Injectable()
export class RedisServices {
    private client : RedisClient;

   constructor() {
       this.getClient();
   }
 
   private async getClient() {
       this.client = createClient(6379, "120.77.147.168");
       this.client.auth("foobared");
   }
 
 
   /**
    * @Description: 封装设置redis缓存的方法
    * @param key {String} key值
    * @param value {String} key的值
    * @param seconds {Number} 过期时间
    * @return: Promise<any>
    */
   public async set(key: string, value: any, seconds?: number): Promise<any> {
       value = JSON.stringify(value);
       if (!this.client) {
           await this.getClient();
       }

       return new Promise( resolve => {

           if (!seconds) {
               this.client.set(key, value, (err, data) => {
                return resolve(data)
               });
           } else {
               this.client.set(key, value, 'EX', seconds, (err, data) => {
                return resolve(data)
               });
           }

       })
   }
 
 
   /**
    * @Description: 设置获取redis缓存中的值
    * @param key {String}
    */
   public async get(key: string): Promise<any> {
       if (!this.client) {
           await this.getClient();
       }
       return new Promise( resolve => {

         this.client.get(key, (err,data)=> {
                console.log("data:", data)
                return resolve(data)
           });
       })
       
    //    console.log("result: ", data)
   }
 
   /**
    * @Description: 根据key删除redis缓存数据
    * @param key {String}  
    * @return:
    */
   public async del(key: string): Promise<any> {
       if (!this.client) {
           await this.getClient();
       }
 
       await this.client.del(key);
   }
 
   /**
    * @Description: 清空redis的缓存
    * @param {type} 
    * @return:
    */
   public async flushall(): Promise<any> {
       if (!this.client) {
           await this.getClient();
       }
 
       await this.client.flushall();
   }
}
 