import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import styles from "./styles.module.css";
import Slider from "../Slider/Slider";
import { IFilters } from "../../interfaces";
import { useTheme } from "../../context/ThemeContext";
import { useGetCategoriesQuery } from "../../store/services/NewsApi";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

interface Props {
  filters: IFilters;
}

const NewsFillters = ({ filters }: Props) => {
  const { isDark } = useTheme();
  const dispatch = useAppDispatch();
  const { data } = useGetCategoriesQuery();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => dispatch(setFilters({key: "keywords", value: keywords }))}
      />
    </div>
  );
};

export default NewsFillters;
