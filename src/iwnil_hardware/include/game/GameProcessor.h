#pragma once

#ifndef GAME_PROCESSOR_H

#include "game/Game.h"
#include "enum/Game_Status.h"
#include "utils/FixedQueue.h"
#include "utils/Coordinates.h"
#include "utils/Coordinates.h"

#define GAME_PROCESSOR_H

class GameProcessor
{
private:
    int rows;
    int cols;
    Game *game;
    FixedQueue queue;

    void finishGame(int cellType);

    void checkToe();
    boolean checkRow(int cellType);
    boolean checkCol(int cellType);
    boolean checkDiag(int cellType);
    boolean checkDiagLeft(int cellType);
    boolean checkDiagRight(int cellType);
    boolean checkDiagLine(int row, int col, int cellType);
    int updateCount(int count, int x, int y, int celltype);

    void processNewMove();
    void processMANMove();
    void processAIMove();
    void processAIRandomMove(int cellType);
    void processAIBestMove(int celltype);
    boolean isMANMove()
    {
        return game->getNextMove() == 1 ? game->getFirstPlayer().equals("MAN") : game->getSecondPlayer().equals("MAN");
    };
    boolean isAIMove()
    {
        return game->getNextMove() == 1 ? game->getFirstPlayer().equals("AI") : game->getSecondPlayer().equals("AI");
    };

    Coordinates findNewMove();

public:
    GameProcessor() : queue(10){};
    Game *process(Game *game);
};

#endif