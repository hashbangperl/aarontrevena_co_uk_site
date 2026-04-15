#!bash

for f in *png 
do convert $f -resize x200 thumbs/$f;
done
