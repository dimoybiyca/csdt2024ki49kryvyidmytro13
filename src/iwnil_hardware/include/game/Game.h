#pragma once

#ifndef GAME_H

#include <Arduino.h>
#include "Board.h"
#include "Game_Object.h"
#include "enum/Play_Mode_Enum.h"

#define GAME_H

class Game
{
private:
    String gameStatus;
    String firstPlayer;
    String secondPlayer;
    byte nextMove;
    String aiType;

    Board *board;

public:
    static Game *newGame(String firstPlayer, String secondPlayer, String aiType);

    Game(String gameStatus,
         String firstPlayer,
         String secondPlayer,
         byte nextMove,
         String aiType);

    Game(String gameStatus,
         String firstPlayer,
         String secondPlayer,
         byte nextMove,
         String aiType,
         Board *board);

    void changeNextPlayer() { this->nextMove = this->nextMove == 1 ? 2 : 1; };

    String getGameStatus() { return this->gameStatus; };
    void setGameStatus(String gameStatus) { this->gameStatus = gameStatus; };
    String getAIType() { return this->aiType; };
    String getFirstPlayer() { return this->firstPlayer; };
    String getSecondPlayer() { return this->secondPlayer; };
    byte getNextMove() { return this->nextMove; };
    Board *getBoard() { return this->board; };

    ~Game();
};

#endif