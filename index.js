const express = require('express')
const app = express();

const port = 3670


const students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 19 },
  { id: 4, name: 'David', age: 21 },
  { id: 5, name: 'Eve', age: 23 },
  { id: 6, name: 'Frank', age: 20 },
  { id: 7, name: 'Grace', age: 22 },
  { id: 8, name: 'Hank', age: 19 },
  { id: 9, name: 'Ivy', age: 21 },
  { id: 10, name: 'Jack', age: 23 },
  { id: 11, name: 'Kelly', age: 20 },
  { id: 12, name: 'Luke', age: 22 },
  { id: 13, name: 'Mia', age: 19 },
  { id: 14, name: 'Nate', age: 21 },
  { id: 15, name: 'Olivia', age: 23 }
]


app.get('/', (req, res) => {
  res.send('Yah!!!')
  console.log('Request received at /')
})

app.get('/students', (req, res) => {
  res.send(students)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})