'use client'; 

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ClassNames } from '@emotion/react';

export default function Home() {
      const [hitung, setAngka] = React.useState(0);
      const [value, setValue ] = React.useState<number | null>(null)
      const angka = hitung %2 !== 0;
      const canDecrement = hitung >0;
      const handleIncrement = () => {
        setAngka(hitung + 1);
      };
      const handdleDecrement = () => {
        setAngka(hitung - 1);
      };
      const handleReset = () => {
        setAngka(0)
      } ;
      
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6 bg-base-200">
      <main className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-blue-600">Helloww, Me</h1>
        <div className="bg-gray-200 rounded-lg p-10 min-h-[200px] shadow-md flex flex-col items-center w-md gap-2">
          <h3 className={`text-4xl font-bold ${angka ? 'text-green-600' : 'text-gray-800'}`}>
            {hitung} {angka && 'Nilai Ganjil!'}
          </h3>
          <div className='min-h-[24px] m-4 flex flex-col items-center text-sm text-gray-500'>
          {canDecrement
            ? "Silahkan tekan tombol - untuk mengurangi nilai."
            : "Silahakan tekan tombol + untuk menambah nilai."}
          </div>
          <Stack direction="row" className='flex m-4' spacing={2}>
            <Button variant="contained" color='error' disabled={hitung <= 0} onClick={(handdleDecrement)}>
              -
            </Button>      
            <Button variant="contained" color='warning' onClick={handleReset}>Reset</Button>
            <Button variant="contained" color='success' onClick={handleIncrement}>
              +
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" className=''>
            <Button variant="contained" className='mt-6 px-4 py-2 w-full' onClick={()=> setValue(hitung)}>Submit</Button>
          </Stack>
          <div className='min-h-[24px] m-4 flex flex-col items-center'>
            <p className='text-blue-600 font-medium'>Nilai yang di submit: {value}</p>
          </div>
        </div>
        <div className='min-h-[24px] flex flex-col items-center'></div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
    </div>
  );
}
