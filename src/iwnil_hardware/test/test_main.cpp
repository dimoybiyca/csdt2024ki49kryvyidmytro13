#include <Arduino.h>
#include <unity.h>

#include "tests/utils/coordinates.cpp"
#include "tests/state_manager.cpp"
#include "tests/game/board.cpp"
#include "tests/game/game.cpp"

int main()
{
    UNITY_BEGIN();

    run_test_state_manager();

    // Utils
    run_test_coordiantes();

    // Game
    run_test_game();
    run_test_board();

    UNITY_END();

    return 0;
}