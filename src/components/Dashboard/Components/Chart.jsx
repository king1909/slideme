import React from 'react'
'use client'
import { AreaChart, Area, ResponsiveContainer, Tooltip, Legend, CartesianGrid, XAxis, LineChart, Line } from 'recharts';

const data = [
    {
        name: 'Jan',
        รถเก๋ง: 1100,
        รถสิบล้อ: 2000,
        รถสิบสองล้อ: Math.floor(Math.random() * 10000),
        รถกระบะ: Math.floor(Math.random() * 10000)
    },
    {
        name: 'Feb',
        รถเก๋ง: 200,
        รถสิบล้อ: 5200,
        รถสิบสองล้อ: Math.floor(Math.random() * 10000),
        รถกระบะ: Math.floor(Math.random() * 10000)
    },
    {
        name: 'Mar',
        รถเก๋ง: 10300,
        รถสิบล้อ: 2300,
        รถสิบสองล้อ: Math.floor(Math.random() * 10000),
        รถกระบะ: Math.floor(Math.random() * 10000)
    },
    {
        name: 'Apr',
        รถยนต์: 8400,
        รถสิบล้อ: 5200,
        รถสิบสองล้อ: Math.floor(Math.random() * 10000),
        รถกระบะ: Math.floor(Math.random() * 10000)
    },
    {
        name: 'May',
        รถเก๋ง: 12500,
        รถสิบล้อ: 200,
        รถสิบสองล้อ: Math.floor(Math.random() * 10000),
        รถกระบะ: Math.floor(Math.random() * 10000)
    },
    {
        name: 'June',
        รถเก๋ง: 5600,
        รถสิบล้อ: 15200,
        รถสิบสองล้อ: Math.floor(Math.random() * 10000),
        รถกระบะ: Math.floor(Math.random() * 10000)
    }
]
function Chart() {
    return (

        <ResponsiveContainer width="100%" height={200}>

            <LineChart width={300} height={200} data={data}>
                <Line type="monotone" dataKey="รถเก๋ง" stroke="#2563eb" strokeWidth={2} />
                <Line type="monotone" dataKey="รถสิบล้อ" stroke="#7c3aed" strokeWidth={2} />
                <Line type="monotone" dataKey="รถสิบสองล้อ" stroke="#f39c12" strokeWidth={2} />
                <Line type="monotone" dataKey="รถกระบะ" stroke="#2ecc71" strokeWidth={2} />
                <CartesianGrid strokeDasharray="3 3" />

                <Tooltip />
                <Legend style={{ marginTop: '20px' }} />
            </LineChart>
        </ResponsiveContainer>

    )
}

export default Chart