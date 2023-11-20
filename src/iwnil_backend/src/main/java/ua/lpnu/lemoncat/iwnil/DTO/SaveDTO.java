package ua.lpnu.lemoncat.iwnil.DTO;

import lombok.Builder;
import ua.lpnu.lemoncat.iwnil.data.AIType;
import ua.lpnu.lemoncat.iwnil.data.GameStatus;

@Builder
public class SaveDTO {
    private String id;
    private String firstPlayer;
    private String secondPlayer;
    private Integer nextMove;
    private GameStatus gameStatus;
    private AIType aiType;
}
