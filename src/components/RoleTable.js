// src/components/RoleTable.js
import React, { useEffect, useState } from "react";
import { getRoles, getPermissions } from "../services/api";

const RoleTable = () => {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    getRoles().then((data) => setRoles(data));
    getPermissions().then((data) => setPermissions(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Roles & Permissions</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="py-3 px-6 text-left">Role Name</th>
              <th className="py-3 px-6 text-left">Permissions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">{role.name}</td>
                <td className="py-3 px-6">
                  {permissions.map((permission) => (
                    <span
                      key={permission.id}
                      className="inline-block mr-2 text-sm text-blue-600 hover:underline"
                    >
                      {permission.name}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleTable;
