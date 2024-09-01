import Image from "next/image";
import styles from '@/app/ui/sidebar/sidebar.module.css'
import { MdDashboard } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa6";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
    {
        title:"Users",
        list:[
            {
                title:"Dashboard",
                path:"/dashboard",
                icon: <MdDashboard />
            },
            {
                title:"Users",
                path:"/dashboard/users",
                icon: <CiUser />

            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <HiOutlineShoppingBag />
            },
            {
                title:"Transactions",
                path:"/dashboard/transactions",
                icon: <FaArrowUp />
            }


        ]
    }
]

const Sidebar = () => {
    
  return (
    <div className={styles.container}>
        <div className={styles.user}>
        <Image src='/logo-next.png' alt='user image' width="50" height="50"/>
        <div className={styles.useDetail}>
            <span className={styles.username}>HELLO</span>
            <span className={styles.userTitle}>WORLD</span>
            

        </div>
        </div>
          <ul className={styles.list}>
            {menuItems.map((item) => (
                <li key={item.title}>
                    <span className={styles.item}>{item.title}</span>
                    {
                    
                        item.list.map((i) => (
                            <MenuLink item={i} key={i.title}/>

                        ))
                    }
                </li>
            ))}
          </ul>
        

    </div>
  )
};

export default Sidebar;