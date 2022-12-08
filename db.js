const firebaseConfig = {
   type: "service_account",
   project_id: "minifqs",
   private_key_id: "9d32350e76d89be03fe6be539857e1ae212f7439",
   private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCjQPMmZtS6cHbS\nHkEYr29KnwEK2f8Ibi06kBXqWb9CHz/nj8+9+vweBbPBSVbz1EgkUyKuNWAG60Ok\npO/WQwnuevdFpzbzyL4Jpj5BGpJdlI1VFulF+y1wNcMeTUdWUqQyfBhjFxf2kpIV\nrSmvjp0+W+x3PpMP4q6SQJ1lg8UZSGhTU30DDFh/WdzrBMb1uhR7PugKd2j7A3Qc\nuD01XniUZKAIftfp5NXwgOP/Bzd86OeSoofNv2ZpnBDQX8dacyWgFVfD+zrLmeZY\nbrdcRAwgeAKCAvQsI5RYVLPYljyQAEh/FlN8HfVZZz/9O8n9jhPjjUKT91H501du\nT7my5bHbAgMBAAECgf8csk4LcgfyvdIlHSxUKoJlm42TWr55vOQ2Zx1zFFOKS/Pv\nwFfEDVpD7LysPTgLpEUKHZL7DGbU0IYTauq9vwr/4J2WoM4IDEFbcN2AlCsmR/aP\n/ncC1iQmlUy3Bt6DTgOO3EFtKaIMtbb4GHg7Y9ZAH+hxDY7MPAxzqOgB8Ce1Sbyv\n0XwPS5l5TM4M3wb+QHpaf8hak4fZqGVWejx4wu/uY1CtbBzXUT0MFIg4OAVCNHbg\n82lMSZf7f0wo0LIPGyOqK5OKCAyqWWsJlAiQu2+cU57IwJCBq4Vydilzwc7UA3im\navvhF5mGq4/nBB8Mh8rKico14uYcfYF6tzvE79ECgYEA5c9brFoQzBWoYOPN2ITP\nnWK4kasqIUXGo7TKKqjwLRtbWf7+Bdn8BnfqTE6GFs1UxC8JOGXOvGoJnCGXN250\naLJi6s6nu/l1eeS8S6O/vJMotYsTVYdlFpq8GwjKUTYsbDbuRVL+a/7fL8h4BGgU\n/VUDRF6dil1gFk7vUeuJ24kCgYEAtdvUtOjP+dCqNcTKZq3nyPw16x6upf4e+EDU\nDSYLQdflvSHAl6zAiSFxKeUfDOcvUGydWV5GnRXPcPJorRTyO2NnGUczs77OnXO3\ntNv7xRGBL+PAIAQfC0vqdytHmGCIM4ddVmz0/U2eUTcqCXsChoFIHBUPM7auUlyx\nrvmXFUMCgYBI60ngX1ezGjAqRj5btJCYFOoRtqkQk65a5ZO8g4xqE6Mh5EpAGxHg\nD461lbjwZUi/U1lunsdBe7f+5Z2wxgiD7A59CQOqHpaLDew9aAD/2gXxzOZeni6S\nRJjpTxm7OSBRWgCy2InIRMAWzlpes5Ptals2B3ufms9RZMyFRuKgWQKBgBIPHnRI\nmj6Ihh6IyECiDF5dDU2n4lgBgDnO1j/oAz4qnlnFvEZTlVsIwyAR7J9vZbdq0cVK\nI2D+BXeF2vc1GUjkehx8gZnb3NCt6RRAtCPBtT54M1/6iMqqY0IqPhXXoC7dxlsK\nvtlYl9wgyj/ew0VwGSUQwk20WmM7aTmi92nZAoGBAIkcP+waIoN9+DFjRwnakY6t\n84KPBuPi83ZYpJKU1tLVW6qz5hPNu1nZFJBo9oeOCXOsl0YI9kx+wEi/B+KGeJ/q\niwkQ2s/rJZL88IkHl6ZOLlCNwYWI+8n08Y2I18BOSkcwINrfH61I3aW29ME2AuIK\nYkn5VBpOkhFxlyn6UVMf\n-----END PRIVATE KEY-----\n",
   client_email: "firebase-adminsdk-qti25@minifqs.iam.gserviceaccount.com",
   client_id: "105368779994907805009",
   auth_uri: "https://accounts.google.com/o/oauth2/auth",
   token_uri: "https://oauth2.googleapis.com/token",
   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
   client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qti25%40minifqs.iam.gserviceaccount.com",
};

var admin = require("firebase-admin");

admin.initializeApp({
   credential: admin.credential.cert(firebaseConfig),
   databaseURL: "https://minifqs-default-rtdb.asia-southeast1.firebasedatabase.app",
   databaseAuthVariableOverride: {
      uid: "node-service",
   },
});

module.exports = admin;
