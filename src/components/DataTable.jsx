import React, { useState, useMemo } from 'react';

const DataTable = ({ columns, data, pageSize = 10 }) => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortDir, setSortDir] = useState('asc');
  const [page, setPage] = useState(1);

  // Filtering
  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter(row =>
      columns.some(col => {
        const value = row[col.accessor];
        return value && value.toString().toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, data, columns]);

  // Sorting
  const sortedData = useMemo(() => {
    if (!sortBy) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      if (aValue === bValue) return 0;
      if (sortDir === 'asc') return aValue > bValue ? 1 : -1;
      return aValue < bValue ? 1 : -1;
    });
  }, [filteredData, sortBy, sortDir]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const pagedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, page, pageSize]);

  const handleSort = accessor => {
    if (sortBy === accessor) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(accessor);
      setSortDir('asc');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div>
          Show <input type="number" value={pageSize} readOnly className="border border-[#bfb7b7] rounded w-12 px-1 mx-1" /> entries
        </div>
        <div>
          <span>Search:</span>
          <input
            type="text"
            className="border border-[#bfb7b7] rounded px-2 py-1 ml-2"
            style={{ width: '180px' }}
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-[#f8fafc] text-[#333]">
              {columns.map(col => (
                <th
                  key={col.accessor}
                  className="py-2 px-3 font-semibold text-left cursor-pointer select-none"
                  onClick={() => col.sortable !== false && handleSort(col.accessor)}
                >
                  {col.label}
                  {sortBy === col.accessor && (
                    <span className="ml-1">{sortDir === 'asc' ? '▲' : '▼'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pagedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-6 text-gray-500">
                  No data available in table
                </td>
              </tr>
            ) : (
              pagedData.map((row, idx) => (
                <tr key={idx} className="border-b border-[#f1f1f1] hover:bg-[#f8fafc]">
                  {columns.map(col => (
                    <td key={col.accessor} className="py-3 px-3">
                      {col.render ? col.render(row) : row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between mt-4 text-sm">
        <div>
          Showing {pagedData.length === 0 ? 0 : (page - 1) * pageSize + 1} to {Math.min(page * pageSize, sortedData.length)} of {sortedData.length} entries
        </div>
        <div className="flex items-center gap-1">
          <button
            className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white rounded px-2 py-1 text-gray-500"
            onClick={() => setPage(1)}
            disabled={page === 1}
          >
            &laquo;
          </button>
          <button
            className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white rounded px-2 py-1 text-gray-500"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`border rounded px-2 py-1 ${page === i + 1 ? 'bg-[#0096ff] text-white' : 'border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white text-gray-500'}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white rounded px-2 py-1 text-gray-500"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
          <button
            className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white rounded px-2 py-1 text-gray-500"
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable; 