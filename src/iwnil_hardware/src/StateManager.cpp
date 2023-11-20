#include "StateManager.h"

StateManager *StateManager::_stateManager = nullptr;

StateManager *StateManager::getInstance()
{
    if (_stateManager == nullptr)
    {
        _stateManager = new StateManager();
    }

    return _stateManager;
}

StateManager::StateManager() : connectionState(State::DISCONNECTED) {}

State StateManager::getConnectionState()
{
    return connectionState;
}
void StateManager::setConnectionState(State connectionState)
{
    this->connectionState = connectionState;
}