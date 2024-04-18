export const config = {
    tinyApiKey: String(import.meta.env.TINY_API_KEY),
    appwriteUrl: String(import.meta.env.APPWRITE_API_URL),
    appwriteProjectId: String(import.meta.env.APPWRITE_PROJET_ID),
    appwriteDatabaseId: String(import.meta.env.APPWRITE_DATABASE_ID),
    appwriteWorkId: String(import.meta.env.APPWRITE_COLLECTION_WORKS_ID),
    appwriteBlogId: String(import.meta.env.APPWRITE_COLLECTION_BLOGS_ID),
    appwriteBucketId: String(import.meta.env.APPWRITE_BUCKET_ID),
};
