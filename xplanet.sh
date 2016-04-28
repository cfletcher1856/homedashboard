#! /bin/sh
### BEGIN INIT INFO
# Provides:          xplanet
# Required-Start:    $all
# Required-Stop:
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: xplanet
### END INIT INFO


xplanet -conf ~/Projects/homedashboard/xplanet.conf -output ~/Projects/homedashboard/images/xplanet-earth.png -wait 120 -body earth -latitude 31 -longitude -98 -geometry 500x500 > /dev/null 2>&1 &

xplanet -conf ~/Projects/homedashboard/xplanet.conf -output ~/Projects/homedashboard/images/xplanet-moon.png -wait 600 -body moon -geometry 250x250 > /dev/null 2>&1 &
