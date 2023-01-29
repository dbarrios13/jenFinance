import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import AddBill from "./AddBill";
import ListBills from "./ListBills";

export default function Bills() {
    const [bills, setBills] = useState(JSON.parse(localStorage.getItem('bills')))

    useEffect(() => {

    }, [bills])

    return (
        <Container className="billsContainer">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <ListBills bills={bills}/>
                </Grid>
                <Grid item xs={4}>
                    <AddBill setBills={setBills} bills={bills}/>
                </Grid>
            </Grid>
        </Container>
    );
}