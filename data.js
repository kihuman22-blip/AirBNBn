var APP_DATA = {
  "scenes": [
    {
      "id": "0-hauptstrae",
      "name": "Hauptstraße",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5353804431147378,
          "pitch": 0.2155767180528052,
          "rotation": 0,
          "target": "1-tr-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-tr-eingang",
      "name": "Tür-Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9731732219739335,
          "pitch": 0.4675690694503487,
          "rotation": 0,
          "target": "0-hauptstrae"
        },
        {
          "yaw": 1.6688400543092978,
          "pitch": 0.7063239831244861,
          "rotation": 0,
          "target": "5-eingang-fahrstuhl"
        },
        {
          "yaw": 0.2579757429284122,
          "pitch": 0.39396756184089554,
          "rotation": 0,
          "target": "2-hinterhof"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hinterhof",
      "name": "Hinterhof",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.29169177923574274,
          "pitch": 0.4552059408798108,
          "rotation": 0,
          "target": "1-tr-eingang"
        },
        {
          "yaw": 1.6491932481527316,
          "pitch": 0.7390344164752776,
          "rotation": 0,
          "target": "3-schlsselbox"
        },
        {
          "yaw": -1.5823949177092977,
          "pitch": 0.6642516906167089,
          "rotation": 0,
          "target": "4-parkplatz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-schlsselbox",
      "name": "SchlüsselBox",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.387768624106851,
          "pitch": 0.879748720254284,
          "rotation": 0,
          "target": "2-hinterhof"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.112263069055219,
          "pitch": -0.07418413784317579,
          "title": "SchlüsselBox",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "4-parkplatz",
      "name": "Parkplatz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6914358702456234,
          "pitch": 0.47817761243357104,
          "rotation": 0,
          "target": "2-hinterhof"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.890329921585005,
          "pitch": 0.3182198904165503,
          "title": "Parkplatz",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "5-eingang-fahrstuhl",
      "name": "Eingang-Fahrstuhl",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.141869753888372,
          "pitch": 0.9679202113856551,
          "rotation": 0,
          "target": "1-tr-eingang"
        },
        {
          "yaw": -2.468595073347549,
          "pitch": 0.1519432211197902,
          "rotation": 0,
          "target": "6-treppe1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8006088114013856,
          "pitch": -0.01825035231231098,
          "title": "1. Etage",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "6-treppe1",
      "name": "Treppe1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5103840413813145,
          "pitch": 0.8208467887491189,
          "rotation": 0,
          "target": "5-eingang-fahrstuhl"
        },
        {
          "yaw": -0.8689045117662086,
          "pitch": 0.110975751233374,
          "rotation": 0,
          "target": "7-eingang-haustr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-eingang-haustr",
      "name": "Eingang-Haustür",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5079786777574355,
          "pitch": 0.8922994594485232,
          "rotation": 0,
          "target": "6-treppe1"
        },
        {
          "yaw": -0.021634175582038395,
          "pitch": 0.5989757538477303,
          "rotation": 0,
          "target": "8-flur"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7401622944432624,
          "pitch": -0.3611850115294484,
          "title": "SchlüsselBox 2",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "8-flur",
      "name": "Flur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6658678226033743,
          "pitch": 1.1955548069941742,
          "rotation": 0,
          "target": "7-eingang-haustr"
        },
        {
          "yaw": 2.813282404032666,
          "pitch": 0.6503706796877733,
          "rotation": 0,
          "target": "9-wohnzimmer"
        },
        {
          "yaw": 0.4586358794065415,
          "pitch": 0.7090159145336195,
          "rotation": 7.0685834705770345,
          "target": "13-toilette"
        },
        {
          "yaw": 0.09551693404841188,
          "pitch": 0.4287600452176541,
          "rotation": 13.351768777756625,
          "target": "12-abstellraum"
        },
        {
          "yaw": -0.09789768740000682,
          "pitch": 0.635900064266627,
          "rotation": 0,
          "target": "14-schlafzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-wohnzimmer",
      "name": "Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.59151575554972,
          "pitch": 0.8679370171501919,
          "rotation": 0,
          "target": "8-flur"
        },
        {
          "yaw": 1.0103712229700612,
          "pitch": 0.541173831695648,
          "rotation": 0,
          "target": "10-balkon"
        },
        {
          "yaw": 1.6702416694563667,
          "pitch": 0.6187696092050246,
          "rotation": 0,
          "target": "11-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-balkon",
      "name": "Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9435721244450441,
          "pitch": 0.8017628825190695,
          "rotation": 0,
          "target": "9-wohnzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-kche",
      "name": "Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8849014018604713,
          "pitch": 0.6191281038547078,
          "rotation": 0,
          "target": "9-wohnzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-abstellraum",
      "name": "Abstellraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.045479078702360454,
          "pitch": 1.0612239822475331,
          "rotation": 12.566370614359176,
          "target": "8-flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-toilette",
      "name": "Toilette",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1614808274481785,
          "pitch": 0.8465222429113215,
          "rotation": 0,
          "target": "8-flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5324018512679736,
          "pitch": 0.6832731316689173,
          "rotation": 0,
          "target": "8-flur"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
