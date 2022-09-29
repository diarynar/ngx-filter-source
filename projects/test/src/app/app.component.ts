import * as moment from 'moment';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IFilterConfiguration, ISelect } from 'projects/filter/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  ready: any = null;
  ngxFilterData: IFilterConfiguration[] = [
    {
      filterData: {
        type: "select",
        value: "",
        key: 'Finished',
        label: 'Statut',
        options: [],

      }
    },
    {
      filterData: {
        type: 'date',
        key: 'createdAt',
        operator: "gte",
        label: 'Date Min',
        class: "class-date-min"
      }
    },
    {
      filterData: {
        type: 'date',
        key: 'createdAt',
        operator: "lte",
        label: 'Date Max',
        class: "class-date-max"
      }
    },
    {
      filterData: {
        type: 'sort',
        key: 'Name',
        value: "asc",
        label: 'Ordonner par le nom du template'
      }
    }
  ]
  datas = [
    {
      "_id": "6272aacfda992d00095df9b8",
      "tickets": [
        "5001q00000HxtEiAAJ"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": "",
              "value": "Narindra",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Diary",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diarynar@gmail.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone fixe",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone portable",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "demo",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "demo",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "A quitté la société",
              "key": "A_quitt_la_soci_t__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Non",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Autres",
          "expandMore": false,
          "suffixEndpoint": "category/autres",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "expandOnboarding": true,
          "defaultValue": false,
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Text court",
              "key": "Nouvellesouscatégorieàrenommer",
              "expandOnboarding": true,
              "defaultValue": "",
              "value": "demo",
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "text",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Text court 2",
              "key": "Nouvellesouscatégorieàrenommer",
              "expandOnboarding": true,
              "defaultValue": "",
              "value": "demo",
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "text",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "name": "undefined - copie"
            },
            {
              "label": "Télephone",
              "key": "Nouvellesouscatégorieàrenommer",
              "expandOnboarding": true,
              "defaultValue": "",
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "name": "undefined - copie - copie"
            },
            {
              "label": "Text court 4",
              "key": "Nouvellesouscatégorieàrenommer",
              "expandOnboarding": true,
              "defaultValue": "",
              "value": "demo",
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "text",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "name": "undefined - copie - copie - copie"
            },
            {
              "label": "Text court 5",
              "key": "Nouvellesouscatégorieàrenommer",
              "expandOnboarding": true,
              "defaultValue": "",
              "value": "demo",
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "text",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "name": "undefined - copie - copie - copie - copie"
            }
          ]
        },
        {
          "name": "Messagerie",
          "expandMore": false,
          "suffixEndpoint": "category/messagerie",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Adresse mail à créer",
              "key": "EmailToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Adresse mail",
                  "key": "Email",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo@gmail.com",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "email",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Type de licence (si gérées par le client)",
                  "key": "SerialKey",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Listes  de distribution",
              "key": "DistributionList",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Utilisateur avec les listes similaires *",
                  "key": "UserWithSimilarList",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Ajouter des boites mails délégués",
              "key": "AddInboxMailDelegate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Descriptions",
          "expandMore": false,
          "suffixEndpoint": "category/autres",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "expandOnboarding": true,
          "defaultValue": false,
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Text longue",
              "key": "Nouvellesouscatégorieàrenommer",
              "expandOnboarding": true,
              "defaultValue": "",
              "value": "demo",
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "textarea",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Text logue 2",
              "key": "Nouvellesouscatégorieàrenommer",
              "expandOnboarding": true,
              "defaultValue": "",
              "value": "demo",
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "textarea",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "name": "undefined - copie"
            },
            {
              "label": "Text longue 3",
              "key": "Nouvellesouscatégorieàrenommer",
              "expandOnboarding": true,
              "defaultValue": "",
              "value": "demo",
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "textarea",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "name": "undefined - copie - copie"
            },
            {
              "label": "Text logue 4",
              "key": "Nouvellesouscatégorieàrenommer",
              "expandOnboarding": true,
              "defaultValue": "",
              "value": "demo",
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "textarea",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "name": "undefined - copie - copie - copie"
            },
            {
              "label": "Text longue 5",
              "key": "Nouvellesouscatégorieàrenommer",
              "expandOnboarding": true,
              "defaultValue": "",
              "value": "demo",
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "textarea",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "name": "undefined - copie - copie - copie - copie"
            }
          ]
        },
        {
          "name": "Toggle",
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "conditionLocation": {},
          "expandOnboarding": true,
          "deleteable": true,
          "expandMore": false,
          "suffixEndpoint": "",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Lorem ipsum dolor sit amet, consectetur adipiscing",
              "key": "",
              "expandOnboarding": true,
              "defaultValue": true,
              "value": null,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "toggle",
              "deleteable": true,
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "conditionLocation": {},
              "name": "undefined - copie",
              "expandMore": false
            },
            {
              "label": "Lorem ipsum dolor sit amet, consectetur adipiscing",
              "key": "",
              "expandOnboarding": true,
              "defaultValue": true,
              "value": null,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "toggle",
              "deleteable": true,
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "conditionLocation": {},
              "name": "undefined - copie - copie",
              "expandMore": false
            },
            {
              "label": "Lorem ipsum dolor sit amet, consectetur adipiscing",
              "key": "",
              "expandOnboarding": true,
              "defaultValue": true,
              "value": null,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "toggle",
              "deleteable": true,
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "conditionLocation": {},
              "name": "undefined - copie - copie - copie",
              "expandMore": false
            },
            {
              "label": "Lorem ipsum dolor sit amet, consectetur adipiscing",
              "key": "",
              "expandOnboarding": true,
              "defaultValue": true,
              "value": null,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "toggle",
              "deleteable": true,
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "conditionLocation": {},
              "name": "undefined - copie - copie - copie - copie",
              "expandMore": false
            },
            {
              "label": "Lorem ipsum dolor sit amet, consectetur adipiscing",
              "key": "",
              "expandOnboarding": true,
              "defaultValue": true,
              "value": null,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "toggle",
              "deleteable": true,
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "conditionLocation": {},
              "name": "undefined - copie - copie - copie - copie - copie",
              "expandMore": false
            }
          ]
        },
        {
          "name": "Selections multiple",
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "conditionLocation": {},
          "expandOnboarding": true,
          "deleteable": true,
          "expandMore": true,
          "suffixEndpoint": "",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Lorem ipsum dolor sit amet, consectetur adipiscing",
              "key": "",
              "expandOnboarding": true,
              "defaultValue": true,
              "value": null,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "deleteable": true,
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "conditionLocation": {},
              "name": "undefined - copie",
              "expandMore": true,
              "forms": [
                {
                  "label": "Nouvelle sous catégorie à renommer",
                  "key": "Nouvellesouscatégorieàrenommer",
                  "expandOnboarding": true,
                  "defaultValue": [
                    {
                      "value": "Select1",
                      "checked": false
                    },
                    {
                      "value": "Select2",
                      "checked": false
                    },
                    {
                      "value": "Select3",
                      "checked": false
                    },
                    {
                      "value": "Select4",
                      "checked": false
                    },
                    {
                      "value": "Select5",
                      "checked": false
                    },
                    {
                      "value": "Select6",
                      "checked": false
                    },
                    {
                      "value": "Select7",
                      "checked": false
                    },
                    {
                      "value": "Select8",
                      "checked": false
                    },
                    {
                      "value": "Select9",
                      "checked": false
                    },
                    {
                      "value": "Select10",
                      "checked": false
                    },
                    {
                      "value": "Select11",
                      "checked": false
                    },
                    {
                      "value": "Select12",
                      "checked": false
                    },
                    {
                      "value": "Select13",
                      "checked": false
                    },
                    {
                      "value": "Select14",
                      "checked": false
                    },
                    {
                      "value": "Select15",
                      "checked": false
                    },
                    {
                      "value": "Select16",
                      "checked": false
                    },
                    {
                      "value": "Select",
                      "checked": false
                    },
                    {
                      "value": "22",
                      "checked": false
                    },
                    {
                      "value": "2223",
                      "checked": false
                    },
                    {
                      "value": "EEE",
                      "checked": false
                    },
                    {
                      "value": "demo",
                      "checked": false
                    },
                    {
                      "value": "test",
                      "checked": false
                    },
                    {
                      "value": "xsds",
                      "checked": false
                    },
                    {
                      "value": "dsdsd",
                      "checked": false
                    },
                    {
                      "value": "sdsdd",
                      "checked": false
                    },
                    {
                      "value": "rerere",
                      "checked": false
                    },
                    {
                      "value": "fdfd",
                      "checked": false
                    },
                    {
                      "value": "ggg",
                      "checked": false
                    },
                    {
                      "value": "rrr",
                      "checked": false
                    },
                    {
                      "value": "eeeee",
                      "checked": false
                    }
                  ],
                  "value": true,
                  "size": 80,
                  "isMandatory": false,
                  "otherValue": "",
                  "type": "checkbox_multiple",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "conditionLocation": {},
                  "deleteable": true,
                  "subLevel": 1,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Lorem ipsum dolor sit amet, consectetur adipiscing",
              "key": "",
              "expandOnboarding": true,
              "defaultValue": true,
              "value": null,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "deleteable": true,
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "conditionLocation": {},
              "name": "undefined - copie - copie",
              "expandMore": false
            },
            {
              "label": "Lorem ipsum dolor sit amet, consectetur adipiscing",
              "key": "",
              "expandOnboarding": true,
              "defaultValue": true,
              "value": null,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "deleteable": true,
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "conditionLocation": {},
              "name": "undefined - copie - copie - copie",
              "expandMore": false
            },
            {
              "label": "Lorem ipsum dolor sit amet, consectetur adipiscing",
              "key": "",
              "expandOnboarding": true,
              "defaultValue": true,
              "value": null,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "deleteable": true,
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "conditionLocation": {},
              "name": "undefined - copie - copie - copie - copie",
              "expandMore": false
            },
            {
              "label": "Lorem ipsum dolor sit amet, consectetur adipiscing",
              "key": "",
              "expandOnboarding": true,
              "defaultValue": true,
              "value": null,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "deleteable": true,
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "conditionLocation": {},
              "name": "undefined - copie - copie - copie - copie - copie",
              "expandMore": false
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Manager",
          "Nom": "Narindra",
          "Prénom": "Diary",
          "Email": "diarynar@gmail.com",
          "Téléphone fixe": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Téléphone portable": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "demo",
          "Etablissement / Site": "demo",
          "Accès au portail": "Oui",
          "Langue": "Français",
          "A quitté la société": "Non"
        },
        "Autres": {
          "Text court": "demo",
          "Text court 2": "demo",
          "Télephone": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Text court 4": "demo",
          "Text court 5": "demo"
        },
        "Messagerie": {
          "Adresse mail à créer": {
            "Adresse mail": "demo@gmail.com",
            "Type de licence (si gérées par le client)": "demo"
          },
          "Listes  de distribution": {
            "Utilisateur avec les listes similaires *": "demo",
            "Descriptions": "demo"
          },
          "Ajouter des boites mails délégués": {
            "Descriptions": "demo"
          }
        },
        "Descriptions": {
          "Text longue": "demo",
          "Text logue 2": "demo",
          "Text longue 3": "demo",
          "Text logue 4": "demo",
          "Text longue 5": "demo"
        }
      },
      "TemplateId": "6270f4f216d61a000a56b5c2",
      "Finished": false,
      "ContactId": "0031q00000nwsQyAAI",
      "createdAt": "2022-05-04T16:33:19.965Z",
      "updatedAt": "2022-05-19T09:04:03.511Z",
      "__v": 0,
      "vcontacts": [],
      "vtemplates": [],
      "vtickets": [],
      "Status": "A finaliser",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "",
      "ContactName": "Narindra Diary",
      "Name": "Narindra Diary",
      "Title": "demo",
      "Email": "diarynar@gmail.com",
      "date_of_entry": "",
      "TemplateName": "",
      "Id": 52
    },
    {
      "_id": "6283bba820283d000a5ba19e",
      "tickets": [
        "5001q00000IFdCtAAL"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "Mme",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Rudchenko",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Olga",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "olga.rudchenko@nowbrains.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone fixe",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": null,
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone portable",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": null,
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "CDP",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "test",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "A quitté la société",
              "key": "A_quitt_la_soci_t__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Non",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Truc",
              "key": "Truc",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "test",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "deleteable": true,
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Sous-truc",
                  "key": "Sous-truc",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "test test",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "deleteable": true,
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "subLevel": 2,
                  "expandMore": true,
                  "forms": [
                    {
                      "label": "Sous-sous-truc",
                      "key": "Sous-sous-truc",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "test ytytytyyt",
                      "size": 80,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "deleteable": true,
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "subLevel": 3,
                      "expandMore": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Session d'utilisateur",
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selected": true,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user-session",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Utilisateur local à créer",
              "key": "UserLocalToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Login",
                  "key": "Login",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "olga.rudchenko",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Mot de passe",
                  "key": "Password",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "FranceLove63@",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Utilisateur AD (serveur) à créer",
              "key": "UserServerToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Nom de domaine",
                  "key": "DomainName",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "test",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre login",
                  "key": "YourLogin",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "test",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre mot de passe",
                  "key": "YourPassword",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "123",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Groupe de sécurité",
                  "key": "GroupSecurity",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Utilisateur avec les droits similaires *",
                      "key": "UserWithSimilarAccess",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "test",
                      "size": 80,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Descriptions",
                      "key": "Description",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "ttttttttt",
                      "size": 255,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Messagerie",
          "expandMore": false,
          "suffixEndpoint": "category/messagerie",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Adresse mail à créer",
              "key": "EmailToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Adresse mail",
                  "key": "Email",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "olga.rudchenko@nowbrains.com",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "email",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Type de licence (si gérées par le client)",
                  "key": "SerialKey",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "test",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Listes  de distribution",
              "key": "DistributionList",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Utilisateur avec les listes similaires *",
                  "key": "UserWithSimilarList",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "test",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "oooo",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Ajouter des boites mails délégués",
              "key": "AddInboxMailDelegate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "aaaa",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Serveur",
          "expandMore": false,
          "suffixEndpoint": "category/serveur",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès aux lecteurs réseaux",
              "key": "ReadNetworkAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Nom du serveur",
                  "key": "ServerName",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "a",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Chemin du dossier",
                  "key": "FolderPath",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "a",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Lettre à attribuer",
                  "key": "AttributLetter",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "a",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Machin",
              "key": "Machin",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "La",
                  "checked": true
                }
              ],
              "value": null,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox_multiple",
              "deleteable": true,
              "editable": true,
              "isConditional": false,
              "conditionValue": "Manager",
              "conditionLocation": {
                "level": 1,
                "categoryIndex": 0,
                "currentIndex": 1,
                "possibleValues": [
                  {
                    "value": "Manager",
                    "checked": false
                  },
                  {
                    "value": "Utilisateur",
                    "checked": false
                  }
                ],
                "label": "Utilisateur > Type de profil"
              },
              "subLevel": 1
            }
          ]
        },
        {
          "name": "VPN",
          "expandMore": false,
          "suffixEndpoint": "category/vpn",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès au VPN",
              "key": "VpnAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Imprimantes",
          "expandMore": false,
          "suffixEndpoint": "category/imprimente",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "forms": [
            {
              "label": "Accès aux imprimantes",
              "key": "PrinterAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Nom / Modèle de l'imprimante / localisation",
                  "key": "PrinterName",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "a",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Applications",
          "expandMore": false,
          "suffixEndpoint": "category/application",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "expandOnboarding": true,
          "defaultValue": false,
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès aux applications ?",
              "key": "ApplicationAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "a",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Poste",
          "expandMore": false,
          "suffixEndpoint": "category/poste",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Paramétrage de poste",
              "key": "PostParameter",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "RealocatedEquipment",
                  "key": "",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "e",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Nouveau poste",
                  "key": "NewPost",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Acheté chez Nowteam",
                      "key": "PurchasedAtNowteam",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "e",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Autre",
                      "key": "Other",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "e",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "Mme",
          "Type de profil": "Manager",
          "Nom": "Rudchenko",
          "Prénom": "Olga",
          "Email": "olga.rudchenko@nowbrains.com",
          "Fonction": "CDP",
          "Etablissement / Site": "test",
          "Accès au portail": "Oui",
          "Langue": "Français",
          "A quitté la société": "Non",
          "Truc": {
            "Sous-truc": {
              "Sous-sous-truc": "test ytytytyyt"
            }
          }
        },
        "Session d'utilisateur": {
          "Utilisateur local à créer": {
            "Login": "olga.rudchenko",
            "Mot de passe": "FranceLove63@"
          },
          "Utilisateur AD (serveur) à créer": {
            "Nom de domaine": "test",
            "Votre login": "test",
            "Votre mot de passe": "123",
            "Groupe de sécurité": {
              "Utilisateur avec les droits similaires *": "test",
              "Descriptions": "ttttttttt"
            }
          }
        },
        "Messagerie": {
          "Adresse mail à créer": {
            "Adresse mail": "olga.rudchenko@nowbrains.com",
            "Type de licence (si gérées par le client)": "test"
          },
          "Listes  de distribution": {
            "Utilisateur avec les listes similaires *": "test",
            "Descriptions": "oooo"
          },
          "Ajouter des boites mails délégués": {
            "Descriptions": "aaaa"
          }
        },
        "Serveur": {
          "Accès aux lecteurs réseaux": {
            "Nom du serveur": "a",
            "Chemin du dossier": "a",
            "Lettre à attribuer": "a"
          },
          "Machin": [
            "La"
          ]
        },
        "VPN": {
          "Accès au VPN": true
        },
        "Imprimantes": {
          "Accès aux imprimantes": {
            "Nom / Modèle de l'imprimante / localisation": "a"
          }
        },
        "Applications": {
          "Accès aux applications ?": {
            "Descriptions": "a"
          }
        },
        "Poste": {
          "Paramétrage de poste": {
            "RealocatedEquipment": "e",
            "Nouveau poste": {
              "Acheté chez Nowteam": "e",
              "Autre": "e"
            }
          }
        }
      },
      "TemplateId": "621751d1409cf3000b00506d",
      "Finished": false,
      "ContactId": "0031q00000qIeA6AAK",
      "createdAt": "2022-05-17T15:13:44.306Z",
      "updatedAt": "2022-05-17T15:13:44.306Z",
      "__v": 0,
      "vcontacts": [],
      "vtemplates": [],
      "vtickets": [],
      "Status": "A finaliser",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "",
      "ContactName": "Rudchenko Olga",
      "Name": "Rudchenko Olga",
      "Title": "CDP",
      "Email": "olga.rudchenko@nowbrains.com",
      "date_of_entry": "",
      "TemplateName": "",
      "Id": 56
    },
    {
      "_id": "6286089fc12a2a0009bc4fdb",
      "tickets": [],
      "categories": [
        {
          "name": "Utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "demo",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "demo",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diarynar@gmail.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone fixe",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone portable",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "demo",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "demo",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Non",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "A quitté la société",
              "key": "A_quitt_la_soci_t__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Session d'utilisateur",
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selected": true,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user-session",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Utilisateur local à créer",
              "key": "UserLocalToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Login",
                  "key": "Login",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "pierre@blotimmoblier.fr",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Mot de passe",
                  "key": "Password",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Artibip44",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Utilisateur AD (serveur) à créer",
              "key": "UserServerToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Nom de domaine",
                  "key": "DomainName",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Diary Narindra",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre login",
                  "key": "YourLogin",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre mot de passe",
                  "key": "YourPassword",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Groupe de sécurité",
                  "key": "GroupSecurity",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Utilisateur avec les droits similaires *",
                      "key": "UserWithSimilarAccess",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "demo",
                      "size": 80,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Descriptions",
                      "key": "Description",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "demo",
                      "size": 255,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Messagerie",
          "expandMore": false,
          "suffixEndpoint": "category/messagerie",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Adresse mail à créer",
              "key": "EmailToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Adresse mail",
                  "key": "Email",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diarynar@gmail.com",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "email",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Type de licence (si gérées par le client)",
                  "key": "SerialKey",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Listes  de distribution",
              "key": "DistributionList",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Utilisateur avec les listes similaires *",
                  "key": "UserWithSimilarList",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Ajouter des boites mails délégués",
              "key": "AddInboxMailDelegate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Applications",
          "expandMore": false,
          "suffixEndpoint": "category/application",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "expandOnboarding": true,
          "defaultValue": false,
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Internal"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès aux applications ?",
              "key": "ApplicationAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Manager",
          "Nom": "demo",
          "Prénom": "demo",
          "Email": "diarynar@gmail.com",
          "Téléphone fixe": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Téléphone portable": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "demo",
          "Etablissement / Site": "demo",
          "Accès au portail": "Non",
          "Langue": "Français",
          "A quitté la société": "Oui"
        },
        "Session d'utilisateur": {
          "Utilisateur local à créer": {
            "Login": "pierre@blotimmoblier.fr",
            "Mot de passe": "Artibip44"
          },
          "Utilisateur AD (serveur) à créer": {
            "Nom de domaine": "Diary Narindra",
            "Votre login": "demo",
            "Votre mot de passe": "demo",
            "Groupe de sécurité": {
              "Utilisateur avec les droits similaires *": "demo",
              "Descriptions": "demo"
            }
          }
        },
        "Messagerie": {
          "Adresse mail à créer": {
            "Adresse mail": "diarynar@gmail.com",
            "Type de licence (si gérées par le client)": "demo"
          },
          "Listes  de distribution": {
            "Utilisateur avec les listes similaires *": "demo",
            "Descriptions": "demo"
          },
          "Ajouter des boites mails délégués": {
            "Descriptions": "demo"
          }
        },
        "Applications": {
          "Accès aux applications ?": {
            "Descriptions": "demo"
          }
        }
      },
      "TemplateId": "6214d6e3fff021000ad7c693",
      "Finished": true,
      "ContactId": "0031q00000nwsQyAAI",
      "createdAt": "2022-05-19T09:06:39.089Z",
      "updatedAt": "2022-05-19T09:06:39.089Z",
      "__v": 0,
      "vcontacts": [],
      "vtemplates": [],
      "vtickets": [],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "",
      "ContactName": "demo demo",
      "Name": "demo demo",
      "Title": "demo",
      "Email": "diarynar@gmail.com",
      "date_of_entry": "",
      "TemplateName": "",
      "Id": 58
    },
    {
      "_id": "628b389ac12a2a0009bc9816",
      "tickets": [],
      "categories": [
        {
          "name": "Utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Narindra",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Diary",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diarynar@gmail.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone fixe",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone portable",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "demo",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "demo",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Non",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "A quitté la société",
              "key": "A_quitt_la_soci_t__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Non",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Session d'utilisateur",
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selected": true,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user-session",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Utilisateur local à créer",
              "key": "UserLocalToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Login",
                  "key": "Login",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diary.diary",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Mot de passe",
                  "key": "Password",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Test1234!",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Utilisateur AD (serveur) à créer",
              "key": "UserServerToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Nom de domaine",
                  "key": "DomainName",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Diary Narindra",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre login",
                  "key": "YourLogin",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "de",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre mot de passe",
                  "key": "YourPassword",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Groupe de sécurité",
                  "key": "GroupSecurity",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Utilisateur avec les droits similaires *",
                      "key": "UserWithSimilarAccess",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "de",
                      "size": 80,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Descriptions",
                      "key": "Description",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "de",
                      "size": 255,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Messagerie",
          "expandMore": false,
          "suffixEndpoint": "category/messagerie",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Adresse mail à créer",
              "key": "EmailToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Adresse mail",
                  "key": "Email",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diarynar@gmail.com",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "email",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Type de licence (si gérées par le client)",
                  "key": "SerialKey",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Listes  de distribution",
              "key": "DistributionList",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Utilisateur avec les listes similaires *",
                  "key": "UserWithSimilarList",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Ajouter des boites mails délégués",
              "key": "AddInboxMailDelegate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Applications",
          "expandMore": false,
          "suffixEndpoint": "category/application",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "expandOnboarding": true,
          "defaultValue": false,
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Internal"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès aux applications ?",
              "key": "ApplicationAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "de",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Manager",
          "Nom": "Narindra",
          "Prénom": "Diary",
          "Email": "diarynar@gmail.com",
          "Téléphone fixe": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Téléphone portable": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "demo",
          "Etablissement / Site": "demo",
          "Accès au portail": "Non",
          "Langue": "Français",
          "A quitté la société": "Non"
        },
        "Session d'utilisateur": {
          "Utilisateur local à créer": {
            "Login": "diary.diary",
            "Mot de passe": "Test1234!"
          },
          "Utilisateur AD (serveur) à créer": {
            "Nom de domaine": "Diary Narindra",
            "Votre login": "de",
            "Votre mot de passe": "demo",
            "Groupe de sécurité": {
              "Utilisateur avec les droits similaires *": "de",
              "Descriptions": "de"
            }
          }
        },
        "Messagerie": {
          "Adresse mail à créer": {
            "Adresse mail": "diarynar@gmail.com",
            "Type de licence (si gérées par le client)": "demo"
          },
          "Listes  de distribution": {
            "Utilisateur avec les listes similaires *": "demo",
            "Descriptions": "demo"
          },
          "Ajouter des boites mails délégués": {
            "Descriptions": "demo"
          }
        },
        "Applications": {
          "Accès aux applications ?": {
            "Descriptions": "de"
          }
        }
      },
      "TemplateId": "6214d6e3fff021000ad7c693",
      "Finished": true,
      "ContactId": "0031q00000nwsQyAAI",
      "createdAt": "2022-05-23T07:32:42.481Z",
      "updatedAt": "2022-05-23T07:32:42.481Z",
      "__v": 0,
      "vcontacts": [],
      "vtemplates": [],
      "vtickets": [],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "",
      "ContactName": "Narindra Diary",
      "Name": "Narindra Diary",
      "Title": "demo",
      "Email": "diarynar@gmail.com",
      "date_of_entry": "",
      "TemplateName": "",
      "Id": 59
    },
    {
      "_id": "628b3ac5c12a2a0009bc9823",
      "tickets": [],
      "categories": [
        {
          "name": "Utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Narindra",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Diary",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diarynar@gmail.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone fixe",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone portable",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "DEV",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "DEV",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "A quitté la société",
              "key": "A_quitt_la_soci_t__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Session d'utilisateur",
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selected": true,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user-session",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Utilisateur local à créer",
              "key": "UserLocalToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Login",
                  "key": "Login",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diary.diary",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Mot de passe",
                  "key": "Password",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Test1234!",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Utilisateur AD (serveur) à créer",
              "key": "UserServerToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Nom de domaine",
                  "key": "DomainName",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Diary Narindra",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre login",
                  "key": "YourLogin",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "DEV",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre mot de passe",
                  "key": "YourPassword",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "DEV",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Groupe de sécurité",
                  "key": "GroupSecurity",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Utilisateur avec les droits similaires *",
                      "key": "UserWithSimilarAccess",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "DEV",
                      "size": 80,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Descriptions",
                      "key": "Description",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "DEV",
                      "size": 255,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Messagerie",
          "expandMore": false,
          "suffixEndpoint": "category/messagerie",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Adresse mail à créer",
              "key": "EmailToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Adresse mail",
                  "key": "Email",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diarynar@gmail.com",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "email",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Type de licence (si gérées par le client)",
                  "key": "SerialKey",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "DEV",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Listes  de distribution",
              "key": "DistributionList",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Utilisateur avec les listes similaires *",
                  "key": "UserWithSimilarList",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "DEV",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "DEV",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Ajouter des boites mails délégués",
              "key": "AddInboxMailDelegate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "DEV",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Applications",
          "expandMore": false,
          "suffixEndpoint": "category/application",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "expandOnboarding": true,
          "defaultValue": false,
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Internal"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès aux applications ?",
              "key": "ApplicationAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "DEV",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Manager",
          "Nom": "Narindra",
          "Prénom": "Diary",
          "Email": "diarynar@gmail.com",
          "Téléphone fixe": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Téléphone portable": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "DEV",
          "Etablissement / Site": "DEV",
          "Accès au portail": "Oui",
          "Langue": "Français",
          "A quitté la société": "Oui"
        },
        "Session d'utilisateur": {
          "Utilisateur local à créer": {
            "Login": "diary.diary",
            "Mot de passe": "Test1234!"
          },
          "Utilisateur AD (serveur) à créer": {
            "Nom de domaine": "Diary Narindra",
            "Votre login": "DEV",
            "Votre mot de passe": "DEV",
            "Groupe de sécurité": {
              "Utilisateur avec les droits similaires *": "DEV",
              "Descriptions": "DEV"
            }
          }
        },
        "Messagerie": {
          "Adresse mail à créer": {
            "Adresse mail": "diarynar@gmail.com",
            "Type de licence (si gérées par le client)": "DEV"
          },
          "Listes  de distribution": {
            "Utilisateur avec les listes similaires *": "DEV",
            "Descriptions": "DEV"
          },
          "Ajouter des boites mails délégués": {
            "Descriptions": "DEV"
          }
        },
        "Applications": {
          "Accès aux applications ?": {
            "Descriptions": "DEV"
          }
        }
      },
      "TemplateId": "6214d6e3fff021000ad7c693",
      "Finished": true,
      "ContactId": "0031q00000nwsQyAAI",
      "createdAt": "2022-05-23T07:41:57.809Z",
      "updatedAt": "2022-05-23T07:41:57.809Z",
      "__v": 0,
      "vcontacts": [],
      "vtemplates": [],
      "vtickets": [],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "",
      "ContactName": "Narindra Diary",
      "Name": "Narindra Diary",
      "Title": "DEV",
      "Email": "diarynar@gmail.com",
      "date_of_entry": "",
      "TemplateName": "",
      "Id": 60
    },
    {
      "_id": "628b3c9cc12a2a0009bc983a",
      "tickets": [
        "5001q00000IFygPAAT"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diarynar@gmail.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone fixe",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone portable",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "A quitté la société",
              "key": "A_quitt_la_soci_t__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Non",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Session d'utilisateur",
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selected": true,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user-session",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Utilisateur local à créer",
              "key": "UserLocalToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Login",
                  "key": "Login",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diary.diary",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Mot de passe",
                  "key": "Password",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Test1234!",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Utilisateur AD (serveur) à créer",
              "key": "UserServerToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Nom de domaine",
                  "key": "DomainName",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Diary Narindra",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre login",
                  "key": "YourLogin",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre mot de passe",
                  "key": "YourPassword",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Groupe de sécurité",
                  "key": "GroupSecurity",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Utilisateur avec les droits similaires *",
                      "key": "UserWithSimilarAccess",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "edd",
                      "size": 80,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Descriptions",
                      "key": "Description",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 255,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Messagerie",
          "expandMore": false,
          "suffixEndpoint": "category/messagerie",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Adresse mail à créer",
              "key": "EmailToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Adresse mail",
                  "key": "Email",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "email",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Type de licence (si gérées par le client)",
                  "key": "SerialKey",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Listes  de distribution",
              "key": "DistributionList",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Utilisateur avec les listes similaires *",
                  "key": "UserWithSimilarList",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Ajouter des boites mails délégués",
              "key": "AddInboxMailDelegate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Applications",
          "expandMore": false,
          "suffixEndpoint": "category/application",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "expandOnboarding": true,
          "defaultValue": false,
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Internal"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès aux applications ?",
              "key": "ApplicationAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Manager",
          "Nom": "dev",
          "Prénom": "dev",
          "Email": "diarynar@gmail.com",
          "Téléphone fixe": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Téléphone portable": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "dev",
          "Etablissement / Site": "dev",
          "Accès au portail": "Oui",
          "Langue": "Français",
          "A quitté la société": "Non"
        },
        "Session d'utilisateur": {
          "Utilisateur local à créer": {
            "Login": "diary.diary",
            "Mot de passe": "Test1234!"
          },
          "Utilisateur AD (serveur) à créer": {
            "Nom de domaine": "Diary Narindra",
            "Votre login": "dev",
            "Votre mot de passe": "dev",
            "Groupe de sécurité": {
              "Utilisateur avec les droits similaires *": "edd",
              "Descriptions": "dev"
            }
          }
        },
        "Messagerie": {
          "Adresse mail à créer": {
            "Adresse mail": "dev",
            "Type de licence (si gérées par le client)": "dev"
          },
          "Listes  de distribution": {
            "Utilisateur avec les listes similaires *": "dev",
            "Descriptions": "dev"
          },
          "Ajouter des boites mails délégués": {
            "Descriptions": "dev"
          }
        },
        "Applications": {
          "Accès aux applications ?": {
            "Descriptions": "dev"
          }
        }
      },
      "TemplateId": "6214d6e3fff021000ad7c693",
      "Finished": true,
      "ContactId": "0031q00000nwsQyAAI",
      "createdAt": "2022-05-23T07:49:48.409Z",
      "updatedAt": "2022-05-23T07:49:48.409Z",
      "__v": 0,
      "vcontacts": [],
      "vtemplates": [],
      "vtickets": [],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "",
      "ContactName": "dev dev",
      "Name": "dev dev",
      "Title": "dev",
      "Email": "diarynar@gmail.com",
      "date_of_entry": "",
      "TemplateName": "",
      "Id": 61
    },
    {
      "_id": "628e0238d26183000ac184db",
      "tickets": [
        "5001q00000IGDbXAAX"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Narindra",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Diary",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diarynar@gmail.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone fixe",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone portable",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "A quitté la société",
              "key": "A_quitt_la_soci_t__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Session d'utilisateur",
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selected": true,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user-session",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Utilisateur local à créer",
              "key": "UserLocalToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Login",
                  "key": "Login",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diarynar@gmail.com",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Mot de passe",
                  "key": "Password",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Artibip44",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Utilisateur AD (serveur) à créer",
              "key": "UserServerToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Nom de domaine",
                  "key": "DomainName",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Diary Narindra",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre login",
                  "key": "YourLogin",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre mot de passe",
                  "key": "YourPassword",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Groupe de sécurité",
                  "key": "GroupSecurity",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Utilisateur avec les droits similaires *",
                      "key": "UserWithSimilarAccess",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 80,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Descriptions",
                      "key": "Description",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 255,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Messagerie",
          "expandMore": false,
          "suffixEndpoint": "category/messagerie",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Adresse mail à créer",
              "key": "EmailToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Adresse mail",
                  "key": "Email",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diarynar@gmail.com",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "email",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Type de licence (si gérées par le client)",
                  "key": "SerialKey",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Listes  de distribution",
              "key": "DistributionList",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Utilisateur avec les listes similaires *",
                  "key": "UserWithSimilarList",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Ajouter des boites mails délégués",
              "key": "AddInboxMailDelegate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Applications",
          "expandMore": false,
          "suffixEndpoint": "category/application",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "expandOnboarding": true,
          "defaultValue": false,
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Internal"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès aux applications ?",
              "key": "ApplicationAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Manager",
          "Nom": "Narindra",
          "Prénom": "Diary",
          "Email": "diarynar@gmail.com",
          "Téléphone fixe": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Téléphone portable": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "dev",
          "Etablissement / Site": "dev",
          "Accès au portail": "Oui",
          "Langue": "Français",
          "A quitté la société": "Oui"
        },
        "Session d'utilisateur": {
          "Utilisateur local à créer": {
            "Login": "diarynar@gmail.com",
            "Mot de passe": "Artibip44"
          },
          "Utilisateur AD (serveur) à créer": {
            "Nom de domaine": "Diary Narindra",
            "Votre login": "dev",
            "Votre mot de passe": "dev",
            "Groupe de sécurité": {
              "Utilisateur avec les droits similaires *": "dev",
              "Descriptions": "dev"
            }
          }
        },
        "Messagerie": {
          "Adresse mail à créer": {
            "Adresse mail": "diarynar@gmail.com",
            "Type de licence (si gérées par le client)": "dev"
          },
          "Listes  de distribution": {
            "Utilisateur avec les listes similaires *": "dev",
            "Descriptions": "dev"
          },
          "Ajouter des boites mails délégués": {
            "Descriptions": "dev"
          }
        },
        "Applications": {
          "Accès aux applications ?": {
            "Descriptions": "dev"
          }
        }
      },
      "TemplateId": "6214d6e3fff021000ad7c693",
      "Finished": true,
      "ContactId": "0031q00000nwsQyAAI",
      "createdAt": "2022-05-25T10:17:28.519Z",
      "updatedAt": "2022-05-25T10:17:28.519Z",
      "__v": 0,
      "vcontacts": [],
      "vtemplates": [],
      "vtickets": [],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "",
      "ContactName": "Narindra Diary",
      "Name": "Narindra Diary",
      "Title": "dev",
      "Email": "diarynar@gmail.com",
      "date_of_entry": "",
      "TemplateName": "",
      "Id": 62
    },
    {
      "_id": "628e0636ada7bf000b0da075",
      "tickets": [
        "5001q00000IGDlrAAH"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "Mme",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Utilisateur",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Narindra",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Diary",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diarynar@gmail.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone fixe",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone portable",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "A quitté la société",
              "key": "A_quitt_la_soci_t__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Session d'utilisateur",
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selected": true,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user-session",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Utilisateur local à créer",
              "key": "UserLocalToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Login",
                  "key": "Login",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "pierre@blotimmoblier.fr",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Mot de passe",
                  "key": "Password",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Artibip44",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Utilisateur AD (serveur) à créer",
              "key": "UserServerToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Nom de domaine",
                  "key": "DomainName",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Diary Narindra",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre login",
                  "key": "YourLogin",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre mot de passe",
                  "key": "YourPassword",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Groupe de sécurité",
                  "key": "GroupSecurity",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Utilisateur avec les droits similaires *",
                      "key": "UserWithSimilarAccess",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 80,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Descriptions",
                      "key": "Description",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 255,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Messagerie",
          "expandMore": false,
          "suffixEndpoint": "category/messagerie",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Adresse mail à créer",
              "key": "EmailToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Adresse mail",
                  "key": "Email",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diarynar@gmail.com",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "email",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Type de licence (si gérées par le client)",
                  "key": "SerialKey",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Listes  de distribution",
              "key": "DistributionList",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Utilisateur avec les listes similaires *",
                  "key": "UserWithSimilarList",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Ajouter des boites mails délégués",
              "key": "AddInboxMailDelegate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Applications",
          "expandMore": false,
          "suffixEndpoint": "category/application",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "expandOnboarding": true,
          "defaultValue": false,
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Internal"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès aux applications ?",
              "key": "ApplicationAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "Mme",
          "Type de profil": "Utilisateur",
          "Nom": "Narindra",
          "Prénom": "Diary",
          "Email": "diarynar@gmail.com",
          "Téléphone fixe": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Téléphone portable": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "dev",
          "Etablissement / Site": "dev",
          "Accès au portail": "Oui",
          "Langue": "Français",
          "A quitté la société": "Oui"
        },
        "Session d'utilisateur": {
          "Utilisateur local à créer": {
            "Login": "pierre@blotimmoblier.fr",
            "Mot de passe": "Artibip44"
          },
          "Utilisateur AD (serveur) à créer": {
            "Nom de domaine": "Diary Narindra",
            "Votre login": "dev",
            "Votre mot de passe": "dev",
            "Groupe de sécurité": {
              "Utilisateur avec les droits similaires *": "dev",
              "Descriptions": "dev"
            }
          }
        },
        "Messagerie": {
          "Adresse mail à créer": {
            "Adresse mail": "diarynar@gmail.com",
            "Type de licence (si gérées par le client)": "dev"
          },
          "Listes  de distribution": {
            "Utilisateur avec les listes similaires *": "dev",
            "Descriptions": "dev"
          },
          "Ajouter des boites mails délégués": {
            "Descriptions": "dev"
          }
        },
        "Applications": {
          "Accès aux applications ?": {
            "Descriptions": "dev"
          }
        }
      },
      "TemplateId": "6214d6e3fff021000ad7c693",
      "Finished": true,
      "ContactId": "0031q00000nwsQyAAI",
      "createdAt": "2022-05-25T10:34:30.163Z",
      "updatedAt": "2022-05-25T10:34:30.163Z",
      "__v": 0,
      "vcontacts": [],
      "vtemplates": [],
      "vtickets": [],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "",
      "ContactName": "Narindra Diary",
      "Name": "Narindra Diary",
      "Title": "dev",
      "Email": "diarynar@gmail.com",
      "date_of_entry": "",
      "TemplateName": "",
      "Id": 63
    },
    {
      "_id": "628e4b5a698d7e000a3a889c",
      "tickets": [
        "5001q00000IGFViAAP"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Narindra N",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Diary",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diarynar@gmail.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone fixe",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone portable",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "A quitté la société",
              "key": "A_quitt_la_soci_t__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Session d'utilisateur",
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selected": true,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user-session",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Utilisateur local à créer",
              "key": "UserLocalToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Login",
                  "key": "Login",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diarynar@gmail.com",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Mot de passe",
                  "key": "Password",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Artibip44",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Utilisateur AD (serveur) à créer",
              "key": "UserServerToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Nom de domaine",
                  "key": "DomainName",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Diary Narindra",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre login",
                  "key": "YourLogin",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre mot de passe",
                  "key": "YourPassword",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Groupe de sécurité",
                  "key": "GroupSecurity",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Utilisateur avec les droits similaires *",
                      "key": "UserWithSimilarAccess",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 80,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Descriptions",
                      "key": "Description",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 255,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Messagerie",
          "expandMore": false,
          "suffixEndpoint": "category/messagerie",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Adresse mail à créer",
              "key": "EmailToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Adresse mail",
                  "key": "Email",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "email",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Type de licence (si gérées par le client)",
                  "key": "SerialKey",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Listes  de distribution",
              "key": "DistributionList",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Utilisateur avec les listes similaires *",
                  "key": "UserWithSimilarList",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Ajouter des boites mails délégués",
              "key": "AddInboxMailDelegate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Applications",
          "expandMore": false,
          "suffixEndpoint": "category/application",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "expandOnboarding": true,
          "defaultValue": false,
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Internal"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès aux applications ?",
              "key": "ApplicationAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Manager",
          "Nom": "Narindra N",
          "Prénom": "Diary",
          "Email": "diarynar@gmail.com",
          "Téléphone fixe": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Téléphone portable": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "dev",
          "Etablissement / Site": "dev",
          "Accès au portail": "Oui",
          "Langue": "Français",
          "A quitté la société": "Oui"
        },
        "Session d'utilisateur": {
          "Utilisateur local à créer": {
            "Login": "diarynar@gmail.com",
            "Mot de passe": "Artibip44"
          },
          "Utilisateur AD (serveur) à créer": {
            "Nom de domaine": "Diary Narindra",
            "Votre login": "dev",
            "Votre mot de passe": "dev",
            "Groupe de sécurité": {
              "Utilisateur avec les droits similaires *": "dev",
              "Descriptions": "dev"
            }
          }
        },
        "Messagerie": {
          "Adresse mail à créer": {
            "Adresse mail": "dev",
            "Type de licence (si gérées par le client)": "dev"
          },
          "Listes  de distribution": {
            "Utilisateur avec les listes similaires *": "dev",
            "Descriptions": "dev"
          },
          "Ajouter des boites mails délégués": {
            "Descriptions": "dev"
          }
        },
        "Applications": {
          "Accès aux applications ?": {
            "Descriptions": "dev"
          }
        }
      },
      "TemplateId": "6214d6e3fff021000ad7c693",
      "Finished": true,
      "ContactId": "0031q00000nwsQyAAI",
      "createdAt": "2022-05-25T15:29:30.936Z",
      "updatedAt": "2022-05-25T15:31:10.855Z",
      "__v": 0,
      "vcontacts": [],
      "vtemplates": [],
      "vtickets": [],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "",
      "ContactName": "Narindra N Diary",
      "Name": "Narindra N Diary",
      "Title": "dev",
      "Email": "diarynar@gmail.com",
      "date_of_entry": "",
      "TemplateName": "",
      "Id": 64
    },
    {
      "_id": "628e4fd2b1247a000b0fe943",
      "tickets": [
        "5001q00000IGFbRAAX"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Demo by Diary",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Narindra",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diarynar@gmail.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone fixe",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone portable",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "A quitté la société",
              "key": "A_quitt_la_soci_t__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Session d'utilisateur",
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selected": true,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user-session",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Utilisateur local à créer",
              "key": "UserLocalToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Login",
                  "key": "Login",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diary.diary",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Mot de passe",
                  "key": "Password",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Test1234!",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Utilisateur AD (serveur) à créer",
              "key": "UserServerToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Nom de domaine",
                  "key": "DomainName",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Diary Narindra",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre login",
                  "key": "YourLogin",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre mot de passe",
                  "key": "YourPassword",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Groupe de sécurité",
                  "key": "GroupSecurity",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Utilisateur avec les droits similaires *",
                      "key": "UserWithSimilarAccess",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 80,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Descriptions",
                      "key": "Description",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 255,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Messagerie",
          "expandMore": false,
          "suffixEndpoint": "category/messagerie",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Adresse mail à créer",
              "key": "EmailToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Adresse mail",
                  "key": "Email",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diarynar@gmail.com",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "email",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Type de licence (si gérées par le client)",
                  "key": "SerialKey",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Listes  de distribution",
              "key": "DistributionList",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Utilisateur avec les listes similaires *",
                  "key": "UserWithSimilarList",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Ajouter des boites mails délégués",
              "key": "AddInboxMailDelegate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Applications",
          "expandMore": false,
          "suffixEndpoint": "category/application",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "expandOnboarding": true,
          "defaultValue": false,
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Internal"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès aux applications ?",
              "key": "ApplicationAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Manager",
          "Nom": "Demo by Diary",
          "Prénom": "Narindra",
          "Email": "diarynar@gmail.com",
          "Téléphone fixe": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Téléphone portable": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "dev",
          "Etablissement / Site": "dev",
          "Accès au portail": "Oui",
          "Langue": "Français",
          "A quitté la société": "Oui"
        },
        "Session d'utilisateur": {
          "Utilisateur local à créer": {
            "Login": "diary.diary",
            "Mot de passe": "Test1234!"
          },
          "Utilisateur AD (serveur) à créer": {
            "Nom de domaine": "Diary Narindra",
            "Votre login": "dev",
            "Votre mot de passe": "dev",
            "Groupe de sécurité": {
              "Utilisateur avec les droits similaires *": "dev",
              "Descriptions": "dev"
            }
          }
        },
        "Messagerie": {
          "Adresse mail à créer": {
            "Adresse mail": "diarynar@gmail.com",
            "Type de licence (si gérées par le client)": "dev"
          },
          "Listes  de distribution": {
            "Utilisateur avec les listes similaires *": "dev",
            "Descriptions": "dev"
          },
          "Ajouter des boites mails délégués": {
            "Descriptions": "dev"
          }
        },
        "Applications": {
          "Accès aux applications ?": {
            "Descriptions": "dev"
          }
        }
      },
      "TemplateId": "6214d6e3fff021000ad7c693",
      "Finished": true,
      "ContactId": "0031q00000nwsQyAAI",
      "createdAt": "2022-05-25T15:48:34.565Z",
      "updatedAt": "2022-05-25T15:48:34.565Z",
      "__v": 0,
      "vcontacts": [],
      "vtemplates": [],
      "vtickets": [],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "",
      "ContactName": "Demo by Diary Narindra",
      "Name": "Demo by Diary Narindra",
      "Title": "dev",
      "Email": "diarynar@gmail.com",
      "date_of_entry": "",
      "TemplateName": "",
      "Id": 65
    },
    {
      "_id": "629f0d70c3039a000a0dfb4f",
      "tickets": [
        "5001q00000IZNPZAA5"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Narindra",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Diary",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diarynar@gmail.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone fixe",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Téléphone portable",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Antananarivo",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "A quitté la société",
              "key": "A_quitt_la_soci_t__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Non",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Session d'utilisateur",
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selected": true,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user-session",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Utilisateur local à créer",
              "key": "UserLocalToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Login",
                  "key": "Login",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diary.diary",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Mot de passe",
                  "key": "Password",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Test1234!",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Utilisateur AD (serveur) à créer",
              "key": "UserServerToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Nom de domaine",
                  "key": "DomainName",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Diary Narindra",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": false,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre login",
                  "key": "YourLogin",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "Diary",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Votre mot de passe",
                  "key": "YourPassword",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "password",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Groupe de sécurité",
                  "key": "GroupSecurity",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Utilisateur avec les droits similaires *",
                      "key": "UserWithSimilarAccess",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 80,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Descriptions",
                      "key": "Description",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 255,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Messagerie",
          "expandMore": false,
          "suffixEndpoint": "category/messagerie",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Adresse mail à créer",
              "key": "EmailToCreate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Adresse mail",
                  "key": "Email",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "diarynar@gmail.com",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "email",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Type de licence (si gérées par le client)",
                  "key": "SerialKey",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Listes  de distribution",
              "key": "DistributionList",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Utilisateur avec les listes similaires *",
                  "key": "UserWithSimilarList",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "text",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            },
            {
              "label": "Ajouter des boites mails délégués",
              "key": "AddInboxMailDelegate",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        },
        {
          "name": "Applications",
          "expandMore": false,
          "suffixEndpoint": "category/application",
          "selected": true,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "expandOnboarding": true,
          "defaultValue": false,
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Internal"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès aux applications ?",
              "key": "ApplicationAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Descriptions",
                  "key": "Description",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Manager",
          "Nom": "Narindra",
          "Prénom": "Diary",
          "Email": "diarynar@gmail.com",
          "Téléphone fixe": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Téléphone portable": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "Antananarivo",
          "Etablissement / Site": "dev",
          "Accès au portail": "Oui",
          "Langue": "Français",
          "A quitté la société": "Non"
        },
        "Session d'utilisateur": {
          "Utilisateur local à créer": {
            "Login": "diary.diary",
            "Mot de passe": "Test1234!"
          },
          "Utilisateur AD (serveur) à créer": {
            "Nom de domaine": "Diary Narindra",
            "Votre login": "Diary",
            "Votre mot de passe": "dev",
            "Groupe de sécurité": {
              "Utilisateur avec les droits similaires *": "dev",
              "Descriptions": "dev"
            }
          }
        },
        "Messagerie": {
          "Adresse mail à créer": {
            "Adresse mail": "diarynar@gmail.com",
            "Type de licence (si gérées par le client)": "dev"
          },
          "Listes  de distribution": {
            "Utilisateur avec les listes similaires *": "dev",
            "Descriptions": "dev"
          },
          "Ajouter des boites mails délégués": {
            "Descriptions": "dev"
          }
        },
        "Applications": {
          "Accès aux applications ?": {
            "Descriptions": "dev"
          }
        }
      },
      "TemplateId": "6214d6e3fff021000ad7c693",
      "Finished": true,
      "ContactId": "0031q00000nwsQyAAI",
      "createdAt": "2022-06-07T08:33:52.292Z",
      "updatedAt": "2022-06-07T08:33:52.292Z",
      "__v": 0,
      "vcontacts": [],
      "vtemplates": [],
      "vtickets": [],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "",
      "ContactName": "Narindra Diary",
      "Name": "Narindra Diary",
      "Title": "Antananarivo",
      "Email": "diarynar@gmail.com",
      "date_of_entry": "",
      "TemplateName": "",
      "Id": 66
    },
    {
      "_id": "62ff35da5f79bb0008ea24d4",
      "CasesId": [],
      "Cases": [
        "62ff35fe4261e40008702d07"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "key": "utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "Mme",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Narindra",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Diary",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diarynar@gmail.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fixe (opt)",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Mobile",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Non",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Date d'entrée",
              "key": "date_of_entry",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "2022-08-19",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "date",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "VPN",
          "key": "vpn",
          "expandMore": false,
          "suffixEndpoint": "category/vpn",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès au VPN",
              "key": "VpnAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Poste",
          "key": "poste",
          "expandMore": false,
          "suffixEndpoint": "category/poste",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Paramétrage de poste",
              "key": "PostParameter",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Réallocation d'équipement",
                  "key": "RealocatedEquipment",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "demo",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Nouveau poste",
                  "key": "NewPost",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Acheté chez Nowteam",
                      "key": "PurchasedAtNowteam",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "demo",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Autre",
                      "key": "Other",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "demo",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "Mme",
          "Type de profil": "Manager",
          "Nom": "Narindra",
          "Prénom": "Diary",
          "Email": "diarynar@gmail.com",
          "Fixe (opt)": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Mobile": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "dev",
          "Etablissement / Site": "dev",
          "Accès au portail": "Non",
          "Langue": "Français",
          "Date d'entrée": "2022-08-19"
        },
        "VPN": {
          "Accès au VPN": true
        },
        "Poste": {
          "Paramétrage de poste": {
            "Réallocation d'équipement": "demo",
            "Nouveau poste": {
              "Acheté chez Nowteam": "demo",
              "Autre": "demo"
            }
          }
        }
      },
      "TemplateId": "62ff34265f79bb0008ea244c",
      "Finished": true,
      "Contact": "619f6e543c06a10009fa2b39",
      "createdAt": "2022-08-19T07:03:54.562Z",
      "updatedAt": "2022-08-19T07:04:30.367Z",
      "__v": 0,
      "vcontacts": [
        {
          "_id": "619f6e543c06a10009fa2b39",
          "Email": "andritech6@gmail.com",
          "Name": "Narindra Diary",
          "Salutation": "M.",
          "Type_de_profil_Nowboard__c": "Manager",
          "FirstName": "Narindra",
          "Id": "0031q00000nwsQyAAI",
          "LastName": "Diary",
          "Title": "dev"
        }
      ],
      "vtemplates": [
        {
          "_id": "62ff34265f79bb0008ea244c",
          "Name": "Diary V2"
        }
      ],
      "vtickets": [],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "Narindra Diary",
      "ContactName": "Narindra Diary",
      "Name": "Narindra Diary",
      "Title": "dev",
      "Email": "diarynar@gmail.com",
      "date_of_entry": "19/08/2022",
      "TemplateName": "Diary V2",
      "Id": 67
    },
    {
      "_id": "62ff36bb5f79bb0008ea24e8",
      "CasesId": [],
      "Cases": [
        "62ff36bb4261e40008702d0e"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "key": "utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "Mme",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Utilisateur",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "DEMO",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Demo",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diarynar@gmail.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fixe (opt)",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Mobile",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 46 57 02 70",
                "internationalNumber": "+33 3 46 57 02 70",
                "nationalNumber": "03 46 57 02 70",
                "e164Number": "+33346570270",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Oui",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Date d'entrée",
              "key": "date_of_entry",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "2022-08-19",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "date",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "VPN",
          "key": "vpn",
          "expandMore": false,
          "suffixEndpoint": "category/vpn",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès au VPN",
              "key": "VpnAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Poste",
          "key": "poste",
          "expandMore": false,
          "suffixEndpoint": "category/poste",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Paramétrage de poste",
              "key": "PostParameter",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Réallocation d'équipement",
                  "key": "RealocatedEquipment",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "poste",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Nouveau poste",
                  "key": "NewPost",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Acheté chez Nowteam",
                      "key": "PurchasedAtNowteam",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "poste",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Autre",
                      "key": "Other",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "autre",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "Mme",
          "Type de profil": "Utilisateur",
          "Nom": "DEMO",
          "Prénom": "Demo",
          "Email": "diarynar@gmail.com",
          "Fixe (opt)": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Mobile": {
            "number": "03 46 57 02 70",
            "internationalNumber": "+33 3 46 57 02 70",
            "nationalNumber": "03 46 57 02 70",
            "e164Number": "+33346570270",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "dev",
          "Etablissement / Site": "dev",
          "Accès au portail": "Oui",
          "Langue": "Français",
          "Date d'entrée": "2022-08-19"
        },
        "VPN": {
          "Accès au VPN": true
        },
        "Poste": {
          "Paramétrage de poste": {
            "Réallocation d'équipement": "poste",
            "Nouveau poste": {
              "Acheté chez Nowteam": "poste",
              "Autre": "autre"
            }
          }
        }
      },
      "TemplateId": "62ff34265f79bb0008ea244c",
      "Finished": true,
      "Contact": "619f6e543c06a10009fa2b39",
      "createdAt": "2022-08-19T07:07:39.957Z",
      "updatedAt": "2022-08-19T07:07:39.957Z",
      "__v": 0,
      "vcontacts": [
        {
          "_id": "619f6e543c06a10009fa2b39",
          "Email": "andritech6@gmail.com",
          "Name": "Narindra Diary",
          "Salutation": "M.",
          "Type_de_profil_Nowboard__c": "Manager",
          "FirstName": "Narindra",
          "Id": "0031q00000nwsQyAAI",
          "LastName": "Diary",
          "Title": "dev"
        }
      ],
      "vtemplates": [
        {
          "_id": "62ff34265f79bb0008ea244c",
          "Name": "Diary V2"
        }
      ],
      "vtickets": [],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "Narindra Diary",
      "ContactName": "DEMO Demo",
      "Name": "DEMO Demo",
      "Title": "dev",
      "Email": "diarynar@gmail.com",
      "date_of_entry": "19/08/2022",
      "TemplateName": "Diary V2",
      "Id": 69
    },
    {
      "_id": "63046990a956100008a22350",
      "CasesId": [],
      "Cases": [
        "630469904261e4000870736e"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "key": "utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Utilisateur",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Diary",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Narindra",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diary.narindra@nowteam.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fixe (opt)",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "03 22 22 22 22",
                "internationalNumber": "+33 3 22 22 22 22",
                "nationalNumber": "03 22 22 22 22",
                "e164Number": "+33322222222",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Mobile",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "01 23 12 31 31",
                "internationalNumber": "+33 1 23 12 31 31",
                "nationalNumber": "01 23 12 31 31",
                "e164Number": "+33123123131",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Non",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Anglais",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Date d'entrée",
              "key": "date_of_entry",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "2022-08-23",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "date",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "VPN",
          "key": "vpn",
          "expandMore": false,
          "suffixEndpoint": "category/vpn",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès au VPN",
              "key": "VpnAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Poste",
          "key": "poste",
          "expandMore": false,
          "suffixEndpoint": "category/poste",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Paramétrage de poste",
              "key": "PostParameter",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Réallocation d'équipement",
                  "key": "RealocatedEquipment",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Nouveau poste",
                  "key": "NewPost",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Acheté chez Nowteam",
                      "key": "PurchasedAtNowteam",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Autre",
                      "key": "Other",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Utilisateur",
          "Nom": "Diary",
          "Prénom": "Narindra",
          "Email": "diary.narindra@nowteam.com",
          "Fixe (opt)": {
            "number": "03 22 22 22 22",
            "internationalNumber": "+33 3 22 22 22 22",
            "nationalNumber": "03 22 22 22 22",
            "e164Number": "+33322222222",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Mobile": {
            "number": "01 23 12 31 31",
            "internationalNumber": "+33 1 23 12 31 31",
            "nationalNumber": "01 23 12 31 31",
            "e164Number": "+33123123131",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "dev",
          "Etablissement / Site": "dev",
          "Accès au portail": "Non",
          "Langue": "Anglais",
          "Date d'entrée": "2022-08-23"
        },
        "VPN": {
          "Accès au VPN": true
        },
        "Poste": {
          "Paramétrage de poste": {
            "Réallocation d'équipement": "dev",
            "Nouveau poste": {
              "Acheté chez Nowteam": "dev",
              "Autre": "dev"
            }
          }
        }
      },
      "TemplateId": "62ff34265f79bb0008ea244c",
      "Finished": true,
      "ContactId": "619f6e543c06a10009fa2b39",
      "Contact": "619f6e543c06a10009fa2b39",
      "createdAt": "2022-08-23T05:45:52.323Z",
      "updatedAt": "2022-08-23T05:45:52.323Z",
      "__v": 0,
      "vcontacts": [
        {
          "_id": "619f6e543c06a10009fa2b39",
          "Email": "andritech6@gmail.com",
          "Name": "Narindra Diary",
          "Salutation": "M.",
          "Type_de_profil_Nowboard__c": "Manager",
          "FirstName": "Narindra",
          "Id": "0031q00000nwsQyAAI",
          "LastName": "Diary",
          "Title": "dev"
        }
      ],
      "vtemplates": [
        {
          "_id": "62ff34265f79bb0008ea244c",
          "Name": "Diary V2"
        }
      ],
      "vtickets": [
        {
          "_id": "630469904261e4000870736e",
          "Status": "Non qualifié"
        }
      ],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "Narindra Diary",
      "ContactName": "Diary Narindra",
      "Name": "Diary Narindra",
      "Title": "dev",
      "Email": "diary.narindra@nowteam.com",
      "date_of_entry": "23/08/2022",
      "TemplateName": "Diary V2",
      "Id": 70
    },
    {
      "_id": "63046a70a956100008a22363",
      "CasesId": [],
      "Cases": [
        "63046a704261e40008707375"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "key": "utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Utilisateur",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "demo",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "demo",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diary.narindra@nowteam.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fixe (opt)",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "02 13 21 23 11",
                "internationalNumber": "+33 2 13 21 23 11",
                "nationalNumber": "02 13 21 23 11",
                "e164Number": "+33213212311",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Mobile",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "02 13 21 21 11",
                "internationalNumber": "+33 2 13 21 21 11",
                "nationalNumber": "02 13 21 21 11",
                "e164Number": "+33213212111",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "dev",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Non",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Date d'entrée",
              "key": "date_of_entry",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "2022-08-23",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "date",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "VPN",
          "key": "vpn",
          "expandMore": false,
          "suffixEndpoint": "category/vpn",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès au VPN",
              "key": "VpnAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Poste",
          "key": "poste",
          "expandMore": false,
          "suffixEndpoint": "category/poste",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Paramétrage de poste",
              "key": "PostParameter",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Réallocation d'équipement",
                  "key": "RealocatedEquipment",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Nouveau poste",
                  "key": "NewPost",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Acheté chez Nowteam",
                      "key": "PurchasedAtNowteam",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Autre",
                      "key": "Other",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Utilisateur",
          "Nom": "demo",
          "Prénom": "demo",
          "Email": "diary.narindra@nowteam.com",
          "Fixe (opt)": {
            "number": "02 13 21 23 11",
            "internationalNumber": "+33 2 13 21 23 11",
            "nationalNumber": "02 13 21 23 11",
            "e164Number": "+33213212311",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Mobile": {
            "number": "02 13 21 21 11",
            "internationalNumber": "+33 2 13 21 21 11",
            "nationalNumber": "02 13 21 21 11",
            "e164Number": "+33213212111",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "dev",
          "Etablissement / Site": "dev",
          "Accès au portail": "Non",
          "Langue": "Français",
          "Date d'entrée": "2022-08-23"
        },
        "VPN": {
          "Accès au VPN": true
        },
        "Poste": {
          "Paramétrage de poste": {
            "Réallocation d'équipement": "dev",
            "Nouveau poste": {
              "Acheté chez Nowteam": "dev",
              "Autre": "dev"
            }
          }
        }
      },
      "TemplateId": "62ff34c55f79bb0008ea24a0",
      "Finished": true,
      "ContactId": "619f6e543c06a10009fa2b39",
      "Contact": "619f6e543c06a10009fa2b39",
      "createdAt": "2022-08-23T05:49:36.625Z",
      "updatedAt": "2022-08-23T05:49:36.625Z",
      "__v": 0,
      "vcontacts": [
        {
          "_id": "619f6e543c06a10009fa2b39",
          "Email": "andritech6@gmail.com",
          "Name": "Narindra Diary",
          "Salutation": "M.",
          "Type_de_profil_Nowboard__c": "Manager",
          "FirstName": "Narindra",
          "Id": "0031q00000nwsQyAAI",
          "LastName": "Diary",
          "Title": "dev"
        }
      ],
      "vtemplates": [
        {
          "_id": "62ff34c55f79bb0008ea24a0",
          "Name": "Développeur"
        }
      ],
      "vtickets": [
        {
          "_id": "63046a704261e40008707375",
          "Status": "Non qualifié"
        }
      ],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "Narindra Diary",
      "ContactName": "demo demo",
      "Name": "demo demo",
      "Title": "dev",
      "Email": "diary.narindra@nowteam.com",
      "date_of_entry": "23/08/2022",
      "TemplateName": "Développeur",
      "Id": 71
    },
    {
      "_id": "630482ae059a000009fec54a",
      "CasesId": [],
      "Cases": [
        "630482ae4261e40008707624"
      ],
      "TemplateId": [
        "62ff34265f79bb0008ea244c"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "key": "utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Diary",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Narindra",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diary.narindra@nowteam.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fixe (opt)",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "02 31 32 33 33",
                "internationalNumber": "+33 2 31 32 33 33",
                "nationalNumber": "02 31 32 33 33",
                "e164Number": "+33231323333",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Mobile",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "02 31 31 23 23",
                "internationalNumber": "+33 2 31 31 23 23",
                "nationalNumber": "02 31 31 23 23",
                "e164Number": "+33231312323",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Developpeur",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Nowteam",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Non",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Date d'entrée",
              "key": "date_of_entry",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "2022-08-23",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "date",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "VPN",
          "key": "vpn",
          "expandMore": false,
          "suffixEndpoint": "category/vpn",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès au VPN",
              "key": "VpnAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Poste",
          "key": "poste",
          "expandMore": false,
          "suffixEndpoint": "category/poste",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Paramétrage de poste",
              "key": "PostParameter",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Réallocation d'équipement",
                  "key": "RealocatedEquipment",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Nouveau poste",
                  "key": "NewPost",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Acheté chez Nowteam",
                      "key": "PurchasedAtNowteam",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Autre",
                      "key": "Other",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Manager",
          "Nom": "Diary",
          "Prénom": "Narindra",
          "Email": "diary.narindra@nowteam.com",
          "Fixe (opt)": {
            "number": "02 31 32 33 33",
            "internationalNumber": "+33 2 31 32 33 33",
            "nationalNumber": "02 31 32 33 33",
            "e164Number": "+33231323333",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Mobile": {
            "number": "02 31 31 23 23",
            "internationalNumber": "+33 2 31 31 23 23",
            "nationalNumber": "02 31 31 23 23",
            "e164Number": "+33231312323",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "Developpeur",
          "Etablissement / Site": "Nowteam",
          "Accès au portail": "Non",
          "Langue": "Français",
          "Date d'entrée": "2022-08-23"
        },
        "VPN": {
          "Accès au VPN": true
        },
        "Poste": {
          "Paramétrage de poste": {
            "Réallocation d'équipement": "dev",
            "Nouveau poste": {
              "Acheté chez Nowteam": "dev",
              "Autre": "dev"
            }
          }
        }
      },
      "Finished": true,
      "ContactId": "619f6e543c06a10009fa2b39",
      "Contact": "619f6e543c06a10009fa2b39",
      "createdAt": "2022-08-23T07:33:02.645Z",
      "updatedAt": "2022-08-23T07:33:02.645Z",
      "__v": 0,
      "vcontacts": [
        {
          "_id": "619f6e543c06a10009fa2b39",
          "Email": "andritech6@gmail.com",
          "Name": "Narindra Diary",
          "Salutation": "M.",
          "Type_de_profil_Nowboard__c": "Manager",
          "FirstName": "Narindra",
          "Id": "0031q00000nwsQyAAI",
          "LastName": "Diary",
          "Title": "dev"
        }
      ],
      "vtemplates": [
        {
          "_id": "62ff34265f79bb0008ea244c",
          "Name": "Diary V2"
        }
      ],
      "vtickets": [
        {
          "_id": "630482ae4261e40008707624",
          "Status": "Non qualifié"
        }
      ],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "Narindra Diary",
      "ContactName": "Diary Narindra",
      "Name": "Diary Narindra",
      "Title": "Developpeur",
      "Email": "diary.narindra@nowteam.com",
      "date_of_entry": "23/08/2022",
      "TemplateName": "Diary V2",
      "Id": 72
    },
    {
      "_id": "6304842b22077d0009b234b1",
      "CasesId": [],
      "Cases": [
        "6304842b4261e4000870762b"
      ],
      "categories": [
        {
          "name": "Utilisateur",
          "key": "utilisateur",
          "editable": false,
          "deleteable": false,
          "expandMore": false,
          "expandOnboarding": true,
          "defaultValue": false,
          "suffixEndpoint": "category/user",
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Civilité",
              "key": "Salutation",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "M.",
                  "checked": false
                },
                {
                  "value": "Mme",
                  "checked": false
                }
              ],
              "value": "M.",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Type de profil",
              "key": "Type_de_profil_Nowboard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Manager",
                  "checked": false
                },
                {
                  "value": "Utilisateur",
                  "checked": false
                }
              ],
              "value": "Manager",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Nom",
              "key": "LastName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Diary",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Prénom",
              "key": "FirstName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Narindra",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Email",
              "key": "Email",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "diary.narindra@nowteam.com",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "email",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fixe (opt)",
              "key": "Phone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "02 13 21 32 11",
                "internationalNumber": "+33 2 13 21 32 11",
                "nationalNumber": "02 13 21 32 11",
                "e164Number": "+33213213211",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Mobile",
              "key": "MobilePhone",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": {
                "number": "01 21 11 11 11",
                "internationalNumber": "+33 1 21 11 11 11",
                "nationalNumber": "01 21 11 11 11",
                "e164Number": "+33121111111",
                "countryCode": "FR",
                "dialCode": "+33"
              },
              "size": 20,
              "isMandatory": false,
              "otherValue": "",
              "type": "tel",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Fonction",
              "key": "Title",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Developpeur",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Etablissement / Site",
              "key": "AccountName",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "Nowteam",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "text",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Accès au portail",
              "key": "Acc_s_au_portail_client_NowBoard__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Oui",
                  "checked": false
                },
                {
                  "value": "Non",
                  "checked": false
                }
              ],
              "value": "Non",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Langue",
              "key": "Langue_maternelle__c",
              "expandOnboarding": true,
              "defaultValue": [
                {
                  "value": "Français",
                  "checked": false
                },
                {
                  "value": "Anglais",
                  "checked": false
                }
              ],
              "value": "Français",
              "size": 10,
              "isMandatory": true,
              "otherValue": "",
              "type": "select",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            },
            {
              "label": "Date d'entrée",
              "key": "date_of_entry",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": "2022-08-23",
              "size": 80,
              "isMandatory": true,
              "otherValue": "",
              "type": "date",
              "editable": false,
              "deleteable": false,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "VPN",
          "key": "vpn",
          "expandMore": false,
          "suffixEndpoint": "category/vpn",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Accès au VPN",
              "key": "VpnAccess",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false
            }
          ]
        },
        {
          "name": "Poste",
          "key": "poste",
          "expandMore": false,
          "suffixEndpoint": "category/poste",
          "selected": true,
          "expandOnboarding": true,
          "defaultValue": false,
          "editable": true,
          "isConditional": false,
          "conditionValue": "",
          "deleteable": true,
          "selector": {
            "label": "Company",
            "key": "Company",
            "defaultValue": [
              {
                "value": "Nowteam",
                "checked": true
              },
              {
                "value": "Internal",
                "checked": false
              }
            ],
            "value": "Nowteam"
          },
          "ticketType": {
            "label": "Type de ticket",
            "key": "tycketType",
            "defaultValue": [
              {
                "value": "Création de compte",
                "checked": true,
                "key": "Creation_de_compte"
              },
              {
                "value": "Configuration de poste",
                "checked": false,
                "key": "Configuration_de_poste"
              }
            ],
            "value": "Creation_de_compte"
          },
          "forms": [
            {
              "label": "Paramétrage de poste",
              "key": "PostParameter",
              "expandOnboarding": true,
              "defaultValue": null,
              "value": true,
              "size": 80,
              "isMandatory": false,
              "otherValue": "",
              "type": "checkbox",
              "editable": true,
              "isConditional": false,
              "conditionValue": "",
              "deleteable": true,
              "subLevel": 1,
              "expandMore": false,
              "forms": [
                {
                  "label": "Réallocation d'équipement",
                  "key": "RealocatedEquipment",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": "dev",
                  "size": 1000,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "textarea",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false
                },
                {
                  "label": "Nouveau poste",
                  "key": "NewPost",
                  "expandOnboarding": true,
                  "defaultValue": null,
                  "value": true,
                  "size": 80,
                  "isMandatory": true,
                  "otherValue": "",
                  "type": "checkbox",
                  "editable": true,
                  "isConditional": false,
                  "conditionValue": "",
                  "deleteable": true,
                  "subLevel": 2,
                  "expandMore": false,
                  "forms": [
                    {
                      "label": "Acheté chez Nowteam",
                      "key": "PurchasedAtNowteam",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "textarea",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    },
                    {
                      "label": "Autre",
                      "key": "Other",
                      "expandOnboarding": true,
                      "defaultValue": null,
                      "value": "dev",
                      "size": 1000,
                      "isMandatory": true,
                      "otherValue": "",
                      "type": "text",
                      "editable": true,
                      "isConditional": false,
                      "conditionValue": "",
                      "deleteable": true,
                      "subLevel": 3,
                      "expandMore": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "view": {
        "Utilisateur": {
          "Civilité": "M.",
          "Type de profil": "Manager",
          "Nom": "Diary",
          "Prénom": "Narindra",
          "Email": "diary.narindra@nowteam.com",
          "Fixe (opt)": {
            "number": "02 13 21 32 11",
            "internationalNumber": "+33 2 13 21 32 11",
            "nationalNumber": "02 13 21 32 11",
            "e164Number": "+33213213211",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Mobile": {
            "number": "01 21 11 11 11",
            "internationalNumber": "+33 1 21 11 11 11",
            "nationalNumber": "01 21 11 11 11",
            "e164Number": "+33121111111",
            "countryCode": "FR",
            "dialCode": "+33"
          },
          "Fonction": "Developpeur",
          "Etablissement / Site": "Nowteam",
          "Accès au portail": "Non",
          "Langue": "Français",
          "Date d'entrée": "2022-08-23"
        },
        "VPN": {
          "Accès au VPN": true
        },
        "Poste": {
          "Paramétrage de poste": {
            "Réallocation d'équipement": "dev",
            "Nouveau poste": {
              "Acheté chez Nowteam": "dev",
              "Autre": "dev"
            }
          }
        }
      },
      "TemplateId": "62ff34265f79bb0008ea244c",
      "Finished": true,
      "ContactId": "619f6e543c06a10009fa2b39",
      "Contact": "619f6e543c06a10009fa2b39",
      "createdAt": "2022-08-23T07:39:23.414Z",
      "updatedAt": "2022-08-23T07:39:23.414Z",
      "__v": 0,
      "vcontacts": [
        {
          "_id": "619f6e543c06a10009fa2b39",
          "Email": "andritech6@gmail.com",
          "Name": "Narindra Diary",
          "Salutation": "M.",
          "Type_de_profil_Nowboard__c": "Manager",
          "FirstName": "Narindra",
          "Id": "0031q00000nwsQyAAI",
          "LastName": "Diary",
          "Title": "dev"
        }
      ],
      "vtemplates": [
        {
          "_id": "62ff34265f79bb0008ea244c",
          "Name": "Diary V2"
        }
      ],
      "vtickets": [
        {
          "_id": "6304842b4261e4000870762b",
          "Status": "Non qualifié"
        }
      ],
      "Status": "Terminée",
      "CustomClass": "custom-status finished",
      "lastNameClass": "last-name",
      "requestor": "Narindra Diary",
      "ContactName": "Diary Narindra",
      "Name": "Diary Narindra",
      "Title": "Developpeur",
      "Email": "diary.narindra@nowteam.com",
      "date_of_entry": "23/08/2022",
      "TemplateName": "Diary V2",
      "Id": 73
    }
  ]
  displayDatas = []
  ngxFilterInit = ""
  constructor(
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.displayDatas = this.datas;
    this.datas.map((d) => {
      if (!(this.ngxFilterData[0].filterData as ISelect).options.some((ex: any) => ex.value === d.Finished)) {
        (this.ngxFilterData[0].filterData as ISelect).options.push({ value: d.Finished, label: d.Status })
      }
    })
    this.ngxFilterInit = JSON.stringify(this.ngxFilterData)
  }
  onFilter(event) {
    console.log('event-------------', event);
    if (event.datas) {
      this.displayDatas = event.datas
    }
  }
  onRefresh(event) {
    if (event.datas) {
      this.displayDatas = event.datas
    }
    this.ngxFilterData = JSON.parse(this.ngxFilterInit)
  }

  onSort(item) {
    // console.log('event-------------', item);
  }
}
