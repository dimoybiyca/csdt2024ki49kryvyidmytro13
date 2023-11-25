#pragma once

#ifndef NEW_GAME_DTO_H

#include <tinyxml2.h>
#include "Arduino.h"
#include "game/Game.h"

#define NEW_GAME_DTO_H

using namespace tinyxml2;
class NewGameDTO
{
public:
    String firstPlayer;
    String secondPlayer;
    String aiType;

    static NewGameDTO *parseXML(String xml);
};

#endif