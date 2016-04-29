#! /bin/sh

xplanet -conf /home/cfletcher/Projects/homedashboard/xplanet.conf -output ~/Projects/homedashboard/images/xplanet-earth.png -num_times 1 -body earth -latitude 31 -longitude -98 -geometry 500x500 > /dev/null 2>&1 &
xplanet -conf /home/cfletcher/Projects/homedashboard/xplanet.conf -output ~/Projects/homedashboard/images/xplanet-moon.png -num_times 1 -body moon -geometry 250x250 > /dev/null 2>&1 &
