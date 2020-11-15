Parse.Cloud.define("GoogleSignIn", async (request) => {
  const google = require("googleapis").google;
  // Google's OAuth2 client
  const OAuth2 = google.auth.OAuth2;

  // Create an OAuth2 client object from the credentials in our config file
  const oauth2Client = new OAuth2(
    process.env.client_id,
    process.env.client_secret,
    process.env.redirect_uris
  );
  // Obtain the google login link to which we'll send our users to give us access
  const loginLink = oauth2Client.generateAuthUrl({
    // Indicates that we need to be able to access data continously without the user constantly giving us consent
    access_type: "offline",
    // Using the access scopes from our config file
    scope: ["email", "openid", "profile"],
  });
  return loginLink;
});

Parse.Cloud.define("GoogleToken", async (request) => {
  const google = require("googleapis").google;

  // Google's OAuth2 client
  const OAuth2 = google.auth.OAuth2;

  // Create an OAuth2 client object from the credentials in our config file
  const oauth2Client = new OAuth2(
    process.env.client_id,
    process.env.client_secret,
    process.env.redirect_uris
  );

  if (request.error) {
    // The user did not give us permission.
    return request.error;
  } else {
    try {
      const { tokens } = await oauth2Client.getToken(request.params.code);
      oauth2Client.setCredentials(tokens);
      var oauth2 = google.oauth2({
        auth: oauth2Client,
        version: "v2",
      });
      const usr_info = await oauth2.userinfo.get();
      // Auth data for Parse
      const authData = {
        id: usr_info.data.id,
        email: usr_info.data.email,
        name: usr_info.data.name,
        id_token: tokens.id_token,
        access_token: tokens.access_token,
      };
      return authData;
    } catch (error) {
      return error;
    }
  }
});
