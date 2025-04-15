import { themeIcon } from "../../assets";
import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const {isDark, toggleTheme} = useTheme();

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS REACTIFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <img src={isDark ? themeIcon.dark : themeIcon.light} alt={isDark ? 'dark-moon' : 'light-moon'} width={100} onClick={toggleTheme} />
    </header>
  );
};

export default Header;
