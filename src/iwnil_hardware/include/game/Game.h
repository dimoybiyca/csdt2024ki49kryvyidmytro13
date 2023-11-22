/**
 * @file Game.h
 * @brief Definition of the Game class.
 */

#pragma once

#ifndef GAME_H

#include <Arduino.h>
#include "Board.h"
#include "Game_Object.h"

#define GAME_H

/**
 * @class Game
 *
 * @brief A class representing a game with players, status, and a game board.
 */
class Game
{
private:
    String gameStatus;   /**< The status of the game (e.g., "IN_PROGRES", "PLAYER1_WIN"). */
    String firstPlayer;  /**< The type of the first player. */
    String secondPlayer; /**< The type of the second player. */
    byte nextMove;       /**< The identifier of the player whose turn is next (1 or 2). */
    String aiType;       /**< The type of AI player, if applicable. */
    Board *board;        /**< Pointer to the game board. */

public:
    /**
     * @brief Factory method to create a new Game instance.
     *
     * @param firstPlayer The name of the first player.
     * @param secondPlayer The name of the second player.
     * @param aiType The type of AI player, if applicable.
     *
     * @return A pointer to the new Game instance.
     */
    static Game *newGame(String firstPlayer, String secondPlayer, String aiType);

    /**
     * @brief Constructor for the Game class.
     *
     * Create a game with standart Board
     *
     * @param gameStatus The initial status of the game.
     * @param firstPlayer The type of the first player.
     * @param secondPlayer The type of the second player.
     * @param nextMove The identifier of the player whose turn is next (1 or 2).
     * @param aiType The type of AI player, if applicable.
     */
    Game(String gameStatus,
         String firstPlayer,
         String secondPlayer,
         byte nextMove,
         String aiType);

    /**
     * @brief Constructor for the Game class with an existing game board.
     *
     * @param gameStatus The initial status of the game.
     * @param firstPlayer The type of the first player.
     * @param secondPlayer The type of the second player.
     * @param nextMove The identifier of the player whose turn is next (1 or 2).
     * @param aiType The type of AI player, if applicable.
     * @param board Pointer to an existing game board.
     */
    Game(String gameStatus,
         String firstPlayer,
         String secondPlayer,
         byte nextMove,
         String aiType,
         Board *board);

    /**
     * @brief Changes the player whose turn is next.
     */
    void changeNextPlayer() { this->nextMove = this->nextMove == 1 ? 2 : 1; };

    /**
     * @brief Gets the current game status.
     *
     * @return The current game status.
     */
    String getGameStatus() { return this->gameStatus; };

    /**
     * @brief Sets the game status.
     * @param gameStatus The new game status.
     */
    void setGameStatus(String gameStatus) { this->gameStatus = gameStatus; };

    /**
     * @brief Gets the type of AI player, if applicable.
     *
     * @return The type of AI player.
     */
    String getAIType() { return this->aiType; };

    /**
     * @brief Gets the type of the first player.
     *
     * @return The type of the first player.
     */
    String getFirstPlayer() { return this->firstPlayer; };

    /**
     * @brief Gets the type of the second player.
     *
     * @return The type of the second player.
     */
    String getSecondPlayer() { return this->secondPlayer; };

    /**
     * @brief Gets the identifier of the player whose turn is next.
     *
     * @return The identifier of the player whose turn is next (1 or 2).
     */
    byte getNextMove() { return this->nextMove; };

    /**
     * @brief Gets a pointer to the game board.
     *
     * @return A pointer to the game board.
     */
    Board *getBoard() { return this->board; };

    /**
     * @brief Destructor for the Game class.
     */
    ~Game();
};

#endif