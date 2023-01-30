import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import AddBill from "./AddBill";
import ListBills from "./ListBills";
import { getBills } from "../../Data";

export default function Bills() {
    const [bills, setBills] = useState(getBills())

    useEffect(() => {
        getBills()
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