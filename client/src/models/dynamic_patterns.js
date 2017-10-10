
export const dynamicPatterns = (rowLen) => {
  //console.log('dynamicPatterns...')

  if (rowLen === 10){
    return [
      {
        "name": "",
        "cells": []
      },
      {
        "name": "Blinker",
        "cells": [12, 22, 32]
      },
      {
        "name": "Toad",
        "cells": [22, 23, 24, 31, 32, 33]
      },
      {
        "name": "Beacon",
        "cells": [11, 12, 21, 22, 33, 34, 43, 44]
      },
      {
        "name": "Glider",
        "cells": [1, 12, 20, 21, 22]
      },
      {
        "name": "Lightweight Spaceship",
        "cells": [0, 3, 14, 20, 24, 31, 32, 33, 34]
      }
    ]
  }

  if (rowLen === 20){
    return [
      {
        "name": "",
        "cells": []
      },
      {
        "name": "Blinker",
        "cells": [22, 42, 62]
      },
      {
        "name": "Toad",
        "cells": [42, 43, 44, 61, 62, 63]
      },
      {
        "name": "Beacon",
        "cells": [21, 22, 41, 42, 63, 64, 83, 84]
      },
      {
        "name": "Glider",
        "cells": [1, 22, 40, 41, 42]
      },
      {
        "name": "Lightweight Spaceship",
        "cells": [0, 3, 24, 40, 44, 61, 62, 63, 64]
      },
      {
        "name": "Pulsar",
        "cells": [44, 45, 46, 50, 51, 52, 82, 87, 89, 94, 102, 107, 109, 114, 122, 127, 129, 134, 144, 145, 146, 150, 151, 152, 184, 185, 186, 190, 191, 192, 202, 207, 209, 214, 222, 227, 229, 234, 242, 247, 249, 254, 284, 285, 286, 290, 291, 292]
      },
      {
        "name": "Pentadecathlon",
        "cells": [26, 46, 65, 66, 67, 125, 126, 127, 146, 166, 186, 206, 225, 226, 227, 285, 286, 287, 306, 326]
      }
    ]
  }

  if (rowLen === 40){
    return [
      {
        "name": "",
        "cells": []
      },
      {
        "name": "Blinker",
        "cells": [42, 82, 122]
      },
      {
        "name": "Toad",
        "cells": [82, 83, 84, 121, 122, 123]
      },
      {
        "name": "Beacon",
        "cells": [41, 42, 81, 82, 123, 124, 163, 164]
      },
      {
        "name": "Glider",
        "cells": [1, 42, 80, 81, 82]
      },
      {
        "name": "Lightweight Spaceship",
        "cells": [0, 3, 44, 80, 84, 121, 122, 123, 124]
      },
      {
        "name": "Pulsar",
        "cells": []
      },
      {
        "name": "Pentadecathlon",
        "cells": []
      },
      {
        "name": "Gosper's Glider Gun",
        "cells": [65, 103, 105, 133, 134, 141, 142, 155, 156, 172, 176, 181, 182, 195, 196, 201, 202, 211, 217, 221, 222, 241, 242, 251, 255, 257, 258, 263, 265, 291, 297, 305, 331, 336, 373, 374]
      }
    ]
  }
}