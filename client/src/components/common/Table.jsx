import "./Table.css";

export default function Table({
  columns = [],
  data = [],
  loading = false,
  emptyMessage = "No records found",
}) {
  return (
    <div className="table-wrapper">

      <table className="data-table">

        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{
                  width: column.width,
                }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>

          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="table-message"
              >
                Loading...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="table-message"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={row._id || row.id || index}>
                {columns.map((column) => (
                  <td key={column.key}>
                    {column.render
                      ? column.render(row, index)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}