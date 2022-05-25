echo "Switch to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying to files to server..."
scp -r build/* chris@45.56.125.183:/var/www/45.56.125.183/

echo "Done!"
