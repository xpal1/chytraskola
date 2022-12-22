module.exports = {
    
  chytraskola_db_dbUrl: (process.env.DB_HOST || 'localhost') + ':27017/chytraskola_db',

  // Factom properties
  factom: {
    config: {
      baseUrl: "https://ephemeral.api.factom.com/v1",
      accessToken: {
        appId: "myAppId",
        appKey: "myAppKey"
      }
    },
    model: {
      // Start Factom model properties
      User: {
        factomized: "",
      },
      dochadzka: {
        factomized: "",
      },
      odbory: {
        factomized: "",
      },
      predmety: {
        factomized: "",
      },
      rodicia: {
        factomized: "",
      },
      rozvrh: {
        factomized: "",
      },
      skola: {
        factomized: "",
      },
      skupina: {
        factomized: "",
      },
      spravy_archiv: {
        factomized: "",
      },
      spravy_skupiny: {
        factomized: "",
      },
      spravy_uzivatelia: {
        factomized: "",
      },
      student: {
        factomized: "",
      },
      triedy: {
        factomized: "",
      },
      ucitel: {
        factomized: "",
      },
      udalost: {
        factomized: "",
      },
      uzivatel: {
        factomized: "",
      },
      vyucovanie_cas: {
        factomized: "",
      },
      zadania: {
        factomized: "",
      },
      znamky: {
        factomized: "",
      },

      // End Factom model properties
    }
  },

  publicPath: "../client/build",
  port: process.env.NODE_PORT || 3000,
  tokenSecret: "Insert Your Secret Token",
  api: process.env.NODE_API != null ? process.env.NODE_API : "/api"
};
