import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css'
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Sceleton from '../../components/Sceleton/Sceleton';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNews();
  }, [])
  return <main className={styles.main}>
    {news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Sceleton type={'banner'} count={1} />} 

    {!isLoading ? <NewsList news={news} /> : <Sceleton type={'item'} count={10} />}
  </main>
}


export default Main;