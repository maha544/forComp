interface TabColumn {
    header: string;
    accessor: string;
  }
  
interface TabProps {
  data: any[];
  columns: TabColumn[];
}
  
  const ForTable: React.FC<TabProps> = ({ data, columns }) => {
    return (
      <table className="table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ForTable;