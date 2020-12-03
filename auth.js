function define(obj, name, value) {
  Object.defineProperty(obj, name, {
    value: value,
    enumerable: true,
    writable: false,
    configurable: false
  });
}

exports.config = {};

//define your channel host here e.g define(exports.config, "HOST", "localhost:10001");
define(exports.config, "HOST", "127.0.0.1:10009");

//define your tls.cert file url e.g define(exports.config, "CERT"     , "/home/tarun/.lnd/tls.cert");
define(exports.config, "CERT", "/Users/oleg/Library/Application\ Support/Lnd/tls.cert");

//define your admin.macaroon file url here e.g define(exports.config, "AUTH"       , "/home/tarun/go/dev/alice/data/admin.macaroon");
define(exports.config, "AUTH", "/Users/oleg/Library/Application\ Support/Lnd/data/chain/bitcoin/testnet/admin.macaroon");
