#pragma once

#ifndef COORDINATES_H

#define COORDINATES_H

struct Coordinates
{
    int x;
    int y;

    Coordinates(int _x, int _y) : x(_x), y(_y){};
};

#endif