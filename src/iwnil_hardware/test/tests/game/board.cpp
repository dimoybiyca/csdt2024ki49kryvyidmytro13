#include <unity.h>
#include "../../../src/game/Board.cpp"

void board_test_constructor()
{
    Board *board = new Board(10, 15);

    TEST_ASSERT_EQUAL_INT(10, board->getRows());
    TEST_ASSERT_EQUAL_INT(15, board->getCols());
    TEST_ASSERT_EQUAL_INT8(0, board->getMap()[5][5]);
    delete board;
}

void board_test_constructor_from_array()
{
    Board *board = new Board("123456789", 3, 3);

    TEST_ASSERT_EQUAL_INT(3, board->getRows());
    TEST_ASSERT_EQUAL_INT(3, board->getCols());
    TEST_ASSERT_EQUAL_INT8(1, board->getMap()[0][0]);
    TEST_ASSERT_EQUAL_INT8(2, board->getMap()[0][1]);
    TEST_ASSERT_EQUAL_INT8(3, board->getMap()[0][2]);
    TEST_ASSERT_EQUAL_INT8(4, board->getMap()[1][0]);
    TEST_ASSERT_EQUAL_INT8(5, board->getMap()[1][1]);
    TEST_ASSERT_EQUAL_INT8(6, board->getMap()[1][2]);
    TEST_ASSERT_EQUAL_INT8(7, board->getMap()[2][0]);
    TEST_ASSERT_EQUAL_INT8(8, board->getMap()[2][1]);
    TEST_ASSERT_EQUAL_INT8(9, board->getMap()[2][2]);
    delete board;
}

void board_test_resize_top()
{
    Board *board = new Board(10, 10);
    board->getMap()[0][4] = TIC;

    board->resize();
    TEST_ASSERT_EQUAL_INT(10, board->getCols());
    TEST_ASSERT_EQUAL_INT(15, board->getRows());
    TEST_ASSERT_EQUAL_INT8(0, board->getMap()[0][4]);
    TEST_ASSERT_EQUAL_INT8(TIC, board->getMap()[5][4]);
    delete board;
}

void board_test_resize_bottom()
{
    Board *board = new Board(10, 10);
    board->getMap()[9][4] = TIC;

    board->resize();
    TEST_ASSERT_EQUAL_INT(10, board->getCols());
    TEST_ASSERT_EQUAL_INT(15, board->getRows());
    TEST_ASSERT_EQUAL_INT8(TIC, board->getMap()[9][4]);
    TEST_ASSERT_EQUAL_INT8(0, board->getMap()[14][4]);
    delete board;
}

void board_test_resize_left()
{
    Board *board = new Board(10, 10);
    board->getMap()[4][0] = TIC;

    board->resize();
    TEST_ASSERT_EQUAL_INT(15, board->getCols());
    TEST_ASSERT_EQUAL_INT(10, board->getRows());
    TEST_ASSERT_EQUAL_INT8(TIC, board->getMap()[4][5]);
    TEST_ASSERT_EQUAL_INT8(0, board->getMap()[4][0]);
    delete board;
}

void board_test_resize_right()
{
    Board *board = new Board(10, 10);
    board->getMap()[4][9] = TIC;

    board->resize();
    TEST_ASSERT_EQUAL_INT(15, board->getCols());
    TEST_ASSERT_EQUAL_INT(10, board->getRows());
    TEST_ASSERT_EQUAL_INT8(TIC, board->getMap()[4][9]);
    TEST_ASSERT_EQUAL_INT8(0, board->getMap()[4][14]);
    delete board;
}

void run_test_board()
{
    RUN_TEST(board_test_constructor);
    RUN_TEST(board_test_constructor_from_array);
    RUN_TEST(board_test_resize_top);
    RUN_TEST(board_test_resize_bottom);
    RUN_TEST(board_test_resize_left);
    RUN_TEST(board_test_resize_right);
}