import conf from '../conf/conf.js'
import { Client, Account,ID } from "appwrite";
export class AuthSevice{
    client=new Client();
    account;
    constructor(){
        this.client.
        setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(
                ID.unique(),email,password,name)
                if(userAccount){
                    //call another methodret
                    return this.account;this.login({email,password});

                    
                }else{
                    return userAccount;
                }
        } catch (error) {
            throw error;
        }
    }

    async login({email,pass}){
        try {
         return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
           console.log("Appwrite service :: getCurrentUser :: error",error)
            
        }
        return null;
    }

    async logout(){
        try {
            return  await this.account.deleteSessionsa();
        } catch (error) {
            console.log("Appwrite service :: logout",error)
        }
    }
}

const AuthSevice=new Account();
export default AuthSevice;