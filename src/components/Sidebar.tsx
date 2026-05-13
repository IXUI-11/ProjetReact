import { useState } from "react";

export const Sidebar = () => {
  const [sidebarOuverte, setSidebarOuverte] = useState(true);

  return (
    <div className="flex">

      {sidebarOuverte && (
        <div className="w-64 bg-white shadow-md flex flex-col p-6">

          <div className="flex items-center justify-between mb-20">
            <h2 className="text-3xl font-bold">BenoveAide</h2>
            <button
              onClick={() => { setSidebarOuverte(!sidebarOuverte); }}
              className="cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 4A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9A1.5 1.5 0 0 1 3.5 4zM7 15h9.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7zM3.5 5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H6V5z" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-14">
            <a href="/Admin" className="text-gray-700 hover:text-indigo-600 font-medium">Dashboard</a>
            <a href="/Missions" className="text-gray-700 hover:text-indigo-600 font-medium">Missions</a>
            <a href="/Benevoles" className="text-gray-700 hover:text-indigo-600 font-medium">Bénévoles</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Statistiques</a>
          </nav>

          <a href="#" className="text-white font-medium mt-auto bg-red-700 p-2 text-center">Déconnexion</a>
        </div>
      )}

      {!sidebarOuverte && (
        <button
          onClick={() => { setSidebarOuverte(!sidebarOuverte); }}
          className="p-4 cursor-pointer h-fit"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 4A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9A1.5 1.5 0 0 1 3.5 4zM7 15h9.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7zM3.5 5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H6V5z" />
          </svg>
        </button>
      )}

    </div>
  );
};