/**
 * PaginationService.js
 * The Pagination Service of Cerve API
 */

module.exports = {

  paginate: async (model, criteria, currentPage = 1, limit = 20, populate_data, sort) => {
    try {
      const totalRecordCount = await model.count(criteria);
      const conditions = {
        where: criteria,
        limit,
        skip: currentPage <= 0 ? 0 : (currentPage - 1) * limit,
        sort: sort || 'createdAt desc'
      };
      const records = await UtilityService.populateQuery(model, conditions, populate_data);
      const meta = generatePageMeta(conditions, records.length, currentPage, totalRecordCount);

      return [records, meta];
    } catch (err) {
      console.log(`\n\nPagination Service Error -> ${err}`);
      throw err;
    }
  }
};

function generatePageMeta(conditions, pageCount, currentPage, totalRecordCount) {
  const numberOfPages = Math.ceil(totalRecordCount / conditions.limit);
  const nextPage = numberOfPages >= (currentPage + 1) ? `${currentPage + 1}` : null;
  const previousPage = currentPage > 1 ? `${currentPage - 1}` : null;
  return {
    page: conditions.page,
    limit: conditions.limit,
    previousPage,
    nextPage,
    pageCount: numberOfPages,
    total: totalRecordCount
  };
}
