import { Box } from '@mui/material';
import { BLACK, DARK_GREY, ERROR, WHITE } from '../constants';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function FileDetailComponent({ fileData }) {
  const flaggedTerms = [];
  for (const category of [
    ...new Set([
      ...Object.keys(fileData.sspm_matches),
      ...Object.keys(fileData.wbpm_matches),
    ]),
  ]) {
    for (const term of Object.keys(fileData.sspm_matches[category])) {
      if (term) {
        flaggedTerms.push({
          category: category
            .charAt(0)
            .toUpperCase()
            .concat(category.slice(1).toLocaleLowerCase()),
          term: term,
          SSPMOccurrences: fileData.sspm_matches[category][term]
            ? fileData.sspm_matches[category][term].length
            : 0,
          WBPMOccurrences: fileData.wbpm_matches[category][term]
            ? fileData.wbpm_matches[category][term].length
            : 0,
        });
      }
    }
  }

  const columns = [
    { field: 'term', headerName: 'Non-inclusive Term' },
    { field: 'category', headerName: 'Category' },
    {
      field: 'SSPMoccurrences',
      headerName: 'Number of Occurrences (sub-string pattern matching)',
      type: 'number',
    },
    {
      field: 'WBPMoccurrences',
      headerName: 'Number of Occurrences (word-boundary pattern matching)',
      type: 'number',
    },
  ];

  return (
    <Box>
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: DARK_GREY, color: WHITE }}
      >
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => {
                return (
                  <TableCell
                    key={column.headerName}
                    align={index === 0 ? 'left' : 'right'}
                    sx={{
                      color: WHITE,
                    }}
                  >
                    {column.headerName}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {flaggedTerms.map((item) => (
              <TableRow
                key={`${item.category}-${item.term}`}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell component='th' scope='row' sx={{ color: WHITE }}>
                  {item.term}
                </TableCell>
                <TableCell align='right' sx={{ color: WHITE }}>
                  {item.category}
                </TableCell>
                <TableCell align='right' sx={{ color: WHITE }}>
                  {item.SSPMOccurrences}
                </TableCell>
                <TableCell align='right' sx={{ color: WHITE }}>
                  {item.WBPMOccurrences}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default FileDetailComponent;
