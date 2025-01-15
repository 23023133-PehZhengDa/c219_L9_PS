import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { getCategories } from "../api";

export default function Categories() {
  const categories = getCategories();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Session Categories</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="categories">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <li key={cat.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "category-active" : null
                }
                to={cat.id}
              >
                {cat.name}
              </NavLink>
            </li>
          ))
        ) : (
          <li>No categories found</li>
        )}
      </ul>
      <Outlet />
    </div>
  );
}
