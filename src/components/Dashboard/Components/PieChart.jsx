import React from 'react'

function PieChart() {
  return (
      <AreaChart width={335} height={300} data={data} >
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="3 3"/>
                <Area type="monotone" dataKey="number1" stroke="#2563eb" fill="#3b82f6" stackId="1"/>
                <Area type="monotone" dataKey="number2" stroke="#7c3aed" fill="#8884d8" stackId="1"/>
            </AreaChart>
  )
}

export default PieChart