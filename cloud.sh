#!/bin/sh

pat=/home/cfletcher/Projects/homedashboard/images/
tmp=$pat"latest_moll.gif"
img=$pat"clouds.gif"

rm $tmp

wget -O $tmp http://www.ssec.wisc.edu/data/comp/latest_moll.gif # télécharge l'image

if [ -f $tmp ] ; then
  mv $tmp $img
fi
