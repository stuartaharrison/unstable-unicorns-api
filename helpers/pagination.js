const buildPageInfo = (dataSource, page, limit) => {
    // handle paging to make sure we get the correct start index 
    // (pages are 1, 2, 3 but Arrays index at 0, 1, 2)
    let startSlice = page < 1 ? 0 : (page - 1) * limit;
    let endSlice = startSlice + limit;
    let totalCount = dataSource.length;
    let totalPages = Math.ceil(dataSource.length / limit);

    return {
        startSlice,
        endSlice,
        totalCount,
        totalPages,
        pageInfo: {
            page: page,
            pageSize: limit,
            totalCount,
            totalPages,
            hasNextPage: (page < totalPages)  
        }
    }
};

module.exports = {
    buildPageInfo
};