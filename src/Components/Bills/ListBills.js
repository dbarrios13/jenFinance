import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Paper} from '@mui/material';

export default function ListBills({bills}) {

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Bills</TableCell>
                        <TableCell>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {bills !== undefined ? bills.map((bill, index) => (
                        <TableRow key={index}>
                            <TableCell>{bill.date}</TableCell>
                            <TableCell>{bill.name}</TableCell>
                            <TableCell>${bill.amount}</TableCell>
                        </TableRow>
                    )) : 'Add bills'} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}