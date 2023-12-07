/**
 * @file Coordinates.h
 * @brief Definition of the Coordinates struct.
 */

#pragma once

#ifndef COORDINATES_H

#define COORDINATES_H

/**
 * @struct Coordinates
 * @brief A struct representing 2D coordinates with x and y values.
 */
struct Coordinates
{
    int x; /**< The x-coordinate. */
    int y; /**< The y-coordinate. */

    /**
     * @brief Constructor for the Coordinates struct.
     * @param _x The x-coordinate value.
     * @param _y The y-coordinate value.
     */
    Coordinates(int _x, int _y) : x(_x), y(_y){};
};

#endif