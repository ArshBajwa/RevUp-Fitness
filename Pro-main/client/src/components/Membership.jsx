import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
const Membership = () => {
  return (
    <>
      <div className='text-4xl font-bold mt-14 text-white text-center'>
        <h2><span className='text-pink-500'>JOIN</span> US TODAY</h2>
      </div>
      <div className='text-center mt-6'>
        <Link to="/contact">
        <button className='bg-pink-500 text-white rounded-full p-2'>
          Membership
        </button>
        </Link>
      </div>
      <div className='text-3xl font-bold mt-6 text-white text-center'>
        <h3>Crushing Your Health and Fitness Goals Starts Here...</h3>
      </div>
      <div className='flex flex-col lg:flex-row justify-center mt-6 gap-8'>
        <Box className='flex-grow' sx={{ minWidth: 300 }}>
          <Card variant="outlined" sx={{ height: 400,backgroundColor: '#a1a1aa'}}>
            <CardContent>
              <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                3 Month Membership
              </Typography>
              <Typography variant="h8" component="div" sx={{ mb: 1.7 }}>
                <span className='text-pink-500 text-3xl'>$165</span>/mo
              </Typography>
              <Typography sx={{ mb: 1.7 }} color="text.secondary" className="flex items-center">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                All classes
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.7 }} color="text.secondary" className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                All member events
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.7 }} color="text.secondary" className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                Full gym access
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.7 }} color="text.secondary" className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                Charges every 3 months unless you cancel
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/contact">
              <Button size="large">Start 7 Day Free Trial</Button>
              </Link>
            </CardActions>
          </Card>
        </Box>
        <Box className='flex-grow' sx={{ minWidth: 300 }}>
          <Card variant="outlined" sx={{ height: 400,backgroundColor: '#a1a1aa'}}>
            <CardContent>
              <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                6 Month Membership
              </Typography>
              <Typography variant="h8" component="div" sx={{ mb: 1.7 }}>
                <span className='text-pink-500 text-3xl'>$145</span>/mo
              </Typography>
              <Typography sx={{ mb: 1.7 }} color="text.secondary" className="flex items-center">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                All classes
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.7 }} color="text.secondary" className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                All member events
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.7 }} color="text.secondary" className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                Full gym access
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.7 }} color="text.secondary" className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                Charges every 6 months unless you cancel
              </Typography>
            </CardContent>
            <CardActions>
            <Link to="/contact">
              <Button size="large">Start 7 Day Free Trial</Button>
              </Link>
            </CardActions>
          </Card>
        </Box>
        <Box className='flex-grow' sx={{ minWidth: 300 }}>
          <Card variant="outlined" sx={{ height: 400,backgroundColor: '#a1a1aa'}}>
            <CardContent>
              <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                1 Year Membership
              </Typography>
              <Typography variant="h8" component="div" sx={{ mb: 1.7 }}>
                <span className='text-pink-500 text-3xl'>$125</span>/mo
              </Typography>
              <Typography sx={{ mb: 1.7 }} color="text.secondary" className="flex items-center">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                All classes
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.7 }} color="text.secondary" className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                All member events
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.7 }} color="text.secondary" className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                Full gym access
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.7 }} color="text.secondary" className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                Charges every 1 year unless you cancel
              </Typography>
            </CardContent>
            <CardActions>
            <Link to="/contact">
              <Button size="large">Start 7 Day Free Trial</Button>
              </Link>
            </CardActions>
          </Card>
        </Box>
      </div>
    </>
  );
}

export default Membership;
