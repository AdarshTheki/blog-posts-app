## Blog App with React.js

### Overview

This project is a simple blog app built using React.js. It allows users to create, edit, and view blog posts. We'll integrate several packages to enhance functionality.

### Packages Used

1. **TinyMCE React**:

    - TinyMCE is a powerful WYSIWYG editor. The `@tinymce/tinymce-react` package provides a React wrapper for integrating TinyMCE into your application.
    - To install, run:
        ```
        npm i @tinymce/tinymce-react
        ```
    - For detailed documentation, refer to the [TinyMCE Documentation](https://www.tiny.cloud/docs/tinymce/6/react-pm-bundle/).

2. **Redux Toolkit**:

    - Redux Toolkit simplifies state management in React applications. It includes utilities like `createSlice`, `createAsyncThunk`, and `createEntityAdapter`.
    - Install it with:
        ```
        npm install @reduxjs/toolkit
        ```

3. **Appwrite**:

    - Appwrite is a backend-as-a-service platform that provides authentication, database, and storage services.
    - Visit the [Appwrite website](https://appwrite.io/) to learn more.
    - To use Appwrite in your project, follow their setup instructions.

4. **html-react-parser**:
    - This package parses HTML strings into React components. Useful for rendering HTML content fetched from APIs.
    - Install it with:
        ```
        npm install html-react-parser
        ```

### Getting Started

1. Create a new React project:

    ```
    npx create-react-app blog-app
    cd blog-app
    ```

2. Install the required packages:

    ```
    npm install @tinymce/tinymce-react @reduxjs/toolkit html-react-parser
    ```

3. Set up your Redux store using Redux Toolkit. Define slices for managing blog posts, user authentication, etc.

4. Integrate TinyMCE into your blog post creation/editing forms. Refer to the TinyMCE React Quick Start for guidance.

5. Use Appwrite for user authentication and database storage. Configure your Appwrite instance and connect it to your app.

6. Fetch blog posts from the backend (Appwrite or any other API) and render them using `html-react-parser`.

### Folder Structure:

```
Portfolio/
├── public/
│   └── ...
├── src/
│   ├── appwrite/
│   │   ├── authService.js
│   │   ├── blogService.js
│   │   ├── workService.js
│   │   ├── index.js
│   ├── redux/
│   │   ├── authSlice.js
│   │   ├── fetchDataSlice.js
│   │   ├── store.js
│   ├── components/
│   │   ├── AuthLayout.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── PostForm.jsx
│   │   ├── PostImageSection.jsx
│   │   ├── PostSection.jsx
│   │   ├── index.js
│   ├── pages/
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── CreateBlog.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Work.jsx
│   │   ├── index.js
│   ├── utils/
│   │   ├── Button.jsx
│   │   ├── Text.jsx
│   │   ├── formateDate.js
│   ├── styles/
│   │   ├── index.css
│   ├── App.js
│   ├── main.jsx
│   ├── Routes.jsx
├── .env.sample
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
└── ...
```

### Additional Notes

-   Remember to handle routing, user authentication, and error handling as needed.
-   Customize the styling and layout of your blog app to make it visually appealing.
