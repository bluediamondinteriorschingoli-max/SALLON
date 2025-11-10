var APP_DATA = {
  "scenes": [
    {
      "id": "0-cash-counter",
      "name": "CASH COUNTER",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0019697028251339788,
        "pitch": 0.033394810930246877,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.6037467386728395,
          "pitch": 0.03866641249726399,
          "rotation": 0.7853981633974483,
          "target": "1-hair-cuting"
        },
        {
          "yaw": 1.2887585065612068,
          "pitch": 0.20886558183431347,
          "rotation": 5.497787143782138,
          "target": "2-hair-wash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hair-cuting",
      "name": "HAIR CUTING",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.06087364459852651,
        "pitch": 0.09181443572549952,
        "fov": 1.2709300363534877
      },
      "linkHotspots": [
        {
          "yaw": -1.8612150313461822,
          "pitch": 0.04213282206980473,
          "rotation": 7.0685834705770345,
          "target": "2-hair-wash"
        },
        {
          "yaw": -2.3042635581431714,
          "pitch": 0.18386553468902989,
          "rotation": 17.27875959474387,
          "target": "0-cash-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hair-wash",
      "name": "HAIR WASH",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.13543257853165436,
        "pitch": 0.15226142347863458,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.260745886005192,
          "pitch": 0.009597368290863884,
          "rotation": 1.5707963267948966,
          "target": "0-cash-counter"
        },
        {
          "yaw": 2.121721675329896,
          "pitch": 0.2769982636585695,
          "rotation": 5.497787143782138,
          "target": "1-hair-cuting"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SALOON ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
