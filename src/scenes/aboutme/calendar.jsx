import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ProfilePage = () => {
  const theme = useTheme();


  return (
    <Box
      m="20px"
      p="20px"
      borderRadius="8px"
      boxShadow={theme.shadows[3]}
      bgcolor={theme.palette.background.paper}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb="20px"
      >
        <img
          src="\assets\user_sample.png" 
          alt="Profile"
          style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />
        <Typography variant="h3" gutterBottom>
          Nguyen Ngoc Quang Huy
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Mã sinh viên: B21DCCN434
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Lớp: D21CQCN02-B
        </Typography>
        <Typography variant="h6" gutterBottom >
          "The rocks remain slient because the trees are listening"
        </Typography>
      </Box>

      <Box mb="20px">
        <Typography variant="h5" gutterBottom>
          Báo cáo PDF
        </Typography>
        <Link href="/path-to-your-report.pdf" target="_blank" rel="noopener" underline="hover">
          Tải báo cáo
        </Link>
      </Box>

      <Box mb="20px">
        <Typography variant="h5" gutterBottom>
          Link Git
        </Typography>
        <Link href="https://github.com/itwasmehyu" target="_blank" rel="noopener" underline="hover">
          GitHub Repository
        </Link>
      </Box>
      <Box>
        <Typography variant="h5" gutterBottom>
          API Docs
        </Typography>
        <Link href="https://your-api-docs-url" target="_blank" rel="noopener" underline="hover">
          Xem tài liệu API
        </Link>
      </Box>
    </Box>
  );
};

export default ProfilePage;