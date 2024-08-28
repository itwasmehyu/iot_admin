import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const initialRows = [
    { id: 1, name: 'Quạt', action: 'On', time: '2024-08-01 10:00' },
    { id: 2, name: 'Điều hòa', action: 'Off', time: '2024-08-01 10:30' },
    { id: 3, name: 'Bóng đèn', action: 'On', time: '2024-08-02 09:45' },
    { id: 4, name: 'Quạt', action: 'Off', time: '2024-08-02 11:00' },
    { id: 5, name: 'Quạt', action: 'On', time: '2024-08-01 10:00' },
    { id: 6, name: 'Điều hòa', action: 'Off', time: '2024-08-01 10:30' },
    { id: 7, name: 'Bóng đèn', action: 'On', time: '2024-08-02 09:45' },
    { id: 8, name: 'Quạt', action: 'Off', time: '2024-08-02 11:00' },
    { id: 9, name: 'Quạt', action: 'On', time: '2024-08-01 10:00' },
    { id: 10, name: 'Điều hòa', action: 'Off', time: '2024-08-01 10:30' },
    { id: 11, name: 'Bóng đèn', action: 'On', time: '2024-08-02 09:45' },
    { id: 12, name: 'Quạt', action: 'Off', time: '2024-08-02 11:00' },
    { id: 13, name: 'Quạt', action: 'On', time: '2024-08-01 10:00' },
    { id: 14, name: 'Điều hòa', action: 'Off', time: '2024-08-01 10:30' },
    { id: 15, name: 'Bóng đèn', action: 'On', time: '2024-08-02 09:45' },
    { id: 16, name: 'Quạt', action: 'Off', time: '2024-08-02 11:00' },
];

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'action', headerName: 'Action', flex: 1 },
    { field: 'time', headerName: 'Time', flex: 1 },
];

const History = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [searchText, setSearchText] = useState('');
    const [selectedAction, setSelectedAction] = useState('');
    const [rows, setRows] = useState(initialRows);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchText(value);
        filterRows(value, selectedAction);
    };

    const handleFilterChange = (event) => {
        const value = event.target.value;
        setSelectedAction(value);
        filterRows(searchText, value);
    };

    const filterRows = (searchText, selectedAction) => {
        const filteredRows = initialRows.filter((row) => {
            const matchesSearchText = Object.values(row).some((field) =>
                String(field).toLowerCase().includes(searchText)
            );
            const matchesAction = selectedAction ? row.action === selectedAction : true;
            return matchesSearchText && matchesAction;
        });

        setRows(filteredRows);
    };
    

    return (

        <Box m="20px" >
            <Box backgroundColor="white" borderRadius="10px" padding="20px">
                <Header title="DEVICES STATUS" />
                <Grid container spacing={2} alignItems="center" marginBottom={2} width="100%">
                    <Grid item md={2}>
                        <TextField
                            label="Search"
                            variant="outlined"
                            value={searchText}
                            onChange={handleSearch}
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={2}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Action</InputLabel>
                            <Select
                                value={selectedAction}
                                onChange={handleFilterChange}
                                label="Action"
                            >
                                <MenuItem value="">
                                    <em>All</em>
                                </MenuItem>
                                <MenuItem value="On">On</MenuItem>
                                <MenuItem value="Off">Off</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={2}>
                        <TextField
                            label="Start Date"
                            type="date"
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={2}>
                        <TextField
                            label="End Date"
                            type="date"
                            value={endDate}
                            onChange={e => setEndDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={handleSearch} size='large'>
                            Search
                        </Button>
                    </Grid>

                </Grid>
                <Box
                    m="20px 0 0 0"
                    height="70vh"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-row": {
                            borderBottom: '1px solid #ddd',
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.blueAccent[600],
                            borderTopLeftRadius: "20px",
                            borderTopRightRadius: "20px"
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: colors.primary[400],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: colors.blueAccent[600],
                            borderBottomLeftRadius: "20px",
                            borderBottomRightRadius: "20px"
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                    }}
                >
                    <DataGrid rows={rows} columns={columns} pageSize={10} style={{ fontSize: '16px' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default History;