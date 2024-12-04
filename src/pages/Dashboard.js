import React, { useState, useEffect } from "react";
import { getUsers, getRoles, getPermissions } from "../services/api"; // Import the functions by name

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getUsers(); // Call the API function
        setUsers(usersData);

        const rolesData = await getRoles(); // Call the API function
        setRoles(rolesData);

        const permissionsData = await getPermissions(); // Call the API function
        setPermissions(permissionsData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Users */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users</h2>
          <ul className="space-y-2">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex justify-between items-center py-2 px-4 rounded-md bg-gray-50 shadow-md hover:bg-gray-100"
              >
                <span>{user.name}</span>
                <span className="text-sm text-gray-500">{user.role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Roles */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Roles</h2>
          <ul className="space-y-2">
            {roles.map((role) => (
              <li
                key={role.id}
                className="flex justify-between items-center py-2 px-4 rounded-md bg-gray-50 shadow-md hover:bg-gray-100"
              >
                <span>{role.name}</span>
                <span className="text-sm text-gray-500">
                  Permissions: {Array.isArray(role.permissions) ? role.permissions.join(", ") : "No permissions"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Permissions */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Permissions</h2>
          <ul className="space-y-2">
            {permissions.map((permission) => (
              <li
                key={permission.id}
                className="py-2 px-4 rounded-md bg-gray-50 shadow-md hover:bg-gray-100"
              >
                {permission.permission}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
