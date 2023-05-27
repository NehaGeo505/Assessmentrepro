import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [datas,setData] = useState([])

    useEffect(() =>{

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            setData(response.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    })


 return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>TITLE</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {datas.map((val,index)=>{
                        return(
                            <TableRow key={index}>

                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.title}</TableCell>

                            </TableRow>
                         )
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    )
}

export default Home