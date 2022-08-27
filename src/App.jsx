import { useState } from 'react'
import left from './img/left_person.af88dd4539f7ed26eca7.png'
import center from './img/center_person.bfe96ddbccb06dc5dbff.png'
import right from './img/right_person.c47e4bb89122d89852f8.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './main.css'
export default function App() {
  const [serviceList, setServiceList] = useState([
    { service: '' },
  ]);
  console.log(serviceList);


  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: '' }]);
  };


  const handleServiceChange = (e, index) => {
    const { name, value } = e.target
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list)
  }
  return (
    <div className="container">
      <header>
        <h1>Whois</h1>
        <div className="btn">
          <a href="2">How to use?</a>
        </div>
      </header>
      <form action="">
        <div className="imgs">
          <img src={left} alt="img" />
          <img src={center} alt="img" />
          <img src={right} alt="img" />

        </div>
        {serviceList.map((singleService, index) => (
          <div key={index} className="service">
            <Box
              sx={{
                width: 600,
                maxWidth: '100%',
                margin: '0 auto',
                display: 'flex'
              }}
            >
              <TextField
                sx={
                  { margin: '6px auto', }
                }
                fullWidth label="Please URL"
                id="service" name="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
              />
              {serviceList.length - 1 === index && serviceList.length < 100 &&
                (<Button
                  onClick={handleServiceAdd}
                  type='button'
                  sx={{ width: 100, }}
                  variant="contained"
                  disableElevation>
                  Add
                </Button>)}
            </Box>
          </div>
        ))}

        <div className="btn-search">
          <Button variant="contained" disableElevation>
            Search
          </Button></div>
      </form>
      <div className="results">
        <h1>RESULTS</h1>
        {
          serviceList.map((singleService, index) => (
            <table key={index}>

              <tbody>
                <tr>
                {singleService.service && <td>http://{singleService.service}</td>}
                </tr>
              </tbody>
            </table>
          ))
        }

      </div>
    </div>
  )
}
