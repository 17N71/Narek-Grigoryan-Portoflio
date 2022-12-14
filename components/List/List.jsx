import { useContext } from "react";
import { dataContext } from "../../pages";
import { Link as NavLink } from "react-scroll";

const List = () => {
  const { data } = useContext(dataContext);
  const navigation = data.data.navigation;
  const { lang,closeMenu } = useContext(dataContext);
  return (
    <ul className="list-none flex flex-col gap-4 md:text-3xl text-2xl">
      {navigation[lang].map(({ id, to, label }) => (
        <li key={id} onClick={closeMenu}>
          <NavLink
            onClick={closeMenu}
            to={to}
            smooth={true}
            className="cursor-pointer  duration-500 hover:text-stone-400 "
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default List;
