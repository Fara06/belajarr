'use client';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import MicIcon from '@mui/icons-material/Mic';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InsightsIcon from '@mui/icons-material/Insights';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputAdornment, Typography, Button, Box, Modal, Alert, AlertTitle, Link, FormControl, InputLabel, OutlinedInput, TextField, IconButton } from '@mui/material';

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const [email, setEmail ] = React.useState(false)
  const [password, setPassword ] = React.useState(false)
  const handleSignIn = () => {
    if (email && password) {
      console.log('Sign In');
    } else {
      console.log('Please enter your email and password');
    }
    setOpen(true);
  };
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen gap-14">\
    
      <div className="w-full max-w-md">
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <MicIcon fontSize="medium" />
            <Box>
              <Typography variant="subtitle2">Voice Detection</Typography>
              <Typography variant="body2">
                Analyze sales conversations with advanced voice detection technology to understand customer interactions.
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2}>
            <AssessmentIcon fontSize="medium" />
            <Box>
              <Typography variant="subtitle2">Performance Reports</Typography>
              <Typography variant="body2">
                Get detailed performance reports to evaluate and improve sales strategies and outcomes.
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2}>
            <InsightsIcon fontSize="medium" />
            <Box>
              <Typography variant="subtitle2">Actionable Insights</Typography>
              <Typography variant="body2">
                Gain actionable insights from sales data to make informed decisions and drive growth.
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2}>
            <TrendingUpIcon fontSize="medium" />
            <Box>
              <Typography variant="subtitle2">Sales Trends</Typography>
              <Typography variant="body2">
                Identify trends to optimize your sales approach.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </div>
      <div className="w-full max-w-md flex flex-col items-center">
        <Image src="/next.svg" alt="Logo" width={170} height={170} className='mb-4' />
        <Typography variant="h4" className="text-2xl font-bold text-gray-600 mt-2 mb-1 text-center">
          Welcome to Gank! 👋🏻
        </Typography>
        <Typography variant="subtitle1" className="text-gray-500 mb-4 text-center">
          Please sign in to your account and start your adventure!
        </Typography>
        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl variant="outlined" fullWidth sx={{ mt: 1 }}>
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Link href="#" color="secondary" className="self-end mt-2 mb-4 text-sm">
          Forgot Password?
        </Link>
        <Button onClick={handleOpen} color="secondary" variant="contained" fullWidth {handleSignIn}>
          Sign in
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ p: 4, backgroundColor: 'white', maxWidth: 400, margin: 'auto', mt: '20vh', borderRadius: 2 }}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Login berhasil!
            </Alert>
            <Typography variant="h6" sx={{ mt: 2, textAlign: 'center' }}>
                
            </Typography>
          </Box>
        </Modal>
      </div>
    </main>
  );
}
