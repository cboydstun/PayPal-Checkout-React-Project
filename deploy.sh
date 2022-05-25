echo "Switch to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying to files to server..."
scp -r build/* cloud_user@35.88.33.48:/var/www/35.88.33.48/

echo "Done!"
