
import React from 'react';
import { render } from "react-dom";
import SkiDayList from "./components/SkiDayList";

window.React = React;

render(<SkiDayList days={
  [
    {
      resort: 'Star Valley',
      date: new Date("1/2/2016"),
      powder: true,
      backcountry: false
    },
    {
      resort: 'Venus Valley',
      date: new Date("1/5/2016"),
      powder: false,
      backcountry: true
    },
    {
      resort: 'Jupiter Valley',
      date: new Date("1/7/2016"),
      powder: false,
      backcountry: false
    },
    {
      resort: 'Mars Valley',
      date: new Date("1/8/2016"),
      powder: true,
      backcountry: true
    }
  ]
} />,
  document.getElementById('react-container')
)
