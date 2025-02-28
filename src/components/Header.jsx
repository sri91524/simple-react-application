import styles from './Header.module.css'

function Header(){
    return(
        <header >
            <h1>The New York Times</h1>
            <h4>OPINION</h4>
            <h4>GUEST ESSAY</h4>           
            <p className={styles.topic}>Modern Zoos Are Not Worth the Moral Cost</p>
        </header>
        
    );
}

export default Header;