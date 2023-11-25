#pragma once
#ifndef STATE_MANAGER_H

#include "enum/State_Enum.h"

#define STATE_MANAGER_H

/**
 * @file
 * @brief program state manager
 *
 * Global class to manage state of program
 */
class StateManager
{
private:
    static StateManager *_stateManager; /**<static field to store himself for singleton*/
    State connectionState;              /**<state of connection to PC*/

    /**
     * @brief Construct a new State Manager object
     *
     */
    StateManager();

public:
    /**
     * @brief Get the Instance object
     *
     * Singleton pattern method to get instance of class
     * @return StateManager* single instance of class StateManager
     */
    static StateManager *getInstance();

    /**
     * @brief Get the Connection State object
     *
     * @return State current state of connection
     */
    State getConnectionState();

    /**
     * @brief Set the Connection State object
     *
     * @param connectionState state of connection with PC
     */
    void setConnectionState(State connectionState);
};

#endif