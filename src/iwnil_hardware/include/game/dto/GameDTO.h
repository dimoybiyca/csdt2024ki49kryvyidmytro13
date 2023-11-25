#pragma once

#ifndef GAME_DTO_H

#include <tinyxml2.h>
#include "Arduino.h"
#include "game/Game.h"

#define GAME_DTO_H

using namespace tinyxml2;
class GameDTO
{
public:
    String aiType;
    String board;
    String firstPlayer;
    String gameStatus;
    int nextMove;
    String secondPlayer;
    int rows;
    int cols;

    static GameDTO *parseXML(String xml);

    String toXml();

    Game *toObject();

    GameDTO();
    GameDTO(Game *game);
    GameDTO(String aiType,
            String board,
            String firstPlayer,
            String gameStatus,
            int nextMove,
            String secondPlayer,
            int rows,
            int cols);
};

#endif