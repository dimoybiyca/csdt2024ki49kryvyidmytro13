/**
 * @file Board.h
 * @brief Game Board encapsulation.
 *
 * Contains a two-dimensional array representing the game board.
 * Provides methods for dynamic two-dimensional array operations.
 */

#pragma once

#ifndef BOARD_H

#include <Arduino.h>
#include "Board.h"
#include "Game_Object.h"

#define BOARD_H

/**
 * @class Board
 * @brief Encapsulation of the game board.
 */
class Board
{
private:
    int rows;       /**Number of rows in board*/
    int cols;       /**Number of columns in board*/
    byte **gameMap; /**Two dimensional array which represent game board*/

    /**
     * @brief Create a Map object
     *
     * Create a new two dimensional array with specified size
     *
     * @param rows Number of rows in new board
     * @param cols Number of columns in new board
     * @return byte** pointer to new two dimensional array
     */
    byte **createMap(int rows, int cols);

    /**
     * @brief resize array at top
     *
     * Resize Board if there are moves on the top of the board
     */
    void resizeTop();

    /**
     * @brief resize array at bottom
     *
     * Resize Board if there are moves on the bottom of the board
     */
    void resizeBottom();

    /**
     * @brief resize array at left
     *
     * Resize Board if there are moves on the left of the board
     */
    void resizeLeft();

    /**
     * @brief resize array at left
     *
     * Resize Board if there are moves on the left of the board
     */
    void resizeRight();

    /**
     * @brief Set the New Map object
     *
     * @param newMap pointer to a new two dimensional array
     * @param newRows number of rows in new array
     * @param newCols number of columns in new array
     */
    void setNewMap(byte **newMap, byte newRows, byte newCols);

    /**
     * @brief Delete the current two dimensional array
     *
     */
    void deleteMap();

public:
    /**
     * @brief Construct a new Board object with the specified dimensions.
     *
     * @param rows The number of rows in the board.
     * @param cols The number of columns in the board.
     */
    Board(int rows, int cols);

    /**
     * @brief Construct a new Board object from a string representation of the board.
     *
     * @param array A string representation of the board, where each element is represented by a single character.
     * @param rows The number of rows in the board.
     * @param cols The number of columns in the board.
     */
    Board(String array, int rows, int cols);

    /**
     * @brief Destructor for the Board class.
     *
     * Destroys the two-dimensional array allocated in the constructor.
     */
    ~Board();

    /**
     * @brief Resize the board to accommodate moves.
     *
     * Resize the board if there are moves on the top, bottom, left, or right of the board.
     */
    void resize();

    /**
     * @brief Get the number of rows in the board.
     *
     * @return The number of rows in the board.
     */
    int getRows();

    /**
     * @brief Get the number of columns in the board.
     *
     * @return The number of columns in the board.
     */
    int getCols();

    /**
     * @brief Get a pointer to the two-dimensional array representing the board.
     *
     * @return A pointer to the two-dimensional array representing the board.
     */
    byte **getMap();
};

#endif