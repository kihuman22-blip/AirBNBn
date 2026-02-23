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
          "yaw": 1.5477429273112016,
          "pitch": 0.2291067159348632,
          "rotation": 0,
          "target": "1-eingang-tr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-eingang-tr",
      "name": "Eingang-Tür",
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
          "yaw": -2.9791923280126547,
          "pitch": 0.47896175843679245,
          "rotation": 0,
          "target": "0-hauptstrae"
        },
        {
          "yaw": 0.28608120592090813,
          "pitch": 0.4230853478775529,
          "rotation": 0,
          "target": "2-hinterhof"
        },
        {
          "yaw": 1.6767545090635192,
          "pitch": 0.6892679092588061,
          "rotation": 0,
          "target": "5-eingang-fahrstuhl"
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
          "yaw": 0.2782903248429811,
          "pitch": 0.48055492736527583,
          "rotation": 0,
          "target": "1-eingang-tr"
        },
        {
          "yaw": 1.6363531894657548,
          "pitch": 0.75021536073805,
          "rotation": 0,
          "target": "3-schlsselsafe-1"
        },
        {
          "yaw": -1.5251474368313502,
          "pitch": 0.5143182712340924,
          "rotation": 0,
          "target": "4-parkplatz"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5243574597899316,
          "pitch": -0.03997450219609355,
          "title": "Schlüsselsafe 1",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "3-schlsselsafe-1",
      "name": "Schlüsselsafe 1",
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
          "yaw": 0.3346187613107059,
          "pitch": 0.7608956975120549,
          "rotation": 0,
          "target": "2-hinterhof"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.129963892497468,
          "pitch": -0.4317900852150469,
          "title": "Schlüsselsafe 1",
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
          "yaw": 1.4961847515241686,
          "pitch": 0.5429216964955916,
          "rotation": 0,
          "target": "2-hinterhof"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.880866794685385,
          "pitch": 0.3429512961226564,
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
          "yaw": -1.1124768807968177,
          "pitch": 1.0011232961887089,
          "rotation": 0,
          "target": "1-eingang-tr"
        },
        {
          "yaw": -2.492248826165344,
          "pitch": 0.19349549102766161,
          "rotation": 0,
          "target": "6-treppen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5038639889390275,
          "pitch": 0.20593180750127438,
          "title": "1. Etage",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "6-treppen",
      "name": "Treppen",
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
          "yaw": -1.562728365385695,
          "pitch": 0.8680169164941773,
          "rotation": 0,
          "target": "5-eingang-fahrstuhl"
        },
        {
          "yaw": -0.7870115129049076,
          "pitch": 0.25310519713683455,
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
          "yaw": -1.772573517198186,
          "pitch": 0.8374287669256582,
          "rotation": 0,
          "target": "6-treppen"
        },
        {
          "yaw": -0.034160156385372176,
          "pitch": 0.8450306555414926,
          "rotation": 0,
          "target": "8-flur"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.735752703815109,
          "pitch": -0.36445552179709395,
          "title": "Schlüsselsafe 2",
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
          "yaw": -1.5970395032176015,
          "pitch": 1.2041684481478683,
          "rotation": 0,
          "target": "7-eingang-haustr"
        },
        {
          "yaw": 0.3876301440887566,
          "pitch": 0.7104667287444713,
          "rotation": 0.7853981633974483,
          "target": "9-toilette"
        },
        {
          "yaw": 2.7544256371472766,
          "pitch": 0.6474170379700261,
          "rotation": 0,
          "target": "11-wohnzimmer"
        },
        {
          "yaw": -0.11389902933655094,
          "pitch": 0.518829740004163,
          "rotation": 0,
          "target": "10-schlafzimmer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.11291291950395,
          "pitch": -0.04442065884384938,
          "title": "Abstellraum",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "9-toilette",
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
          "yaw": 0.23900500996602148,
          "pitch": 0.8301392593878933,
          "rotation": 0,
          "target": "8-flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-schlafzimmer",
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
          "yaw": -2.5089331267857062,
          "pitch": 0.6284761507487104,
          "rotation": 0,
          "target": "8-flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-wohnzimmer",
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
          "yaw": -2.62549210989188,
          "pitch": 0.7503712930919573,
          "rotation": 0,
          "target": "8-flur"
        },
        {
          "yaw": 1.674500574009599,
          "pitch": 0.6217283113767778,
          "rotation": 0.7853981633974483,
          "target": "12-kche"
        },
        {
          "yaw": 1.0884551265823408,
          "pitch": 0.6432895670539622,
          "rotation": 0,
          "target": "13-balkon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kche",
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
          "yaw": 2.874693038123282,
          "pitch": 0.6712505763439083,
          "rotation": 0,
          "target": "11-wohnzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-balkon",
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
          "yaw": -1.9201771418087983,
          "pitch": 0.6204684409123562,
          "rotation": 0,
          "target": "11-wohnzimmer"
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
