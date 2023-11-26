#include <unity.h>
#include "../../../src/game/Game.cpp"

void game_test_new_game()
{
    Game *game = Game::newGame("MAN", "AI", "RANDOM");

    TEST_ASSERT_NOT_NULL(game);
    TEST_ASSERT_EQUAL_STRING("MAN", game->getFirstPlayer().c_str());
    TEST_ASSERT_EQUAL_STRING("AI", game->getSecondPlayer().c_str());
    TEST_ASSERT_EQUAL_STRING("RANDOM", game->getAIType().c_str());
    TEST_ASSERT_EQUAL(10, game->getBoard()->getCols());
    TEST_ASSERT_EQUAL(10, game->getBoard()->getRows());

    delete game;
}

void game_test_change_next_player()
{
    Game game("IN_PROGRESS", "Player1", "Player2", 1, "");

    TEST_ASSERT_EQUAL_INT(1, game.getNextMove());

    game.changeNextPlayer();
    TEST_ASSERT_EQUAL_INT(2, game.getNextMove());

    game.changeNextPlayer();
    TEST_ASSERT_EQUAL_INT(1, game.getNextMove());
}

void run_test_game()
{
    RUN_TEST(game_test_new_game);
    RUN_TEST(game_test_change_next_player);
}