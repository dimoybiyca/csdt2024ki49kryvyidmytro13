/**
 * @file GameDTO.h
 * @brief Data Transfer Object (DTO) for serial communication.
 */

#pragma once

#ifndef GAME_DTO_H

#include <tinyxml2.h>
#include "Arduino.h"
#include "../Game.h"

#define GAME_DTO_H

/**
 * @class GameDTO
 * @brief Data Transfer Object for serial communication.
 */
using namespace tinyxml2;
class GameDTO
{
public:
    String aiType;       /**<Type of ai RANDOM/BEST_MOVE*/
    String board;        /**<Board DTO as an array*/
    String firstPlayer;  /**<First player of the game AI / MAN*/
    String secondPlayer; /**<Second player of the game AI / MAN*/
    String gameStatus;   /**<Current game status*/
    int nextMove;        /**<Who is moving now*/
    int rows;            /**<Number of rows in the board*/
    int cols;            /**<Number of columns in the board*/

    /**
     * @brief Create object from xml
     *
     * Static fabric method to parse XML string to object of GameDTO class
     *
     * @param xml string that contain Game as XML object
     * @return GameDTO* The pointer to a created Object
     */
    static GameDTO *parseXML(String xml);

    /**
     * @brief Convert object to XML
     *
     * @return String Object as a XML
     */
    String toXml();

    /**
     * @brief Convert DTO to Object
     *
     * @return Game* pointer to created Game object
     */
    Game *toObject();

    /**
     * @brief Construct a new GameDTO object
     *
     */
    GameDTO();

    /**
     * @brief Construct a new Game DTO object from Game
     *
     * @param game pointer to a game object
     */
    GameDTO(Game *game);

    /**
     * @brief Constructs a new GameDTO object.
     *
     * @param aiType The type of AI used in the game.
     * @param board The current state of the game board.
     * @param firstPlayer The name of the first player.
     * @param gameStatus The current status of the game.
     * @param nextMove The player who is next to move.
     * @param secondPlayer The name of the second player.
     * @param rows The number of rows on the game board.
     * @param cols The number of columns on the game board.
     */
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