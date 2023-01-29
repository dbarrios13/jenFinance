import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Paper} from '@mui/material';

export default function ListBills({bills}) {

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Bills</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bills.map((bill, index) => (
                        <TableRow key={index}>
                            <TableCell>{bill.name}</TableCell>
                            <TableCell>${bill.amount}</TableCell>
                            <TableCell>{bill.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}