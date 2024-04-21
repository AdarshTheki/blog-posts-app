import { AuthServices } from './authService';
import { BlogService } from './blogService';
import { WorkService } from './workService';

const authService = new AuthServices();
const blogService = new BlogService();
const workService = new WorkService();

export { authService, blogService, workService };
