package ua.lpnu.lemoncat.iwnil.model;


import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import ua.lpnu.lemoncat.iwnil.data.AIType;
import ua.lpnu.lemoncat.iwnil.data.GameStatus;

@Document("saves")
@Data
@Builder
public class Save {

    @Id
    @Indexed(unique = true)
    private String id;

    @Field("firstPlayer")
    private String firstPlayer;

    @Field("secondPlayer")
    private String secondPlayer;

    @Field("nextMove")
    private Integer nextMove;

    @Field("gameStatus")
    private GameStatus gameStatus;

    @Field("aiType")
    private AIType aiType;

    @Field("board")
    private int[][] board;
}
