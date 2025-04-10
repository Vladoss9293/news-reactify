import styles from './styles.module.css'

const Pagination = ({totalPages, currentPage, handlePageClick, handleNextPage, handlePreviousPage}) => {
  return (
    <div className={styles.pagination}>
      <button onClick={handlePreviousPage} disabled={currentPage === 1} className={styles.arrow}>{'<'}</button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return <button onClick={() => handlePageClick(index+1)} disabled={index+1 === currentPage} className={styles.pageNumber} key={index}>{index+1}</button>
        })}
      </div>
      <button onClick={handleNextPage} disabled={totalPages === currentPage} className={styles.arrow}>{'>'}</button>
    </div>
  )
}


export default Pagination;