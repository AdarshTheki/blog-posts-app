import { Client, Account, ID } from 'appwrite';
import { config } from '../constant';

console.log(config);

export class AuthServices {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(config.appwriteApiUrl).setProject(config.appwriteProject);
    this.account = new Account(this.client);
  }

  async register({ email, password, name }) {
    try {
      const userId = ID.unique();
      const userAccount = await this.account.create(userId, email, password, name);
      if (userAccount.$id) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log('register :: error >> ', error);
    }
  }

  async login({ email, password }) {
    try {
      await this.account.createEmailPasswordSession(email, password);
      return this.getCurrentUser();
    } catch (error) {
      console.log('login :: error >> ', error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('getCurrentUser :: error >> ', error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log('logout :: error >> ', error);
    }
  }
}
