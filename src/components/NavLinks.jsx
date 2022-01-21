import { NavLink } from "react-router-dom";

const activeStyle = { color: "green" };

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" exact activeStyle={activeStyle}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/1">Profile/1</NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          exact
          activeStyle={activeStyle}
          isActive={(match, location) => {
            console.log(match, location);
            return match !== null && location.search === "";
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=mark"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            return match !== null && location.search === "?name=mark";
          }}
        >
          About?name=mark
        </NavLink>
      </li>
    </ul>
  );
}
