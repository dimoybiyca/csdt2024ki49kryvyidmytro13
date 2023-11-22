/**
 * @file FixedQueue.h
 * @brief Definition of the FixedQueue class.
 */

#ifndef FIXEDQUEUE_H
#define FIXEDQUEUE_H

#include <deque>
#include "Coordinates.h"

/**
 * @class FixedQueue
 * @brief A class representing a fixed-size queue of Coordinates.
 */
class FixedQueue
{
private:
    std::deque<Coordinates> queue; /**< The underlying deque storing Coordinates. */
    int maxSize;                   /**< The maximum size of the queue. */

public:
    /**
     * @brief Constructor for the FixedQueue class.
     * @param size The maximum size of the queue.
     */
    FixedQueue(int size) : queue(), maxSize(size){};

    /**
     * @brief Adds a Coordinates element to the queue.
     *
     * Remove the last element from the queue if it is full
     *
     * @param element The Coordinates element to add.
     */
    void add(Coordinates element);

    /**
     * @brief Polls and removes the front element from the queue.
     * @return The front Coordinates element of the queue.
     */
    Coordinates poll();

    /**
     * @brief Clears the contents of the queue.
     */
    void clear();
};

#endif