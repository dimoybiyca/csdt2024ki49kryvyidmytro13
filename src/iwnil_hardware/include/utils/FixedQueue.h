#ifndef FIXEDQUEUE_H
#define FIXEDQUEUE_H

#include <deque>
#include "Coordinates.h"

class FixedQueue
{
private:
    std::deque<Coordinates> queue;
    int maxSize;

public:
    FixedQueue(int size) : queue(), maxSize(size){};

    void add(Coordinates element);
    Coordinates poll();
    void clear();
};

#endif