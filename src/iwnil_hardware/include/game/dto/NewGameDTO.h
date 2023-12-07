/**
 * @file NewGameDTO.h
 * @brief Data Transfer Object (DTO) for creating a new game.
 */

#pragma once

#ifndef NEW_GAME_DTO_H

#include <tinyxml2.h>
#include "Arduino.h"
#include "game/Game.h"

#define NEW_GAME_DTO_H

using namespace tinyxml2;

/**
 * @class NewGameDTO
 * @brief Data Transfer Object for creating a new game.
 *
 * Used for serial communication to parse XML requests for new game creation.
 */
class NewGameDTO
{
public:
    String firstPlayer;  /**<First player type AI/MAN*/
    String secondPlayer; /**<Second player type AI/MAN*/
    String aiType;       /**<AI type RANDOM/BEST_MOVE */

    /**
     * @brief Parses a NewGameDTO object from an XML string.
     *
     * @param xml The XML string to parse.
     *
     * @return A pointer to a NewGameDTO object.
     */
    static NewGameDTO *parseXML(String xml);
};

#endif