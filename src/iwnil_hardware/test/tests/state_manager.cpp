#include <unity.h>
#include "../../src/StateManager.cpp"

void state_mamager_test_get_instance()
{
    StateManager *manager1 = StateManager::getInstance();
    StateManager *manager2 = StateManager::getInstance();

    TEST_ASSERT_EQUAL_PTR(manager1, manager2);
}

void state_mamager_test_get_set_connection_state()
{
    StateManager *manager = StateManager::getInstance();

    TEST_ASSERT_EQUAL_INT(State::DISCONNECTED, manager->getConnectionState());

    manager->setConnectionState(State::CONNECTED);
    TEST_ASSERT_EQUAL_INT(State::CONNECTED, manager->getConnectionState());

    manager->setConnectionState(State::DISCONNECTED);
    TEST_ASSERT_EQUAL_INT(State::DISCONNECTED, manager->getConnectionState());
}

void run_test_state_manager()
{
    RUN_TEST(state_mamager_test_get_instance);
    RUN_TEST(state_mamager_test_get_set_connection_state);
}