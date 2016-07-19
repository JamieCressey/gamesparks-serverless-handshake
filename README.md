GameSparks Serverless Handshake
====================

### Overview
As part of the GameSparks authentication handshake, a `nonce` is sent to the client device, which should then be signed (HMAC) using the associated game's API secret and returned to their servers. Failure to do so, or returning an incorrect signature closes the client's connection.

This is an example of how to respond to a GameSparks `AuthenticatedConnectRequest` without exposing a game's API secret to the end user.

### Setup
 1. Clone repo
 2. Install Serverless `npm install -g serverless`
 3. Deploy Serverless resources `sls project init`
 4. Set your GameSparks API Secret as a variable `sls variables set -k GS_API_SECRET -v foo`
 4. Deploy gamesparks-auth endpoint `sls dash deploy`
 5. Test the new endpoint;
```
curl -XPOST -H "Content-Type: application/json" https://xxx.execute-api.xxx.amazonaws.com/xxx/gamesparks-auth  -d '{"nonce": "1234"}'
```

### Integrating with the GameSparks JS SDK
TODO

### Note
This is a personal project and in no way affiliated with or endorsed by GameSparks.
