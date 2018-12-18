# personal-website

Live website at: https://dannguyencodes.firebaseapp.com

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Firebase setup
```
details at https://medium.com/@markgoho/create-a-contact-form-in-angular-using-cloud-functions-for-firebase-5e390bdf5600
# install Firebase just inside project directory
npm install -g firebase-tools

# initialize project
firebase init

# install nodemailer inside functions folder
npm install nodemailer

# configure source email address
firebase functions:config:set gmail.email="myusername@gmail.com" gmail.password="secretpassword"

# cloud functions go in index.js 
# once updated, deploy to firebase with 
firebase deploy --only functions

# deploy website using firebase hosting
https://medium.com/@ShayneOSullivan/deploy-a-vue-js-app-with-firebase-hosting-3fc420cf3998
```

## A few notes
```
there's a file called apiKeys.js (included in the gitignore) that is used to hold private api keys. It's imported in Contact-page.vue
```
