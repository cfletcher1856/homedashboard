#!/bin/sh

xplanet -conf ~/Projects/homedashboard/xplanet.conf -output ~/Projects/homedashboard/images/xplanet-earth.png -wait 120 -body earth -latitude 31 -longitude -98 -geometry 500x500 > /dev/null 2>&1 &

xplanet -conf ~/Projects/homedashboard/xplanet.conf -output ~/Projects/homedashboard/images/xplanet-moon.png -wait 600 -body moon -geometry 250x250 > /dev/null 2>&1 &
