import React, { useState } from 'react';
import { FormControl, Button, Select, Input, Card, InputLabel, InputAdornment, MenuItem } from '@mui/material';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import EventIcon from '@mui/icons-material/Event';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';

export default function AddBill() {
    const [bill, setBill] = useState({
        name: '',
        amount: '',
        date: '',
        endDate: '',
        category: '',
        status: true
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBill((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(bill);
        setBill({
            name: '',
            amount: '',
            date: '',
            endDate: '',
            category: '',
            status: true
        })
    };

    return (
        <Card className='billsCard'>
            <FormControl variant='standard'>
                <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
                <Input id="standard-adornment-name" name='name' type='text' value={bill.name} startAdornment={<InputAdornment position="start"><DescriptionIcon fontSize="small" /></InputAdornment>} onChange={handleInputChange} />
            </FormControl>
            <FormControl variant='standard'>
                <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                <Input id="standard-adornment-amount" name='amount' type='number' value={bill.amount} startAdornment={<InputAdornment position="start"><AttachMoneyIcon fontSize='small' /></InputAdornment>} onChange={handleInputChange} />
            </FormControl>
            <FormControl variant='standard'>
                <InputLabel htmlFor="standard-adornment-startdate">Start Date</InputLabel>
                <Input id="standard-adornment-startdate" name='date' type='date' value={bill.date} startAdornment={<InputAdornment position="start"><EventIcon fontSize='small' /></InputAdornment>} onChange={handleInputChange} />
            </FormControl>
            <FormControl variant='standard'>
                <InputLabel htmlFor="standard-adornment-enddate">End Date</InputLabel>
                <Input id='standard-adornment-enddate' name='endDate' type='date' value={bill.endDate} startAdornment={<InputAdornment position="start"><EventBusyIcon fontSize='small' /></InputAdornment>} onChange={handleInputChange} />
            </FormControl>
            <FormControl variant='standard'>
                <InputLabel id='standard-adorment-category'>Category</InputLabel>
                <Select id="standard-adorment-category" name='category' value={bill.category} startAdornment={<InputAdornment position="start"><CategoryIcon fontSize='small' /></InputAdornment>} onChange={handleInputChange} >
                    <MenuItem value='Home Expense'>Home Bills</MenuItem>
                    <MenuItem value='Car Expense'>Car Expense</MenuItem>
                    <MenuItem value='Food Expense'>Food Expense</MenuItem>
                </Select>
            </FormControl>
            <Button onClick={handleSubmit}>Add New Bill</Button>
        </Card>
    );
}