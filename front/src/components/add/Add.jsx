import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../add/add.css"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductSchema } from '../../schema/ProductSchema';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

const Add = () => {
  const [filter, setFilter] = useState([])
  const GetFilter = async () => {
    const res = await axios.get("http://localhost:5000/products")
    setFilter(res?.data)
    console.log(res?.data);
  }
  useEffect(() => {
    GetFilter()
  }, [])
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ProductSchema),
  });
  const Createdata = async (values) => {
    await axios.post("http://localhost:5000/products", values)
    GetFilter()
  }
  const DeleteData = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`)
    GetFilter()
  }
  return (
    <div>
      <input type="text" placeholder='Search' onChange={(e) => {
        let search = filter.filter((item) => item.title.toLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilter(search)
      }} />
      <button
        onClick={() => {
          let newarr = [...filter].sort((a, b) => a.title[0].localeCompare(b.title[0]))
          setFilter(newarr)
        }}
      >Sort Title</button>
      <form action="" onSubmit={handleSubmit(Createdata)}>
        <input type="text" {...register('image')} placeholder='Image' />
        {errors.image?.message && <p style={{ color: "red" }}>{errors.image?.message}</p>}
        <br />
        <input type="text" {...register('title')} placeholder='Title' />
        {errors.title?.message && <p style={{ color: "red" }}>{errors.title?.message}</p>}
        <br />
        <input type="text" {...register('catagory')} placeholder='Catagory' />
        {errors.catagory?.message && <p style={{ color: "red" }}>{errors.catagory?.message}</p>}
        <br />
        <button>Submit</button>
      </form>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Catagory</TableCell>
              <TableCell>Delete Button</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filter.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row._id}</TableCell>
                <TableCell><img className='Img' src={row.image} alt="" /></TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.catagory}</TableCell>
                <TableCell>
                  <Button variant="contained" color="error"
                    onClick={() => DeleteData(row._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default Add
