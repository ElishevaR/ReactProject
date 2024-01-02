import { useState } from "react"
import BusinessData from '../mobx/businessMBX'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function AdminInputLogin() {

    const [name, setName] = useState("name")
    const [password, setPassword] = useState("password")

    return (<>
        <Stack spacing={2} direction="row">
            <TextField id="outlined-basic" label="name" variant="outlined" onChange={(e) => setName(e.target.value)} />
            <TextField id="outlined-basic" label="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
            <Button variant="outlined" onClick={() => BusinessData.handleLogin(name, password)}>Login</Button>
        </Stack>
    </>)
}