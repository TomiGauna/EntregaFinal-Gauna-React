import styles from './navbar.module.scss';
import CartWidget from '../CartWidget/cartwidget';
import { NavLink } from 'react-router-dom';

const Navbar = ({logoIcon}) => {
  return (
    <nav className= {styles.navbarcontainer}>
        <NavLink to="/">
            <p className={styles.brandname}><img className={styles.brandicon} src={logoIcon} />Tenth Player</p>
        </NavLink>

        <NavLink to="/category/nationalteams">
            <p>National Teams</p>
        </NavLink>

        <NavLink to="/category/premierleague">
            <p>EPL</p>
        </NavLink>

        <NavLink to="category/laliga">
            <p>La Liga</p>
        </NavLink>

        <NavLink to="category/serie-a">
            <p>Serie A</p>
        </NavLink>

        <NavLink to="category/bundesliga">
            <p>Bundesliga</p>
        </NavLink>

        <NavLink to="category/ligue1">
            <p>Ligue 1</p>
        </NavLink>

        <NavLink to={"/cart"}>
            <CartWidget icon='https://cdn-icons-png.flaticon.com/512/5087/5087847.png'/>
        </NavLink>
    </nav>
  )
}

export default Navbar