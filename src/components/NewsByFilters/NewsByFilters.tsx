import { TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetNewsQuery } from "../../store/services/NewsApi";
import { setFilters } from "../../store/slices/newsSlice";
import NewsFillters from "../NewsFillters/NewsFillters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";


const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector(state => state.news.filters)
  const news = useAppSelector(state => state.news.news)

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading, isError } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(setFilters({key: "page_number", value: filters.page_number + 1 }));
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(setFilters({key: "page_number", value: filters.page_number - 1 }));
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({key: "page_number", value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFillters filters={filters} />

      <PaginationWrapper
        top={true}
        bottom={true}
        currentPage={filters.page_number}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        totalPages={TOTAL_PAGES}
      >
        <NewsList isError={isError} isLoading={isLoading} news={news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
