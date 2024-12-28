import Logo from "../Navbar/Logo"
import Menu from "../Navbar/Menu"
import Search from "../Navbar/Search"
function Footer() {
  return (
    <footer className="d-flex gap-5 p-4">
        <Logo />
        <p className="fs-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quisquam nisi corporis animi dolore, assumenda nesciunt dolor repudiandae mollitia delectus aperiam esse vel dicta odio molestiae dolorum voluptatibus aut sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum voluptas incidunt voluptatum, necessitatibus eaque enim quaerat temporibus pariatur possimus! Atque, vel! Ipsum nihil ducimus unde a cumque? Natus, rerum?
        </p>
        <ul className="px-3 fs-4 d-flex flex-column gap-2">

        <Menu />
        </ul>
        <div className="d-flex flex-column gap-4">
        <Search />
        <Search />
        <Search />
        <Search />
        </div>
    </footer>
  )
}

export default Footer