/**
 * @file GameProcessor.h
 * @brief Definition of the GameProcessor class.
 */

#pragma once

#ifndef GAME_PROCESSOR_H

#include "game/Game.h"
#include "enum/Game_Status.h"
#include "utils/FixedQueue.h"
#include "utils/Coordinates.h"
#include "utils/Coordinates.h"

#define GAME_PROCESSOR_H

/**
 * @class GameProcessor
 * @brief A class responsible for processing the game logic and moves.
 */
class GameProcessor
{
private:
    int rows;         /**< The number of rows in the game board. */
    int cols;         /**< The number of columns in the game board. */
    Game *game;       /**< Pointer to the current game instance. */
    FixedQueue queue; /**< Fixed-size queue to track recent moves. */

    /**
     * @brief Finishes the game and updates its status.
     *
     * @param cellType The type of the winning player (1 or 2).
     */
    void finishGame(int cellType);

    /**
     * @brief Checks for a toe in the game.
     */
    void checkToe();

    /**
     * @brief Checks for a winning row.
     *
     * @param cellType The type of the player to check for a win (1 or 2).
     * @return True if a winning row is found, false otherwise.
     */
    boolean checkRow(int cellType);

    /**
     * @brief Checks for a winning column.
     *
     * @param cellType The type of the player to check for a win (1 or 2).
     * @return True if a winning column is found, false otherwise.
     */
    boolean checkCol(int cellType);

    /**
     * @brief Checks for a winning diagonal.
     *
     * @param cellType The type of the player to check for a win (1 or 2).
     * @return True if a winning diagonal is found, false otherwise.
     */
    boolean checkDiag(int cellType);

    /**
     * @brief Checks for a winning diagonal (left-to-right).
     *
     * @param cellType The type of the player to check for a win (1 or 2).
     * @return True if a winning diagonal (left-to-right) is found, false otherwise.
     */
    boolean checkDiagLeft(int cellType);

    /**
     * @brief Checks for a winning diagonal (right-to-left).
     *
     * @param cellType The type of the player to check for a win (1 or 2).
     * @return True if a winning diagonal (right-to-left) is found, false otherwise.
     */
    boolean checkDiagRight(int cellType);

    /**
     * @brief Checks for a winning diagonal line starting from a given position.
     *
     * @param row The starting row.
     * @param col The starting column.
     * @param cellType The type of the player to check for a win (1 or 2).
     *
     * @return true if a line is winnind.
     * @return false if line is not winning
     */
    boolean checkDiagLine(int row, int col, int cellType);

    /**
     * @brief Updates the count of consecutive cells of the same type.
     *
     * @param count The current count.
     * @param x The x-coordinate of the cell.
     * @param y The y-coordinate of the cell.
     * @param celltype The type of the player (1 or 2).
     *
     * @return The updated count.
     */
    int updateCount(int count, int x, int y, int celltype);

    /**
     * @brief Processes a new move in the game.
     */
    void processNewMove();

    /**
     * @brief Processes a move made by a human player.
     */
    void processMANMove();

    /**
     * @brief Processes a move made by an AI player.
     */
    void processAIMove();

    /**
     * @brief Processes a random move made by the AI player.
     *
     * @param cellType The type of the AI player (1 or 2).
     */
    void processAIRandomMove(int cellType);

    /**
     * @brief Processes the best move made by the AI player.
     *
     * @param cellType The type of the AI player (1 or 2).
     */
    void processAIBestMove(int celltype);

    /**
     * @brief Checks if it's the turn of a human player.
     *
     * @return true if current move is made by human player.
     * @return false if current move is made by AI
     */
    boolean isMANMove()
    {
        return game->getNextMove() == 1 ? game->getFirstPlayer().equals("MAN") : game->getSecondPlayer().equals("MAN");
    };

    /**
     * @brief Checks if it's the turn of an AI player.
     *
     * @return true if current move is made by AI
     * @return false if current move is made by human player.
     */
    boolean isAIMove()
    {
        return game->getNextMove() == 1 ? game->getFirstPlayer().equals("AI") : game->getSecondPlayer().equals("AI");
    };

    /**
     * @brief Finds a new move for the current player.
     * @return The coordinates of the new move.
     */
    Coordinates findNewMove();

public:
    /**
     * @brief Constructor for the GameProcessor class.
     */
    GameProcessor() : queue(10){};

    /**
     * @brief Processes the current state of the game.
     *
     * @param game The current game instance.
     * @return A pointer to the updated game instance.
     */
    Game *process(Game *game);
};

#endif // GAME_PROCESSOR_H