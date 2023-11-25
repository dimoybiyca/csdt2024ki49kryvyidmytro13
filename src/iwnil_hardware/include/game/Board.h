#pragma once

#ifndef BOARD_H

#include <Arduino.h>
#include "Board.h"
#include "Game_Object.h"

#define BOARD_H

class Board
{
private:
    int rows;
    int cols;
    byte **gameMap;

    byte **createMap(int rows, int cols);

    void resizeTop();
    void resizeBottom();
    void resizeLeft();
    void resizeRight();

    void setNewMap(byte **newMap, byte newRows, byte newCols);
    void deleteMap();

public:
    Board(int rows, int cols);
    Board(String array, int rows, int cols);
    ~Board();

    void resize();

    int getRows();
    int getCols();

    byte getElement(int row, int col) const;
    void setElement(int row, int col, byte value);

    byte **getMap();
};

#endif