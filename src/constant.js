export const config = {
  appwriteApiUrl: import.meta.env.VITE_APPWRITE_API_URL || '',
  appwriteProject: import.meta.env.VITE_APPWRITE_PROJECT_ID || '',
  appwriteDatabase: import.meta.env.VITE_APPWRITE_DATABASE_ID || '',
  appwriteCollectionWork: import.meta.env.VITE_APPWRITE_COLLECTION_WORKS_ID || '',
  appwriteCollectionBlog: import.meta.env.VITE_APPWRITE_COLLECTION_BLOGS_ID || '',
  appwriteBucket: import.meta.env.VITE_APPWRITE_BUCKET_ID || '',
  TinyApiKey: import.meta.env.VITE_TINY_API_KEY || '',
};
