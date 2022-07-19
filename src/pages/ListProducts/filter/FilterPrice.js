import React from 'react'
import Slider from "@material-ui/core/Slider"
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    width: '70%',
  },
  thumb: {
    color: '#cd333a',
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: '#cd333a',
  },
});
const FilterPrice = ({ value, changePrice }) => {

  const classes = useStyles();
  return (
    <div className={classes.root} style={{marginTop: "50px"}}>
      <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay='on'
        min={10}
        max={200}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  )
}

export default FilterPrice