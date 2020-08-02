import React, { Component } from 'react';
import './Cards.css'
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames'
const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}} ) => {
   
    if(!confirmed){
    return "Loading"
   }
    return (
        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className="infected card">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className='recovered card' >
                
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="deaths card">
                
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )

}
export default Cards;