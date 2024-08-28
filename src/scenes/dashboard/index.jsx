import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

import StatBox from "../../components/StatBox";

import LightModeIcon from '@mui/icons-material/LightMode';
import LightIcon from '@mui/icons-material/Light';
import CloudIcon from '@mui/icons-material/Cloud';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';


import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

import WaterTwoToneIcon from '@mui/icons-material/WaterTwoTone';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
import ThermostatTwoToneIcon from '@mui/icons-material/ThermostatTwoTone';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));

  const BlueSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: blue[600],
      '&:hover': {
        backgroundColor: alpha(blue[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: blue[600],
    },
  }));

  const label = { inputProps: { 'aria-label': 'Color switch demo' } };


  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="IOT_DASHBOARD" subtitle="Light, Heat and Humidity Sensor Report" />

      {/* self introduction ??? */}

      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="29 &#176;Celsius"
            subtitle="HEAT"
            progress="0.25"
            increase="+25%"
            icon={
              <LightModeIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="856 Lux"
            subtitle="LIGHT"
            progress="0.50"
            increase="+50%"
            icon={
              <LightIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="68%"
            subtitle="HUMIDITY"
            progress="0.30"
            increase="+5%"
            icon={
              <CloudIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Heat, Light, Humidity Chart On Time
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <HistoryToggleOffIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Control Panel
            </Typography>
          </Box>
          <Box
            display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px">
                  <Box>
                    <Typography
                            color={colors.greenAccent[500]}
                            variant="h5"
                            fontWeight="600"
                          >
                            LIGHT
                          </Typography>
                    
                  </Box>
                  <IconButton>
                            <Brightness6OutlinedIcon
                               sx={{ fontSize: "30px", color: colors.greenAccent[500] }}
                            />
                          </IconButton>
                  <Box>
                  <Switch {...label} defaultChecked color="secondary" />
                    </Box>
          </Box>

          <Box
            display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px">
                  <Box>
                    <Typography
                            color={colors.blueAccent[500]}
                            variant="h5"
                            fontWeight="600"
                          >
                            HUMID
                          </Typography>
                    
                  </Box>
                  <IconButton>
                            <WaterTwoToneIcon
                               sx={{ fontSize: "30px", color: colors.blueAccent[500] }}
                            />
                          </IconButton>

                  <Box>
                  <BlueSwitch {...label} defaultChecked />
                    </Box>
          </Box>

          <Box
            display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px">
                  <Box>
                    <Typography
                            color={colors.redAccent[500]}
                            variant="h5"
                            fontWeight="600"
                          >
                            HEAT
                          </Typography>
                    
                  </Box>
                  <IconButton>
                            <ThermostatTwoToneIcon
                               sx={{ fontSize: "30px", color: colors.redAccent[500] }}
                            />
                          </IconButton>

                  <Box>
                  <PinkSwitch {...label} defaultChecked />
                    </Box>
          </Box>
          
        </Box>

      </Box>
    </Box>
  );
};

export default Dashboard;


