1* Initial commit
2. Add bootstrap via cdn
3. Start adding app components
    3.1. Add navbar component
    3.2. Add category components, add routing to components, import forms module,
         create submit functionality
    3.3. Create Angular Services, observable subscribe/unsubscribe
    3.4. Get all categories and display them using async pipe
    3.5. Edit category functionality
    3.6. Delete category by Id
4* Categories CRUD commit
5. BlogPosts CRUD
    5.1. Create BlogPosts components (list, add)
    5.2. Add markdown preview of content (ngx-markdown)
    5.3. Add image preview
    5.4. Display Categories in BlogPost list, multi-select categories 
    5.5. Edit blogpost component
    5.6. Delete Blogpost

6. Upload Image functionality
    6.1. add image selector modal
    6.2. image form submission
    6.3. display all images
    6.4. select image from image selector in add/edit blogpost

7. Create Home Component
    7.1. Display all components
    7.2. Display blog details

8* BlogPosts CRUD, images and home page commit

9. Authentication
9.1 create login component
9.2 create auth service
9.3 store token securely (ngx coockie service)
9.4 update navbar to display login info
9.5 test pass jwt token in http requests - implement interceptors and pass auth header
9.6 auth guards, bind routs to auth guards