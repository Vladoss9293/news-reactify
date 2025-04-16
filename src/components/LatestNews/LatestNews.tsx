import { useGetLatestNewsQuery } from "../../store/services/NewsApi";
import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isError, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} isError={isError} />
    </section>
  );
};

export default LatestNews;
