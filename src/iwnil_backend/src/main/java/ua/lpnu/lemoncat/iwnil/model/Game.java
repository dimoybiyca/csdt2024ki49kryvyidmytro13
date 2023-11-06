package ua.lpnu.lemoncat.iwnil.model;

import lombok.Builder;
import lombok.Data;
import ua.lpnu.lemoncat.iwnil.data.GameStatus;


@Data
@Builder
public class Game {
    private String firstPlayer;
    private String secondPlayer;
    private Integer nextMove;
    private GameStatus gameStatus;
    private int[][] board;
}
