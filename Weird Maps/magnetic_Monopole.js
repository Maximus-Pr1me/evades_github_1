var magnetic_monopole = {
    name: "Magnetic Monopole",
    properties: {
      background_color: [
        191,
        0,
        255,
        125
      ]
    },
    areas: [
      {
        properties: {
          magnetism: true
        },
        x: 0,
        y: 50000,
        zones: [
          {
            type: "teleport",
            x: 0,
            y: 0,
            translate: {
              x: 0,
              y: -1050
            },
            width: 320,
            height: 32
          },
          {
            type: "teleport",
            x: 0,
            y: 160,
            translate: {
              x: 0,
              y: 1200
            },
            width: 320,
            height: 32
          },
          {
            type: "safe",
            x: 0,
            y: 32,
            width: 320,
            height: 128
          },
          {
            type: "safe",
            x: 320,
            y: 0,
            width: 32,
            height: 192
          },
          {
            type: "active",
            x: 352,
            y: 0,
            width: 2560,
            height: 192,
            spawner: [
              {
                radius: 15,
                speed: 2.5,
                count: 2,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2912,
            y: 0,
            width: 256,
            height: 192
          },
          {
            type: "exit",
            x: 3168,
            y: 0,
            translate: {
              x: 200,
              y: -49900
            },
            width: 64,
            height: 192
          },
          {
            type: "exit",
            x: 1600,
            y: 0,
            translate: {
              x: 512,
              y: 115648
            },
            width: 32,
            height: 32
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 3232,
        y: 0,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -200,
              y: 49930
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 24,
                speed: 1,
                count: 6,
                types: [
                  "normal"
                ]
              },
              {
                radius: 12,
                speed: 4,
                count: 3,
                types: [
                  "normal"
                ]
              },
              {
                radius: 6,
                speed: 1,
                count: 1,
                types: [
                  "magnetic_reduction"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 6432,
        y: 0,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 24,
                speed: 1.5,
                count: 3,
                types: [
                  "normal"
                ]
              },
              {
                radius: 12,
                speed: 0.5,
                count: 4,
                types: [
                  "normal"
                ]
              },
              {
                radius: 36,
                speed: 2.5,
                count: 2,
                types: [
                  "normal"
                ]
              },
              {
                radius: 6,
                speed: 2,
                count: 3,
                types: [
                  "magnetic_reduction"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 9632,
        y: 0,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 24,
                speed: 1.5,
                count: 8,
                types: [
                  "normal"
                ]
              },
              {
                radius: 48,
                speed: 1.5,
                count: 4,
                types: [
                  "normal"
                ]
              },
              {
                radius: 6,
                speed: 7,
                count: 2,
                types: [
                  "magnetic_reduction"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 12832,
        y: 0,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 9,
                speed: 2,
                count: 8,
                types: [
                  "normal"
                ]
              },
              {
                radius: 6,
                speed: 2.5,
                count: 10,
                types: [
                  "magnetic_reduction"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 16032,
        y: 0,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 36,
                speed: 7,
                count: 4,
                types: [
                  "normal"
                ]
              },
              {
                radius: 7,
                speed: 1,
                count: 9,
                types: [
                  "normal"
                ]
              },
              {
                radius: 6,
                speed: 1,
                count: 2,
                types: [
                  "magnetic_reduction"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 19232,
        y: 0,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 320
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 288,
            height: 352
          },
          {
            type: "safe",
            x: 0,
            y: 320,
            width: 64,
            height: 32
          },
          {
            type: "active",
            x: 0,
            y: 352,
            width: 352,
            height: 2560,
            spawner: [
              {
                radius: 12,
                speed: 4,
                count: 5,
                types: [
                  "normal"
                ]
              },
              {
                radius: 12,
                speed: 1,
                count: 8,
                types: [
                  "magnetic_reduction"
                ]
              },
              {
                radius: 70,
                speed: 2,
                count: 2,
                types: [
                  "magnetic_reduction"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 0,
            y: 2912,
            width: 288,
            height: 352
          },
          {
            type: "safe",
            x: 288,
            y: 2912,
            width: 64,
            height: 32
          },
          {
            type: "exit",
            x: 288,
            y: 2944,
            translate: {
              x: 160,
              y: 108460
            },
            width: 64,
            height: 320
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 19584,
        y: 111392,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: -108480
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 12,
                speed: 2,
                count: 4,
                types: [
                  "normal"
                ]
              },
              {
                radius: 18,
                speed: 1,
                count: 3,
                types: [
                  "normal"
                ]
              },
              {
                radius: 12,
                speed: 2,
                count: 2,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 22784,
        y: 111392,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 18,
                speed: 3,
                count: 3,
                types: [
                  "normal"
                ]
              },
              {
                radius: 24,
                speed: 4,
                count: 5,
                types: [
                  "normal"
                ]
              },
              {
                radius: 6,
                speed: 5,
                count: 1,
                types: [
                  "magnetic_reduction"
                ]
              },
              {
                radius: 18,
                speed: 2,
                count: 2,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 25984,
        y: 111392,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 12,
                speed: 6,
                count: 5,
                types: [
                  "normal"
                ]
              },
              {
                radius: 30,
                speed: 2,
                count: 4,
                types: [
                  "normal"
                ]
              },
              {
                radius: 12,
                speed: 6,
                count: 2,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 30,
                speed: 2,
                count: 2,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 29184,
        y: 111392,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 12,
                speed: 6,
                count: 3,
                types: [
                  "normal"
                ]
              },
              {
                radius: 18,
                speed: 5,
                count: 3,
                types: [
                  "normal"
                ]
              },
              {
                radius: 24,
                speed: 4,
                count: 2,
                types: [
                  "normal"
                ]
              },
              {
                radius: 30,
                speed: 3,
                count: 2,
                types: [
                  "normal"
                ]
              },
              {
                radius: 36,
                speed: 2,
                count: 1,
                types: [
                  "normal"
                ]
              },
              {
                radius: 12,
                speed: 7,
                count: 1,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 18,
                speed: 6.5,
                count: 1,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 24,
                speed: 5.5,
                count: 1,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 30,
                speed: 4.5,
                count: 1,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 36,
                speed: 3.5,
                count: 1,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 32384,
        y: 111392,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 6,
                speed: 9,
                count: 5,
                types: [
                  "magnetic_reduction"
                ]
              },
              {
                radius: 24,
                speed: 2,
                count: 5,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 35584,
        y: 111392,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 30,
                speed: 1,
                count: 8,
                types: [
                  "normal"
                ]
              },
              {
                radius: 30,
                speed: 11,
                count: 3,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 38784,
        y: 108480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 2944,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 320
          },
          {
            type: "safe",
            x: 64,
            y: 2912,
            width: 288,
            height: 352
          },
          {
            type: "safe",
            x: 0,
            y: 2912,
            width: 64,
            height: 32
          },
          {
            type: "active",
            x: 0,
            y: 352,
            width: 352,
            height: 2560,
            spawner: [
              {
                radius: 12,
                speed: 5,
                count: 4,
                types: [
                  "normal"
                ]
              },
              {
                radius: 42,
                speed: 4,
                count: 2,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 70,
                speed: 2,
                count: 2,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 4.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 0,
            y: 0,
            width: 288,
            height: 352
          },
          {
            type: "safe",
            x: 288,
            y: 320,
            width: 64,
            height: 32
          },
          {
            type: "exit",
            x: 288,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 320
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 39136,
        y: 108480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 54,
                speed: 3,
                count: 2,
                types: [
                  "normal"
                ]
              },
              {
                radius: 30,
                speed: 5,
                count: 2,
                types: [
                  "positive_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 42336,
        y: 108480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 24,
                speed: 4,
                count: 6,
                types: [
                  "normal"
                ]
              },
              {
                radius: 12,
                speed: 4,
                count: 1,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 12,
                speed: 4,
                count: 1,
                types: [
                  "positive_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 45536,
        y: 108480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 6,
                speed: 3,
                count: 8,
                types: [
                  "magnetic_reduction"
                ]
              },
              {
                radius: 36,
                speed: 3,
                count: 1,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 12,
                speed: 6,
                count: 3,
                types: [
                  "positive_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 48736,
        y: 108480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 8,
                speed: 3,
                count: 13,
                types: [
                  "normal"
                ]
              },
              {
                radius: 10,
                speed: 5,
                count: 2,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 10,
                speed: 5,
                count: 2,
                types: [
                  "positive_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 51936,
        y: 108480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 12,
                speed: 6,
                count: 9,
                types: [
                  "normal"
                ]
              },
              {
                radius: 18,
                speed: 3,
                count: 3,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 36,
                speed: 8,
                count: 2,
                types: [
                  "positive_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 55136,
        y: 108480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 12,
                speed: 1.5,
                count: 15,
                types: [
                  "normal"
                ]
              },
              {
                radius: 36,
                speed: 10,
                count: 1,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 36,
                speed: 10,
                count: 1,
                types: [
                  "positive_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 58336,
        y: 108480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 320
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 288,
            height: 352
          },
          {
            type: "safe",
            x: 0,
            y: 320,
            width: 64,
            height: 32
          },
          {
            type: "active",
            x: 0,
            y: 352,
            width: 352,
            height: 2560,
            spawner: [
              {
                radius: 12,
                speed: 6,
                count: 4,
                types: [
                  "normal"
                ]
              },
              {
                radius: 24,
                speed: 4,
                count: 2,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 24,
                speed: 4,
                count: 1,
                types: [
                  "positive_magnetic_sniper"
                ]
              },
              {
                radius: 70,
                speed: 2,
                count: 2,
                types: [
                  "positive_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 0,
            y: 2912,
            width: 288,
            height: 352
          },
          {
            type: "safe",
            x: 288,
            y: 2912,
            width: 64,
            height: 32
          },
          {
            type: "exit",
            x: 288,
            y: 2944,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 320
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 58688,
        y: 111392,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 24,
                speed: 2,
                count: 5,
                types: [
                  "normal"
                ]
              },
              {
                radius: 6,
                speed: 2,
                count: 3,
                types: [
                  "magnetic_nullification"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 61888,
        y: 111392,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 18,
                speed: 0.5,
                count: 5,
                types: [
                  "normal"
                ]
              },
              {
                radius: 6,
                speed: 3,
                count: 6,
                types: [
                  "magnetic_reduction"
                ]
              },
              {
                radius: 6,
                speed: 3,
                count: 3,
                types: [
                  "magnetic_nullification"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 65088,
        y: 111392,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 12,
                speed: 4.5,
                count: 10,
                types: [
                  "normal"
                ]
              },
              {
                radius: 6,
                speed: 9,
                count: 2,
                types: [
                  "magnetic_nullification"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 68288,
        y: 111392,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 24,
                speed: 2,
                count: 5,
                types: [
                  "normal"
                ]
              },
              {
                radius: 36,
                speed: 3,
                count: 4,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 6,
                speed: 2,
                count: 6,
                types: [
                  "magnetic_nullification"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 71488,
        y: 111392,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 9,
                speed: 7,
                count: 4,
                types: [
                  "normal"
                ]
              },
              {
                radius: 12,
                speed: 11,
                count: 2,
                types: [
                  "positive_magnetic_sniper"
                ]
              },
              {
                radius: 6,
                speed: 7,
                count: 3,
                types: [
                  "magnetic_nullification"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 74688,
        y: 111392,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 2560,
            height: 352,
            spawner: [
              {
                radius: 15,
                speed: 5,
                count: 3,
                types: [
                  "normal"
                ]
              },
              {
                radius: 15,
                speed: 5,
                count: 3,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 5,
                count: 3,
                types: [
                  "positive_magnetic_sniper"
                ]
              },
              {
                radius: 6,
                speed: 5,
                count: 3,
                types: [
                  "magnetic_nullification"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 2880,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 3136,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          magnetism: true
        },
        x: 77888,
        y: 108480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 2944,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 320
          },
          {
            type: "safe",
            x: 64,
            y: 2912,
            width: 288,
            height: 352
          },
          {
            type: "safe",
            x: 0,
            y: 2912,
            width: 64,
            height: 32
          },
          {
            type: "active",
            x: 0,
            y: 352,
            width: 352,
            height: 2560,
            spawner: [
              {
                radius: 12,
                speed: 7,
                count: 2,
                types: [
                  "normal"
                ]
              },
              {
                radius: 6,
                speed: 4,
                count: 10,
                types: [
                  "magnetic_reduction"
                ]
              },
              {
                radius: 12,
                speed: 7,
                count: 2,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 12,
                speed: 7,
                count: 2,
                types: [
                  "positive_magnetic_sniper"
                ]
              },
              {
                radius: 70,
                speed: 3,
                count: 2,
                types: [
                  "magnetic_nullification"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 7.5,
                count: 3,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 0,
            y: 0,
            width: 288,
            height: 352
          },
          {
            type: "safe",
            x: 288,
            y: 320,
            width: 64,
            height: 32
          },
          {
            type: "exit",
            x: 288,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 320
          }
        ]
      },
      {
        properties: {
          background_color: [
            255,
            255,
            0,
            125
          ]
        },
        x: 78240,
        y: 108480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "active",
            x: 64,
            y: 0,
            width: 2976,
            height: 352
          },
          {
            type: "victory",
            x: 3040,
            y: 0,
            width: 160,
            height: 352
          }
        ]
      },
      {
        name: "Dipole 1",
        properties: {
          background_color: [
            225,
            225,
            0,
            125
          ],
          magnetism: true
        },
        x: 1952,
        y: 112480,
        zones: [
          {
            type: "safe",
            x: 0,
            y: 2912,
            width: 352,
            height: 352
          },
          {
            type: "active",
            x: 0,
            y: 352,
            width: 352,
            height: 2560,
            spawner: [
              {
                radius: 12,
                speed: 3,
                count: 5,
                types: [
                  "spiral"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 0,
            y: 0,
            width: 288,
            height: 352
          },
          {
            type: "safe",
            x: 288,
            y: 320,
            width: 64,
            height: 32
          },
          {
            type: "exit",
            x: 288,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 320
          }
        ]
      },
      {
        name: "Dipole 2",
        properties: {
          background_color: [
            225,
            225,
            0,
            125
          ],
          magnetism: true
        },
        x: 2304,
        y: 112480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 5120,
            height: 352,
            spawner: [
              {
                radius: 12,
                speed: 11,
                count: 5,
                types: [
                  "gravity"
                ]
              },
              {
                radius: 6,
                speed: 11,
                count: 15,
                types: [
                  "magnetic_reduction"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 5,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 5,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 5,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 5,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 5440,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 5696,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        name: "Dipole 3",
        properties: {
          background_color: [
            225,
            225,
            0,
            125
          ],
          magnetism: true
        },
        x: 8064,
        y: 112480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 5120,
            height: 352,
            spawner: [
              {
                radius: 12,
                speed: 11,
                count: 5,
                types: [
                  "slowing"
                ]
              },
              {
                radius: 12,
                speed: 11,
                count: 15,
                types: [
                  "positive_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 5,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 5,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 5,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 5,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 5440,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 5696,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        name: "Dipole 4",
        properties: {
          background_color: [
            225,
            225,
            0,
            125
          ],
          magnetism: true
        },
        x: 13824,
        y: 112480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 5120,
            height: 352,
            spawner: [
              {
                radius: 12,
                speed: 12,
                count: 3,
                types: [
                  "draining"
                ]
              },
              {
                radius: 12,
                speed: 12,
                count: 17,
                types: [
                  "negative_magnetic_sniper"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 5,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 5,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 5,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 5,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 5440,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 5696,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        name: "Dipole 5",
        properties: {
          background_color: [
            225,
            225,
            0,
            125
          ],
          magnetism: true
        },
        x: 19584,
        y: 112480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 352
          },
          {
            type: "safe",
            x: 64,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "active",
            x: 320,
            y: 0,
            width: 5120,
            height: 352,
            spawner: [
              {
                radius: 12,
                speed: 12,
                count: 3,
                types: [
                  "poison_sniper"
                ]
              },
              {
                radius: 6,
                speed: 12,
                count: 17,
                types: [
                  "magnetic_nullification"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 5,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 5,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 3,
                count: 5,
                types: [
                  "wall"
                ]
              },
              {
                radius: 15,
                speed: 6,
                count: 5,
                types: [
                  "wall"
                ]
              }
            ]
          },
          {
            type: "safe",
            x: 5440,
            y: 0,
            width: 256,
            height: 352
          },
          {
            type: "exit",
            x: 5696,
            y: 0,
            translate: {
              x: 160,
              y: 0
            },
            width: 64,
            height: 352
          }
        ]
      },
      {
        properties: {
          background_color: [
            225,
            225,
            0,
            125
          ]
        },
        x: 25344,
        y: 112480,
        zones: [
          {
            type: "exit",
            x: 0,
            y: 0,
            translate: {
              x: -160,
              y: 0
            },
            width: 64,
            height: 320
          },
          {
            type: "active",
            x: 0,
            y: 0,
            width: 352,
            height: 3104
          },
          {
            type: "exit",
            x: 0,
            y: 3104,
            translate: {
              x: 0,
              y: 0
            },
            width: 352,
            height: 160
          }
        ]
      }
    ]
  }