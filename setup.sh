cd ..
cd Flyingwolf/
rm -rf ios/Pods
rm -f ios/Podfile.lock
npm install
npx jetify
cd ios/
pod install
cd ..
cd android/
chmod 755 gradlew
cd ..
npm start -- --reset-cache
