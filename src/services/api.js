// src/services/api.js
const users = [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "User" },
    { id: 3, name: "Alice Johnson", role: "Manager" },
  ];
  
  const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "User" },
    { id: 3, name: "Manager" },
  ];
  
  const permissions = [
    { id: 1, name: "Read" },
    { id: 2, name: "Write" },
    { id: 3, name: "Execute" },
  ];
  
  const getUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(users), 500);
    });
  };
  
  const getRoles = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(roles), 500);
    });
  };
  
  const getPermissions = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(permissions), 500);
    });
  };
  
  export { getUsers, getRoles, getPermissions };
  