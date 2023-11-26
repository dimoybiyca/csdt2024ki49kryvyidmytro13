#include <unity.h>
#include "utils/Coordinates.h"

void coordiantes_test_constructor()
{
    Coordinates coords(3, 5);
    TEST_ASSERT_EQUAL_INT(3, coords.x);
    TEST_ASSERT_EQUAL_INT(5, coords.y);
}

void coordiantes_test_redefinition_x()
{
    Coordinates coords(3, 5);
    TEST_ASSERT_EQUAL_INT(3, coords.x);
    coords.x = 10;
    TEST_ASSERT_EQUAL_INT(10, coords.x);
}

void coordiantes_test_redefinition_y()
{
    Coordinates coords(3, 5);
    TEST_ASSERT_EQUAL_INT(5, coords.y);
    coords.y = 13;
    TEST_ASSERT_EQUAL_INT(13, coords.y);
}

void coordiantes_test_redefinition_xy()
{
    Coordinates coords(3, 5);
    TEST_ASSERT_EQUAL_INT(3, coords.x);
    TEST_ASSERT_EQUAL_INT(5, coords.y);
    coords.x = 10;
    coords.y = 13;
    TEST_ASSERT_EQUAL_INT(10, coords.x);
    TEST_ASSERT_EQUAL_INT(13, coords.y);
}

void run_test_coordiantes()
{
    RUN_TEST(coordiantes_test_constructor);
    RUN_TEST(coordiantes_test_redefinition_x);
    RUN_TEST(coordiantes_test_redefinition_y);
    RUN_TEST(coordiantes_test_redefinition_xy);
}