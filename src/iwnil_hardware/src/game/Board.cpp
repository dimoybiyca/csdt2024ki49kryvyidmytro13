#include "game/Board.h"

Board::Board(int rows, int cols)
{
    this->rows = rows;
    this->cols = cols;
    this->gameMap = createMap(rows, cols);
}

Board::Board(String array, int rows, int cols)
{
    byte **newMap = new byte *[rows];
    for (int i = 0; i < rows; i++)
    {
        newMap[i] = new byte[cols];
        for (int j = 0; j < cols; j++)
        {
            newMap[i][j] = array.charAt((i * cols) + j) - '0';
        }
    }

    this->rows = rows;
    this->cols = cols;
    this->gameMap = newMap;
}

byte **Board::createMap(int rows, int cols)
{
    byte **newMap = new byte *[rows];
    for (int i = 0; i < rows; i++)
    {
        newMap[i] = new byte[cols];
        for (int j = 0; j < cols; j++)
        {
            newMap[i][j] = EMPTY_CELL;
        }
    }

    return newMap;
}

void Board::resizeTop()
{
    bool needResize = false;
    for (int y = 0; y < 3; y++)
    {
        for (int x = 0; x < this->cols; x++)
        {
            if (this->gameMap[y][x] != EMPTY_CELL)
            {
                needResize = true;
                break;
            }
        }
    }

    if (needResize)
    {
        byte newCols = this->cols;
        byte newRows = this->rows + 5;
        byte **newMap = new byte *[newRows];
        for (int i = 0; i < newRows; i++)
        {
            newMap[i] = new byte[newCols];
        }

        for (int y = 0; y < newRows; y++)
        {
            for (int x = 0; x < newCols; x++)
            {
                if (y >= newRows - this->rows)
                {
                    newMap[y][x] = this->gameMap[y - 5][x];
                }
                else
                {
                    newMap[y][x] = EMPTY_CELL;
                }
            }
        }

        for (int i = 0; i < this->rows; i++)
        {
            delete[] this->gameMap[i];
        }
        delete[] this->gameMap;

        this->gameMap = newMap;
        this->cols = newCols;
        this->rows = newRows;
    }
}
void Board::resizeBottom()
{
    Serial.println(this->rows);
    Serial.println(this->cols);
    boolean needResize = false;
    for (int y = this->rows - 3; y < this->rows; y++)
    {
        for (int x = 0; x < this->cols; x++)
        {
            if (this->gameMap[y][x] != EMPTY_CELL)
            {
                needResize = true;
                break;
            }
        }
    }

    if (needResize)
    {
        byte newCols = this->cols;
        byte newRows = this->rows + 5;
        byte **newMap = new byte *[newRows];
        for (int i = 0; i < newRows; i++)
        {
            newMap[i] = new byte[newCols];
        }

        for (int y = 0; y < newRows; y++)
        {
            for (int x = 0; x < newCols; x++)
            {
                if (y >= this->rows)
                {
                    newMap[y][x] = EMPTY_CELL;
                }
                else
                {
                    newMap[y][x] = this->gameMap[y][x];
                }
            }
        }

        this->setNewMap(newMap, newRows, newCols);
    }
}
void Board::resizeLeft()
{
    boolean needResize = false;
    for (int y = 0; y < this->rows; y++)
    {
        for (int x = 0; x < 3; x++)
        {
            if (this->gameMap[y][x] != EMPTY_CELL)
            {
                needResize = true;
                break;
            }

            if (needResize)
            {
                break;
            }
        }
    }

    if (needResize)
    {
        byte newCols = this->cols + 5;
        byte newRows = this->rows;
        byte **newMap = this->createMap(newRows, newCols);

        for (int y = 0; y < newRows; y++)
        {
            for (int x = 0; x < newCols; x++)
            {
                if (x >= 5)
                {
                    newMap[y][x] = this->gameMap[y][x - 5];
                }
                else
                {
                    newMap[y][x] = EMPTY_CELL;
                }
            }
        }

        this->setNewMap(newMap, newRows, newCols);
    }
}
void Board::resizeRight()
{
    boolean needResize = false;
    for (int y = 0; y < this->rows; y++)
    {
        for (int x = this->cols - 3; x < this->cols; x++)
        {
            if (this->gameMap[y][x] != EMPTY_CELL)
            {
                needResize = true;
                break;
            }
        }
    }

    if (needResize)
    {
        byte newCols = this->cols + 5;
        byte newRows = this->rows;
        byte **newMap = this->createMap(newRows, newCols);

        for (int y = 0; y < newRows; y++)
        {
            for (int x = 0; x < newCols; x++)
            {
                if (x >= this->cols)
                {
                    newMap[y][x] = EMPTY_CELL;
                }
                else
                {
                    newMap[y][x] = this->gameMap[y][x];
                }
            }
        }

        this->setNewMap(newMap, newRows, newCols);
    }
}

void Board::resize()
{
    this->resizeTop();
    this->resizeLeft();
    this->resizeRight();
    this->resizeBottom();
}

int Board::getRows()
{
    return this->rows;
}
int Board::getCols()
{
    return this->cols;
}

byte **Board::getMap()
{
    return this->gameMap;
}

void Board::setNewMap(byte **newMap, byte newRows, byte newCols)
{
    this->deleteMap();
    this->gameMap = newMap;
    this->cols = newCols;
    this->rows = newRows;
}

void Board::deleteMap()
{
    for (int i = 0; i < this->rows; i++)
    {
        delete[] this->gameMap[i];
    }
    delete[] this->gameMap;
}

Board::~Board()
{
    this->deleteMap();
}