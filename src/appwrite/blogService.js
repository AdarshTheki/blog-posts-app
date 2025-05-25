import { Client, Query, Databases } from 'appwrite';
import { config } from '../constant';

export class BlogService {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(config.appwriteApiUrl).setProject(config.appwriteProject);
    this.databases = new Databases(this.client);
  }

  async createBlogPost({ slug, heading, type, content }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabase,
        config.appwriteCollectionBlog,
        slug,
        {
          heading,
          type,
          content,
        }
      );
    } catch (error) {
      console.log('createBlogPost :: error >> ', error);
    }
  }

  async updateBlogPost(slug, { heading, type, content }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabase,
        config.appwriteCollectionBlog,
        slug,
        {
          heading,
          type,
          content,
        }
      );
    } catch (error) {
      console.log('updateBlogPost :: error >> ', error);
    }
  }

  async deleteBlogPost(slug) {
    try {
      return await this.databases.deleteDocument(
        config.appwriteDatabase,
        config.appwriteCollectionBlog,
        slug
      );
    } catch (error) {
      console.log('deleteBlogPost :: error >> ', error);
    }
  }

  async getAllBlogPosts(page = 1) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabase,
        config.appwriteCollectionBlog,
        [Query.limit(3), Query.offset(3 * parseInt(page) - 3), Query.orderDesc('$createdAt')]
      );
    } catch (error) {
      console.log('getAllBlogPosts :: error >> ', error);
    }
  }

  async getBlogPostById(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabase,
        config.appwriteCollectionBlog,
        slug
      );
    } catch (error) {
      console.log('getBlogPostById :: error >> ', error);
    }
  }
}
