import { faDoorOpen, faHouse, faQuestionCircle, faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ faIconName, active, route }: { faIconName: IconDefinition; active: boolean; route: string }) => {
  return (
    <Link
      href={route}
      className='h-4 items-center p-2 text-base font-normal text-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
    >
      <div>
        <FontAwesomeIcon
          className={
            active
              ? "text-blue-600 justify-items-center	 hover:text-blue-800"
              : "hover:text-blue-800 justify-items-center"
          }
          icon={faIconName}
        />
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const router = useRouter();
  console.log(router.pathname);
  const navItems = [
    {
      tooltip: "Home",
      faIconName: faHouse,
      route: "/",
      active: false,
    },
    {
      tooltip: "Users",
      faIconName: faUser,
      route: "/users",
      active: router.pathname.startsWith("/users"),
    },
    {
      tooltip: "About - not implemented",
      faIconName: faQuestionCircle,
      route: "/about",
      active: false,
    },
  ];

  const bottomItems = [
    {
      tooltip: "Log Out - not implemented",
      faIconName: faDoorOpen,
      route: "/logout",
      active: false,
    },
  ];

  return (
    <>
      <div className='w-16 float-left'>.</div>
      <div className='w-16 float-left h-screen fixed  ' aria-label='Sidebar'>
        <div className='py-4 flex flex-col justify-between h-full px-4 bg-gray-50 rounded'>
          <div className='space-y-12  hover:cursor-pointer '>
            {navItems.map((navItem) => {
              return (
                <Tooltip title={navItem.tooltip} key={navItem.tooltip} placement='right'>
                  <div>
                    <NavItem
                      key={navItem.tooltip}
                      faIconName={navItem.faIconName}
                      active={navItem.active}
                      route={navItem.route}
                    />
                  </div>
                </Tooltip>
              );
            })}
          </div>
          <div className=' hover:cursor-pointer '>
            {bottomItems.map((navItem) => {
              return (
                <Tooltip title={navItem.tooltip} key={navItem.tooltip} placement='right'>
                  <div>
                    <NavItem
                      key={navItem.tooltip}
                      faIconName={navItem.faIconName}
                      active={navItem.active}
                      route={navItem.route}
                    />
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
