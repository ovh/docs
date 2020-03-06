for d in */ ; do 
  folder="$d"
  cp $folder/guide.en-gb.md $folder/guide.en-asia.md
  cp $folder/guide.en-gb.md $folder/guide.en-au.md
  cp $folder/guide.en-gb.md $folder/guide.en-ca.md
  cp $folder/guide.en-gb.md $folder/guide.en-ie.md
  cp $folder/guide.en-gb.md $folder/guide.en-sg.md
  cp $folder/guide.en-gb.md $folder/guide.en-us.md
done
