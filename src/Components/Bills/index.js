import * as React from "react";
import { Container, Grid } from "@mui/material";
import AddBill from "./AddBill";

export default function Bills() {
    return (
        <Container className="billsContainer">
            <Grid container spacing={2}>
                <Grid xs={8}>
                </Grid>
                <Grid xs={4}>
                    <AddBill />
                </Grid>
            </Grid>
        </Container>
    );
}