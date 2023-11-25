#include "game/Game.h"
#include "enum/Game_Status.h"

Game *Game::newGame(String firstPlayer, String secondPlayer, String aiType)
{
    return new Game(IN_PROGRES, firstPlayer, secondPlayer, 1, aiType);
}

Game::Game(String gameStatus,
           String firstPlayer,
           String secondPlayer,
           byte nextMove,
           String aiType)
{
    this->gameStatus = gameStatus;
    this->firstPlayer = firstPlayer;
    this->secondPlayer = secondPlayer;
    this->nextMove = nextMove;
    this->aiType = aiType;
    this->board = new Board(10, 10);
}

Game::Game(String gameStatus,
           String firstPlayer,
           String secondPlayer,
           byte nextMove,
           String aiType,
           Board *board)
{
    this->gameStatus = gameStatus;
    this->firstPlayer = firstPlayer;
    this->secondPlayer = secondPlayer;
    this->nextMove = nextMove;
    this->aiType = aiType;
    this->board = board;
}

Game::~Game()
{
    delete this->board;
}