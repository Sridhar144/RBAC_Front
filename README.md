**RBAC Frontend**

A **Role-Based Access Control (RBAC)** frontend application built using **React**. This application allows an administrator to manage users, roles, and permissions in an intuitive dashboard interface. The data is statically provided (no backend) to simulate an RBAC system.

**Features**

●● **User Management**: Display a list of users with their assigned roles.

●● **Role Management**: View and manage different roles with associated permissions. ●● **Permissions Management**: View and assign permissions to roles.

●● **Dynamic UI**: Built with modern UI practices and styled for ease of use.

**Technologies Used**

●● **React**: A JavaScript library for building user interfaces.

- **React Router**: For routing and navigation between components.
- **React Hooks**: For managing component state and side effects.
- **Axios**: For making API calls to simulate data fetching (currently using static data).
- **React Context API**: For global state management (if implemented).

●● **Tailwind CSS**: A utility-first CSS framework used to style the application, ensuring a

responsive and modern layout.

●● **FontAwesome**: For adding scalable vector icons for social media, actions, and other UI

elements.

●● **React Table**: For managing and displaying tables with role and user data dynamically.

**Project Setup**

1. **Clone the Repository**

git clone https://github.com/yourusername/rbac-frontend.git cd rbac-frontend

2. **Install Dependencies**

npm install

3. **Start the Development Server**

npm start

The app will be running at http://localhost:3000.

4. **Open the Application in Your Browser**

Navigate to http://localhost:3000 to view the application.

**Folder Structure**

●● **/src**: Contains all the frontend code and components.

- **/components**: Reusable components such as tables and buttons.
- **/pages**: Pages like the Dashboard.
- **/services**: API calls (simulated static data in this case).
- **/styles**: Tailwind CSS setup.

**Simulated API Endpoints**

In the absence of a backend, the following functions are used to simulate data retrieval:

●● **getUsers()**: Fetches the list of users.

●● **getRoles()**: Fetches the list of roles.

●● **getPermissions()**: Fetches the list of permissions.

**Example Static Data (Simulated API)**

**Users:** json

[

{ "id": 1, "name": "Alice", "role": "Admin" }, { "id": 2, "name": "Bob", "role": "User" }

]

**Roles:** json

[

{ "id": 1, "name": "Admin", "permissions": ["Create", "Read", "Update", "Delete"] },

{ "id": 2, "name": "User", "permissions": ["Read"] }

]

**Permissions:** json

[

{ "id": 1, "permission": "Create" }, { "id": 2, "permission": "Read" },

{ "id": 3, "permission": "Update" }, { "id": 4, "permission": "Delete" }

]

**Contributing**

Feel free to fork the repository and submit issues and pull requests. Contributions are welcome!

1. Fork the project.
1. Create your feature branch (git checkout -b feature/NewFeature).
1. Commit your changes (git commit -m 'Add new feature').
1. Push to the branch (git push origin feature/NewFeature).
1. Create a new Pull Request or Just Clone the project.
