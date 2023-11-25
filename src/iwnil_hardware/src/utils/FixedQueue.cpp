#include "utils/FixedQueue.h"

void FixedQueue::add(Coordinates element)
{
    if (queue.size() >= maxSize)
    {
        queue.pop_back();
    }
    queue.push_front(element);
}

Coordinates FixedQueue::poll()
{
    if (queue.empty())
    {
        return Coordinates(-1, -1);
    }

    Coordinates response = queue.front();
    queue.pop_front();
    return response;
}

void FixedQueue::clear()
{
    queue.clear();
}