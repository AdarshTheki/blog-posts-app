import { ID, Client, Query, Databases, Storage } from 'appwrite';

const databaseId = '661e6aa940652623d1a0';
const workId = '661e6c875e376815bc4e';
const bucketId = '661e742eb75e38d3c042';

class WorkService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint('https://cloud.appwrite.io/v1').setProject('661e48f94d5034e2d91d');
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createWorkPost({ slug, heading, type, content, image_url }) {
        try {
            return await this.databases.createDocument(databaseId, workId, slug, {
                heading,
                type,
                content,
                image_url,
            });
        } catch (error) {
            console.log('createWorkPost :: error >> ', error);
        }
    }

    async updateWorkPost(slug, { heading, type, content }) {
        try {
            return await this.databases.updateDocument(databaseId, workId, slug, {
                heading,
                type,
                content,
            });
        } catch (error) {
            console.log('updateWorkPost :: error >> ', error);
        }
    }

    async deleteWorkPost(slug) {
        try {
            return await this.databases.deleteDocument(databaseId, workId, slug);
        } catch (error) {
            console.log('deleteWorkPost :: error >> ', error);
        }
    }

    async getAllWorkPosts(queries = [Query.equal('slug')]) {
        try {
            return await this.databases.listDocuments(databaseId, workId);
        } catch (error) {
            console.log('getAllWorkPosts :: error >> ', error);
        }
    }

    // file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(bucketId, ID.unique(), file);
        } catch (error) {
            console.log('uploadFile :: error >> ', error);
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(bucketId, fileId);
        } catch (error) {
            console.log('deleteFile :: error >> ', error);
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(bucketId, fileId);
        } catch (error) {
            console.log('getFilePreview :: error >> ', error);
        }
    }
}

export const workService = new WorkService();
