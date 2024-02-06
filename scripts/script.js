//JSON с элементами UI
var ui = [
  // 1
  {
    "type": "page",
    "class": "page n1",
    "content": [
      {
        "type": "div",
        "class": "pageContante",
        "content": [
          {
            "type": "div",
            "class": "container img-container logo",
            "content": [
              {
                "type": "img",
                "class": "logoIMG",
                "src": "img/logo.svg"
              }
            ]
          },
          {
            "type": "div",
            "class": "container button-container menu",
            "content": [
              {
                "type": "div",
                "class": "button menu 1",
                "onclick": "selectPlayers(2)",
                "content": "2 PLAYERS"
              },
              {
                "type": "div",
                "class": "button menu 2",
                "onclick": "selectPlayers(3)",
                "content": "3 PLAYERS"
              },
              {
                "type": "div",
                "class": "button menu 3",
                "onclick": "selectPlayers(4)",
                "content": "4 PLAYERS"
              },
              {
                "type": "div",
                "class": "button menu 4",
                "onclick": "selectPlayers(5)",
                "content": "5 PLAYERS"
              }
            ]
          }
        ]
      }
    ]
  },
  // 2
  {
    "type": "page",
    "class": "page n2",
    "content": [
      {
        "type": "div",
        "class": "pageContante",
        "content": [
          {
            "type": "div",
            "class": "container top-information top",
            "content": [
              {
                "type": "div",
                "class": "container player-name-container",
                "content": [
                  {
                    "type": "div",
                    "id": "playerN"
                  }
                ]
              }
            ]
          },
          {
            "type": "div",
            "class": "desk n2",
            "content": [
              {
                "type": "div",
                "class": "container hand",
                "content": [
                  {
                    "type": "div",
                    "class": "place hand",
                    "content": [
                      {
                        "type": "div",
                        "class": "cards open hand n1",
                        "content": [
                          {
                            "type": "div",
                            "class": "hand border",
                            "content": [
                              {
                                "type": "div",
                                "class": "container img-container cards",
                                "content": [
                                  {
                                    "type": "img",
                                    "class": "cardsIMG"
                                  }
                                ]
                              },
                              {
                                "type": "div",
                                "class": "text cardsTest"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "div",
                    "class": "place hand",
                    "content": [
                      {
                        "type": "div",
                        "class": "cards open hand n2",
                        "content": [
                          {
                            "type": "div",
                            "class": "hand border",
                            "content": [
                              {
                                "type": "div",
                                "class": "container img-container cards",
                                "content": [
                                  {
                                    "type": "img",
                                    "class": "cardsIMG"
                                  }
                                ]
                              },
                              {
                                "type": "div",
                                "class": "text cardsTest"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "div",
                    "class": "place hand",
                    "content": [
                      {
                        "type": "div",
                        "class": "cards open hand n3",
                        "content": [
                          {
                            "type": "div",
                            "class": "hand border",
                            "content": [
                              {
                                "type": "div",
                                "class": "container img-container cards",
                                "content": [
                                  {
                                    "type": "img",
                                    "class": "cardsIMG"
                                  }
                                ]
                              },
                              {
                                "type": "div",
                                "class": "text cardsTest"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "div",
            "class": "container button-container next",
            "content": [
              {
                "type": "div",
                "class": "button next",
                "onclick": "nextCardsSetup()",
                "content": "NEXT"
              }
            ]
          }
        ]
      }
    ]
  },
  // 3
  {
    "type": "page",
    "class": "page n3",
    "content": [
      {
        "type": "div",
        "class": "pageContante",
        "content": [
          {
            "type": "div",
            "class": "overlay",
            "id": "overlay",
            "content": [
              {
                "type": "div",
                "class": "popup",

                "id": "popup",
                "content": [
                  {
                    "type": "div",
                    "class": "h1",

                    "id": "first"
                  },
                  {
                    "type": "div",
                    "class": "h1",

                    "id": "second"
                  },
                  {
                    "type": "div",
                    "class": "popup-container",
                    "content": [
                      {
                        "type": "div",
                        "class": "button action-button 1",
                        "id": "button1",
                        "onclick": "performAction(1)"
                      },
                      {
                        "type": "div",
                        "class": "button action-button 2",
                        "id": "button2",
                        "onclick": "performAction(2)"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "div",
            "class": "container img-container map",
            "content": [
              {
                "type": "img",
                "class": "mapIMG",
                "src": "img/map.svg"
              },
              {
                "type": "div",
                "class": "container all-city-container"
              }
            ]
          }, {
            "type": "div",
            "class": "container top-information top",
            "content": [
              {
                "type": "div",
                "class": "container player-name-container",
                "content": [
                  {
                    "type": "div",
                    "id": "playerN"
                  }
                ]
              }
            ]
          },
          {
            "type": "div",
            "class": "container button-container ticket",
            "content": [
              {
                "type": "div",
                "class": "button ticket n1",
                "onclick": "handleButtonClick(0)"
              },
              {
                "type": "div",
                "class": "button ticket n2",
                "onclick": "handleButtonClick(1)"
              },
              {
                "type": "div",
                "class": "button ticket n3",
                "onclick": "handleButtonClick(2)"
              },
              {
                "type": "div",
                "class": "button ticket n4",
                "onclick": "handleButtonClick(3)"
              },
              {
                "type": "div",
                "class": "button ticket n5",
                "onclick": "handleButtonClick(4)"
              },
              {
                "type": "div",
                "class": "button ticket n6 blue",
                "onclick": "handleButtonClick(5)"
              },
              {
                "type": "div",
                "class": "button ticket n7 blue",
                "onclick": "handleButtonClick(6)"
              }
            ]
          },
          {
            "type": "div",
            "class": "container button-container next-player",
            "content": [
              {
                "type": "div",
                "class": "button next player",
                "onclick": "nextPlayerTicket()",
                "content": "NEXT"
              }
            ]
          }
        ]
      }
    ]
  },
  // 4
  {
    "type": "page",
    "class": "page n4",
    "content": [
      {
        "type": "div",
        "class": "pageContante",
        "content": [
          {
            "type": "div",
            "class": "overlay",
            "id": "overlay",
            "content": [
              {
                "type": "div",
                "class": "popup",

                "id": "popup",
                "content": [
                  {
                    "type": "div",
                    "class": "h1",

                    "id": "first"
                  },
                  {
                    "type": "div",
                    "class": "h1",

                    "id": "second"
                  },
                  {
                    "type": "div",
                    "class": "popup-container",
                    "content": [
                      {
                        "type": "div",
                        "class": "button action-button 1",
                        "id": "button1",
                        "onclick": "performAction(1)"
                      },
                      {
                        "type": "div",
                        "class": "button action-button 2",
                        "id": "button2",
                        "onclick": "performAction(2)"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "div",
            "class": "container top-information top",
            "content": [
              {
                "type": "div",
                "class": "container round-number-container",
                "content": [
                  {
                    "type": "div",
                    "id": "roundNumber"
                  }
                ]
              },
              {
                "type": "div",
                "class": "container player-name-container",
                "content": [
                  {
                    "type": "div",
                    "id": "playerN"
                  }
                ]
              }
            ]
          },
          {
            "type": "div",
            "class": "container button-container newTicket",
            "content": [
              {
                "type": "div",
                "class": "button newTickets",
                "onclick": "openPopup('ticket')",
                "content": "TICKETS"
              }
            ]
          },
          {
            "type": "div",
            "class": "desk",
            "content": [
              {
                "type": "div",
                "class": "container hand",
                "content": [
                  {
                    "type": "div",
                    "class": "place hand",
                    "content": [
                      {
                        "type": "div",
                        "class": "cards open n1 hand",
                        "style": "display: none;",
                        "content": [
                          {
                            "type": "div",
                            "class": "hand border",
                            "content": [
                              {
                                "type": "div",
                                "class": "container img-container cards",
                                "content": [
                                  {
                                    "type": "img",
                                    "class": "cardsIMG"
                                  }
                                ]
                              },
                              {
                                "type": "div",
                                "class": "text cardsTest"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "div",
                    "class": "place hand",
                    "content": [
                      {
                        "type": "div",
                        "class": "cards open n2 hand",
                        "style": "display: none;",
                        "content": [
                          {
                            "type": "div",
                            "class": "hand border",
                            "content": [
                              {
                                "type": "div",
                                "class": "container img-container cards",
                                "content": [
                                  {
                                    "type": "img",
                                    "class": "cardsIMG"
                                  }
                                ]
                              },
                              {
                                "type": "div",
                                "class": "text cardsTest"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "div",
                "class": "container openCards",
                "content": [
                  {
                    "type": "div",
                    "class": "container forDeck",
                    "content": [
                      {
                        "type": "div",
                        "class": "cards close deck",
                        "onclick": "takeCardFromDeck()",
                        "content": [
                          {
                            "type": "div",
                            "class": "container img-container deck",
                            "content": [
                              {
                                "type": "img",
                                "class": "cardsIMG",
                                "src": "img/logo1.svg"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "div",
                        "class": "container checkRoud set",
                        "style": "display: none;",
                        "content": [
                          {
                            "type": "div",
                            "class": "cards open checkRoud n1 ",
                            "content": [
                              {
                                "type": "div",
                                "class": "border",
                                "content": [
                                  {
                                    "type": "div",
                                    "class": "container img-container cards",
                                    "content": [
                                      {
                                        "type": "img",
                                        "class": "cardsIMG deck"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "div",
                                    "class": "text cardsTest"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "div",
                            "class": "cards open checkRoud n2 ",
                            "content": [
                              {
                                "type": "div",
                                "class": "border",
                                "content": [
                                  {
                                    "type": "div",
                                    "class": "container img-container cards",
                                    "content": [
                                      {
                                        "type": "img",
                                        "class": "cardsIMG deck"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "div",
                                    "class": "text cardsTest"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "div",
                            "class": "cards open checkRoud n3 ",
                            "content": [
                              {
                                "type": "div",
                                "class": "border",
                                "content": [
                                  {
                                    "type": "div",
                                    "class": "container img-container cards",
                                    "content": [
                                      {
                                        "type": "img",
                                        "class": "cardsIMG deck"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "div",
                                    "class": "text cardsTest"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "div",
                        "class": "cards deck checkRoud",
                        "onclick": "checkRoud()",
                        "content": [
                          {
                            "type": "div",
                            "class": "container img-container checkRoud",
                            "content": [
                              {
                                "type": "img",
                                "class": "cardsIMG deck",
                                "src": "img/tunnel1.svg"
                              }
                            ]
                          },
                          {
                            "type": "div",
                            "class": "text cardsTest"
                          }
                        ]
                      }

                    ]
                  }
                ]
              },
              {
                "type": "div",
                "class": "container open5cards",
                "content": [
                  {
                    "type": "div",
                    "class": "cards open deck n1",
                    "onclick": "takeCard(1)",
                    "content": [
                      {
                        "type": "div",
                        "class": "border",
                        "content": [
                          {
                            "type": "div",
                            "class": "container img-container cards",
                            "content": [
                              {
                                "type": "img",
                                "class": "cardsIMG deck"
                              }
                            ]
                          },
                          {
                            "type": "div",
                            "class": "text cardsTest"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "div",
                    "class": "cards open deck n2",
                    "onclick": "takeCard(2)",
                    "content": [
                      {
                        "type": "div",
                        "class": "border",
                        "content": [
                          {
                            "type": "div",
                            "class": "container img-container cards",
                            "content": [
                              {
                                "type": "img",
                                "class": "cardsIMG deck"
                              }
                            ]
                          },
                          {
                            "type": "div",
                            "class": "text cardsTest"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "div",
                    "class": "cards open deck n3",
                    "onclick": "takeCard(3)",
                    "content": [
                      {
                        "type": "div",
                        "class": "border",
                        "content": [
                          {
                            "type": "div",
                            "class": "container img-container cards",
                            "content": [
                              {
                                "type": "img",
                                "class": "cardsIMG deck"
                              }
                            ]
                          },
                          {
                            "type": "div",
                            "class": "text cardsTest"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "div",
                    "class": "cards open deck n4",
                    "onclick": "takeCard(4)",
                    "content": [
                      {
                        "type": "div",
                        "class": "border",
                        "content": [
                          {
                            "type": "div",
                            "class": "container img-container cards",
                            "content": [
                              {
                                "type": "img",
                                "class": "cardsIMG deck"
                              }
                            ]
                          },
                          {
                            "type": "div",
                            "class": "text cardsTest"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "div",
                    "class": "cards open deck n5",
                    "onclick": "takeCard(5)",
                    "content": [
                      {
                        "type": "div",
                        "class": "border",
                        "content": [
                          {
                            "type": "div",
                            "class": "container img-container cards",
                            "content": [
                              {
                                "type": "img",
                                "class": "cardsIMG deck"
                              }
                            ]
                          },
                          {
                            "type": "div",
                            "class": "text cardsTest"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "div",
        "class": "container button-container next",
        "content": [
          {
            "type": "div",
            "class": "button next",
            "onclick": "nextRound()",
            "content": "NEXT"
          }
        ]
      }
    ]
  }
]



/// База карточек
//Вагоны
var vagon = [
  { "color": "Locomotive", "count": 14 },
  { "color": "Black", "count": 12 },
  { "color": "White", "count": 12 },
  { "color": "Yellow", "count": 12 },
  { "color": "Red", "count": 12 },
  { "color": "Orange", "count": 12 },
  { "color": "Blue", "count": 12 },
  { "color": "Green", "count": 12 },
  { "color": "Pink", "count": 12 }
];

//Маршруты
var tickets = [
  { "city1": "MADRID", "city2": "MOSKVA", "vp": 25 },
  { "city1": "KOBENHAVN", "city2": "ROMA", "vp": 21 },
  { "city1": "CADIZ", "city2": "STOCKHOLM", "vp": 21 },
  { "city1": "EDINBURGH", "city2": "ATHINA", "vp": 21 },
  { "city1": "MADRID", "city2": "ANGORA", "vp": 21 },
  { "city1": "LISBOA", "city2": "DANZIG", "vp": 20 },
  { "city1": "PALERMO", "city2": "MOSKVA", "vp": 20 },
  { "city1": "BREST", "city2": "PETROGRAD", "vp": 20 },
  { "city1": "LONDON", "city2": "SOCHI", "vp": 20 },
  { "city1": "LONDON", "city2": "ANGORA", "vp": 20 },
  { "city1": "AMSTERDAM", "city2": "ROSTOV", "vp": 19 },
  { "city1": "LONDON", "city2": "MOSKVA", "vp": 19 },
  { "city1": "PAMPLONA", "city2": "KIEW", "vp": 18 },
  { "city1": "PARIS", "city2": "MOSKVA", "vp": 18 },
  { "city1": "RIGA", "city2": "BRINDISI", "vp": 17 },
  { "city1": "PARIS", "city2": "SEVASTOPOL", "vp": 17 },
  { "city1": "PARIS", "city2": "ANGORA", "vp": 17 },
  { "city1": "ROMA", "city2": "MOSKVA", "vp": 17 },
  { "city1": "LONDON", "city2": "CONSTANTINOPLE", "vp": 17 },
  { "city1": "ESSEN", "city2": "ANGORA", "vp": 16 },
  { "city1": "LONDON", "city2": "ATHINA", "vp": 16 },
  { "city1": "MADRID", "city2": "ATHINA", "vp": 16 },
  { "city1": "MUNCHEN", "city2": "PETROGRAD", "vp": 14 },
  { "city1": "MOSKVA", "city2": "ANGORA", "vp": 14 },
  { "city1": "MOSKVA", "city2": "ATHINA", "vp": 14 },
  { "city1": "FRANKFURT", "city2": "SMOLENSK", "vp": 13 },
  { "city1": "CADIZ", "city2": "FRANKFURT", "vp": 13 },
  { "city1": "BERLIN", "city2": "ANGORA", "vp": 13 },
  { "city1": "MADRID", "city2": "WIEN", "vp": 13 },
  { "city1": "MADRID", "city2": "BERLIN", "vp": 13 },
  { "city1": "PARIS", "city2": "ATHINA", "vp": 13 },
  { "city1": "AMSTERDAM", "city2": "WILNO", "vp": 12 },
  { "city1": "BERLIN", "city2": "MOSKVA", "vp": 12 },
  { "city1": "WARZAWA", "city2": "SEVASTOPOL", "vp": 12 },
  { "city1": "STOCKHOLM", "city2": "WILNO", "vp": 12 },
  { "city1": "LISBOA", "city2": "PALERMO", "vp": 12 },
  { "city1": "WIEN", "city2": "MOSKVA", "vp": 12 },
  { "city1": "ATHINA", "city2": "WILNO", "vp": 11 },
  { "city1": "WIEN", "city2": "STOCKHOLM", "vp": 11 },
  { "city1": "BERLIN", "city2": "ATHINA", "vp": 11 },
  { "city1": "ROMA", "city2": "ANGORA", "vp": 11 },
  { "city1": "ESSEN", "city2": "KIEW", "vp": 10 },
  { "city1": "VENEZIA", "city2": "CONSTANTINOPLE", "vp": 10 },
  { "city1": "RIGA", "city2": "BUDAPEST", "vp": 10 },
  { "city1": "ANGORA", "city2": "KHARKOV", "vp": 10 },
  { "city1": "LONDON", "city2": "WIEN", "vp": 10 },
  { "city1": "BRUXELLES", "city2": "STOCKHOLM", "vp": 10 },
  { "city1": "RIGA", "city2": "KHARKOV", "vp": 10 },
  { "city1": "MADRID", "city2": "ROMA", "vp": 10 },
  { "city1": "LONDON", "city2": "MADRID", "vp": 10 },
  { "city1": "LONDON", "city2": "ROMA", "vp": 10 },
  { "city1": "PARIS", "city2": "ROMA", "vp": 10 },
  { "city1": "WIEN", "city2": "ANGORA", "vp": 10 },
  { "city1": "BRUXELLES", "city2": "DANZIG", "vp": 9 },
  { "city1": "BERLIN", "city2": "ROMA", "vp": 9 },
  { "city1": "DIEPPE", "city2": "KOBENHAVN", "vp": 9 },
  { "city1": "EDINBURGH", "city2": "ESSEN", "vp": 9 },
  { "city1": "SOCHI", "city2": "SMYRNA", "vp": 9 },
  { "city1": "BARCELONA", "city2": "BRUXELLES", "vp": 8 },
  { "city1": "BREST", "city2": "VENEZIA", "vp": 8 },
  { "city1": "PALERMO", "city2": "CONSTANTINOPLE", "vp": 8 },
  { "city1": "BARCELONA", "city2": "MUNCHEN", "vp": 8 },
  { "city1": "SMOLENSK", "city2": "ROSTOV", "vp": 8 },
  { "city1": "MARSEILLE", "city2": "ESSEN", "vp": 8 },
  { "city1": "SARAJEVO", "city2": "SEVASTOPOL", "vp": 8 },
  { "city1": "KIEW", "city2": "SOCHI", "vp": 8 },
  { "city1": "BERLIN", "city2": "BUCURESTI", "vp": 8 },
  { "city1": "MADRID", "city2": "DIEPPE", "vp": 8 },
  { "city1": "ROMA", "city2": "SMYRNA", "vp": 8 },
  { "city1": "PARIS", "city2": "WIEN", "vp": 8 },
  { "city1": "MADRID", "city2": "ZURICH", "vp": 8 },
  { "city1": "VENEZIA", "city2": "WARZAWA", "vp": 8 },
  { "city1": "WIEN", "city2": "ATHINA", "vp": 8 },
  { "city1": "LONDON", "city2": "KOBENHAVN", "vp": 8 },
  { "city1": "BREST", "city2": "MARSEILLE", "vp": 7 },
  { "city1": "AMSTERDAM", "city2": "PAMPLONA", "vp": 7 },
  { "city1": "LONDON", "city2": "BERLIN", "vp": 7 },
  { "city1": "PARIS", "city2": "EDINBURGH", "vp": 7 },
  { "city1": "PARIS", "city2": "ZAGRAB", "vp": 7 },
  { "city1": "DANZIG", "city2": "BUDAPEST", "vp": 7 },
  { "city1": "BUCURESTI", "city2": "ERZURUM", "vp": 7 },
  { "city1": "MUNCHEN", "city2": "SARAJEVO", "vp": 7 },
  { "city1": "PARIS", "city2": "MADRID", "vp": 7 },
  { "city1": "PARIS", "city2": "BERLIN", "vp": 7 },
  { "city1": "BUDAPEST", "city2": "ATHINA", "vp": 7 },
  { "city1": "BUDAPEST", "city2": "CONSTANTINOPLE", "vp": 7 },
  { "city1": "ZAGRAB", "city2": "BRINDISI", "vp": 6 },
  { "city1": "WARZAWA", "city2": "SMOLENSK", "vp": 6 },
  { "city1": "ZURICH", "city2": "BRINDISI", "vp": 6 },
  { "city1": "KIEW", "city2": "PETROGRAD", "vp": 6 },
  { "city1": "ZURICH", "city2": "BUDAPEST", "vp": 6 },
  { "city1": "AMSTERDAM", "city2": "VENEZIA", "vp": 6 },
  { "city1": "SOFIA", "city2": "KIEW", "vp": 6 },
  { "city1": "WIEN", "city2": "ROMA", "vp": 6 },
  { "city1": "ROMA", "city2": "ATHINA", "vp": 6 },
  { "city1": "BUDAPEST", "city2": "SOFIA", "vp": 5 },
  { "city1": "ROSTOV", "city2": "ERZURUM", "vp": 5 },
  { "city1": "SOFIA", "city2": "SMYRNA", "vp": 5 },
  { "city1": "FRANKFURT", "city2": "KOBENHAVN", "vp": 5 },
  { "city1": "ATHINA", "city2": "ANGORA", "vp": 5 },
  { "city1": "WARZAWA", "city2": "BUDAPEST", "vp": 5 },
  { "city1": "DIEPPE", "city2": "MARSEILLE", "vp": 5 },
  { "city1": "PARIS", "city2": "MUNCHEN", "vp": 5 },
  { "city1": "PARIS", "city2": "VENEZIA", "vp": 5 },
  { "city1": "MUNCHEN", "city2": "BUDAPEST", "vp": 4 },
  { "city1": "BERLIN", "city2": "WIEN", "vp": 3 },
  { "city1": "LONDON", "city2": "PARIS", "vp": 3 }
];

var clickSound = new Audio('audio/click.mp3');
var shuffleSound = new Audio('audio/shuffle.wav');
var takeSound = new Audio('audio/take.wav');
var pageElements = document.querySelectorAll('.page');
var pageArray = Array.from(pageElements);
var countPlayers = 5;
var playerNumber = 0;
var pageN = 1;
var roundN = 0;
var cityName = [
  { "city": "EDINBURGH", "style": "top: 1%; left: 12.5%;" },
  { "city": "LONDON", "style": "top: 23%; left: 18%;" },
  { "city": "AMSTERDAM", "style": "top: 21%; left: 28%;" },
  { "city": "ESSEN", "style": "top: 25%; left: 37%;" },
  { "city": "KOBENHAVN", "style": "top: 11%; left: 42%;" },
  { "city": "STOCKHOLM", "style": "top: 1%; left: 52%;" },
  { "city": "RIGA", "style": "top: 5%; left: 64%;" },
  { "city": "PETROGRAD", "style": "top: 4%; left: 81%;" },
  { "city": "MOSKVA", "style": "top: 20%; left: 90%;" },
  { "city": "SMOLENSK", "style": "top: 24%; left: 82%;" },
  { "city": "WILNO", "style": "top: 22%; left: 71%;" },
  { "city": "WARZAWA", "style": "top: 26%; left: 61%;" },
  { "city": "DANZIG", "style": "top: 16%; left: 57%;" },
  { "city": "BERLIN", "style": "top: 27%; left: 46%;" },
  { "city": "FRANKFURT", "style": "top: 36.5%; left: 34.5%;" },
  { "city": "BRUXELLES", "style": "top: 31%; left: 25.5%;" },
  { "city": "DIEPPE", "style": "top: 35.5%; left: 18%;" },
  { "city": "BREST", "style": "top: 40%; left: 8%;" },
  { "city": "PARIS", "style": "top: 43%; left: 22.5%;" },
  { "city": "ZURICH", "style": "top: 50%; left: 33%;" },
  { "city": "MUNCHEN", "style": "top: 42%; left: 41%;" },
  { "city": "WIEN", "style": "top: 42%; left: 51%;" },
  { "city": "BUDAPEST", "style": "top: 48%; left: 57.5%;" },
  { "city": "KIEW", "style": "top: 36%; left: 75%;" },
  { "city": "KHARKOV", "style": "top: 42%; left: 86%;" },
  { "city": "ROSTOV", "style": "top: 49%; left: 92%;" },
  { "city": "SOCHI", "style": "top: 60%; left: 92%;" },
  { "city": "SEVASTOPOL", "style": "top: 58%; left: 82.5%;" },
  { "city": "BUCURESTI", "style": "top: 56%; left: 69%;" },
  { "city": "SOFIA", "style": "top: 66%; left: 64%;" },
  { "city": "SARAJEVO", "style": "top: 66%; left: 57%;" },
  { "city": "ZAGRAB", "style": "top: 57%; left: 49%;" },
  { "city": "VENEZIA", "style": "top: 55%; left: 40%;" },
  { "city": "PAMPLONA", "style": "top: 63%; left: 15%;" },
  { "city": "MADRID", "style": "top: 75%; left: 7%;" },
  { "city": "LISBOA", "style": "top: 78%; left: 0%;" },
  { "city": "CADIZ", "style": "top: 85%; left: 5%;" },
  { "city": "BARCELONA", "style": "top: 78%; left: 17.5%;" },
  { "city": "MARSEILLE", "style": "top: 65%; left: 32%;" },
  { "city": "ROMA", "style": "top: 68%; left: 42%;" },
  { "city": "PALERMO", "style": "top: 82%; left: 42%;" },
  { "city": "BRINDISI", "style": "top: 70%; left: 51%;" },
  { "city": "ATHINA", "style": "top: 81%; left: 63%;" },
  { "city": "SMYRNA", "style": "top: 87%; left: 70.5%;" },
  { "city": "CONSTANTINOPLE", "style": "top: 75%; left: 74%;" },
  { "city": "ANGORA", "style": "top: 82%; left: 82%;" },
  { "city": "ERZURUM", "style": "top: 80%; left: 90%;" }
];
var shuffleLowTickets = [];
var shuffleHiTickets = [];
var roundRoutes = [];
var buttonNoneActive = [];
var deckVagons = [];
var cardsOpen = [];
var cardsHand = [];
var locoFromOpen = 0;
var checkCardsOpen = 1;

function newDeckVagons() {
  vagon.forEach(card => {
    Array.from({ length: card.count }, () => deckVagons.push({ "color": card.color }));
  });
  shuffleArray(deckVagons);
  // Выводим результат
  console.log(deckVagons);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function lowTickets() {
  // Фильтруем билеты с vp меньше или равным maxVp
  const temp = tickets.filter(ticket => ticket.vp <= 15);
  return shuffleArray(temp);
}

function hiTickets() {
  // Фильтруем билеты с vp , больше 16
  const temp = tickets.filter(ticket => ticket.vp >= 16);
  return shuffleArray(temp);
}

function makeTicketDec() {
  shuffleLowTickets = lowTickets();
  shuffleHiTickets = hiTickets();
  console.log("Короткие марщруты:", shuffleLowTickets);
  console.log("Длинные маршруты:", shuffleHiTickets);
}

function takeAndRemove(array, count) {
  const takenElements = array.slice(0, count);
  array.splice(0, count);
  return takenElements;
}

function selectRoutes() {
  roundRoutes = [];
  roundRoutes = takeAndRemove(shuffleLowTickets, 5);
  if (roundN === 0) {
    roundRoutes = roundRoutes.concat(takeAndRemove(shuffleHiTickets, 2));
  }
  console.log("Выбранные маршруты:", roundRoutes);
}

function cityMapSettings() {
  selectRoutes();

  buttonTicketName();
  console.log("Короткие марщруты:", shuffleLowTickets);
  console.log("Длинные маршруты:", shuffleHiTickets);
}

function showCityMap(ticketIndex) {
  const city1 = document.querySelector(`.city1.city-marker${ticketIndex + 1}`);;
  const city2 = document.querySelector(`.city2.city-marker${ticketIndex + 1}`);;
  const city1Namber = document.querySelector(`.cityNamber.n1.version${ticketIndex + 1}`);
  const city2Namber = document.querySelector(`.cityNamber.n2.version${ticketIndex + 1}`);
  const city1Name = document.querySelector(`.cityName.n1.version${ticketIndex + 1}`);
  const city2Name = document.querySelector(`.cityName.n2.version${ticketIndex + 1}`);

  const styleCity1 = cityName.find(city => city.city === roundRoutes[ticketIndex].city1)?.style;
  const styleCity2 = cityName.find(city => city.city === roundRoutes[ticketIndex].city2)?.style;
  city1.style = styleCity1;
  city2.style = styleCity2;

  city1Name.textContent = roundRoutes[ticketIndex].city1;
  city2Name.textContent = roundRoutes[ticketIndex].city2;
  city1Namber.textContent = cityName.findIndex(city => city.city === city1Name.textContent) + 1;
  city2Namber.textContent = cityName.findIndex(city => city.city === city2Name.textContent) + 1;
}

function swhowPlayerNumber() {
  const playerName = document.getElementById('playerName');
  playerName.textContent = "Player " + playerNumber;
}

function buttonTicketName() {
  const buttonTickets = document.getElementsByClassName("button ticket");
  if (roundN !== 0) {
    buttonTickets[5].style.display = "none";
    buttonTickets[6].style.display = "none";
  }

  roundRoutes.forEach(function (ticket, index) {
    buttonTickets[index].textContent = ticket.city1 + " - " + ticket.city2 + " = " + ticket.vp;
  });
}


function handleButtonClick(ticketIndex) {
  const mapContainer = document.querySelector('.all-city-container');
  const button = document.querySelector(`.ticket.n${ticketIndex + 1}`);

  if (button.classList.contains("nonactive")) {

  } else {
    playSound(clickSound);

    if (ticketIndex === 5) {
      buttonNoneActive = document.querySelector(`.ticket.n${ticketIndex + 2}`)
      buttonNoneActive.classList.toggle('nonactive')
    } else if (ticketIndex === 6) {
      buttonNoneActive = document.querySelector(`.ticket.n${ticketIndex}`)
      buttonNoneActive.classList.toggle('nonactive')
    }

    button.classList.toggle('active');

    const existingCityMarker1 = document.querySelector(`.city1.city-marker${ticketIndex + 1}`);
    const existingCityMarker2 = document.querySelector(`.city2.city-marker${ticketIndex + 1}`);

    if (existingCityMarker1) {
      existingCityMarker1.remove();
      existingCityMarker2.remove();
    } else {

      for (let i = 1; i <= 2; i++) {
        const cityMarker = document.createElement('div');
        cityMarker.classList.add(`city-marker`, `city${i}`, `city-marker${ticketIndex + 1}`);

        const cityNumber = document.createElement('div');
        cityNumber.classList.add('cityNamber', `n${i}`, `version${ticketIndex + 1}`);

        const cityName = document.createElement('div');
        cityName.classList.add('cityName', `n${i}`, `version${ticketIndex + 1}`);

        cityMarker.appendChild(cityNumber);
        cityMarker.appendChild(cityName);
        mapContainer.appendChild(cityMarker);
      }
      showCityMap(ticketIndex);
    }
  }
}

function cleanButtonStyle() {
  const mapContainer = document.querySelector('.all-city-container');
  mapContainer.innerHTML = '';

  // Reset all buttons to initial state
  for (let i = 1; i <= 7; i++) {
    const button = document.querySelector(`.ticket.n${i}`);
    button.classList.remove('active');
    button.classList.remove('nonactive');
  }
}

function nextPlayerTicket() {
  const ticketElements = document.querySelectorAll('.ticket');
  const statusArray = Array.from(ticketElements).map(element => element.classList.contains('active') ? 1 : 0);

  const startIndex = 0;
  const endIndex = 5;
  const endIndexBlue = 7;

  const selectedRange = statusArray.slice(startIndex, endIndex + 1);
  const activeButtons = selectedRange.filter(element => element === 1).length;

  const selectedRange1 = statusArray.slice(endIndex + 1, endIndexBlue + 1);
  const activeBlueButtons = selectedRange1.filter(element => element === 1).length;

  if (roundN === 0 && ((activeButtons >= 2 && activeBlueButtons >= 1) || (activeButtons >= 3 && activeBlueButtons === 0))) {

    const updatedRoundRoutes = roundRoutes.filter((element, index) => statusArray[index] !== 1);
    // Выводим обновленный массив roundRoutes
    if (activeBlueButtons === 0) {
      // Если activeBlueButtons не содержит элементов, удаляем 2 последних элемента
      updatedRoundRoutes.splice(-2);
    } else {
      // Если activeBlueButtons содержит элементы, удаляем 1 последний элемент
      updatedRoundRoutes.pop();
    }
    // Переносим все элементы из updatedRoundRoutes в конец shuffleLowTickets
    shuffleLowTickets.push(...updatedRoundRoutes);

    console.log('Сброшенные маршруты: ' + JSON.stringify(updatedRoundRoutes));

    if (playerNumber >= countPlayers || roundN > 0) {
      playSound(shuffleSound);
      pageN++;
      renderPage(pageN);

      if (roundN === 0) {
        open5Cards();
        locomotiv3();
        roundN = 1;
      } else {
        roundN++;
        for (let i = 1; i <= 6; i++) {
          drawCard('.cards.open.deck', i, i, cardsOpen);
        }
      }
    } else {
      playSound(takeSound);
    }
    if (pageN === 3) {
      playSound(takeSound);
      cleanButtonStyle();
      cityMapSettings();
    }
  } else if (activeButtons > 0 && roundN > 0) {
    playSound(takeSound);
    pageN++;
    renderPage(pageN);
    for (let i = 1; i <= 6; i++) {
      drawCard('.cards.open.deck', i, i, cardsOpen);
    }
  } else {
    openPopup('chuseway')
    playerNumber--;
  }
  nextRoundText();

}

function drawCard(name, cardn, number, deck) {
  // Выбираем все карты с указанным именем
  const allCards = document.querySelectorAll(name);
  console.log(allCards);

  // Проверяем, существует ли карта с указанным номером
  if (cardn <= allCards.length) {
    // Получаем нужную карту
    const targetCard = allCards[cardn - 1];

    // Получаем элементы внутри карты
    const cardElement = targetCard.querySelector('.cardsIMG');
    const cardElementColor = targetCard.querySelector('.border');
    const textElement = targetCard.querySelector('.cardsTest');

    // Проверяем, что все элементы найдены
    if (cardElement && cardElementColor && textElement) {
      // Применяем стили и текст согласно вашей логике
      cardElement.src = 'img/' + deck[number - 1].color.toLowerCase() + '.svg';
      cardElementColor.style.border = '0.4vh solid var(--' + deck[number - 1].color.toLowerCase() + ')';
      cardElementColor.style.boxShadow = 'inset 0 0 0.2vh var(--' + deck[number - 1].color.toLowerCase() + ')';
      textElement.textContent = deck[number - 1].color.toUpperCase();
    } else {
      console.error("Element not found or selector is incorrect.");
    }
  } else {
    console.error('Card with number', cardn, 'not found.');
  }
}


function replaceCard(index) {
  cardsOpen[index] = deckVagons[0];
  deckVagons.splice(0, 1);
  console.log('Колода вагонов: ' + JSON.stringify(deckVagons));
  console.log('Открытые карты справа: ' + JSON.stringify(cardsOpen));
}

function locomotiv3() {
  const locomotiveCount = cardsOpen.filter(card => card.color === 'Locomotive').length;
  if (locomotiveCount > 2) {
    playSound(shuffleSound);

    // Подсветить все карты локомотивов
    cardsOpen.forEach((card, index) => {
      if (card.color === 'Locomotive') {
        highlightLocomotiveCard(index);
      }
    });
    setTimeout(() => {
      // Снять подсветку перед новой раздачей
      clearLocomotiveHighlight();

      // Выполнить новую раздачу
      open5Cards();
    }, 1000);
  }
}

function highlightLocomotiveCard(index) {
  const locomotiveCardElement = document.querySelector(`.cards.open.n${index + 1}.deck .border`);
  locomotiveCardElement.style.backgroundColor = '#2f7fc3';
}

function clearLocomotiveHighlight() {
  const locomotiveCardElements = document.querySelectorAll('.cards.open.deck .border');
  locomotiveCardElements.forEach(cardElement => {
    cardElement.style.backgroundColor = ''; // Очистить цвет
  });
}

function open5Cards() {
  playSound(shuffleSound);

  cardsOpen = [];
  for (let i = 1; i <= 5; i++) {
    drawCard('.cards.open.deck', i, 1, deckVagons);
    cardsOpen.push(deckVagons[0]);
    deckVagons.splice(0, 1)
    if (deckVagons.length <= 0) {
      newDeckVagons();
      playSound(shuffleSound);
    }
  }
  console.log('Колода вагонов: ' + JSON.stringify(deckVagons));
}

function takeCard(number) {

  if (cardsHand.length < 2) {
    if (cardsHand.length > 0 && cardsOpen[number - 1].color === 'Locomotive') {
      playSound(clickSound);
    } else {
      if (cardsHand.length === 0 || (cardsHand.length === 1 && locoFromOpen !== 1)) {
        playSound(takeSound);
        cardsHand.push(cardsOpen[number - 1]);
        replaceCard(number - 1);
        drawCard('.cards.open.deck', number, number, cardsOpen);
        drawCard('.cards.open.hand', cardsHand.length, cardsHand.length, cardsHand)
        hideHand(cardsHand.length);
        if (cardsHand.length > 0 && cardsHand[cardsHand.length - 1].color === 'Locomotive') {
          locoFromOpen = 1;
          console.log(locoFromOpen);
        }
        locomotiv3();
      } else {
        playSound(clickSound);
      }
    }



  } else {
    playSound(clickSound);
  }
  if (deckVagons.length <= 0) {
    newDeckVagons();
    playSound(shuffleSound);
  }
  console.log(cardsHand);
}

function takeCardFromDeck() {
  if (cardsHand.length < 2 && locoFromOpen === 0) {
    playSound(takeSound);

    cardsHand.push(deckVagons[0]);
    drawCard('.cards.open.hand', cardsHand.length, 1, deckVagons);
    hideHand(cardsHand.length);
    deckVagons.splice(0, 1);
    console.log('Колода вагонов: ' + JSON.stringify(deckVagons));
  } else {
    playSound(clickSound);
  }
  if (deckVagons.length <= 0) {
    newDeckVagons();
    playSound(shuffleSound);
  }
}

function toggleVisibility(selector) {
  var element = document.querySelector(selector);
  if (element) {
    var isHidden = element.style.display === 'none';
    element.style.display = isHidden ? '' : 'none';
  }
}

function hideHand(number) {
  var selector = '.cards.open.n' + number + '.hand';
  toggleVisibility(selector);

}

function nextRoundText() {
  playSound(clickSound);
  if (roundN > 0 && pageN === 3) {

  } else {

    if (playerNumber >= countPlayers) {
      playerNumber = 1;
    } else {
      playerNumber++;
    }
  }
  const textRound = document.getElementById('roundNumber');
  const textPlayer = document.getElementById('playerN');
  if (textRound) {
    textRound.textContent = 'ROUND ' + roundN;
  }
  textPlayer.textContent = 'PLAYER ' + String(playerNumber);

}

function nextRound() {
  console.log('test');
  if (cardsHand.some(card => card.color === 'Locomotive') || cardsHand.length > 1) {
    playSound(takeSound);

    if (cardsHand.length > 0) {
      hideHand(1);
    }
    if (cardsHand.length > 1) {
      hideHand(2);
    }
    cardsHand = [];

    roundN++;
    nextRoundText();
    locoFromOpen = 0;
  } else if (cardsHand.length === 1) {
    playSound(clickSound);
  } else if (checkCardsOpen === 1) {
    checkCardsOpen = 0;
    roundN++;
    nextRoundText();
    toggleVisibility('.container.checkRoud.set');
    toggleVisibility('.cards.deck.checkRoud');
  } else {
    openPopup('way');
  }
}

function nextCardsSetup() {
  if (playerNumber >= countPlayers) {
    playSound(shuffleSound);
    pageN++;
    playerNumber = 0;
    renderPage(pageN);
    makeTicketDec();
    nextRoundText();
    cityMapSettings();
  } else {
    playSound(takeSound);
    nextRoundText();
    takeDeckVagons('.page.n2 .hand .cards.open');
  }
}



// Новая игра
function newGame() {
  pageN = 1;
  newDeckVagons();
  renderPage(pageN);
}
newGame();

function selectPlayers(players) {
  playSound(shuffleSound);
  countPlayers = players;
  pageN++;
  renderPage(pageN);
  takeDeckVagons('.page.n2 .hand .cards.open');
  nextRoundText();
  console.log("Игроков - " + countPlayers);
}

function back() {
  playSound(clickSound);
  //if (pageN === 1) {
  reloadPage();
  //} else {
  //newGame();
  //}
}

function switchPage(pageNumber) {
  // Скрываем все страницы
  var allPages = document.querySelectorAll('.page');
  allPages.forEach(function (page) {
    page.style.display = 'none';
  });

  // Показываем только выбранную страницу
  var selectedPage = document.querySelector('.page.n' + pageNumber);
  if (selectedPage) {
    selectedPage.style.display = 'block';
  }
}

function newTickets() {
  playSound(shuffleSound);
  pageN = 3;
  renderPage(pageN);
  cityMapSettings();
}

function takeDeckVagons(name) {
  for (let i = 0; i < 3; i++) {
    replaceCard(i);
    drawCard(name, i + 1, i + 1, cardsOpen);
  }
}


function checkRoud() {
  if (cardsHand.length === 0) {
    openPopup('checkWay');
  } else {
    playSound(clickSound);
  }
}


// Функция для отрисовки страницы по номеру
function renderPage(pageNumber) {
  var contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";

  var currentPageData = ui[pageNumber - 1];
  if (currentPageData) {
    buildPage(currentPageData, contentContainer);

    console.log("Страница " + pageNumber);  // Используем переданный номер страницы
  } else {
    console.error("Страница не найдена");
  }
}

// Функция для построения страницы на основе данных
function buildPage(pageData, container) {
  if (pageData.type === "page") {
    var pageElement = document.createElement("div");
    pageElement.className = pageData.class;

    if (pageData.content) {
      buildElements(pageData.content, pageElement);
    }

    container.appendChild(pageElement);
  }
}

// Функция для построения массива элементов на основе данных
function buildElements(elementsData, container) {
  if (Array.isArray(elementsData)) {
    elementsData.forEach(function (elementData) {
      buildElement(elementData, container);
    });
  } else {
    buildElement(elementsData, container);
  }
}

// Функция для построения элемента на основе данных
function buildElement(elementData, container) {
  var element;

  if (typeof elementData === "string") {
    // Если контент - это строка, создаем текстовый узел
    element = document.createTextNode(elementData);
  } else {
    switch (elementData.type) {
      case "div":
        element = document.createElement("div");
        element.className = elementData.class;

        if (elementData.content) {
          buildElements(elementData.content, element);
        }
        if (elementData.id) {
          element.id = elementData.id;
        }
        if (elementData.onclick) {
          element.onclick = function () {
            eval(elementData.onclick);
          };
        }
        if (elementData.style) {
          element.style.cssText = elementData.style;
        }

        break;
      case "img":
        element = document.createElement("img");
        element.className = elementData.class;
        element.src = elementData.src;
        break;
      case "h1text":
        element = document.createElement("h1text");
        element.textContent = elementData.content;
        break;
      case "h2text":
        element = document.createElement("h2text");
        element.textContent = elementData.content;
        break;
      case "button":
        element = document.createElement("button");
        element.className = elementData.class;
        element.textContent = elementData.content;


      default:
        console.error("Неизвестный тип элемента: " + elementData.type);
        return;
    }
  }

  container.appendChild(element);
}











function openPopup(page) {
  playSound(clickSound);
  var textPop1 = document.getElementById("first");
  var textPop2 = document.getElementById("second");
  var popupBut1 = document.getElementById("button1");
  var popupBut2 = document.getElementById("button2");

  // Установка общих стилей для всех страниц
  document.getElementById('overlay').style.display = 'flex';

  // Параметризация контента в зависимости от переданной страницы
  if (page === 'way') {
    textPop1.innerText = "PUT";
    textPop2.innerText = "VAGONS?";
    popupBut1.innerText = "PUT";
    popupBut2.innerText = "BACK";
  } else if (page === 'ticket' && cardsHand.length === 0) {
    textPop1.innerText = "DO YOU WANT";
    textPop2.innerText = "NEW TICKETS?";
    popupBut1.innerText = "TAKE";
    popupBut2.innerText = "BACK";
  } else if (page === 'chuseway') {
    textPop1.innerText = "Please, choose at least 3 tickets,";
    textPop2.innerText = "if you did not choose a blue ticket, or at least 2 tickets if you chose a blue ticket.";
    popupBut1.style.display = 'none';
    popupBut2.innerText = "OK";
  } else if (page === "checkWay") {
    textPop1.innerText = "DO YOU WANT";
    textPop2.innerText = "CHECK WAY?";
    popupBut1.innerText = "CHECK";
    popupBut2.innerText = "BACK";
  } else {
    document.getElementById('overlay').style.display = 'none';
  }
}

function closePopup() {
  playSound(clickSound);
  var popupBut1 = document.getElementById("button1");
  popupBut1.style.display = 'flex';
  document.getElementById('overlay').style.display = 'none';
}

function performAction(buttonId) {


  var buttonText = document.getElementById("button" + buttonId).innerText;

  if (buttonId === 1) {
    if (buttonText === "PUT") {
      playSound(clickSound);
      roundN++;
      nextRoundText();

    } else if (buttonText === "TAKE") {
      roundN++;
      newTickets();
      nextRoundText();
    } else if (buttonText === "CHECK") {
      checkCardsOpen = 1;
      playSound(takeSound);
      toggleVisibility('.container.checkRoud.set');
      toggleVisibility('.cards.deck.checkRoud');
      takeDeckVagons('.cards.open.checkRoud');
    }
  } else if (buttonId === 2) {

  }
  closePopup();
}



// Функция для воспроизведения звука
function playSound(sound) {
  // Перематываем аудио на начало (если требуется повторное воспроизведение)
  sound.currentTime = 0;
  // Воспроизводим звук
  sound.play();
}

// Функция для перезагрузки страницы
function reloadPage() {
  location.reload();
}