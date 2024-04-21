import { Client, Query, Databases } from 'appwrite';

const databaseId = '661e6aa940652623d1a0';
const blogId = '661e6abe1e5719422b7b';

export class BlogService {
    client = new Client();
    databases;

    constructor() {
        this.client.setEndpoint('https://cloud.appwrite.io/v1').setProject('661e48f94d5034e2d91d');
        this.databases = new Databases(this.client);
    }

    async createBlogPost({ slug, heading, type, content }) {
        try {
            return await this.databases.createDocument(databaseId, blogId, slug, {
                heading,
                type,
                content,
            });
        } catch (error) {
            console.log('createBlogPost :: error >> ', error);
        }
    }

    async updateBlogPost(slug, { heading, type, content }) {
        try {
            return await this.databases.updateDocument(databaseId, blogId, slug, {
                heading,
                type,
                content,
            });
        } catch (error) {
            console.log('updateBlogPost :: error >> ', error);
        }
    }

    async deleteBlogPost(slug) {
        try {
            return await this.databases.deleteDocument(databaseId, blogId, slug);
        } catch (error) {
            console.log('deleteBlogPost :: error >> ', error);
        }
    }

    async getAllBlogPosts(queries = [Query.limit(10)]) {
        try {
            return await this.databases.listDocuments(databaseId, blogId);
        } catch (error) {
            console.log('getAllBlogPosts :: error >> ', error);
        }
    }
}

