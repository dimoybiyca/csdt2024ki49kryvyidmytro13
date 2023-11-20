#include "game/GameProcessor.h"

Game *GameProcessor::process(Game *game)
{
    this->queue.clear();
    this->game = game;
    this->cols = game->getBoard()->getCols();
    this->rows = game->getBoard()->getRows();

    Serial.println(this->cols);
    Serial.println(this->rows);
    this->processNewMove();
    this->checkToe();
    this->game->changeNextPlayer();
    this->game->getBoard()->resize();

    if (game->getSecondPlayer().equals("AI"))
    {
        this->processAIMove();
        this->checkToe();
        this->game->changeNextPlayer();
    }

    return this->game;
}

void GameProcessor::processNewMove()
{
    if (this->isMANMove())
    {
        this->processMANMove();
    }
    else if (isAIMove())
    {
        this->processAIMove();
    }
}

void GameProcessor::processMANMove()
{

    Coordinates pos = findNewMove();
    if (pos.y != -1)
    {
        game->getBoard()->getMap()[pos.y][pos.x] = game->getNextMove() == 1 ? TIC : TAC;
    }
}

void GameProcessor::processAIMove()
{
    int cellType = game->getNextMove() == 1 ? TIC : TAC;

    if (game->getAIType().equals("RANDOM"))
    {
        processAIRandomMove(cellType);
    }
    else
    {
        processAIBestMove(cellType);
    }
}

void GameProcessor::processAIRandomMove(int cellType)
{
    int iter = 0;
    while (true)
    {
        for (int y = (int)round(random(0, this->rows - 1)); y < this->rows; y++)
        {
            for (int x = (int)round(random(0, this->cols - 1)); y < this->cols; y++)
            {
                if (game->getBoard()->getMap()[y][x] == EMPTY_CELL)
                {
                    game->getBoard()->getMap()[y][x] = cellType;
                    return;
                }
            }
        }
        iter = iter + 1;

        if (iter >= 20)
        {
            game->getBoard()->getMap()[4][4] = cellType;
            return;
        }
    }
}

void GameProcessor::processAIBestMove(int cellType)
{
    int iter = 0;
    while (true)
    {
        for (int y = (int)round(random(0, this->rows - 1)); y < this->rows; y++)
        {
            for (int x = (int)round(random(0, this->cols - 1)); y < this->cols; y++)
            {
                if (game->getBoard()->getMap()[y][x] == cellType)
                {
                    for (int i = -1; i <= 1; i++)
                    {
                        for (int j = -1; j <= 1; j++)
                        {
                            if (y + i > 0 && y + i < this->rows && x + j > 0 && x + j < this->cols)
                            {
                                if (game->getBoard()->getMap()[y + i][x + j] == EMPTY_CELL)
                                {
                                    game->getBoard()->getMap()[y + 1][x + j] = cellType;
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }
        iter = iter + 1;
        if (iter >= 20)
        {
            break;
        }
    }

    iter = 0;
    while (true)
    {
        for (int y = (int)round(random(0, this->rows - 1)); y < this->rows; y++)
        {
            for (int x = (int)round(random(0, this->cols - 1)); y < this->cols; y++)
            {
                if (game->getBoard()->getMap()[y][x] != EMPTY_CELL)
                {
                    for (int i = -1; i <= 1; i++)
                    {
                        for (int j = -1; j <= 1; j++)
                        {
                            if (y + i > 0 && y + i < this->rows && x + j > 0 && x + j < this->cols)
                            {
                                if (game->getBoard()->getMap()[y + i][x + j] == EMPTY_CELL)
                                {
                                    game->getBoard()->getMap()[y + 1][x + j] = cellType;
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }
        iter = iter + 1;
        if (iter >= 20)
        {
            game->getBoard()->getMap()[4][4] = cellType;
            return;
        }
    }
}

void GameProcessor::checkToe()
{
    int cellType = this->game->getNextMove() == 1 ? TIC : TAC;

    if (checkRow(cellType) || checkCol(cellType) || checkDiag(cellType))
    {
        finishGame(cellType);
    }
}

boolean GameProcessor::checkRow(int cellType)
{
    for (int y = 0; y < this->rows; y++)
    {
        int count = 0;
        for (int x = 0; x < this->cols; x++)
        {
            count = this->updateCount(count, x, y, cellType);

            if (x < this->cols - 1 && this->game->getBoard()->getMap()[y][x + 1] != cellType && count >= 5)
            {
                return true;
            }
        }
    }

    return false;
}

boolean GameProcessor::checkCol(int cellType)
{
    queue.clear();

    for (int x = 0; x < this->cols; x++)
    {
        int count = 0;
        for (int y = 0; y < this->rows; y++)
        {
            count = this->updateCount(count, x, y, cellType);

            if (y < this->rows - 1 && this->game->getBoard()->getMap()[y + 1][x] != cellType && count >= 5)
            {
                return true;
            }
        }
    }

    return false;
}

boolean GameProcessor::checkDiag(int cellType)
{
    return checkDiagRight(cellType) || checkDiagLeft(cellType);
}

boolean GameProcessor::checkDiagLeft(int cellType)
{
    for (int d = 0; d < this->rows + this->cols - 1; d++)
    {
        int row = max(0, d - this->cols + 1);
        int col = min(d, this->cols - 1);

        int count = 0;
        queue.clear();
        while (row < this->rows && col >= 0)
        {
            count = updateCount(count, col, row, cellType);

            if (++row < this->rows &&
                --col > 0 &&
                this->game->getBoard()->getMap()[row][col] != cellType &&
                count >= 5)
            {
                return true;
            }
        }
    }

    return false;
}

boolean GameProcessor::checkDiagRight(int cellType)
{
    for (int d = this->rows - 1; d >= 0; d--)
    {
        if (checkDiagLine(d, 0, cellType))
        {
            return true;
        }
    }

    for (int d = 1; d < this->cols; d++)
    {
        if (checkDiagLine(0, d, cellType))
        {
            return true;
        }
    }

    return false;
}

boolean GameProcessor::checkDiagLine(int row, int col, int cellType)
{
    int count = 0;
    queue.clear();
    while (row < this->rows && col < this->cols)
    {
        count = updateCount(count, col, row, cellType);

        if (++row < this->rows &&
            ++col < this->cols &&
            this->game->getBoard()->getMap()[row][col] != cellType &&
            count >= 5)
        {
            return true;
        }
    }

    return false;
}

int GameProcessor::updateCount(int count, int x, int y, int celltype)
{
    this->queue.add(Coordinates(x, y));

    return this->game->getBoard()->getMap()[y][x] == celltype ? count + 1 : 0;
}

void GameProcessor::finishGame(int cellType)
{
    this->game->setGameStatus(this->game->getNextMove() == 1 ? PLAYER1_WIN : PLAYER2_WIN);

    for (int i = 0; i < 10; i++)
    {
        Coordinates pos = queue.poll();
        if (pos.x == -1 || pos.y == -1)
        {
            break;
        }

        if (game->getBoard()->getMap()[pos.y][pos.x] == cellType)
        {
            game->getBoard()->getMap()[pos.y][pos.x] = game->getNextMove() == 1 ? TOE1 : TOE2;
        }
        else
        {
            break;
        }
    }
}

Coordinates GameProcessor::findNewMove()
{
    const int lrows = this->rows;
    const int lcols = this->cols;

    for (int y = 0; y < lrows; y++)
    {
        for (int x = 0; x < lcols; x++)
        {
            if (game->getBoard()->getMap()[y][x] == NEW_MOVE)
            {
                return Coordinates(x, y);
            }
        }
    }

    return Coordinates(-1, -1);
}