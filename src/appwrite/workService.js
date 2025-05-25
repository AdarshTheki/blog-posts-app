import { ID, Client, Query, Databases, Storage } from 'appwrite';
import { config } from '../constant';

export class WorkService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(config.appwriteApiUrl).setProject(config.appwriteProject);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createWorkPost({ slug, heading, type, content, image_url }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabase,
        config.appwriteCollectionWork,
        slug,
        {
          heading,
          type,
          content,
          image_url,
        }
      );
    } catch (error) {
      console.log('createWorkPost :: error >> ', error);
    }
  }

  async updateWorkPost(slug, { heading, type, content }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabase,
        config.appwriteCollectionWork,
        slug,
        {
          heading,
          type,
          content,
        }
      );
    } catch (error) {
      console.log('updateWorkPost :: error >> ', error);
    }
  }

  async deleteWorkPost(slug) {
    try {
      return await this.databases.deleteDocument(
        config.appwriteDatabase,
        config.appwriteCollectionWork,
        slug
      );
    } catch (error) {
      console.log('deleteWorkPost :: error >> ', error);
    }
  }

  async getAllWorkPosts(queries = [Query.equal('slug')]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabase,
        config.appwriteCollectionWork
      );
    } catch (error) {
      console.log('getAllWorkPosts :: error >> ', error);
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(config.appwriteBucket, ID.unique(), file);
    } catch (error) {
      console.log('uploadFile :: error >> ', error);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(config.appwriteBucket, fileId);
    } catch (error) {
      console.log('deleteFile :: error >> ', error);
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(config.appwriteBucket, fileId);
    } catch (error) {
      console.log('getFilePreview :: error >> ', error);
    }
  }
}
