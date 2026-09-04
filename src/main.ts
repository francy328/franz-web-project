// import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import router from "@/router";
import "@/index.css";

import { I18n } from "aws-amplify/utils";
import { translations } from "@aws-amplify/ui";

// Traduzioni Amplify UI
I18n.putVocabularies(translations);

// Traduzioni italiane personalizzate
I18n.putVocabularies({
  it: {
    "Sign In": "Accedi",
    "Sign in": "Accedi",
    "Sign Up": "Registrati",
    "Create Account": "Crea account",
    "Email": "Email",
    "Password": "Password",
    "Forgot your password?": "Password dimenticata?",
    "Forgot Password?": "Password dimenticata?",
    "Reset Password": "Reimposta la password",
    "Back to Sign In": "Torna al login",
    "Confirm": "Conferma",
    "Confirmation Code": "Codice di conferma",
    "Enter your code": "Inserisci il codice",
    "Confirm Sign Up": "Conferma registrazione",
    "Resend Code": "Invia nuovamente il codice",
    "Verify": "Verifica",
    "Username": "Nome utente",
    "Phone Number": "Numero di telefono",
    "Family Name": "Cognome",
    "Given Name": "Nome",
    "New Password": "Nuova password",
    "Submit": "Invia",
    "Send code": "Invia codice",
    "Code": "Codice",
    "Sign Out": "Esci",
  },
});

// Imposta lingua italiana
I18n.setLanguage("it");

// Configurazione Amplify
Amplify.configure(outputs);

createApp(App).use(router).mount("#app");

// Debug (opzionale)
console.log(translations);





// //import "./assets/main.css";
// import { createApp } from "vue";
// import App from "./App.vue";
// import { Amplify } from "aws-amplify";
// import outputs from "../amplify_outputs.json";
// import router from "@/router";
// import "@/index.css";
// import { I18n } from 'aws-amplify/utils'
// import { translations } from '@aws-amplify/ui'


// I18n.putVocabularies(translations)
// I18n.setLanguage('it')

// Amplify.configure(outputs);

// createApp(App).use(router).mount("#app");

// console.log(translations)

