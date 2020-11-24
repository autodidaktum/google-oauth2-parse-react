# How to Setup Google OAuth2 login with Parse Server in React

Parse SDK for React does not support Google OAuth2 out of the box. 

According to with [Parse documentation](https://docs.parseplatform.org/js/guide/#linking-users), “Parse allows you to link your users with 3rd party authentication, enabling your users to sign up or log into your application using their existing identities. This is accomplished through linkWith method by providing authentication data for the service you wish to link to a user in the authData field. Once your user is associated with a service, the authData for the service will be stored with the user and is retrievable by logging in.”

The problem is, where shall we retrieve the Authentication Data? This sample code shows how to achieve that objective. You can read the whole article [here](https://www.autodidaktum.com/how-to-setup-google-oauth2-login-with-parse-server-in-react/)
