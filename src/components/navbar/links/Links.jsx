"use client"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"

const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

      // Temporary
    const session = true
    const isAdmin = true
  return (
    <div className={styles.links}>
        {links.map((link=>(
            <NavLink item={link} key={link.title}/>
        )))}
        {session ? (
            <>
            {isAdmin && <NavLink item={{ title: "Admin", path:"/admin"}} /> }
            <button className={styles.logout}>Logout</button>
            </>
        ) : (
            <NavLink item={{ title: "Login", path:"/login"}} />
        )
              
        }
    </div>
  )
}

export default Links