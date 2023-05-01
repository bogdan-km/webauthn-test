function register() {
    navigator.credentials.create({
        publicKey: {
              "challenge": new Uint8Array([0x8C, 0x0A, 0x26, 0xFF, 0x22, 0x91, 0xC1, 0xE9, 0xB9, 0x4E, 0x2E, 0x17, 0x1A, 0x98, 0x6A, 0x73, 0x71, 0x9D, 0x43, 0x48, 0xD5, 0xA7, 0x6A, 0x15, 0x7E, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0F, 0xEF]).buffer,
              "rp": {
                "name": "bogdan-km.github.io",
                "id": "bogdan-km.github.io"
              },
              "user": {
                "name": "ujujuju78",
                "displayName": "ujujuju78",
                "id": new Uint8Array(16)
              },
              "pubKeyCredParams": [
                {
                  "type": "public-key",
                  "alg": -7
                },
              ],
              "authenticatorSelection": {
                "requireResidentKey": false,
                "authenticatorAttachment": "platform",
                "userVerification": "discouraged"
              },
              "timeout": 60000,
              "extensions": {
                "txAuthSimple": ""
              },
              "attestation": "none"
          }
      })
}