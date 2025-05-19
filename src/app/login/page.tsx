'use client';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import MicIcon from '@mui/icons-material/Mic';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InsightsIcon from '@mui/icons-material/Insights';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from '@mui/material/Link';

export default function Login() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const [email, setEmail] = React.useState('');
    return (
        <main className=' col-end-6 items-center gap-4 p-12 rounded-lg'> 
            <div className='flex-'>
                <Image 
                    src='/logo.svg' 
                    alt='Logo' 
                    width={200} 
                    height={200}
                    />
                <Typography variant='h4'>Welcome to Gank! 👋🏻</Typography>
                <Typography variant='subtitle1'>Please sign in to your account and start your adventure!</Typography>
                <div>
                    <TextField
                        fullWidth
                        id='outlined-required'                             
                        label='Email'
                        type='email'
                        margin='normal'/>
                    <TextField
                        fullWidth
                        id='outlined-password-input'
                        label='Password'
                        type='password'
                        margin='normal'
                        autoComplete='current-password'/>
                    <Link href="#" color='secondary'>Forgot Password?</Link>
                    <Button onClick={handleOpen} color='secondary' variant='contained' fullWidth>Sign in</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='modal-modal-title'
                        aria-describedby='modal-modal-description'
                    >
                        <Box>
                            <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                This is a success Alert with an encouraging title.
                            </Alert>
                            <Typography variant='h6'>
                                Success
                            </Typography>
                        </Box> 
                    </Modal>
                </div> 
            </div>
            <div className=''>
                <div className=''>
                    <Stack direction="row" spacing={1}>
                        <Stack>
                            <MicIcon fontSize='medium'></MicIcon>
                            <Typography variant='subtitle2'>Voice Detection</Typography> 
                            <Typography variant='body2'>Analyze sales conversations with advanced voice detection technology to understand customer interactions.</Typography>  
                        </Stack>
                        <Stack>
                            <AssessmentIcon fontSize='medium'></AssessmentIcon>
                            <Typography variant='subtitle2'>Performance Reports</Typography>
                            <Typography variant='body2'>Get detailed performance reports to evaluate and improve sales strategies and outcomes.</Typography>
                        </Stack>
                        <Stack>
                            <InsightsIcon fontSize='medium'></InsightsIcon>  
                            <Typography variant='subtitle2'>Actionable Insights</Typography>
                            <Typography variant='body2'>Gain actionable insights from sales data to make informed decisions and drive growth</Typography>
                        </Stack>
                        <Stack>
                            <TrendingUpIcon fontSize='medium'></TrendingUpIcon>  
                            <Typography variant='subtitle2'>Sales Trends</Typography>
                            <Typography variant='body2'>Identify sales trends and patterns to optimize your sales approach and increase conversions.</Typography>
                        </Stack>
                    </Stack>
                </div>
            </div>
        </main>
    );
}